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
	W( "16__BBoom_BBoom__FULL", "S17", "Some series of jumps are compressed to one step (on repeated voice samples).")
	W( "16__BBoom_BBoom__FULL", "D18", "Arrows are jumping up sometimes.")

	W( "15__A_Site_De_La_Rue", ["S17", "S20", "D20", "D24"], "Arrows are blinking sometimes." )

	W( "11__Cleaner__SHORT", "S21", "Random triple jump at the end, twice.")

	W( "10__Witch_Doctor__SHORT", "S20", "Arrows accelerate a bit at the end." )

	CR( "16__Loki", ["S16", "S19", "S21", "D19"], "Excessive partial gimmicks.")
	CR( "16__Loki", "S21", "Series of long footswitches.")

	CR( "14__Break_It_Down", "D21", HAS_SOME_STOPS )
	CR( "16__Love_Scenario", ["S17", "D19"], BUILT_WITH_STOPS )
	CR( "0F__Uprock", "CZ", BUILT_WITH_STOPS )
	CR( "11__Everybody_Got_2_Know", "S19", BUILT_WITH_STOPS )

	W( "08__Come_to_Me", "S13-XX", "Ends with all arrows jump." )
	CR( "08__Come_to_Me", "S17-XX", BUILT_WITH_STOPS )
	W( "08__Come_to_Me", "S17-XX", "Ends with all arrows jump." )

	W( "10__Tek_Club_Copenhagen", ["S16", "S17"], HAS_SOME_STOPS )
	W( "14__Bad_Apple", "S15", HAS_SOME_STOPS )
	W( "07__Miss_s_Story", "S18", "Small part with tricky stops." )

	W( "0D__Gun_Rock", "CZ", "Excessive triple jumps stream at the end." )
	W( "03__Naissance", "aCZ", "Series of jumps hammering." )

	CR( "0D__Ugly_Dee", ["aFS", "aNM"], "Triple and quad holds throughout the chart." )

	W( "13__Nobody", ["S15", "D17"], HAS_SOME_STOPS )

	W( "13__Mackerel", ["S8", "S16", "D15"], HAS_SOME_STOPS )

	// fire 2ne1 - mimimi таппинг

	W( "08__Join_the_Party", "CZ", "Consists of central hold with steps around it." )
	W( "0E__Dance_Vibrations", ["aCZ", "aNM"], "Consists of central hold with steps around it." )

	CR( "02__Final_Audition", "aCZ", "Series of long footswitches." )

	CR( "15__Nakakapagpabagabag", ["S18", "D19"], "Confusing holds with steps." )
	CR( "15__Nakakapagpabagabag", ["S18", "D19"], "Gimmicky, need 6.5x or av999." )
	CR( "16__8_6", ["S16", "S20", "D18", "D21"], "Confusing holds with steps." )
	CR( "16__8_6", ["S16", "S20", "D18", "D21"], "Gimmicky, need 6.5x or av999." )
	CR( "16__8_6__FULL", ["S16", "S21", "D23"], "Confusing holds with steps." )
	CR( "16__8_6__FULL", ["S21", "D23"], "Gimmicky, need 6.5x or av999." )

	W( "15__Shub_Niggurath", "D17", "Central quad twists." )

	W( "11__Gargoyle", "S18", "Arrows stretch up to ~195 bpm at the end." )

	W( "16__Nyarlathotep", ["S18", "S21", "D20"], "Unexpected blinking holds" )
	// Hey U - jumps
	W( "14__Feel_My_Happiness", "D21", "Lots of brackets." )
	// Karyawisata S20 - slowdown
	// Moonlight S21 - slowdown
	// De La Rue  D24 - blinking holds
	// Vanish - Vanish
	// Hardkore of the North  S21 - twists on the holds with slowdown

	CR( "12__VVV", ["S18", "S23", "D16", "D19", "D24"], "Whole chart is slow, except of simple ending. Use 3-3.5x or av900+." )

	//N( "Destination  [SHORT]", "D18", "crab legs" ) //D20 - ебошащий стрим
	//N( "Pumptris (8Bit ver.)  [SHORT]", "D22", "crab legs" )

	CR( "15__Twist_of_Fate", ["S18", "D20"], "Main part has EXTREME slowdown." )
	//N( "The Festival of Ghost2 (Sneak)", [], "Lot of gimmicks" )

	CR( "0C__Jump", "D18", "Lots of sudden jumps, lower your AV significantly" )

	CR( "16__Prime_Time", "Dp24", "You may switch between easy, medium and hard parts by pressing cold, skipping or pressing heat noteskin correspondingly" )
}


initFuncs.push( AddNotes );
