"use strict";


var oldMixes = [ "Exceed", "Exceed2", "Zero", "NX", "NX2", "NXA" ];


/*
function ASSERT( condition, descr )
{
	console.assert( condition );

	if( ! condition )
	{
		console.log( descr );
		for( var i = 2;  i < arguments.length;  ++i )
			console.log( " > '" + arguments[i] + "'" );
	}
}
*/

function FindTrackInList( list, title, artist )
{
	var searchResult = _.where( list, { title: title, artist: artist } );
	if( searchResult.length === 0 )
	{
		//window.alert("Can't find another for " + title);
		return;
	}

	return searchResult[ 0 ];
}


function AddCheckTracklist( result, srcLines, srcConfig )
{
	for( var line of srcLines )
	{
		var track = {};

		track.title = line[ srcConfig.title ];
		track.artist = line[ srcConfig.artist ];
		track.bpm = line[ srcConfig.bpm ];
		track.channel = line[ srcConfig.channel ];

		var isSpecial = false;

		if( track.title.endsWith( " (2nd)" ) )
			track.title = track.title.substr(0, track.title.length - " (2nd)".length );

		if( track.title.endsWith( " (3rd)" ) )
			track.title = track.title.substr(0, track.title.length - " (3rd)".length );

		if( track.title.endsWith( " (Another)" ) )
		{
			track.title = track.title.substr(0, track.title.length - " (Another)".length );
			var originalTrack = FindTrackInList( result, track.title, track.artist );
			if( originalTrack )
				track = originalTrack;
			else
				result.push( track );
			isSpecial = true;
		}
		else
		{
			result.push( track );
		}

		if( track.channel === "Special"  ||  track.channel === "Remix" )
			isSpecial = true;

		for( var mixID of oldMixes )
		{
			var mixCol = srcConfig[ mixID ];
			if( mixCol )
			{
				var mixTag = ( isSpecial  ?  mixID + "_"  :  mixID );
				var charts = line.slice( mixCol, mixCol + 5 );
				if( JSON.stringify( charts ) != JSON.stringify( ["", "", "", "", ""] ) )
					track[ mixTag ] = charts;
			}
		}
	}
	return result;
}


function CreateCheckTracklist( srcLines, srcConfig )
{
	var result = [];
	AddCheckTracklist( result, srcLines, srcConfig );
	return result;
}


function FindTrackIfAny( tracklist, title, artist )
{
	var result = _.filter( tracklist, function( item )
		{
			return Normalized( item.title ) === Normalized( title )  &&  item.artist   &&  ( ! artist  ||  Normalized( item.artist ) == Normalized( artist ) );
		} );
	if( result.length > 1 )
	{
		window.alert("Too much tracks '" + title + "'");
		return;
	}
	return result[ 0 ];
}

function ProcessedSrcMixCharts( charts )
{
	if( ! charts )
		return charts;

	charts = JSON.parse( JSON.stringify( charts ) );
	for( var i = 0;  i < charts.length;  ++i )
	{
		//charts[ i ] = charts[ i ].replace( "(x2)", "" ).replace( "(x3)", "" );
		var coopRegex = /(.*)(\(x\d\))/;
		var coopFound = charts[ i ].match( coopRegex );
		if( coopFound )
			charts[ i ] = coopFound[ 1 ];


		var estimRegex = /(.*)(\(\d+\))/;
		var estimFound = charts[ i ] .match( estimRegex );
		if( estimFound )
			charts[ i ] = estimFound[ 1 ];

		//charts[ i ] = charts[ i ].replace( coopRegex, )
	}
	return charts;
}


function CheckTracklist( tracklist, checkTracklist, config )
{
	for( var checkTrack of checkTracklist )
	{
		var track = FindTrackIfAny( tracklist, checkTrack.title, checkTrack.artist );
		if( ! track )
		{
			console.log( "'" + Normalized( checkTrack.title ) + "' / '" + Normalized( checkTrack.artist ) + "'  can't be found in tracklist:" );
			console.log( "- - title: \"" + checkTrack.title + "\", artist: \"" + checkTrack.artist + "\", channel: " + checkTrack.channel + ", bpm: \"" + checkTrack.bpm + "\", duration: REMIX/FULL," );
			for( var mixID of oldMixes )
			{
				if( ! config[ mixID ] )
					continue;

				if( checkTrack[ mixID ] )
					console.log( "- - " + mixID + ": " + JSON.stringify( checkTrack[ mixID ] ) + "," );
				if( checkTrack[ mixID + "_" ] )
					console.log( "- - " + mixID + "_: " + JSON.stringify( checkTrack[ mixID + "_" ] ) + "," );
			}
			continue;
		}

		for( var mixID of oldMixes )
		{
			if( ! config[ mixID ] )
				continue;

			var srcTag = mixID;
			var checkTag = srcTag;

			if( JSON.stringify( checkTrack[ checkTag ] ) != JSON.stringify( ProcessedSrcMixCharts( track[ srcTag ] ) ) )
			{
				console.log( "'" + checkTrack.title + "'  differs from check list:" );
				console.log( "- -  list is  " + srcTag + ": " + JSON.stringify( track[ srcTag ] ) + "," );
				console.log( "- - check is  " + checkTag + ": " + JSON.stringify( checkTrack[ checkTag ] ) + "," );
			}

			srcTag = mixID + "_";
			checkTag = srcTag;

			if( JSON.stringify( checkTrack[ checkTag ] ) != JSON.stringify( ProcessedSrcMixCharts( track[ srcTag ] ) ) )
			{
				console.log( "'" + checkTrack.title + "'  differs from check list:" );
				console.log( "- -  list is  " + srcTag + ": " + JSON.stringify( track[ srcTag ] ) + "," );
				console.log( "- - check is  " + checkTag + ": " + JSON.stringify( checkTrack[ checkTag ] ) + "," );
			}
		}
	}
}


function Check( srcList, config )
{
	var checkTracklist = CreateCheckTracklist( srcList, config );
	CheckTracklist( readableTracklist, checkTracklist, config );
}
