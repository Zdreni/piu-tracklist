"use strict";


import {
	ORIGINAL, KPOP, WORLD, JMUSIC, XROSS, RISE,
} from './constants.js';

import { mixes } from './mixes.js';
import { GetTrackFirstMix } from './tracklist.js';


// Channels order on arcade track selection.
// Before XX, there was also "new tunes" channel in front of everything, it contains tracks of the current mix,
//   so it can't be expressed as a global order and must be handled by the app itself.
// Rise is not sorted together with arcade tracks, so it's just placed at the end.
const preXXChannelsOrder = [ ORIGINAL, KPOP, WORLD, JMUSIC, XROSS, RISE ];
const xxChannelsOrder    = [ KPOP, ORIGINAL, WORLD, JMUSIC, XROSS, RISE ];

const allMixesOrder = Object.keys( mixes );  // includes mixes before Exceed


function ChannelSortOrder( track, channelsOrder )
{
	var index = channelsOrder.indexOf( track.channel );
	return index >= 0  ?  index  :  channelsOrder.length;  // unknown channels (like "TODO") go to the end
}


// series of track, like "14" for Prime
function TrackIDGroup( track )
{
	return track.sortingID.substring( 0, 2 );
}


function TrackFromMixIndex( track )
{
	var index = allMixesOrder.indexOf( GetTrackFirstMix( track ) );
	if( index < 0 )
		throw new Error( `Can't determine first mix of track '${ track.id }'` );
	return index;
}


function CompareStrings( s1, s2 )
{
	return s1 < s2  ?  -1  :  ( s1 > s2  ?  1  :  0 );
}


// high-level sorting is by channel, then newer mixes first, then newer series first, then by sorting ID
function CompareTracksSortOrder( t1, t2, channelsOrder )
{
	var                 result = ChannelSortOrder( t1, channelsOrder ) - ChannelSortOrder( t2, channelsOrder );
	if( result === 0 )  result = TrackFromMixIndex( t2 ) - TrackFromMixIndex( t1 );
	if( result === 0 )  result = CompareStrings( TrackIDGroup( t2 ), TrackIDGroup( t1 ) );
	if( result === 0 )  result = CompareStrings( t1.sortingID, t2.sortingID );
	return result;
}


function AssignOrder( tracklist, fieldName, channelsOrder )
{
	var tracks = Object.values( tracklist );
	tracks.sort( ( t1, t2 ) => CompareTracksSortOrder( t1, t2, channelsOrder ) );
	tracks.forEach( ( track, i ) => track[ fieldName ] = i + 1 );
}


// Adds preXXOrder and xxOrder fields to each track, which are track positions in global arcade sorting.
// To get position within some category (mix, level etc), filter tracks and sort them by this field.
export function ApplyArcadeOrder( tracklist )
{
	AssignOrder( tracklist, "preXXOrder", preXXChannelsOrder );
	AssignOrder( tracklist, "xxOrder", xxChannelsOrder );
}
