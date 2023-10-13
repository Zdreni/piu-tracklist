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
		throw new Error( "Invalid tillPatch '" + tillPatch + "'" );

	var patch = tillPatch.substring( 3 );
	patchIndex = mixes[ currentMixID ].patches.indexOf( patch );
	if( patchIndex < 0 )
		throw new Error( "Invalid patch " + patch );

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
	if( ! track.charts[ mixID ] )
		throw new Error( "No '" + mixID + "' data for track '" + track.title + "' in mix '" + mixID + "'" );

	for( var chart of track.charts[ mixID ] )
		if( chart.text === chartText )
			return chart;

	throw new Error( "Can't find chart '" + track.title + "  " + chartText + "'" );
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
		//if( ! chart.isLocked )
		//	throw new Error( "Chart " + track.title + "  " + chartText + " isn't supposed to be locked" );
		if( chart.unlockDescr )
			throw new Error( "Duplicate unlock description for " + track.title + "  " + chartText );
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
	Lock(             "07__Winter  [SHORT]  D17", PUMBI + " (30 battles won)" );
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
	Lock( "12__Monolith  D13", "Pumbi, level 5" );
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
		Lock( "14__Achluoias", "S24", PIUGAME, "..@1.06" )

		Lock( "14__Milky_Way_Galaxy", "S17, D18", PIUGAME, "..@1.06" )

		Lock( "14__Selfishness", "S17, D18", PIUGAME, "..@1.06" )

	// 1.04
		Lock( "14__Avalanche", "S18, D19, D24", PIUGAME, "..@1.07" )

	// 1.05
		Lock( "14__You_Got_Me_Crazy", "S17, S18, D18", PIUGAME, "..@1.08" )

		Lock( "11__Interference", "D21", PIUGAME, "..@1.08" )

	// 1.06
		Lock( "14__Sugar_Conspiracy_Theory", "S15, S18, S19, D17, D20", PIUGAME, "..@1.09" )

		Lock( "14__Move_That_Body", "S17, S20, D18", PIUGAME, "..@1.09" )

	// 1.07
		Lock( "14__Katkoi", "S14, S18, D15, D19", PIUGAME, "..@1.10" )

		Lock( "14__B2", "S16, S18, D19", PIUGAME, "..@1.10" )

		Lock( "14__1950", "S25, D27", PIUGAME )

		Lock( "14__Dolly_Kiss", "S14, D15", PIUGAME, "..@1.10" )

		Lock( "14__Meteorize", "S17, D18", PIUGAME )

	//1.08
		Lock( "14__Silhouette_Effect", "S18", PIUGAME, "..@1.11" )
		Lock( "14__Silhouette_Effect", "D20", PIUGAME )

		Lock( "14__Annihilator_Method", "S19", PIUGAME, "..@1.11")
		Lock( "14__Annihilator_Method", "D20", PIUGAME)

		Lock( "01__Hypnosis", "S18, D18", PIUGAME )

	// 1.09
		Lock( "14__Bad_Apple", "S17, S19, D18", PIUGAME, "..@1.12" )
		Lock( "14__Bad_Apple", "D21", PIUGAME )

		Lock( "14__Four_Seasons_of_Loneliness", "S17, D18", PIUGAME, "..@1.12" )
		Lock( "14__Four_Seasons_of_Loneliness", "S20, D21", PIUGAME )

		Lock( "14__The_Revolution", "S19, D19", PIUGAME, "..@1.12" )

		Lock( "14__Stardust_Overdrive", "S18, D19", PIUGAME, "..@1.12" )

		Lock( "14__Allegro_Piu_Mosso", "S19", PIUGAME )

	// 1.10
		Lock( "14__Reminiscence", "S17, D18", PIUGAME, "..@1.13" )

		Lock( "14__Hyacinth", "S18, D19", PIUGAME, "..@1.13" )
		Lock( "14__Hyacinth", "S21, D23", PIUGAME )

		Lock( "14__Imprinting", "S17", PIUGAME, "..@1.13" )
		Lock( "14__Imprinting", "S20, D20", PIUGAME )

	// 1.11
		Lock( "14__Bad_End_Night", "S17, S19, D18", PIUGAME, "..@1.14" )
		Lock( "14__Bad_End_Night", "D23", PIUGAME )

		Lock( "14__video_out_c", "S17", PIUGAME, "..@1.14" )
		Lock( "14__video_out_c", "S22, D23", PIUGAME )

	// 1.12
		Lock( "14__Setsuna_Trip", "S18, D19", PIUGAME, "..@1.15" )

		Lock( "14__Queen_of_the_Red", "S18, D19", PIUGAME, "..@1.15" )

		Lock( "14__Scorpion_King", "S19", PIUGAME, "..@1.15" )
		Lock( "14__Scorpion_King", "D20", PIUGAME )

		Lock( "14__Violet_Perfume", "D19", PIUGAME, "..@1.15" )

		Lock( "14__Hypercube", "D20", PIUGAME )

	// 1.13
		Lock( "14__Creed_1st_Desire", "S18, D18", PIUGAME, "..@1.16" )
		Lock( "14__Creed_1st_Desire", "S21, D23", PIUGAME )

		Lock( "14__Point_Zero_One", "S20, D22", PIUGAME )

		Lock( "14__Avalanche", "S22", PIUGAME )

		Lock( "14__Ragnarok", "S20", PIUGAME )

	// 1.14
		Lock( "14__Trashy_Innocence", "S20, D24", PIUGAME )

		Lock( "14__Renai_Yuusha", "S19, D20", PIUGAME, "..@1.17" )

		Lock( "14__Just_Hold_On", "S21, D22, D25", PIUGAME )

		Lock( "14__Enhanced_Reality", "S19, D20", PIUGAME, "..@1.17" )

	// 1.15
		Lock( "14__Prime", "S20, D20", PIUGAME )

		Lock( "14__Mad5cience", "S20", PIUGAME )

		Lock( "14__Red_Snow", "S19", PIUGAME, "..@1.18" )
		Lock( "14__Red_Snow", "D20", PIUGAME )

		Lock( "14__Annihilator_Method", "D24", PIUGAME )

		Lock( "14__Imprinting", "D24", PIUGAME )

	// 1.16
		Lock( "14__Moment_Day", "S18, D19", PIUGAME, "..@1.19" )

		Lock( "14__Houkago_Stride", "S19", PIUGAME, "..@1.19" )
		Lock( "14__Houkago_Stride", "D21", PIUGAME )

		Lock( "14__Idealized_Romance", "S18, D18", PIUGAME, "..@1.19" )

		Lock( "14__Force_of_Ra", "S19", PIUGAME, "..@1.19" )
		Lock( "14__Force_of_Ra", "D20", PIUGAME )

		Lock( "14__Achluoias", "D26", PIUGAME )

		Lock( "14__Stardust_Overdrive", "D24", PIUGAME )

	// 1.17
		Lock( "14__Amphitryon", "S18, D20", PIUGAME, "..@1.20" )

	// 1.18
		Lock( "14__Sora_no_Shirabe", "S18, D20", PIUGAME )

		Lock( "14__Paradoxx", "S23, S26", PIUGAME )

	// 1.19
		Lock( "14__Smile_Diary", "S19, D20", PIUGAME )

		Lock( "14__Paradoxx", "D28", PIUGAME )
	// 1.20 - nothing
	// 1.21 - everything


	function Prime2_Lock( trackTitle, chart, ppAmount, chartToPass, gradeToPass )
	{
		if( chartToPass[ 0 ] !== chart[ 0 ]  &&  trackTitle !== "03__Pumping_Up" )
			throw new Error( "Invalid unlock for " + trackTitle + "  " + chart );

		var orHigher = ( gradeToPass === "SS"  ?  ""  :  " or higher" )
		var descr = "Pass " + chartToPass + " on " + gradeToPass + orHigher + ", pay " + ppAmount + " PP"
		return Lock( trackTitle, chart, descr )
	}


	On( "Prime2", "..@2.05.1" )
	// 1.04
		//Lock( "15__Good_Night", "S20, S23, D22, D24", PIUGAME )
			Prime2_Lock( "15__Good_Night", "S20", "1,800", "S17", "S" )
			Prime2_Lock( "15__Good_Night", "S23", "2,760", "S20", "S" )
			Prime2_Lock( "15__Good_Night", "D22", "1,710", "D19", "A" )
			Prime2_Lock( "15__Good_Night", "D24", "3,360", "D22", "A" )

		//Lock( "15__Allegro_Furioso", "S20, D20", PIUGAME )
			Prime2_Lock( "15__Allegro_Furioso", "S20", "2,100", "S17", "A" )
			Prime2_Lock( "15__Allegro_Furioso", "D20", "2,000", "D14", "S" )

		//Lock( "15__Redline", "S18, D19", PIUGAME )
			Prime2_Lock( "15__Redline", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "15__Redline", "D19", "1,710", "D20", "A" )

		//Lock( "14__Enhanced_Reality", "S16, D18", PIUGAME )
			Prime2_Lock( "14__Enhanced_Reality", "S16", "800", "S19", "A" )
			Prime2_Lock( "14__Enhanced_Reality", "D18", "1,440", "D20", "A" )

		//Lock( "05__Slam", "D23", PIUGAME )
			Prime2_Lock( "05__Slam", "D23", "2,990", "D20", "A" )

	// 1.05
		//Lock( "15__Start_On_Red", "S19, D20", PIUGAME )
			Prime2_Lock( "15__Start_On_Red", "S19", "1,520", "S15", "S" )
			Prime2_Lock( "15__Start_On_Red", "D20", "2,000", "D12", "SS" )

		//Lock( "03__She_Likes_Pizza", "S21, D23", PIUGAME )
			Prime2_Lock( "03__She_Likes_Pizza", "S21", "2,100", "S09", "SS" )
			Prime2_Lock( "03__She_Likes_Pizza", "D23", "2,990", "D16", "S" )

	// 1.06
		//Lock( "15__Shub_Niggurath", "S21, S24, D23, D26", PIUGAME )
			Prime2_Lock( "15__Shub_Niggurath", "S21", "2,100", "S19", "A" )
			Prime2_Lock( "15__Shub_Niggurath", "S24", "3,120", "S21", "A" )
			Prime2_Lock( "15__Shub_Niggurath", "D23", "2,990", "D17", "A" )
			Prime2_Lock( "15__Shub_Niggurath", "D26", "4,160", "D23", "A" )

		//Lock( "03__Pumping_Up", "D15", PIUGAME )
			Prime2_Lock( "03__Pumping_Up", "D15", "900", "S12", "A" )

	// 1.07
		//Lock( "15__Bedlam", "S22, D24", PIUGAME )
			Prime2_Lock( "15__Bedlam", "S22", "2,420", "S18", "A" )
			Prime2_Lock( "15__Bedlam", "D24", "3,360", "D20", "A" )

		//Lock( "15__Leather", "S24, D26", PIUGAME )
			Prime2_Lock( "15__Leather", "S24", "4,680", "S21", "A" )
			Prime2_Lock( "15__Leather", "D26", "6,240", "D22", "A" )

		//Lock( "14__Red_Snow", "D18", PIUGAME )
			Prime2_Lock( "14__Red_Snow", "D18", "1,440", "D12", "gS" )

		//Lock( "07__Winter", "S19", PIUGAME )
			Prime2_Lock( "07__Winter", "S19", "1,520", "S15", "A" )

		//Lock( "15__Death_Moon__SHORT", "S22", PIUGAME )
			Prime2_Lock( "15__Death_Moon__SHORT", "S22", "2,420", "S19", "A" )

	// 1.08
		//Lock( "15__Gotta_Be_You", "S17, D18", PIUGAME )
			Prime2_Lock( "15__Gotta_Be_You", "S17", "1,020", "S15", "A" )
			Prime2_Lock( "15__Gotta_Be_You", "D18", "1,440", "D16", "A" )

	// 1.09
		//Lock( "15__Time_Attack_Blue", "S18, D20", PIUGAME )
			Prime2_Lock( "15__Time_Attack_Blue", "S18", "1,260", "S15", "A" )
			Prime2_Lock( "15__Time_Attack_Blue", "D20", "2,000", "D16", "A" )

		//Lock( "07__Maria", "D19", PIUGAME )
			Prime2_Lock( "07__Maria", "D19", "1,710", "D15", "gS" )

		//Lock( "07__My_Way", "D18", PIUGAME )
			Prime2_Lock( "07__My_Way", "D18", "1,440", "D15", "A" )

		//Lock( "14__Sugar_Free", "D18", PIUGAME )
			Prime2_Lock( "14__Sugar_Free", "D18", "1,440", "D16", "A" )

		//Lock( "14__Selfishness", "D21", PIUGAME )
			Prime2_Lock( "14__Selfishness", "D21", "2,310", "D18", "A" )

	// 1.10
		//Lock( "15__Heart_Attack", "S18, D20", PIUGAME )
			Prime2_Lock( "15__Heart_Attack", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "15__Heart_Attack", "D20", "2,000", "D18", "A" )

		//Lock( "15__Keep_On", "S18, S21, D20, D22", PIUGAME )
			Prime2_Lock( "15__Keep_On", "S18", "1,260", "S15", "A" )
			Prime2_Lock( "15__Keep_On", "S21", "2,100", "S18", "A" )
			Prime2_Lock( "15__Keep_On", "D20", "2,000", "D17", "A" )
			Prime2_Lock( "15__Keep_On", "D22", "2,640", "D20", "A" )

		//Lock( "07__Get_Your_Groove_On", "D21", PIUGAME )
			Prime2_Lock( "07__Get_Your_Groove_On", "D21", "2,310", "D09", "SS" )

		//Lock( "0E__Caprice_of_Otada", "S19", PIUGAME )
			Prime2_Lock( "0E__Caprice_of_Otada", "S19", "1,520", "S17", "A" )

		//Lock( "12__Monolith", "D23", PIUGAME )
			Prime2_Lock( "12__Monolith", "D23", "2,990", "D18", "gS" )

		//Lock( "14__Reminiscence", "S15, D17", PIUGAME )
			Prime2_Lock( "14__Reminiscence", "S15", "750", "S10", "gS" )
			Prime2_Lock( "14__Reminiscence", "D17", "1,190", "D10", "gS" )

	// 2.00
		//Lock( "15__Super_Capriccio", "S18, D18", PIUGAME )
			Prime2_Lock( "15__Super_Capriccio", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "15__Super_Capriccio", "D18", "1,440", "D11", "gS" )

		//Lock( "15__Anguished_Unmaking", "S17, D18", PIUGAME )
			Prime2_Lock( "15__Anguished_Unmaking", "S17", "1,020", "S15", "A" )
			Prime2_Lock( "15__Anguished_Unmaking", "D18", "1,440", "D09", "gS" )

		//Lock( "15__Energetic", "S16, D16, D19", PIUGAME )
			Prime2_Lock( "15__Energetic", "S16", "800", "S13", "A" )
			Prime2_Lock( "15__Energetic", "D16", "960", "D14", "A" )
			Prime2_Lock( "15__Energetic", "D19", "1,710", "D16", "A" )

		//Lock( "15__Really_Really", "S15, D16", PIUGAME )
			Prime2_Lock( "15__Really_Really", "S15", "750", "S13", "A" )
			Prime2_Lock( "15__Really_Really", "D16", "960", "D07", "gS" )

		//Lock( "15__Infinity", "S18, S21, D19, D24", PIUGAME )
			Prime2_Lock( "15__Infinity", "S18", "1,260", "S15", "A" )
			Prime2_Lock( "15__Infinity", "S21", "2,100", "S18", "A" )
			Prime2_Lock( "15__Infinity", "D19", "1,710", "D10", "gS" )
			Prime2_Lock( "15__Infinity", "D24", "3,360", "D19", "gS" )

		//Lock( "15__V3", "S17, D18, D24", PIUGAME )
			Prime2_Lock( "15__V3", "S17", "1,020", "S14", "A" )
			Prime2_Lock( "15__V3", "D18", "1,440", "D09", "SS" )
			Prime2_Lock( "15__V3", "D24", "3,360", "D18", "gS" )

		//Lock( "15__Twist_of_Fate", "S18, D20", PIUGAME )
			Prime2_Lock( "15__Twist_of_Fate", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "15__Twist_of_Fate", "D20", "2,000", "D17", "A" )

		//Lock( "15__HTTP", "S17, S21, D19, D23", PIUGAME )
			Prime2_Lock( "15__HTTP", "S17", "1,020", "S14", "A" )
			Prime2_Lock( "15__HTTP", "S21", "2,100", "S17", "A" )
			Prime2_Lock( "15__HTTP", "D19", "1,710", "D12", "A" )
			Prime2_Lock( "15__HTTP", "D23", "2,990", "D19", "A" )

	// 2.01
		//Lock( "15__Pick_Me_season_2", "S17, D18", PIUGAME )
			Prime2_Lock( "15__Pick_Me_season_2", "S17", "1,020", "S14", "A" )
			Prime2_Lock( "15__Pick_Me_season_2", "D18", "1,440", "D16", "A" )

		//Lock( "15__Rave_til_the_Earth_End", "S19, D20", PIUGAME )
			Prime2_Lock( "15__Rave_til_the_Earth_End", "S19", "1,520", "S17", "A" )
			Prime2_Lock( "15__Rave_til_the_Earth_End", "D20", "2,000", "D18", "A" )

	// 2.02
	 	//Lock( "15__Travel_to_Future", "S19, D23", PIUGAME )
			Prime2_Lock( "15__Travel_to_Future", "S19", "1,520", "S17", "A" )
			Prime2_Lock( "15__Travel_to_Future", "D23", "2,990", "D21", "A" )

	 	//Lock( "03__Naissance", "S16", PIUGAME )
			Prime2_Lock( "03__Naissance", "S16", "800", "S10", "gS" )

	 	//Lock( "14__Annihilator_Method", "S23", PIUGAME )
			Prime2_Lock( "14__Annihilator_Method", "S23", "2,760", "S19", "A" )

	// 2.03
	 	//Lock( "15__Silver_Beat", "D18", PIUGAME )
			Prime2_Lock( "15__Silver_Beat", "D18", "1,440", "D12", "S" )

	 	//Lock( "15__Tritium", "S20, D19, D22", PIUGAME )
			Prime2_Lock( "15__Tritium", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "15__Tritium", "D19", "1,710", "D14", "A" )
			Prime2_Lock( "15__Tritium", "D22", "2,640", "D19", "A" )

	 	//Lock( "15__Passing_Rider", "S20", PIUGAME )
			Prime2_Lock( "15__Passing_Rider", "S20", "1,800", "S16", "A" )

	 	//Lock( "15__Awakening", "S19, D20", PIUGAME )
			Prime2_Lock( "15__Awakening", "S19", "1,520", "S16", "A" )
			Prime2_Lock( "15__Awakening", "D20", "2,000", "D17", "A" )

	 	//Lock( "15__Gothique_Resonance", "S20", PIUGAME )
			Prime2_Lock( "15__Gothique_Resonance", "S20", "1,800", "S18", "A" )

	// 2.04
	 	//Lock( "15__Cross_Over", "S18, S22, D19, D23", PIUGAME )
			Prime2_Lock( "15__Cross_Over", "S18", "1,260", "S15", "A" )
			Prime2_Lock( "15__Cross_Over", "S22", "2,420", "S18", "A" )
			Prime2_Lock( "15__Cross_Over", "D19", "1,710", "D14", "A" )
			Prime2_Lock( "15__Cross_Over", "D23", "2,990", "D19", "A" )

	 	//Lock( "15__Waltz_of_Doge", "S19, D20", PIUGAME )
			Prime2_Lock( "15__Waltz_of_Doge", "S19", "1,520", "S17", "A" )
			Prime2_Lock( "15__Waltz_of_Doge", "D20", "1,440", "D18", "A" )

	 	//Lock( "15__Black_Dragon", "S20, D19", PIUGAME )
			Prime2_Lock( "15__Black_Dragon", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "15__Black_Dragon", "D19", "1,710", "D17", "A" )

	 	//Lock( "15__A_Site_De_La_Rue", "S20, D20, D24", PIUGAME )
			Prime2_Lock( "15__A_Site_De_La_Rue", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "15__A_Site_De_La_Rue", "D20", "2,000", "D12", "gS" )
			Prime2_Lock( "15__A_Site_De_La_Rue", "D24", "3,360", "D20", "A" )

	 	//Lock( "15__Gargoyle__FULL", "S23, D25", PIUGAME )
			Prime2_Lock( "15__Gargoyle__FULL", "S23", "15,000", "S21", "A" )
			Prime2_Lock( "15__Gargoyle__FULL", "D25", "25,000", "D22", "A" )

	// 2.05
	 	//Lock( "15__Break_Out", "S19, D18, D22", PIUGAME )
			Prime2_Lock( "15__Break_Out", "S19", "1,520", "S16", "A" )
			Prime2_Lock( "15__Break_Out", "D18", "1,440", "D12", "S" )
			Prime2_Lock( "15__Break_Out", "D22", "2,640", "D18", "A" )

	 	//Lock( "T15__The_Quick_Brown_Fox", "S20, S23, D24", PIUGAME )
			Prime2_Lock( "15__The_Quick_Brown_Fox", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "15__The_Quick_Brown_Fox", "S23", "2,760", "S20", "A" )
			Prime2_Lock( "15__The_Quick_Brown_Fox", "D24", "3,360", "D14", "gS" )

	 	//Lock( "15__Visual_Dream_II", "S18, D19", PIUGAME )
			Prime2_Lock( "15__Visual_Dream_II", "S18", "1,260", "S16", "A" )
			Prime2_Lock( "15__Visual_Dream_II", "D19", "1,710", "D10", "S" )

	 	//Lock( "15__BSPower_Explosion", "S20, S22, D20, D23", PIUGAME )
			Prime2_Lock( "15__BSPower_Explosion", "S20", "1,800", "S17", "A" )
			Prime2_Lock( "15__BSPower_Explosion", "S22", "2,420", "S20", "A" )
			Prime2_Lock( "15__BSPower_Explosion", "D20", "2,000", "D13", "S" )
			Prime2_Lock( "15__BSPower_Explosion", "D23", "2,990", "D20", "A" )

	 	//Lock( "15__Escape", "S21, S24, D22", PIUGAME )
			Prime2_Lock( "15__Escape", "S21", "2,100", "S18", "A" )
			Prime2_Lock( "15__Escape", "S24", "4,680", "S21", "A" )
			Prime2_Lock( "15__Escape", "D22", "2,640", "D19", "A" )

	//delete tempUnlockPatchIndex;
	//delete tempCurrentMix;

	On( "XX", "..@2.08" )
	// 1.00

		Lock( "16__BBoom_BBoom", "S15", "at least S13 A" )
		Lock( "16__BBoom_BBoom", "D18", "at least S on S15 & D15" )

		Lock( "16__Nekkoya_Pick_Me", "S17", "at least S15 A" )

		Lock( "16__Boomerang", "S14", "AM.Pass Login" )
		Lock( "16__Boomerang", "S17", "at least S14 A" )
		Lock( "16__Boomerang", "D16", "D7 SSS" )
		Lock( "16__Boomerang", "D20", "at least S on S17 & D16" )
		Lock( "16__Boomerang", "CoOp(x2)", "Play co-op charts 60 times?" )

		Lock( "16__Im_So_Sick", "S17", "at least S15 A" )
		Lock( "16__Im_So_Sick", "D18", "at least D16 A" )
		Lock( "16__Im_So_Sick", "D20", "at least S on S15, D16, S17, and D18" )

		Lock( "16__Good_Bye", "S10", "at least S10 A on Boomerang" )
		Lock( "16__Good_Bye", "S14", "AM.Pass Login" )
		Lock( "16__Good_Bye", "S17", "at least S14 S" )
		Lock( "16__Good_Bye", "D16", "at least D10 SS" )
		Lock( "16__Good_Bye", "D18", "at least S17 A" )

		Lock( "16__Love_Scenario", "D14", "at least S14 A" )
		Lock( "16__Love_Scenario", "S17", "at least S14 S" )

		Lock( "16__Very_Nice", "S14", "AM.Pass Login" )
		Lock( "16__Very_Nice", "S17", "at least S14 A" )
		Lock( "16__Very_Nice", "D15", "at least S14 A" )
		Lock( "16__Very_Nice", "D18", "at least D15 S" )

		Lock( "16__Fly_High", "S18", "at least S15 A" )
		Lock( "16__Fly_High", "D19", "at least D16 A" )

		Lock( "16__Hann_Alone", "S16", "AM.Pass Login" )

		Lock( "16__Wedding_Crashers", "S18", "AM.Pass Login" )
		Lock( "16__Wedding_Crashers", "S21", "at least S18 A" )
		Lock( "16__Wedding_Crashers", "D19", "at least D13 SS" )
		Lock( "16__Wedding_Crashers", "D22", "Advanced Lv. 5 Title" )
		Lock( "16__Wedding_Crashers", "CoOp(x3)", "Play co-op charts 30 times" )

		Lock( "16__Obelisque", "S15", "at least S10 S" )
		Lock( "16__Obelisque", "S17", "at least S15 A" )
		Lock( "16__Obelisque", "D15", "at least D11 S" )
		Lock( "16__Obelisque", "D17", "at least D15 A" )

		Lock( "16__Percent_X", "D19", "at least D13 SS" )

		Lock( "16__Vanish", "S17", "at least S12 S" )
		Lock( "16__Vanish", "D18", "at least D12 SS" )
		Lock( "16__Vanish", "D22", "Advanced Lv. 6 Title" )

		Lock( "16__Macaron_Day", "D18", "at least D13 SS" )

		Lock( "16__Poseidon", "S14", "at least S10 S" )
		Lock( "16__Poseidon", "D22", "at least D16 SS" )

		Lock( "16__I_Want_U", "S19", "at least S16 A" )
		Lock( "16__I_Want_U", "D17", "at least D13 S" )
		Lock( "16__I_Want_U", "D21", "Advanced Lv. 4 Title" )

		Lock( "16__Le_Grand_Rouge", "S20", "at least S17 A" )
		Lock( "16__Le_Grand_Rouge", "D22", "at least D19 A" )

		Lock( "16__Club_Night", "S18", "at least S16 A" )
		Lock( "16__Club_Night", "S22", "at least S18 S" )
		Lock( "16__Club_Night", "D12", "at least D12 A on Loki" )
		Lock( "16__Club_Night", "D18", "at least D12 SS" )
		Lock( "16__Club_Night", "D21", "Advanced Lv. 3 Title" )
		Lock( "16__Club_Night", "CoOp(x2)", "get CoOp Intermediate title" )  // according to Seth Sanches at https://www.facebook.com/groups/1475683766036553/permalink/2303998833205038/

		Lock( "16__Black_Swan", "S12", "AM.Pass level 10" )
		Lock( "16__Black_Swan", "S14", "AM.Pass level 12" )
		Lock( "16__Black_Swan", "S16", "AM.Pass level 14" )
		Lock( "16__Black_Swan", "S19", "AM.Pass level 16" )
		Lock( "16__Black_Swan", "D15", "AM.Pass level 18" )
		Lock( "16__Black_Swan", "D22", "at least D15 SS" )

		Lock( "16__Imagination", "S12", "AM.Pass level 20" )
		Lock( "16__Imagination", "S15", "AM.Pass level 22" )
		Lock( "16__Imagination", "S19", "AM.Pass level 24" )
		Lock( "16__Imagination", "D16", "AM.Pass level 26" )
		Lock( "16__Imagination", "D21", "AM.Pass level 28" )

		Lock( "16__Kimchi_Fingers", "S14", "AM.Pass level 30 / Prime 2 Global Top 1000 rank reward" )
		Lock( "16__Kimchi_Fingers", "S17", "AM.Pass level 32 / Prime 2 Global Top 1000 rank reward" )
		Lock( "16__Kimchi_Fingers", "S20", "AM.Pass level 34 / Prime 2 Global Top 1000 rank reward" )
		Lock( "16__Kimchi_Fingers", "D16", "AM.Pass level 36 / Prime 2 Global Top 1000 rank reward" )
		Lock( "16__Kimchi_Fingers", "D21", "AM.Pass level 38 / Prime 2 Global Top 1000 rank reward" )

		Lock( "16__Loki", "S12", "AM.Pass level 40 / G-Plex Field Test participant reward" )
		Lock( "16__Loki", "S16", "AM.Pass level 42 / G-Plex Field Test participant reward" )
		Lock( "16__Loki", "S19", "AM.Pass level 44 / G-Plex Field Test participant reward" )
		Lock( "16__Loki", "D12", "AM.Pass level 46 / G-Plex Field Test participant reward" )
		Lock( "16__Loki", "D19", "AM.Pass level 48 / G-Plex Field Test participant reward" )
		Lock( "16__Loki", "S21", "Clear 8 Mission Zone quests" )

		Lock( "16__Nyarlathotep", "S18", "at least S16 A" )
		Lock( "16__Nyarlathotep", "S23", "Advanced Lv. 8 Title" )
		Lock( "16__Nyarlathotep", "D20", "Advanced Lv. 1 Title" )
		Lock( "16__Nyarlathotep", "D23", "Advanced Lv. 9 Title" )
		Lock( "16__Nyarlathotep", "D25", "Expert Lv. 2 Title" )

		Lock( "16__Nyarlathotep__SHORT", "D24", "Expert Lv. 1 Title" )

		Lock( "09__Can_Can", "S20", "Advanced Lv. 2 Title" )
		Lock( "09__Can_Can", "D22", "AM.Pass level 40" )

		Lock( "16__Obliteration", "S17", "at least S14 A" )
		Lock( "16__Obliteration", "D15", "at least D10 S" )
		Lock( "16__Obliteration", "D19", "at least D15 S" )

		Lock( "16__Skeptic", "S12", "AM.Pass level 50" )
		Lock( "16__Skeptic", "S18", "AM.Pass level 55" )
		Lock( "16__Skeptic", "S22", "AM.Pass level 60" )
		Lock( "16__Skeptic", "S24", "AM.Pass level 65" )
		Lock( "16__Skeptic", "D14", "AM.Pass level 70" )
		Lock( "16__Skeptic", "D22", "AM.Pass level 75" )
		Lock( "16__Skeptic", "D25", "AM.Pass level 80" )

		Lock( "16__Dement_After_Legend", "S23", "Advanced Lv. 10 Title" )
		Lock( "16__Dement_After_Legend", "D26", "Expert Lv. 3 Title" )

		Lock( "16__Desaparecer", "S20", "AM.Pass level 100" )
		Lock( "16__Desaparecer", "S22", "AM.Pass level 100" )
		Lock( "16__Desaparecer", "D23", "AM.Pass level 100" )

		Lock( "16__8_6", "S12, S16, S20, D18, D21", "Acquire SSS 86 times, same charts allowed" )


	// 1.01

		Lock( "16__Boong_Boong", "S16", "at least A on Little Prince S16" )
		Lock( "16__Boong_Boong", "D12", "at least SS on Little Prince D11" )
		Lock( "16__Boong_Boong", "D19", "at least A on Little Prince D19" )

		Lock( "16__The_Little_Prince", "S18", "at least A on Boong Boong S18" )
		Lock( "16__The_Little_Prince", "D16", "at least A on Boong Boong D16" )

		Lock( "16__Timing", "S17", "at least S15 A" )
		Lock( "16__Timing", "D18", "at least D16 A" )

		Lock( "16__Ice_of_Death", "S20", "at least S17 A" )
		Lock( "16__Ice_of_Death", "D21", "at least D17 S" )

		Lock( "16__Xeroize", "S21", "randomize it or play with someone" )
		Lock( "16__Xeroize", "S24", "randomize it or play with someone" )
		Lock( "16__Xeroize", "D22", "Advanced Lv. 7 Title" )
		Lock( "16__Xeroize", "D25", "randomize it" )

		Lock( "16__Nihilism_Another_Ver", "S21", "at least Love is a Danger Zone 2 Another S16 A" )
		Lock( "16__Nihilism_Another_Ver", "D19", "at least Love is a Danger Zone 2 Another S17 A" )
		Lock( "16__Nihilism_Another_Ver", "D23", "at least LIADZ 2 Another S16/S17 S" )

		Lock( "16__8_6__FULL", "S16", "stage pass 86 S16 & Nakakapagpabagabag S15" )
		Lock( "16__8_6__FULL", "S21", "stage pass 86 S20 & Nakakapagpabagabag S19" )
		Lock( "16__8_6__FULL", "D23", "stage pass 86 D21 & Nakakapagpabagabag D20" )

		Lock( "0C__Jump", "D18", "Clear 16 mission zone quests" )


	// 1.02

		Lock( "16__Time_for_the_Moon_Night", "S18", "at least A+ on S16" )
		Lock( "16__Time_for_the_Moon_Night", "D21", "at least A+ on D18" )

		Lock( "16__Gashina", "S18", "at least S on S14" )
		Lock( "16__Gashina", "D19", "at least A+ on S18 and S on D15" )

		Lock( "16__Rage_of_Fire", "S18", "at least A+ on S16" )
		Lock( "16__Rage_of_Fire", "D19", "at least A+ on D17" )

		Lock( "16__You_and_I", "S21", "at least A+ on Chase Me S20 + Good Night S20 + Fly High S18" )
		Lock( "16__You_and_I", "D20", "at least A+ on Chase Me D18 + Good Night D19 + Fly High D19" )
		Lock( "16__You_and_I", "D25", "at least A+ on Chase Me D23 + Good Night D22 + Good Night D24" )

		Lock( "16__1949", "S21", "at least A+ on S16 and 1950 S20" )
		Lock( "16__1949", "S23", "at least A+ on 1950 S23, then randomize it" )

		Lock( "16__Meteo5cience", "S21", "at least A+ on Mad5cience S20 + Meteorize S17 + Meteo5cience S18" )
		Lock( "16__Meteo5cience", "D22", "at least A+ on Mad5cience D16 + Meteorize D18 + Meteo5cience D19" )

		Lock( "16__Allegro_Con_Fuoco__FULL", "S23", "at least A+ on Con Fuoco S22 + Piu Mosso S19 + Furioso S20" )
		Lock( "16__Allegro_Con_Fuoco__FULL", "D25", "at least A+ on Con Fuoco D23 + Piu Mosso D19 + Furioso D20" )

		Lock( "14__Super_Fantasy", "S20", "clear 24 mission zone quests" )


	// 1.03

		Lock( "16__Starry_Night", "S16, D17", "at least SSS on S1" )

		Lock( "16__Can_Can_Orpheus", "S22", "at least S on Can Can radzetsky S16" )
		Lock( "16__Can_Can_Orpheus", "D23", "at least S on Can Can radzetsky D17" )

		Lock( "16__Papasito", "S20", "at least S on S15 and A on S16" )
		Lock( "16__Papasito", "D21", "at least S on D16 and A on D18" )

		Lock( "16__Fires_of_Destiny", "S20", "at least S on S16 and A on S18" )
		Lock( "16__Fires_of_Destiny", "D22", "at least S on D11 and A on D18" )

		Lock( "16__Forgotten_Vampire", "S18", "at least S on S13 and A on S16" )
		Lock( "16__Forgotten_Vampire", "D20", "at least S on D14 and A on D17" )

		Lock( "16__Conflict", "S22", "at least S on S17 and S19" )
		Lock( "16__Conflict", "D24", "at least S on D21" )

		Lock( "0E__Higgledy_Piggledy", "D20", "clear 32 mission zone quests" )

		Lock( "12__Monolith", "S21", "clear 40 mission zone quests" )


	// 1.04

		Lock( "16__Black_Cat", "S17", "at least A sb on S14" )
		Lock( "16__Black_Cat", "D18", "at least A sb on D16" )

		Lock( "16__Good_Bye", "D21", "clear 48 mission zone quests" )

		Lock( "16__King_of_Sales", "S21", "at least S on S18" )
		Lock( "16__King_of_Sales", "D23", "at least SS on D19" )

		Lock( "16__1949", "D26", "clear Ignis D27 mission" )

		Lock( "16__Heart_Rabbit_Coaster", "S21", "at least A on S11, S14 and S17" )
		Lock( "16__Heart_Rabbit_Coaster", "S23", "at least S on S11, S14, S17 and A+ on S21" )
		Lock( "16__Heart_Rabbit_Coaster", "D22", "at least S on D13, D18" )
		Lock( "16__Heart_Rabbit_Coaster", "D25", "at least S on D13, D18 and A+ on D22" )

		Lock( "16__Tantanmen", "S20", "at least S on S17" )
		Lock( "16__Tantanmen", "D23", "at least S on D20" )

		Lock( "16__F_r_iend", "S21", "at least S on S10, S15 and S19" )
		Lock( "16__F_r_iend", "S23", "at least S on S10, S15, S19 and A+ on S21" )
		Lock( "16__F_r_iend", "D21", "at least S on D12 and D17" )
		Lock( "16__F_r_iend", "D25", "at least S on D12, D17 and D21" )

		Lock( "16__Rising_Star", "S17", "at least A+ on S15" )
		Lock( "16__Rising_Star", "D19", "at least A+ on D17" )

		Lock( "0A__Dignity", "D26", "at least 5mln score on D24" )


	// 1.05

		Lock( "16__Carmen_Bus", "S18", "At least A sb on S16" )
		Lock( "16__Carmen_Bus", "S21", "At least S on S18" )
		Lock( "16__Carmen_Bus", "D20", "At least SS on D13" )
		Lock( "16__Carmen_Bus", "D22", "At least A on D20" )

		Lock( "16__Tales_of_Pumpnia", "S19", "At least S on S16" )
		Lock( "16__Tales_of_Pumpnia", "D20", "At least S on D17" )

		Lock( "16__Orbit_Stabilizer", "S19", "At least S on S16" )
		Lock( "16__Orbit_Stabilizer", "S21", "At least A on S19" )
		Lock( "16__Orbit_Stabilizer", "D21", "At least S on D18" )
		Lock( "16__Orbit_Stabilizer", "D23", "At least A sb on D21" )

		Lock( "16__Cross_Soul", "S20", "At least A sb on Cross Soul S17 and Cross Over S18" )
		Lock( "16__Cross_Soul", "S22", "At least A sb on Cross Soul S20 and Cross Over S22" )
		Lock( "16__Cross_Soul", "D20", "At least A sb on Cross Soul D18 and Cross Over D19" )
		Lock( "16__Cross_Soul", "D24", "At least A sb on Cross Soul D20 and Cross Over D23" )

		Lock( "16__Full_Moon", "S20", "At least S on S16" )
		Lock( "16__Full_Moon", "S22", "At least A sb on S20" )
		Lock( "16__Full_Moon", "D24", "At least S on D20" )

		Lock( "16__Prime_Time", "S21", "At least SS on S15" )
		Lock( "16__Prime_Time", "S23", "At least A on S21" )
		Lock( "16__Prime_Time", "D26", "At least 15(14?)kk score on DP24 and atl least A sb" )

		Lock( "16__Can_Can_Orpheus__SHORT", "D15", "At least A sb on D13" )
		Lock( "16__Can_Can_Orpheus__SHORT", "D17", "At least A sb on D15" )
		Lock( "16__Can_Can_Orpheus__SHORT", "D19", "At least A sb on D17" )
		Lock( "16__Can_Can_Orpheus__SHORT", "D21", "At least A sb on D19" )
		Lock( "16__Can_Can_Orpheus__SHORT", "D23", "At least A sb on D21" )
		Lock( "16__Can_Can_Orpheus__SHORT", "D25", "At least S on D23" )


	// 2.00

		Lock( "16__Hit", "S16", "At least A+ on S14" )
		Lock( "16__Hit", "S19", "At least A+ on S16" )
		Lock( "16__Hit", "D18", "At least A+ on D16" )
		Lock( "16__Hit", "D21", "At least S on D18" )

		Lock( "16__Adios", "S17", "At least S on S13 and S15" )
		Lock( "16__Adios", "D20", "At least S on D15 and D18" )

		Lock( "16__Bungee_Fall_in_Love", "S17", "At least S on S14" )
		Lock( "16__Bungee_Fall_in_Love", "D18", "At least S on D15" )

		Lock( "16__Rooftop", "S16", "At least S on S13" )
		Lock( "16__Rooftop", "D18", "At least S on D15" )
		Lock( "16__Rooftop", "D20", "At least S on S16 and D18" )

		Lock( "16__Wicked_Legend", "S19", "At least S on S10 and S15" )
		Lock( "16__Wicked_Legend", "D21", "At least S on D12 and D18" )

		Lock( "16__Janus", "S20", "At least S on S17" )
		Lock( "16__Janus", "D22", "At least S on D19" )

		Lock( "16__Lepton_Strike", "S19", "At least S on S10 and S16" )
		Lock( "16__Lepton_Strike", "S22", "At least S on 19" )
		Lock( "16__Lepton_Strike", "D21", "At least S on D11 and D17" )
		Lock( "16__Lepton_Strike", "D23", "At least A+ on D21" )

		Lock( "16__After_a_Thousand_Years", "S20", "At least A+ on S18" )
		Lock( "16__After_a_Thousand_Years", "D21", "At least SS on D14" )

		Lock( "16__Your_Mind", "S21", "At least S on S17" )
		Lock( "16__Your_Mind", "D23", "At least SS on D18" )

		Lock( "16__Uranium", "S19", "At least A+ on S16 and Tritium S17" )
		Lock( "16__Uranium", "S22", "At least A+ on S19 and Tritium S21" )
		Lock( "16__Uranium", "D20", "At least A+ on D17 and Tritium D19" )
		Lock( "16__Uranium", "D24", "At least S on D20 and Tritium D21" )

		Lock( "0F__My_Dreams", "D22", "At least S on D18" )

		Lock( "0C__Jump", "S16", "At least S on S13" )


	// 2.01

		Lock( "16__Snapping", "S17", "At least A sb on S15" )
		Lock( "16__Snapping", "S19", "At least S on S15 and S17" )
		Lock( "16__Snapping", "D18", "At least A on D16" )

		Lock( "16__Switronic", "S18", "At least S+ on S15" )
		Lock( "16__Switronic", "D19", "At least S on D16" )

		Lock( "16__Transacaglia_in_G_minor", "S19", "At least A on S16 and Passacaglia S17" )
		Lock( "16__Transacaglia_in_G_minor", "D21", "At least A+ on D18 and Passacaglia D18" )

		Lock( "16__Indestructible", "S22", "At least S on S19" )
		Lock( "16__Indestructible", "D21", "At least A+ on D20" )
		Lock( "16__Indestructible", "D22", "At least A+ on D21 and S22" )

		Lock( "16__Cycling", "S20", "At least S on S16" )
		Lock( "16__Cycling", "D21", "At least SS on D16" )

		Lock( "07__Will_o_the_Wisp", "D25", "At least S and score 4,900+k on D21" )

		Lock( "11__Pine_Nut", "D22", "At least SS on D16" )

		Lock( "15__Hellfire", "S22", "At least S on S18" )

		Lock( "16__After_a_Thousand_Years", "D23", "At least A+ and score 5,500+k on D21" )


	// 2.02

		Lock( "16__Bon_Bon_Chocolat", "S16", "At least A on S14" )
		Lock( "16__Bon_Bon_Chocolat", "D18", "At least S on D15" )

		Lock( "16__District_1", "S19", "At least S on S10 and S15" )
		Lock( "16__District_1", "D21", "At least S on D12 and D17" )

		Lock( "16__Adrenaline_Blaster", "S21", "At least S on S18" )
		Lock( "16__Adrenaline_Blaster", "D22", "At least SS on D18" )

		Lock( "16__Danger_n_Danger", "S19", "At least S on S16" )
		Lock( "16__Danger_n_Danger", "D21", "At least S on D18" )

		Lock( "16__Point_Zero_2", "S21", "At least A on S19 and Point Zero One S20" )
		Lock( "16__Point_Zero_2", "D22", "At least A on D20 and Point Zero One D22" )

		Lock( "16__Dual_Racing_RED_vs_BLUE", "S20", "At least A on S18, Start on Red S19 and Time Attack <Blue> S18" )
		Lock( "16__Dual_Racing_RED_vs_BLUE", "D22", "At least A on D20, Start on Red D20 and Time Attack <Blue> D20" )

		Lock( "16__Fire_Noodle_Challenge", "S23", "At least A on S20, Tantanmen S20 and Chinese restaurant S18" )
		Lock( "16__Fire_Noodle_Challenge", "D25", "At least A on D21, Tantanmen D23 and Chinese restaurant D19" )

		Lock( "16__Time_for_the_Moon_Night__FULL", "S21", "At least S on S18?" )
		Lock( "16__Time_for_the_Moon_Night__FULL", "D24", "At least S on D20 and Time for the Moon Night D21" )

		Lock( "15__Super_Capriccio", "D23", "At least SS on D19" )
		Lock( "15__Escape", "D26", "At least 8,000k on S24 and S on D22" )


	// 2.03

		Lock( "16__Gotta_Go", "S17", "At least A+ on S15" )
		Lock( "16__Gotta_Go", "D18", "At least A+ on D16" )

		Lock( "16__Iolite_Sky", "S20", "At least S on S16" )
		Lock( "16__Iolite_Sky", "S22", "At least A+ on s20" )
		Lock( "16__Iolite_Sky", "D24", "At least SS on D17" )

		Lock( "16__La_Cinquantaine", "S19", "At least S on S16" )
		Lock( "16__La_Cinquantaine", "S22", "At least S on S16 and S20" )
		Lock( "16__La_Cinquantaine", "D20", "At least S on D16" )
		Lock( "16__La_Cinquantaine", "D24", "At least S on D16 and D20" )

		Lock( "16__Broken_Karma", "S21", "At least A+ on S19" )
		Lock( "16__Broken_Karma", "D23", "At least S on D20" )

		Lock( "16__Cutie_Song", "S19", "At least S on S15" )
		Lock( "16__Cutie_Song", "D21", "At least S on D17" )


	// 2.04

		Lock( "16__Jogging", "S18", "At least A+ on S16" )
		Lock( "16__Jogging", "D18", "At least A+ on D16" )
		Lock( "16__Jogging", "D22", "At least S on D18" )

		Lock( "16__Destrucimate", "S22", "At least SS on S19" )
		Lock( "16__Destrucimate", "D24", "At least S on D19" )

		Lock( "16__Clematis_Rapsodia", "S22", "At least A+ on S18, Twist of Fate S19 and Fires of Destiny S20" )
		Lock( "16__Clematis_Rapsodia", "D23", "At least S on D19, A+ on Twist of Fate D20 and Fires of Destiny D21" )

		Lock( "16__Stardream", "S21", "At least A+ on S15 and S18" )
		Lock( "16__Stardream", "D22", "At least A+ on D15 and D19" )

		Lock( "16__Over_the_Horizon", "S20", "At least S on S17" )
		Lock( "16__Over_the_Horizon", "D21", "At least SSS on D14" )

		Lock( "16__Houseplan", "S17", "At least A+ on S15" )
		Lock( "16__Houseplan", "D18", "At least A+ on D16" )

		Lock( "16__Headless_Chicken", "S21", "At least A+ on S19" )
		Lock( "16__Headless_Chicken", "D21", "At least SS on D17" )

		Lock( "16__Baroque_Virus__FULL", "S21", "At least A+ on S19" )
		Lock( "16__Baroque_Virus__FULL", "D23", "At least A+ on S21 and D20" )

		Lock( "16__Errorcode_0", "S25", "At least A+ and score 11,000,000+ on S23, and at least A+ on Vacuum Cleaner S25" )
		Lock( "16__Errorcode_0", "D27", "At least A+ and score 14,000,000+ on D24, and at least A+ on Vacuum Cleaner D27" )

		Lock( "16__Love_Scenario", "D19", "?At least S on S17 and SS on D14?" )

		Lock( "16__Dement_After_Legend", "D24", "At least S on D21" )


	// 2.05

		Lock( "16__Brain_Power", "S3, S5, S8, S11, S16, S18, S22, D8, D14, D20, D24", "Unlock event, machine-wide. Get stage passes to fill the progress bar." )

		Lock( "16__Life_is_Piano", "S19", "At least S on S16" )
		Lock( "16__Life_is_Piano", "D21", "At least S on D18" )

		Lock( "16__The_Reverie", "S19", "At least A+ on S17" )
		Lock( "16__The_Reverie", "S21", "At least S on S17 and S19" )
		Lock( "16__The_Reverie", "D21", "At least S on D18" )

		Lock( "16__God_Mode_2_0", "S21", "At least A+ on God Mode S20" )
		Lock( "16__God_Mode_2_0", "D22", "At least A+ on God Mode D21" )

		Lock( "16__Full_Moon__FULL", "S22", "At least A+ on Full Moon S22" )
		Lock( "16__Full_Moon__FULL", "D24", "At least A+ on Full Moon D24" )

		Lock( "05__Rolling_Christmas", "D22", "At least SS on D16" )

		Lock( "16__Gotta_Go", "D20", "At least S on S17 and D18" )

		Lock( "14__Karyawisata", "D22", "At least SS on D16" )

		Lock( "14__Setsuna_Trip", "D23", "At least SS on D19" )

		Lock( "14__Trashy_Innocence", "S23", "At least S on S20" )

		Lock( "14__Break_It_Down", "D21", "Pass Break it Down D21 mission" )


	// 2.06
		Lock( "16__Crossing_Delta", "S10", "Global unlock event" )
		Lock( "16__Crossing_Delta", "S12", "Global unlock event" )
		Lock( "16__Crossing_Delta", "S16", "Global unlock event" )
		Lock( "16__Crossing_Delta", "S20", "Global unlock event" )
		Lock( "16__Crossing_Delta", "D13", "Global unlock event" )
		Lock( "16__Crossing_Delta", "D17", "Global unlock event" )
		Lock( "16__Crossing_Delta", "D21", "Global unlock event" )
		Lock( "16__Crossing_Delta", "D23", "Global unlock event" )
		Lock( "16__Crossing_Delta", "CoOp(x2)", "Global unlock event" )

		Lock( "16__Harmagedon", "S22", "At least S on S19" )
		Lock( "16__Harmagedon", "D24", "At least S on D21" )

		Lock( "16__Slapstick_Parfait", "S19", "At least S on S16" )
		Lock( "16__Slapstick_Parfait", "D21", "At least S on D18" )

		Lock( "16__Paved_Garden", "S19", "At least S on S16" )
		Lock( "16__Paved_Garden", "S22", "At least S on S19" )
		Lock( "16__Paved_Garden", "D21", "At least SS on D17" )
		Lock( "16__Paved_Garden", "D24", "At least S on D21" )

		Lock( "16__Pop_Sequence", "S21", "At least S15 A + Sp18 A" )
		Lock( "16__Pop_Sequence", "D23", "At least D19 A + Dp22 A" )

		Lock( "11__Night_Duty", "S19", "At least A+ on S17" )
		Lock( "11__Night_Duty", "D20", "At least SS on D15" )

		Lock( "07__Top_City", "S20", "SSS on S12" )

		Lock( "11__Hungarian_Dance_V", "D21", "At least SS on D17" )

		Lock( "13__Hypnosis_SynthWulf_Mix", "D22", "At least S on D19" )

		Lock( "16__Vanish", "D24", "At least 6,000k score on D22" )

		Lock( "16__Club_Night", "D23", "At least 5,800k score on S21" )


	// 2.07
		Lock( "16__Repentance", "S19", "S on S16" )
		Lock( "16__Repentance", "S22", "S on S19" )
		Lock( "16__Repentance", "D20", "S on D17" )
		Lock( "16__Repentance", "D23", "S on D20" )
		Lock( "16__Repentance", "D26", "S on D23" )

		Lock( "16__Sugar_Plum", "S18", "S on S15" )
		Lock( "16__Sugar_Plum", "D20", "S on D16" )

		Lock( "16__Telling_Fortune_Flower", "S21", "A on S19" )
		Lock( "16__Telling_Fortune_Flower", "S23", "A on S21 with a min score (supposedly 5.5 mil)" )
		Lock( "16__Telling_Fortune_Flower", "D23", "S on D20" )
		Lock( "16__Telling_Fortune_Flower", "D26", "S on D23" )

		Lock( "16__Gloria", "S20", "A on S17" )
		Lock( "16__Gloria", "S23", "S on S17 + A on S20" )
		Lock( "16__Gloria", "D21", "A on D18" )
		Lock( "16__Gloria", "D24", "S on D18 + A on D21" )

		Lock( "16__Kokugen_Kairou_Labyrinth", "S20", "S on S17" )
		Lock( "16__Kokugen_Kairou_Labyrinth", "S23", "S on S20" )
		Lock( "16__Kokugen_Kairou_Labyrinth", "D22", "S on D18" )
		Lock( "16__Kokugen_Kairou_Labyrinth", "D26", "S on D22" )

		Lock( "16__Papasito__FULL", "S22", "A on arcade ver. S20" )
		Lock( "16__Papasito__FULL", "D23", "A on arcade ver. D21" )

		Lock( "0A__Get_Up", "S21", "SS on S15" )
		Lock( "0A__Get_Up", "D23", "SS on D18" )

		Lock( "0C__Papa_Gonzales", "S22", "SS on S16" )
		Lock( "0C__Papa_Gonzales", "D23", "SS on D18" )

		Lock( "14__Red_Snow", "D23", "A on D21 with a score min (around 5.1 mil)" )

		Lock( "15__Super_Stylin", "D21", "S on D17" )

		Lock( "16__1949", "S26", " encounter in Random/play with friend (can 51 miss combo) + play 1950 S25" )

		Lock( "16__Indestructible", "D25", "S on D21 + S on D22" )

		Lock( "16__Danger_n_Danger", "D23", "A on D21" )
}

initFuncs.push( ApplyUnlocks );
