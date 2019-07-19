"use strict";

function Note( trackName, chartDescrs, kind, noteText )
{
	if( ! Array.isArray( chartDescrs ) )
		chartDescrs = [ chartDescrs ];

	var track = FindTrack( tracklist, trackName );
	for( var chartDescr of chartDescrs )
	{
		var chart = FindChart( track, chartDescr );
		if( ! chart.shared.notes )
			chart.shared.notes = [];

		var note = {};
		note[ kind ] = noteText;
		chart.shared.notes.push( note );
	}
}


function W( trackName, chartDescrs, noteText )
{
	Note( trackName, chartDescrs, "warn", noteText )
}


function CR( trackName, chartDescrs, noteText )
{
	Note( trackName, chartDescrs, "crit", noteText )
}

var BUILT_WITH_STOPS = "Whole chart is tricky stops.";
var HAS_SOME_STOPS = "Some parts of chart are tricky stops.";


function AddNotes()
{
	W( "Bboom Bboom  [FULL]", "S17", "Some series of jumps are compressed to one step (on repeated voice samples).")
	W( "Bboom Bboom  [FULL]", "D18", "Arrows are jumping up sometimes.")

	W( "A Site De La Rue", ["S17", "S20", "D20", "D24"], "Arrows are blinking sometimes." )

	W( "Cleaner  [SHORT]", "S21", "Random triple jump at the end, twice.")

	W( "Witch Doctor  [SHORT]", "S20", "Arrows accelerate a bit at the end." )

	CR( "Loki", ["S16", "S19", "S21", "D19"], "Excessive partial gimmicks.")
	CR( "Loki", "S21", "Series of long footswitches.")

	CR( "Love Scenario", "S17", BUILT_WITH_STOPS )
	CR( "Uprock", "CZ", BUILT_WITH_STOPS )
	CR( "Everybody Got 2 Know", "S19", BUILT_WITH_STOPS )

	W( "Come to Me @ 826", "S13.XX", "Ends with all arrows jump." )
	CR( "Come to Me @ 826", "S17.XX", BUILT_WITH_STOPS )
	W( "Come to Me @ 826", "S17.XX", "Ends with all arrows jump." )

	W( "Tek -Club Copenhagen-", ["S16", "S17"], HAS_SOME_STOPS )
	W( "Bad Apple!! feat. Nomico", "S15", HAS_SOME_STOPS )
	W( "Miss's Story", "S18", "Small part with tricky stops." )

	W( "Gun Rock", "CZ", "Excessive triple jumps stream at the end." )
	W( "Naissance", "aCZ", "Series of jumps hammering." )

	CR( "Ugly Dee", ["aFS", "aNM"], "Triple and quad holds throughout the chart." )

	W( "Nobody", ["S15", "D17"], HAS_SOME_STOPS )

	// fire 2ne1 - mimimi таппинг

	W( "Join the Party", "CZ", "Consists of central hold with steps around it." )
	W( "Dance Vibrations", ["aCZ", "aNM"], "Consists of central hold with steps around it." )

	CR( "Final Audition", "aCZ", "Series of long footswitches." )

	CR( "Nakakapagpabagabag", ["S18", "D19"], "Confusing holds with steps." )
	CR( "Nakakapagpabagabag", ["S18", "D19"], "Gimmicky, need 6.5x or av999." )
	CR( "8 6", ["S16", "S20", "D18", "D21"], "Confusing holds with steps." )
	CR( "8 6", ["S16", "S20", "D18", "D21"], "Gimmicky, need 6.5x or av999." )
	CR( "8 6  [FULL]", ["S16", "S21", "D23"], "Confusing holds with steps." )
	CR( "8 6  [FULL]", ["S21", "D23"], "Gimmicky, need 6.5x or av999." )

	W( "Shub Niggurath", "D17", "Central quad twists." )

	W( "Gargoyle", "S18", "Arrows stretch up to ~195 bpm at the end." )

	W( "Nyarlathotep", ["S18", "S21", "D20"], "Unexpected blinking holds" )
	// Hey U - jumps
	W( "Feel My Happiness", "D21", "Lots of brackets." )
	// Karyawisata S20 - slowdown
	// Moonlight S21 - slowdown
	// De La Rue  D24 - blinking holds
	// Vanish - Vanish
	// Hardkore of the North  S21 - twists on the holds with slowdown

	CR( "VVV", ["S18", "S23", "D16", "D19", "D24"], "Whole chart is slow, except of simple ending. Use 3-3.5x or av900+." )

	//N( "Destination  [SHORT]", "D18", "crab legs" ) //D20 - ебошащий стрим
	//N( "Pumptris (8Bit ver.)  [SHORT]", "D22", "crab legs" )

	CR( "Twist of Fate (feat. Ruriling)", ["S18", "D20"], "Main part has EXTREME slowdown." )
	//N( "The Festival of Ghost2 (Sneak)", [], "Lot of gimmicks" )

	CR( "Jump", ["D18"], "Lots of sudden jumps, lower your AV significantly")
}


initFuncs.push( AddNotes );
