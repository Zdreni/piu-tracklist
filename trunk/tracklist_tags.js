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
	{
		window.alert( "Can't parse chart '" + fullChartDescr + "'" );
		return;
	}

	var trackTitle = chart_Match[ 1 ];
	var chartTag = chart_Match[ 2 ];
	var chartLevelText = chart_Match[ 3 ];

	var track = FindTrack( tracklist, trackTitle );
	if( ! track )
	{
		window.alert( "Can't find track '" + trackTitle + "'" );
		return;
	}

	var shared = FindChartSharedNew( track, chartTag, chartLevelText );
	console.assert( shared );
	if( ! shared.tags )
		shared.tags = tag;
	else
		shared.tags += " " + tag;
}

/*
Tag( "IPF-2016-singles",
	[
		"Passacaglia  S-20",
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

Tag( "IPF-2016-doubles",
	[
		"Passacaglia  D-24",
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
*/

Tag( "Drills",
	[
	] )

Tag( "Bursts",
	[
	] )

Tag( "Streams",
	[
	] )

Tag( "Tricky_stops",
	[
		"Bad Apple!! feat. Nomico  S-15",
		"Everybody Got 2 Know  S-19",
		"NoNoNo  Sp-15",
		"NoNoNo  Dp-15",
		"Red Swan  Dp-20",
		"Uprock  S-17",
	] )

Tag( "M-runs",
	[
		"Mr. Larpus  S-22",
		"Dignity  S-22",
	] )

Tag( "brackets",
	[
		"1950  D-21",
		"1950  D-25",
		"1950  S-25",
		"Achluoias  D-24",
		"Achluoias  S-24",
		"Avalanche  D-24",
		"Avalanche  S-22",
		"Bad &infin; End &infin; Night  D-23",
		"BanYa-P Guitar Remix  D-24",
		"BanYa-P Guitar Remix  S-22",
		"Beat the Ghost  S-18",
		"Chicken Wing  S-21",
		"Chicken Wing  S-22",
		"Chicken Wing  D-23",
		"Cleaner  D-26",
		"Cleaner  [SHORT]  D-20",
		"Crashday  D-26",
		"Creed -1st Desire-  D-23",
		"Creed -1st Desire-  S-21",
		"Dawn of the Apocalypse  S-21",
		"Dream to Nightmare  D-22",
		"Dream to Nightmare  D-24",
		"Dream to Nightmare  S-19",
		"Dream to Nightmare  S-22",
		"Elise  D-23",
		"Enhanced Reality  D-20",
		"Exceed 2 Opening  D-19",
		"Final Audition episode 1  D-23",
		"Hi-Bi  D-20",
		"Houkago Stride  D-21",
		"Hyacinth  D-19",
		"Hyacinth  D-23",
		"Hypnosis (SynthWulf Mix)  D-20",
		"Ignis Fatuus (DM Ashura Mix)  D-25",
		"Ignis Fatuus (DM Ashura Mix)  [SHORT]  D-21",
		"Just Hold On (To All Fighters)  D-25",
		"Leakage Voltage  D-20",
		"Leakage Voltage  D-22",
		"Lucid (PIU Edit)  D-23",
		"Mad5cience  S-20",
		"Mental Rider  D-23",
		"Meteorize  S-17",
		"Monkey Fingers 2  D-19",
		"Napalm  D-23",
		"Passacaglia  D-22",
		"Red Swan  D-20",
		"Red Swan  D-21",
		"Slam  S-18",
		"Stardust Overdrive  D-24",
		"Switchback  D-18",
		"The Revolution  D-22",
		//?"Turkey March  D-19",
		"Vacuum Cleaner  S-25",
		"Video Out C  S-22",
		"What Do You Really Want?  S-19",
		"What Happened  D-20",
		"What Happened  D-23",
		"Windmill  D-24",
		"Witch Doctor #1  D-19",
		"X-Rave  S-17",
		"Yog-Sothoth  D-25",
	] )

/*
Tag( "slowdowns",
	[
		"",
		"",
		"",
		"",
		"",
		"",
		"Moonlight  S-19",
		"Moonlight  D-21",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
		"",
	] );
*/

Tag( "bruteforce",
	[
		"Chimera  S-23",
		"Dignity  [FULL]  S-19",
		"Dignity  S-22",
		"Hi-Bi  S-18",
		"Love is a Danger Zone  S-19",
		"Mr. Larpus  S-22",
		"Trato De No Trabarme  [FULL]  S-22",
	] );


Tag( "extreme-twists",
	[
		"Love is a Danger Zone 2  D-23",
		"Love is a Danger Zone (Cranky Mix)  S-19",
		"Love is a Danger Zone (Cranky Mix)  S-22",
	] );


Tag( "quads",
	[
	] );

Tag( "lol",
	[
		"VVV  D-16",
		"Destination  [SHORT]  D-18",
		"Final Audition  S-15",
		"Pumptris (8Bit)  D-22",
	])
/*
Tag(
[
"",
"",
	)
	*/
// AddTags( "Arirang  S-18", DRILLS +
