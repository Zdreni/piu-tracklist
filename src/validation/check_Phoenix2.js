"use strict";


import { CheckInitialTracklistOfNewMix } from './check.js';


const checkPhoenix2Table = {

// verified according to:
//   - https://www.youtube.com/watch?v=EvMn4sgqWDU  (New Tunes)
//   - https://www.youtube.com/watch?v=acusRTT2EPk  (KPOP)
//   - https://www.youtube.com/watch?v=gwfdnJGBSOA  (Original)
//   - https://www.youtube.com/watch?v=p97FE-hh_xM  (World Music)
//   - https://www.youtube.com/watch?v=qBRAjh4pAgs  (Xross)
//   - https://www.youtube.com/watch?v=pt2im9QVGfs  (Short)
//   - https://www.youtube.com/watch?v=kNAztUtqo5o  (Remix)
//   - https://www.youtube.com/watch?v=j9w0nJ2lmCg  (Full)


// track order is sorted as in "all tunes"


// New Tunes:

// Crash-Landing Rengezvous / Xyris / bpm 128~190
"18__Crash_Landing_Rengezvous":  "S13 S16 S19 S22 D17 D21 D24"

// QUATTUORUX / D-D-Dice Vs. Tanchiky Vs. Karameru / bpm 220
"18__Quattuorux":  "S15 S19 S22 S24 D17 D21 D24 D26"

// NightTheater / *wakadori / bpm 151
"18__Nighttheater":  "S12 S15 S18 S21 D16 D19 D22",

// INFiNiTE ENERGY -Overdoze- / Reku Mochizuki / bpm 180
"18__Infinite_Energy_Overdoze":  "S13 S16 S18 S21 S23 D19 D22 D25",

// FREEDOM DiVE / xi / bpm 222.22
"18__Freedom_Dive":  "S13 S17 S22 S25 D18 D24 D27",

// Dreamchasers / s-don / bpm 155
"18__Dreamchasers":  "S12 S15 S17 S20 D17 D20 D22",

// SUPER*HARAGURO*POP / Zekk / bpm 160
"18__Super_Haraguro_Pop":  "S4 S7 S10 S12 S16 S18 S20 S22 D17 D20 D22 D24",



// K-POP:

'18__T_B_H':  "s2 s4 s6 s14 s17 s20 s22  d18 d22 d24",
'18__Do_the_Dance':  "s1 s3 s5 s8 s15 s17 s20  d7 d16 d18 d22  CoOp(x2)",
'18__Bang_Bang':  "s2 s4 s6 s10 s16 s18 s21  d12 d18 d20 d23  CoOp(x2)",
'18__404_New_Era':  "s1 s3 s5 s16 s18 s21  d17 d20 d23",
'17__Storm':  "s2 s4 s6 s9 s15 s17  d8 d17 d19  CoOp(x3)",
'17__Airplane':  "s1 s3 s5 s13 s15 s17  d8 d16 d18  CoOp(x3)",
'17__Nostalgia':  "s3 s5 s8 s14 s17 s20  d10 d15 d18 d21",
'17__Jogging':  "s3 s5 s9 s16 s17  d7 d16 d18 d22",
'16__Full_Moon':  "s2 s4 s6 s16 s19 s21  d14 d19 d24  CoOp(x2)",
'16__Timing':  "s2 s4 s7 s15 s18  d11 d16 d19  CoOp(x2)",
'16__Fly_High':  "s1 s3 s5 s9 s15 s18 s20  d10 d16 d19 d21  CoOp(x2)",
'16__You_and_I':  "s1 s4 s7 s15 s17 s21  d15 d17 d20 d25  CoOp(x2)",
'15__Chase_Me':  "s3 s5 s9 s15 s17 s20  d12 d18 d23  CoOp(x2)",
'15__Good_Night':  "s3 s6 s9 s17 s20 s23  d6 d19 d22 d24",
'0A__Dignity':  "s4 s6 s15 s17 s21 s22  d17 d20 d25 d26",
'05__Slam':  "s5 s7 s9 s18 s20  d10 d22 d24  CoOp(x2)",
'01__Another_Truth':  "s4 s5 s8 s16 s10 s18 s19 s21  CoOp(x2)"


// Original

// Enjoy The Show / RiraN ft. Negoto Bunnyla / bpm 160
'18__Enjoy_the_Show':  "s10 s18 s21 s23  d19 d23 d25",

// Punishment Restaurant / memme / bpm 175
'18__Punishment_Restaurant':  "s4 s8 s11 s17 s21  d14 d18 d22",

// Blazor / WONDERTRAVELER Project / bpm 161
'18__Blazor':  "s11 s15 s18 s20 s22  d18 d20 d22 d24",

// B3 / MAX / bpm 160
'18__B3':  "s7 s11 s16 s18 s20  d12 d18 d21",

// Digitalis / NeLiME / bpm 160
'18__Digitalis':  "s11 s14 s18 s21  d16 d21 d24",

// The Last Rebellion / MonstDeath / BPM 199
'18__The_Last_Rebellion':  "s16 s19 s21 s23  d21 d23 d25",

// OVERNIGHT FLOWER / P*Light / bpm 210
'18__Overnight_Flower':  "s12 s16 s19 s22 s24  d18 d20 d24 d26",

// Legendary Dominion / Laur / bpm 210
'18__Legendary_Dominion':  "s16 s20 s22 s25  d21 d25 d27",

'17__Festival_of_Death_Moon':  "s3 s5 s11 s15 s19 s21  d11 d15 d19 d23",
'17__ESP':  "s7 s13 s18 s20 s22  d16 d20 d22 d24",
'17__Highway_Chaser':  "s4 s7 s11 s16 s20  d13 d18 d22",
'17__Eternal_Universe':  "s4 s7 s12 s16 s20 s23  d19 d23 d25",
'17__Burn_Out':  "s11 s15 s17 s20  d13 d20 d23",
'17__4nt':  "s9 s12 s16 s20 s22  d14 d20 d24",
'17__Ultimate_Eyes':  "s4 s7 s11 s14 s16 s19 s22  d13 d21 d24",
'17__Nyan_turne':  "s4 s7 s11 s16 s19  d12 d17 d21  CoOp(x2)",
'17__Vector':  "s8 s14 s18 s22  d15 d19 d24",
'17__Versailles':  "s7 s10 s16 s19 s21  d13 d20 d23",
'17__The_Apocalypse':  "s4 s7 s11 s14 s16 s18 s21  d13 d16 d18 d20 d24",
'17__Showdown':  "s6 s10 s14 s17 s20  d11 d16 d18 d21",
'17__Booom':  "s7 s12 s15 s17 s20  d13 d16 d18 d22",
'17__Euphorianic':  "s3 s5 s8 s11 s16 s19  d12 d18 d21 d23",
'17__Halloween_Party_Multiverse':  "s8 s12 s16 s18 s20  d13 d17 d22 d23  CoOp(x2)",
'17__Jupin':  "s13 s17 s19 s21 s23  d14 d18 d23 d25",
'17__Ghroth':  "s13 s16 s19 s21 s23  d17 d20 d23 d25",
'17__Kugutsu':  "s18 s20 s23 s25  d20 d23 d25 d27",
'17__Flavor_Step':  "s11 s14 s18 s20  d15 d19 d22",
'17__Dead_End':  "s18 s21 s23 s25  d22 d26 d28",
'17__Lucid_Dream':  "s8 s13 s19 s20  d14 d20 d23",
'17__See':  "s11 s16 s19 s22  d13 d18 d20 d23",
'17__Etude_Op_10_4':  "s4 s7 s11 s17 s23  d13 d18 d25",
'17__Stardream_Eurobeat_Remix':  "s7 s12 s17 s19 s21  d13 d18 d20 d23",
'17__1948':  "s18 s21 s24 s26  d24 d27 d??",
'17__Duel':  "s10 s13 s16 s18 s21 s22  d14 d18 d21 d24",
'17__Vanish_2_Roar_of_the_invisible_dragon':  "s12 s17 s20 s22  d13 d18 d24",
'17__Lacrimosa':  "s3 s6 s10 s13 s15 s17 s20  d9 d15 d18 d22",
'17__Solfeggietto':  "s9 s15 s19 s21 s22  d11 d16 d20 d23 d25",
'17__Murdoch':  "s11 s18 s20 s22  d14 d19 d21 d24",
'17__Little_Munchkin':  "s8 s13 s16 s19 s21  d11 d15 d17 d19 d22  CoOp(x2)",
'17__Simon_Says_Eurodance':  "",
'17__Barbers_Madness':  "",
'17__Yo_Say_Fairy':  "",
'17__Le_Nozze_di_Figaro_Celebrazione_Remix':  "",
'17__Demon_of_Laplace':  "",
'17__Bluish_Rose':  "",
'17__Lohxia':  "",
'17__PRiMA_MATERiA':  "",
'17__Imperium':  "",
'17__Neo_Catharsis':  "",
'17__Appassionata':  "",
'17__Curiosity_Overdrive':  "",
'17__Sonic_Boom':  "",
'17__Megaheartz':  "",
'17__Darkside_of_the_Mind':  "",
'17__E_O_N':  "",
'17__Chaos_Again':  "",
'17__Solve_My_Hurt':  "",
'17__Glimmer_Gleam':  "",
'17__Sudden_Appearance_Image':  "",
'17__Deca_Dance':  "",
'17__New_Rose':  "",
'17__Hercules':  "",
'17__Invasion':  "",
'17__Earendel':  "",
'17__Hymn_of_Golden_Glory':  "",
'17__Athenas_Shield':  "",
'17__Murdoch_vs_Otada':  "",
'17__Wither_Garden':  "",
'17__Imaginarized_City':  "",
'17__Crimson_Hood':  "",
'17__Doppelganger':  "",
'16__Wedding_Crashers':  "",
'16__Switronic':  "",
'16__Obliteration':  "",
'16__Transacaglia_in_G_minor':  "",
'16__1949':  "",
'16__Janus':  "",
'16__I_Want_U':  "",
'16__District_1':  "",
'16__Sugar_Plum':  "",
'16__Telling_Fortune_Flower':  "",
'16__Nyarlathotep':  "",
'16__Heart_Rabbit_Coaster':  "",
'16__Lepton_Strike':  "",
'16__Skeptic':  "",
'16__Iolite_Sky':  "",
'16__Percent_X':  "",
'16__La_Cinquantaine':  "",
'16__Le_Grand_Rouge':  "",
'16__Carmen_Bus':  "",
'16__Macaron_Day':  "",
'16__Ice_of_Death':  "",
'16__Poseidon':  "",
'16__Adrenaline_Blaster':  "",
'16__Vanish':  "",
'16__Tales_of_Pumpnia':  "",
'16__Kimchi_Fingers':  "",
'16__Orbit_Stabilizer':  "",
'16__Destrucimate':  "",
'16__Clematis_Rapsodia':  "",
'16__Wicked_Legend':  "",
'16__Tantanmen':  "",
'16__Stardream':  "",
'16__Can_Can_Orpheus':  "",
'16__Papasito':  "",
'16__Fires_of_Destiny':  "",
'16__The_End_of_the_World':  "",
'16__Forgotten_Vampire':  "",
'16__Harmagedon':  "",
'16__Repentance':  "",
'16__The_Reverie':  "",
'16__Cygnus':  "",
'16__Tropicanic':  "",
'16__God_Mode_2_0':  "",
'15__Last_Rebirth':  "",
'15__Super_Capriccio':  "",
'15__Hellfire':  "",
'15__Tritium':  "",
'15__Cross_Over':  "",
'15__God_Mode':  "",
'15__Shub_Niggurath':  "",
'15__Further':  "",
'15__The_Quick_Brown_Fox':  "",
'15__Silver_Beat':  "",
'15__Bring_Back_the_Beat':  "",
'15__Break_Out':  "",
'15__Sarabande':  "",
'15__Kasou_Shinja':  "",
'15__Overblow2':  "",
'15__Passing_Rider"':  "",
'15__Arcana_Force':  "",
'15__Allegro_Furioso':  "",
'15__Anguished_Unmaking':  "",
'15__Utsushiyo_No_Kaze':  "",
'15__Hey_U':  "",
'15__Twist_of_Fate':  "",
'15__HTTP':  "",
'15__Up_n_Up':  "",
'15__Travel_to_Future':  "",
'15__Rave_til_the_Earth_End':  "",
'15__Awakening':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",
'':  "",


};


export function CheckInitialTracklistOfPhoenix()
{
	CheckInitialTracklistOfNewMix( "Phoenix2", checkPhoenix2Table );
}
