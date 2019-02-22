"use strict";

function N( trackName, chartDescrs, note )
{
	if( ! Array.isArray( chartDescrs ) )
		chartDescrs = [ chartDescrs ];

	var track = FindTrack( tracklist, trackName );
	for( var chartDescr of chartDescrs )
	{
		var chart = FindChart( track, chartDescr );
		if( ! chart.shared.notes )
			chart.shared.notes = [];
		chart.shared.notes.push( note );
	}
}


var BUILT_WITH_STOPS = "Whole chart is tricky stops";
var HAS_SOME_STOPS = "Some parts of chart are tricky stops";


function AddNotes()
{
	N( "Love Scenario", "S17", BUILT_WITH_STOPS )
	N( "Uprock", "CZ", BUILT_WITH_STOPS )
	N( "Everybody Got 2 Know", "S19", BUILT_WITH_STOPS )
	N( "Come to Me @ 826", "S17", BUILT_WITH_STOPS )

	N( "Tek -Club Copenhagen-", ["S16", "S17"], HAS_SOME_STOPS )
	N( "Bad Apple!! feat. Nomico", "S15", HAS_SOME_STOPS )
	N( "Miss's Story", "S18", "Small part with tricky stops" )

	N( "Gun Rock", "CZ", "Extreme triples streams at the end" )
	// naissance acz - jumps whole chart

	// ugly dee - даблы холды

	N( "Join the Party", "CZ", "central hold + steps" )
	N( "Dance Vibrations", ["aCZ", "aNM"], "central hold + steps" )

	// nobody какой-то там - стопы
	// fire 2ne1 - mimimi таппинг

	N( "Final Audition", "aCZ", "footswitches" )

	N( "Nakakapagpabagabag", ["S18", "D19"], "holds with steps, stumble charts, needs 6.5x or av999" )
	N( "86", ["S16", "S20", "D18", "D21"], "holds with steps, stumble charts, needs 6.5x or av999" )

	N( "Shub Niggurath", "D17", "twist on central quad" )

	// Hey U - jumps
	N( "Feel My Happiness", "D21", "lots of brackets" )
	// Karyawisata S20 - slowdown
	// Moonlight S21 - slowdown
	// De La Rue  D24 - blinking holds
	// Vanish - Vanish
	// Hardkore of the North  S21 - twists on the holds with slowdown

	N( "VVV", ["S18", "S23", "D16", "D19", "D24"], "Whole chart is slow except of simple ending, use 3-3.5x or av900+" )

	N( "Destination  [SHORT]", "D18", "crab legs" ) //D20 - ебошащий стрим
	N( "Pumptris (8Bit ver.)  [SHORT]", "D22", "crab legs" )

	N( "Twist of Fate (feat. Ruriling)", ["S18", "D20"], "Main part has EXTREME slowdown" )
	//N( "The Festival of Ghost2 (Sneak)", [], "Lot of gimmicks" )
}


initFuncs.push( AddNotes );
