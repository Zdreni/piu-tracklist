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
     [ "Passacaglia  S-20",
	   "Love is a Danger Zone (Cranky Mix)  S-20",
	   "Lucid (PIU Edit)  S-20",
       "Move That Body!  S-20",
	   "1950  S-20",
       "Karyawisata  S-20",

	   "Hypnosis (SynthWulf Mix)  S-21",
	   "Dream to Nightmare  S-21",
	   "Hardkore of the North  S-21",
	   "Windmill  S-21",
	   "Mental Rider  S-21",
       "Yog-Sothoth  S-21",
       "Robot Battle  S-21",

       "Elise  S-22",
	   "Love is a Danger Zone (Cranky Mix)  S-22",
	   "Dream to Nightmare  S-22",
	   "Achluoias  S-22",

       "Ignis Fatuus (DM Ashura Mix)  S-23",
	   "Flew Far Faster  S-23",
	   "VVV  S-23",
       //"Yog-Sothoth  S-23",
	   "1950  S-23",
     ] );

Tag( "UPF-2016-doubles",
     [ "Passacaglia  D-24",
	   "Dream to Nightmare  D-24",
	   "Love is a Danger Zone (Cranky Mix)  D-24",
	   "Flew Far Faster  D-24",
	   "Windmill  D-24",
       "Avalanche  D-24",
	   "Achluoias  D-24",

	   "Ignis Fatuus (DM Ashura Mix)  D-25",
	   "Yog-Sothoth  D-25",
       //"1950  D-25",
     ] );

Tag( "triples", [] );

/*
Tag(
[
"",
"",
	)
	*/
// AddTags( "Arirang  S-18", DRILLS + 
