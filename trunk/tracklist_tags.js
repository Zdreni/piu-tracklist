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


function Tag( fullChartDescr, tags )
{
	var splits = fullChartDescr.split( "  " );
	var chartDescr = splits.pop();
	var trackTitle = splits.join( "  " );
	var track = FindTrack( tracklist, trackTitle );
	console.assert( track );

	var chart = FindChart( track, chartDescr );
	//console.assert( chart );
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
