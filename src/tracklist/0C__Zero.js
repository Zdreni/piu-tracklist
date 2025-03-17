import {
	ORIGINAL, KPOP, WORLD,
	STANDARD, REMIX, FULL
} from '../constants.js';


export const newTunes__0C__Zero = {


"0C__Beat_of_the_War_2":
{
	title: "Beat of the War 2", artist: "BanYa", bpm: "190",
	arcadeID: "C01",
	pumpoutID: 47,

	charts: {
		Phoenix: "= S7`6 S11`10 S17`16 D15`14",
		XX: "= S21.new D14`12 D20`19",
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S4 S6",
		Fiesta: "S5`nl S10`hd S16`cz D12`fs D19`nm",
		NXA: ["5", "10", "16", "12", "19"],
		NX2: ["4", "9", "16", "11", "19"],
		NX: ["*2", "*4.5", "@1", "*5.5", "@4"],
		Zero: ["3", "8", "17", "9", "20"],
	},
},


"0C__Moonlight":
{
	title: "Moonlight", artist: "BanYa", bpm: "180",
	arcadeID: "C02",
	pumpoutID: 48,

	charts: {
		Phoenix: "= S11`10 D12`11  @2.06 D24",
		XX: "= S8`7",
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S4",
		Fiesta: "S10`hd S19`cz D11`fs D21`nm  S18`acz D20`anm  S7.new",
		NXA: ["", "10", "19", "11", "21"], NXA_: ["", "", "19", "", "21"],
		NX2: ["", "8", "19", "11", "21"],
		NX: ["", "*4", "@4", "*5.5", "@6"],
		Zero: ["", "7", "18", "8", "21"],
	},
},


"0C__Witch_Doctor":
{
	title: "Witch Doctor", artist: "BanYa", bpm: "195",
	arcadeID: "C03",
	pumpoutID: 49,

	charts: {
		Phoenix: "= S11`10",
		XX: "= S17`16 D22`23 D23`22",
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S4 S6 S10",
		Fiesta: "S16`cz D22`nm  S19`ahd S21`acz D19`afs D23`anm",
		NXA: ["", "", "16", "", "23"], NXA_: ["", "19", "21", "19", "23"],
		NX2: ["", "", "17", "", "23"], NX2_: ["", "", "21", "", "22"],
		NX: ["", "", "@1", "", "@7"], NX_: ["", "", "@5", "", "@7"],
		Zero: ["", "", "17", "", "22"], Zero_: ["", "", "??", "", "??"],
			// arcade charts on Zero are unlock for mission
	}
},


"0C__Love_is_a_Danger_Zone_2":
{
	title: "Love is a Danger Zone 2", artist: "BanYa", bpm: "162",
	arcadeName: "Love is a Danger Zone pt. 2",
	arcadeID: "C04",
	pumpoutID: 50,

	charts: {
		Phoenix: "= S11`9 D18`17 D24`23",
		XX: "= S22`21",
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S9",
		Fiesta: "S7`nl S15`hd S21`cz D17`fs D23`nm  @1.10 S4",
		NXA: ["7", "15", "21", "17", "23"],
		NX2: ["6", "15", "21", "18", "23"],
		NX: ["*3", "@1", "@6", "@3", "@8"],
		Zero: ["7", "15", "21", "18", "23"],
	},
},


"0C__Phantom":
{
	title: "Phantom", artist: "BanYa", bpm: "136",
	arcadeID: "C05",
	pumpoutID: 51,

	charts: {
		Phoenix: "= S13`12 D15`13 D21`20 -Dp7",
		XX: "= S18`17 S19`18 D13`12 D19`20 D20`19",
			//??? D19.updated
			// D19-XX - https://www.youtube.com/watch?v=zJDLZy7r-lE
			// D19-P2 - https://www.youtube.com/watch?v=UF_tkEWx4L4
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S2 S7",
		Fiesta: "S12`hd S18`cz Dp7`fs D19`nm  S17`acz D12`afs D20`anm",
		NXA: ["", "12", "18", "7", "19"], NXA_: ["", "", "18", "11", "20"],
		NX2: ["", "10", "18", "7", "19"], NX2_: ["", "", "19", "", "20"],
		NX: ["", "*5", "@3", "*3.5", "@4"], NX_: ["", "", "", "", "@3"],
		Zero: ["", "10", "18", "6", "19"],
	},
},


"0C__Papa_Gonzales":
{
	title: "Papa Gonzales", artist: "BanYa", bpm: "145",
	arcadeID: "C06",
	pumpoutID: 52,

	charts: {
		Phoenix: "= D19`18 D24`23 -D7",
		XX: "= S16`14  @2.07 S22.lock D23.lock",
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S4 S8",
		Fiesta: "S6`hd S14`cz D7`fs D18`nm",
		NX: ["", "*3", "*7", "*3.5", "@3"],
		Zero: ["", "6", "14", "7", "18"],
	},
},


"0C__Jump":
{
	title: "Jump", artist: "BanYa", bpm: "96",
	arcadeID: "C07",
	pumpoutID: 764,

	charts: {
		Phoenix: "= S12`13",
		XX: "S4`nl S7`hd S13`cz  @1.01 D18.lock  @2.00 S16.lock",
		Zero: ["3", "7", "9", "", ""],
	},
},


"0C__Emergency":
{
	title: "Emergency", artist: "Drunken Tiger", channel: KPOP, bpm: "110",
	arcadeID: "C08",
	pumpoutID: "",

	charts: {
		NX2: ["2", "5", "12", "5", "14"],
		NX: ["*1", "*2.5", "*6", "*2.5", "*7"],
		Zero: ["3", "4", "12", "6", "15"],
	},
},


"0C__My_Friend":
{
	title: "My Friend", artist: "Cho PD", channel: KPOP, bpm: "127",
	arcadeID: "C09",
	pumpoutID: 428,

	charts: {
		Fiesta2: "=",
		FiestaEX: "=",
		Fiesta: "Sp3`nl S12`cz Dp5`fs D14`nm  Dp6`afs  S1.new S3.new S6.new",
		NX2: ["3", "4", "12", "5", "14"],
		NX: ["*1.5", "*2", "*6", "*2.5", "*7"],  NX_: ["", "", "", "*3", ""],
		Zero: ["3", "4", "13", "5", "16"], Zero_: ["", "", "", "??", ""],
	},
},


"0C__Wuthering_Heights":
{
	title: "Wuthering Heights", artist: "Eugene", channel: KPOP, bpm: "138",
	arcadeID: "C10",
	pumpoutID: "",

	charts: {
		NX2: ["2", "4", "", "3", ""],
		NX: ["*1", "*2", "", "*1.5", ""],
		Zero: ["2", "4", "", "3", ""],
	},
},


"0C__Do_It_Yourself":
{
	title: "Do It Yourself", artist: "Lazy Bone", channel: KPOP, bpm: "106",
	arcadeID: "C11",
	pumpoutID: "",

	charts: {
		NX2: ["", "6", "13", "7", "14"], NX2_: ["", "", "", "", "17"],
		NX: ["", "*3", "*6.5", "*3.5", "*7"], NX_: ["", "", "", "", "@2"],
		Zero: ["", "6", "13", "7", "14"], Zero_: ["", "", "", "", "??"],
	},
},


"0C__Whats_Going_On":
{
	title: "What's Going On?", artist: "Turtles", channel: KPOP, bpm: "130",
	arcadeID: "C12",
	pumpoutID: "",

	charts: {
		NX2: ["3", "3", "7", "5", "8"],
		NX: ["*1.5", "*1.5", "*3.5", "*2.5", "*4"],
		Zero: ["3", "2", "7", "5", "9"],
	},
},


"0C__All_Famy":
{
	title: "All Famy", artist: "Eun Ji Won", bpm: "94",
	arcadeID: "C13",
	pumpoutID: "",

	charts: {
		Zero: ["2", "3", "", "4", ""],
	},
},


"0C__Chung_Hwa_Ban_Jeom":
{
	title: "Chung Hwa Ban Jeom", artist: "Louis", channel: KPOP, bpm: "150",
	arcadeID: "C14",
	pumpoutID: 70,

	charts: {
		Prime2: "=",
		Prime: "=  @1.06 S4 S9",
		Fiesta2: "=",
		FiestaEX: "Sp1`nl S6`hd S14`cz Dp2`fs D16`nm",
		NX2: ["1", "5", "12", "3", "15"],
		NX: ["*0.5", "*2.5", "*6", "*1.5", "@1(15)"],
		Zero: ["2", "5", "13", "2", "16"],
	},
},


"0C__Mr_Fire_Fighter":
{
	title: "Mr. Fire Fighter", artist: "Spooky Banana", channel: KPOP, bpm: "158",
	arcadeID: "C15",
	pumpoutID: 427,

	charts: {
		Fiesta2: "=",
		FiestaEX: "= -S2",
		Fiesta: "S2`nl S7`hd S13`cz D8`fs D15`nm  S4.new",
		NXA: ["2", "7", "13", "8", "15"],
		NX2: ["2", "7", "13", "8", "15"],
		NX: ["*1", "*3.5", "*6.5", "*4", "@1(15)"],
		Zero: ["2", "6", "13", "8", "15"],
	},
},


"0C__Footprints":
{
	title: "Footprints", artist: "T.O", channel: KPOP, bpm: "135",
	arcadeID: "C16",
	pumpoutID: "",

	charts: {
		NX2: ["", "5", "11", "5", "11"],
		NX: ["", "*2.5", "*5.5", "*2.5", "*5.5"],
		Zero: ["", "5", "12", "5", "13"],
	},
},


"0C__Oh_My":
{
	title: "Oh My!", artist: "Jang Yoon Jung", channel: KPOP, bpm: "112",
	arcadeID: "C17",
	pumpoutID: "",

	charts: {
		NX2: ["2", "4", "10", "4", "11"],
		NX: ["*1", "*2", "*5", "*2", "*5.5"],
		Zero: ["3", "4", "9", "5", "10"],
	},
},


"0C__Enter_the_Dragon":
{
	title: "Enter the Dragon", artist: "JTL", channel: KPOP, bpm: "110",
	arcadeID: "C18",
	pumpoutID: 425,

	charts: {
		Fiesta2: "=",
		FiestaEX: "=  @1.51 S8",
		Fiesta: "Sp2`nl S5`hd S14`cz Dp5`fs D17`nm  S1.new S4.new",
		NXA: ["2", "5", "14", "5", "17"],
		NX2: ["2", "5", "14", "5", "17"],
		NX: ["*1", "*2.5", "*7", "*2.5", "@2"],
		Zero: ["3", "4", "14", "5", "17"],
	},
},


"0C__Storm":
{
	title: "Storm", artist: "Perry", channel: KPOP, bpm: "96",
	arcadeID: "C19",
	pumpoutID: 430,

	charts: {
		Fiesta2: "=",
		FiestaEX: "=",
		Fiesta: "S5 S12 D13 Sp3 Dp4",
		NXA: ["3", "5", "12", "4", "13"],
		NX2: ["2", "5", "12", "4", "13"],
		NX: ["*1", "*2.5", "*6", "*2", "*6.5"],
		Zero: ["2", "3", "12", "4", "13"],
	},
},


"0C__Turn_Around":
{
	title: "Turn Around", artist: "Mina", channel: KPOP, bpm: "113",
	arcadeID: "C20",
	pumpoutID: "",

	charts: {
		NX2: ["2", "4", "13", "5", "14"],
		NX: ["*1", "*2", "*6.5", "*2.5", "*7"],
		Zero: ["3", "5", "11", "5", "14"],
	},
},


"0C__I_Love_You_Baby":
{
	title: "I Love You Baby", artist: "Pandera", channel: WORLD, bpm: "100",
	arcadeID: "C21",
	pumpoutID: "",

	charts: {
		NX: ["*1.5", "*2.5", "*5.5", "*2.5", "*6.5"],
		Zero: ["3", "5", "12", "5", "15"],
	},
},


"0C__Up_Up":
{
	title: "Up Up", artist: "Cachy Huang", channel: WORLD, bpm: "135",
	arcadeID: "C22",
	pumpoutID: "",

	charts: {
		NX: ["*1.5", "*2", "*5", "*2", "*5.5"],
		Zero: ["3", "4", "9", "4", "10"],
	},
},


"0C__Love_is_a_Danger_Zone_try_to_B_P_M":
{
	title: "Love is a Danger Zone (try to B.P.M.)", artist: "BanYa", bpm: "140 ~ 169", duration: REMIX,
	shortTitle: "Love is a Danger Zone (B.P.M.)",
	arcadeName: "Love is a danger zone 2 (try to B.P.M.)",
	arcadeID: "C41",
	pumpoutID: 53,

	charts: {
		Phoenix: "= S16`15 D17`16",
		XX: "= S15`12 S21`20 D16`14",
		Prime2: "=",
		Prime: "=",
		Fiesta2: "=",
		FiestaEX: "=",
		Fiesta: "S12`hd S20`cz D14`fs D23`nm",
		NXA_: ["", "15", "19", "15", "22"],
		NX2_: ["", "14", "21", "16", "23"],
		NX_: ["", "*7", "@5", "@1", "@8"],
		Zero_: ["", "12", "20", "14", "23"],
	},
},


"0C__K_Hip_Hop_Mix_Vol_1":
{
	title: "K-Hip Hop Mix Vol. 1", artist: "Perry/Drunken Tiger/JTL/Eun Ji Won", channel: KPOP, bpm: "110", duration: REMIX,
	arcadeID: "C42",
	pumpoutID: "",

	charts: {
		NX2_: ["", "8", "14", "7", ""],
		NX_: ["", "*4", "*7", "*3.5", ""],  // title: "Zero K-Hip Hop Mix"
		Zero_: ["", "7", "13", "6", ""],
	},
},


"0C__Zero_K_House_Mix_Vol_1":
{
	title: "Zero K-House Mix Vol. 1", artist: "Turtles/Cho PD/Harisu/Jang Yoon Jung", channel: KPOP, bpm: "136", duration: REMIX,
	arcadeID: "C43",
	pumpoutID: "",

	charts: {
		NX_: ["", "*3.5", "*6.5", "*3", ""],
		Zero_: ["", "6", "12", "5", ""],
	},
},


"0C__Ignition_Starts_Hypnosis_Extravaganza_Remix":
{
	title: "Ignition Starts/Hypnosis/Extravaganza Remix", artist: "BanYa", bpm: "146/180/195", duration: REMIX,
	arcadeID: "C44",
	pumpoutID: "",

	charts: {
		Zero_: ["", "??", "??", "??", ""],
	},
},


// C90	How to Play	BanYa
// C1C01	Beat of the War 2 (D&G Ver.)	BanYa


"0C__Love_is_a_Danger_Zone_2_DnG":
{
	title: "Love is a Danger Zone 2 (D&G Ver.)", artist: "BanYa", bpm: "162",
	shortTitle: "Love is a Danger Zone 2 (D&G)",
	arcadeName: "Love is a Danger Zone pt.2 another",
	altID: "DC04",
	arcadeID: "C1C04",
	sortingID: "C41__1",  // after LIADZ Try To BPM (C41)
	pumpoutID: 54,

	charts: {
		Phoenix: "= S17`16 S18`17",
		XX: "=",
		Prime2: "=",
		Prime: "= CoOp(x2)`Dp??(x2) -D??(x2)",
		Fiesta2: "=",
		FiestaEX: "=",
		Fiesta: "S16`ahd S17`acz D??(x2)`afs Dp??(x2)`anm",
			//? afs anm проверить
		NXA_: ["", "16", "17", "??(x2)", "??(x2)"],
			// Dp - CoOp, D - ahd+acz
		NX2_: ["", "16", "18", "", "??(x2)"],
		NX_: ["", "@1", "@3", "", "??(x2)"],
		Zero_: ["", "??", "??", "", "??(x2)"],
	},
},


};
