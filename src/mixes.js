"use strict";


import { CHINESE, LATIN, JAPAN, PHILIPPINES } from './constants.js';


export const mixes =
{
	'1st':       {},  // 1st Dance Floor
	'2nd':       {},  // 2nd Dance Floor
	'OBG':       {},  // 3rd O.B.G Dance Floor
	'OBG_SE':    {},  // 3rd S.E (Season Evolution)
	'Collection':{},  // The Collection
	'Perfect':   {},  // Perfect Collection
	'Extra':     {},  // Extra
	'Premiere':  {},  // Premiere (International). There was also a Brazil version
	'Prex':      {},  // PREX
	'Premiere2': {},  // Premiere 2
	'Rebirth':   {},  // Rebirth
	'Prex2':     {},  // Premiere EX 2
	'Premiere3': {},  // Premiere 3
	'Prex3':     {},  // PREX 3

	'Exceed':   { style: "old" },
	'Exceed2':  { style: "old" },
	'Zero':     { style: "old",
	              anothers: true },

	'NX':       { style: "old",
	              anothers: true },  // NX –NEW XENESIS-
	'NX2':      { style: "old",
	              anothers: true, regions: [ CHINESE ] },  // NX2 –NEXT XENESIS-
	'NXA':      { style: "old",
	              anothers: true },  // NX –ABSOLUTE-

	'Fiesta':   { style: "new",
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.10", "1.20"] },
	'FiestaEX': { style: "new",
	              patches: ["1.00", "1.10", "1.20", "1.30", "1.40", "1.50", "1.51"] },
	'Fiesta2':  { style: "new",
	              regions: [ LATIN ],
	              patches: ["1.00", "1.01", "1.02", "1.10", "1.20", "1.30", "1.40", "1.50", "1.51", "1.60", "1.61"] },

	'Prime':    { style: "new",
	              regions: [ LATIN ],
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.08", "1.09", "1.10",
	                        "1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "1.21"] },
	'Prime2':   { style: "new",
	              regions: [ LATIN, JAPAN, PHILIPPINES ],
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.08", "1.09", "1.10",
	                        "2.00", "2.01", "2.02", "2.03", "2.04", "2.05", "2.05.1"] },

	'XX':       { style: "new",
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05",
	                        "2.00", "2.01", "2.02", "2.03", "2.04", "2.05", "2.06", "2.07", "2.08"] },

	'Phoenix':  { style: "new",
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.08",
	                        "2.00", "2.01", "2.02", "2.03", "2.04", "2.05", "2.06", "2.07", "2.08"] },
};


export const mixesOrder = [ "Exceed", "Exceed2", "Zero", "NX", "NX2", "NXA", "Fiesta", "FiestaEX", "Fiesta2", "Prime", "Prime2", "XX", "Phoenix" ];
export const lowCaseMixesOrder = mixesOrder.map( x => x.toLowerCase() );
export const firstNewMixIndex = mixesOrder.indexOf( "Fiesta" );
export const lastOldMixIndex = firstNewMixIndex - 1;
//const oldMixesReverseOrder = mixesOrder.slice(0, firstNewMixIndex ).reverse();  // NXA..Exceed
//const newMixesOrder = mixesOrder.slice( firstNewMixIndex );  // Fiesta..Prime
