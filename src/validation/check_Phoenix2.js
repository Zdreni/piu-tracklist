"use strict";


import { CheckInitialTracklistOfNewMix } from './check.js';


const checkPhoenix2Table = {

// verified according to https://www.youtube.com/watch?v=EvMn4sgqWDU,
// track order is sorted as in "all tunes"


// New Tunes:

// T.B.H. / QWER / bpm 178
"18__T_B_H":  "S2 S4 S6 S14 S17 S20 S22 D18 D22 D24",

// Do the Dance / ILLIT / bpm 130
"18__Do_the_Dance":  "S1 S3 S5 S8 S15 S17 S20 D7 D16 D18 D22 CoOp(x2)",

// BANG BANG / IVE / bpm 152
"18__Bang_Bang":  "S2 S4 S6 S10 S16 S18 S21 D12 D18 D20 D23 CoOp(x2)",

// 404 (New Era) / KiiiKiii / bpm 127
"18__404_New_Era":  "S1 S3 S5 S16 S18 S21 D17 D20 D23",

// Enjoy The Show / RiraN ft. Negoto Bunnyla / bpm 160
"18__Enjoy_the_Show":  "S10 S18 S21 S23 D19 D23 D25",

// Punishment Restaurant / memme / bpm 175
"18__Punishment_Restaurant":  "S4 S8 S11 S17 S21 D14 D18 D22",

// Blazor / WONDERTRAVELER Project / bpm 161
"18__Blazor":  "S11 S15 S18 S20 S22 D18 D20 D22 D24",

// B3 / MAX / bpm 160
"18__B3":  "S7 S11 S16 S18 S20 D12 D18 D21",

// Digitalis / NeLiME / bpm 160
"18__Digitalis":  "S11 S14 S18 S21 D16 D21 D24",

// The Last Rebellion / MonstDeath / BPM 199
"18__The_Last_Rebellion":  "S16 S19 S21 S23 D21 D23 D25",

// OVERNIGHT FLOWER / P*Light / bpm 210
"18__Overnight_Flower":  "S12 S16 S19 S22 S24 D18 D20 D24 D26",

// Legendary Dominion / Laur / bpm 210
"18__Legendary_Dominion":  "S16 S20 S22 S25 D21 D25 D27",

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
};


export function CheckInitialTracklistOfPhoenix()
{
	CheckInitialTracklistOfNewMix( "Phoenix", checkPhoenixTable );
}
