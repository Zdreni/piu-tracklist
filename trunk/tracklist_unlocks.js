//Source: http://www.gamefaqs.com/arcade/926455-pump-it-up-exceed-2/cheats
/*
Canon-D  [FULL] in Exceed2, permanently - enter code '7979 1313 7171 9393 1937 1937'
Solitary 2 *.Exceed2 - enter code '1951 3753 5'
Monkey Fingers, Oh Rosa (spanish) and First Love (spanish) permanently - enter code '99 17397 99'
Play Raw	Achieve the score of "S" all REMIX songs in REMIX station.
2nd Hidden Remix NM	Pass Diva Remix on FREESTYLE with an S
Canon-D nightmare	A any 2 songs, and play Il Give You All My Love as your 3rd song on crazy. You must not only get an A, but also get less than 10 misses
Banya Classic Remix NM	Pass Deux Remix on FREESTYLE with an S
Dignity Remix CZ	Pass Banya Classic Remix on HARD difficulty with an S ranking (full combo)
Treme Vook of the War Another Step	Pass Treme Vook of the War on CRAZY with an A
Turbo Remix NM	Pass Diva Remix on CRAZY with an S, no goods or bads
*/
/*
NX:

Final Audition 2-2 CZ.NX - play 2-1 200 times or spent 10,000 credits


NX2:

<special zone unlocks>


NXA:
	Trato de no Trabarme
	Dawn of the Apocalypse
	Do It!
	2-X
*/

var currentMixID;
var currentMixUnlockPatchIndex;

function ReadPatchIndex( tillPatch )
{
	if( ! tillPatch )
		return;

	if( ! tillPatch.startsWith( '..@' ) )
		throw "Invalid tillPatch '" + tillPatch + "'";

	var patch = tillPatch.substring( 3 );
	patchIndex = mixes[ currentMixID ].patches.indexOf( patch );
	if( patchIndex < 0 )
		throw "Invalid patch " + patch;

	return patchIndex;
}

function On( mixID, tillPatch )
{
	// tempCurrentMix = mixID
	// tempUnlockPatch = ReadPatch( tillPatch )
	currentMixID = mixID;
	currentMixUnlockPatchIndex = ReadPatchIndex( tillPatch );
}

function FindChartForLock( track, mixID, chartText )
{
	if( ! track[ mixID ] )
		throw "No '" + mixID + "' data for '" + track.title + "'";

	for( var chart of track[ mixID ] )
		if( chart.text === chartText )
			return chart;

	throw "Can't find " + track.title + "  " + chartText;
}

function Lock( trackTitle, charts, description, tillPatch )
{
	if( ! description )
		description = "locked";

	// find chart
	var track = FindTrack( tracklist, trackTitle );
	var chartSplits = charts.split( ", " );

	for( var chartText of chartSplits )
	{
		var chart = FindChartForLock( track, currentMixID, chartText );
		if( chart.unlockDescr )
			throw "Duplicate unlock description for " + track.title + "  " + chartText;
		chart.unlockDescr = description;

		if( tillPatch )
			chart.unlockPatchIndex = ReadPatchIndex( tillPatch );
		else if( currentMixUnlockPatchIndex )
			chart.unlockPatchIndex = currentMixUnlockPatchIndex;
	}
}

/*
var PUMBI = "pumbi unlock";

On( "Fiesta" )
	Lock( "Arirang  S22", PUMBI );
	Lock( "Big Beat  S15", PUMBI );
	Lock( "Phantom -Intermezzo-  S21", PUMBI );
	Lock( "Sorceress Elise  D24", PUMBI );
	Lock( "U Got 2 Know  S18", "old S17, died in 1.05, ", PUMBI );
	Lock( "Vacuum  S23", PUMBI );
	Lock( "Wanna  S16", PUMBI );
	Lock( "X-Tree  D18", PUMBI + ", from music train" );

	Lock(                       "Enjoy Enjoy  S14", PUMBI + " (II level reward - 120.000 EXP)" );
	Lock(                   "Deja Vu  [FULL]  S16", PUMBI + " (III level reward - 480.000 EXP)" );
	Lock(                        "NX opening  S16", PUMBI + " (IV level reward - 1.080.000 EXP)" );
	Lock(                       "Pro pop mix  S17", PUMBI + " (V level reward - 1.920.000 EXP)" );
	Lock(               "Pump it up with you  D17", PUMBI + " (VI level reward - 3.000.000 EXP)" );
	Lock(                   "msgoon RMX pt.5  S17", PUMBI + " (VII level reward - 4.320.000 EXP)" );
	Lock(              "B.P. Classic remix 2  S18", PUMBI + " (VIII level reward - 5.880.000 EXP)" );
	Lock(                      "U got 2 know  S18", PUMBI + " (IX level reward - 7.680.000 EXP)" );
	Lock( "Narcisista por excelencia  [FULL]  D18", PUMBI + " (X level reward - 9.720.000 EXP)" );
	Lock(                "B.P. Classic remix  S18", PUMBI + " (XI level reward - 12.000.000 EXP)" );
	Lock(             "Witch doctor  [SHORT]  S20", PUMBI + " (XII level reward - 14.520.000 EXP)" );
	Lock(               "Solitary 2  [SHORT]  S18", PUMBI + " (XIII level reward - 17.280.000 EXP)" );
	Lock(                   "Papa Helloizing  S19", PUMBI + " (XIV level reward - 20.280.000 EXP)" );
	Lock(    "Love is a danger zone  [SHORT]  S20", PUMBI + " (XV level reward - 23.520.000 EXP)" );
	Lock(                   "msgoon RMX pt.6  S20", PUMBI + " (XVI level reward - 27.000.000 EXP)" );
	Lock(                "Moonlight  [SHORT]  D20", PUMBI + " (XVII level reward)" );
	Lock(              "Phantom -Intermezzo-  D20", PUMBI + " (XVIII level reward), from music train" );

	Lock(                            "Fire  S15", PUMBI + " (10 battles won), from music train" );
	Lock(       "Final audition 2  [SHORT]  S16", PUMBI + " (20 battles won)" );
	Lock(                 "Winter  [SHORT]  D17", PUMBI + " (30 battles won)" );
	Lock(       "Final audition 3  [SHORT]  S17", PUMBI + " (40 battles won)" );
	Lock(                    "KOA  [SHORT]  D18", PUMBI + " (50 battles won)" );
	Lock( "Final audition ep. 2-x  [SHORT]  S20", PUMBI + " (60 battles won)" );
	Lock( "Exceed opening D??", PUMBI + " (70 battles won)" ); // RAW

	Lock(               "Hard core rock mix  S21" );
	Lock(                  "msgoon RMX pt.5  D17" );
	Lock(                  "msgoon RMX pt.6  D19" );
	Lock(                  "msgoon RMX pt.7  S17" );
	Lock(   "Dawn of the apocalypse  [FULL]  S21" );
	Lock(                  "Bemera  [SHORT]  S21" );
	Lock(             "Chiken wing  [SHORT]  S20" );
	Lock(             "Destination  [SHORT]  D18" );
	Lock(        "Final audition 2  [SHORT]  D17" );
	Lock( "Love is a danger zone 2  [SHORT]  D21" );
	Lock(               "Moonlight  [SHORT]  S18" );

	Lock( "Procedimientos para llegar a un comun acuerdo  [SHORT]  S18" );
	Lock( "Pumptris 8 bit  [SHORT]  D22" );
*/

/*
Fiesta unlocks:

-Pumping Jumping S19


Level reward


Battle won
*/

/*
On( "FiestaEX", "..@1.50" )
	Lock( "Cleaner  S23", PUMBI + " (56.000PP)" );
	Lock( "Destination  S19", PUMBI + " (36.000PP)" );
	Lock( "Innocent  S14", PUMBI + " (33.000PP)" );
	Lock( "Interference  [FULL]  S18", PUMBI + " (60.000PP)" );
	Lock( "Last Farewell  S17", PUMBI + " (38.000PP)" );
	Lock( "Magic Girl  D21", PUMBI + " (42.000PP)" );
	Lock( "Necromancy  S20", PUMBI + " (58.000PP)" );
	Lock( "Reality  S17", PUMBI + " (32.000PP)" );
	Lock( "Take Out  D22", PUMBI + " (48.000PP)" );
	Lock( "To the Sky  S15", PUMBI + " (30.000PP)" );
	Lock( "We Got 2 Know  S20", PUMBI + " (40.000PP)" );
*/

/*
On( "Fiesta2", "..@1.60" )
	Lock( "Ladybug  Dp??(x2)", "Pumbi, 50 missions, ssmax" );
	Lock( "Virtual Emotion  Dp??(x2)", "Pumbi, 100 missions, v.kim" );
	Lock( "Heel and Toe  Dp??(x2)", "Pumbi, 150 missions, cashew" );
	Lock( "Be Alive (Raaban Inc. Mix)  Dp??(x2)", "Pumbi, 200 missions, mercenary" );
	Lock( "Tribe Attacker  Dp??(x4)", "Pumbi, 250 missions, Pitii" );

	Lock( "Rippin' It Up  D4", "Pumbi, level 2" );
	Lock( "Heel and Toe  D11", "Pumbi, level 3" );
	Lock( "Rainspark  D5", "Pumbi, level 4" );
	Lock( "Monolith  D13", "Pumbi, level 5" );
	Lock( "Be Alive (Raaban Inc. Mix)  D10", "Pumbi, level 6" );
	Lock( "Star Command  D14", "Pumbi, level 7" );
	Lock( "Switchback  D10", "Pumbi, level 8" );
	Lock( "Ladybug  S13", "Pumbi, level 9" );
	Lock( "Tribe Attacker  D10", "Pumbi, level 10" );
	Lock( "Shanghai Romance  D17", "Pumbi, level 15, from music train" );
	Lock( "Ladybug  D13", "Pumbi, level 20" );
	Lock( "Switchback  S15", "Pumbi, level 25" );
	Lock( "Tribe Attacker  D15", "Pumbi, level 30" );
	Lock( "Virtual Emotion  S17", "Pumbi, level 35" );
	Lock( "Rainspark  S15", "Pumbi, level 40" );
	Lock( "Star Command  S15", "Pumbi, level 45" );
	Lock( "Tribe Attacker  S16", "Pumbi, level 50" );
	Lock( "Hardkore of the North  S21", "Pumbi, level 55" );
	Lock( "Switchback  D18", "Pumbi, level 57" );
	Lock( "Rippin' It Up  S16", "Pumbi, level 60" );
	Lock( "Hardkore of the North  D16", "Pumbi, level 65" );
	Lock( "Switchback  D16", "Pumbi, level 70" );
	Lock( "Rainspark  D17", "Pumbi, level 75" );
	Lock( "Star Command  S19", "Pumbi, level 80" );
	Lock( "Switchback  S18", "Pumbi, level 85" );
	Lock( "Rippin' It Up  D18", "Pumbi, level 90" );
	Lock( "Star Command  D21", "Pumbi, level 94" );
	Lock( "Ignis Fatuus (DM Ashura Mix)  D24", "Pumbi, level 98, from music train" );

	//Lock( "Music Train Slot +1 unlock", "Pumbi, level 11" );
	//Lock( "Music Train Slot +1 unlock", "Pumbi, level 16" );
	//Lock( "Music Train Slot +1 unlock", "Pumbi, level 21" );
	//Lock( "Music Tempo x1.4 unlock", "Pumbi, level 31" );
	//Lock( "Random Skin unlock", "Pumbi, level 46" );
	//Lock( "Music Tempo x1.3 unlock", "Pumbi, level 61" );
	//Lock( "Music Tempo x0.9 unlock", "Pumbi, level 99" );
*/

var PIUGAME = "piugame unlock";


function ApplyUnlocks()
{
	On( "Prime", "..@1.21" )
	// 1.03
		Lock( "Achluoias", "S24", PIUGAME, "..@1.06" )
		Lock( "Milky Way Galaxy", "S17, D18", PIUGAME, "..@1.06" )
		Lock( "Selfishness", "S17, D18", PIUGAME, "..@1.06" )
	// 1.04
		Lock( "Avalanche", "S18, D19, D24", PIUGAME, "..@1.07" )
	// 1.05
		Lock( "You got me crazy", "S17, S18, D18", PIUGAME, "..@1.08" )
		Lock( "Interference", "D21", PIUGAME, "..@1.08" )
	// 1.06
		Lock( "Sugar Conspiracy Theory", "S15, S18, S19, D17, D20", PIUGAME, "..@1.09" )
		Lock( "Move That Body!", "S17, S20, D18", PIUGAME, "..@1.09" )
	// 1.07
		Lock( "Katkoi", "S14, S18, D15, D19", PIUGAME, "..@1.10" )
		Lock( "B2", "S16, S18, D19", PIUGAME, "..@1.10" )
		Lock( "1950", "S25, D27", PIUGAME )
		Lock( "Dolly KiSS", "S14, D15", PIUGAME, "..@1.10" )
		Lock( "Meteorize", "S17, D18", PIUGAME )
	//1.08
		Lock( "Silhouette Effect", "S18", PIUGAME, "..@1.11" )
		Lock( "Silhouette Effect", "D20", PIUGAME )
		Lock( "Annihilator Method", "S19", PIUGAME, "..@1.11")
		Lock( "Annihilator Method", "D20", PIUGAME)
		Lock( "Hypnosis", "S18, D18", PIUGAME )
	// 1.09
		Lock( "Bad Apple!! feat. Nomico", "S17, S19, D18", PIUGAME, "..@1.12" )
		Lock( "Bad Apple!! feat. Nomico", "D21", PIUGAME )
		Lock( "Four Seasons of Loneliness", "S17, D18", PIUGAME, "..@1.12" )
		Lock( "Four Seasons of Loneliness", "S20, D21", PIUGAME )
		Lock( "The Revolution", "S19, D19", PIUGAME, "..@1.12" )
		Lock( "Stardust Overdrive", "S18, D19", PIUGAME, "..@1.12" )
		Lock( "Allegro Piu Mosso", "S19", PIUGAME )
	// 1.10
		Lock( "Reminiscence", "S17, D18", PIUGAME, "..@1.13" )
		Lock( "Hyacinth", "S18, D19", PIUGAME, "..@1.13" )
		Lock( "Hyacinth", "S21, D23", PIUGAME )
		Lock( "Imprinting", "S17", PIUGAME, "..@1.13" )
		Lock( "Imprinting", "S20, D20", PIUGAME )
	// 1.11
		Lock( "Bad &infin; End &infin; Night", "S17, S19, D18", PIUGAME, "..@1.14" )
		Lock( "Bad &infin; End &infin; Night", "D23", PIUGAME )
		Lock( "video out c", "S17", PIUGAME, "..@1.14" )
		Lock( "video out c", "S22, D23", PIUGAME )
	// 1.12
		Lock( "Setsuna Trip", "S18, D19", PIUGAME, "..@1.15" )
		Lock( "Queen Of The Red", "S18, D19", PIUGAME, "..@1.15" )
		Lock( "Scorpion King", "S19", PIUGAME, "..@1.15" )
		Lock( "Scorpion King", "D20", PIUGAME )
		Lock( "Violet Perfume", "D19", PIUGAME, "..@1.15" )
		Lock( "Hypercube", "D20", PIUGAME )
	// 1.13
		Lock( "Creed -1st Desire -", "S18, D18", PIUGAME, "..@1.16" )
		Lock( "Creed -1st Desire -", "S21, D23", PIUGAME )
		Lock( "Point Zero One", "S20, D22", PIUGAME )
		Lock( "Avalanche", "S22", PIUGAME )
		Lock( "Ragnarok", "S20", PIUGAME )
	// 1.14
		Lock( "Trashy Innocence", "S20, D24", PIUGAME )
		Lock( "Ren'ai Yuusha", "S19, D20", PIUGAME, "..@1.17" )
		Lock( "Just Hold on (To All Fighters)", "S21, D22, D25", PIUGAME )
		Lock( "Enhanced Reality", "S19, D20", PIUGAME, "..@1.17" )
	// 1.15
		Lock( "Prime", "S20, D20", PIUGAME )
		Lock( "Mad5cience", "S20", PIUGAME )
		Lock( "Red Snow", "S19", PIUGAME, "..@1.18" )
		Lock( "Red Snow", "D20", PIUGAME )
		Lock( "Annihilator Method", "D24", PIUGAME )
		Lock( "Imprinting", "D24", PIUGAME )
	// 1.16
		Lock( "Moment Day", "S18, D19", PIUGAME, "..@1.19" )
		Lock( "Houkago Stride", "S19", PIUGAME, "..@1.19" )
		Lock( "Houkago Stride", "D21", PIUGAME )
		Lock( "Idealized Romance", "S18, D18", PIUGAME, "..@1.19" )
		Lock( "Force of Ra", "S19", PIUGAME, "..@1.19" )
		Lock( "Force of Ra", "D20", PIUGAME )
		Lock( "Achluoias", "D26", PIUGAME )
		Lock( "Stardust Overdrive", "D24", PIUGAME )
	// 1.17
		Lock( "Amphitryon", "S18, D20", PIUGAME, "..@1.20" )
	// 1.18
		Lock( "Sora no Shirabe", "S18, D20", PIUGAME )
		Lock( "Paradoxx", "S23, S26", PIUGAME )
	// 1.19
		Lock( "Smile Diary", "S19, D20", PIUGAME )
		Lock( "Paradoxx", "D28", PIUGAME )
	// 1.20 - nothing
	// 1.21 - everything


	function Prime2_Lock( trackTitle, chart, ppAmount, chartToPass, gradeToPass )
	{
		if( chartToPass[ 0 ] !== chart[ 0 ]  &&  trackTitle !== "Pumping Up" )
			throw "Invalid unlock for " + trackTitle + "  " + chart

		var orHigher = ( gradeToPass === "SS"  ?  ""  :  " or higher" )
		var descr = "Pass " + chartToPass + " on " + gradeToPass + orHigher + ", pay " + ppAmount + " PP"
		return Lock( trackTitle, chart, descr )
	}


	On( "Prime2" )
	// 1.04
		//Lock( "Good Night", "S20, S23, D22, D24", PIUGAME )
			Prime2_Lock( "Good Night", "S20", "1,800", "S17", "S" )
			Prime2_Lock( "Good Night", "S23", "2,760", "S20", "S" )
			Prime2_Lock( "Good Night", "D22", "1,710", "D19", "A" )
			Prime2_Lock( "Good Night", "D24", "3,360", "D22", "A" )
		//Lock( "Allegro Furioso", "S20, D20", PIUGAME )
			Prime2_Lock( "Allegro Furioso", "S20", "2,100", "S17", "A" )
			Prime2_Lock( "Allegro Furioso", "D20", "2,000", "D14", "S" )
		//Lock( "Redline", "S18, D19", PIUGAME )
			Prime2_Lock( "Redline", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "Redline", "D19", "1,710", "D20", "A" )
		//Lock( "Enhanced Reality", "S16, D18", PIUGAME )
			Prime2_Lock( "Enhanced Reality", "S16", "800", "S19", "A" )
			Prime2_Lock( "Enhanced Reality", "D18", "1,440", "D20", "A" )
		//Lock( "Slam", "D23", PIUGAME )
			Prime2_Lock( "Slam", "D23", "2,990", "D20", "A" )
	// 1.05
		//Lock( "Start On Red", "S19, D20", PIUGAME )
			Prime2_Lock( "Start On Red", "S19", "1,520", "S15", "S" )
			Prime2_Lock( "Start On Red", "D20", "2,000", "D12", "SS" )
		//Lock( "She Likes Pizza", "S21, D23", PIUGAME )
			Prime2_Lock( "She Likes Pizza", "S21", "2,100", "S09", "SS" )
			Prime2_Lock( "She Likes Pizza", "D23", "2,990", "D16", "S" )
	// 1.06
		//Lock( "Shub Niggurath", "S21, S24, D23, D26", PIUGAME )
			Prime2_Lock( "Shub Niggurath", "S21", "2,100", "S19", "A" )
			Prime2_Lock( "Shub Niggurath", "S24", "3,120", "S21", "A" )
			Prime2_Lock( "Shub Niggurath", "D23", "2,990", "D17", "A" )
			Prime2_Lock( "Shub Niggurath", "D26", "4,160", "D23", "A" )
		//Lock( "Pumping Up", "D15", PIUGAME )
			Prime2_Lock( "Pumping Up", "D15", "900", "S12", "A" )
	// 1.07
		//Lock( "Bedlam", "S22, D24", PIUGAME )
			Prime2_Lock( "BEDLAM", "S22", "2,420", "S18", "A" )
			Prime2_Lock( "BEDLAM", "D24", "3,360", "D20", "A" )
		//Lock( "Leather", "S24, D26", PIUGAME )
			Prime2_Lock( "Leather", "S24", "4,680", "S21", "A" )
			Prime2_Lock( "Leather", "D26", "6,240", "D22", "A" )
		//Lock( "Red Snow", "D18", PIUGAME )
			Prime2_Lock( "Red Snow", "D18", "1,440", "D12", "gS" )
		//Lock( "Winter", "S19", PIUGAME )
			Prime2_Lock( "Winter", "S19", "1,520", "S15", "A" )
		//Lock( "Death Moon  [SHORT]", "S22", PIUGAME )
			Prime2_Lock( "Death Moon  [SHORT]", "S22", "2,420", "S19", "A" )
	// 1.08
		//Lock( "Gotta Be You", "S17, D18", PIUGAME )
			Prime2_Lock( "Gotta Be You", "S17", "1,020", "S15", "A" )
			Prime2_Lock( "Gotta Be You", "D18", "1,440", "D16", "A" )
	// 1.09
		//Lock( "Time Attack <Blue>", "S18, D20", PIUGAME )
			Prime2_Lock( "Time Attack <Blue>", "S18", "1,260", "S15", "A" )
			Prime2_Lock( "Time Attack <Blue>", "D20", "2,000", "D16", "A" )
		//Lock( "Maria", "D19", PIUGAME )
			Prime2_Lock( "Maria", "D19", "1,710", "D15", "gS" )
		//Lock( "My Way", "D18", PIUGAME )
			Prime2_Lock( "My Way", "D18", "1,440", "D15", "A" )
		//Lock( "Sugar Free", "D18", PIUGAME )
			Prime2_Lock( "Sugar Free", "D18", "1,440", "D16", "A" )
		//Lock( "Selfishness", "D21", PIUGAME )
			Prime2_Lock( "Selfishness", "D21", "2,310", "D18", "A" )
	// 1.10
		//Lock( "Heart Attack", "S18, D20", PIUGAME )
			Prime2_Lock( "Heart Attack", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "Heart Attack", "D20", "2,000", "D18", "A" )
		//Lock( "Keep On!", "S18, S21, D20, D22", PIUGAME )
			Prime2_Lock( "Keep On!", "S18", "1,260", "S15", "A" )
			Prime2_Lock( "Keep On!", "S21", "2,100", "S18", "A" )
			Prime2_Lock( "Keep On!", "D20", "2,000", "D17", "A" )
			Prime2_Lock( "Keep On!", "D22", "2,640", "D20", "A" )
		//Lock( "Get Your Groove On", "D21", PIUGAME )
			Prime2_Lock( "Get Your Groove On", "D21", "2,310", "D09", "SS" )
		//Lock( "Caprice of Otada", "S19", PIUGAME )
			Prime2_Lock( "Caprice of Otada", "S19", "1,520", "S17", "A" )
		//Lock( "Monolith", "D23", PIUGAME )
			Prime2_Lock( "Monolith", "D23", "2,990", "D18", "gS" )
		//Lock( "Reminiscence", "S15, D17", PIUGAME )
			Prime2_Lock( "Reminiscence", "S15", "750", "S10", "gS" )
			Prime2_Lock( "Reminiscence", "D17", "1,190", "D10", "gS" )
	// 2.00
		//Lock( "Super Capriccio", "S18, D18", PIUGAME )
			Prime2_Lock( "Super Capriccio", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "Super Capriccio", "D18", "1,440", "D11", "gS" )
		//Lock( "Anguished Unmaking", "S17, D18", PIUGAME )
			Prime2_Lock( "Anguished Unmaking", "S17", "1,020", "S15", "A" )
			Prime2_Lock( "Anguished Unmaking", "D18", "1,440", "D09", "gS" )
		//Lock( "Energetic", "S16, D16, D19", PIUGAME )
			Prime2_Lock( "Energetic", "S16", "800", "S13", "A" )
			Prime2_Lock( "Energetic", "D16", "960", "D14", "A" )
			Prime2_Lock( "Energetic", "D19", "1,710", "D16", "A" )
		//Lock( "Really Really", "S15, D16", PIUGAME )
			Prime2_Lock( "REALLY REALLY", "S15", "750", "S13", "A" )
			Prime2_Lock( "REALLY REALLY", "D16", "960", "D07", "gS" )
		//Lock( "Infinity", "S18, S21, D19, D24", PIUGAME )
			Prime2_Lock( "INFINITY", "S18", "1,260", "S15", "A" )
			Prime2_Lock( "INFINITY", "S21", "2,100", "S18", "A" )
			Prime2_Lock( "INFINITY", "D19", "1,710", "D10", "gS" )
			Prime2_Lock( "INFINITY", "D24", "3,360", "D19", "gS" )
		//Lock( "V3", "S17, D18, D24", PIUGAME )
			Prime2_Lock( "V3", "S17", "1,020", "S14", "A" )
			Prime2_Lock( "V3", "D18", "1,440", "D09", "SS" )
			Prime2_Lock( "V3", "D24", "3,360", "D18", "gS" )
		//Lock( "Twist of Fate (feat. Ruriling)", "S18, D20", PIUGAME )
			Prime2_Lock( "Twist of Fate (feat. Ruriling)", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "Twist of Fate (feat. Ruriling)", "D20", "2,000", "D17", "A" )
		//Lock( "HTTP", "S17, S21, D19, D23", PIUGAME )
			Prime2_Lock( "HTTP", "S17", "1,020", "S14", "A" )
			Prime2_Lock( "HTTP", "S21", "2,100", "S17", "A" )
			Prime2_Lock( "HTTP", "D19", "1,710", "D12", "A" )
			Prime2_Lock( "HTTP", "D23", "2,990", "D19", "A" )
	// 2.01
		//Lock( "Pick Me @ 1561", "S17, D18", PIUGAME )
			Prime2_Lock( "Pick Me @ 1561", "S17", "1,020", "S14", "A" )
			Prime2_Lock( "Pick Me @ 1561", "D18", "1,440", "D16", "A" )
		//Lock( "Rave'til the earth's end", "S19, D20", PIUGAME )
			Prime2_Lock( "Rave'til the earth's end", "S19", "1,520", "S17", "A" )
			Prime2_Lock( "Rave'til the earth's end", "D20", "2,000", "D18", "A" )
	// 2.02
	 	//Lock( "Travel to Future", "S19, D23", PIUGAME )
			Prime2_Lock( "Travel to Future", "S19", "1,520", "S17", "A" )
			Prime2_Lock( "Travel to Future", "D23", "2,990", "D21", "A" )
	 	//Lock( "Naissance", "S16", PIUGAME )
			Prime2_Lock( "Naissance", "S16", "800", "S10", "gS" )
	 	//Lock( "Annihilator Method", "S23", PIUGAME )
			Prime2_Lock( "Annihilator Method", "S23", "2,760", "S19", "A" )
	// 2.03
	 	//Lock( "Silver Beat feat. ChisaUezono", "D18", PIUGAME )
			Prime2_Lock( "Silver Beat feat. ChisaUezono", "D18", "1,440", "D12", "S" )
	 	//Lock( "Tritium", "S20, D19, D22", PIUGAME )
			Prime2_Lock( "Tritium", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "Tritium", "D19", "1,710", "D14", "A" )
			Prime2_Lock( "Tritium", "D22", "2,640", "D19", "A" )
	 	//Lock( "Passing Rider", "S20", PIUGAME )
			Prime2_Lock( "Passing Rider", "S20", "1,800", "S16", "A" )
	 	//Lock( "Awakening", "S19, D20", PIUGAME )
			Prime2_Lock( "Awakening", "S19", "1,520", "S16", "A" )
			Prime2_Lock( "Awakening", "D20", "2,000", "D17", "A" )
	 	//Lock( "Gothique Resonance", "S20", PIUGAME )
			Prime2_Lock( "Gothique Resonance", "S20", "1,800", "S18", "A" )
	// 2.04
	 	//Lock( "Cross Over", "S18, S22, D19, D23", PIUGAME )
			Prime2_Lock( "Cross Over", "S18", "1,260", "S15", "A" )
			Prime2_Lock( "Cross Over", "S22", "2,420", "S18", "A" )
			Prime2_Lock( "Cross Over", "D19", "1,710", "D14", "A" )
			Prime2_Lock( "Cross Over", "D23", "2,990", "D19", "A" )
	 	//Lock( "Waltz of Doge", "S19, D20", PIUGAME )
			Prime2_Lock( "Waltz of Doge", "S19", "1,520", "S17", "A" )
			Prime2_Lock( "Waltz of Doge", "D20", "1,440", "D18", "A" )
	 	//Lock( "Black Dragon", "S20, D19", PIUGAME )
			Prime2_Lock( "Black Dragon", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "Black Dragon", "D19", "1,710", "D17", "A" )
	 	//Lock( "A Site De La Rue", "S20, D20, D24", PIUGAME )
			Prime2_Lock( "A Site De La Rue", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "A Site De La Rue", "D20", "2,000", "D12", "gS" )
			Prime2_Lock( "A Site De La Rue", "D24", "3,360", "D20", "A" )
	 	//Lock( "Gargoyle  [FULL]", "S23, D25", PIUGAME )
			Prime2_Lock( "Gargoyle  [FULL]", "S23", "15,000", "S21", "A" )
			Prime2_Lock( "Gargoyle  [FULL]", "D25", "25,000", "D22", "A" )
	// 2.05
	 	//Lock( "Break Out", "S19, D18, D22", PIUGAME )
			Prime2_Lock( "Break Out", "S19", "1,520", "S16", "A" )
			Prime2_Lock( "Break Out", "D18", "1,440", "D12", "S" )
			Prime2_Lock( "Break Out", "D22", "2,640", "D18", "A" )
	 	//Lock( "The Quick Brown Fox Jumps Over The Lazy Dog", "S20, S23, D24", PIUGAME )
			Prime2_Lock( "The Quick Brown Fox Jumps Over The Lazy Dog", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "The Quick Brown Fox Jumps Over The Lazy Dog", "S23", "2,760", "S20", "A" )
			Prime2_Lock( "The Quick Brown Fox Jumps Over The Lazy Dog", "D24", "3,360", "D14", "gS" )
	 	//Lock( "Visual Dream II (In Fiction)", "S18, D19", PIUGAME )
			Prime2_Lock( "Visual Dream II (In Fiction)", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "Visual Dream II (In Fiction)", "D19", "1,710", "D10", "S" )
	 	//Lock( "BSPower Explosion", "S20, S22, D20, D23", PIUGAME )
			Prime2_Lock( "BSPower Explosion", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "BSPower Explosion", "S22", "2,420", "S20", "A" )
			Prime2_Lock( "BSPower Explosion", "D20", "2,000", "D13", "S" )
			Prime2_Lock( "BSPower Explosion", "D23", "2,990", "D20", "A" )
	 	//Lock( "ESCAPE", "S21, S24, D22", PIUGAME )
			Prime2_Lock( "ESCAPE", "S21", "2,100", "S18", "A" )
			Prime2_Lock( "ESCAPE", "S24", "4,680", "S21", "A" )
			Prime2_Lock( "ESCAPE", "D22", "2,640", "D19", "A" )

	//delete tempUnlockPatchIndex;
	//delete tempCurrentMix;
	On( "XX" )
	// 1.00
		Lock( "BBoom BBoom", "S15", "at least S13 A" )
		Lock( "BBoom BBoom", "D18", "at least S on S15 & D15" )

		Lock( "Nekkoya(Pick Me)", "S17", "at least S15 A" )

		Lock( "Boomerang", "S14", "at least S13 A" )
		Lock( "Boomerang", "S17", "at least S15 A" )
		Lock( "Boomerang", "D16", "D7 SSS" )
		Lock( "Boomerang", "D20", "at least S on S17 & D16" )
		Lock( "Boomerang", "CoOp(x2)", "Play co-op charts 60 times?" )

		Lock( "I'm so Sick", "S17", "at least S15 A" )
		Lock( "I'm so Sick", "D18", "at least D16 A" )
		Lock( "I'm so Sick", "D20", "at least S on S15, D16, S17, and D18" )

		Lock( "Good Bye", "S10", "at least S10 A on Boomerang" )
		Lock( "Good Bye", "S14", "AM.Pass Login" )
		Lock( "Good Bye", "S17", "at least S14 S" )
		Lock( "Good Bye", "D16", "at least D10 SS" )
		Lock( "Good Bye", "D18", "at least S17 A" )

		Lock( "Love Scenario", "D14", "at least S14 A" )
		Lock( "Love Scenario", "S17", "at least S14 S" )

		Lock( "Very Nice!", "S14", "AM.Pass Login?" )
		Lock( "Very Nice!", "S17", "at least S14 A" )
		Lock( "Very Nice!", "D15", "at least S14 A" )
		Lock( "Very Nice!", "D18", "at least D15 S" )

		Lock( "Fly High", "S18", "at least S15 A" )
		Lock( "Fly High", "D19", "at least D16 A" )

		Lock( "Hann(Alone)", "S16", "AM.Pass Login" )

		Lock( "Wedding Crashers", "S18", "AM.Pass Login" )
		Lock( "Wedding Crashers", "S21", "at least S18 A" )
		Lock( "Wedding Crashers", "D19", "at least D13 SS" )
		Lock( "Wedding Crashers", "D22", "Stage pass 30 times on S22 charts" )
		Lock( "Wedding Crashers", "CoOp(x3)", "Play co-op charts 30 times" )

		Lock( "Obelisque", "S15", "at least S10 S" )
		Lock( "Obelisque", "S17", "at least S15 A" )
		Lock( "Obelisque", "D15", "at least D11 S" )
		Lock( "Obelisque", "D17", "at least D15 A" )

		Lock( "%X (Percent X)", "D19", "at least D13 SS" )

		Lock( "Vanish", "S17", "at least S12 S" )
		Lock( "Vanish", "D18", "at least D12 SS" )
		Lock( "Vanish", "D22", "Advanced Lv. 6 Title" )

		Lock( "Macaron Day", "D18", "at least D13 SS" )

		Lock( "Poseidon", "S14", "at least S10 S" )
		Lock( "Poseidon", "D22", "at least D16 SS" )

		Lock( "I Want U", "S19", "at least S16 A" )
		Lock( "I Want U", "D17", "at least D13 S" )
		Lock( "I Want U", "D21", "Advanced Lv. 4 Title" )

		Lock( "Le Grand Rouge", "S20", "at least S17 A" )
		Lock( "Le Grand Rouge", "D22", "at least D19 A" )

		Lock( "Club Night", "S18", "at least S16 A" )
		Lock( "Club Night", "S22", "at least S18 S" )
		Lock( "Club Night", "D12", "at least D12 A on Loki" )
		Lock( "Club Night", "D18", "at least D12 SS" )
		Lock( "Club Night", "D21", "Advanced Lv. 3 Title?" )
		Lock( "Club Night", "CoOp(x2)", "get CoOp Intermediate title" )  // according to Seth Sanches at https://www.facebook.com/groups/1475683766036553/permalink/2303998833205038/

		Lock( "Black Swan", "S12", "AM.Pass level 10" )
		Lock( "Black Swan", "S14", "AM.Pass level 12" )
		Lock( "Black Swan", "S16", "AM.Pass level 14" )
		Lock( "Black Swan", "S19", "AM.Pass level 16" )
		Lock( "Black Swan", "D15", "AM.Pass level 18" )
		Lock( "Black Swan", "D22", "at least D15 SS" )

		Lock( "Imagination", "S12", "AM.Pass level 20" )
		Lock( "Imagination", "S15", "AM.Pass level 22" )
		Lock( "Imagination", "S19", "AM.Pass level 24" )
		Lock( "Imagination", "D16", "AM.Pass level 26" )
		Lock( "Imagination", "D21", "AM.Pass level 28" )

		Lock( "Kimchi Fingers", "S14", "AM.Pass level 30 / Prime 2 Global Top 1000 rank reward" )
		Lock( "Kimchi Fingers", "S17", "AM.Pass level 32 / Prime 2 Global Top 1000 rank reward" )
		Lock( "Kimchi Fingers", "S20", "AM.Pass level 34 / Prime 2 Global Top 1000 rank reward" )
		Lock( "Kimchi Fingers", "D16", "AM.Pass level 36 / Prime 2 Global Top 1000 rank reward" )
		Lock( "Kimchi Fingers", "D21", "AM.Pass level 38 / Prime 2 Global Top 1000 rank reward" )

		Lock( "Loki", "S12", "AM.Pass level 40 / G-Plex Field Test participant reward" )
		Lock( "Loki", "S16", "AM.Pass level 42 / G-Plex Field Test participant reward" )
		Lock( "Loki", "S19", "AM.Pass level 44 / G-Plex Field Test participant reward" )
		Lock( "Loki", "D12", "AM.Pass level 46 / G-Plex Field Test participant reward" )
		Lock( "Loki", "D19", "AM.Pass level 48 / G-Plex Field Test participant reward" )
		Lock( "Loki", "S21", "Clear 8 Mission Zone quests" )

		Lock( "Nyarlathotep", "S18", "at least S16 A" )
		Lock( "Nyarlathotep", "S23", "Advanced Lv. 8 Title" )
		Lock( "Nyarlathotep", "D20", "Stage pass 30 times on S20 charts" )
		Lock( "Nyarlathotep", "D23", "Stage pass 30 times on S23/D23 charts" )
		Lock( "Nyarlathotep", "D25", "Expert Lv. 2 Title" )

		Lock( "Nyarlathotep  [short]", "D24", "Expert Lv. 1 Title" )

		Lock( "Can Can", "S20", "Advanced Lv. 2 Title" )
		Lock( "Can Can", "D22", "AM.Pass level 40" )

		Lock( "Obliteration", "S17", "at least S14 A" )
		Lock( "Obliteration", "D15", "at least D10 S" )
		Lock( "Obliteration", "D19", "at least D15 S" )

		Lock( "Skeptic", "S12", "AM.Pass level 50" )
		Lock( "Skeptic", "S18", "AM.Pass level 55" )
		Lock( "Skeptic", "S22", "AM.Pass level 60" )
		Lock( "Skeptic", "S24", "AM.Pass level 65" )
		Lock( "Skeptic", "D14", "AM.Pass level 70" )
		Lock( "Skeptic", "D22", "AM.Pass level 75" )
		Lock( "Skeptic", "D25", "AM.Pass level 80" )

		Lock( "Dement ~After Legend~", "S23", "Advanced Lv. 10 Title" )
		Lock( "Dement ~After Legend~", "D26", "Expert Lv. 3 Title" )

		Lock( "Desaparecer", "S20", "AM.Pass level 100" )
		Lock( "Desaparecer", "S22", "AM.Pass level 100" )
		Lock( "Desaparecer", "D23", "AM.Pass level 100" )

		Lock( "86", "S12, S16, S20, D18, D21", "Acquire SSS 86 times, same charts allowed" )

	// 1.01
		Lock( "Boong Boong (Feat. Sik-K) (Prod. GroovyRoom)", "S16", "at least A on Little Prince S16" )
		Lock( "Boong Boong (Feat. Sik-K) (Prod. GroovyRoom)", "D??", "???" )
		Lock( "Boong Boong (Feat. Sik-K) (Prod. GroovyRoom)", "D19", "at least A on Little Prince D19" )

		Lock( "The Little Prince (Prod. Godic)", "S18", "at least A on Boong Boong S18" )
		Lock( "The Little Prince (Prod. Godic)", "D16", "at least A on Boong Boong D16" )

		Lock( "Timing", "S17", "at least S15 S" )
		Lock( "Timing", "D18", "at least D16 S" )

		Lock( "Ice of Death", "S20", "at least S17 S?" )
		//Lock( "Ice of Death", "D??", "???" )

		Lock( "Xeroize", "S21", "???" )
		Lock( "Xeroize", "S24", "???" )
		Lock( "Xeroize", "D22", "???" )
		//Lock( "Xeroize", "D??", "???" )

		Lock( "Nihilism -Another Ver.-", "S21", "???" )
		Lock( "Nihilism -Another Ver.-", "D19", "???" )
		Lock( "Nihilism -Another Ver.-", "D23", "???" )

		Lock( "8 6  [FULL]", "S16", "Stage pass 86 S16 and D16?" )
		Lock( "8 6  [FULL]", "S21", "Stage pass 86 S20?" )
		Lock( "8 6  [FULL]", "D23", "Stage pass 86 D21?" )

		Lock( "Jump", "D18", "Clear 16 mission zone quests" )
}

initFuncs.push( ApplyUnlocks );
