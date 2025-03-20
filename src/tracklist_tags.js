"use strict";


import { FindSharedChartsByDescr } from './tracklist.js'
import { AddSharedChartNote } from './tracklist_notes.js'


function Tag( tracklist, tagStr, chartsDescrList )
{
	if( ! Array.isArray( chartsDescrList ) )
		chartsDescrList = [ chartsDescrList ];

	for( const descrItem of chartsDescrList )
	{
		const sharedCharts = FindSharedChartsByDescr( tracklist, descrItem );
		for( const chart of sharedCharts )
			AddSharedChartNote( chart, 'info', tagStr );
	}
}


export function ApplyTags( t )
{
	/*
	Tag( '#slowdown',
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
	Tag( t, '#nakaka',
	[
		'15__Nakakapagpabagabag  D16/S19/D20',
		'16__8_6  S16/D18/S20/D21',
		'17__Euphorianic  S19',
		'17__Pneumonoultramicroscopicsilicovolcanoconiosis  S19/D22',
		'16__Tales_of_Pumpnia  S20/D21',
		'16__8_6__FULL  S21/D23',
	] );

	Tag( t, '#memorize',
	[
		'17__Stager  S17/S19/D18/D20',
		'17__Chaos_Again  S21',
		'16__Love_Scenario  S17/D19',
		'16__Pop_Sequence  Sp18/Dp22',
		'15__Twist_of_Fate  S19/D21',
		'15__Cross_Time  D22',
		'14__Red_Swan  Dp20',
		'14__Bad_Apple  S15',
		'14__Rock_the_House__SHORT  S18',
		'14__Break_It_Down  D21',
		'14__NoNoNo  Sp15/Dp15',
		'13__Nobody  S15/D17',
		'11__Everybody_Got_2_Know  S21',
		'0F__Uprock  S17',
		'0D__Ugly_Dee  S17',
		'08__Come_to_Me  S17',
		'07__Miss_s_Story  S19',
		'07__Dance_With_Me  D18',
		//'0B__Deja_Vu  aNM',
	]);

	//Tag( t, '13__Yeo_Rae_A  S1', "Pass with score <= 180,000 to get #phoenix.title 'Human metronome'" );
	//Tag( t, '15__Gargoyle__FULL  S21', "Pass with score <= 444,444 to get #phoenix.title 'Perfect breaker'" );

	Tag( t, "SSS+ to get #phoenix.title 'No skills no pump'", '0C__Moonlight  D21' );
	Tag( t, "SSS+ to get #phoenix.title 'PUMP IS A SENSE'", '07__Love_is_a_Danger_Zone  D21' );

	// B.P.M FOLLOWER
	// [Beethoven Virus D18] Perfect 927 / Great 1 / Miss 2 / Max Combo 747

	// [Waltz of Doge D20] Max Combo of 888
	// DOGE MAJOR STOCKHOLDER

	function PHOENIX_BOSS_TITLE( bossDetails, chart )
	{
		Tag( t, `Pass to get #phoenix.title.bossbreaker of ${bossDetails} Boss breaker`, chart + ".Phoenix" );
	}

	function PHOENIX_BOSS_TITLE_S_D( bossDetails, singleChart, doubleChart )
	{
		PHOENIX_BOSS_TITLE( `${bossDetails} Single`, singleChart );
		PHOENIX_BOSS_TITLE( `${bossDetails} Double`, doubleChart );
	}

	PHOENIX_BOSS_TITLE( '[The 1st]', '01__Another_Truth  S6'  )
	PHOENIX_BOSS_TITLE( '[The 2nd]', '02__Extravaganza  S11' )
	PHOENIX_BOSS_TITLE( '[The O.B.G]', '03__Turkey_March  S12' )
	PHOENIX_BOSS_TITLE( '[The O.B.G SE]', '04__Mr_Larpus  S15' )
	PHOENIX_BOSS_TITLE( '[Perfect Collection]', '05__Slam  S18' )
	PHOENIX_BOSS_TITLE( '[EXTRA]', '09__Can_Can  D18' )
	PHOENIX_BOSS_TITLE( '[THE REBIRTH]', '07__Love_is_a_Danger_Zone  S17' )
	PHOENIX_BOSS_TITLE( '[THE PREX3]', '08__Bee  S17' )

	PHOENIX_BOSS_TITLE_S_D( '[EXCEED]', '0A__Dignity  S21',
	                                    '0A__Dignity  D24' )

	PHOENIX_BOSS_TITLE_S_D( '[EXCEED2]', '0B__Canon_D  S20',
	                                     '0B__Canon_D  D23' )

	PHOENIX_BOSS_TITLE_S_D( '[ZERO]', '0C__Love_is_a_Danger_Zone_2  S22',
	                                  '0C__Love_is_a_Danger_Zone_2  D24' )

	PHOENIX_BOSS_TITLE_S_D( '[NX]', '0D__Bemera  S24',
	                                '0D__Bemera  D26' )

	PHOENIX_BOSS_TITLE_S_D( '[NX2]', '0E__BanYa_P_Guitar_Remix  S22',
	                                 '0E__BanYa_P_Guitar_Remix  D24' )

	PHOENIX_BOSS_TITLE_S_D( '[NXA]', '0F__Final_Audition_ep_2_X  S23',
	                                 '0F__Final_Audition_ep_2_X  D24' )

	PHOENIX_BOSS_TITLE_S_D( '[FIESTA]', '10__Vacuum  S23',
	                                    '10__Vacuum  D25' )

	PHOENIX_BOSS_TITLE_S_D( '[FIESTA EX]', '11__Vacuum_Cleaner  S25',
	                                       '11__Vacuum_Cleaner  D26' )

	PHOENIX_BOSS_TITLE_S_D( '[FIESTA2]', '13__Ignis_Fatuus  S22',
	                                     '13__Ignis_Fatuus  D25' )

	PHOENIX_BOSS_TITLE_S_D( '[PRIME]', '14__Paradoxx  S26',
	                                   '14__Paradoxx  D28' )

	PHOENIX_BOSS_TITLE_S_D( '[PRIME2]', '15__Shub_Sothoth  S25',
	                                    '15__Shub_Sothoth  D27' )

	PHOENIX_BOSS_TITLE_S_D( '[XX]', '16__Errorcode_0  S25',
	                                '16__1949  D28' )


	function PHOENIX_SKILL_TITLE( category, charts )
	{
		for( const [index, chart] of charts.entries() )
			Tag( t, `SSS to get #phoenix.title.${category} (${index+1})`, chart + ".Phoenix" );
	}


	PHOENIX_SKILL_TITLE( 'bracket', [
		'15__Allegro_Furioso  D20',
		'14__Mad5cience  S20',
		'16__Meteo5cience  S21',
		'11__What_Happened  S21',
		'16__Phalanx_RS2018  S22',
		'16__Meteo5cience  D22',
		'11__What_Happened  D23',
		'16__Pop_Sequence  D23',
		'14__Scorpion_King  D23',
		'16__Phalanx_RS2018  D24'
	] )


	PHOENIX_SKILL_TITLE( 'half', [
		'16__Mopemope  D17',
		'11__Butterfly  D17',
		'15__Shub_Niggurath  D18',
		'14__Super_Fantasy  D18',
		'0C__Phantom  D19',
		'15__Utsushiyo_No_Kaze  D20',
		'0D__Witch_Doctor_1  D21',
		'15__Redline  D22',
		'0C__Love_is_a_Danger_Zone_try_to_B_P_M  D23',
		'14__Imprinting D24'
	] )


	PHOENIX_SKILL_TITLE( 'gimmick', [
		'13__Yeo_Rae_A  S13',
		'16__8_6  S16',
		'0D__Ugly_Dee  S17',
		'08__Come_to_Me  S17',
		'14__Rock_the_House__SHORT  S18',
		'07__Miss_s_Story  S19',
		'15__Nakakapagpabagabag  S19',
		'15__Twist_of_Fate  S19',
		'16__8_6  S20',
		'11__Everybody_Got_2_Know  S21'
	] )


	PHOENIX_SKILL_TITLE( 'drill', [
		'15__Hellfire  S15',
		'07__Vook  S16',
		'0D__Gun_Rock  S17',
		'0C__Moonlight  S18',
		'10__Vacuum  S19',
		'11__Overblow  S20',
		'10__Sorceress_Elise  S21',
		'14__Rock_the_House  D22',
		'0C__Witch_Doctor  D23',
		'0D__Wi_Ex_Doc_Va  D24'
	] )


	PHOENIX_SKILL_TITLE( 'run', [
		'16__Switronic  S15',
		'14__Super_Fantasy  S16',
		'11__Pavane  S17',
		'15__Gothique_Resonance  S18',
		'10__Napalm  S19',
		'08__Bee  D20',
		'15__Sarabande  D21',
		'15__Gargoyle__FULL  D22',
		'16__Baroque_Virus__FULL  D23',
		'14__Yog_Sothoth  D24'
	] )


	PHOENIX_SKILL_TITLE( 'twist', [
		'14__Scorpion_King  S15',
		'07__Street_Show_Down  S16',
		'13__U_Got_Me_Rocking  S17',
		'0B__Solitary_2  S18',
		'10__U_Got_2_Know  S19',
		'0D__Witch_Doctor_1  D20',
		'07__Love_is_a_Danger_Zone  D21',
		'14__Super_Fantasy  D22',
		'13__Love_is_a_Danger_Zone_Cranky_Mix  D23',
		'08__Bee D24'
	] )

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
	*/
/*
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
