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

	console.assert( tillPatch.startsWith( '..@' ) );
	var patch = tillPatch.substring( 3 );
	patchIndex = mixes[ currentMixID ].patches.indexOf( patch );
	console.assert( patchIndex >= 0 )
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
	{
		console.log( "Error: no '" + mixID + "' data for '" + track.title + "'" )
		return null;
	}

	for( var chart of track[ mixID ] )
		if( chart.text === chartText )
			return chart;
}

function Lock( trackTitle, charts, description, tillPatch )
{
	if( ! description )
		description = "locked";

	// find chart
	var track = FindTrack( tracklist, trackTitle );
	if( ! track )
		console.error( "Can't find track ", trackSplits[ 0 ] );

	var chartSplits = charts.split( ", " );

	for( var chartText of chartSplits )
	{
		var chart = FindChartForLock( track, currentMixID, chartText )
		if( ! chart )
			console.error( "Can't find ", track.title, "  ", chartText )
		console.assert( chart );
		console.assert( ! chart.unlockDescr );
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

On( "Prime2" )
// 1.04
	Lock( "Good Night", "S20, S23, D22, D24", PIUGAME )
	Lock( "Allegro Furioso", "S20, D20", PIUGAME )
	Lock( "Redline", "S18, D19", PIUGAME )
	Lock( "Enhanced Reality", "S16, D18", PIUGAME )
	Lock( "Slam", "D23", PIUGAME )
// 1.05
	Lock( "Start On Red", "S19, D20", PIUGAME )
	Lock( "She Likes Pizza", "S21, D23", PIUGAME )
// 1.06
	Lock( "Shub Niggurath", "S21, S24, D23, D26", PIUGAME )
	Lock( "Pumping Up", "D15", PIUGAME )
// 1.07
	Lock( "Bedlam", "S22, D24", PIUGAME )
	Lock( "Leather", "S24, D26", PIUGAME )
	Lock( "Red Snow", "D18", PIUGAME )
	Lock( "Winter", "S19", PIUGAME )
	Lock( "Death Moon  [SHORT]", "S22", PIUGAME )
// 1.08
	Lock( "Gotta Be You", "S17, D18", PIUGAME )
// 1.09
	Lock( "Time Attack <Blue>", "S18, D20", PIUGAME )
	Lock( "Maria", "D19", PIUGAME )
	Lock( "My Way", "D18", PIUGAME )
	Lock( "Sugar Free", "D18", PIUGAME )
	Lock( "Selfishness", "D21", PIUGAME )
// 1.09
	Lock( "Heart Attack", "S18, D20", PIUGAME )
	Lock( "Keep On!", "S18, S21, D20, D22", PIUGAME )
	Lock( "Get Your Groove On", "D21", PIUGAME )
	Lock( "Caprice of Otada", "S19", PIUGAME )
	Lock( "Monolith", "D23", PIUGAME )
	Lock( "Reminiscence", "S15, D17", PIUGAME )

//delete tempUnlockPatchIndex;
//delete tempCurrentMix;
