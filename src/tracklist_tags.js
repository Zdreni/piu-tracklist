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
const TWISTS_PLUS = "#twists.plus"
const TWISTS_BACK = "#twists.back"
const TWISTS_SIDE = "#twists.side"
const TWISTS_QUAD = "#twists.quad"

const STEP_HOLD = "#step_hold"
const JUMPS = "#jumps"
const WIDE_RUNS = "#wide_runs"
const WIDE_RUNS_PLUS = "#wide_runs.plus"
const M_RUNS = "#M_runs"

const STAMINA = "#stamina"
const STAMINA_PLUS = "#stamina.plus"

const STRETCH = "#stretch"

const NAKAKA = "#nakaka (velocity gimmicks & step-hold twists)"

const EXOTIC_HANDS = "#exotic.hands"
const EXOTIC_CENTRALHOLD = "#exotic.central_hold"
const EXOTIC_TURN_AROUND = "#exotic.turn_around"
const EXOTIC_ONELEG = "#exotic.oneleg"
const EXOTIC_BLUE_YELLOW = "#exotic.blue_yellow"

const SLOWDOWN = "#slowdown"
const SLOWDOWN_PLUS = "#slowdown.plus"

const GIMMICKS_VANISH = "#gimmicks (vanish)"
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


	//not on Phoenix:  T('0D__2006_Love_Song  S15',  SLOWDOWN)


	T('17__4nt  S22/D24',  BRACKETS)


	T('16__8_6  S16/D18/S20/D21',  NAKAKA)

	T('16__8_6__FULL  S15',  STEP_HOLD)
	T('16__8_6__FULL  S21/D23',  NAKAKA)


	T('15__A_Site_De_La_Rue  S17/S20/D20/D24', GIMMICKS_BLINKING)


	T('17__About_the_Universe  S21',  TWISTS)
	T('17__About_the_Universe  D24',  BRACKETS_PLUS)


	T('13__Accident  S18',  [GIMMICKS_VELOCITY, SLOWDOWN])


	T('17__Acquire  S17',  [FOOTSWITCHES, TWISTS_BACK])
	T('17__Acquire  S20',  [TWISTS_BACK, BRACKETS])


	T('17__Alice_in_Misanthrope  S20/D21',  BRACKETS)
	T('17__Alice_in_Misanthrope  S22',  [BRACKETS, GIMMICKS_BLINKING])


	T('17__ALiVE  S18/S22',  BRACKETS);
	T('17__ALiVE  D21',  BRACKETS_PLUS);


	T('11__Allegro_Con_Fuoco  S17',  TWISTS)


	T('15__Allegro_Furioso  S20',  JACKS)


	T('14__Allegro_Piu_Mosso  S17',  [FOOTSWITCHES, TWISTS])


	T('17__Altale  S21/D23',  BRACKETS)


	T('17__Amor_Fati  S21',  STEP_HOLD)
	T('17__Amor_Fati  D23',  [BRACKETS, STEP_HOLD, WIDE_RUNS])


	//not on Phoenix:  T('14__Amphitryon  D21',  SLOWDOWN)
	T('14__Amphitryon  D21',  [TWISTS_BACK, WIDE_RUNS, STAMINA])


	T('15__Anguished_Unmaking  D22',  [BRACKETS, WIDE_RUNS])


	T('14__Annihilator_Method  S19',  TWISTS)


	//not on Phoenix:  T('0D__Arch_of_Darkness  S15',  SLOWDOWN)


	T('10__Arirang  D15',  WIDE_RUNS_PLUS)
	T('10__Arirang  S19',  TWISTS)
	T('10__Arirang  S22',  [TWISTS, JACKS])


	T('15__Asterios_ReEntry  S19',  TWISTS)
	T('15__Asterios_ReEntry  D22',  TWISTS_BACK)


	T('14__Avalanche  D19.Phoenix',  [WIDE_RUNS, EXOTIC_BLUE_YELLOW])


	//not on Phoenix: T('15__Awakening  S19',  SLOWDOWN)
	T('15__Awakening  S19',  [TWISTS, BRACKETS])
	T('15__Awakening  D20',  TWISTS_BACK)
	T('15__Awakening  D24',  [BRACKETS_PLUS, SLOWDOWN])


	T('14__Bad_Apple  D11',  WIDE_RUNS)
	T('14__Bad_Apple  S15',  [MEMORIZE, GIMMICKS_STOPS])
	T('14__Bad_Apple  S17',  TWISTS)
	T('14__Bad_Apple  S19',  TWISTS_BACK)
	T('14__Bad_Apple  D20',  [TWISTS_BACK, STEP_HOLD])


	T('14__Bad_Apple__FULL  S17',  TWISTS)


	//not on Phoenix:  T('0D__Banya_P_Classic_Remix  D16',  SLOWDOWN)


	T('0E__BanYa_P_Guitar_Remix  S22/D24',  SLOWDOWN)


	T('17__Barbers_Madness  D23',  BRACKETS)


	T('13__Baroque_Virus  S10',  TWISTS)
	T('13__Baroque_Virus  D18',  [TWISTS, WIDE_RUNS])
	T('13__Baroque_Virus  D20',  TWISTS_BACK)


	T('0C__Beat_of_the_War_2  D15',  WIDE_RUNS)
	T('0C__Beat_of_the_War_2  S21',  FOOTSWITCHES_PLUS)


	T('17__Becouse_of_You  D20',  STAMINA)
	T('17__Becouse_of_You  D22',  BRACKETS)


	T('15__Bedlam  D20',  WIDE_RUNS)
	T('15__Bedlam  D24',  BRACKETS)


	T('08__Bee  D15',  [TWISTS, WIDE_RUNS])


	T('05__Beethoven_Virus  S17',  EXOTIC_TURN_AROUND)


	T('0D__Bemera  S17',  JACKS)
	T('0D__Bemera  D18',  TWISTS_BACK)


	T('10__Bemera__SHORT  S22',  JACKS)


	T('04__Betrayer  D17',  TWISTS_BACK)


	T('17__Binary_Star  S20',  [TWISTS, DRILLS])
	T('17__Binary_Star  D23',  STAMINA)


	T('15__Black_Dragon  D19',  TWISTS_BACK)
	T('15__Black_Dragon  S21',  TWISTS)


	T('0A__Blazing  S17',  TWISTS)
	T('0A__Blazing  S20',  TWISTS_PLUS)


	T('17__Bluish_Rose  S20',  TWISTS)


	T('17__Boca  S21',  [BRACKETS, JUMPS])
	T('17__Boca  D23',  [BRACKETS, JUMPS, WIDE_RUNS])


	T('17__Booom  S17',  [TWISTS, BRACKETS])


	T('16__Brain_Power  D20',  GIMMICKS_BLINKING)


	T('14__Break_It_Down  S16/D17',  EXOTIC_CENTRALHOLD)
	T('14__Break_It_Down  D21',  [MEMORIZE, GIMMICKS_STOPS])


	T('15__Break_Out  D20',  BRACKETS)


	T('15__Bring_Back_the_Beat  S12',  TWISTS)
	T('15__Bring_Back_the_Beat  D19',  [TWISTS, WIDE_RUNS])


	T('15__BSPower_Explosion  D23',  [DRILLS, BRACKETS])


	T('11__Butterfly  D17',  TWISTS_BACK)


	T('09__Can_Can  D22',  STRETCH)


	T('16__Can_Can_Orpheus  D18',  WIDE_RUNS)


	T('0F__Cannon_X_1  D15',  [WIDE_RUNS, TWISTS])
	T('0F__Cannon_X_1  S21',  TWISTS)


	T('0B__Canon_D  S21',  TWISTS)


	T('0E__Caprice_of_Otada  S17',  FOOTSWITCHES)
	T('0E__Caprice_of_Otada  S19',  TWISTS_BACK)
	// not on phoenix T('0E__Caprice_of_Otada  S19',  SLOWDOWN)
	T('0E__Caprice_of_Otada  D22',  SLOWDOWN)


	T('17__Catastrophe  S12',  TWISTS)


	T('17__Chaos_Again  S21',  [MEMORIZE, GIMMICKS_STOPS])


	T('09__Chicken_Wing  S20',  DRILLS)


	T('0D__Chimera  S19',  SLOWDOWN)
	T('0D__Chimera  D22',  WIDE_RUNS)


	T('14__Chinese_Restaurant  D19',  WIDE_RUNS)
	// not on Phoenix: SLOWDOWN


	T('0F__Chopsticks_Challenge  S12',  TWISTS)

	T('0F__Chopsticks_Challenge__FULL  S17',  TWISTS)


	T('16__Clematis_Rapsodia  S22',  [BRACKETS, TWISTS])
	T('16__Clematis_Rapsodia  D23',  BRACKETS)


	T('16__Club_Night  D18',  WIDE_RUNS)
	T('16__Club_Night  D23',  BRACKETS)


	T('15__Clue  D20',  [TWISTS_BACK, GIMMICKS_VELOCITY])
	T('15__Clue  D21',  TWISTS_BACK)


	T('17__Co5m1c_R4ilr0ad  S15',  TWISTS)
	T('17__Co5m1c_R4ilr0ad  D19',  TWISTS)
	T('17__Co5m1c_R4ilr0ad  S21',  [TWISTS, BRACKETS, ROLLING_BRACKETS])
	T('17__Co5m1c_R4ilr0ad  D22',  ROLLING_BRACKETS)


	//not on Phoenix:  T('08__Come_to_Me  S13',  penta jump at the end)
	T('08__Come_to_Me  S17',  [MEMORIZE, GIMMICKS_STOPS])


	T('14__Cosmical_Rhythm  S17',  TWISTS)


	T('17__Crimson_Hood  S24',  [BRACKETS, EXOTIC_CENTRALHOLD])


	T('15__Cross_Time  D22',  [MEMORIZE, GIMMICKS_STOPS, TWISTS])


	T('16__Crossing_Delta  D21/D23',  TWISTS_BACK)


	T('07__Csikos_Post  D16',  WIDE_RUNS)


	//not on Phoenix: T('08__D_Gang  D15',  GIMMICKS_STOPS)


	T('07__Dance_With_Me  D18',  [MEMORIZE, GIMMICKS_STOPS])


	T('16__Danger_n_Danger  S19',  TWISTS)
	T('16__Danger_n_Danger  D23',  TWISTS_BACK)


	T('17__Darkside_of_the_Mind  S14',  JACKS)
	T('17__Darkside_of_the_Mind  D25',  BRACKETS_PLUS)


	T('17__Dead_End  S21/S23',  BRACKETS)


	T('15__Death_Moon__SHORT  S22',  DRILLS)


	T('16__Dement_After_Legend  S15',  JACKS)
	T('16__Dement_After_Legend  S21',  [BRACKETS, DRILLS])


	T('17__Demon_of_Laplace  S20',  [BRACKETS, EXOTIC_CENTRALHOLD])
	T('17__Demon_of_Laplace  D20',  TWISTS)


	T('10__Destination  D15',  [TWISTS, WIDE_RUNS])
	T('10__Destination  S17',  TWISTS)
	T('10__Destination  D20',  STRETCH)


	T('16__Destrucimate  D14',  WIDE_RUNS)


	//not on Phoenix:  sudden stop T('0B__Dignity__FULL  D15',  GIMMICKS_STOPS)


	T('0F__DJ_Otada  D22',  WIDE_RUNS)


	T('14__Dolly_Kiss  D21',  [TWISTS_BACK, WIDE_RUNS])


	T('17__Doof_Senc  S21/S23/D23/D25',  BRACKETS)


	T('07__Dr_M  D18',  WIDE_RUNS)


	T('12__Dream_to_Nightmare  D23',  [BRACKETS, STRETCH, TWISTS])
	//not on Phoenix: T('12__Dream_to_Nightmare  D23',  SLOWDOWN)


	T('16__Dual_Racing_RED_vs_BLUE  D19',  WIDE_RUNS)


	T('17__Duel  D14',  TWISTS)
	T('17__Duel  S21',  TWISTS_BACK)


	T('17__Duel__SHORT  S19',  [TWISTS, M_RUNS])
	T('17__Duel__SHORT  S21',  TWISTS_PLUS)


	T('07__Emperor  S16',  [TWISTS, BRACKETS])


	T('15__Escape  S21',  DRILLS)


	T('17__Eternal_Universe  S23/D23',  BRACKETS)


	T('17__Euphorianic  S19',  NAKAKA)


	T('11__Everybody_Got_2_Know  S21',  [MEMORIZE, GIMMICKS_STOPS])


	T('02__Extravaganza  D15',  WIDE_RUNS)
	T('02__Extravaganza  S19',  DRILLS)


	T('10__Extravaganza__SHORT  S16',  TWISTS)
	T('10__Extravaganza__SHORT  D16',  WIDE_RUNS)


	T('17__Extreme_Music_School_1st_period  D25',  BRACKETS_PLUS)


	T('15__Fallen_Angel  S19',  TWISTS_PLUS)


	T('0E__Faster_Z  D21',  TWISTS_BACK)


	T('14__Feel_My_Happiness  D21', BRACKETS_PLUS)


	T('02__Final_Audition  S19',  FOOTSWITCHES_PLUS)
	T('02__Final_Audition  D19',  [TWISTS, WIDE_RUNS])


	T('03__Final_Audition_2  S18/D20',  TWISTS_PLUS)
	T('03__Final_Audition_2  D18',  [TWISTS, WIDE_RUNS])


	T('0A__Final_Audition_3_U_F  D18/D19',  TWISTS)


	//not on Phoenix: T('0D__Final_Audition_ep_2_1  S19',  gimmick stop)
	T('0D__Final_Audition_ep_2_1  S19/S21',  TWISTS_SIDE)
	T('0D__Final_Audition_ep_2_1  S22/D22.Phoenix',  TWISTS)


	T('0D__Final_Audition_ep_2_2  S21',  TWISTS)


	T('0F__Final_Audition_ep_2_X  D24',  RUNS_AS_BRACKETS)


	T('16__Fires_of_Destiny  D18',  EXOTIC_BLUE_YELLOW)
	T('16__Fires_of_Destiny  S20',  TWISTS)


	T('17__Flavor_Step  S21',  [TWISTS, BRACKETS])
	T('17__Flavor_Step  D22',  [TWISTS, WIDE_RUNS])


	T('13__Flew_Far_Faster  D24',  WIDE_RUNS)


	T('16__Fly_High  S20',  TWISTS_SIDE)


	T('16__Forgotten_Vampire  D20',  TWISTS_BACK)


	T('03__Free_Style  D15',  [STRETCH, WIDE_RUNS])


	T('17__Galaxy_Collapse  D20',  TWISTS)
	T('17__Galaxy_Collapse  S22/D24',  BRACKETS_PLUS)


	T('10__Get_Up_and_Go  S17',  TWISTS)


	T('17__Giselle  S12',  TWISTS)


	T('17__Glimmer_Gleam  S18/D19',  TWISTS)
	T('17__Glimmer_Gleam  S21',  [BRACKETS, EXOTIC_CENTRALHOLD])
	T('17__Glimmer_Gleam  D23',  BRACKETS_PLUS)


	T('15__God_Mode  S20',  TWISTS)


	T('16__God_Mode_2_0  D22',  TWISTS)


	T('15__Gothique_Resonance  D13',  TWISTS_BACK)
	T('15__Gothique_Resonance  S20/D20',  TWISTS_SIDE)


	T('17__Goodtek  S21',  BRACKETS)


	T('0E__Guitar_Man  D19',  WIDE_RUNS)


	T('17__Halloween_Party_Multiverse  S20',  [TWISTS, STEP_HOLD])


	T('17__Halloween_Party_Multiverse__SHORT  D18/S19',  TWISTS)


	//not on Phoenix: T('12__Hardkore_of_the_North  S22',  SLOWDOWN)
	T('12__Hardkore_of_the_North  S22',  TWISTS)
	T('12__Hardkore_of_the_North  D22',  WIDE_RUNS)


	T('16__Harmagedon  D24',  BRACKETS)


	T('16__Headless_Chicken  S21',  FOOTSWITCHES_PLUS)
	T('16__Headless_Chicken  D21',  [TWISTS_BACK, WIDE_RUNS])


	T('16__Heart_Rabbit_Coaster  S21',  JUMPS)


	T('15__Helix  S19',  TWISTS)
	T('15__Helix  D19',  [WIDE_RUNS, TWISTS])


	T('15__Hellfire  D23',  TWISTS_BACK)


	T('10__Hello_William  S19',  TWISTS_SIDE)


	//not on Phoenix: T('15__Hey_U  D16',  GIMMICKS) sudden arrow appearing


	T('0E__Higgledy_Piggledy  D20',  [TWISTS, WIDE_RUNS])


	T('15__HTTP  D13',  WIDE_RUNS)


	T('17__Hymn_of_Golden_Glory  D25',  BRACKETS)


	T('17__Hymn_of_Golden_Glory__SHORT  S23',  DRILLS)


	T('15__Hyperion  D20',  STAMINA)


	T('15__Hyperion__SHORT  D21',  TWISTS_BACK)


	T('17__Horang_Pungryuga  D24',  STAMINA_PLUS)


	T('16__Houseplan  D19',  TWISTS)


	T('11__Hungarian_Dance_V  S17',  TWISTS)
	T('11__Hungarian_Dance_V  D21',  [BRACKETS, WIDE_RUNS])


	T('14__Hypercube  S15',  [FOOTSWITCHES, EXOTIC_ONELEG])


	T('13__Hypnosis_SynthWulf_Mix  S13',  TWISTS)
	T('13__Hypnosis_SynthWulf_Mix  D15',  TWISTS_BACK)
	//not on Phoenix: T('13__Hypnosis_SynthWulf_Mix  S17',  GIMMICKS)  jumps with pause
	T('13__Hypnosis_SynthWulf_Mix  D19',  BRACKETS)
	T('13__Hypnosis_SynthWulf_Mix  D22',  JACKS)


	T('16__I_Want_U  S20',  TWISTS)


	T('16__I_Want_U__SHORT  S19',  [STAMINA, TWISTS_PLUS])
	T('16__I_Want_U__SHORT  D21',  TWISTS_BACK)


	T('13__Ignis_Fatuus  D23',  WIDE_RUNS)


	T('16__Imagination  D16',  TWISTS_BACK)
	T('16__Imagination  S18',  EXOTIC_CENTRALHOLD)
	T('16__Imagination  S19',  TWISTS_BACK)


	T('17__Imperium  S14/S18',  JACKS)


	T('14__Imprinting  D16/D24',  TWISTS_BACK)


	T('16__Indestructible  D15',  TWISTS_BACK)
	T('16__Indestructible  S22',  [ROLLING_BRACKETS, TWISTS])
	// T('16__Indestructible  S22' - not on phoenix: GIMMICKS_BLINKING


	T('15__Infinity  D23',  BRACKETS)


	T('17__Invasion  S13',  JUMPS)
	T('17__Invasion  D25',  BRACKETS_PLUS)


	T('16__Iolite_Sky  D20',  [GIMMICKS_STOPS, MEMORIZE, BRACKETS])
	T('16__Iolite_Sky  D24',  ROLLING_BRACKETS)


	T('0B__J_Bong  D17',  WIDE_RUNS)
	//not on Phoenix: SLOWDOWN


	T('16__Janus  D22',  [TWISTS_BACK, STEP_HOLD, WIDE_RUNS])


	T('16__Jogging  S18/D18',  TWISTS_BACK)


	T('17__Jupin  S19/S21',  STAMINA)
	T('17__Jupin  S23',  TWISTS)


	T('14__Karyawisata  D17',  SLOWDOWN)


	T('15__Kasou_Shinja  D24',  [TWISTS, STAMINA])


	T('15__Keep_On  S21',  [BRACKETS, TWISTS])


	T('16__Kimchi_Fingers  D17',  WIDE_RUNS)


	T('16__King_of_Sales  S21',  EXOTIC_HANDS)


	//not on Phoenix:  T('0F__K_O_A_Alice_in_Wonderworld  S19',  GIMMICKS_STOPS)
	T('10__K_O_A_Alice_In_Wonderworld__SHORT  S16',  BRACKETS)


	T('17__Kugutsu  D21',  DRILLS)
	T('17__Kugutsu  S25',  GIMMICKS_STOPS)


	T('17__Lacrimosa  S17',  [TWISTS, JACKS])
	T('17__Lacrimosa  S20',  [TWISTS, BRACKETS])


	T('15__Last_Rebirth  D18',  JACKS)


	T('15__Le_Grand_Bleu  S18',  TWISTS)
	T('15__Le_Grand_Bleu  S20',  [DRILLS, JACKS, TWISTS])


	T('14__Leakage_Voltage  S17',  [BRACKETS, TWISTS])
	T('14__Leakage_Voltage  S21',  TWISTS)
	T('14__Leakage_Voltage  D23',  [BRACKETS, TWISTS_BACK, WIDE_RUNS])


	T('16__Lepton_Strike  D17', WIDE_RUNS)
	T('16__Lepton_Strike  S19', TWISTS)
	//not on Phoenix: T('16__Lepton_Strike  S19', SLOWDOWN)
	T('16__Lepton_Strike  S21', [BRACKETS, TWISTS])


	T('16__Life_is_Piano  S16',  JACKS)
	T('16__Life_is_Piano  S19/D18',  TWISTS)
	T('16__Life_is_Piano  D21',  [TWISTS, WIDE_RUNS])


	T('14__Like_Me  S14',  EXOTIC_CENTRALHOLD)
	T('14__Like_Me  S19',  TWISTS_SIDE)


	T('17__Lohxia  D22',  [BRACKETS, ROLLING_BRACKETS])


	T('16__Loki  S20',  [GIMMICKS_BLINKING, TWISTS])
	T('16__Loki  S21',  [GIMMICKS_BLINKING, FOOTSWITCHES_PLUS])
	T('16__Loki  D20',  GIMMICKS_BLINKING)


	T('07__Love_is_a_Danger_Zone  S17/S19',  TWISTS)


	T('0C__Love_is_a_Danger_Zone_2  S15',  TWISTS)


	T('13__Love_is_a_Danger_Zone_Cranky_Mix  D16',  TWISTS)
	T('13__Love_is_a_Danger_Zone_Cranky_Mix  S20/S21/D20/D23',  TWISTS_BACK)


	T('0C__Love_is_a_Danger_Zone_try_to_B_P_M  D17/D23',  TWISTS_BACK)


	T('16__Love_Scenario  S17/D19',  [MEMORIZE, GIMMICKS_STOPS])


	T('13__Lucid  D23',  [DRILLS, ROLLING_BRACKETS])


	T('14__Mad5cience  S20',  BRACKETS)


	T('07__Maria  S18',  TWISTS_BACK)
	T('07__Maria  D21',  [TWISTS, WIDE_RUNS])


	T('14__Matador  S21',  TWISTS)


	T('17__Megaheartz  D25',  BRACKETS_PLUS)


	T('13__Mental_Rider  D20',  [TWISTS, WIDE_RUNS_PLUS])
	T('13__Mental_Rider  D22',  TWISTS_BACK)
	T('13__Mental_Rider  D24',  WIDE_RUNS)


	T('07__Miss_s_Story  S19',  [MEMORIZE, GIMMICKS_STOPS, TWISTS, FOOTSWITCHES])
	T('07__Miss_s_Story  D19',  [WIDE_RUNS, GIMMICKS_STOPS])


	T('10__Mission_Possible_Blowback  S19',  TWISTS)
	T('10__Mission_Possible_Blowback  D21',  [WIDE_RUNS, TWISTS])


	T('14__Mitotsudaira  D19',  [TWISTS_BACK, WIDE_RUNS])


	T('14__Moment_Day  S18',  TWISTS)


	T('0A__Monkey_Fingers  S15/D17', EXOTIC_ONELEG)


	T('0E__Monkey_Fingers_2  D19',  EXOTIC_ONELEG)


	T('12__Monolith  D14',  WIDE_RUNS)
	T('12__Monolith  D22',  TWISTS_BACK)


	T('0C__Moonlight  S19/D21',  SLOWDOWN)


	T('10__Moonlight__SHORT  S19',  JACKS)


	T('16__Mopemope  S15',  GIMMICKS_VELOCITY)
	T('16__Mopemope  S21',  GIMMICKS_BLINKING)


	T('14__Move_That_Body  S17',  TWISTS)


	T('04__Mr_Larpus  D16',  WIDE_RUNS)


	T('17__Murdoch_vs_Otada  D25',  SLOWDOWN)


	T('0F__My_Dreams  D22',  WIDE_RUNS)


	T('17__Nade_Nade  S15/D16',  TWISTS)
	T('17__Nade_Nade  D24',  RUNS_AS_BRACKETS)


	T('15__Nakakapagpabagabag  D16/S19/D20',  NAKAKA)


	T('11__Native  S17/D18/S20',  FOOTSWITCHES)
	T('11__Native  S17/S20',  JACKS)


	T('11__Necromancy  D23',  TWISTS_QUAD)


	T('14__Nemesis  D20',  TWISTS_QUAD)


	T('17__Neo_Catharsis  S22', [GIMMICKS_VELOCITY, SLOWDOWN])


	T('17__Neo_Catharsis__SHORT  D23',  BRACKETS)


	// not on Phoenix: T('11__Night_Duty  D15/S17',  SLOWDOWN)


	T('13__Nobody  S15/D17',  [MEMORIZE, GIMMICKS_STOPS])


	T('14__NoNoNo  Sp15/Dp15',  MEMORIZE)


	T('16__Nyarlathotep  S17',  TWISTS)
	T('16__Nyarlathotep  D17',  TWISTS_BACK)


	T('16__Obelisque  S17',  TWISTS_BACK)


	T('16__Orbit_Stabilizer  D21',  STAMINA)


	T('16__Over_the_Horizon  S20',  FOOTSWITCHES)


	T('07__Oy_Oy_Oy  S14',  FOOTSWITCHES)


	T('0C__Papa_Gonzales  D19',  [WIDE_RUNS, STAMINA])


	T('16__Papasito  D18',  [JUMPS, STRETCH])
	T('16__Papasito  D21',  FOOTSWITCHES)


	T('13__Passacaglia  D23',  [GIMMICKS_VELOCITY, WIDE_RUNS])


	T('13__Passacaglia__SHORT  S17',  TWISTS_BACK)


	T('16__Paved_Garden  D24',  [BRACKETS, STEP_HOLD])


	T('16__Percent_X  S20',  TWISTS_BACK)


	T('16__Phalanx_RS2018  D13',  [JACKS, TWISTS_BACK])
	T('16__Phalanx_RS2018  S22/D24',  BRACKETS_PLUS)


	T('0C__Phantom  S19',  [TWISTS, SLOWDOWN])


	T('10__Phantom_Intermezzo  S16',  TWISTS_SIDE)


	T('11__Pine_Nut  S15',  TWISTS)
	T('11__Pine_Nut  D17/D23',  WIDE_RUNS)


	T('17__Pneumonoultramicroscopicsilicovolcanoconiosis  S19/D22',  NAKAKA)


	T('16__Pop_Sequence  Sp18/Dp22',  [MEMORIZE, GIMMICKS_STOPS])


	T('13__Pop_the_Track  D20', [WIDE_RUNS, TWISTS_QUAD, STAMINA])


	T('16__Poseidon  D16',  TWISTS_BACK)
	T('16__Poseidon  S21',  [TWISTS, STAMINA])


	T('14__Prime  S21/D21',  TWISTS_BACK)


	T('15__Prime2_Opening__SHORT  S17',  TWISTS)


	T('05__Pump_Jump  S15',  M_RUNS)


	T('0A__Pump_Me_Amadeus  D15',  [TWISTS, WIDE_RUNS])
	T('0A__Pump_Me_Amadeus  D19.Phoenix',  WIDE_RUNS)
	T('0A__Pump_Me_Amadeus  D24',  WIDE_RUNS_PLUS)


	T('0E__Pumptris_8bit  S16.XX',  TWISTS_SIDE)
	T('0E__Pumptris_8bit  S18',  TWISTS)


	T('10__Pumptris_8bit__SHORT  D22',  STRETCH)


	T('0E__Pumptris_Quattro  D20',  TWISTS)
	T('0E__Pumptris_Quattro  D22',  [TWISTS_BACK, WIDE_RUNS])


	T('17__Pupa  D23',  BRACKETS)


	T('17__R_I_P  S19',  [BRACKETS, TWISTS])


	T('14__Ragnarok  S18',  TWISTS)


	T('15__Rave_til_the_Earth_End  S17',  FOOTSWITCHES)
	T('15__Rave_til_the_Earth_End  S19',  TWISTS)


	T('16__Re_End_of_a_Dream  S21',  [BRACKETS, DRILLS])


	T('11__Reality  S15',  TWISTS)


	T('14__Red_Snow  S19',  TWISTS)


	T('14__Red_Swan  D20',  [BRACKETS, DRILLS])
	T('14__Red_Swan  Dp20',  [MEMORIZE, GIMMICKS_STOPS])
	T('14__Red_Swan  D22',  [BRACKETS, STRETCH])


	T('14__Reminiscence  D20',  [WIDE_RUNS, STAMINA])


	T('16__Repentance  D23',  ROLLING_BRACKETS)


	T('16__Rising_Star  D19',  [WIDE_RUNS, TWISTS_BACK])


	T('14__Robot_Battle  S14',  TWISTS)
	T('14__Robot_Battle  S19',  TWISTS)
	T('14__Robot_Battle  D24',  [SLOWDOWN, DRILLS, WIDE_RUNS])


	T('14__Rock_the_House  D22',  DRILLS)


	T('14__Rock_the_House__SHORT  S15',  DRILLS)
	//not on Phoenix: T('14__Rock_the_House__SHORT  S15',  GIMMICKS_VELOCITY)
	T('14__Rock_the_House__SHORT  S18',  [MEMORIZE, GIMMICKS_STOPS])


	T('05__Rolling_Christmas  S17',  EXOTIC_TURN_AROUND)
	T('05__Rolling_Christmas  D22',  TWISTS_BACK)


	T('17__Rush_Hour  S16',  TWISTS)


	T('15__Sarabande  D24',  TWISTS_BACK)


	T('14__Scorpion_King  D16',  TWISTS_BACK)
	T('14__Scorpion_King  S19',  TWISTS)


	T('17__See  D20',  TWISTS_BACK)
	T('17__See  D23',  [BRACKETS, STEP_HOLD, WIDE_RUNS, SLOWDOWN])


	//not on Phoenix: T('14__Selfishness  D20',  [GIMMICKS, SLOWDOWN])
	T('14__Selfishness  D20',  TWISTS_QUAD)


	T('07__Set_Me_Up  D17',  TWISTS_BACK)


	T('15__Shub_Niggurath  D17',  TWISTS)
	T('15__Shub_Niggurath  D23',  [TWISTS_BACK, GIMMICKS_STOPS])
	T('15__Shub_Niggurath  S24',  DRILLS)


	T('17__Showdown  S20',  BRACKETS)


	T('05__Slam  D24',  BRACKETS_PLUS)


	T('16__Slapstick_Parfait  D18',  [EXOTIC_BLUE_YELLOW, TWISTS_BACK])
	T('16__Slapstick_Parfait  D21',  [TWISTS, WIDE_RUNS])


	T('17__Solve_My_Hurt  S21/D23',  BRACKETS)


	T('04__Solitary  S18',  TWISTS)
	//not on Phoenix:  GIMMICKS_STOPS


	T('0E__Solitary_1_5  S16',  [DRILLS, TWISTS])
	// not on Phoenix:  '0E__Solitary_1_5  S16'  GIMMICKS_VELOCITY 180 bpm at the end
	T('0E__Solitary_1_5  D18',  TWISTS)


	T('0B__Solitary_2  D21',  [BRACKETS, ROLLING_BRACKETS, RUNS_AS_BRACKETS])


	T('17__Sonic_Boom  S23',  BRACKETS)


	T('10__Sorceress_Elise  D13',  WIDE_RUNS)
	T('10__Sorceress_Elise  S21',  DRILLS)
	T('10__Sorceress_Elise  D24',  [DRILLS, ROLLING_BRACKETS, WIDE_RUNS])


	T('17__Spooky_Macaron  S14',  TWISTS)
	T('17__Spooky_Macaron  D25',  DRILLS)


	T('17__Stager  S17/S19/D18/D20',  [MEMORIZE, GIMMICKS_STOPS])


	T('12__Star_Command  D15',  TWISTS)


	T('16__Stardream  S21',  TWISTS)


	T('17__Stardream_Eurobeat_Remix__SHORT  S18',  JUMPS)
	T('17__Stardream_Eurobeat_Remix__SHORT  D20',  [JUMPS, STRETCH])


	//not on Phoenix:  T('14__Stardust_Overdrive  S18',  SLOWDOWN)
	T('14__Stardust_Overdrive  S18',  [DRILLS, BRACKETS, TWISTS])
	//not on Phoenix:  T('14__Stardust_Overdrive  D19',  SLOWDOWN)


	T('14__Stardust_Overdrive__SHORT  S16',  [DRILLS, ROLLING_BRACKETS])


	T('15__Start_On_Red  S19',  TWISTS)


	T('15__Step  D20',  WIDE_RUNS)


	T('17__Storm  D19',  TWISTS)


	T('07__Street_Show_Down  D19',  [TWISTS, WIDE_RUNS])


	T('17__Sudden_Appearance_Image  D23',  BRACKETS_PLUS)


	//T('14__Sugar_Conspiracy_Theory  *',  BGA)
	T('14__Sugar_Conspiracy_Theory  S19',  TWISTS_SIDE)


	T('16__Sugar_Plum  S19',  [TWISTS, JACKS])


	T('17__Super_Akuma_Emperor  S18',  JACKS)


	T('15__Super_Capriccio  S16',  TWISTS_SIDE)
	T('15__Super_Capriccio  S19',  TWISTS)
	T('15__Super_Capriccio  D19',  TWISTS_QUAD)


	T('14__Super_Fantasy  D22',  [TWISTS_BACK, WIDE_RUNS, STAMINA])


	T('16__Switronic  S17',  TWISTS)
	T('16__Switronic  D18',  TWISTS_BACK)
	T('16__Switronic  D22',  GIMMICKS_BLINKING)


	T('16__Switronic__SHORT  S17',  [GIMMICKS_BLINKING, TWISTS])


	//not on Phoenix: T('11__Take_Out  D19',  SLOWDOWN)
	T('11__Take_Out  D19',  DRILLS)
	T('11__Take_Out  D22/D23',  SLOWDOWN)


	T('16__Tales_of_Pumpnia  S20/D21',  NAKAKA)


	T('17__That_Kitty  S23/D24',  [BRACKETS, DRILLS])


	T('17__The_Apocalypse  S20',  [TWISTS, BRACKETS])


	T('11__The_Devil  S19/D20',  [SLOWDOWN, GIMMICKS_VELOCITY])


	T('16__The_End_of_the_World  S20',  EXOTIC_CENTRALHOLD)


	T('15__The_Festival_of_Ghost2  D17',  [TWISTS, GIMMICKS_VELOCITY])
	T('15__The_Festival_of_Ghost2  D20',  [TWISTS_BACK, GIMMICKS_VELOCITY])


	//T('0F__The_People_Didnt_Know  *',  BGA)
	T('0F__The_People_Didnt_Know  D17',  TWISTS_BACK)


	T('16__The_Reverie  D22',  TWISTS)


	T('14__The_Revolution  S17/S19',  TWISTS)


	T('0F__Toccata  S17',  TWISTS_BACK)
	T('0F__Toccata  D18',  [TWISTS, WIDE_RUNS])


	T('17__Tomboy  S19',  [BRACKETS, TWISTS])
	T('17__Tomboy  D20',  TWISTS_BACK)


	T('15__Travel_to_Future  D23',  JACKS)


	T('12__Tribe_Attacker  D17',  WIDE_RUNS_PLUS)


	T('16__Tropicanic  S19/D21',  TWISTS)


	T('03__Turkey_March  S17',  JACKS)
	T('03__Turkey_March  S19',  TWISTS)


	T('10__Turkey_March_Minimal_Tunes  S17',  TWISTS_SIDE)
	T('10__Turkey_March_Minimal_Tunes  D18',  TWISTS_BACK)


	T('15__Twist_of_Fate  S19/D21',  [MEMORIZE, SLOWDOWN_PLUS])


	T('17__Yo_Say_Fairy  S20',  FOOTSWITCHES)
	T('17__Yo_Say_Fairy  D22',  WIDE_RUNS)


	T('14__Yog_Sothoth__SHORT  D16',  TWISTS_BACK)  


	T('10__U_Got_2_Know  S19',  [TWISTS, STAMINA])
	T('10__U_Got_2_Know  S20',  TWISTS)


	T('13__U_Got_Me_Rocking  D17',  TWISTS_BACK)


	T('0D__Ugly_Dee  S17',  MEMORIZE)


	T('17__Uh_Heung  S22',  EXOTIC_HANDS)


	T('17__Underworld  D25',  BRACKETS)


	T('17__Ultimate_Eyes  S14',  JACKS)


	T('13__Unique  S16.XX',  JACKS)
	T('13__Unique  D18',  STRETCH)


	T('0F__Uprock  S17',  MEMORIZE)


	T('15__Up_n_Up  S17',  TWISTS)


	T('16__Uranium  D24',  [WIDE_RUNS, TWISTS])


	T('15__Utsushiyo_No_Kaze  D20',  TWISTS_QUAD)


	T('15__V3  S14',  JACKS)
	T('15__V3  D24',  TWISTS_BACK)


	T('10__Vacuum  S16',  JACKS)
	T('10__Vacuum  S19',  DRILLS)


	//not on Phoenix:  T('16__Vanish  D13',  SLOWDOWN)
	T('16__Vanish  S20',  [TWISTS, GIMMICKS_VANISH])
	// not on Phoenix:  '16__Vanish  S20' earthworm in the end
	T('16__Vanish  D24',  [TWISTS, WIDE_RUNS])


	T('17__Versailles  D23',  SLOWDOWN)


	T('14__Violet_Perfume  S17',  TWISTS)


	T('07__Vook  D15',  TWISTS_BACK)


	T('15__Vulcan  S22',  TWISTS_SIDE)


	T('12__VVV  D17/D19',  SLOWDOWN)


	T('15__Waltz_of_Doge  S17',  TWISTS)


	T('16__Wedding_Crashers  S21',  TWISTS)


	T('16__Wedding_Crashers__SHORT  D20',  TWISTS_BACK)


	T('0D__Wi_Ex_Doc_Va  D17',  TWISTS_BACK)


	T('16__Wicked_Legend  D18',  WIDE_RUNS)


	T('07__Will_o_the_Wisp  S19',  TWISTS_SIDE)


	T('0D__Witch_Doctor_1  S18.Phoenix/S19/D21.Phoenix',  TWISTS_BACK)
	T('0D__Witch_Doctor_1  D17',  TWISTS_QUAD)


	T('11__We_Got_2_Know  D18',  TWISTS_BACK)


	T('11__What_Happened  D23',  BRACKETS_PLUS)


	T('13__Windmill  D23',  [TWISTS_BACK, ROLLING_BRACKETS])


	T('07__Winter  S20',  [TWISTS, STAMINA])
	T('07__Winter  D21',  WIDE_RUNS)


	T('17__Wither_Garden  S20',  JACKS)


	T('11__X_Rave  S17',  ROLLING_BRACKETS)


	T('11__X_Rave__SHORT  D18',  ROLLING_BRACKETS)


	T('10__X_Tree  D22',  WIDE_RUNS)


	T('0A__X_Treme  S18',  TWISTS)


	T('16__Xeroize  D18',  WIDE_RUNS)
	T('16__Xeroize  S21',  TWISTS_BACK)


	T('13__Yeo_Rae_A  S13',  SLOWDOWN);


	T('14__You_again_my_love  D15',  WIDE_RUNS)


	T('16__You_and_I  S14',  TWISTS)
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
