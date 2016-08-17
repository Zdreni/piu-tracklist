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


function Tag( tag, fullChartDescr )
{
	if( Array.isArray( fullChartDescr ) )
	{
		for( var item of fullChartDescr )
			Tag( tag, item );
		return;
	}

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

Tag( "UPF-2016-singles",
     [ "1950  S-20",
       "Karyawisata  S-20",
       "Move That Body!  S-20",
       "Yog-Sothoth  S-21",
       "Robot Battle  S-21",
       "Achluoias  S-22",
       "1950  S-23",
       "Yog-Sothoth  S-23" ] );

Tag( "UPF-2016-doubles",
     [ "Achluoias  D-24",
       "Avalanche  D-24",
       "1950  D-25",
       "Yog-Sothoth  D-25" ] );

Tag( "triples", [] );

/*
Tag(
[
"",
"",
	)
	*/
// AddTags( "Arirang  S-18", DRILLS + 
