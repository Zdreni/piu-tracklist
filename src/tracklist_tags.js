"use strict";


import { FindSharedChartByDescr } from './tracklist.js'
import { AddSharedChartNote } from './tracklist_notes.js'


function Tag( tracklist, chartDescr, tagStr )
{
	const shared = FindSharedChartByDescr( tracklist, chartDescr );
	AddSharedChartNote( shared, 'info', tagStr );
}


export function ApplyTags( t )
{
	/* #memorize
		08__Come_to_Me S17
		07__Miss_s_Story S19
		17__Stager S17 S19 D18 D20
		14__Break_It_Down D21
		15__Twist_of_Fate S19 D21
		15__Cross_Time D22
		17__Chaos_Again S21
		11__Everybody_Got_2_Know S21
		14__Rock_the_House__SHORT S18
		0D__Ugly_Dee S17
		07__Dance_With_Me D18
	*/

	//#title.misc "Perfect breaker" '15__Gargoyle__FULL  S21' "Get 444,444 points or less"
	//#title.misc "Human metronome" [Yeo rae a S1] 180,000 Point or less

	//'No skills no pump'  [0C__Moonlight D21] SSS+ Grade or more
	//PUMP IS A SENSE  [07__Love_is_a_Danger_Zone D21] SSS+ Grade or more

	// B.P.M FOLLOWER
	// [Beethoven Virus D18] Perfect 927 / Great 1 / Miss 2 / Max Combo 747

	// [Waltz of Doge D20] Max Combo of 888
	// DOGE MAJOR STOCKHOLDER

	// [16__1949 D28] ROUGH GAME or more
	// [XX] Double Boss breaker

	// [16__Errorcode_0 S25] ROUGH GAME or more
	// [XX] Single Boss breaker

	// [15__Shub_Sothoth D27] ROUGH GAME or more
	// [PRIME2] Double Boss breaker

	// [15__Shub_Sothoth S25] ROUGH GAME or more
	// [PRIME2] Single Boss breaker

	// [14__Paradoxx D28] ROUGH GAME or more
	// [PRIME] Double Boss breaker

	// [14__Paradoxx S26] ROUGH GAME or more
	// [PRIME] Single Boss breaker

	// [13__Ignis_Fatuus D25] ROUGH GAME or more
	// [FIESTA2] Double Boss breaker

	// [13__Ignis_Fatuus S22] ROUGH GAME or more
	// [FIESTA2] Single Boss breaker

	// [11__Vacuum_Cleaner D26] ROUGH GAME or more
	// [FIESTA EX] Double Boss breaker

	// [11__Vacuum_Cleaner S25] ROUGH GAME or more
	// [FIESTA EX] Single Boss breaker

	// [10__Vacuum D25] ROUGH GAME or more
	// [FIESTA] Double Boss breaker

	// [10__Vacuum S23] ROUGH GAME or more
	// [FIESTA] Single Boss breaker

	// [0F__Final_Audition_ep_2_X D24] ROUGH GAME or more
	// [NXA] Double Boss breaker

	// [0F__Final_Audition_ep_2_X S23] ROUGH GAME or more
	// [NXA] Single Boss breaker

	// [0E__BanYa_P_Guitar_Remix D24] ROUGH GAME or more
	// [NX2] Double Boss breaker

	// [0E__BanYa_P_Guitar_Remix S22] ROUGH GAME or more
	// [NX2] Single Boss breaker

	// [0D__Bemera D26] ROUGH GAME or more
	// [NX] Double Boss breaker

	// [0D__Bemera S24] ROUGH GAME or more
	// [NX] Single Boss breaker

	// [0C__Love_is_a_Danger_Zone_2 D24] ROUGH GAME or more
	// [ZERO] Double Boss breaker

	// [0C__Love_is_a_Danger_Zone_2 S22] ROUGH GAME or more
	// [ZERO] Single Boss breaker

	// [0B__Canon_D D23] ROUGH GAME or more
	// [EXCEED2] Double Boss breaker

	// [0B__Canon_D S20] ROUGH GAME or more
	// [EXCEED2] Single Boss breaker

	// [0A__Dignity D24] ROUGH GAME or more
	// [EXCEED] Double Boss breaker

	// [0A__Dignity S21] ROUGH GAME or more
	// [EXCEED] Single Boss breaker

	// [08__Bee S17] ROUGH GAME or more
	// [THE PREX3] Boss breaker

	// [07__Love_is_a_Danger_Zone S17] ROUGH GAME or more
	// [THE REBIRTH] Boss breaker

	// [09__Can_Can D18] ROUGH GAME or more
	// [EXTRA] Boss breaker

	// [05__Slam S18] ROUGH GAME or more
	// [Perfect Collection] Boss breaker

	// [04__Mr_Larpus S15] ROUGH GAME or more
	// [The O.B.G SE] Boss breaker

	// [03__Turkey_March S12] ROUGH GAME or more
	// [The O.B.G] Boss breaker

	// [02__Extravaganza S11] ROUGH GAME or more
	// [The 2nd] Boss breaker

	// [01__Another_Truth S6] ROUGH GAME or more
	// [The 1st] Boss breaker

	// [16__Phalanx_RS2018 D24] SSS Grade or more
	// [BRACKET] Lv.10

	// [14__Scorpion_King D23] SSS Grade or more
	// [BRACKET] Lv.9

	// [16__Pop_Sequence D23] SSS Grade or more
	// [BRACKET] Lv.8

	// [11__What_Happened D23] SSS Grade or more
	// [BRACKET] Lv.7

	// [16__Meteo5cience D22] SSS Grade or more
	// [BRACKET] Lv.6

	// '16__Phalanx_RS2018 S22' SSS Grade or more
	// [BRACKET] Lv.5

	// '11__What_Happened S21' SSS Grade or more
	// [BRACKET] Lv.4

	// '16__Meteo5cience S21' SSS Grade or more
	// [BRACKET] Lv.3

	// [14__Mad5cience S20] SSS Grade or more
	// [BRACKET] Lv.2

	// [15__Allegro_Furioso D20] SSS Grade or more
	// [BRACKET] Lv.1

	Tag( t, '14__Imprinting D24', "SSS to get #title.half 10" )
	Tag( t, '0C__Love_is_a_Danger_Zone_try_to_B_P_M D23', "SSS to get #title.half 9" )
	Tag( t, '15__Redline D22', "SSS to get #title.half 8" )
	Tag( t, '0D__Witch_Doctor_1 D21', "SSS to get #title.half 7" )
	Tag( t, '15__Utsushiyo_No_Kaze D20', "SSS to get #title.half 6" )
	//Tag( t, '0C__Phantom D19.phoenix', "SSS to get #title.half 5" )
	Tag( t, '14__Super_Fantasy D18', "SSS to get #title.half 4" )
	Tag( t, '15__Shub_Niggurath D18', "SSS to get #title.half 3" )
	Tag( t, '11__Butterfly D17', "SSS to get #title.half 2" )
	Tag( t, '16__Mopemope D17', "SSS to get #title.half 1" )

	// [GIMMICK] Lv.10
	// [Everybody Got 2 Know S21] SSS Grade or more

	// [GIMMICK] Lv.9
	// [8 6 S20] SSS Grade or more

	// [GIMMICK] Lv.8
	// [Twist of Fate S19] SSS Grade or more

	// [GIMMICK] Lv.7
	// [Nakakapagpabagabag S19] SSS Grade or more

	// [GIMMICK] Lv.6
	// [Miss S' story S19] SSS Grade or more

	// [GIMMICK] Lv.5
	// [Rock the house - SHORT CUT - S18 ] SSS Grade or more

	// [GIMMICK] Lv.4
	// [Come to Me S17] SSS Grade or more

	// [GIMMICK] Lv.3
	// [Ugly Dee S17] SSS Grade or more

	// [GIMMICK] Lv.2
	// [8 6 S16] SSS Grade or more

	// [GIMMICK] Lv.1
	// [Yeo rae a S13] SSS Grade or more

	// [DRILL] Lv.10
	// [WI-EX-DOC-VA D24] SSS Grade or more

	// [DRILL] Lv.9
	// [Witch Doctor D23] SSS Grade or more

	// [DRILL] Lv.8
	// [Rock the house D22] SSS Grade or more

	// [DRILL] Lv.7
	// [Sorceress Elise S21] SSS Grade or more

	// [DRILL] Lv.6
	// [Overblow S20] SSS Grade or more

	// [DRILL] Lv.5
	// [Vacuum S19] SSS Grade or more

	// [DRILL] Lv.4
	// [Moonlight S18] SSS Grade or more

	// [DRILL] Lv.3
	// [Gun Rock S17] SSS Grade or more

	// [DRILL] Lv.2
	// [Vook S16] SSS Grade or more

	// [DRILL] Lv.1
	// [Hellfire S15] SSS Grade or more

	// [RUN] Lv.10
	// [Yog-Sothoth D24] SSS Grade or more

	// [RUN] Lv.9
	// [Baroque Virus - FULL SONG - D23] SSS Grade or more

	// [RUN] Lv.8
	// [Gargoyle - FULL SONG - D22] SSS Grade or more

	// [RUN] Lv.7
	// [Sarabande D21] SSS Grade or more

	// [RUN] Lv.6
	// [Bee D20] SSS Grade or more

	// [RUN] Lv.5
	// [Napalm S19] SSS Grade or more

	// [RUN] Lv.4
	// [Gothique Resonance S18] SSS Grade or more

	// [RUN] Lv.3
	// [Pavane S17] SSS Grade or more

	// [RUN] Lv.2
	// [Super Fantasy S16] SSS Grade or more

	// [RUN] Lv.1
	// [Switronic S15] SSS Grade or more

	// [TWIST] Lv.10
	// [Bee D24] SSS Grade or more

	// [TWIST] Lv.9
	// [Love Is A Danger Zone(Cranky Mix) D23] SSS Grade or more

	// [TWIST] Lv.8
	// [Super Fantasy D22] SSS Grade or more

	// [TWIST] Lv.7
	// [Love is a Danger Zone D21] SSS Grade or more

	// [TWIST] Lv.6
	// [Witch Doctor #1 D20] SSS Grade or more

	// [TWIST] Lv.5
	// [U GOT 2 KNOW S19] SSS Grade or more

	// [TWIST] Lv.4
	// [Solitary 2 S18] SSS Grade or more

	// [TWIST] Lv.3
	// [U Got Me Rocking S17] SSS Grade or more

	// [TWIST] Lv.2
	// [Street show down S16] SSS Grade or more

	// [TWIST] Lv.1
	// [Scorpion King S15] SSS Grade or more

/*
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
			"NoNoNo  S-p-15",
			"NoNoNo  D-p-15",
			"Red Swan  D-p-20",
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
/*
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
			"Pumptris (8Bit ver.)  [SHORT]  D-22",
		])
*/
}
