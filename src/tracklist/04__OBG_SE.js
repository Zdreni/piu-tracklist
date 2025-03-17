import {
	ORIGINAL, KPOP, WORLD,
	STANDARD, REMIX, FULL
} from '../constants.js';


export const newTunes__04__OBG_SE = {


"04__Oh_Rosa":
{
	title: "Oh! Rosa", artist: "BanYa", bpm: "148", fromMix: "OBG_SE",
	arcadeName: "Oh! Rosa!",
	arcadeID: "401",
	pumpoutID: 498,

	charts: {
		Phoenix: "= S9`8 S14`13 D11`7",
			// TODO.Phoenix: D11`7
		XX: "= S8`7",
		Prime2: "=  @1.04 CoOp(x2)",
		Fiesta2: "=",
		FiestaEX: "=",
		Fiesta: "D7`fs  S7.new S13.new",
		Exceed2: ["3", "6", "9", "7", ""],
		Exceed: ["3", "5", "9", "6", ""],
	},
},


"04__First_Love":
{
	title: "First Love", artist: "BanYa", bpm: "104", fromMix: "OBG_SE",
	arcadeID: "402",
	pumpoutID: 443,

	charts: {
		Phoenix: "= S6`4 S12`10 D15`14 -Sp1 -Dp4",
		XX: "= S10`9",
		Prime2: "=",
		Fiesta2: "=",
		FiestaEX: "=",
		Fiesta: "Sp1`nl S4`hd S9`cz Dp4`fs  D14",
		Exceed2: ["1", "4", "9", "4", ""],
		Exceed: ["1", "4", "9", "3", ""],
	},
},


"04__Betrayer":
{
	title: "Betrayer", artist: "BanYa", bpm: "92", fromMix: "OBG_SE",
	arcadeID: "403",
	pumpoutID: 441,

	charts: {
		Phoenix: "= S9`8 -Sp2 -D11",
		XX: "= D11`8",
		Prime2: "=",
		Prime: "@1.11 = S16 D17",
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S1 S13",
		Fiesta: "Sp2`nl S5`hd S8`cz D8`fs D13.new",
		Exceed: ["2", "5", "8", "6", ""],
	},
},


"04__Solitary":
{
	title: "Solitary", artist: "BanYa", bpm: "136", fromMix: "OBG_SE",
	arcadeID: "404",
	pumpoutID: 5,

	charts: {
		Phoenix: "= S11`9 D17`16 -Sp3 -Dp5",
		XX: "= S17`16 S18`17 D10`7",
			//??? proof S17 S18
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: " =  @1.30 Dp5  @1.51 S2 S4 S8",
		Fiesta: "Sp3`nl S6`hd S9`cz D7`fs D16`nm  S17`acz  S16.new",
		NXA: ["3", "6", "9", "7", "16"], NXA_: ["", "", "17", "", "18"],
		NX2: ["3", "5", "9", "7", "16"], NX2_: ["", "", "17", "", "19"],
		NX: ["*1.5", "*2.5", "*4.5", "*3.5", "@1"],
		Zero: ["3", "5", "8", "6", "15"],
		Exceed2: ["3", "5", "8", "6", "15"],
		Exceed: ["3", "5", "9", "6", ""],
	},
},


"04__Mr_Larpus":
{
	title: "Mr. Larpus", artist: "BanYa", bpm: "190", fromMix: "OBG_SE",
	arcadeID: "405",
	pumpoutID: 7,

	charts: {
		Phoenix: "= S13`12 S15`14 D18`17",
		XX: "= S12`11 D16`14  @2.07 D22",
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S3",
		Fiesta: "S5`nl S11`hd S14`cz S22`acz D14`fs D17`nm D23`afs  S20.new",  //? что за D25, он вроде только на фиесте ex есть
		NXA: ["5", "11", "14", "14", "17"], NXA_: ["", "", "22", "23", "25"],
		NX2: ["4", "11", "14", "14", "17"], NX2_: ["", "", "21", "23", "??"],
		NX: ["*2", "*5.5", "*7", "*7", "@2"], NX_: ["", "", "@6", "@6", "@8"],
		Zero: ["4", "9", "13", "10", "18"], Zero_: ["", "", "", "", "??"],
		Exceed2: ["4", "9", "13", "10", "18"],
		Exceed: ["4", "7", "12", "10", "19"],
	},
},


// 406	Sad Salsa	Baek Ji Young
// 407	Summer of Love	Roo'Ra
// 408	Kiss	Country Kko Kko
// 409	Man & Woman	Cool
// 410	First Love	Clon


"04__A_Trap":
{
	title: "A-Trap", artist: "Baby V.O.X.", channel: KPOP, bpm: "125", fromMix: "OBG_SE",
	arcadeID: "411",
	pumpoutID: "",

	charts: {
		Exceed2: ["1", "4", "12", "4", "13"],
	},
},


// 412	Disco Bus	Kim Hyun Jung


"04__Run":
{
	title: "Run!", artist: "Novasonic", bpm: "140", fromMix: "OBG_SE",
	arcadeID: "413",
	pumpoutID: 447,

	charts: {
		Fiesta2: "=",
		FiestaEX: "=",
		Fiesta: "S4`nl S8`hd S15`cz D8`fs D17`nm",
		NX: ["*2", "*4", "@1", "*4", "@1"],
		Zero: ["2", "5", "15", "6", "16"],
		Exceed2: ["2", "5", "15", "6", "16"],
		Exceed: ["2", "5", "10", "6", ""],
	},
},


"04__Run_to_You":
{
	title: "Run to You", artist: "DJ DOC", channel: KPOP, bpm: "132", fromMix: "OBG_SE",
	arcadeID: "414",
	pumpoutID: 18,

	charts: {
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "S4 S5 S10 D6  @1.20 S13 D14  @1.51 S2 S7",  //?
		Exceed: ["2", "5", "9", "3", ""],
	},
},


// 415	Remix: 4-1	Sechskies
// 417	Space Fantasy	E-paksa - it is in list as 517


};
