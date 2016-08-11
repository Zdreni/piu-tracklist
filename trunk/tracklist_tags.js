"use strict";

function AddTags( chart, tags )
{
}

/*	
function FindChart( track, chartText )
{
	for( var chart of track[ mixID ] )
		if( chart.text === chartText )
			return chart;
}
*/


function Tag( fullChartDescr, tag )
{
	var chart_Match = fullChartDescr.match( "(.*)  (.*)-(.*)" );
	if( ! chart_Match )
		console.log( "Can't parse chart " + fullChartDescr );

	var trackTitle = chart_Match[ 1 ];
	var chartTag = chart_Match[ 2 ];
	var chartLevelText = chart_Match[ 3 ];

	var track = FindTrack( tracklist, trackTitle );
	console.assert( track );

	var shared = FindChartSharedNew( track, chartTag, chartLevelText );
	console.assert( shared );
	if( ! shared.tags )
		shared.tags = tag;
	else
		shared.tags += " " + tag;
}

Tag( "Arirang  S-18", "UPF-2016" );

/*
Tag(
[
"",
"",
	)
	*/
// AddTags( "Arirang  S-18", DRILLS + 
