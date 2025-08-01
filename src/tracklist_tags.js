"use strict";


// const BGA = "#bga"

const BRACKETS = "#brackets"
const BRACKETS_PLUS = "#brackets.plus"
const ROLLING_BRACKETS = "#rolling_brackets"
const RUNS_AS_BRACKETS = "#runs_as_brackets"
const DRILLS = "#drills"
const JACKS = "#jacks"
const FOOTSWITCHES = "#footswitches"
const FOOTSWITCHES_PLUS = "#footswitches.plus"
const TWISTS = "#twists"
const TWISTS_BACK = "#twists.back"
const TWISTS_SIDE = "#twists.side"
const STEP_HOLD = "#step_hold"

const STAMINA = "#stamina"
const STAMINA_PLUS = "#stamina.plus"

const STRETCH = "#stretch"

const NAKAKA = "#nakaka (velocity gimmicks & step-hold twists)"

const EXOTIC_HANDS = "#exotic.hands"
const EXOTIC_CENTRALHOLD = "#exotic.central_hold"
const EXOTIC_TURN_AROUND = "#exotic.turn_around"
const EXOTIC_ONELEG = "#exotic.oneleg"

const SLOWDOWN = "#slowdown"
const GIMMICKS_STOPS = "#gimmicks.stops"
const GIMMICKS_VELOCITY = "#gimmicks.velocity"
const GIMMICKS_BLINKING = "#gimmicks.blinking"
const MEMORIZE = "#memorize"



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
	function T(charts, tags)
	{
		if( Array.isArray( tags ))
			tags = tags.join(" ");
		Tag( t, tags, charts );
	}


	T('17__1948  S18/S21/D24',  JACKS)


	T('17__4nt  S22/D24',  BRACKETS)


	T('16__8_6  S16/D18/S20/D21',  NAKAKA)

	T('16__8_6__FULL  S21/D23',  NAKAKA)


	T('15__A_Site_De_La_Rue  S17/S20/D20/D24', GIMMICKS_BLINKING)


	T('17__About_the_Universe  S21',  TWISTS)
	T('17__About_the_Universe  D24',  BRACKETS_PLUS)


	T('17__Acquire  S17',  [FOOTSWITCHES, TWISTS_BACK])
	T('17__Acquire  S20',  TWISTS_BACK)


	T('17__ALiVE  S18/S22',  BRACKETS);
	T('17__ALiVE  D21',  BRACKETS_PLUS);


	T('15__Allegro_Furioso  S20',  JACKS)


	T('14__Allegro_Piu_Mosso  S17',  FOOTSWITCHES)


	T('14__Annihilator_Method  S19',  TWISTS)


	T('10__Arirang  S19',  TWISTS)
	T('10__Arirang  S22',  JACKS)


	T('15__Asterios_ReEntry  D22',  TWISTS_BACK)


	T('15__Awakening  D20',  TWISTS_BACK)


	T('14__Bad_Apple  S15',  [MEMORIZE, GIMMICKS_STOPS])
	T('14__Bad_Apple  S17',  TWISTS)
	T('14__Bad_Apple  S19',  TWISTS_BACK)
	T('14__Bad_Apple  D20',  [TWISTS_BACK, STEP_HOLD])


	T('0E__BanYa_P_Guitar_Remix  S22/D24',  SLOWDOWN)


	T('13__Baroque_Virus  D20',  TWISTS_BACK)


	T('17__Becouse_of_You  D20',  STAMINA)
	T('17__Becouse_of_You  D22',  BRACKETS)


	T('0C__Beat_of_the_War_2  S21',  FOOTSWITCHES_PLUS)


	T('05__Beethoven_Virus  S17',  EXOTIC_TURN_AROUND)


	T('0D__Bemera  S17',  JACKS)
	T('0D__Bemera  D18',  TWISTS_BACK)


	T('10__Bemera__SHORT  S22',  JACKS)


	T('04__Betrayer  D17',  TWISTS_BACK)


	T('16__Brain_Power  D20',  GIMMICKS_BLINKING)


	T('14__Break_It_Down  S16',  EXOTIC_CENTRALHOLD)
	T('14__Break_It_Down  D21',  [MEMORIZE, GIMMICKS_STOPS])


	T('11__Butterfly  D17',  TWISTS_BACK)


	T('0E__Caprice_of_Otada  S17',  FOOTSWITCHES)


	T('17__Chaos_Again  S21',  [MEMORIZE, GIMMICKS_STOPS])


	T('0D__Chimera  S19',  SLOWDOWN)


	T('0F__Chopsticks_Challenge__FULL  S17',  TWISTS)


	T('16__Clematis_Rapsodia  D23',  BRACKETS)


	T('16__Club_Night  D23',  BRACKETS)


	T('15__Clue  D20',  [TWISTS_BACK, GIMMICKS_VELOCITY])
	T('15__Clue  D21',  TWISTS_BACK)


	T('08__Come_to_Me  S17',  [MEMORIZE, GIMMICKS_STOPS])


	T('15__Cross_Time  D22',  [MEMORIZE, GIMMICKS_STOPS, TWISTS])


	T('16__Crossing_Delta  D21/D23',  TWISTS_BACK)


	T('07__Dance_With_Me  D18',  [MEMORIZE, GIMMICKS_STOPS])


	T('16__Danger_n_Danger  D23',  TWISTS_BACK)


	T('17__Darkside_of_the_Mind  S14',  JACKS)


	T('16__Dement_After_Legend  S15',  JACKS)


	T('17__Demon_of_Laplace  S20',  [BRACKETS, EXOTIC_CENTRALHOLD])
	T('17__Demon_of_Laplace  D20',  TWISTS)


	T('10__Destination  S17',  TWISTS)
	T('10__Destination  D20',  STRETCH)


	T('14__Dolly_Kiss  D21',  TWISTS_BACK)


	T('17__Doof_Senc  S21/S23/D23',  BRACKETS)


	T('17__Duel  S21',  TWISTS_BACK)


	T('07__Emperor  S16',  TWISTS)


	T('17__Eternal_Universe  S23/D23',  BRACKETS)


	T('17__Euphorianic  S19',  NAKAKA)


	T('11__Everybody_Got_2_Know  S21',  [MEMORIZE, GIMMICKS_STOPS])


	T('10__Extravaganza__SHORT  S16',  TWISTS)


	T('0E__Faster_Z  D21',  TWISTS_BACK)


	T('14__Feel_My_Happiness  D21', BRACKETS_PLUS)


	T('02__Final_Audition  S19',  FOOTSWITCHES_PLUS)


	T('0D__Final_Audition_ep_2_1  S19/S21',  TWISTS_SIDE)
	T('0D__Final_Audition_ep_2_1  S22',  TWISTS)


	T('0F__Final_Audition_ep_2_X  D24',  RUNS_AS_BRACKETS)


	T('16__Fires_of_Destiny  S20',  TWISTS)


	T('16__Fly_High  S20',  TWISTS_SIDE)


	T('16__Forgotten_Vampire  D20',  TWISTS_BACK)


	T('17__Galaxy_Collapse  S22',  BRACKETS_PLUS)


	T('17__Glimmer_Gleam  S18/D19',  TWISTS)
	T('17__Glimmer_Gleam  S21',  [BRACKETS, EXOTIC_CENTRALHOLD])
	T('17__Glimmer_Gleam  D23',  BRACKETS_PLUS)


	T('15__God_Mode  S20',  TWISTS)


	T('15__Gothique_Resonance  S20/D20',  TWISTS_SIDE)


	T('17__Halloween_Party_Multiverse__SHORT  D18/S19',  TWISTS)


	T('16__Harmagedon  D24',  BRACKETS)


	T('16__Headless_Chicken  S21',  FOOTSWITCHES_PLUS)
	T('16__Headless_Chicken  D21',  TWISTS_BACK)


	T('16__Heart_Rabbit_Coaster  S21',  "#jumps")


	T('15__Helix  S19',  TWISTS)


	T('15__Hellfire  D23',  TWISTS_BACK)


	T('10__Hello_William  S19',  TWISTS_SIDE)


	T('15__Hyperion  D20',  STAMINA)


	T('15__Hyperion__SHORT  D21',  TWISTS_BACK)


	T('17__Horang_Pungryuga  D24',  STAMINA_PLUS)


	T('16__Houseplan  D19',  TWISTS)


	T('11__Hungarian_Dance_V  S17',  TWISTS)


	T('14__Hypercube  S15',  [FOOTSWITCHES, EXOTIC_ONELEG])


	T('13__Hypnosis_SynthWulf_Mix  D22',  JACKS)


	T('16__I_Want_U  S20',  TWISTS)


	T('16__I_Want_U__SHORT  D21',  TWISTS_BACK)


	T('16__Imagination  S19',  TWISTS_BACK)


	T('17__Imperium  S18',  JACKS)


	T('14__Imprinting  D24',  TWISTS_BACK)


	T('16__Indestructible  D15',  TWISTS)


	T('16__Janus  D22',  TWISTS_BACK)


	T('16__Jogging  S18/D18',  TWISTS_BACK)


	T('17__Jupin  S23',  TWISTS)


	T('15__Keep_On  S21',  [BRACKETS, TWISTS])


	T('16__King_of_Sales  S21',  EXOTIC_HANDS)


	T('10__K_O_A_Alice_In_Wonderworld__SHORT  S16',  BRACKETS)


	T('17__Lacrimosa  S17',  [TWISTS, JACKS])


	T('15__Last_Rebirth  D18',  JACKS)


	T('15__Le_Grand_Bleu  S18',  TWISTS)


	T('14__Leakage_Voltage  S21',  TWISTS)


	T('16__Lepton_Strike  S21', [BRACKETS, TWISTS])


	T('16__Life_is_Piano  S16',  JACKS)
	T('16__Life_is_Piano  S19/D18',  TWISTS)


	T('14__Like_Me  S14',  EXOTIC_CENTRALHOLD)
	T('14__Like_Me  S19',  TWISTS_SIDE)


	T('16__Loki  S21',  FOOTSWITCHES_PLUS)
	T('16__Loki  D20',  GIMMICKS_BLINKING)


	T('07__Love_is_a_Danger_Zone  S17/S19',  TWISTS)


	T('13__Love_is_a_Danger_Zone_Cranky_Mix  S20/S21/D20/D23',  TWISTS_BACK)


	T('0C__Love_is_a_Danger_Zone_try_to_B_P_M  D17/D23',  TWISTS_BACK)


	T('16__Love_Scenario  S17/D19',  [MEMORIZE, GIMMICKS_STOPS])


	T('07__Maria  S18',  TWISTS_BACK)


	T('14__Matador  S21',  TWISTS)


	T('13__Mental_Rider  D22',  TWISTS_BACK)


	T('07__Miss_s_Story  S19',  [MEMORIZE, GIMMICKS_STOPS])


	T('14__Moment_Day  S18',  TWISTS)


	T('0A__Monkey_Fingers  S15/D17', EXOTIC_ONELEG)


	T('0E__Monkey_Fingers_2  D19',  EXOTIC_ONELEG)


	T('12__Monolith  D22',  TWISTS_BACK)


	T('0C__Moonlight  S19/D21',  SLOWDOWN)


	T('10__Moonlight__SHORT  S19',  JACKS)


	T('16__Mopemope  S21',  GIMMICKS_BLINKING)


	T('14__Move_That_Body  S17',  TWISTS)


	T('17__Nade_Nade  D24',  RUNS_AS_BRACKETS)


	T('15__Nakakapagpabagabag  D16/S19/D20',  NAKAKA)


	T('11__Native  S17/D18/S20',  FOOTSWITCHES)
	T('11__Native  S17/S20',  JACKS)


	T('17__Neo_Catharsis  S22', [GIMMICKS_VELOCITY, SLOWDOWN])


	// not on Phoenix: T('11__Night_Duty  S17',  SLOWDOWN)


	T('13__Nobody  S15/D17',  [MEMORIZE, GIMMICKS_STOPS])


	T('14__NoNoNo  Sp15/Dp15',  MEMORIZE)


	T('16__Nyarlathotep  S17',  TWISTS)
	T('16__Nyarlathotep  D17',  TWISTS_BACK)


	T('16__Over_the_Horizon  S20',  FOOTSWITCHES)


	T('07__Oy_Oy_Oy  S14',  FOOTSWITCHES)


	T('16__Papasito  D21',  FOOTSWITCHES)


	T('16__Paved_Garden  D24',  [BRACKETS, STEP_HOLD])


	T('16__Percent_X  S20',  TWISTS_BACK)


	T('16__Phalanx_RS2018  D13',  [JACKS, TWISTS_BACK])


	T('0C__Phantom  S19',  [TWISTS, SLOWDOWN])


	T('11__Pine_Nut  S15',  TWISTS)


	T('17__Pneumonoultramicroscopicsilicovolcanoconiosis  S19/D22',  NAKAKA)


	T('16__Pop_Sequence  Sp18/Dp22',  [MEMORIZE, GIMMICKS_STOPS])


	T('16__Poseidon  D16',  TWISTS_BACK)


	T('14__Prime  S21/D21',  TWISTS_BACK)


	T('0E__Pumptris_8bit  S16.XX',  TWISTS_SIDE)
	T('0E__Pumptris_8bit  S18',  TWISTS)


	T('10__Pumptris_8bit__SHORT  D22',  STRETCH)


	T('0E__Pumptris_Quattro  D20',  TWISTS)


	T('17__Pupa  D23',  BRACKETS)


	T('14__Ragnarok  S18',  TWISTS)


	T('15__Rave_til_the_Earth_End  S17',  FOOTSWITCHES)
	T('15__Rave_til_the_Earth_End  S19',  TWISTS)


	T('14__Red_Snow  S19',  TWISTS)


	T('14__Red_Swan  Dp20',  MEMORIZE)
	T('14__Red_Swan  D22',  [BRACKETS, STRETCH])


	T('16__Repentance  D23',  ROLLING_BRACKETS)


	T('14__Robot_Battle  D24',  SLOWDOWN)


	T('14__Rock_the_House__SHORT  S18',  [MEMORIZE, GIMMICKS_STOPS])


	T('05__Rolling_Christmas  S17',  EXOTIC_TURN_AROUND)
	T('05__Rolling_Christmas  D22',  TWISTS_BACK)


	T('17__Rush_Hour  S16',  TWISTS)


	T('15__Sarabande  D24',  TWISTS_BACK)


	T('14__Scorpion_King  D16',  TWISTS_BACK)


	T('17__See  D20',  TWISTS_BACK)


	T('07__Set_Me_Up  D17',  TWISTS_BACK)


	T('15__Shub_Niggurath  D17',  TWISTS)
	T('15__Shub_Niggurath  D23',  TWISTS_BACK)


	T('05__Slam  D24',  BRACKETS_PLUS)


	T('17__Solve_My_Hurt  S21/D23',  BRACKETS)


	T('0E__Solitary_1_5  D18',  TWISTS)


	T('0B__Solitary_2  D21',  [BRACKETS, ROLLING_BRACKETS])


	T('17__Spooky_Macaron  S14',  TWISTS)


	T('17__Stager  S17/S19/D18/D20',  [MEMORIZE, GIMMICKS_STOPS])


	T('15__Start_On_Red  S19',  TWISTS)


	//T('14__Sugar_Conspiracy_Theory  *',  BGA)
	T('14__Sugar_Conspiracy_Theory  S19',  TWISTS_SIDE)


	T('16__Sugar_Plum  S19',  [TWISTS, JACKS])


	T('17__Super_Akuma_Emperor  S18',  JACKS)


	T('15__Super_Capriccio  S16',  TWISTS_SIDE)


	T('14__Super_Fantasy  D22',  TWISTS_BACK)


	T('16__Switronic  S17',  TWISTS)
	T('16__Switronic  D18',  TWISTS_BACK)
	T('16__Switronic  D22',  GIMMICKS_BLINKING)


	T('11__Take_Out  D22/D23',  SLOWDOWN)


	T('16__Tales_of_Pumpnia  S20/D21',  NAKAKA)


	T('17__That_Kitty  S23/D24',  [BRACKETS, DRILLS])


	T('17__The_Apocalypse  S20',  [TWISTS, BRACKETS])


	T('16__The_End_of_the_World  S20',  EXOTIC_CENTRALHOLD)


	T('15__The_Festival_of_Ghost2  D20',  [TWISTS_BACK, GIMMICKS_VELOCITY])


	//T('0F__The_People_Didnt_Know  *',  BGA)
	T('0F__The_People_Didnt_Know  D17',  TWISTS_BACK)


	T('16__The_Reverie  D22',  TWISTS)


	T('14__The_Revolution  S17/S19',  TWISTS)


	T('0F__Toccata  S17',  TWISTS_BACK)


	T('17__Tomboy  D20',  TWISTS_BACK)


	T('15__Travel_to_Future  D23',  JACKS)


	T('16__Tropicanic  S19/D21',  TWISTS)


	T('03__Turkey_March  S17',  JACKS)


	T('10__Turkey_March_Minimal_Tunes  S17',  TWISTS_SIDE)
	T('10__Turkey_March_Minimal_Tunes  D18',  TWISTS_BACK)


	T('15__Twist_of_Fate  S19/D21',  [MEMORIZE, SLOWDOWN])


	T('17__Yo_Say_Fairy  S20',  FOOTSWITCHES)


	T('13__U_Got_Me_Rocking  D17',  TWISTS_BACK)


	T('0D__Ugly_Dee  S17',  MEMORIZE)


	T('17__Uh_Heung  S22',  EXOTIC_HANDS)


	T('17__Ultimate_Eyes  S14',  JACKS)


	T('13__Unique  S16.XX',  JACKS)


	T('0F__Uprock  S17',  MEMORIZE)


	T('15__Up_n_Up  S17',  TWISTS)


	T('15__V3  S14',  JACKS)
	T('15__V3  D24',  TWISTS_BACK)


	T('10__Vacuum  S16',  JACKS)


	T('17__Versailles  D23',  SLOWDOWN)


	T('15__Vulcan  S22',  TWISTS_SIDE)


	T('16__Wedding_Crashers__SHORT  D20',  TWISTS_BACK)


	T('0D__Wi_Ex_Doc_Va  D17',  TWISTS_BACK)


	T('0D__Witch_Doctor_1  D17/S19/D21',  TWISTS_BACK)


	T('11__We_Got_2_Know  D18',  TWISTS_BACK)


	T('13__Windmill  D23',  [TWISTS_BACK, ROLLING_BRACKETS])


	T('17__Wither_Garden  S20',  JACKS)


	T('11__X_Rave__SHORT  D18',  ROLLING_BRACKETS)


	T('16__Xeroize  S21',  TWISTS_BACK)


	T('16__You_and_I  S21',  BRACKETS)


	T('14__You_Got_Me_Crazy  D18',  TWISTS_BACK)


	T('16__Your_Mind  S21',  JACKS)




	//T('0B__Deja_Vu  aNM',  MEMORIZE)







	const PHOENIX_TITLE = "#phoenix.title"


	//Tag( t, '13__Yeo_Rae_A  S1', "Pass with score <= 180,000 to get " + PHOENIX_TITLE + " 'Human metronome'" );
	//Tag( t, '15__Gargoyle__FULL  S21', "Pass with score <= 444,444 to get " + PHOENIX_TITLE + " 'Perfect breaker'" );

	Tag( t, `SSS+ to get ${PHOENIX_TITLE} 'No skills no pump'`, '0C__Moonlight  D21' )
	Tag( t, `SSS+ to get ${PHOENIX_TITLE} 'PUMP IS A SENSE'`, '07__Love_is_a_Danger_Zone  D21' )

	// B.P.M FOLLOWER
	// [Beethoven Virus D18] Perfect 927 / Great 1 / Miss 2 / Max Combo 747

	// [Waltz of Doge D20] Max Combo of 888
	// DOGE MAJOR STOCKHOLDER

	function PHOENIX_BOSS_TITLE( bossDetails, chart )
	{
		Tag( t, `Pass to get ${PHOENIX_TITLE}.bossbreaker of ${bossDetails} Boss breaker`, chart + ".Phoenix" )
	}

	function PHOENIX_BOSS_TITLE_S_D( bossDetails, singleChart, doubleChart )
	{
		PHOENIX_BOSS_TITLE( `${bossDetails} Single`, singleChart )
		PHOENIX_BOSS_TITLE( `${bossDetails} Double`, doubleChart )
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


	function PHOENIX_SKILL_TITLE( skillType, charts )
	{
		for( const [index, chart] of charts.entries() )
			Tag( t, `SSS to get ${PHOENIX_TITLE}.${skillType} [${index+1}]`, chart + ".Phoenix" )
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


	Tag( "lol",
		[
			"VVV  D-16",
			"Destination  [SHORT]  D-18",
			"Final Audition  S-15",
			"Pumptris (8Bit ver.)  [SHORT]  D-22",
		])
*/
}
