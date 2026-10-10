"use strict";


import {
	ORIGINAL, KPOP, WORLD, JMUSIC, XROSS, RISE,
} from './constants.js';

import { mixes, mixesOrder, firstNewMixIndex } from './mixes.js';
import { GetTrackFirstMix } from './tracklist.js';


// Channels order on arcade track selection.
// Before XX, there was also "new tunes" channel in front of everything, it contains tracks of the current mix,
//   so it can't be expressed as a global order and must be handled by the app itself.
// Rise is not sorted together with arcade tracks, so it's just placed at the end.
const preXXChannelsOrder = [ ORIGINAL, KPOP, WORLD, JMUSIC, XROSS ];
const xxChannelsOrder    = [ KPOP, ORIGINAL, WORLD, JMUSIC, XROSS, RISE ];

const allMixesOrder = Object.keys( mixes );  // includes mixes before Exceed
const xxMixIndex = allMixesOrder.indexOf( "XX" );


function MixChannelsOrder( mixID )
{
	return allMixesOrder.indexOf( mixID ) >= xxMixIndex  ?  xxChannelsOrder  :  preXXChannelsOrder;
}


// value of track field in the given mix, taking into account 'changes' (like XX: { channel: WORLD }) of this mix or earlier ones
// changes keys are already normalized to 'Mix@version' form
function TrackFieldInMix( track, fieldName, lastMixID, defaultValue )
{
	if( ! track.changes )
		return defaultValue;

	var lastMixIndex = allMixesOrder.indexOf( lastMixID );
	for( var mixID of allMixesOrder.slice( 0, lastMixIndex + 1 ).reverse() )
	{
		var mixChangeKeys = Object.keys( track.changes ).filter( k => k.split( "@" )[ 0 ] === mixID );
		mixChangeKeys.sort( ( k1, k2 ) => mixes[ mixID ].patches.indexOf( k2.split( "@" )[ 1 ] ) - mixes[ mixID ].patches.indexOf( k1.split( "@" )[ 1 ] ) );
		for( var key of mixChangeKeys )
			if( fieldName in track.changes[ key ] )
				return track.changes[ key ][ fieldName ];
	}

	return defaultValue;
}


function ChannelSortOrder( track, mixID )
{
	var channelsOrder = MixChannelsOrder( mixID );
	var index = channelsOrder.indexOf( TrackFieldInMix( track, "channel", mixID, track.channel ) );
	return index >= 0  ?  index  :  channelsOrder.length;  // unknown channels (like "TODO") go to the end
}


// series of track, like "14" for Prime
function TrackIDGroup( track )
{
	return track.sortingID.substring( 0, 2 );
}


function TrackFromMixIndex( track, mixID )
{
	var fromMixID = TrackFieldInMix( track, "fromMix", mixID, GetTrackFirstMix( track ) );
	var index = allMixesOrder.indexOf( fromMixID );
	if( index < 0 )
		throw new Error( `Can't determine first mix of track '${ track.id }' (got '${ fromMixID }')` );
	return index;
}


function CompareStrings( s1, s2 )
{
	return s1 < s2  ?  -1  :  ( s1 > s2  ?  1  :  0 );
}


// high-level sorting is by channel (as it is in given mix), then newer mixes first, then newer series first, then by sorting ID
function CompareTracksSortOrder( t1, t2, mixID )
{
	var                 result = ChannelSortOrder( t1, mixID ) - ChannelSortOrder( t2, mixID );
	if( result === 0 )  result = TrackFromMixIndex( t2, mixID ) - TrackFromMixIndex( t1, mixID );
	if( result === 0 )  result = CompareStrings( TrackIDGroup( t2 ), TrackIDGroup( t1 ) );
	if( result === 0 )  result = CompareStrings( t1.sortingID, t2.sortingID );
	return result;
}


// returns dictionary of track ID -> track position in arcade sorting of given mix
export function GetMixTracksOrder( tracklist, mixID )
{
	var tracks = Object.values( tracklist );
	tracks.sort( ( t1, t2 ) => CompareTracksSortOrder( t1, t2, mixID ) );

	var result = {};
	tracks.forEach( ( track, i ) => result[ track.id ] = i + 1 );
	return result;
}


const arcadeOrderMixes = mixesOrder.slice( firstNewMixIndex );  // Fiesta..Phoenix2


// Adds arcadeOrder dictionary to each track, which contains track position in arcade sorting for each mix, where track is present.
// To get position within some category (mix, level etc), filter tracks and sort them by this field.
export function ApplyArcadeOrder( tracklist )
{
	for( var mixID of arcadeOrderMixes )
	{
		var order = GetMixTracksOrder( tracklist, mixID );
		for( var trackID in tracklist )
		{
			var track = tracklist[ trackID ];
			if( ! track.charts[ mixID ] )
				continue;
			if( ! track.arcadeOrder )
				track.arcadeOrder = {};
			track.arcadeOrder[ mixID ] = order[ trackID ];
		}
	}
}
