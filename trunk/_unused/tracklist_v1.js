"use strict";

function DeepCopy( obj )
{
    if (Object.prototype.toString.call(obj) === '[object Array]')
    {
        var out = [], i = 0, len = obj.length;
        for ( ; i < len; i++ )
        {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    if (typeof obj === 'object')
    {
        var out = {}, i;
        for ( i in obj )
        {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    return obj;
}

var mixes =
{
	Exceed2:  { style: "old" },
	Zero:     { style: "old" },
	NX:       { style: "old" },
	NX2:      { style: "old" },
	NXA:      { style: "old" },

	Fiesta:   { style: "new" },
	FiestaEX: { style: "new" },
	Fiesta2:  { style: "new" },
	Prime:    { style: "new" },
};


function GetPreviousMixID( nextMixID )
{
	var prevMixID;
	for( var mixID in mixes )
	{
		if( mixID === nextMixID )
			return prevMixID;
		prevMixID = mixID;
	}
}


var SINGLE = "Single";
var DOUBLE = "Double";
var COUPLE = "Couple";

var ARCADE = "Arcade";
var SPECIAL = "Special";

var ORIGINAL = "Original";
var KPOP = "K-Pop";
var WORLD = "World";

var SHORT = "Short";
var STANDARD = "Standard";
var REMIX = "Full";
var FULL = "Full";

var knownArtists = {
	"BanYa": ORIGINAL,
	"BanYa Production": ORIGINAL,
	"Yahpp": ORIGINAL,

	"Eun Ji Won": KPOP,
	"Novasonic": KPOP,

	"PXNDX": WORLD,
};

var tracklist = [
{
	title: "2006 Love Song", artist: "BanYa Production", bpm: "96",
	Fiesta2: ["S3", "S10", "S12", "S15", "D13", "Dp5"],
	FiestaEX: ["S3", "S10", "S12", "S15", "D13", "Dp5"],
	NX: ["2", "7", "10", "4", "13"],
},
{
	title: "80's Pop", artist: "Energy Presents",
	Fiesta2: ["S2", "S5", "S8", "S12", "S16", "D6", "D17", "Sp3", "Dp4"],
	FiestaEX: ["S2", "S5", "S8", "S12", "S16", "D6", "D17", "Sp3", "Dp4"],
	Fiesta: ["S2", "S5", "S12", "S16", "D6", "D17", "Sp3", "Dp4"],
},
{
	title: "A-Trap", artist: "Baby V.O.X.", channel: KPOP, bpm: "125",
	Exceed2: ["1", "4", "12", "4", "13"],
},
{
	title: "A.U. Ready?", artist: "Gil Gun", channel: KPOP, bpm: "94",
	NXA: ["1", "5", "10", "5", "12"], NXA_: ["", "", "", "13", "16"],
	NX2: ["2", "5", "10", "5", "12"], NX2_: ["", "", "", "12", "15"],
},
{
	title: "Accident", artist: "MAX", channel: ORIGINAL, bpm: "183",
	Prime: ["S4", "S7", "S10", "S19", "D11", "D20"],
	Fiesta2: ["S4", "S7", "S10", "S19", "D11", "D20"],
},
{
	title: "Achluoias", artist: "D_AAN", channel: WORLD, bpm: "200",
	Prime: ["S8", "S15", "S18", "S22", "S24", "D12", "D16", "D24"],
	notes: ["unlock 1.02 on Prime"],
},
{
	title: "Adios", artist: "Eun Ji Won", bpm: "123",
	Fiesta2: ["S1", "S3", "S6", "S14", "D16", "Sp2", "Dp4"],
	FiestaEX: ["S1", "S3", "S6", "S14", "D16", "Sp2", "Dp4"],
	Fiesta: ["S3", "S6", "S14", "D16", "Sp2", "Dp4"],
	NXA: ["2", "6", "14", "4", "16"],
},
{
	title: "All Famy", artist: "Eun Ji Won", bpm: "94",
	Zero: ["2", "3", "", "4", ""],
},
{
	title: "All I Want For X-mas", artist: "BanYa", bpm: "130",
	Prime: ["S3", "S6", "S11(8)", "D7"],
	Fiesta2: ["S3", "S6", "S11(8)", "D7"],
	FiestaEX: ["S3", "S6", "S11(8)", "D7"],
	Exceed2: ["2", "5", "7", "4", ""],
},
{
	title: "Allegro Con Fuoco", artist: "DM Ashura", channel: WORLD, bpm: "156",
	Prime: ["S4", "S7", "S11", "S17", "S22", "D9", "D18", "D23", "Sp1", "Dp6"],
	Fiesta2: ["S4", "S7", "S11", "S17", "D9", "D18", "D23", "Sp1", "Dp6"],
	FiestaEX: ["S4", "S7", "S11", "S17", "D9", "D18", "D23", "Sp1", "Dp6"],
},
{
	title: "Allegro Piu Mosso", artist: "DM Ashura", channel: ORIGINAL, bpm: "169",
	Prime: ["S4", "S6", "S11", "S16", "D13", "D19"],
},
{
	title: "Another Truth", artist: "Novasonic", bpm: "136",
	Prime: ["S3", "S5", "S8", "S15", "D6", "D16", "D17", "D22(18)"],
	Fiesta2: ["S3", "S5", "S8", "S15", "D6", "D16", "D17", "D22(18)"],
	FiestaEX: ["S3", "S5", "S8", "S15", "D6", "D16", "D17", "D22(18)"],
	Fiesta: ["S3", "S5", "S15", "D6", "D16", "D17", "D22(18)"],
	NXA: ["4", "5", "15", "6", "16"], NXA_: ["", "", "", "17", "22(18)"],
	NX2: ["3", "5", "15", "6", "16"], NX2_: ["", "", "", "18", "21(18)"],
	NX: ["3", "5", "15", "6", "15"],
	Zero: ["3", "5", "16", "6", "16"],
	Exceed2: ["3", "5", "", "6", "16"],
},
{
	title: "Arch of Darkness", artist: "Yahpp", bpm: "136",
	Prime: ["S2", "S4", "S5", "S8", "S14", "S16", "D7", "D18"],
	Fiesta2: ["S2", "S4", "S5", "S8", "S14", "S16", "D7", "D18"],
	FiestaEX: ["S2", "S4", "S5", "S8", "S14", "S16", "D7", "D18"],
	NXA: ["3", "7", "14", "4", "16"], NXA_: ["", "", "17", "", ""],
	NX2: ["3", "7", "14", "4", "17"],
	NX: ["3", "7", "14", "8", "16"],
},
{
	title: "Arirang", artist: "BanYa Production", bpm: "160",
	Prime: ["S9", "S18(19)", "S22", "D10", "D20(21)", "Dp2"],
	Fiesta2: ["S9", "S18(19)", "S22", "D10", "D20(21)", "Dp2"],
	FiestaEX: ["S9", "S18(19)", "S22", "D10", "D20(21)", "Dp2"],
	Fiesta: ["S9", "S18(19)", "S22", "D10", "D20(21)"],
},
{
	title: "As I Told You", artist: "Kim Sung Jae", channel: KPOP, bpm: "120",
	Exceed2: ["2", "5", "9", "5", "12"],
},
{
	title: "ASDF", artist: "Doin", channel: ORIGINAL, bpm: "170",
	Prime: ["S9", "S17", "D10", "D17"],
	Fiesta2: ["S9", "S17", "D10", "D17"],
	FiestaEX: ["S8", "S17", "D10", "D17"],
},
{
	title: "Astral Song", artist: "Crying Nut", channel: KPOP, bpm: "~190",
	NXA: ["3", "7", "15", "8", "17"],
	NX2: ["4", "9", "15", "9", "17"],
},
{
	title: "Avalanche", artist: "Memme", channel: ORIGINAL, bpm: "175",
	Prime: ["S4", "S6", "S9", "S18", "D10", "D19", "D24"],
	notes: ["unlock 1.04 on Prime", "S18/D19/D24 personal unlock on Prime"],
},
{
	title: "Ba Be Loo Be Ra", artist: "Kristeen", channel: WORLD, bpm: "126",
	Exceed2: ["1", "4", "9", "5", "13"],
},
{
	title: "Bad Character", artist: "Jang Na Ra",
	Fiesta2: ["S3", "S6", "S10", "D11", "Sp1", "Dp3"],
	FiestaEX: ["S3", "S6", "S10", "D11", "Sp1", "Dp3"],
	Fiesta: ["S3", "S5", "S6", "S10", "D11", "Sp1", "Dp3"],
},
{
	title: "Bad Girl Good Girl", artist: "Miss A", channel: KPOP, bpm: "136",
	Prime: ["S1", "S3", "S5", "S14", "D4", "D13", "Sp2", "Dp3"],
	Fiesta2: ["S1", "S3", "S5", "S14", "D4", "D13", "Sp2", "Dp3"],
},
{
	title: "Bambole", artist: "Papa Gonzales", channel: WORLD, bpm: "128",
	Exceed2: ["2", "9", "11", "6", "12"],
},
{
	title: "Bar Bar Bar", artist: "Crayon Pop", channel: KPOP, bpm: "134",
	Prime: ["S3", "S5", "S8", "S14", "D4", "D11", "D15", "Dp??(x3)"],
},
{
	title: "Baroque Virus", artist: "Zircon", channel: WORLD, bpm: "135",
	Prime: ["S5", "S9", "S17", "D11", "D18", "D20"],
	Fiesta2: ["S5", "S9", "S17", "D11", "D18"],
},
{
	title: "Be Alive (Raaban Inc. Mix)", artist: "Stian K", channel: WORLD, bpm: "142",
	Prime: ["S2", "S5", "S8", "S15", "S17", "D10", "D16", "Dp??(x2)"],
	Fiesta2: ["S2", "S5", "S8", "D10", "Dp??(x2)"],
},
{
	title: "Be Mine", artist: "Infinite", channel: KPOP, bpm: "130",
	Prime: ["S2", "S4", "S7", "S15", "D5", "D15", "Sp3", "Dp5"],
	Fiesta2: ["S2", "S4", "S7", "S15", "D5", "D15", "Sp3", "Dp5"],
},
{
	title: "Beat # No.4", artist: "HeaDTriP", channel: KPOP, bpm: "121",
	Prime: ["S6", "S15", "D17", "Sp2", "Dp5"],
	Fiesta2: ["S6", "S15", "D17", "Sp2", "Dp5"],
	FiestaEX: ["S6", "S15", "D17", "Sp2", "Dp5"],
	Fiesta: ["S6", "S15", "D17", "Sp2", "Dp5"],
	NXA: ["2", "6", "15", "5", "17"],
	NX2: ["2", "6", "16", "5", "17"],
},
{
	title: "Beat of the War", artist: "BanYa", bpm: "202",
	Prime: ["S3", "S5", "S9", "S10", "S15", "D12", "D19"],
	Fiesta2: ["S3", "S5", "S9", "S10", "S15", "D12", "D19"],
	FiestaEX: ["S3", "S5", "S9", "S10", "S15", "D12", "D19"],
	Fiesta: ["S5", "S10", "S15", "D12", "D19"],
	NX2: ["5", "10", "15", "12", "19"],
	NX: ["5", "10", "15", "12", "18"],
	Zero: ["5", "9", "13", "9", "19"],
	Exceed2: ["5", "9", "13", "9", "20"],
},
{
	title: "Beat of the War 2", artist: "BanYa", bpm: "190",
	Prime: ["S4", "S5", "S6", "S10", "S16", "D12", "D19"],
	Fiesta2: ["S4", "S5", "S6", "S10", "S16", "D12", "D19"],
	FiestaEX: ["S4", "S5", "S6", "S10", "S16", "D12", "D19"],
	Fiesta: ["S5", "S10", "S16", "D12", "D19"],
	NXA: ["5", "10", "16", "12", "19"],
	NX2: ["4", "9", "16", "11", "19"],
	NX: ["4", "9", "15", "11", "18"],
	Zero: ["3", "8", "17", "9", "20"],
},
{
	title: "Beat the Ghost", artist: "BanYa Production", bpm: "124",
	Prime: ["S3", "S9", "S18(19)", "S20(19)", "D7", "D20"],
	Fiesta2: ["S3", "S9", "S18(19)", "S20(19)", "D7", "D20"],
	FiestaEX: ["S3", "S9", "S18(19)", "S20(19)", "D7", "D20"],
	Fiesta: ["S3", "S9", "S18(19)", "S20(19)", "D7", "D20"],
	NX2: ["3", "9", "18(19)", "7", "20"],
},
{
	title: "Bee", artist: "BanYa", bpm: "160",
	Prime: ["S4", "S7", "S10", "S11", "S15", "S19", "D11", "D19", "D21", "D23"],
	Fiesta2: ["S4", "S7", "S10", "S11", "S15", "S19", "D11", "D19", "D21", "D23"],
	FiestaEX: ["S4", "S7", "S10", "S11", "S15", "S19", "D11", "D19", "D21", "D23"],
	Fiesta: ["S4", "S11", "S15", "S19", "D11", "D21", "D23"],
	NXA: ["4", "11", "15", "11", "21"], NXA_: ["", "", "19", "", "23"],
	NX2: ["3", "8", "15", "11", "21"], NX2_: ["", "", "18", "", "23"],
	NX: ["3", "8", "15", "11", "20"],
	Zero: ["3", "6", "13", "9", "20"],
	Exceed2: ["3", "6", "13", "9", "20"],
},
{
	title: "Beethoven Virus", artist: "BanYa", bpm: "162",
	Prime: ["S4", "S7", "S8", "S13", "S16", "S17", "D8", "D18", "D20", "Dp3"],
	Fiesta2: ["S4", "S7", "S8", "S13", "S16", "S17", "D8", "D18", "D20", "Dp3", "Dp11"],
	FiestaEX: ["S4", "S7", "S8", "S13", "S16", "S17", "D8", "D18", "D20", "Dp3", "Dp11"],
	Fiesta: ["S4", "S7", "S8", "S13", "S16", "S17", "D8", "D18", "D20", "Dp11"],
	NXA: ["4", "7", "13", "8", "20"], NXA_: ["", "10", "17", "11", ""],
	NX2: ["3", "7", "13", "8", "20"], NX2_: ["", "7", "17", "9", ""],
	NX: ["3", "7", "13", "8", "19"],
	Zero: ["3", "6", "13", "8", "20"],
	Exceed2: ["3", "6", "13", "8", "20"],
},
{
	title: "Betrayer", artist: "BanYa",
	Fiesta2: ["S1", "S5", "S8", "S13", "D8", "D13", "Sp2"],
	FiestaEX: ["S1", "S5", "S8", "S13", "D8", "D13", "Sp2"],
	Fiesta: ["S5", "S8", "D8", "D13", "Sp2"],
},
{
	title: "Betrayer -Act. 2-", artist: "msgoon",
	Fiesta2: ["S4", "S6", "S10", "D15", "Sp3", "Dp3"],
	FiestaEX: ["S4", "S6", "S10", "D15", "Sp3", "Dp3"],
	Fiesta: ["S4", "S6", "S10", "Sp3", "Dp3"],
},
{
	title: "Big Beat", artist: "NOW",
	Fiesta2: ["S5", "S13", "S15", "D6", "D14", "Sp3", "Dp5"],
	FiestaEX: ["S5", "S13", "S15", "D6", "D14", "Sp3", "Dp5"],
	Fiesta: ["S5", "S13", "S15", "D6", "D14", "Sp3", "Dp5"],
},
{
	title: "Blaze Emotion", artist: "Yahpp", bpm: "170",
	Prime: ["S2", "S3", "S6", "S7", "S9", "S16", "S17", "D10", "D17", "D18"],
	Fiesta2: ["S2", "S3", "S6", "S7", "S9", "S16", "S17", "D10", "D17", "D18"],
	FiestaEX: ["S2", "S3", "S6", "S7", "S9", "S16", "S17", "D10", "D17", "D18"],
	Fiesta: ["S2", "S7", "S16", "S17", "D10", "D17", "D18"],
	NXA: ["2", "7", "17", "10", "18"], NXA_: ["", "", "17", "", "18"],
},
{
	title: "Blazing", artist: "BanYa", bpm: "158",
	Prime: ["S3", "S6", "S9", "S15", "D19"],
	Fiesta2: ["S3", "S6", "S9", "S15", "D19"],
	FiestaEX: ["S3", "S6", "S9", "S15", "D19"],
	Fiesta: ["S3", "S6", "S15", "D19"],
	NX: ["3", "6", "15", "6", "18"],
	Zero: ["3", "6", "15", "6", "19"],
	Exceed2: ["3", "6", "14", "6", "19"],
},
{
	title: "Born to be Alive", artist: "P. Hernandez & B. Thomas", channel: WORLD, bpm: "124",
	Exceed2: ["2", "5", "9", "5", "12"],
},
{
	title: "Breakin' Love", artist: "Yoo Seung Jun", channel: KPOP,
	Fiesta2: ["S6", "S12", "D14", "Sp2", "Dp4"],
	FiestaEX: ["S6", "S12", "D14", "Sp2", "Dp4"],
	Fiesta: ["S6", "S12", "D14", "Sp2", "Dp4"],
	NXA: ["2", "6", "14", "4", "6"]
},
{
	title: "Bullfighter's Song", artist: "BanYa Production", bpm: "168",
	Prime: ["S4", "S5", "S8(9)", "S16", "D9", "D17", "D21"],
	Fiesta2: ["S4", "S5", "S8(9)", "S16", "D9", "D17", "D21"],
	FiestaEX: ["S4", "S5", "S8(9)", "S16", "D9", "D17", "D21"],
	Fiesta: ["S5", "S8(9)", "S16", "D9", "D17", "D21"],
	NX2: ["4", "8(9)", "16", "6", "20"],
	NX: ["4", "8(9)", "15", "6", "19"],
},
{
	title: "Bust Back", artist: "DVS", channel: WORLD, bpm: "94",
	NX: ["3", "6", "12", "5", "13"],
},
{
	title: "Butterfly", artist: "MAX & Rorychesell (SID-SOUND)", channel: ORIGINAL, bpm: "128",
	Prime: ["S3", "S6", "S8", "S13", "S16", "D7", "D17", "Sp2", "Dp3"],
	Fiesta2: ["S3", "S6", "S8", "S13", "S16", "D7", "D17", "Sp2", "Dp3"],
	FiestaEX: ["S3", "S6", "S8", "S13", "S16", "D7", "D17", "Sp2", "Dp3"],
},
{
	title: "By Chance", artist: "Baby V.O.X.",
	Fiesta2: ["S2", "S4", "S5", "S15", "D6", "D16", "Sp2", "Dp4"],
	FiestaEX: ["S2", "S4", "S5", "S15", "D6", "D16", "Sp2", "Dp4"],
	Fiesta: ["S2", "S4", "S15", "D6", "D16", "Sp2", "Dp4"],
},
{
	title: "Can Can", artist: "F2 Systems", channel: ORIGINAL, bpm: "197",
	Exceed2: ["", "", "12", "", "14"],
},
{
	title: "Can't Nobody", artist: "2NE1", channel: KPOP, bpm: "130",
	Prime: ["S2", "S4", "S6", "S15", "D5", "D16", "Sp3", "Dp5"],
	Fiesta2: ["S2", "S4", "S6", "S15", "S17", "D5", "D16", "Sp3", "Dp5"],
	// - убрали чарт, реально?
},
{
	title: "Cannon X.1", artist: "Yahpp", bpm: "185",
	Prime: ["S3", "S7", "S10", "S20", "S21", "D13", "D22"],
	Fiesta2: ["S3", "S7", "S10", "S20", "S21", "D13", "D22"],
	FiestaEX: ["S3", "S7", "S10", "S20", "S21", "D13", "D22"],
	Fiesta: ["S3", "S10", "S20", "S21", "D13", "D22"],
	NXA: ["3", "10", "20", "13", "23"], NXA_: ["", "8", "21", "10", ""],
},
{
	title: "Canon-D", artist: "BanYa", bpm: "160",
	Prime: ["S3", "S7", "S9", "S20", "S21", "D10", "D22"],
	Fiesta2: ["S3", "S7", "S9", "S20", "S21", "D10", "D22"],
	FiestaEX: ["S3", "S7", "S9", "S20", "S21", "D10", "D22"],
	Fiesta: ["S3", "S7", "S20", "S21", "D10", "D22"],
	NXA: ["4", "6", "20", "10", "22"], NXA_: ["", "", "21", "", "21"],
	NX2: ["3", "5", "20", "9", "22"],
	NX: ["3", "5", "18", "9", "20"],
	Zero: ["2", "5", "20", "8", "21"],
	Exceed2: ["2", "6", "??(21)", "7", "??(22)"],
},
{
	title: "Caprice of Otada", artist: "BanYa Production", bpm: "160",
	Prime: ["S4", "S6", "S8", "S17", "D10", "D18", "D21(23)"],
	Fiesta2: ["S4", "S6", "S8", "S17", "D10", "D18"],
	FiestaEX: ["S4", "S6", "S8", "S17", "D10", "D18"],
	Fiesta: ["S4", "S8", "S17", "D10", "D18"],
	NXA: ["3", "8", "17", "10", "18"], NXA_: ["", "17", "19", "19(20)", "21(23)"],
	NX2: ["3", "8", "17", "9", "19"], NX2_: ["", "16", "19", "18(20)", "21(23)"],
},
{
	title: "Change Myself", artist: "Wang Lee Hom", channel: WORLD, bpm: "104",
	Fiesta2: ["S1", "S4", "S5", "S10", "D9", "Sp1", "Dp5"],
	FiestaEX: ["S1", "S4", "S5", "S10", "D9", "Sp1", "Dp5"],
	Fiesta: ["S1", "S4", "S5", "S10", "D9", "Sp1", "Dp5"],
	NXA: ["1", "5", "10", "5", "9"],
},
{
	title: "Chicken Wing", artist: "BanYa", bpm: "200",
	Prime: ["S4", "S6", "S9", "S10", "S17", "S19", "D11", "D17"],
	Fiesta2: ["S4", "S6", "S9", "S10", "S19", "D11", "D17"],
	FiestaEX: ["S4", "S6", "S9", "S10", "S19", "D11", "D17"],
	Fiesta: ["S10", "S19", "D11"],
	Exceed2: ["", "", "10", "", "11"],
},
{
	title: "Chimera", artist: "Yahpp", bpm: "210",
	Prime: ["S4", "S7", "S11", "S16", "S18", "S23", "D16", "D25", "Dp??(x2)"],
	Fiesta2: ["S4", "S7", "S11", "S16", "S18", "S23", "D16", "D25", "D??(x3)", "Dp??(x2)"],
	FiestaEX: ["S4", "S7", "S11", "S16", "S18", "S23", "D16", "D25", "D??(x3)", "Dp??(x2)"],
	Fiesta: ["S4", "S7", "S11", "S16", "S18", "S23", "D16", "D25", "D??(x3)", "Dp??(x2)"],
	NXA: ["7", "16", "23", "21", "??(25)"], NXA_: ["", "16", "19", "16", "??(24)"],
	NX2: ["8", "17", "23", "20", "??(25)"], NX2_: ["", "13", "20", "15", "??(24)"],
	NX: ["8", "15", "21", "19", "??(25)"],
},
{
	title: "Chinese restaurant", artist: "Memme", channel: ORIGINAL, bpm: "175",
	Prime: ["S4", "S7", "S10", "S16", "S18", "D10", "D20"],
},
{
	title: "Chocolate", artist: "Banana Girl", channel: KPOP, bpm: "130",
	Fiesta2: ["S5", "S6", "S9", "S13", "D9", "D15", "Sp2", "Dp3"],
	FiestaEX: ["S5", "S6", "S9", "S13", "D9", "D15", "Sp2", "Dp3"],
	Fiesta: ["S5", "S6", "S9", "S13", "D9", "D15", "Sp2", "Dp3"],
	NXA: ["2", "5", "9", "3", "9"], NXA_: ["", "6", "13", "", "15"],
},
{
	title: "Chopsticks Challenge", artist: "Yahpp", bpm: "128",
	Prime: ["S6", "S17", "D3", "D16", "Sp1"],
	Fiesta2: ["S6", "S17", "D3", "D16", "Sp1"],
	FiestaEX: ["S6", "S17", "D3", "D16", "Sp1"],
	Fiesta: ["S6", "S17", "D3", "D16", "Sp1"],
	NXA: ["3", "6", "17", "3", "16"],
},
{
	title: "Chopstix", artist: "Sonic Dimension", channel: WORLD, bpm: "134",
	Fiesta2: ["S5", "S13", "D15", "Sp2", "Dp2"],
	FiestaEX: ["S5", "S13", "D15", "Sp2", "Dp2"],
	Fiesta: ["S5", "S13", "D15", "Sp2", "Dp2"],
	NXA: ["2", "5", "13", "2", "15"],
	NX2: ["3", "5", "14", "2", "16"],
},
{
	title: "Chung Hwa Ban Jeom", artist: "Louis", channel: KPOP, bpm: "150",
	Prime: ["S6", "S14", "D16", "Sp1", "Dp2"],
	Fiesta2: ["S6", "S14", "D16", "Sp1", "Dp2"],
	FiestaEX: ["S6", "S14", "D16", "Sp1", "Dp2"],
	NX2: ["1", "5", "12", "3", "15"],
	NX: ["1", "5", "12", "3", "15"],
	Zero: ["2", "5", "13", "2", "16"],
},
{
	title: "Circus Magic", artist: "Crying Nut", channel: KPOP, bpm: "141",
	NX2: ["3", "8", "14", "9", ""],
	NX: ["3", "8", "14", "9", ""],
	Exceed2: ["4", "7", "9", "8", ""],
},
{
	title: "Clap Your Hands", artist: "Scoop feat. Joyce Lyle", channel: WORLD, bpm: "127",
	NX: ["3", "6", "10", "5", "14"],
	Zero: ["2", "5", "9", "5", "14"],
	Exceed2: ["2", "5", "9", "5", "14"],
},
{
	title: "Cleaner", artist: "Doin", channel: ORIGINAL, bpm: "203",
	Prime: ["S4", "S7", "S12", "S18", "S22", "S23", "D20", "D24", "D26"],
	Fiesta2: ["S4", "S7", "S12", "S18", "S22", "S23", "D20", "D24", "D26"],
	FiestaEX: ["S4", "S7", "S12", "S18", "S22", "S23", "D20", "D24", "D26"],
},
{
	title: "Close Your Eyes", artist: "BanYa",
	Fiesta2: ["S4", "Sp2", "Dp3"],
	FiestaEX: ["S4", "Sp2", "Dp3"],
	Fiesta: ["S4", "Sp2", "Dp3"],
},
{
	title: "Com'Back", artist: "Sechs Kies", channel: KPOP, bpm: "158",
	Prime: ["S4", "S6", "S8", "S15", "D7", "D16"],
	Fiesta2: ["S4", "S6", "S8", "S15", "D7", "D16"],
	FiestaEX: ["S4", "S6", "S8", "S15", "D7", "D16"],
	Fiesta: ["S4", "S6", "S15", "D7", "D8", "D16"],
	NXA: ["", "6", "15", "", "16"],
	NX2: ["", "6", "15", "", "16"],
	NX: ["", "6", "15", "", "15"],
	Zero: ["", "6", "14", "", "16"],
	Exceed2: ["", "6", "8", "", ""],
},
{
	title: "Come Back Home", artist: "Seo Taiji & Boys", channel: KPOP, bpm: "93",
	NXA: ["1", "4", "", "4", ""],
	NX2: ["1", "4", "", "4", ""],
},
{
	title: "Come Back To Me", artist: "Deux", channel: KPOP, bpm: "116",
	NXA: ["2", "5", "11", "6", "13"],
	NX2: ["2", "5", "11", "6", "13"],
	NX: ["2", "5", "11", "6", "13"],
	Exceed2: ["2", "5", "10", "6", "11"],
},
{
	title: "Come On!", artist: "Lee Jeong Hyun",
	Fiesta2: ["S2", "S4", "S5", "S12", "D9", "Dp4"],
	FiestaEX: ["S2", "S4", "S5", "S12", "D9", "Dp4"],
	Fiesta: ["S2", "S4", "S5", "S12", "D9", "Dp4"],
	NXA: ["2", "5", "12", "4", "9"],
},
{
	title: "Come to Me", artist: "Clon", channel: KPOP, bpm: "137",
	NX2_: ["", "12", "17", "", "14"],
	Zero: ["2", "5", "9", "5", "12"],
	Exceed2: ["2", "5", "9", "5", "12"],
},
{
	title: "Come to Me", artist: "BanYa", bpm: "100 ~ 107",
	Prime: ["S4", "S6", "S11", "S12", "S15", "D13", "D14", "Sp3", "Dp6"],
	Fiesta2: ["S4", "S6", "S11", "S12", "S15", "D13", "D14", "Sp3", "Dp6"],
	FiestaEX: ["S4", "S6", "S11", "S12", "S15", "D13", "D14", "Sp3", "Dp6"],
	Fiesta: ["S6", "S11", "S12", "S15", "D13", "D14", "Sp3", "Dp6"],
	NXA: ["3", "6", "11", "6", "13"],
	NX2: ["3", "6", "11", "6", "13"],
	NX: ["3", "6", "11", "6", "13"],
	Zero: ["3", "5", "10", "6", "12"],
	Exceed2: ["3", "8", "10", "6", "12"],
},
{
	title: "Compunction", artist: "May", channel: KPOP, bpm: "133",
	NXA: ["2", "6", "16", "4", "17"],
	NX2: ["2", "6", "16", "4", "17"],
},
{
	title: "Conga", artist: "Queen Latin", channel: WORLD, bpm: "124",
	NX: ["3", "6", "14", "8", "15"],
	Zero: ["4", "5", "12", "7", "15"],
	Exceed2: ["4", "5", "12", "7", "15"],
},
{
	title: "Cosmical Rhythm", artist: "SID-Sound", channel: WORLD, bpm: "128",
	Prime: ["S3", "S6", "S8", "S15", "D10", "D16"],
},
{
	title: "Crashday", artist: "Crash", channel: KPOP, bpm: "220",
	Prime: ["S4", "S6", "S11", "S17", "S23", "S24", "D17", "D26"],
	Fiesta2: ["S4", "S6", "S11", "S17", "S23", "S24", "D17", "D26"],
	FiestaEX: ["S4", "S6", "S11", "S17", "S23", "S24", "D17", "D26"],
},
{
	title: "Crayon", artist: "G-Dragon", channel: KPOP, bpm: "132",
	Prime: ["S4", "S6", "S8", "S17", "D5", "D17"],
	Fiesta2: ["S4", "S6", "S8", "S17", "D5", "D17"],
},
{
	title: "Crazy", artist: "Gyfted", channel: KPOP, bpm: "108",
	NXA: ["2", "6", "15", "6", "19"],
	Fiesta2: ["S2", "S4", "S5", "S8", "S15", "D19", "Sp2", "Dp3", "Dp6"],
	FiestaEX: ["S2", "S4", "S5", "S8", "S15", "D19", "Sp2", "Dp3", "Dp6"],
	Fiesta: ["S5", "S15", "D19", "Sp2", "Dp6"],
},
{
	title: "Csikos Post", artist: "BanYa", bpm: "180",
	Prime: ["S3", "S7", "S10", "S13", "D8", "D16"],
	Fiesta2: ["S3", "S7", "S10", "S13", "D8", "D16"],
	FiestaEX: ["S3", "S7", "S10", "S13", "D8", "D16"],
	Fiesta: ["S3", "S7", "S10", "S13", "D8", "D16"],
	NX: ["4", "7", "13", "8", "15"],
	Zero: ["3", "6", "12", "7", "14"],
	Exceed2: ["3", "6", "12", "7", "14"],
},
{
	title: "D", artist: "MAX", channel: ORIGINAL, bpm: "180",
	Prime: ["S4", "S7", "S9", "S18", "D11", "D18", "D19"],
	Fiesta2: ["S4", "S7", "S9", "S18", "D11", "D19"],
},
{
	title: "D Gang", artist: "BanYa", bpm: "150",
	Fiesta2: ["S4", "S6", "S9", "S18", "D7", "D15"],
	FiestaEX: ["S4", "S6", "S9", "S18", "D7", "D15"],
	Fiesta: ["S4", "S6", "S9", "S18", "D7", "D15"],
	Exceed2: ["4", "6", "9", "7", ""],
},
{
	title: "Dam", artist: "Ben Chalatit", channel: WORLD, bpm: "141",
	Prime: ["S1", "S3", "S5", "S8", "D4", "D9"],
	Fiesta2: ["S1", "S3", "S5", "S8", "D4", "D9"],
},
{
	title: "Dance All Night", artist: "Oscillator X", channel: WORLD, bpm: "140",
	Prime: ["S5", "S13", "D15", "Sp2"],
	Fiesta2: ["S5", "S13", "D15", "Sp2"],
	FiestaEX: ["S5", "S13", "D15", "Sp2"],
	Fiesta: ["S5", "S13", "D15", "Sp2"],
	NXA: ["2", "5", "13", "2", "15"],
	NX2: ["3", "6", "11", "6", "13"],
},
{
	title: "Dance Vibrations", artist: "Elpis", channel: WORLD, bpm: "130",
	Prime: ["S4", "S5", "S10", "S14", "D15", "D18", "Sp1", "Dp6"],
	Fiesta2: ["S4", "S5", "S10", "S14", "D15", "D18", "Sp1", "Dp6"],
	FiestaEX: ["S4", "S5", "S10", "S14", "D15", "D18", "Sp1", "Dp6"],
	Fiesta: ["S5", "S10", "S14", "D15", "D18", "Sp1", "Dp6"],
	NXA: ["1", "5", "10", "6", "15"],
	NX2: ["2", "6", "10", "6", "15"], NX2_: ["", "", "14", "", "18"],
},
{
	title: "Dance With Me", artist: "BanYa", bpm: "122",
	Prime: ["S2", "S4", "S6", "S12", "S14", "D15", "Sp4", "Dp4", "Dp6"],
	Fiesta2: ["S2", "S4", "S6", "S12", "S14", "D15", "Sp4", "Dp4", "Dp6"],
	FiestaEX: ["S2", "S4", "S6", "S12", "S14", "D15", "Sp4", "Dp4", "Dp6"],
	Fiesta: ["Sp4", "Dp6"],
},
{
	title: "Danza Kuduro", artist: "Don Omar & Ft. Lucenzo", channel: WORLD, bpm: "130",
	Prime: ["S4", "S7", "S9", "S15", "D10", "D16"],
	Fiesta2: ["S4", "S7", "S9", "S15", "D10", "D16"],
	// only spain
},
{
	title: "Dawn of the Apocalypse", artist: "Vassline", channel: KPOP, bpm: "???",
	Prime: ["S4", "S14", "S21", "D14", "D21"],
	Fiesta2: ["S4", "S14", "S21", "D14", "D21"],
	FiestaEX: ["S4", "S14", "S21", "D14", "D21"],
	Fiesta: ["S4", "S14", "S21", "D14", "D21"],
	NXA: ["4", "14", "21", "14", "21"],
	// NXA unlock
},
{
	title: "Deja Vu", artist: "SOM2", channel: KPOP, bpm: "115",
	Prime: ["S1", "S3", "S6", "S13", "D6", "D13"],
	Fiesta2: ["S1", "S3", "S6", "S13", "D6", "D13"],
	FiestaEX: ["S1", "S3", "S6", "S13", "D6", "D13"],
	Fiesta: ["S3", "S6", "S13", "D6", "D13"],
	NXA: ["3", "6", "13", "6", "13"],
	NX2: ["3", "5", "14", "6", "14"], NX2_: ["", "", "", "", "17"],
	NX: ["3", "5", "14", "6", "14"],
	Zero: ["3", "6", "13", "6", "14"],
	Exceed2: ["3", "6", "13", "6", "14"],
},
{
	title: "Destination", artist: "SHK", channel: ORIGINAL, bpm: "150",
	Prime: ["S4", "S7", "S11", "S16", "S18", "S19", "D13", "D20", "Dp5"],
	Fiesta2: ["S4", "S7", "S11", "S16", "S18", "S19", "D13", "D20", "Dp5"],
	FiestaEX: ["S4", "S7", "S11", "S16", "S18", "S19", "D13", "D20", "Dp5"],
	Fiesta: ["S4", "S7", "S11", "S16", "S18", "D13", "D20"],
},
{
	title: "Dieciseis", artist: "Nina Pilots", channel: WORLD, bpm: "143",
	Prime: ["S2", "S4", "S6", "S13", "D5", "D15"],
	Fiesta2: ["S2", "S4", "S6", "S13", "D5", "D15"],
	FiestaEX: ["S2", "S4", "S6", "S13", "D5", "D15"],
	Fiesta: ["S2", "S4", "S6", "S13", "D5", "D15"],
},
{
	title: "Digan Lo Que Digan", artist: "Nina Pilots", channel: WORLD, bpm: "162",
	Prime: ["S3", "S4", "S6", "S7", "S9", "S16", "D13", "D18", "Dp8"],
	Fiesta2: ["S3", "S4", "S6", "S7", "S9", "S16", "D13", "D18", "Dp8"],
	FiestaEX: ["S3", "S4", "S6", "S7", "S9", "S16", "D13", "D18", "Dp8"],
	Fiesta: ["S3", "S6", "S16", "D13", "D18", "Dp8"],
	NXA: ["3", "6", "16", "8", "13"],
},
{
	title: "Dignity", artist: "Crash", channel: KPOP, bpm: "195",
	Prime: ["S3", "S5", "S12", "S16", "S20", "S22", "D13", "D18", "D23"],
	Fiesta2: ["S3", "S5", "S12", "S16", "S20", "D13", "D18", "D23"],
	FiestaEX: ["S3", "S5", "S12", "S16", "S20", "D13", "D18", "D23"],
	Fiesta: ["S3", "S5", "S12", "S16", "S20", "D13", "D23"],
	NXA: ["5", "12", "20", "13", "23"], NXA_: ["", "16", "", "", ""],
	NX2: ["4", "11", "20", "15", "23"],
	NX: ["4", "12", "19", "15", "22"],
	Zero: ["5", "9", "20", "12", "22"],
	Exceed2: ["5", "9", "20", "12", "22"],
},
{
	title: "DJ Otada", artist: "BanYa Production", bpm: "180",
	Prime: ["S4", "S6", "S8", "S19", "D14", "D22"],
	Fiesta2: ["S4", "S6", "S8", "S19", "D14", "D22"],
	FiestaEX: ["S4", "S6", "S8", "S19", "D14", "D22"],
	Fiesta: ["S4", "S8", "S19", "D14", "D22"],
	NXA: ["4", "8", "19", "14", "22"], NXA_: ["", "", "20", "", "21"],
},
{
	title: "Do It Yourself", artist: "Lazy Bone", channel: KPOP, bpm: "106",
	NX2: ["", "6", "13", "7", "14"], NX2_: ["", "", "", "", "17"],
	NX: ["", "6", "13", "7", "14"],
	Zero: ["", "6", "13", "7", "14"],
},
{
	title: "Do It -Reggae Style-", artist: "BanYa Production",
	Fiesta2: ["S13", "D15", "Sp4", "Dp5"],
	FiestaEX: ["S13", "D15", "Sp4", "Dp5"],
	Fiesta: ["S13", "D15", "Sp4", "Dp5"],
},
{
	title: "Do It!", artist: "House Rulez", channel: KPOP, bpm: "129",
	Fiesta2: ["S6", "S15", "D18", "Sp2", "Dp4"],
	FiestaEX: ["S6", "S15", "D18", "Sp2", "Dp4"],
	Fiesta: ["S6", "S15", "D18", "Sp2", "Dp4"],
	NXA: ["2", "6", "15", "5", "18"],
},
{
	title: "Do You Know That ~old school", artist: "BanYa Production", bpm: "120",
	Prime: ["S4", "S6", "S14", "D18", "Dp8"],
	Fiesta2: ["S4", "S6", "S14", "D18", "Dp8"],
	FiestaEX: ["S4", "S6", "S14", "D18", "Dp8"],
	NX2: ["3", "4", "15", "7", "18"],
	NX: ["3", "4", "15", "7", "17"],
},
{
	title: "Don't Bother Me", artist: "Tashannie", channel: KPOP, bpm: "110",
	Prime: ["S4", "S5", "S10", "D5", "D13", "Sp2"],
	Fiesta2: ["S4", "S5", "S10", "D5", "D13", "Sp2"],
	FiestaEX: ["S4", "S5", "S10", "D5", "D13", "Sp2"],
	Fiesta: ["S4", "S5", "S10", "D5", "Sp2"],
	NXA: ["2", "6", "10", "6", ""],
	NX2: ["3", "6", "12", "6", ""],
	NX: ["3", "6", "12", "6", ""],
	Zero: ["1", "7", "10", "5", ""],
	Exceed2: ["1", "7", "10", "5", ""],
},
{
	title: "Dr. M", artist: "BanYa", bpm: "145",
	Prime: ["S3", "S7", "S9", "S12", "S16", "D11", "D16"],
	Fiesta2: ["S3", "S7", "S9", "S12", "S16", "D11", "D16"],
	FiestaEX: ["S3", "S7", "S9", "S12", "S16", "D11", "D16"],
	Fiesta: ["S3", "S7", "S12", "S16", "D11", "D16"],
	NXA: ["4", "7", "12", "11", "15"], NXA_: ["", "", "16", "", ""],
	NX2_: ["", "", "16", "", ""],
	NX: ["3", "7", "11", "9", "15"],
	Zero: ["2", "6", "12", "8", "16"],
	Exceed2: ["2", "6", "12", "8", "16"],
},
{
	title: "Dream To Nightmare", artist: "Nightmare", channel: WORLD, bpm: "178",
	Prime: ["S19", "S21", "D22", "D24"],
	Fiesta2: ["S19", "S21", "S23", "D22", "D24"],
},
{
	title: "Drunken in Melody", artist: "Eun Ji Won", bpm: "94",
	NXA: ["3", "5", "", "5", ""],
	NX2: ["2", "5", "", "5", ""],
	NX: ["2", "5", "", "5", ""],
	Zero: ["3", "6", "", "5", ""],
	Exceed2: ["3", "6", "10", "5", "11"],
},
{
	title: "Electric", artist: "The DNC", channel: WORLD, bpm: "120",
	Prime: ["S2", "S4", "S6", "S14", "D4", "D16"],
	Fiesta2: ["S2", "S4", "S6", "S14", "D4", "D16"],
},
{
	title: "Elise", artist: "DM Ashura", channel: ORIGINAL, bpm: "162",
	Prime: ["S4", "S7", "S10", "S17", "S19", "S22", "D13", "D16", "D23", "Dp??(x2)"],
	Fiesta2: ["S4", "S7", "S10", "S17", "S19", "D13", "D16", "Dp??(x2)"],
},
{
	title: "Elvis", artist: "AOA", channel: KPOP, bpm: "135",
	Prime: ["S2", "S4", "S7", "S15", "D5", "D16"],
},
{
	title: "Emergency", artist: "Drunken Tiger", channel: KPOP, bpm: "110",
	NX2: ["2", "5", "12", "5", "14"],
	NX: ["2", "5", "12", "5", "14"],
	Zero: ["3", "4", "12", "6", "15"],
},
{
	title: "Emperor", artist: "BanYa", bpm: "150",
	Prime: ["S2", "S5", "S8", "S11", "S16", "D17", "Sp3", "Dp3"],
	Fiesta2: ["S2", "S5", "S8", "S11", "S16", "D17", "Sp3", "Dp3"],
	FiestaEX: ["S2", "S5", "S8", "S11", "S16", "D17", "Sp3", "Dp3"],
	Fiesta: ["S5", "S11", "S16", "D17"],
},
{
	title: "Empire of the sun", artist: "Novasonic", bpm: "118",
	Fiesta2: ["S6", "S11", "D13", "Sp1", "Dp4"],
	FiestaEX: ["S6", "S11", "D13", "Sp1", "Dp4"],
	Fiesta: ["S6", "S11", "D13", "Sp1", "Dp4"],
	Zero: ["1", "6", "11", "4", "13"],
	Exceed2: ["1", "6", "11", "4", "13"],
},
{
	title: "Energizer", artist: "ZiGZaG", channel: WORLD, bpm: "151",
	Prime: ["S4", "S7", "S9", "S16", "D11", "D17", "Sp2"],
	Fiesta2: ["S4", "S7", "S9", "S16", "D11", "D17", "Sp2"],
	FiestaEX: ["S4", "S7", "S9", "S16", "D11", "D17", "Sp2"],
	Fiesta: ["S9", "S16", "D11", "D17", "Sp2"],
	NXA: ["2", "9", "16", "11", "17"],
	NX2: ["3", "9", "16", "10", "17"],
},
{
	title: "Energy",
	Fiesta2: ["S4", "S8", "S13", "S15", "D9", "D14", "Sp4", "Dp5"],
	FiestaEX: ["S4", "S8", "S13", "S15", "D9", "D14", "Sp4", "Dp5"],
},
{
	title: "Enjoy! Enjoy!", artist: "Mudagang",
	Fiesta2: ["S3", "S6", "S11", "S14", "D7", "D14", "Sp4", "Dp5"],
	FiestaEX: ["S3", "S6", "S11", "S14", "D7", "D14", "Sp4", "Dp5"],
	Fiesta: ["S3", "S4", "S6", "S11", "S14", "D7", "D14", "Sp4", "Dp5"],
	// Fiesta S4 gone after 1.10
},
{
	title: "Enter the Dragon", artist: "JTL", channel: KPOP, bpm: "110",
	Fiesta2: ["S1", "S4", "S5", "S8", "S14", "D17", "Sp2", "Dp5"],
	FiestaEX: ["S1", "S4", "S5", "S8", "S14", "D17", "Sp2", "Dp5"],
	Fiesta: ["S1", "S4", "S5", "S14", "D17", "Sp2", "Dp5"],
	NXA: ["2", "5", "14", "5", "17"],
	NX2: ["2", "5", "14", "5", "17"],
	NX: ["2", "5", "14", "5", "16"],
	Zero: ["3", "4", "14", "5", "17"],
},
{
	title: "Eres Para Mi", artist: "Mozquito", channel: WORLD, bpm: "128",
	NX: ["2", "5", "13", "8", ""],
	Zero: ["2", "5", "11", "7", ""],
	Exceed2: ["2", "5", "11", "7", ""],
},
{
	title: "Essa Maneira", artist: "Kaoma", channel: WORLD, bpm: "150",
	NX2: ["3", "7", "13", "9", "14"],
	NX: ["3", "7", "13", "9", "14"],
	Zero: ["2", "6", "12", "7", "13"],
	Exceed2: ["2", "6", "9", "7", "12"],
},
{
	title: "Eternity", artist: "Uhm Jung Hwa", channel: KPOP, bpm: "120",
	Zero: ["1", "5", "9", "5", "12"],
	Exceed2: ["1", "5", "9", "5", "12"],
},
{
	title: "Everybody", artist: "Carlos T. Quila", channel: WORLD, bpm: "110",
	Exceed2: ["1", "6", "8", "", ""],
},
{
	title: "Exciting", artist: "Dynamic Duo",
	Fiesta2: ["S2", "S3", "S14", "D14", "Sp5"],
	FiestaEX: ["S2", "S3", "S14", "D14", "Sp5"],
	Fiesta: ["S2", "S3", "S14", "D14", "Sp5"],
},
{
	title: "Extravaganza", artist: "BanYa", bpm: "195",
	Prime: ["S4", "S7", "S9", "S11", "S16", "S21", "D12", "D17", "D19"],
	Fiesta2: ["S4", "S7", "S9", "S11", "S16", "S21", "D12", "D17", "D19"],
	FiestaEX: ["S4", "S7", "S9", "S11", "S16", "S21", "D12", "D17", "D19"],
	Fiesta: ["S9", "S11", "S16", "S21", "D12", "D17", "D19"],
	NXA: ["", "10", "11", "12", "17"], NXA_: ["", "16", "21", "", "19"],
	NX2: ["", "10", "12", "13", "18"], NX2_: ["", "", "21", "", "19"],
	NX: ["", "10", "12", "13", "17"],
	Zero: ["", "8", "11", "9", "17"],
	Exceed2: ["", "7", "11", "7", "18"],
},
{
	title: "Fantastic Baby", artist: "Bigbang", channel: KPOP, bpm: "130",
	Prime: ["S3", "S5", "S8", "S14", "D5", "D17", "Sp1", "Dp5"],
	Fiesta2: ["S3", "S5", "S8", "S14", "D5", "D17", "Sp1", "Dp5"],
},
{
	title: "Faster Z", artist: "Yahpp", bpm: "162",
	Prime: ["S4", "S6", "S8", "S12", "S16", "S19", "S20", "D14", "D20", "D23"],
	Fiesta2: ["S4", "S6", "S8", "S12", "S16", "S19", "S20", "D14", "D20", "D23"],
	FiestaEX: ["S4", "S6", "S8", "S12", "S16", "S19", "S20", "D14", "D20", "D23"],
	Fiesta: ["S4", "S8", "S12", "S16", "S19", "S20", "D14", "D20"],
	NXA: ["4", "12", "19", "14", "20"], NXA_: ["8", "16", "19", "18", "22"],
	NX2: ["4", "11", "20", "15", "??(24)"], NX2_: ["", "15", "19", "19", "20"],
},
{
	title: "Feel the Soul", artist: "Seo Taiji", channel: KPOP, bpm: "93.54",
	NXA: ["2", "7", "17", "4", "18"],
	NX2: ["3", "9", "18", "4", "20"],
},
{
	title: "Flew Far Faster / FFF", artist: "Doin", channel: ORIGINAL, bpm: "200",
	Prime: ["S10", "S17", "S23", "D12", "D22", "Dp??(x3)"],
	Fiesta2: ["S10", "S17", "S23", "D12", "D22", "Dp??(x3)"],
},
{
	title: "Fiesta", artist: "El Cuba", channel: WORLD, bpm: "140",
	NX: ["4", "7", "11", "6", "13"],
	Zero: ["2", "7", "8", "5", "10"],
	Exceed2: ["2", "7", "8", "5", "10"],
},
{
	title: "Fiesta Macarena Pt. 1", artist: "DJ Paula", channel: WORLD, bpm: "131",
	Exceed2: ["2", "5", "8", "6", ""],
},
{
	title: "Fighting Spirit", artist: "H.O.T.", channel: KPOP, bpm: "98",
	NX: ["2", "", "", "5", ""],
	Zero: ["2", "", "", "5", ""],
	Exceed2: ["2", "", "", "5", ""],
},
{
	title: "Final Audition", artist: "BanYa", bpm: "130",
	Prime: ["S2", "S6", "S7", "S9", "S15", "S17", "D15", "D17", "Dp3"],
	Fiesta2: ["S2", "S6", "S7", "S9", "S15", "S17", "D15", "D17", "Dp3"],
	FiestaEX: ["S2", "S6", "S7", "S9", "S15", "S17", "D15", "D17", "Dp3"],
	Fiesta: ["S7", "S15", "S17", "D15", "D17", "Dp3"],
	NXA: ["3", "7", "17", "3", "17"], NXA_: ["", "", "15", "", "16"],
	NX2: ["3", "7", "15", "3", "16"], NX2_: ["", "", "17", "", "16"],
	NX: ["3", "7", "15", "3", "15"],
	Zero: ["2", "7", "15", "3", "17"],
	Exceed2: ["2", "7", "14", "3", "17"],
},
{
	title: "Final Audition 2", artist: "BanYa", bpm: "130",
	Prime: ["S4", "S7", "S8", "S10", "S16", "D8", "D17", "D19", "Dp3"],
	Fiesta2: ["S4", "S7", "S8", "S10", "S16", "D8", "D17", "D19", "Dp3"],
	FiestaEX: ["S4", "S7", "S8", "S10", "S16", "D8", "D17", "D19", "Dp3"],
	Fiesta: ["S8", "S10", "S16", "D8", "D17", "D19"],
	NXA: ["", "8", "10", "8", "17"], NXA_: ["", "", "16", "", "19"],
	NX2: ["", "8", "10", "8", "17"], NX2_: ["", "", "16", "", "19"],
	NX: ["", "8", "10", "8", "16"],
	Zero: ["", "7", "9", "7", "16"],
	Exceed2: ["", "7", "9", "7", "17"],
},
{
	title: "Final Audition 3 U.F", artist: "BanYa", bpm: "130",
	Prime: ["S2", "S5", "S6", "S9", "S14", "D17", "D19", "Sp3", "Dp5"],
	Fiesta2: ["S2", "S5", "S6", "S9", "S14", "D17", "D19", "Sp3", "Dp5"],
	FiestaEX: ["S2", "S5", "S6", "S9", "S14", "D17", "D19", "Sp3", "Dp5"],
	Fiesta: ["S6", "S14", "D17", "D19", "Sp3", "Dp5"],
	NXA: ["3", "6", "14", "5", "17"], NXA_: ["", "", "", "", "19"],
	NX2: ["3", "6", "14", "5", "17"], NX2_: ["", "", "", "", "18"],
	NX: ["3", "6", "14", "5", "16"],
	Zero: ["3", "5", "13", "4", "16"],
	Exceed2: ["3", "5", "13", "4", "15"],
},
{
	title: "Final Audition episode 1", artist: "BanYa", bpm: "189",
	Prime: ["S4", "S7", "S8", "S13", "S15", "S19", "D11", "D21", "D23"],
	Fiesta2: ["S4", "S7", "S8", "S13", "S15", "S19", "D11", "D21", "D23"],
	FiestaEX: ["S4", "S7", "S8", "S13", "S15", "S19", "D11", "D21", "D23"],
	Fiesta: ["S8", "S13", "S15", "S19", "D11", "D21", "D23"],
	NXA: ["", "8", "15", "11", "21"], NXA_: ["", "13", "19", "", "23"],
	NX2: ["", "8", "15", "11", "21"], NX2_: ["", "10", "19", "", "22"],
	NX: ["", "8", "15", "11", "20"],
	Zero: ["", "7", "15", "8", "21"],
	Exceed2: ["", "7", "15", "8", "21"],
},
{
	title: "Final Audition episode 2-1", artist: "Yahpp", bpm: "170",
	Prime: ["S3", "S4", "S7", "S18", "S20", "S21", "D9", "D21", "D22"],
	Fiesta2: ["S3", "S4", "S7", "S18", "S20", "S21", "D9", "D21", "D22"],
	FiestaEX: ["S3", "S4", "S7", "S18", "S20", "S21", "D9", "D21", "D22"],
	Fiesta: ["S3", "S4", "S7", "S18", "S20", "S21", "D9", "D21", "D22"],
	NXA: ["3", "7", "20", "9", "22"], NXA_: ["", "19", "21", "", "22"],
	NX2: ["3", "7", "20", "9", "22"], NX2_: ["", "", "20", "", "22"],
	NX: ["3", "7", "19", "9", "21"],
},
{
	title: "Final Audition episode 2-2", artist: "Yahpp", bpm: "200",
	Prime: ["S7", "S16", "S17", "S21", "S22", "D18", "D23", "D24"],
	Fiesta2: ["S7", "S16", "S17", "S21", "S22", "D18", "D23", "D24"],
	FiestaEX: ["S7", "S16", "S17", "S21", "S22", "D18", "D23", "D24"],
	Fiesta: ["S7", "S16", "S17", "S21", "S22", "D18", "D23", "D24"],
	NXA: ["7", "16", "22", "18", "24"], NXA_: ["", "16", "21", "18", "23"],
	NX2: ["7", "16", "22", "18", "24"], NX2_: ["", "16", "21", "18", "25"],
	NX: ["7", "15", "20", "17", "??(24)"],
	notes: ["arcade unlock on NX, play 2-1 200 times"],
},
{
	title: "Final Audition episode 2-X", artist: "Yahpp", bpm: "170",
	Prime: ["S3", "S5", "S8", "S17", "S23", "D21", "D24", "Dp2"],
	Fiesta2: ["S3", "S5", "S8", "S17", "S23", "D21", "D24", "Dp2"],
	FiestaEX: ["S3", "S5", "S8", "S17", "S23", "D21", "D24", "Dp2"],
	Fiesta: ["S8", "S17", "S23", "D21", "D24"],
	NXA: ["8", "17", "??(24)", "21", "??(25)"],
},
{
	title: "Fire", artist: "2NE1",
	Fiesta2: ["S3", "S5", "S8", "S15", "S16", "D4", "D11", "D14", "Sp3", "Dp4"],
	FiestaEX: ["S3", "S5", "S8", "S15", "S16", "D4", "D11", "D14", "Sp3", "Dp4"],
	Fiesta: ["S3", "S5", "S8", "S15", "S16", "D4", "D11", "Sp3", "Dp4"],
},
{
	title: "Fire", artist: "Yahpp", bpm: "133",
	NX2_: ["", "12", "15", "13", "15"],
	NX: ["", "", "", "", ""],
	Exceed2: ["", "", "", "", ""],
},
{
	title: "First Love", artist: "BanYa", bpm: "104",
	Fiesta2: ["S4", "S9", "D14", "Sp1", "Dp4"],
	FiestaEX: ["S4", "S9", "D14", "Sp1", "Dp4"],
	Fiesta: ["S4", "S9", "D14", "Sp1", "Dp4"],
	Exceed2: ["1", "4", "9", "4", ""],
},
{
	title: "Flamenco", artist: "Oliver", channel: KPOP, bpm: "105",
	Exceed2: ["2", "5", "9", "5", "11"],
},
{
	title: "Fly", artist: "Epik High", channel: KPOP, bpm: "128",
	Fiesta2: ["S1", "S3", "S6", "S14", "D16", "Sp3", "Dp4"],
	FiestaEX: ["S1", "S3", "S6", "S14", "D16", "Sp3", "Dp4"],
	Fiesta: ["S1", "S3", "S6", "S14", "D16", "Sp3", "Dp4"],
	NX2: ["3", "5", "14", "4", "16"],
	NX: ["3", "5", "14", "4", "15"],
},
{
	title: "Flying duck", artist: "Cherry Filter", channel: KPOP, bpm: "158",
	Prime: ["S3", "S7", "S10", "S16", "D11", "D18"],
},
{
	title: "Follow Me", artist: "SHK", channel: ORIGINAL, bpm: "155",
	Prime: ["S4", "S6", "S9", "S14", "S17", "D9", "D18", "Dp??(x2)"],
},
{
	title: "Footprints", artist: "T.O", channel: KPOP, bpm: "135",
	NX2: ["", "5", "11", "5", "11"],
	NX: ["", "5", "11", "5", "11"],
	Zero: ["", "5", "12", "5", "13"],
},
{
	title: "For You", artist: "N.EX.T", channel: KPOP, bpm: "160",
	NX2: ["1", "5", "14", "2", "20"], NX2_: ["", "", "", "13", ""],
	NX: ["1", "5", "14", "5", "19"],
},
{
	title: "Forever Love", artist: "Fin.K.L", channel: KPOP, bpm: "138",
	NXA: ["1", "", "", "", "13"],
	NX2: ["1", "", "", "", "13"],
	NX: ["1", "", "", "", "13"],
	Zero: ["1", "", "", "", "11"],
	Exceed2: ["1", "", "", "", ""],
},
{
	title: "Forward", artist: "DJ Missill", channel: KPOP, bpm: "97",
	Fiesta2: ["S2", "S4", "S5", "S13", "D13", "Sp2", "Dp5"],
	FiestaEX: ["S2", "S4", "S5", "S13", "D13", "Sp2", "Dp5"],
	Fiesta: ["S4", "S5", "S13", "D13", "Sp2", "Dp5"],
	NXA: ["2", "5", "13", "5", "13"],
},
{
	title: "Foxy Lady", artist: "Harisu", channel: KPOP, bpm: "130",
	NX: ["3", "5", "12", "5", "13"],
	Zero: ["3", "6", "13", "5", "15"],
	Exceed2: ["3", "6", "13", "5", "15"],
},
{
	title: "Free Style", artist: "BanYa", bpm: "99",
	Fiesta2: ["S13", "D15", "Sp1", "Dp3"],
	FiestaEX: ["S13", "D15", "Sp1", "Dp3"],
	Fiesta: ["D15", "Sp1", "Dp3"],
	Zero: ["1", "", "", "3", ""],
},
{
	title: "Free!", artist: "Jiny", channel: KPOP, bpm: "175",
	NX2: ["4", "7", "15", "8", "18"], NX2_: ["", "", "", "5", ""],
	NX: ["4", "7", "15", "8", "17"],
},
{
	title: "Funky Tonight", artist: "Clon", channel: KPOP, bpm: "105",
	Prime: ["S2", "S4", "S5", "S12", "D4", "D14"],
	Fiesta2: ["S2", "S4", "S5", "S12", "D4", "D14"],
	FiestaEX: ["S2", "S4", "S5", "S12", "D4", "D14"],
	Fiesta: ["S2", "S4", "S5", "S12", "D4"],
	NXA: ["", "4", "12", "4", ""],
	NX2: ["", "4", "12", "4", ""],
	NX: ["", "4", "12", "4", ""],
	Zero: ["", "4", "11", "4", ""],
	Exceed2: ["", "4", "", "4", ""],
},
{
	title: "Gargoyle", artist: "Sanxion7", channel: WORLD, bpm: "150",
	Prime: ["S4", "S7", "S9", "S18", "S22", "D12", "D20", "D23", "Sp2"],
	Fiesta2: ["S4", "S7", "S9", "S18", "D12", "D20", "D23", "Sp2"],
	FiestaEX: ["S4", "S7", "S9", "S18", "D12", "D20", "D23", "Sp2"],
},
{
	title: "Get My Phone Call", artist: "Mina", channel: KPOP, bpm: "108",
	NXA: ["1", "5", "13", "5", "14"],
	NX2: ["1", "5", "13", "5", "14"],
},
{
	title: "Get Up!", artist: "BanYa", bpm: "180",
	Prime: ["S4", "S8", "S13", "D9", "D17", "D18"],
	Fiesta2: ["S4", "S8", "S13", "D9", "D18"],
	FiestaEX: ["S4", "S8", "S13", "D9", "D18"],
	Fiesta: ["S4", "S8", "S13", "D9", "D18"],
	NX2: ["4", "7", "15", "7", "18"],
	Exceed2: ["4", "7", "13", "7", "16"],
},
{
	title: "Get Up (and go)", artist: "BanYa Production", bpm: "164",
	Prime: ["S4", "S7", "S10", "S17", "D11", "D20", "Dp3"],
	Fiesta2: ["S4", "S7", "S10", "S17", "D11", "D20", "Dp3"],
	FiestaEX: ["S4", "S7", "S10", "S17", "D11", "D20", "Dp3"],
	Fiesta: ["S4", "S7", "S10", "S17", "D11", "D20"],
},
{
	title: "Get Your Groove On", artist: "BanYa", bpm: "96",
	Fiesta2: ["S4", "S6", "S13", "D9"],
	FiestaEX: ["S4", "S6", "S13", "D9"],
	Exceed2: ["1", "5", "7", "8", ""],
},
{
	title: "Go", artist: "U:Nee", channel: KPOP, bpm: "138",
	Fiesta2: ["S3", "S7", "S12", "D13", "Dp3"],
	FiestaEX: ["S3", "S7", "S12", "D13", "Dp3"],
	Fiesta: ["S3", "S7", "S12", "D13", "Dp3"],
	NXA: ["3", "7", "12", "3", "13"],
	NX2: ["3", "6", "12", "3", "13"],
	NX: ["3", "6", "12", "3", "13"],
	Zero: ["2", "6", "11", "6", "13"],
	Exceed2: ["2", "6", "11", "3", "13"],
},
{
	title: "Go Away", artist: "B.M.K.", channel: KPOP, bpm: "132",
	Zero: ["2", "6", "11", "5", "15"],
	Exceed2: ["2", "6", "11", "5", "15"],
},
{
	title: "Go Away!", artist: "To-Ya", channel: KPOP, bpm: "103",
	Exceed2: ["2", "4", "9", "6", ""],
},
{
	title: "Go Back", artist: "Dynamic Duo", channel: KPOP, bpm: "112",
	NX2: ["1", "4", "9", "4", "10"],
	NX: ["1", "4", "8", "4", "10"],
},
{
	title: "Good Life", artist: "Drunken Tiger",
	Fiesta2: ["S2", "S4", "S15", "D5", "D16", "Sp2", "Dp3"],
	FiestaEX: ["S2", "S4", "S15", "D5", "D16", "Sp2", "Dp3"],
	Fiesta: ["S2", "S4", "S15", "D5", "D16", "Sp2", "Dp3"],
},
{
	title: "Gotta Be Kidding!", artist: "Hanul", channel: KPOP, bpm: "138",
	Exceed2: ["1", "4", "13", "3", ""],
},
{
	title: "Greenhorn", artist: "Lexy", channel: KPOP, bpm: "109",
	NXA: ["2", "4", "13", "5", "13"],
	NX2: ["2", "4", "13", "5", "15"],
	NX: ["2", "4", "13", "5", "15"],
	Zero: ["1", "4", "13", "5", "15"],
	Exceed2: ["1", "4", "13", "5", "15"],
},
{
	title: "Groovin' Motion", artist: "Sonic Dimension", channel: WORLD, bpm: "130",
	Fiesta2: ["S6", "S9", "D11", "Sp3", "Dp6"],
	FiestaEX: ["S6", "S9", "D11", "Sp3", "Dp6"],
	Fiesta: ["S6", "S9", "D11", "Sp3", "Dp6"],
	NXA: ["3", "6", "9", "6", "11"],
	NX2: ["3", "6", "12", "6", "12"],
},
{
	title: "Guitar Man", artist: "BanYa Production", bpm: "120",
	Fiesta2: ["S3", "S9", "S13", "S18", "D10", "D13", "D19"],
	FiestaEX: ["S3", "S9", "S13", "S18", "D10", "D13", "D19"],
	NX2: ["3", "7", "12", "7", "13"], NX2_: ["", "", "17", "", "20"],
},
{
	title: "Gun Rock", artist: "BanYa Production", bpm: "104",
	Prime: ["S5", "S11", "S17", "S18", "D11", "D18", "D22"],
	Fiesta2: ["S5", "S11", "S17", "S18", "D11", "D18", "D22"],
	FiestaEX: ["S5", "S11", "S17", "S18", "D11", "D18", "D22"],
	NX2_: ["", "", "18", "", "19"],
	NX: ["2", "8", "17", "6", "21"],
},
{
	title: "Haley", artist: "Sam-I-Am", channel: WORLD, bpm: "112",
	Fiesta2: ["S4", "S9", "D11", "Sp2", "Dp4"],
	FiestaEX: ["S4", "S9", "D11", "Sp2", "Dp4"],
	Fiesta: ["S4", "S9", "D11", "Sp2", "Dp4"],
	NXA: ["2", "4", "9", "4", "11"],
	NX2: ["2", "4", "9", "4", "11"],
	NX: ["2", "4", "9", "4", "11"],
},
{
	title: "Hands Up (East 4A Mix)", bpm: "130",
	Fiesta2: ["S3", "S5", "S8", "S15", "D5", "D15", "Sp3", "Dp4"],
},
{
	title: "Handsome Character That Pass", artist: "May", channel: KPOP, bpm: "125",
	NX2: ["2", "4", "18", "3", "15"], NX2_: ["", "", "13", "", "14"],
	NX: ["1", "4", "17", "3", "15"],
},
{
	title: "Hardkore of the North", artist: "Diclonius Kid", channel: WORLD, bpm: "190",
	Prime: ["S4", "S7", "S11", "S21(22)", "D16", "D23"],
	Fiesta2: ["S4", "S7", "S11", "S21(22)", "D16"],
},
{
	title: "Hate", artist: "BanYa", bpm: "90",
	Zero: ["1", "3", "", "4", ""],
	Exceed2: ["1", "4", "", "3", ""],
},
{
	title: "Hate, Don't Hate!", artist: "Dal shabet", channel: KPOP, bpm: "123",
	Prime: ["S2", "S4", "S6", "S15", "D6", "D16"],
},
{
	title: "Hatred", artist: "Novasonic", bpm: "136",
	Fiesta2: ["S6", "S13", "D7", "D16", "Dp7"],
	FiestaEX: ["S6", "S13", "D7", "D16", "Dp7"],
	Fiesta: ["S6", "S13", "D7", "D16", "Dp7"],
	Zero: ["2", "7", "13", "7", "16"],
	Exceed2: ["2", "7", "13", "7", "16"],
},
{
	title: "Heart Breaker", artist: "G-Dragon", channel: KPOP, bpm: "135",
	Prime: ["S1", "S3", "S5", "S15", "D4", "D16", "Sp3", "Dp6"],
	Fiesta2: ["S1", "S3", "S5", "S15", "D4", "D16", "D18", "Sp3", "Dp6"],
	// Prime - where D18 go?
},
{
	title: "Heel and Toe", artist: "KURi-ZiLL", channel: WORLD, bpm: "185",
	Prime: ["S2", "S7", "S9", "S17", "D11", "Dp??(x2)"],
	Fiesta2: ["S2", "S7", "S9", "D11", "Dp??(x2)"],
},
{
	title: "Hello", artist: "BanYa", bpm: "140",
	Fiesta2: ["S7", "S16", "D9", "D16"],
	FiestaEX: ["S7", "S16", "D9", "D16"],
	Fiesta: ["S7", "S16", "D9", "D16"],
	Exceed2: ["2", "7", "13", "7", "16"],
},
{
	title: "Hello William", artist: "BanYa Production", bpm: "170",
	Prime: ["S4", "S6", "S9", "S17", "S19", "D9", "D21"],
	Fiesta2: ["S4", "S6", "S9", "S17", "S19", "D9", "D21"],
	FiestaEX: ["S4", "S6", "S9", "S17", "S19", "D9", "D21"],
	Fiesta: ["S4", "S6", "S9", "S17", "S19", "D9", "D21"],
},
{
	title: "HER", artist: "Block B", channel: KPOP, bpm: "162",
	Prime: ["S4", "S6", "S9", "S16", "D7", "D17", "Dp??(x2)"],
	notes: ["Dp?? unlock 1.02 on Prime"],
},
{
	title: "Hestia", artist: "Gentle Stick", channel: ORIGINAL, bpm: "150",
	Prime: ["S4", "S7", "S10", "S18(20)", "D11", "D20"],
	notes: ["unlock 1.01 on Prime"],
},
{
	title: "Hi-Bi", artist: "BanYa", bpm: "145",
	Prime: ["S3", "S5", "S8", "S15", "S18", "D8", "D18", "D20"],
	Fiesta2: ["S3", "S5", "S8", "S15", "S18", "D8", "D18", "D20"],
	FiestaEX: ["S3", "S5", "S8", "S15", "S18", "D8", "D18", "D20"],
	Fiesta: ["S3", "S8", "S15", "S18", "D8", "D18", "D20"],
	NXA: ["3", "8", "15", "8", "18"], NXA_: ["", "", "18", "7", "20"],
	NX2: ["4", "8", "14", "8", "18"], NX2_: ["", "", "17", "6", "18"],
	NX: ["4", "8", "14", "8", "17"],
	Zero: ["3", "8", "14", "8", "18"],
	Exceed2: ["3", "8", "14", "8", "18"],
},
{
	title: "Higgledy Piggledy", artist: "BanYa Production", bpm: "150",
	Prime: ["S2", "S6", "S9", "S14", "S16", "D8", "D15", "Sp1"],
	Fiesta2: ["S2", "S6", "S9", "S14", "D8", "D15", "Sp1"],
	FiestaEX: ["S2", "S6", "S9", "S14", "D8", "D15", "Sp1"],
	Fiesta: ["S2", "S6", "S14", "D8", "D15", "Sp1"],
	NXA: ["1", "6", "14", "8", "15"], NXA_: ["", "16", "18", "", ""],
	NX2: ["2", "7", "15", "8", "17"], NX2_: ["", "16", "18", "", ""],
},
{
	title: "Hold the Line", artist: "Cho PD & B.E.G.", channel: KPOP, bpm: "126",
	NX2: ["2", "4", "12", "4", "14"],
	NX: ["2", "4", "12", "4", "14"],
},
{
	title: "Hot", artist: "1Tym", channel: KPOP, bpm: "98",
	Prime: ["S2", "S4", "S6", "S10", "D12", "Dp4"],
	Fiesta2: ["S2", "S4", "S6", "S10", "D12", "Dp4"],
	FiestaEX: ["S2", "S4", "S6", "S10", "D12", "Dp4"],
	Fiesta: ["S2", "S4", "S6", "S10", "D12", "Dp4"],
	NXA: ["2", "5", "10", "4", "12"],
	NX2: ["2", "5", "11", "4", "12"],
	NX: ["2", "5", "11", "4", "12"],
	Zero: ["2", "5", "10", "4", "12"],
	Exceed2: ["2", "5", "10", "4", "12"],
},
{
	title: "Hot issue",
	Fiesta2: ["S3", "S7", "S10", "S16", "D5", "D13", "D15", "Sp4", "Dp5"],
	FiestaEX: ["S3", "S7", "S10", "S16", "D5", "D13", "D15", "Sp4", "Dp5"],
},
{
	title: "Hungarian Dance V", artist: "BanYa Production", bpm: "145",
	Prime: ["S4", "S6", "S8", "S17", "S18", "D9", "D17", "Sp2"],
	Fiesta2: ["S4", "S6", "S8", "S17", "S18", "D9", "D17", "Sp2"],
	FiestaEX: ["S4", "S6", "S8", "S17", "S18", "D9", "D17", "Sp2"],
},
{
	title: "Huu Yah Yeah", artist: "Y-Me", channel: KPOP, bpm: "110",
	NX: ["3", "6", "13", "6", "13"],
	Zero: ["3", "6", "12", "7", "14"],
	Exceed2: ["3", "6", "12", "7", "14"],
},
{
	title: "Hybs", artist: "DJ Dookie", channel: WORLD, bpm: "102",
	Fiesta2: ["S4", "S11", "D13", "Sp2", "Dp4"],
	FiestaEX: ["S4", "S11", "D13", "Sp2", "Dp4"],
	Fiesta: ["S4", "S11", "D13", "Sp2", "Dp4"],
	NXA: ["2", "4", "11", "4", "13"],
	NX2: ["2", "4", "11", "4", "13"],
	NX: ["2", "4", "11", "4", "13"],
},
{
	title: "Hypnosis", artist: "BanYa", bpm: "180",
	Prime: ["S7", "S15", "D8", "D15"],
	Exceed2: ["", "6", "12", "7", "15"],
	notes: ["unlock 1.01 on Prime"],
},
{
	title: "Hypnosis (SynthWulf Mix)", artist: "BanYa & SynthWulf", channel: ORIGINAL, bpm: "175",
	Prime: ["S8(9)", "S11", "S17", "S21", "D13", "D15", "D20"],
	Fiesta2: ["S8(9)", "S11", "S17", "S21", "D13", "D15", "D20"],
},
{
	title: "Hyun Jin Young Go Jin Young Go", artist: "Hyun Jin Young", channel: KPOP, bpm: "150",
	NX2: ["3", "6", "19", "6", "20"],
	NX: ["2", "6", "18", "6", "18"],
},
{
	title: "I Love You Baby", artist: "Pandera", channel: WORLD, bpm: "100",
	NX: ["3", "5", "11", "5", "13"],
	Zero: ["3", "5", "12", "5", "15"],
},
{
	title: "I'll Give You All My Love", artist: "Wax", channel: KPOP, bpm: "164",
	Prime: ["S2", "S4", "S7", "S16", "D7", "D18"],
	Fiesta2: ["S2", "S4", "S7", "S16", "D7", "D18"],
	FiestaEX: ["S2", "S4", "S7", "S16", "D7", "D18"],
	Fiesta: ["S4", "S7", "S16", "D7", "D18"],
	NXA: ["3", "7", "16", "7", "18"],
	NX2: ["3", "7", "16", "7", "18"],
	NX: ["3", "7", "15", "7", "17"],
	Zero: ["3", "7", "15", "8", "17"],
	Exceed2: ["3", "7", "16", "8", "18"],
},
{
	title: "I'm Sorry", artist: "CNBLUE", channel: KPOP, bpm: "131",
	Prime: ["S4", "S6", "S9", "S16", "D8", "D17"],
},
{
	title: "I'm The Best", artist: "2NE1", channel: KPOP, bpm: "128",
	Prime: ["S2", "S4", "S6", "S15", "D5", "D13", "Sp3", "Dp4"],
	Fiesta2: ["S2", "S4", "S6", "S15", "D5", "D13", "Sp3", "Dp4"],
},
{
	title: "I'm Your Girl", artist: "S.E.S", channel: KPOP, bpm: "102",
	Fiesta2: ["S1", "S3", "S5", "S12", "D10", "Sp2", "Dp6"],
	FiestaEX: ["S1", "S3", "S5", "S12", "D10", "Sp2", "Dp6"],
	Fiesta: ["S1", "S3", "S5", "S12", "D10", "Sp2", "Dp6"],
	NXA: ["2", "5", "12", "6", "10"],
},
{
	title: "Ignis Fatuus (DM Ashura Mix)", artist: "BanYa & DM Ashura", channel: ORIGINAL, bpm: "220",
	Prime: ["S9", "S15", "S19", "S23", "D15", "D17", "D19", "D23", "D25", "Dp??(x2)"],
	Fiesta2: ["S9", "S15", "S19", "S23", "D15", "D17", "D19", "D23", "D24", "D25", "D26", "Dp??(x2)"],
	// D26 убрали?
},
{
	title: "Ignition Starts!", artist: "BanYa", bpm: "146",
	Prime: ["S8", "S15", "D10"],
	Exceed2: ["", "6", "12", "7", ""],
	notes: ["unlock 1.01 on Prime"],
},
{
	title: "In Your Fantasy", artist: "Taiji Boys",
	Fiesta2: ["S2", "S4", "S6", "S14", "D7", "D16", "Dp3"],
	FiestaEX: ["S2", "S4", "S6", "S14", "D7", "D16", "Dp3"],
	Fiesta: ["S2", "S4", "S6", "S14", "D7", "D16", "Dp3"],
},
{
	title: "Ineffective Boss Without Power", artist: "Norazo", channel: KPOP, bpm: "170",
	Prime: ["S4", "S6", "S8", "S18", "D5", "D19", "Dp??(x3)"],
	notes: ["unlock 1.01 on Prime"],
},
{
	title: "Innocent", artist: "Koyote",
	Fiesta2: ["S3", "S5", "S11", "S14", "D6", "D15"],
	FiestaEX: ["S3", "S5", "S11", "S14", "D6", "D15"],
	Fiesta: ["S3", "S5", "S11", "D6", "D15"],
},
{
	title: "Interference", artist: "Doin", channel: ORIGINAL, bpm: "180.4",
	Prime: ["S11", "S18", "D12", "D19", "D21", "Sp2", "Dp3"],
	// D21 - unlock
	Fiesta2: ["S11", "S18", "D12", "D19", "Sp2", "Dp3"],
	FiestaEX: ["S11", "S18", "D12", "D19", "Sp2", "Dp3"],
},
{
	title: "It's My Business", artist: "Seo Taiji & Boys", channel: KPOP, bpm: "200",
	NXA: ["3", "11", "20", "13", "21"], NXA_: ["", "", "14", "", "17"],
	NX2: ["3", "10", "20", "13", "21"], NX2_: ["", "", "10", "", "14"],
},
{
	title: "J Bong", artist: "BanYa", bpm: "140",
	Prime: ["S3", "S5", "S7", "S8", "S13", "D17", "Dp5"],
	Fiesta2: ["S3", "S5", "S7", "S8", "S13", "D17", "Dp5"],
	FiestaEX: ["S3", "S5", "S7", "S8", "S13", "D17", "Dp5"],
	Fiesta: ["S5", "S7", "S13", "D17", "Dp5"],
	NX2: ["5", "7", "13", "5", "17"],
	Zero: ["5", "7", "13", "5", "19"],
	Exceed2: ["5", "7", "13", "5", "17"],
},
{
	title: "Jam o' Beat", artist: "BanYa Production", bpm: "120",
	Fiesta2: ["S7", "S14", "D14", "Sp2", "Dp6"],
	FiestaEX: ["S7", "S14", "D14", "Sp2", "Dp6"],
	Fiesta: ["S7", "S14", "D14", "Sp2", "Dp6"],
	NXA: ["2", "7", "14", "6", "14"],
	NX2: ["3", "7", "15", "6", "16"],
},
{
	title: "Join The Party", artist: "Gans", channel: WORLD, bpm: "131",
	NX: ["3", "6", "13", "5", "14"],
	Zero: ["2", "5", "11", "5", "13"],
	Exceed2: ["2", "5", "11", "5", "13"],
},
{
	title: "Jonathan's Dream", artist: "MAX & Seorryang (SID-SOUND)", channel: ORIGINAL, bpm: "140",
	Prime: ["S8", "S16", "D10", "D15"],
	// убрали D18?
	Fiesta2: ["S8", "S16", "D10", "D15", "D18"],
	FiestaEX: ["S8", "S16", "D10", "D15"],
},
{
	title: "Jump", artist: "BanYa", bpm: "96",
	Zero: ["3", "7", "9", "", ""],
},
{
	title: "K.O.A. -Alice in Wonderworld-", artist: "BanYa Production", bpm: "156",
	Prime: ["S2", "S3", "S5", "S8", "S17", "D10", "D18"],
	Fiesta2: ["S2", "S3", "S5", "S8", "S17", "D10", "D18"],
	FiestaEX: ["S2", "S3", "S5", "S8", "S17", "D10", "D18"],
	Fiesta: ["S3", "S5", "S8", "S17", "D10", "D18"],
	NXA: ["3", "8", "17", "9", "18"],
},
{
	title: "Karyawisata", artist: "Vesuvia x REDSHiFT", channel: WORLD, bpm: "173",
	Prime: ["S4", "S7", "S10", "S17", "S20", "D7", "D16"],
},
{
	title: "Kiss me", artist: "Debbie Scott", channel: WORLD, bpm: "126",
	NX: ["1", "5", "13", "6", "15"],
	Zero: ["1", "5", "12", "5", "14"],
	Exceed2: ["1", "5", "12", "5", "14"],
},
{
	title: "Koul", artist: "BanYa", bpm: "102",
	Exceed2: ["", "5", "10", "5", ""],
},
{
	title: "La Cubanita", artist: "Los ninos de sara", channel: WORLD, bpm: "120",
	NX2: ["4", "9", "13", "10", "16"],
	NX: ["4", "9", "13", "10", "15"],
	Zero: ["2", "6", "12", "7", "13"],
	Exceed2: ["2", "6", "12", "7", "13"],
},
{
	title: "La La La", artist: "Big Bang", channel: KPOP, bpm: "102",
	Fiesta2: ["S1", "S3", "S5", "S10", "D13", "Sp2", "Dp5"],
	FiestaEX: ["S1", "S3", "S5", "S10", "D13", "Sp2", "Dp5"],
	Fiesta: ["S3", "S5", "S10", "D13", "Sp2", "Dp5"],
	NXA: ["2", "5", "13", "5", "13"],
},
{
	title: "Ladybug", artist: "Coconut", channel: WORLD, bpm: "133",
	Prime: ["S1", "S3", "S5", "S13", "D13", "Dp??(x2)"],
	Fiesta2: ["S1", "S3", "S5", "S13", "D13", "Dp??(x2)"],
},
{
	title: "Last Farewell",
	Fiesta2: ["S2", "S5", "S8", "S13", "S17", "D6", "D14", "Sp3", "Dp5"],
	FiestaEX: ["S2", "S5", "S8", "S13", "S17", "D6", "D14", "Sp3", "Dp5"],
},
{
	title: "Latino Virus", artist: "Warak", channel: ORIGINAL, bpm: "170",
	Prime: ["S3", "S7", "S9", "S17", "D12", "D19", "Dp??(x2)"],
},
{
	title: "Lay It Down", artist: "Fresno", channel: WORLD, bpm: "131",
	Exceed2: ["3", "5", "8", "5", ""],
},
{
	title: "Lazenca, Save Us", artist: "N.EX.T", channel: KPOP, bpm: "85",
	NXA: ["3", "6", "", "5", ""],
	NX2: ["2", "5", "", "5", ""],
	NX: ["2", "5", "", "5", ""],
},
{
	title: "Le Code De Bonne Conduite", artist: "Manresa", channel: WORLD, bpm: "171",
	NX2: ["4", "5", "12", "8", "15"],
	NX: ["4", "5", "12", "8", "15"],
	Zero: ["4", "7", "10", "8", "15"],
	Exceed2: ["4", "7", "10", "8", "15"],
},
{
	title: "Leakage Voltage", artist: "Doin", channel: ORIGINAL, bpm: "180",
	Prime: ["S10", "S15", "S17", "D12", "D19"],
},
{
	title: "Let the Sunshine", artist: "Lisa Cool & The South Spirit", channel: WORLD, bpm: "128",
	Exceed2: ["2", "4", "7", "4", ""],
},
{
	title: "Lie", artist: "Bigbang", channel: KPOP, bpm: "125",
	Prime: ["S2", "S4", "S6", "S15", "D5", "D15", "Sp2", "Dp5"],
	Fiesta2: ["S2", "S4", "S6", "S15", "D5", "D15", "Sp2", "Dp5"],
},
{
	title: "Like A Man", artist: "Outsider", channel: KPOP, bpm: "180",
	Prime: ["S4", "S6", "S8", "S18", "D10", "D18", "Dp3"],
	Fiesta2: ["S4", "S6", "S8", "S18", "D10", "D18", "Dp3"],
	FiestaEX: ["S4", "S6", "S8", "S18", "D10", "D18", "Dp3"],
},
{
	title: "Limbo", artist: "Daddy Yankee", channel: WORLD, bpm: "125",
	Prime: ["S2", "S4", "S6", "S15", "D5", "D15"],
	// spanish only
},
{
	title: "Log In", artist: "SHK", channel: ORIGINAL, bpm: "140",
	Prime: ["S4", "S7", "S10", "S18", "S21", "D10", "D20"],
},
{
	title: "Loner", artist: "Outsider", channel: KPOP, bpm: "125",
	Prime: ["S3", "S5", "S8", "S15", "S19", "D6", "D17", "D22"],
},  
{
	title: "Loner", artist: "T.T.Ma", channel: KPOP, bpm: "155",
	NX: ["", "8", "13", "6", ""],
	Zero: ["", "6", "10", "7", ""],
	Exceed2: ["", "6", "10", "7", ""],
},
{
	title: "Los Malaventurados No Lloran", artist: "PXNDX", bpm: "172",
	Prime: ["S4", "S7", "S9", "S16", "D12", "D18"],
	Fiesta2: ["S4", "S7", "S9", "S16", "D12", "D18"],
},
{
	title: "Love is a Danger Zone", artist: "BanYa", bpm: "140",
	Prime: ["S3", "S7", "S10", "S15", "S19", "D6", "D15", "D20", "Dp??(x2)"],
	Fiesta2: ["S3", "S7", "S10", "S15", "S19", "D6", "D15", "D20", "Dp??(x2)"],
	FiestaEX: ["S3", "S7", "S10", "S15", "S19", "D6", "D15", "D20", "Dp??(x2)"],
	Fiesta: ["S3", "S7", "S15", "S19", "D6", "D15", "D20", "Dp??(x2)"],
	NXA: ["4", "7", "19", "6", "20"], NXA_: ["", "", "16", "7", "??(x2)"],
	NX2: ["3", "5", "19", "6", "20"], NX2_: ["", "", "16", "8", "??(x2)"],
	NX: ["3", "6", "18", "6", "19"],
	Zero: ["2", "6", "19", "6", "20"],
	Exceed2: ["2", "6", "18", "6", "20"],
},
{
	title: "Love Is A Danger Zone (Cranky Mix)", artist: "BanYa & Cranky", channel: ORIGINAL, bpm: "155",
	Prime: ["S6", "S12", "S18", "S20", "S22", "D8", "D16", "D20", "D24", "Dp??(x2)"],
	Fiesta2: ["S6", "S12", "S20", "S19", "D8", "D16", "D24", "Dp??(x2)"],
},
{
	title: "Love is a Danger Zone 2", artist: "BanYa", bpm: "162",
	Prime: ["S4", "S7", "S9", "S15", "S21", "D17", "D23"],
	Fiesta2: ["S4", "S7", "S9", "S15", "S21", "D17", "D23"],
	FiestaEX: ["S4", "S7", "S9", "S15", "S21", "D17", "D23"],
	Fiesta: ["S4", "S7", "S15", "S21", "D17", "D23"],
	NXA: ["7", "15", "21", "17", "23"],
	NX2: ["6", "15", "21", "18", "23"],
	NX: ["6", "15", "20", "17", "22"],
	Zero: ["7", "15", "21", "18", "23"],
},
{
	title: "Love is a Danger Zone 2 (D&G Ver.)", artist: "Yahpp", bpm: "162",
	Prime: ["S16", "S17", "Dp??(x2)"],
	Fiesta2: ["S16", "S17", "D??(x2)", "Dp??(x2)"],
	FiestaEX: ["S16", "S17", "D??(x2)", "Dp??(x2)"],
	Fiesta: ["S16", "S17", "D??(x2)", "Dp??(x2)"],
	NXA_: ["", "16", "17", "??(x2)", "??(x2)"],
	// Dp - капл, D - ahd+acz
	NX2_: ["", "16", "18", "", "??(x2)"],
},
{
	title: "Love Song", artist: "Yu Seung Jun (Steve Yoo)", channel: KPOP, bpm: "118",
	NX: ["2", "4", "10", "4", "11"],
	Zero: ["1", "4", "9", "4", "11"],
	Exceed2: ["1", "4", "9", "4", "11"],
},
{
	title: "Lovely", artist: "Kim Jong Kook", channel: KPOP, bpm: "188",
	NX2: ["4", "5", "12", "4", "13"],
	NX: ["4", "5", "12", "4", "13"],
},
{
	title: "Lovumba", artist: "Daddy Yankee", channel: WORLD, bpm: "121",
	Prime: ["S2", "S5", "S8", "S14", "D5", "D16"],
	Fiesta2: ["S2", "S5", "S8", "S14", "D5", "D16", "D19"],
	// spanish only
},
{
	title: "Lucid (PIU Edit)", artist: "Yak Won", channel: ORIGINAL, bpm: "40 ~ 190",
	Prime: ["S4", "S7", "S10", "S20", "D11", "D20", "D23", "Dp??(x2)"],
	Fiesta2: ["S4", "S7", "S10", "S20", "D11", "D20", "Dp??(x2)"],
},
{
	title: "Mackerel", artist: "Norazo", channel: KPOP, bpm: "150",
	Prime: ["S4", "S6", "S8", "S16", "D5", "D15", "Sp2", "Dp4", "Dp??(x2)"],
	Fiesta2: ["S4", "S6", "S8", "S16", "D5", "D15", "Sp2", "Dp4", "Dp??(x2)"],
},
{
	title: "Magic",
	Fiesta2: ["S1", "S4", "S8", "S13", "D3", "D14", "Sp3", "Dp4"],
	FiestaEX: ["S1", "S4", "S8", "S13", "D3", "D14", "Sp3", "Dp4"],
},
{
	title: "Magic Girl",
	Fiesta2: ["S4", "S7", "S11", "S15", "D5", "D13", "D16", "D21", "Sp3", "Dp4"],
	FiestaEX: ["S4", "S7", "S11", "S15", "D5", "D13", "D16", "D21", "Sp3", "Dp4"],
},
{
	title: "Maelstrom", artist: "Pia", channel: KPOP, bpm: "102",
	NXA: ["2", "5", "16", "5", "19"],
	NX2: ["3", "5", "16", "5", "18"],
},
{
	title: "Maria", artist: "BanYa", bpm: "136",
	Prime: ["S6", "S11", "S15", "D15"],
	Fiesta2: ["S6", "S11", "S15", "D15"],
	FiestaEX: ["S6", "S11", "S15", "D15"],
	Fiesta: ["S6", "S11", "S15", "D15"],
	Exceed2: ["2", "5", "8", "6", ""],
},
{
	title: "Matador", artist: "Cranky", channel: WORLD, bpm: "168",
	Prime: ["S4", "S7", "S10", "S18", "D7", "D19"],
},
{
	title: "Melodia", artist: "Lylloo feat. Egas", channel: WORLD, bpm: "135",
	Prime: ["S2", "S4", "S6", "S14", "D4", "D15"],
	// spain only
},
{
	title: "Mental Rider", artist: "SQUAR", channel: ORIGINAL, bpm: "120 ~ 140",
	Prime: ["S12", "S16", "S21", "D13", "D19", "D23"],
},
{
	title: "Meteorize", artist: "Paul Bazooka", channel: ORIGINAL, bpm: "136",
	Prime: ["S3", "S5", "S10", "S15", "D8", "D16"],
},
{
	title: "Mexi Mexi", artist: "Mozquito", channel: WORLD, bpm: "138",
	NX: ["4", "7", "12", "7", ""],
	Zero: ["3", "6", "11", "5", ""],
	Exceed2: ["3", "6", "11", "5", ""],
},
{
	title: "Midnight Blue", artist: "BanYa", bpm: "80",
	Prime: ["S12", "D13", "Sp4", "Dp5"],
	Fiesta2: ["S12", "D13", "Sp4", "Dp5"],
	FiestaEX: ["S12", "D13", "Sp4", "Dp5"],
	Fiesta: ["S12", "D13", "Sp4", "Dp5"],
},
{
	title: "Milky Way Galaxy", artist: "3R2", channel: WORLD, bpm: "175",
	Prime: ["S6", "S11", "S17", "D11", "D18"],
	notes: ["unlock 1.03 on Prime", "S17/D18 personal unlock on Prime"],
},
{
	title: "Miss's Story", artist: "BanYa", bpm: "111",
	Fiesta2: ["S5", "S18", "D19", "Sp3", "Dp5"],
	FiestaEX: ["S5", "S18", "D19", "Sp3", "Dp5"],
	Fiesta: ["S5", "S18", "D19", "Sp3", "Dp5"],
	NX2: ["3", "5", "12", "3", ""],
},
{
	title: "Mission Possible",
	Fiesta2: ["S5", "S7", "S13", "S19", "D8"],
	FiestaEX: ["S5", "S7", "S13", "S19", "D8"],
},
{
	title: "Mission Possible -Blowback-", artist: "BanYa Production",
	Fiesta2: ["S18", "D17", "Sp3", "Dp5"],
	FiestaEX: ["S18", "D17", "Sp3", "Dp5"],
	Fiesta: ["S18", "D17", "Sp3", "Dp5"],
},
{
	title: "Mistake", artist: "U'Two", channel: KPOP, bpm: "110",
	Prime: ["S2", "S4", "S6", "S11", "D12", "Sp1", "Dp6"],
	Fiesta2: ["S2", "S4", "S6", "S11", "D12", "Sp1", "Dp6"],
	FiestaEX: ["S2", "S4", "S6", "S11", "D12", "Sp1", "Dp6"],
	Fiesta: ["S2", "S4", "S6", "D12", "Sp1", "Dp6"],
	NXA: ["1", "6", "", "6", "12"],
	NX2: ["1", "6", "", "6", "13"],
	NX: ["1", "6", "", "6", ""],
},
{
	title: "Mobius Strip", artist: "Sechs Kies", channel: KPOP, bpm: "106",
	Prime: ["S2", "S4", "S6", "S12", "D7", "D14"],
	Fiesta2: ["S2", "S4", "S6", "S12", "D7", "D14"],
	FiestaEX: ["S2", "S4", "S6", "S12", "D7", "D14"],
	Fiesta: ["S4", "S6", "S12", "D7", "D14"],
	NX: ["", "6", "12", "6", "14"],
	Zero: ["", "5", "12", "6", "14"],
	Exceed2: ["", "5", "", "6", ""],
},
{
	title: "Money", artist: "BanYa Production", bpm: "130",
	Fiesta2: ["S10", "S14", "D12", "D16", "Sp4"],
	FiestaEX: ["S10", "S14", "D12", "D16", "Sp4"],
	NX2: ["4", "7", "13", "8", "16"],
},
{
	title: "Monkey Fingers", artist: "BanYa", bpm: "186",
	Prime: ["S3", "S5", "S8", "S15", "D17", "Sp5"],
	Fiesta2: ["S3", "S5", "S8", "S15", "D17", "Sp5"],
	FiestaEX: ["S3", "S5", "S8", "S15", "D17", "Sp5"],
	Fiesta: ["S5", "S8", "S15", "D17", "Sp5"],
	NXA: ["5", "8", "15", "7", "17"],
	NX2: ["3", "7", "15", "7", "17"],
	NX: ["3", "7", "15", "7", "16"],
	Zero: ["4", "7", "15", "6", "18"],
	Exceed2: ["4", "7", "15", "6", "18"],
},
{
	title: "Monkey Fingers 2", artist: "BanYa Production", bpm: "180",
	Prime: ["S6", "S10", "S17", "D9", "D19"],
	Fiesta2: ["S6", "S10", "S17", "D9", "D19"],
	FiestaEX: ["S6", "S10", "S17", "D9", "D19"],
	NX2: ["4", "8", "17", "7", "19"],
},
{
	title: "Monolith", artist: "Affinity", channel: WORLD, bpm: "196",
	Prime: ["S3", "S5", "S9", "S16", "D13", "D18"],
	Fiesta2: ["S3", "S5", "S9", "D13"],
},
{
	title: "Moonlight", artist: "BanYa", bpm: "180",
	Prime: ["S4", "S7", "S10", "S18", "S19", "D11", "D20", "D21"],
	Fiesta2: ["S4", "S7", "S10", "S18", "S19", "D11", "D20", "D21"],
	FiestaEX: ["S4", "S7", "S10", "S18", "S19", "D11", "D20", "D21"],
	Fiesta: ["S7", "S10", "S18", "S19", "D11", "D20", "D21"],
	NXA: ["", "10", "19", "11", "21"], NXA_: ["", "", "19", "", "21"],
	NX2: ["", "8", "19", "11", "21"],
	NX: ["", "8", "18", "11", "20"],
	Zero: ["", "7", "18", "8", "21"],
},
{
	title: "Mother",
	Fiesta2: ["S1", "S4", "S7", "S13", "D5", "D14", "Sp2", "Dp3"],
	FiestaEX: ["S1", "S4", "S7", "S13", "D5", "D14", "Sp2", "Dp3"],
},
{
	title: "Mr. Fire Fighter", artist: "Spooky Banana", channel: KPOP, bpm: "158",
	Fiesta2: ["S4", "S7", "S13", "D8", "D15"],
	FiestaEX: ["S4", "S7", "S13", "D8", "D15"],
	Fiesta: ["S2", "S4", "S7", "S13", "D8", "D15"],
	NXA: ["2", "7", "13", "8", "15"],
	NX2: ["2", "7", "13", "8", "15"],
	NX: ["2", "7", "13", "8", "15"],
	Zero: ["2", "6", "13", "8", "15"],
},
{
	title: "Mr. Larpus", artist: "BanYa", bpm: "190",
	Prime: ["S3", "S5", "S11", "S14", "S20", "S22", "D14", "D17", "D23"],
	Fiesta2: ["S3", "S5", "S11", "S14", "S20", "S22", "D14", "D17", "D23"],
	FiestaEX: ["S3", "S5", "S11", "S14", "S20", "S22", "D14", "D17", "D23"],
	Fiesta: ["S5", "S11", "S14", "S20", "S22", "D14", "D17", "D23", "D25?"],
	NXA: ["5", "11", "14", "14", "17"], NXA_: ["", "", "22", "23", "25"],
	NX2: ["4", "11", "14", "14", "17"], NX2_: ["", "", "21", "23", "25"],
	NX: ["4", "11", "14", "14", "16"],
	Zero: ["4", "9", "13", "10", "18"],
	Exceed2: ["4", "9", "13", "10", "18"],
},
{
	title: "My Brother is Street Singer", artist: "Park Hyang Lim vs. Yahpp", channel: KPOP, bpm: "129",
	NX2: ["2", "5", "11", "3", "13"],
	NX: ["2", "5", "11", "3", "13"],
},
{
	title: "My Dreams", artist: "BanYa Production", bpm: "136",
	Prime: ["S4", "S10", "S17", "S18", "D18", "Dp5"],
	Fiesta2: ["S4", "S10", "S17", "S18", "D18", "Dp5"],
	FiestaEX: ["S4", "S10", "S17", "S18", "D18", "Dp5"],
	Fiesta: ["S4", "S10", "S17", "S18", "D18", "Dp5"],
	NXA: ["4", "10", "18", "5", "18"], NXA_: ["", "", "19", "", ""],
},
{
	title: "My Friend", artist: "Cho PD", channel: KPOP, bpm: "127",
	Fiesta2: ["S1", "S3", "S6", "S12", "D14", "Sp3", "Dp5", "Dp6"],
	FiestaEX: ["S1", "S3", "S6", "S12", "D14", "Sp3", "Dp5", "Dp6"],
	Fiesta: ["S1", "S3", "S6", "S12", "D14", "Sp3", "Dp5", "Dp6"],
	NX2: ["3", "4", "12", "5", "14"],
	NX: ["3", "4", "12", "5", "14"],
	Zero: ["3", "4", "13", "5", "16"],
},
{
	title: "My Way", artist: "BanYa", bpm: "118",
	Prime: ["S3", "S5", "S8", "S12", "D15", "Sp2", "Dp4", "Dp6"],
	Fiesta2: ["S3", "S5", "S8", "S12", "D15", "Sp2", "Dp4", "Dp6"],
	FiestaEX: ["S3", "S5", "S8", "S12", "D15", "Sp2", "Dp4", "Dp6"],
	Fiesta: ["S5", "S12", "D15", "Sp2", "Dp6"],
	Zero: ["2", "5", "12", "6", "15"],
	Exceed2: ["2", "5", "12", "6", "15"],
},
{
	title: "N", artist: "BanYa", bpm: "106",
	Fiesta2: ["S5", "S16", "D16", "Sp2", "Dp5"],
	FiestaEX: ["S5", "S16", "D16", "Sp2", "Dp5"],
	Fiesta: ["S5", "S16", "Sp2", "Dp5"],
	NXA: ["2", "5", "16", "5", ""],
	NX2: ["2", "5", "16", "5", ""],
	NX: ["2", "5", "15", "5", ""],
	Zero: ["2", "4", "14", "4", ""],
},
{
	title: "Naissance", artist: "BanYa", bpm: "136",
	Prime: ["S4", "S7", "S8", "S10", "S20", "D7", "D15"],
	Fiesta2: ["S4", "S7", "S8", "S10", "S20", "D7", "D15"],
	FiestaEX: ["S4", "S7", "S8", "S10", "S20", "D7", "D15"],
	Fiesta: ["S7", "S10", "S20", "D7", "D15"],
	NXA: ["", "7", "10", "7", "15"], NXA_: ["", "", "20", "", ""],
	NX2: ["", "7", "11", "7", "14"],
	NX: ["", "7", "11", "7", "14"],
	Zero: ["", "7", "9", "7", "14"],
	Exceed2: ["", "7", "9", "7", ""],
},
{
	title: "Naissance 2", artist: "BanYa", bpm: "129",
	Prime: ["S6", "S13", "D15", "D19", "Sp3", "Dp5"],
	Fiesta2: ["S6", "S13", "D15", "D19", "Sp3", "Dp5"],
	FiestaEX: ["S6", "S13", "D15", "D19", "Sp3", "Dp5"],
	Fiesta: ["S6", "S13", "D15", "D19", "Sp3", "Dp5"],
	NXA: ["3", "6", "13", "5", "15"], NXA_: ["", "", "", "", "19"],
	NX2: ["3", "6", "13", "5", "15"], NX2_: ["", "", "", "", "20"],
	NX: ["3", "6", "13", "5", "15"],
	Zero: ["2", "6", "13", "5", "14"],
	Exceed2: ["2", "6", "13", "5", "14"],
},
{
	title: "Napalm", artist: "Doin", channel: ORIGINAL, bpm: "185",
	Prime: ["S13", "S19", "S22(21)", "D14", "D23(22)"],
	Fiesta2: ["S13", "S19", "S22(21)", "D14", "D23(22)"],
	FiestaEX: ["S13", "S19", "S22(21)", "D14", "D23(22)"],
	Fiesta: ["S13", "S19", "S22(21)", "D14", "D23(22)"],
},
{
	title: "Narcisista Por Excelencia", artist: "PXNDX", bpm: "164",
	Prime: ["S3", "S5", "S8", "S16", "D9", "D18"],
	Fiesta2: ["S3", "S5", "S8", "S16", "D9", "D18"],
	FiestaEX: ["S3", "S5", "S8", "S16", "D9", "D18"],
	Fiesta: ["S5", "S8", "S16", "D9", "D18"],
},
{
	title: "Native", artist: "SHK", channel: ORIGINAL, bpm: "135",
	Prime: ["S3", "S5", "S9", "S17", "S20", "D10", "D18", "Sp2", "Dp3"],
	Fiesta2: ["S3", "S5", "S9", "S17", "S20", "D10", "D18", "Sp2", "Dp3"],
	FiestaEX: ["S3", "S5", "S9", "S17", "S20", "D10", "D18", "Sp2", "Dp3"],
},
{
	title: "Necromancy", artist: "Zircon", channel: WORLD, bpm: "173",
	Prime: ["S4", "S7", "S10", "S18", "S20", "D13", "D19", "D24(23)", "Sp2", "Dp3"],
	Fiesta2: ["S4", "S7", "S10", "S18", "S20", "D13", "D19", "D24(23)", "Sp2", "Dp3"],
	FiestaEX: ["S4", "S7", "S10", "S18", "S20", "D13", "D19", "D24(23)", "Sp2", "Dp3"],
},
{
	title: "Nemesis", artist: "M2U", channel: ORIGINAL, bpm: "160",
	Prime: ["S4", "S7", "S11", "S16", "S18", "D12", "D20", "Dp??(x2)"],
	notes: ["Dp?? unlock 1.01 on Prime"],
},
{
	title: "Nice to Meet You", artist: "Bae Chi Gi", channel: KPOP, bpm: "117",
	NXA: ["2", "5", "14", "5", "14"],
	NX2: ["2", "5", "14", "5", "14"],
},
{
	title: "Nightmare", artist: "BanYa", bpm: "120",
	Fiesta2: ["S1", "S4", "D13", "Dp5"],
	FiestaEX: ["S1", "S4", "D13", "Dp5"],
	Fiesta: ["S1", "S4", "Dp5"],
	Exceed2: ["1", "4", "", "5", ""],
},
{
	title: "No.3", artist: "Bae Chi Gi", channel: KPOP, bpm: "128",
	Prime: ["S4", "S7", "S9", "S16", "D5", "D16", "Dp4"],
	Fiesta2: ["S4", "S7", "S9", "S16", "D5", "D16", "Dp4"],
	FiestaEX: ["S4", "S7", "S9", "S16", "D5", "D16", "Dp4"],
},
{
	title: "No Despair", artist: "Hot Potato", channel: KPOP, bpm: "160",
	NXA: ["2", "6", "19", "8", "21"],
	NX2: ["1", "6", "18", "8", "20"],
},
{
	title: "Nobody", artist: "Wonder Girls", channel: KPOP, bpm: "131",
	Prime: ["S2", "S4", "S6", "S15", "D8", "D17", "Sp3", "Dp4"],
	Fiesta2: ["S2", "S4", "S6", "S15", "D8", "D17", "Sp3", "Dp4"],
},
{
	title: "NoNoNo", artist: "Apink", channel: KPOP, bpm: "106",
	Prime: ["S2", "S3", "S5", "S14", "D5", "D14", "Sp15", "Dp15", "Dp??(x2)"],
	notes: ["Dp?? unlock 1.02 on Prime"],
},
{
	title: "No Rhyme No Reason", artist: "LTJ X-Perience",
	Fiesta2: ["S2", "S5", "S8", "S15", "D20", "Sp2"],
	FiestaEX: ["S2", "S5", "S8", "S15", "D20", "Sp2"],
	Fiesta: ["S2", "S5", "S15", "D20", "Sp2"],
},
{
	title: "Oh My!", artist: "Jang Yoon Jung", channel: KPOP, bpm: "112",
	NX2: ["", "4", "10", "4", "11"],
	NX: ["2", "4", "10", "4", "11"],
	Zero: ["3", "4", "9", "5", "10"],
},
{
	title: "Oh! Rosa!", artist: "BanYa", bpm: "148",
	Fiesta2: ["S7", "S13", "D7"],
	FiestaEX: ["S7", "S13", "D7"],
	Fiesta: ["S7", "S13", "D7"],
	Exceed2: ["3", "6", "9", "7", ""],
},
{
	title: "On and On", artist: "VIXX", channel: KPOP, bpm: "119",
	Prime: ["S2", "S4", "S6", "S15", "D5", "D15"],
	notes: ["unlock 1.02 on Prime"],
},
{
	title: "On Your Side", artist: "Kay Kent", channel: WORLD, bpm: "123",
	Exceed2: ["1", "4", "7", "5", ""],
},
{
	title: "One", artist: "Epik High", channel: KPOP, bpm: "135",
	Prime: ["S1", "S3", "S5", "S15", "D5", "D16"],
},
{
	title: "One Love", artist: "S'Max", channel: KPOP, bpm: "98",
	NX: ["2", "5", "9", "4", "10"],
	Zero: ["2", "5", "8", "4", "11"],
	Exceed2: ["2", "5", "8", "4", "11"],
},
{
	title: "One Night", artist: "DJ DOC", channel: KPOP, bpm: "132",
	Fiesta2: ["S5", "S13", "D14", "Sp2", "Dp4"],
	FiestaEX: ["S5", "S13", "D14", "Sp2", "Dp4"],
	Fiesta: ["S5", "S13", "D14", "Sp2", "Dp4"],
	NXA: ["2", "5", "13", "4", "14"],
	NX2: ["2", "5", "13", "4", "14"],
	NX: ["2", "5", "13", "4", "14"],
},
{
	title: "One Two Three Go!", artist: "Belanova", channel: WORLD, bpm: "150",
	Prime: ["S3", "S6", "S8", "S13", "D7", "D14"],
	Fiesta2: ["S3", "S6", "S8", "S13", "D7", "D14"],
},
{
	title: "Online", artist: "Saykoji", channel: WORLD, bpm: "118",
	Prime: ["S1", "S4", "S6", "S15", "D4", "D15"],
	Fiesta2: ["S1", "S4", "S6", "S15", "D4", "D15"],
},
{
	title: "Only You", artist: "Namolla Family", channel: KPOP, bpm: "108",
	Fiesta2: ["S3", "S6", "S12", "D3", "D13"],
	FiestaEX: ["S3", "S6", "S12", "D3", "D13"],
	Fiesta: ["S3", "S6", "S12", "D3", "D13"],
	NXA: ["3", "6", "12", "3", "13"],
},
{
	title: "Overblow", artist: "MAX", channel: ORIGINAL, bpm: "155",
	Prime: ["S4", "S7", "S10", "S16", "S18", "S20", "D12", "D18", "D20", "Sp2", "Dp3"],
	Fiesta2: ["S4", "S7", "S10", "S16", "S18", "S20", "D12", "D18", "D20", "Sp2", "Dp3"],
	FiestaEX: ["S4", "S7", "S10", "S16", "S18", "S20", "D12", "D18", "D20", "Sp2", "Dp3"],
},
{
	title: "Oy Oy Oy", artist: "BanYa", bpm: "148",
	Prime: ["S4", "S6", "S8", "S13", "D13", "Sp2", "Dp3"],
	Fiesta2: ["S3", "S6", "S8", "S13", "D13", "Sp2", "Dp3"],
	FiestaEX: ["S3", "S6", "S8", "S13", "D13", "Sp2", "Dp3"],
	Fiesta: ["S6", "S8"],
	Exceed2: ["3", "6", "8", "7", ""],
},
{
	title: "Pandora", artist: "Kara", channel: KPOP, bpm: "140",
	Prime: ["S2", "S4", "S7", "S16", "D6", "D16"],
},
{
	title: "Panuelito Rojo", artist: "Big Metra", channel: WORLD, bpm: "98",
	Prime: ["S5", "S10", "D18", "Sp1", "Dp4"],
	Fiesta2: ["S5", "S10", "D18", "Sp1", "Dp4"],
	FiestaEX: ["S5", "S10", "D18", "Sp1", "Dp4"],
	Fiesta: ["S5", "S10", "D18", "Sp1", "Dp4"],
	NXA: ["1", "5", "10", "4", "18"],
},
{
	title: "Papa Gonzales", artist: "BanYa", bpm: "145",
	Prime: ["S4", "S6", "S8", "S14", "D7", "D18"],
	Fiesta2: ["S4", "S6", "S8", "S14", "D7", "D18"],
	FiestaEX: ["S4", "S6", "S8", "S14", "D7", "D18"],
	Fiesta: ["S6", "S14", "D7", "D18"],
	NX: ["", "6", "14", "7", "17"],
	Zero: ["", "6", "14", "7", "18"],
},
{
	title: "Passacaglia", artist: "SynthWulf", channel: WORLD, bpm: "175",
	Prime: ["S4", "S7", "S10", "S16", "S20", "D12", "D17", "D22", "D24"],
	Fiesta2: ["S4", "S7", "S10", "S16", "S20", "S19", "D12", "D17", "D22"],
},
{
	title: "Passion", artist: "Yu Seung Jun (Steve Yoo)", channel: KPOP, bpm: "125",
	Exceed2: ["1", "5", "", "5", ""],
},
{
	title: "Pavane", artist: "V.A.", channel: ORIGINAL, bpm: "160",
	Prime: ["S3", "S6", "S10", "S17", "D16", "D22", "Sp2"],
	Fiesta2: ["S3", "S6", "S10", "S17", "D16", "D22", "Sp2"],
	FiestaEX: ["S3", "S6", "S10", "S17", "D16", "D22", "Sp2"],
},
{
	title: "People Didn't Know", artist: "BanYa Production", bpm: "134",
	NXA: ["2", "5", "15", "7", "17"],
},
{
	title: "Perfect!", artist: "Diva", channel: KPOP, bpm: "132",
	Zero: ["1", "5", "10", "4", "13"],
	Exceed2: ["1", "5", "10", "4", "13"],
},
{
	title: "Phantom", artist: "BanYa", bpm: "136",
	Prime: ["S2", "S7", "S12", "S17", "S18", "D12", "D19", "D20", "Dp7"],
	Fiesta2: ["S2", "S7", "S12", "S17", "S18", "D12", "D19", "D20", "Dp7"],
	FiestaEX: ["S2", "S7", "S12", "S17", "S18", "D12", "D19", "D20", "Dp7"],
	Fiesta: ["S12", "S17", "S18", "D12", "D19", "D20", "Dp7"],
	NXA: ["", "12", "18", "7", "19"], NXA_: ["", "", "18", "11", "20"],
	NX2: ["", "10", "18", "7", "19"], NX2_: ["", "", "19", "", "20"],
	NX: ["", "10", "17", "7", "18"],
	Zero: ["", "10", "18", "6", "19"],
},
{
	title: "Phantom -Intermezzo-", artist: "BanYa Production", bpm: "140",
	Prime: ["S3", "S7", "S12", "S15", "S19", "S21", "D15", "D19", "D20", "Dp3"],
	Fiesta2: ["S3", "S7", "S12", "S15", "S19", "S21", "D15", "D19", "D20", "Dp3"],
	FiestaEX: ["S3", "S7", "S12", "S15", "S19", "S21", "D15", "D19", "D20", "Dp3"],
	Fiesta: ["S12", "S15", "S19", "S21", "D15", "D19"],
},
{
	title: "Pierrot", artist: "Lee Hyun Do", channel: KPOP, bpm: "100",
	Exceed2: ["2", "5", "12", "5", "12"],
},
{
	title: "Pine Nut", artist: "Doin", channel: ORIGINAL, bpm: "200",
	Prime: ["S13", "S20", "D16"],
	Fiesta2: ["S13", "S20", "D16"],
	FiestaEX: ["S13", "S20", "D16"],
},
{
	title: "Point Break", artist: "BanYa", bpm: "92",
	Prime: ["S6", "D14", "Sp3", "Dp6"],
	Fiesta2: ["S6", "D14", "Sp3", "Dp6"],
	FiestaEX: ["S6", "D14", "Sp3", "Dp6"],
	Fiesta: ["S6", "D14", "Sp3", "Dp6"],
	NXA: ["3", "6", "9", "6", "13"],
	NX2: ["3", "6", "9", "6", "13"],
	NX: ["3", "6", "9", "6", ""],
	Zero: ["1", "4", "8", "5", ""],
	Exceed2: ["1", "4", "8", "5", ""],
},
{
	title: "Pop The Track", artist: "J-Mi & Midi-D & Ft. Hanna Stockzell", channel: WORLD, bpm: "160",
	Prime: ["S2", "S7", "S9", "S16", "S19", "D9", "D18", "D20", "Dp??(x2)"],
	Fiesta2: ["S2", "S7", "S9", "S16", "D9", "D18", "Dp??(x2)"],
},
{
	title: "Power of Dream", artist: "Victoria", channel: WORLD, bpm: "122",
	NX2: ["1", "7", "14", "6", "15"],
	NX: ["1", "7", "14", "6", "15"],
	Zero: ["1", "6", "14", "5", "15"],
	Exceed2: ["1", "6", "13", "5", "14"],
},
{
	title: "Pray", artist: "Som2", channel: KPOP, bpm: "122",
	NX2: ["2", "4", "9", "4", "11"],
	NX: ["2", "4", "9", "4", "11"],
	Exceed2: ["2", "5", "8", "4", "11"],
},
{
	title: "Procedimientos Para Llegar a un Comun Acuerdo", artist: "PXNDX", bpm: "160",
	Prime: ["S3", "S7", "S15", "D7", "D16"],
	Fiesta2: ["S3", "S7", "S15", "D7", "D16"],
	FiestaEX: ["S3", "S7", "S15", "D7", "D16"],
	Fiesta: ["S3", "S7", "S15", "D7", "D16"],
	NXA: ["3", "7", "15", "7", "16"],
},
{
	title: "Pump Breakers", artist: "Tico", channel: WORLD, bpm: "120",
	Fiesta2: ["S5", "S17", "D15", "Sp2", "Dp4"],
	FiestaEX: ["S5", "S17", "D15", "Sp2", "Dp4"],
	Fiesta: ["S5", "S17", "D15", "Sp2", "Dp4"],
	NXA: ["2", "5", "17", "4", "15"],
	// после NXA убрали удвоение BPM - считать другим чартом
},
{
	title: "Pump Jump", artist: "BanYa",
	Fiesta2: ["S4", "S15", "D17", "Sp2", "Dp4"],
	FiestaEX: ["S4", "S15", "D17", "Sp2", "Dp4"],
	Fiesta: ["S4", "S15", "D17", "Sp2", "Dp4"],
},
{
	title: "Pump Me Amadeus", artist: "BanYa", bpm: "170",
	Prime: ["S3", "S5", "S9", "S17", "D10", "D18", "D19"],
	Fiesta2: ["S3", "S5", "S9", "S17", "D10", "D18", "D19"],
	FiestaEX: ["S3", "S5", "S9", "S17", "D10", "D18", "D19"],
	Fiesta: ["S4 ", "S5", "S9", "S17", "D10", "D18", "D19"],
	NX: ["4", "9", "16", "10", "18"],
	Zero: ["4", "8", "16", "8", "19"],
	Exceed2: ["4", "8", "16", "8", "19"],
},
{
	title: "Pumping Jumping", artist: "BanYa Production",
	Fiesta2: ["S1", "S3", "S5", "S13", "S15", "S17", "S19", "D6", "D17", "Sp4", "Dp5", "Dp6"],
	FiestaEX: ["S1", "S3", "S5", "S13", "S15", "S17", "S19", "D6", "D17", "Sp4", "Dp5", "Dp6"],
	Fiesta: ["S1", "S3", "S5", "S13", "S15", "S17", "D6", "D17", "Sp4", "Dp5", "Dp6"],
},
{
	title: "Pumping Up", artist: "BanYa", bpm: "135",
	Fiesta2: ["S4", "S12"],
	FiestaEX: ["S4", "S12"],
	Fiesta: ["S4"],
	Zero: ["", "4", "", "", ""],
	Exceed2: ["", "4", "", "", ""],
},
{
	title: "Pumptris Quattro", artist: "Yahpp", bpm: "153",
	Prime: ["S3", "S7", "S12", "S17", "S19", "D13", "D20", "D22", "Sp10", "Dp2"],
	Fiesta2: ["S3", "S7", "S12", "S17", "S19", "D13", "D20", "D22", "Sp10", "Dp2"],
	FiestaEX: ["S3", "S7", "S12", "S17", "S19", "D13", "D20", "D22", "Sp10", "Dp2"],
	Fiesta: ["S3", "S7", "S12", "S17", "S19", "D13", "D20", "D22", "Sp10", "Dp2"],
	NXA: ["3", "7", "19", "13", "20"], NXA_: ["10", "12", "17", "2", "22"],
	NX2: ["3", "8", "20", "14", "??(22)"], NX2_: ["7", "8", "17", "4", "22"],
},
{
	title: "Pumptris 8Bit ver.", artist: "Yahpp", bpm: "162",
	Prime: ["S3", "S5", "S8", "S16", "S17", "Sp15", "Dp??(x2)"],
	Fiesta2: ["S3", "S5", "S8", "S16", "S17", "D??(x3)", "Sp15", "Dp??(x2)"],
	FiestaEX: ["S3", "S5", "S8", "S16", "S17", "D??(x3)", "Sp15", "Dp??(x2)"],
	Fiesta: ["S16", "S17", "D??(x3)", "Sp15", "Dp??(x2)"],
	NXA_: ["16", "16", "17", "??(x3)", "??(x2)"],
},
{
	title: "Que Viva La Vida", artist: "Wisin Ft. Michel Telo", channel: WORLD, bpm: "130",
	Prime: ["S2", "S4", "S6", "S16", "D7", "D16"],
	// spain only
},
{
	title: "Rabiosa", artist: "Shakira & Ft. Pitbull", channel: WORLD, bpm: "133",
	Prime: ["S2", "S4", "S7", "S14", "D5", "D16"],
	Fiesta2: ["S2", "S4", "S7", "S14", "D5", "D16"],
	// испанская версия только
},
{
	title: "Ragnarok", artist: "SynthWulf", channel: WORLD, bpm: "170",
	Prime: ["S7", "S11", "S16", "S18", "D9", "D13", "D17"],
},
{
	title: "Rainspark", artist: "Sanxion7", channel: WORLD, bpm: "125",
	Prime: ["S2", "S5", "S9", "S15", "D5", "D17"],
	Fiesta2: ["S2", "S5", "S9", "S15", "D5", "D17"],
},
{
	title: "Rave Until The Night Is Over", artist: "DM Ashura feat. MC Jay & Veronica", channel: WORLD, bpm: "144",
	Prime: ["S2", "S5", "S9", "S15", "D11", "D17", "Sp3", "Dp4"],
	Fiesta2: ["S2", "S5", "S9", "S15", "D11", "D17", "Sp3", "Dp4"],
	FiestaEX: ["S2", "S5", "S9", "S15", "D11", "D17", "Sp3", "Dp4"],
},
{
	title: "Re-Rave", artist: "KURi-ZiLL", channel: WORLD, bpm: "146",
	Prime: ["S2", "S6", "S11", "S17", "D12", "D18"],
	Fiesta2: ["S16"],
},
{
	title: "Reality", artist: "SHK", channel: ORIGINAL, bpm: "135",
	Prime: ["S3", "S6", "S8", "S14", "S17", "D4", "D15", "Sp4", "Dp2"],
	Fiesta2: ["S3", "S6", "S8", "S14", "S17", "D4", "D15", "Sp4", "Dp2"],
	FiestaEX: ["S3", "S6", "S8", "S14", "S17", "D4", "D15", "Sp4", "Dp2"],
},
{
	title: "Red Swan", artist: "Yahpp", bpm: "172",
	Prime: ["S4", "S6", "S8", "S18", "D12", "D20", "D21", "Dp??(x2)"],
	notes: ["Dp?? unlock 1.02 on Prime"],
},
{
	title: "Requiem", artist: "MAX", channel: ORIGINAL, bpm: "160",
	Prime: ["S4", "S7", "S11", "S16", "S19(20)", "D9", "D19", "D23"],
},
{
	title: "Ring Ding Dong",
	Fiesta2: ["S3", "S5", "S8", "S15", "D5", "D17", "Sp3", "Dp4"],
	FiestaEX: ["S3", "S5", "S8", "S15", "D5", "D17", "Sp3", "Dp4"],
},
{
	title: "Rippin' It Up", artist: "Future Funk Squad", channel: WORLD, bpm: "128",
	Prime: ["S2", "S5", "S9", "S16", "D4", "D18"],
	Fiesta2: ["S2", "S5", "S9", "S16", "D4", "D18"],
},
{
	title: "Robot battle", artist: "CYO Style", channel: WORLD, bpm: "198",
	Prime: ["S8", "S12", "S21", "D12", "D23"],
},
{
	title: "Rock the house", artist: "Matduke", channel: ORIGINAL, bpm: "175",
	Prime: ["S7", "S10", "S17", "D10", "D18", "D22"],
},
{
	title: "Rockhill", artist: "Beltaine", channel: WORLD, bpm: "140",
	Prime: ["S3", "S6", "S11", "S16", "D12", "D18"],
	Fiesta2: ["S3", "S6", "S11", "S16", "D12", "D18"],
},
{
	title: "Rolling Christmas", artist: "BanYa", bpm: "142",
	Prime: ["S3", "S5", "S8", "S13", "D5", "D13"],
	Fiesta2: ["S3", "S5", "S8", "S13", "D5", "D13"],
	FiestaEX: ["S3", "S5", "S8", "S13", "D5", "D13"],
	Fiesta: ["S3", "S5", "S8", "S13", "D5", "D13"],
	NX: ["4", "5", "10", "5", "13"],
	Zero: ["2", "4", "7", "4", "12"],
	Exceed2: ["2", "5", "8", "5", ""],
},
{
	title: "Run!", artist: "Novasonic", bpm: "140",
	Fiesta2: ["S4", "S8", "S15", "D8", "D17"],
	FiestaEX: ["S4", "S8", "S15", "D8", "D17"],
	Fiesta: ["S4", "S8", "S15", "D8", "D17"],
	NX: ["4", "8", "15", "8", "15"],
	Zero: ["2", "5", "15", "6", "16"],
	Exceed2: ["2", "5", "15", "6", "16"],
},
{
	title: "Run to you", artist: "DJ DOC", channel: KPOP, bpm: "132",
	Prime: ["S2", "S4", "S5", "S7", "S10", "S13", "D6", "D14"],
	Fiesta2: ["S2", "S4", "S5", "S7", "S10", "S13", "D6", "D14"],
	FiestaEX: ["S2", "S4", "S5", "S7", "S10", "S13", "D6", "D14"],
},
{
	title: "Sajahu", artist: "Lee Hyun Do", channel: KPOP, bpm: "127",
	Prime: ["S3", "S6", "S13", "D14", "Sp3", "Dp5"],
	Fiesta2: ["S3", "S6", "S13", "D14", "Sp3", "Dp5"],
	FiestaEX: ["S3", "S6", "S13", "D14", "Sp3", "Dp5"],
	Fiesta: ["S3", "S6", "S13", "D14", "Sp3", "Dp5"],
	NXA: ["3", "5", "13", "5", "14"],
	NX2: ["3", "5", "13", "5", "14"],
	NX: ["3", "5", "13", "5", "14"],
	Zero: ["2", "5", "13", "5", "14"],
	Exceed2: ["2", "5", "13", "5", "14"],
},
{
	title: "Selfishness", artist: "SID-Sound", channel: WORLD, bpm: "160",
	Prime: ["S3", "S6", "S11", "S17", "D12", "D18"],
	notes: ["unlock 1.03 on Prime", "S17/D18 personal unlock on Prime"],
},
{
	title: "Set Me Up", artist: "BanYa", bpm: "120",
	Prime: ["S2", "S4", "S6", "S9", "S13", "Sp4", "Dp4", "Dp7"],
	Fiesta2: ["S2", "S4", "S6", "S9", "S13", "Sp4", "Dp4", "Dp7"],
	FiestaEX: ["S2", "S4", "S6", "S9", "S13", "Sp4", "Dp4", "Dp7"],
	Fiesta: ["Sp4", "Dp7"],
},
{
	title: "Shake It Up", artist: "Rod", channel: WORLD, bpm: "120",
	NX2: ["4", "9", "15", "3", "19"],
	NX: ["4", "9", "15", "3", "18"],
	Zero: ["2", "7", "14", "7", "19"],
	Exceed2: ["2", "7", "14", "7", "18"],
},
{
	title: "Shake That Bootie", artist: "OneTwo", channel: KPOP, bpm: "145",
	NX: ["3", "6", "14", "6", "15"],
	Zero: ["3", "6", "13", "6", "16"],
	Exceed2: ["3", "6", "13", "6", "16"],
},
{
	title: "Shanghai Romance", artist: "Orange Caramel", channel: KPOP, bpm: "149",
	Prime: ["S4", "S7", "S9", "S14", "S16", "D5", "D13", "Sp2", "Dp4"],
	// убрали D17 и S18?
	Fiesta2: ["S4", "S7", "S9", "S14", "S16", "S18", "D5", "D13", "D17", "Sp2", "Dp4"],
},
{
	title: "She Likes Pizza", artist: "BanYa", bpm: "230",
	Fiesta2: ["S8", "S9", "D9", "D16"],
	FiestaEX: ["S8", "S9", "D9", "D16"],
	Fiesta: ["S8", "S9", "D9", "D16"],
	NXA: ["", "8", "9", "9", "16"],
	NX2: ["", "7", "11", "8", "16"],
	NX: ["", "7", "11", "8", "15"],
	Zero: ["", "7", "9", "8", "16"],
	Exceed2: ["", "7", "9", "8", "16"],
},
{
	title: "Shiny Day", artist: "Joanne", channel: KPOP, bpm: "106",
	NXA: ["3", "5", "13", "4", "14"],
	NX2: ["3", "5", "13", "4", "14"],
},
{
	title: "Shock",
	Fiesta2: ["S3", "S5", "S8", "S14", "S16", "D4", "D15", "Dp5"],
	FiestaEX: ["S3", "S5", "S8", "S14", "S16", "D4", "D15", "Dp5"],
},
{
	title: "Sik Asik", artist: "Ayu Ting Ting", channel: WORLD, bpm: "147",
	Prime: ["S3", "S5", "S8", "S13", "D4", "D14"],
	Fiesta2: ["S3", "S5", "S8", "S13", "D4", "D14"],
},
{
	title: "Slam", artist: "Novasonic", bpm: "132",
	Prime: ["S3", "S6", "S9", "S17", "S18", "D6", "D20"],
	Fiesta2: ["S3", "S6", "S9", "S17", "S18", "D6", "D20"],
	FiestaEX: ["S3", "S6", "S9", "S17", "S18", "D6", "D20"],
	Fiesta: ["S3", "S6", "S17", "S18", "D6", "D20"],
	NXA: ["3", "6", "17", "6", "20"], NXA_: ["", "", "18", "", "19"],
	NX2: ["3", "6", "18", "6", "20"],
	NX: ["3", "6", "15", "6", "19"],
	Zero: ["3", "5", "15", "6", "19"],
	Exceed2: ["3", "5", "15", "6", "19"],
},
{
	title: "Slightly", artist: "45rpm", channel: KPOP, bpm: "120",
	Fiesta2: ["S4", "S14", "D12", "D14", "Sp1", "Dp5"],
	FiestaEX: ["S4", "S14", "D12", "D14", "Sp1", "Dp5"],
	Fiesta: ["S4", "S14", "D12", "Sp1", "Dp5"],
	NXA: ["1", "4", "14", "5", "12"],
},
{
	title: "Smells Like A Chocolate", artist: "Vospi", channel: WORLD, bpm: "175.9",
	Prime: ["S4", "S6", "S9", "S16", "D12", "D17", "Sp1", "Dp3"],
	Fiesta2: ["S4", "S6", "S9", "S16", "D12", "D17", "Sp1", "Dp3"],
	FiestaEX: ["S4", "S6", "S9", "S16", "D12", "D17", "Sp1", "Dp3"],
},
{
	title: "Snow Dream", artist: "Apple Jam", channel: KPOP, bpm: "170",
	NX2: ["3", "5", "13", "7", "13"], NX2_: ["", "", "", "6", ""],
	NX: ["3", "5", "13", "7", "13"],
},
{
	title: "So", artist: "Typhoon", channel: KPOP, bpm: "138",
	NX2: ["1", "6", "12", "2", "12"], NX2_: ["12", "13", "15", "14", "16"],
	NX: ["1", "6", "12", "2", "12"],
},
{
	title: "Soca Make Yuh Ram Ram", artist: "General Grant", channel: WORLD, bpm: "108",
	NX2: ["3", "5", "10", "5", "12"],
	NX: ["3", "5", "10", "5", "12"],
	Zero: ["2", "5", "9", "6", "10"],
	Exceed2: ["2", "5", "9", "6", "10"],
},
{
	title: "Solitary", artist: "BanYa", bpm: "136",
	Prime: ["S2", "S4", "S6", "S8", "S9", "S16", "S17", "D7", "D16", "Sp3", "Dp5"],
	Fiesta2: ["S2", "S4", "S6", "S8", "S9", "S16", "S17", "D7", "D16", "Sp3", "Dp5"],
	FiestaEX: ["S2", "S4", "S6", "S8", "S9", "S16", "S17", "D7", "D16", "Sp3", "Dp5"],
	Fiesta: ["S6", "S9", "S16", "S17", "D7", "D16", "Sp3"],
	NXA: ["3", "6", "9", "7", "16"], NXA_: ["", "", "17", "", "18"],
	NX2: ["3", "5", "9", "7", "16"], NX2_: ["", "", "17", "", "19"],
	NX: ["3", "5", "9", "7", "15"],
	Zero: ["3", "5", "8", "6", "15"],
	Exceed2: ["3", "5", "8", "6", "15"],
},
{
	title: "Solitary 1.5", artist: "Yahpp", bpm: "136",
	Prime: ["S7", "S16", "D18", "Sp4", "Dp6"],
	Fiesta2: ["S7", "S16", "D18", "Sp4", "Dp6"],
	FiestaEX: ["S7", "S16", "D18", "Sp4", "Dp6"],
	Fiesta: ["S7", "S16", "D18", "Sp4", "Dp6"],
	NXA: ["4", "7", "16", "6", "18"],
	NX2: ["3", "7", "16", "6", "18"],
},
{
	title: "Solitary 2", artist: "BanYa", bpm: "136",
	Prime: ["S4", "S6", "S8", "S17", "D18", "Sp3", "Dp6"],
	Fiesta2: ["S4", "S6", "S8", "S17", "D18", "Sp3", "Dp6"],
	FiestaEX: ["S4", "S6", "S8", "S17", "D18", "Sp3", "Dp6"],
	Fiesta: ["S6", "S17", "D18", "Sp3", "Dp6"],
	NXA: ["3", "6", "17", "6", "18"],
	NX2: ["3", "6", "17", "6", "19"],
	NX: ["3", "6", "16", "6", "18"],
	Zero: ["3", "6", "16", "6", "18"],
	// Exceed2 - unlock
},
{
	title: "Sorceress Elise", artist: "Yahpp", bpm: "158",
	Prime: ["S4", "S6", "S8", "S10", "S15", "S18", "S21", "S23", "D8", "D17", "D24", "Dp??(x2)"],
	Fiesta2: ["S4", "S6", "S8", "S10", "S15", "S18", "S21", "S23", "D8", "D17", "D24", "Dp??(x2)"],
	FiestaEX: ["S4", "S6", "S8", "S10", "S15", "S18", "S21", "S23", "D8", "D17", "D24", "Dp??(x2)"],
	Fiesta: ["S4", "S6", "S8", "S10", "S18", "S23", "D8", "D17", "D24", "Dp??(x2)"],
},
{
	title: "Star Command", artist: "Zircon", channel: WORLD, bpm: "155",
	Prime: ["S3", "S5", "S12", "S15", "S19", "D14", "D21", "D23"],
	Fiesta2: ["S3", "S5", "S12", "S15", "S19", "D14", "D21"],
},
{
	title: "Starian", artist: "Duke", channel: KPOP, bpm: "135",
	Prime: ["S2", "S7", "S13", "S15", "D9", "D17"],
	Fiesta2: ["S2", "S7", "S13", "S15", "D9", "D17"],
	FiestaEX: ["S2", "S7", "S13", "S15", "D9", "D17"],
	Fiesta: ["S7", "S13", "S15", "D9", "D17"],
	NXA: ["", "7", "13", "9", ""], NXA_: ["", "", "15", "", "17"],
	NX2: ["", "7", "13", "9", ""],
	NX: ["", "7", "13", "9", ""],
	Zero: ["", "6", "12", "7", ""],
	Exceed2: ["", "6", "12", "7", ""],
},
{
	title: "Step", artist: "KARA", channel: KPOP, bpm: "123",
	Prime: ["S2", "S4", "S7", "S15", "D5", "D15", "Sp2", "Dp4"],
	// убрали D16?
	Fiesta2: ["S2", "S4", "S7", "S15", "D5", "D15", "D16", "Sp2", "Dp4"],
},
{
	title: "Storm", artist: "Perry", channel: KPOP, bpm: "96",
	Fiesta2: ["S5", "S12", "D13", "Sp3", "Dp4"],
	FiestaEX: ["S5", "S12", "D13", "Sp3", "Dp4"],
	Fiesta: ["S5", "S12", "D13", "Sp3", "Dp4"],
	NXA: ["3", "5", "12", "4", "13"],
	NX2: ["2", "5", "12", "4", "13"],
	NX: ["2", "5", "12", "4", "13"],
	Zero: ["2", "3", "12", "4", "13"],
},
{
	title: "Street Show Down", artist: "BanYa", bpm: "124",
	Fiesta2: ["S7", "S15", "D13", "Sp4", "Dp6"],
	FiestaEX: ["S7", "S15", "D13", "Sp4", "Dp6"],
	Fiesta: ["S7", "S15", "D13", "Sp4", "Dp6"],
	NX2: ["4", "7", "8", "6", "13"],
	Zero: ["4", "7", "8", "6", "13"],
	Exceed2: ["4", "7", "8", "6", "14"],
},
{
	title: "Sugar Eyes", artist: "Sugar Eyes", channel: WORLD, bpm: "122",
	Prime: ["S1", "S3", "S6", "S8", "S10", "S13", "D4", "D9"],
	Fiesta2: ["S1", "S3", "S6", "S8", "S10", "D4", "D9"],
},
{
	title: "Sugar Free", artist: "T-ara", channel: KPOP, bpm: "128",
	Prime: ["S4", "S6", "S8", "S15", "D5", "D16"],
},
{
	title: "Super Fantasy", artist: "SHK", channel: ORIGINAL, bpm: "145",
	Prime: ["S4", "S7", "S10", "S16", "S19", "D11", "D21", "Dp??(x2)"],
},
{
	title: "Supermagic", artist: "Supreme Team", channel: KPOP, bpm: "112",
	Prime: ["S2", "S4", "S6", "S14", "D5", "D15"],
},
{
	title: "Superman", artist: "Norazo", channel: KPOP, bpm: "150",
	Prime: ["S4", "S6", "S8", "S14", "S16", "D9", "D15", "D23", "Sp1", "Dp4", "Dp??(x2)"],
	Fiesta2: ["S4", "S6", "S8", "S14", "S16", "D9", "D15", "D23", "Sp1", "Dp4", "Dp??(x2)"],
	FiestaEX: ["S4", "S6", "S8", "S14", "S16", "D9", "D15", "D23", "Sp1", "Dp4", "Dp??(x2)"],
},
{
	title: "Switchback", artist: "Celldweller", channel: WORLD, bpm: "112",
	Prime: ["S3", "S5", "S9", "S15", "S18", "D10", "D16", "D18"],
	Fiesta2: ["S3", "S5", "S9", "S15", "S18", "D10", "D16", "D18"],
},
{
	title: "Take Me Back", artist: "KaW", channel: WORLD, bpm: "172",
	Prime: ["S3", "S7", "S9", "S17", "D10", "D16"],
	Fiesta2: ["S3", "S7", "S9", "S17", "D10", "D16"],
},
{
	title: "Take Out", artist: "SHK", channel: ORIGINAL, bpm: "170",
	Prime: ["S4", "S7", "S11", "S17", "S20", "D13", "D19", "D22", "D23", "Dp??(x3)"],
	Fiesta2: ["S4", "S7", "S11", "S17", "S20", "D13", "D19", "D22", "D23", "Dp??(x3)"],
	FiestaEX: ["S4", "S7", "S11", "S17", "S20", "D13", "D19", "D22", "D23", "Dp??(x3)"],
},
{
	title: "Tek -Club Copenhagen-", artist: "BanYa Production", bpm: "132",
	Prime: ["S3", "S5", "S16", "S17", "D17", "Sp5", "Dp4"],
	Fiesta2: ["S3", "S5", "S16", "S17", "D17", "Sp5", "Dp4"],
	FiestaEX: ["S3", "S5", "S16", "S17", "D17", "Sp5", "Dp4"],
	Fiesta: ["S3", "S5", "S16", "S17", "D17", "Sp5", "Dp4"],
},
{
	title: "Tell Me", artist: "Wonder Girls", channel: KPOP, bpm: "127",
	NXA: ["1", "5", "12", "5", "14"],
	NX2: ["2", "5", "14", "5", "16"],
},
{
	title: "Tepris", artist: "Doin", channel: ORIGINAL, bpm: "145",
	Prime: ["S2", "S4", "S7", "S16", "D9", "D18", "Dp??(x2)"],
	Fiesta2: ["S2", "S4", "S7", "S16", "D9", "D18", "Dp??(x2)"],
	FiestaEX: ["S2", "S4", "S7", "S16", "D9", "D18", "Dp??(x2)"],
	Fiesta: ["S2", "S4", "S7", "S16", "D9", "D18", "Dp??(x2)"],
},
{
	title: "Terminal Depository", artist: "Ururbu Project", channel: KPOP, bpm: "138",
	NX2: ["3", "6", "13", "5", "16"],
	NX: ["3", "6", "13", "5", "15"],
},
{
	title: "The Angel Who Lost Wings", artist: "Roo'ra",
	Fiesta2: ["S1", "S4", "S6", "S13", "D6", "D16", "Sp2", "Dp3"],
	FiestaEX: ["S1", "S4", "S6", "S13", "D6", "D16", "Sp2", "Dp3"],
	Fiesta: ["S1", "S4", "S6", "S13", "D6", "D16", "Sp2", "Dp3"],
},
{
	title: "The Devil", artist: "BanYa Production", bpm: "130 ~ 240",
	Prime: ["S4", "S6", "S9", "S12", "S20", "D13", "D21", "Dp??(x2)"],
	Fiesta2: ["S4", "S6", "S9", "S12", "S20", "D13", "D21", "Dp??(x2)"],
	FiestaEX: ["S4", "S6", "S9", "S12", "S20", "D13", "D21", "Dp??(x2)"],
},
{
	title: "The People Didn't Know", artist: "BanYa Production", bpm: "134",
	Prime: ["S2", "S5", "S15", "D7", "D17"],
	Fiesta2: ["S2", "S5", "S15", "D7", "D17"],
	FiestaEX: ["S2", "S5", "S15", "D7", "D17"],
	Fiesta: ["S2", "S5", "S15", "D7", "D17"],
},
{
	title: "The Rap. act 3", artist: "Honey Family", channel: KPOP, bpm: "98",
	Zero: ["3", "5", "12", "5", "13"],
	Exceed2: ["3", "5", "12", "5", "13"],
},
{
	title: "Throw 'em Up", artist: "Andrew Kim", channel: WORLD, bpm: "100",
	NX2: ["2", "5", "14", "5", "15"],
	NX: ["2", "5", "14", "5", "15"],
},
{
	title: "Till the End of Time", artist: "BanYa", bpm: "140",
	Prime: ["S2", "S4", "S9", "Dp3"],
	Fiesta2: ["S2", "S4", "S9", "Dp3"],
	FiestaEX: ["S2", "S4", "S9", "Dp3"],
	Fiesta: ["S2", "S4", "S9"],
},
{
	title: "To the Sky", artist: "Lexy",
	Fiesta2: ["S1", "S3", "S5", "S12", "S15", "D6", "D16", "Sp3", "Dp6"],
	FiestaEX: ["S1", "S3", "S5", "S12", "S15", "D6", "D16", "Sp3", "Dp6"],
	Fiesta: ["S1", "S3", "S5", "S12", "D6", "D16", "Sp3", "Dp6"],
},
{
	title: "To the Top", artist: "6 Mill, Bionic Juno", channel: KPOP, bpm: "120",
	Exceed2: ["1", "5", "", "", ""],
},
{
	title: "Toccata", artist: "BanYa Production", bpm: "104",
	Prime: ["S4", "S7", "S10", "S17", "D14", "D17", "Sp3", "Dp6"],
	Fiesta2: ["S4", "S7", "S10", "S17", "D14", "D17", "Sp3", "Dp6"],
	FiestaEX: ["S4", "S7", "S10", "S17", "D14", "D17", "Sp3", "Dp6"],
	Fiesta: ["S4", "S7", "S10", "S17", "D14", "D17", "Sp3", "Dp6"],
	NXA: ["3", "10", "17", "6", "14"], NXA_: ["", "16", "17", "", ""],
},
{
	title: "Too Late", artist: "Shyne", channel: KPOP, bpm: "97",
	NX: ["3", "4", "", "5", ""],
	Zero: ["3", "5", "", "5", ""],
	Exceed2: ["2", "5", "11", "5", "12"],
},
{
	title: "Top City",
	Fiesta2: ["S4", "S6", "S12", "D7", "D12"],
	FiestaEX: ["S4", "S6", "S12", "D7", "D12"],
},
{
	title: "Tribe Attacker", artist: "Hi-G", channel: WORLD, bpm: "150",
	Prime: ["S3", "S6", "S9", "S16", "D10", "D15", "Dp??(x4)"],
	Fiesta2: ["S3", "S6", "S9", "S16", "D10", "D15", "Dp??(x4)"],
},
{
	title: "Turkey March", artist: "BanYa", bpm: "150",
	Prime: ["S3", "S7", "S12", "S15", "D9", "D19"],
	Fiesta2: ["S3", "S7", "S12", "S15", "D9", "D19"],
	FiestaEX: ["S3", "S7", "S12", "S15", "D9", "D19"],
	Fiesta: ["S7", "S12", "S15", "D9", "D19"],
	NXA: ["", "7", "12", "9", "19"],
	NX2: ["", "7", "12", "9", "18"], NX2_: ["", "15", "18", "", ""],
	NX: ["", "7", "12", "9", "17"],
	Zero: ["", "7", "12", "8", "19"],
	Exceed2: ["", "7", "12", "8", "18"],
},
{
	title: "Turkey March -Minimal Tunes-", artist: "BanYa Production", bpm: "130",
	Prime: ["S3", "S6", "S8", "S17", "D10", "D18", "Dp1"],
	Fiesta2: ["S3", "S6", "S8", "S17", "D10", "D18", "Dp1"],
	FiestaEX: ["S3", "S6", "S8", "S17", "D10", "D18", "Dp1"],
	Fiesta: ["S3", "S6", "S8", "S17", "D10", "D18"],
},
{
	title: "Turn Around", artist: "Mina", channel: KPOP, bpm: "113",
	NX2: ["2", "4", "13", "5", "14"],
	NX: ["2", "4", "13", "5", "14"],
	Zero: ["3", "5", "11", "5", "14"],
},
{
	title: "Two Guys / To Mary", artist: "Bae Chi Gi", channel: KPOP, bpm: "128",
	Prime: ["S4", "S7", "S9", "S15", "D5", "D16", "Sp3", "Dp6"],
	// убрали D18?
	Fiesta2: ["S4", "S7", "S9", "S15", "D5", "D16", "D18", "Sp3", "Dp6"],
},
{
	title: "Twist King", artist: "Turbo",
	Fiesta2: ["S4", "S6", "S10", "S14", "D7", "D15", "Sp4"],
	FiestaEX: ["S4", "S6", "S10", "S14", "D7", "D15", "Sp4"],
	Fiesta: ["S4", "S6", "S14", "D7", "D15", "Sp4"],
},
{
	title: "Typhoon", artist: "Lee Hyun Do", channel: KPOP, bpm: "112",
	NX2: ["2", "5", "10", "5", "13"],
	NX: ["2", "5", "10", "5", "13"],
	Zero: ["3", "6", "11", "6", "14"],
	Exceed2: ["2", "6", "11", "6", "14"],
},
{
	title: "U", artist: "Ju Dain", channel: KPOP, bpm: "111",
	Zero: ["3", "6", "11", "6", "14"],
	Exceed2: ["3", "6", "11", "6", "14"],
},
{
	title: "U", artist: "Super Junior M",
	Fiesta2: ["S1", "S4", "S6", "S14", "D13", "Sp2", "Dp5"],
	FiestaEX: ["S1", "S4", "S6", "S14", "D13", "Sp2", "Dp5"],
	Fiesta: ["S1", "S4", "S6", "S14", "D13", "Sp2", "Dp5"],
},
{
	title: "U Got 2 Know", artist: "MAX", channel: ORIGINAL, bpm: "127",
	Prime: ["S2", "S7", "S8", "S17", "S18", "S19", "D18", "Sp2", "Dp4"],
	Fiesta2: ["S2", "S7", "S8", "S17", "S18", "S19", "D18", "Sp2", "Dp4"],
	FiestaEX: ["S2", "S7", "S8", "S17", "S18", "S19", "D18", "Sp2", "Dp4"],
	Fiesta: ["S17", "S18", "S19", "D18", "Sp2", "Dp4"],
},
{
	title: "U Got Me Crazy", artist: "MAX", channel: ORIGINAL, bpm: "128",
	Prime: ["S4", "S9", "S17", "S18", "D5", "D18"],
	notes: ["unlock 1.04 on Prime", "S17/S18/D18 personal unlock on Prime"],
},
{
	title: "U Got Me Rocking", artist: "MAX", channel: ORIGINAL, bpm: "128",
	Prime: ["S3", "S6", "S8", "S17", "S18", "D4", "D17", "Dp3"],
	Fiesta2: ["S3", "S6", "S8", "S17", "S18", "D4", "D17", "Dp3"],
},
{
	title: "U Inside My Dim Memory", artist: "Hyun Jin Young vs. Yahpp", channel: KPOP, bpm: "118",
	NX2: ["3", "6", "14", "4", "18"],
	NX: ["3", "6", "14", "4", "17"],
},
{
	title: "Ugly Dee", artist: "BanYa Production", bpm: "92",
	Prime: ["S3", "S5", "S9", "D11", "D15"],
	Fiesta2: ["S3", "S5", "S9", "D11", "D15"],
	FiestaEX: ["S3", "S5", "S9", "D11", "D15"],
	Fiesta: ["D11", "D15"],
	NXA_: ["", "", "", "11", "15"],
	NX2_: ["", "", "", "15", "15"],
	NX: ["1", "4", "13", "5", "14"],
},
{
	title: "Unique", artist: "SHK", channel: ORIGINAL, bpm: "145",
	Prime: ["S3", "S6", "S10", "S15", "S17", "D12", "D16", "D19"],
	Fiesta2: ["S3", "S6", "S10", "S17", "S16", "D12", "D19"],
},
{
	title: "Up Up", artist: "Cachy Huang", channel: WORLD, bpm: "135",
	NX: ["3", "4", "10", "4", "11"],
	Zero: ["3", "4", "9", "4", "10"],
},
{
	title: "Uprock", artist: "Sam-I-Am", channel: "", bpm: "120",
	Fiesta2: ["S5", "S17", "D14", "Sp2", "Dp4"],
	FiestaEX: ["S5", "S17", "D14", "Sp2", "Dp4"],
	Fiesta: ["S5", "S17", "D14", "Sp2", "Dp4"],
	NXA: ["2", "5", "17", "4", "14"],
},
{
	title: "Utopia", artist: "Smiley", channel: WORLD, bpm: "166",
	Prime: ["S4", "S7", "S9", "S17", "D9", "D18"],
	Fiesta2: ["S4", "S7", "S9", "S17", "D9", "D18"],
},
{
	title: "V.I.P.", artist: "Bada", channel: KPOP, bpm: "112",
	NXA: ["3", "5", "11", "5", "15"],
	NX2: ["3", "5", "11", "5", "13"],
},
{
	title: "Vacuum", artist: "Doin", channel: ORIGINAL, bpm: "200",
	Prime: ["S19", "S21", "S23", "D22", "D25", "Dp3"],
	Fiesta2: ["S21", "S23", "D22", "D25", "Dp3"],
	FiestaEX: ["S21", "S23", "D22", "D25", "Dp3"],
	Fiesta: ["S21", "S23", "D22", "D25"],
},
{
	title: "Valenti", artist: "BoA", channel: KPOP, bpm: "104",
	Zero: ["2", "4", "9", "4", "11"],
	Exceed2: ["2", "4", "9", "4", "11"],
},
{
	title: "Very good", artist: "Block B", channel: KPOP, bpm: "136",
	Prime: ["S3", "S6", "S9", "S15", "D5", "D15"],
	notes: ["unlock 1.04 on Prime"],
},
{
	title: "Very Old Couples", artist: "015B", channel: KPOP, bpm: "121",
	Fiesta2: ["S6", "S13", "D15", "Sp2", "Dp6"],
	FiestaEX: ["S6", "S13", "D15", "Sp2", "Dp6"],
	Fiesta: ["S6", "S13", "D15", "Sp2", "Dp6"],
	NXA: ["2", "6", "13", "6", "15"],
	NX2: ["3", "6", "13", "6", "15"],
},
{
	title: "Virtual Emotion", artist: "Inspector K", channel: WORLD, bpm: "180",
	Prime: ["S3", "S7", "S11", "S17", "D18", "Dp??(x2)"],
	Fiesta2: ["S3", "S7", "S11", "S17", "Dp??(x2)"],
},
{
	title: "Vook", artist: "BanYa", bpm: "184",
	Prime: ["S4", "S7", "S9", "S15", "S17", "S20", "D12", "D17", "D18", "D19"],
	Fiesta2: ["S4", "S7", "S9", "S15", "S17", "S20", "D12", "D17", "D18", "D19"],
	FiestaEX: ["S4", "S7", "S9", "S15", "S17", "S20", "D12", "D17", "D18", "D19"],
	Fiesta: ["S9", "S15", "S17", "S20", "D12", "D17", "D18", "D19"],
	NXA: ["5", "9", "15", "17", "18"], NXA_: ["", "17", "20", "12", "19"],
	NX2: ["4", "8", "14", "16", "18"], NX2_: ["", "16", "18", "12", "19"],
	NX: ["4", "8", "14", "15", "17"],
	Zero: ["4", "7", "14", "15", "18"],
	Exceed2: ["4", "7", "14", "15", "17"],
},
{
	title: "VVV", artist: "Zig Zag", channel: WORLD, bpm: "310",
	Prime: ["S18", "S23", "D16", "D19"],
	// куда дели D24?
	Fiesta2: ["D24"],
},
{
	title: "Wanna", artist: "Kara",
	Fiesta2: ["S2", "S4", "S9", "S16", "D3", "D12", "D17", "Sp2", "Dp5"],
	FiestaEX: ["S2", "S4", "S9", "S16", "D3", "D12", "D17", "Sp2", "Dp5"],
	Fiesta: ["S2", "S4", "S9", "S16", "D3", "D12", "D17", "Sp2", "Dp5"],
},
{
	title: "Watch Out", artist: "Victoria", channel: WORLD, bpm: "106",
	NX2: ["3", "6", "10", "6", "12"],
	NX: ["3", "6", "10", "6", "12"],
	Zero: ["2", "5", "11", "7", "12"],
	Exceed2: ["2", "5", "11", "7", "12"],
},
{
	title: "We Are", artist: "Deux", channel: KPOP, bpm: "116",
	Prime: ["S2", "S4", "S5", "S12", "D6", "D13", "Dp4"],
	Fiesta2: ["S2", "S4", "S5", "S12", "D6", "D13", "Dp4"],
	FiestaEX: ["S2", "S4", "S5", "S12", "D6", "D13", "Dp4"],
	Fiesta: ["S4", "S5", "S12", "D6", "D13"],
	NXA: ["", "5", "12", "6", "13"],
	NX2: ["", "5", "13", "6", "14"],
	NX: ["", "5", "13", "6", "14"],
	Zero: ["", "5", "9", "5", "12"],
	Exceed2: ["", "5", "9", "5", ""],
},
{
	title: "We Don't Stop", artist: "Asoto Union", channel: KPOP, bpm: "100",
	NX: ["2", "5", "10", "4", "11"],
	Zero: ["3", "6", "9", "5", "10"],
	Exceed2: ["3", "6", "9", "5", "10"],
},
{
	title: "We Goin' Fly -remix-", artist: "Gyfted", channel: WORLD, bpm: "112",
	Fiesta2: ["S5", "S15", "D19", "Sp3", "Dp6"],
	FiestaEX: ["S5", "S15", "D19", "Sp3", "Dp6"],
	Fiesta: ["S5", "S15", "D19", "Sp3", "Dp6"],
	NXA: ["3", "5", "15", "6", "19"],
	NX2: ["4", "5", "14", "6", "19"],
	NX: ["4", "5", "14", "6", "18"],
},
{
	title: "We Got 2 Know", artist: "MAX", channel: ORIGINAL, bpm: "128",
	Prime: ["S1", "S5", "S8", "S17", "S20", "D4", "D18", "Sp2", "Dp3", "Dp??(x3)"],
	Fiesta2: ["S1", "S5", "S8", "S17", "S20", "D4", "D18", "Sp2", "Dp3", "Dp??(x3)"],
	FiestaEX: ["S1", "S5", "S8", "S17", "S20", "D4", "D18", "Sp2", "Dp3", "Dp??(x3)"],
},
{
	title: "We Will Meet Again", artist: "BanYa",
	Fiesta2: ["S3", "S8", "S13", "S14", "D8"],
	FiestaEX: ["S3", "S8", "S13", "S14", "D8"],
},
{
	title: "What Do You Really Want?", artist: "Crash", channel: KPOP, bpm: "110",
	Prime: ["S9", "S14", "S19", "D16", "D20"],
	Fiesta2: ["S9", "S14", "S19", "D16", "D20"],
	FiestaEX: ["S9", "S14", "S19", "D16", "D20"],
	Fiesta: ["S9", "S14", "S19", "D16", "D20"],
	NXA: ["3", "9", "19", "11", "16"],
	NX2: ["2", "9", "20", "11", "14"],
	NX: ["2", "9", "19", "11", "14"],
	Zero: ["2", "7", "18", "7", "14"],
	Exceed2: ["2", "7", "16", "7", "14"],
},
{
	title: "What Happened", artist: "Throwdown", channel: WORLD, bpm: "130",
	Prime: ["S3", "S7", "S12", "S17", "S20", "D20(19)", "D23"],
	Fiesta2: ["S3", "S7", "S12", "S17", "S20", "D20(19)", "D23"],
	FiestaEX: ["S3", "S7", "S12", "S17", "S20", "D20(19)", "D23"],
},
{
	title: "What's Goin' On?", artist: "Turtles", channel: KPOP, bpm: "130",
	NX2: ["3", "3", "7", "5", "8"],
	NX: ["3", "3", "7", "5", "8"],
	Zero: ["3", "2", "7", "5", "9"],
},
{
	title: "Will o' the Wisp", artist: "BanYa", bpm: "210",
	Prime: ["S3", "S5", "S10", "S13", "S19", "D10", "D13", "D19", "D21"],
	Fiesta2: ["S3", "S5", "S10", "S13", "S19", "D10", "D13", "D19", "D21"],
	FiestaEX: ["S3", "S5", "S10", "S13", "S19", "D10", "D13", "D19", "D21"],
	Fiesta: ["S5", "S10", "S13", "S19", "D10", "D13", "D19", "D21"],
	NXA: ["5", "10", "13", "13", "19"], NXA_: ["", "", "19", "", "21"],
	NX2: ["5", "10", "13", "13", "19"],
	NX: ["5", "10", "13", "13", "18"],
	Zero: ["4", "8", "13", "10", "19"],
	Exceed2: ["4", "8", "13", "10", "19"],
},
{
	title: "Windmill", artist: "Yak Won", channel: ORIGINAL, bpm: "246",
	Prime: ["S8", "S13", "S17", "S21", "D14", "D18", "D24"],
},
{
	title: "Winter", artist: "BanYa", bpm: "168",
	Prime: ["S4", "S6", "S8", "S15", "D11", "D17", "D19"],
	Fiesta2: ["S4", "S6", "S8", "S15", "D11", "D17", "D19"],
	FiestaEX: ["S4", "S6", "S8", "S15", "D11", "D17", "D19"],
	Fiesta: ["S4", "S6", "S8", "S15", "D11", "D19"],
	NXA: ["4", "8", "15", "11", "19"],
	NX2: ["4", "9", "14", "10", "19"],
	NX: ["4", "9", "14", "10", "18"],
	Zero: ["3", "8", "14", "9", "19"],
	Exceed2: ["3", "8", "14", "9", "18"],
},
{
	title: "Witch Doctor", artist: "BanYa", bpm: "195",
	Prime: ["S4", "S6", "S10", "S16", "S19", "S21", "D19", "D22", "D23"],
	Fiesta2: ["S4", "S6", "S10", "S16", "S19", "S21", "D19", "D22", "D23"],
	FiestaEX: ["S4", "S6", "S10", "S16", "S19", "S21", "D19", "D22", "D23"],
	Fiesta: ["S16", "S19", "S21", "D19", "D22", "D23"],
	NXA: ["", "", "16", "", "23"], NXA_: ["", "19", "21", "19", "23"],
	NX2: ["", "", "17", "", "23"], NX2_: ["", "", "21", "", "22"],
	NX: ["", "", "15", "", "21"],
	Zero: ["", "", "17", "", "22"],
	// на Zero - анлок за миссию
},
{
	title: "Witch Doctor #1", artist: "Yahpp", bpm: "122",
	Prime: ["S2", "S5", "S8", "S9", "S15", "S16", "S18", "D17", "D19", "D20", "Sp3", "Dp7"],
	Fiesta2: ["S2", "S5", "S8", "S9", "S15", "S16", "S18", "D17", "D19", "D20", "Sp3", "Dp7"],
	FiestaEX: ["S2", "S5", "S8", "S9", "S15", "S16", "S18", "D17", "D19", "D20", "Sp3", "Dp7"],
	NXA: ["3", "7", "14", "5", "19"], NXA_: ["", "7", "18", "7", "20"],
	NX2: ["3", "7", "14", "5", "19"], NX2_: ["", "18", "20", "19", "21"],
	NX: ["3", "7", "14", "5", "18"],
},
{
	title: "With My Lover", artist: "BanYa", bpm: "124",
	NX: ["3", "", "10", "", "11"],
	Zero: ["3", "", "10", "", "11"],
},
{
	title: "Wuthering Heights", artist: "Eugene", channel: KPOP, bpm: "138",
	NX2: ["2", "4", "", "3", ""],
	NX: ["2", "4", "", "3", ""],
	Zero: ["2", "4", "", "3", ""],
},
{
	title: "X-Rave", artist: "DM Ashura", channel: WORLD, bpm: "147",
	Prime: ["S3", "S6", "S9", "S17", "D11", "D20(21)", "Sp2", "Dp6"],
	Fiesta2: ["S3", "S6", "S9", "S17", "D11", "D20(21)", "Sp2", "Dp6"],
	FiestaEX: ["S3", "S6", "S9", "S17", "D11", "D20(21)", "Sp2", "Dp6"],
},
{
	title: "X-Tree", artist: "Yahpp", bpm: "190",
	Prime: ["S3", "S7", "S12", "S20", "D14", "D18", "D22", "Sp2", "Dp3"],
	Fiesta2: ["S3", "S7", "S12", "S20", "D14", "D18", "D22", "Sp2", "Dp3"],
	FiestaEX: ["S3", "S7", "S12", "S20", "D14", "D18", "D22", "Sp2", "Dp3"],
	Fiesta: ["S7", "S12", "S20", "D14", "D18", "D22"],
},
{
	title: "X-Treme", artist: "BanYa", bpm: "162",
	Prime: ["S4", "S7", "S9", "S14", "S18", "D13", "D19"],
	Fiesta2: ["S4", "S7", "S9", "S14", "S18", "D13", "D19"],
	FiestaEX: ["S4", "S7", "S9", "S14", "S18", "D13", "D19"],
	Fiesta: ["S9", "S14", "D13", "D19"],
	NXA: ["5", "9", "14", "9", "19"],
	NX2: ["4", "7", "14", "9", "19"],
	NX: ["4", "7", "14", "9", "18"],
	Zero: ["5", "7", "14", "8", "19"],
	Exceed2: ["5", "7", "14", "8", "19"],
},
{
	title: "Xenesis", artist: "BanYa Production", bpm: "152",
	Prime: ["S4", "S7", "S10", "S18", "D12", "D15", "D18", "Sp1"],
	Fiesta2: ["S4", "S7", "S10", "S18", "D12", "D15", "D18", "Sp1"],
	FiestaEX: ["S4", "S7", "S10", "S18", "D12", "D15", "D18", "Sp1"],
	Fiesta: ["S4", "S7", "S10", "S18", "D12", "D15", "D18"],
},
{
	title: "Xi Bom Bom Bom", artist: "Los del ritimo", channel: WORLD, bpm: "148",
	Exceed2: ["1", "5", "8", "5", "9"],
},
{
	title: "Xuxa", artist: "Smiley", channel: WORLD, bpm: "160",
	Prime: ["S3", "S5", "S9", "S14", "D12", "D18", "Dp??(x2)"],
	Fiesta2: ["S3", "S5", "S9", "S14", "D12", "D18", "Dp??(x2)"],
},
{
	title: "Y2Z", artist: "Affinity", channel: WORLD, bpm: "162",
	Prime: ["S3", "S6", "S9", "S16", "D9", "D17"],
	Fiesta2: ["S3", "S6", "S9", "S16", "D9", "D17"],
},
{
	title: "Yeo rae a", artist: "SID-Sound", channel: ORIGINAL, bpm: "90",
	Prime: ["S1", "S3", "S5", "S13", "D5", "D12"],
},
{
	title: "Yog-Sothoth", artist: "Nato", channel: ORIGINAL, bpm: "200",
	Prime: ["S9", "S18", "S21", "S23", "D23", "D25", "Dp??(x3)"],
	notes: ["Dp?? unlock 1.01 on Prime"],
},
{
	title: "You Fell in Me", artist: "No Brain", channel: KPOP, bpm: "152",
	NXA: ["2", "6", "16", "8", "16"], NXA_: ["", "", "16", "", "17"],
	NX2: ["2", "6", "17", "8", "16"], NX2_: ["", "", "16", "", "18"],
},
{
	title: "Venus", artist: "Shinwa", bpm: "126",
	Prime: ["S2", "S3", "S5", "S14", "D6", "D14"],
	notes: ["unlock 1.05 on Prime"],
},

// SHORT

{
	title: "Bemera  [SHORT]", artist: "Yahpp", bpm: "210", duration: SHORT,
	Prime: ["S13", "S21", "S23", "D19"],
	Fiesta2: ["S13", "S21", "S23", "D19"],
	FiestaEX: ["S13", "S21", "S23", "D19"],
	Fiesta: ["S13", "S21", "S23", "D19"],
},
{
	title: "CHICKEN WING  [SHORT]", artist: "BanYa", bpm: "200", duration: SHORT,
	Prime: ["S20", "D13"],
	Fiesta2: ["S20", "D13"],
	FiestaEX: ["S20", "D13"],
	Fiesta: ["S20", "D13"],
},
{
	title: "Cleaner  [SHORT]", artist: "Doin", channel: ORIGINAL, bpm: "203", duration: SHORT,
	Prime: ["S21", "D20"],
	Fiesta2: ["S21", "D20"],
	FiestaEX: ["S21", "D20"],
},
{
	title: "Destination  [SHORT]", artist: "SHK", channel: ORIGINAL, bpm: "150", duration: SHORT,
	Prime: ["S9", "S15", "D18", "D20"],
	Fiesta2: ["S9", "S15", "D18", "D20"],
	FiestaEX: ["S9", "S15", "D18", "D20"],
	Fiesta: ["S9", "S15", "D18", "D20"],
},
{
	title: "Exceed 2 Opening", artist: "BanYa Production", bpm: "???", duration: SHORT,
	Prime: ["S15", "D19"],
	// D?? - это raw
	Fiesta2: ["S15", "D19", "D??(x10)"],
	FiestaEX: ["S15", "D19", "D??(x10)"],
	Fiesta: ["S15", "D19"],
},
{
	title: "Extravaganza  [SHORT]", artist: "BanYa", bpm: "195", duration: SHORT,
	Prime: ["S14", "D14", "D21", "Sp15"],
	Fiesta2: ["S14", "D14", "D21", "Sp15"],
	FiestaEX: ["S14", "D14", "D21", "Sp15"],
	Fiesta: ["S14", "D14", "D21", "Sp15"],
},
{
	title: "Flew Far Faster / FFF  [SHORT]", artist: "Doin", channel: ORIGINAL, bpm: "200", duration: SHORT,
	Prime: ["S18", "D21"],
	Fiesta2: ["S18", "D21"],
},
{
	title: "Final Audition 2  [SHORT]", artist: "BanYa", bpm: "130", duration: SHORT,
	Prime: ["S16", "D17"],
	Fiesta2: ["S16", "D17"],
	FiestaEX: ["S16", "D17"],
	Fiesta: ["D18"],
},
{
	title: "Final Audition 3  [SHORT]", artist: "BanYa", bpm: "130.5", duration: SHORT,
	Prime: ["S17", "D16"],
	Fiesta2: ["S17", "D16"],
	FiestaEX: ["S17", "D16"],
	Fiesta: ["D16"],
},
{
	title: "Final Audition Episode 2-X  [SHORT]", artist: "Yahpp", bpm: "170", duration: SHORT,
	Prime: ["S20", "D19"],
	Fiesta2: ["S20", "D19"],
	FiestaEX: ["S20", "D19"],
	Fiesta: ["D19"],
},
{
	title: "Ignis Fatuus (DM Ashura Mix)  [SHORT]", artist: "DM Ashura", channel: ORIGINAL, bpm: "220", duration: SHORT,
	Prime: ["S21", "D21"],
	Fiesta2: ["S21", "D21"],
},
{
	title: "K.O.A : Alice in Wonderworld  [SHORT]", artist: "BanYa Production", bpm: "156", duration: SHORT,
	Prime: ["S8", "S16", "D18"],
	Fiesta2: ["S8", "S16", "D18"],
	FiestaEX: ["S8", "S16", "D18"],
	Fiesta: ["S8", "S16"],
},
{
	title: "Love is a Danger Zone  [SHORT]", artist: "BanYa", bpm: "140", duration: SHORT,
	Prime: ["S13", "S20", "D17"],
	Fiesta2: ["S13", "S20", "D17"],
	FiestaEX: ["S13", "S20", "D17"],
	Fiesta: ["S13", "D17"],
},
{
	title: "Love is a Danger Zone pt. 2  [SHORT]", artist: "BanYa", bpm: "162", duration: SHORT,
	Prime: ["S8", "S19", "D21"],
	Fiesta2: ["S8", "S19", "D21"],
	FiestaEX: ["S8", "S19", "D21"],
	Fiesta: ["S8", "S19", "D21"],
},
{
	title: "Moonlight  [SHORT]", artist: "BanYa", bpm: "180", duration: SHORT,
	Prime: ["S16", "S18", "D20"],
	Fiesta2: ["S16", "S18", "D20"],
	FiestaEX: ["S16", "S18", "D20"],
	Fiesta: ["S16", "S18"],
},
{
	title: "Narcisista Por Excelencia  [SHORT]", artist: "PXNDX", bpm: "164", duration: SHORT,
	Prime: ["S17", "D18"],
},
{
	title: "NX Opening", artist: "Yahpp", bpm: "133", duration: SHORT,
	Prime: ["S16", "D17"],
	Fiesta2: ["S16", "D17"],
	FiestaEX: ["S16", "D17"],
	Fiesta: ["S16", "D17"],
},
{
	title: "Overblow  [SHORT]", artist: "MAX", channel: ORIGINAL, bpm: "155", duration: SHORT,
	Prime: ["S18", "D17"],
	Fiesta2: ["S18", "D17"],
	FiestaEX: ["S18", "D17"],
},
{
	title: "Passacaglia  [SHORT]", artist: "SynthWulf", channel: WORLD, bpm: "175", duration: SHORT,
	Prime: ["S17", "D18"],
	Fiesta2: ["S17", "D18"],
},
{
	title: "Pop The Track  [SHORT]", artist: "J-Mi & Midi-D & Ft. Hanna Stockzell", channel: WORLD, bpm: "160", duration: SHORT,
	Prime: ["S18", "D16"],
	Fiesta2: ["S18", "D16"],
},
{
	title: "PRIME Opening", artist: "MAX", channel: ORIGINAL, bpm: "128", duration: SHORT,
	Prime: ["S15", "D15", "Dp??(x5)"],
	notes: ["unlock 1.02 on Prime"],
},
{
	title: "Procedimientos Para Llegar A Un Comun Acuerdo  [SHORT]", artist: "PXNDX", bpm: "160", duration: SHORT,
	Prime: ["S18", "D16"],
	Fiesta2: ["S18", "D16"],
	FiestaEX: ["S18", "D16"],
	Fiesta: ["S18", "D16"],
},
{
	title: "Pumptris 8Bit ver.  [SHORT]", artist: "Yahpp", bpm: "162", duration: SHORT,
	Prime: ["S8", "S16", "D22"],
	Fiesta2: ["S8", "S16", "D22"],
	FiestaEX: ["S8", "S16", "D22"],
	Fiesta: ["S8", "S16"],
},
{
	title: "Rock the house  [SHORT]", artist: "Matduke", channel: ORIGINAL, bpm: "175", duration: SHORT,
	Prime: ["S15", "S18", "D20"],
},
{
	title: "Selfishness  [SHORT]", artist: "SID-Sound", channel: WORLD, bpm: "160", duration: SHORT,
	Prime: ["S17", "D18"],
	notes: ["unlock 1.03 on Prime"],
},
{
	title: "Solitary 2  [SHORT]", artist: "BanYa", bpm: "136", duration: SHORT,
	Prime: ["S18", "D17"],
	Fiesta2: ["S18", "D17"],
	FiestaEX: ["S18", "D17"],
	Fiesta: ["D17"],
},
{
	title: "Take Out  [SHORT]", artist: "SHK", channel: ORIGINAL, bpm: "170", duration: SHORT,
	Prime: ["S18", "D19"],
	Fiesta2: ["S18", "D19"],
	FiestaEX: ["S18", "D19"],
},
{
	title: "Trotpris  [SHORT]", artist: "Doin", channel: ORIGINAL, bpm: "156.118", duration: SHORT,
	Prime: ["S14", "D15"],
	Fiesta2: ["S14", "D15"],
	FiestaEX: ["S14", "D15"],
},
{
	title: "U Got Me Rocking  [SHORT]", artist: "MAX", channel: ORIGINAL, bpm: "128", duration: SHORT,
	Prime: ["S17", "D17"],
	Fiesta2: ["S17", "D17"],
},
{
	title: "Unique  [SHORT]", artist: "SHK", channel: ORIGINAL, bpm: "145", duration: SHORT,
	Prime: ["S18", "D16"],
	Fiesta2: ["S18", "D16"],
},
{
	title: "Winter  [SHORT]", artist: "BanYa", bpm: "168", duration: SHORT,
	Prime: ["S6", "S9", "S16", "D10", "D17"],
	Fiesta2: ["S6", "S9", "S16", "D10", "D17"],
	FiestaEX: ["S6", "S9", "S16", "D10", "D17"],
	Fiesta: ["S6", "S9", "S16", "D10"],
},
{
	title: "Witch Doctor  [SHORT]", artist: "BanYa", bpm: "195", duration: SHORT,
	Prime: ["S14", "S20", "D16"],
	Fiesta2: ["S14", "S20", "D16"],
	FiestaEX: ["S14", "S20", "D16"],
	Fiesta: ["S14", "D16"],
},
{
	title: "X-Rave  [SHORT]", artist: "DM Ashura", channel: WORLD, bpm: "147", duration: SHORT,
	Prime: ["S16", "D18"],
	Fiesta2: ["S16", "D18"],
	FiestaEX: ["S16", "D18"],
},
{
	title: "Yog-Sothoth  [SHORT]", artist: "Nato", channel: ORIGINAL, bpm: "200", duration: SHORT,
	Prime: ["S13", "S18", "S21", "D16", "D21"],
},

// REMIX

{
	title: "2nd Hidden Remix", duration: REMIX,
	NX2_: ["", "10", "11", "13", "16"],
},
{
	title: "45rpm & Eun Ji Won Remix", duration: REMIX,
	Fiesta2: ["S11", "D14", "Dp5"],
	FiestaEX: ["S11", "D14", "Dp5"],
	Fiesta: ["S11", "D14", "Dp5"],
	NXA_: ["", "", "11", "5", "14"],
},
{
	title: "Avalanquiem", artist: "MAX & Memme", channel: ORIGINAL, bpm: "175", duration: REMIX,
	Prime: ["S23", "D25"],
	notes: ["unlock 1.04 on Prime"],
},
{
	title: "B.P. Classic Remix", artist: "BanYa Production", bpm: "164", duration: REMIX,
	Prime: ["S12", "S18", "D13", "D19"],
	Fiesta2: ["S12", "S18", "D13", "D19"],
	FiestaEX: ["S12", "S18", "D13", "D19"],
	Fiesta: ["S12", "D13", "D19"],
},
{
	title: "B.P. Classic Remix 2", artist: "BanYa Production", bpm: "180", duration: REMIX,
	Prime: ["S11", "S18"],
	Fiesta2: ["S11", "S18"],
	FiestaEX: ["S11", "S18"],
	Fiesta: ["S11", "S18"],
},
{
	title: "Banya Classic Remix", artist: "BanYa", bpm: "162 ~ 170", duration: REMIX,
	Prime: ["S7", "S19", "D11", "D20"],
	Fiesta2: ["S7", "S19", "D20", "Dp11"],
	FiestaEX: ["S7", "S19", "D20", "Dp11"],
	Fiesta: ["S7", "S19", "D20", "Dp11"],
	NX2_: ["", "10", "19", "11", "21"],
},
{
	title: "BanYa Hip-Hop Remix", artist: "BanYa", bpm: "99", duration: REMIX,
	Prime: ["S6", "S7", "Dp6"],
	Fiesta2: ["S6", "S7", "Dp6"],
	FiestaEX: ["S6", "S7", "Dp6"],
	Fiesta: ["S6", "S7", "Dp6"],
	NXA_: ["", "3", "9", "7", ""],
	NX2_: ["", "7", "8", "7", ""],
},
{
	title: "BanYa-P Classic Mix", duration: REMIX,
	NX2_: ["", "14", "19", "15", "20"],
},
{
	title: "BanYa-P Guitar Remix", artist: "BanYa Production", bpm: "120", duration: REMIX,
	Prime: ["S22", "D24"],
	Fiesta2: ["S22", "D24"],
	FiestaEX: ["S22", "D24"],
	Fiesta: ["S22", "D24"],
	NXA_: ["", "", "22", "", "24"],
	NX2_: ["", "", "25", "", "25"],
},
{
	title: "Beethoven Influenza", artist: "BanYa & Warak", channel: ORIGINAL, bpm: "170", duration: REMIX,
	Prime: ["S18", "S21", "D21"],
},
{
	title: "Bemera", artist: "Yahpp", bpm: "210", duration: REMIX,
	Prime: ["S16", "S24", "D18", "D26"],
	Fiesta2: ["S16", "S24", "D18", "D26"],
	FiestaEX: ["S16", "S24", "D18", "D26"],
	Fiesta: ["S16", "S24", "D18", "D26"],
	NXA_: ["", "16", "24", "18", "25"],
	NX2_: ["", "15", "24", "18", "25"],
},
{
	title: "Big Metra Remix", artist: "Big metra", channel: WORLD, bpm: "105", duration: REMIX,
	Prime: ["S5", "S19", "D17"],
	Fiesta2: ["S5", "S19", "D17"],
	FiestaEX: ["S5", "S19", "D17"],
	Fiesta: ["S5", "S19", "D17"],
	NXA_: ["", "5", "19", "", "17"],
},
{
	title: "BIG to the BANG", artist: "Bigbang & MAX", channel: KPOP, bpm: "135", duration: REMIX,
	Prime: ["S17", "D17"],
	Fiesta2: ["S17", "D17"],
},
{
	title: "Caprice of DJ Otada", artist: "BanYa Production", bpm: "180", duration: REMIX,
	Prime: ["S11", "S19", "D22", "D25"],
	Fiesta2: ["S11", "S19", "D22", "D25"],
	FiestaEX: ["S11", "S19", "D22", "D25"],
	Fiesta: ["S11", "S19", "D22"],
	NXA_: ["", "11", "19", "", "22"],
},
{
	title: "Chicago Club Mix", duration: REMIX,
    // почему не заполнен?
},
{
	title: "Deux Remix", duration: REMIX,
	NX2_: ["", "7", "14", "8", ""],
},
{
	title: "Dr. K.O.A", artist: "BanYa Production", bpm: "156", duration: REMIX,
	Prime: ["S8", "S18", "D20"],
	Fiesta2: ["S8", "S18", "D20"],
	FiestaEX: ["S8", "S18", "D20"],
	Fiesta: ["S8", "S18", "D20"],
	NXA_: ["", "8", "18", "", "20"],
},
{
	title: "Drunken Family Remix", duration: REMIX,
	NX2_: ["", "6", "7", "6", ""],
},
{
	title: "Everybody Got 2 Know", artist: "MAX", channel: ORIGINAL, bpm: "128", duration: REMIX,
	Prime: ["S19", "D18"],
	// S?? – анлок, S19 без стопов
	Fiesta2: ["S??", "S19", "D18"],
	FiestaEX: ["S??", "S19", "D18"],
},
{
	title: "EXTRA BanYa Remix", artist: "BanYa", bpm: "200", duration: REMIX,
	Prime: ["S8", "S21", "D13"],
},
{
	title: "FAE1 & Chicken Wing Remix (NX2 ver.)", duration: REMIX,
	Fiesta2: ["S8", "S21", "D13"],
	FiestaEX: ["S8", "S21", "D13"],
	Fiesta: ["S8", "S21", "D13"],
	NXA_: ["", "8", "21", "13", ""],
	NX2_: ["", "10", "", "11", ""],
},
{
	title: "Groove Party", artist: "Tashannie & CLON", channel: KPOP, bpm: "105 ~ 110", duration: REMIX,
	Prime: ["S5", "S14", "D15", "Dp5"],
	Fiesta2: ["S5", "S14", "D15", "Dp5"],
	FiestaEX: ["S5", "S14", "D15", "Dp5"],
	Fiesta: ["S5", "S14", "D15", "Dp5"],
	NXA_: ["", "5", "14", "5", "15"],
	NX2_: ["", "7", "13", "6", "15"],
},
{
	title: "Hard Core Rock Mix", artist: "BanYa Production", bpm: "???", duration: REMIX,
	Prime: ["S18", "S21"],
	Fiesta2: ["S18", "S21"],
	FiestaEX: ["S18", "S21"],
	Fiesta: ["S18", "S21"],
},
{
	title: "History: We Are The Zest", duration: REMIX,
	Fiesta2: ["Sp6", "Dp5"],
	FiestaEX: ["Sp6", "Dp5"],
	Fiesta: ["Sp6", "Dp5"],
},
{
	title: "Infinity RMX", artist: "SynthWulf & MAX", channel: ORIGINAL, bpm: "175", duration: REMIX,
	Prime: ["S20", "D20"],
	Fiesta2: ["S20", "D20"],
},
{
	title: "J Knows That Old Bong", duration: REMIX,
	NXA_: ["", "8", "17", "", "18"],
},
{
	title: "Jam O Beat # No. 4", duration: REMIX,
	NXA_: ["", "", "16", "6", "16"],
},
{
	title: "K-POP Boy Group RMX", duration: REMIX,
	Fiesta2: ["D17"],
	FiestaEX: ["D17"],
},
{
	title: "K-Pop Dance Remix", duration: REMIX,
	NX2_: ["", "8", "15", "9", "17"],
},
{
	title: "K-Pop Girl Group RMX", duration: REMIX,
	Fiesta2: ["S14", "D15"],
	FiestaEX: ["S14", "D15"],
},
{
	title: "K-Pop Mix (Old & New)", duration: REMIX,
	Fiesta2: ["S7", "S13"],
	FiestaEX: ["S7", "S13"],
	Fiesta: ["S7", "S13"],
},
{
	title: "Lexy/1TYM Remix", duration: REMIX,
},
{
	title: "Love is a danger zone (try to B.P.M.)", artist: "BanYa", bpm: "140 ~ 169", duration: REMIX,
	Prime: ["S12", "S20", "D14", "D23"],
	Fiesta2: ["S12", "S20", "D14", "D23"],
	FiestaEX: ["S12", "S20", "D14", "D23"],
	Fiesta: ["S12", "S20", "D14", "D23"],
	NXA_: ["", "15", "19", "15", "22"],
	NX2_: ["", "14", "21", "16", "23"],
},
{
	title: "May Remix", duration: REMIX,
},
{
	title: "Money Fingers", duration: REMIX,
	Fiesta2: ["S8", "S16", "D9", "D17"],
	FiestaEX: ["S8", "S16", "D9", "D17"],
	Fiesta: ["S8", "S16", "D9", "D17"],
	NX2_: ["", "9", "14", "10", "18"],
},
{
	title: "Mr. Fire Fighter & Beat of the War 2", duration: REMIX,
},
{
	title: "Mr. Fire Fighter Falls in Love With Me", duration: REMIX,
	NXA_: ["", "8", "15", "9", ""],
},
{
	title: "msgoon RMX pt. 1", duration: REMIX,
	Fiesta2: ["S7", "S17", "D17"],
	FiestaEX: ["S7", "S17", "D17"],
	Fiesta: ["S7", "S17", "D17"],
	NXA_: ["", "7", "17", "", "17"],
},
{
	title: "msgoon RMX pt. 2", duration: REMIX,
	NXA_: ["", "5", "16", "5", ""],
},
{
	title: "msgoon RMX pt. 3", duration: REMIX,
	Fiesta2: ["S6", "S17", "D11", "D20"],
	FiestaEX: ["S6", "S17", "D11", "D20"],
	Fiesta: ["S6", "S17", "D11", "D20"],
	NXA_: ["", "6", "17", "11", "20"],
},
{
	title: "msgoon RMX pt. 5", duration: REMIX,
	Fiesta2: ["S17", "D17", "Sp3", "Dp4"],
	FiestaEX: ["S17", "D17", "Sp3", "Dp4"],
	Fiesta: ["S17", "D17", "Sp3", "Dp4"],
},
{
	title: "msgoon RMX pt. 6", artist: "msgoon", channel: ORIGINAL, bpm: "150", duration: REMIX,
	Prime: ["S20", "D19"],
	Fiesta2: ["S20", "D19"],
	FiestaEX: ["S20", "D19"],
	Fiesta: ["D19"],
},
{
	title: "msgoon RMX pt. 7", duration: REMIX,
	Fiesta2: ["S17", "Dp4"],
	FiestaEX: ["S17", "Dp4"],
	Fiesta: ["D17", "Dp4"],
},
{
	title: "Nina PXNDX Mix", artist: "Nina Pilots & PXNDX", channel: WORLD, bpm: "160", duration: REMIX,
	Fiesta2: ["S6", "S16", "D8"],
	FiestaEX: ["S6", "S16", "D8"],
	Fiesta: ["S6", "S16", "D8"],
	NXA_: ["", "6", "16", "8", ""],
},
{
	title: "Novarash", duration: REMIX,
	Fiesta2: ["S11", "S17", "D12"],
	FiestaEX: ["S11", "S17", "D12"],
	NX2_: ["", "8", "16", "10", ""],
},
{
	title: "Novasonic Mix ver. 3", duration: REMIX,
	Fiesta2: ["S6", "S17", "D19"],
	FiestaEX: ["S6", "S17", "D19"],
	Fiesta: ["S6", "S17", "D19"],
	NXA_: ["", "6", "17", "", "19"],
},
{
	title: "NX K-Pop Dance", duration: REMIX,
	Fiesta2: ["S8", "S14", "D9", "D16"],
	FiestaEX: ["S8", "S14", "D9", "D16"],
	Fiesta: ["S8", "S14", "D9", "D16"],
    // не надо объединить просто с K-Pop Dance?
},
{
	title: "NX2 Diva Remix", duration: REMIX,
	NXA_: ["", "4", "9", "5", ""],
	NX2_: ["", "4", "12", "5", ""],
},
{
	title: "NX2 K-Hip Hop Remix", duration: REMIX,
	NX2_: ["", "7", "14", "", "15"],
},
{
	title: "NX2 K-Pop Remix 1", duration: REMIX,
	NXA_: ["", "6", "13", "7", "16"],
	NX2_: ["", "8", "15", "9", "16"],
},
{
	title: "NX2 K-Pop Remix 2", duration: REMIX,
	NXA_: ["", "5", "", "", "15"],
	NX2_: ["", "7", "", "", "14"],
},
{
	title: "NX2 K-Pop Remix 3", duration: REMIX,
	NX2_: ["", "7", "13", "", "13"],
},
{
	title: "NXA Hip-Hop Mix", duration: REMIX,
	NXA_: ["", "6", "13", "4", ""],
},
{
	title: "PaPa helloizing", artist: "BanYa Production", bpm: "145 ~ 158", duration: REMIX,
	Prime: ["S8", "S19"],
	Fiesta2: ["S8", "S19"],
	FiestaEX: ["S8", "S19"],
	Fiesta: ["S8"],
},
{
	title: "Pop House Remix", duration: REMIX,
	NX2_: ["", "8", "15", "", "16"],
},
{
	title: "Pro Pop Mix (new remix)", duration: REMIX,
	Fiesta2: ["S17"],
	FiestaEX: ["S17"],
	Fiesta: ["S17"],
},
{
	title: "Pump It Up With You", duration: REMIX,
	Fiesta2: ["S17", "D17"],
	FiestaEX: ["S17", "D17"],
	Fiesta: ["S17", "D17"],
},
{
	title: "Set Up Me2 Mix", artist: "BanYa Production", bpm: "122", duration: REMIX,
	Prime: ["S17"],
	Fiesta2: ["S17"],
	FiestaEX: ["S17"],
	Fiesta: ["S17"],
},
{
	title: "Super Mackerel", artist: "Norazo & MAX", channel: KPOP, bpm: "150", duration: REMIX,
	Prime: ["S16", "D18"],
	Fiesta2: ["S16", "D18"],
},
{
	title: "Techno Repeatorment", artist: "BanYa", bpm: "150", duration: REMIX,
	Prime: ["S7", "S19", "D8"],
	Fiesta2: ["S7", "S19", "D8"],
	FiestaEX: ["S7", "S19", "D8"],
},
{
	title: "The People Didn't Know Pumping Up", artist: "BanYa Production", bpm: "134", duration: REMIX,
	Prime: ["S7", "D4", "D17"],
	Fiesta2: ["S7", "D4", "D17"],
	FiestaEX: ["S7", "D4", "D17"],
	Fiesta: ["S7", "D4", "D17"],
	NXA_: ["", "7", "", "4", "17"],
},
{
	title: "Treme-Vook of the War", artist: "BanYa", bpm: "184 ~ 202", duration: REMIX,
	Prime: ["S11", "S19", "D13", "D22"],
	Fiesta2: ["S11", "S19", "D13", "D22"],
	FiestaEX: ["S11", "S19", "D13", "D22"],
	Fiesta: ["S11", "S19", "D13", "D22"],
	NXA_: ["", "12", "18", "15", "22"],
	NX2_: ["", "13", "19", "16", "22"],
},
{
	title: "Turbo Remix", duration: REMIX,
	NX2_: ["", "9", "12", "10", ""],
},
{
	title: "Turkey Virus", duration: REMIX,
	Fiesta2: ["S8", "S15", "D11"],
	FiestaEX: ["S8", "S15", "D11"],
	Fiesta: ["S8", "S15", "D11"],
	NXA_: ["", "8", "15", "11", ""],
},
{
	title: "Ugly Duck Toccata", duration: REMIX,
	NXA_: ["", "12", "15", "", "16"],
},
{
	title: "Vacuum Cleaner", artist: "Doin", channel: ORIGINAL, bpm: "222.22", duration: REMIX,
	Prime: ["S15", "S20", "S25", "D27"],
	Fiesta2: ["S15", "S20", "S25", "D27"],
	FiestaEX: ["S15", "S20", "S25", "D27"],
},
{
	title: "What Are You Doin?", artist: "Doin & MAX", channel: ORIGINAL, bpm: "200", duration: REMIX,
	Prime: ["S19", "D24"],
	Fiesta2: ["S19", "D24"],
},
{
	title: "Wi-Ex Doc-Va", artist: "Yahpp", bpm: "195", duration: REMIX,
	Prime: ["S15", "S21", "D15", "D23"],
	Fiesta2: ["S15", "S21", "D15", "D23"],
	FiestaEX: ["S15", "S21", "D15", "D23"],
	Fiesta: ["S15", "S21", "D15", "D23"],
	NXA_: ["", "15", "21", "15", "23"],
	NX2_: ["", "16", "21", "19", "25"],
},
{
	title: "YG Remix", duration: REMIX,
	NXA_: ["", "5", "", "6", "15"],
},
{
	title: "Zero K-Hip Hop Remix", duration: REMIX,
	NX2_: ["", "8", "14", "7", ""],
},

// FULL

{
	title: "Adios  [FULL]", duration: FULL,
	NXA_: ["", "4", "15", "4", ""],
},
{
	title: "Astral Song  [FULL]", duration: FULL,
	NX2_: ["", "8", "", "", ""],
},
{
	title: "Bar Bar Bar  [FULL]", artist: "Crayon Pop", channel: KPOP, bpm: "134", duration: FULL,
	Prime: ["S16", "D15"],
},
{
	title: "Beat # No.4  [FULL]", artist: "HEaDTriP", channel: KPOP, bpm: "121", duration: FULL,
	Prime: ["S17", "D19", "Dp6"],
	Fiesta2: ["S17", "D19", "Dp6"],
	FiestaEX: ["S17", "D19", "Dp6"],
	Fiesta: ["S17", "D19", "Dp6"],
	NXA_: ["", "", "17", "6", "19"],
},
{
	title: "Beat of the War 2  [FULL]", artist: "Yahpp", bpm: "???", duration: FULL,
	Prime: ["S19", "D20"],
	Fiesta2: ["S19", "D20"],
	FiestaEX: ["S19", "D20"],
	Fiesta: ["S19", "D20"],
	NXA_: ["", "", "19", "", "20"],
	NX2_: ["", "", "19", "", "21"],
},
{
	title: "Can't Nobody  [FULL]", artist: "2NE1", channel: KPOP, bpm: "130", duration: FULL,
	Prime: ["S15", "D16"],
},
{
	title: "Canon-D  [FULL]", artist: "BanYa", bpm: "160", duration: FULL,
	Prime: ["S11", "S16", "D23"],
	Fiesta2: ["S11", "S16", "D23"],
	FiestaEX: ["S11", "S16", "D23"],
	Fiesta: ["S11", "S16", "D23"],
	NXA_: ["", "11", "16", "", ""],
	NX2_: ["", "15", "17", "", ""],
},
{
	title: "Change Myself  [FULL]", duration: FULL,
	NXA_: ["", "3", "14", "3", ""],
},
{
	title: "Chocolate  [FULL]", duration: FULL,
	NXA_: ["", "6", "15", "8", ""],
},
{
	title: "Chopsticks Challenge  [FULL]", artist: "Yahpp", bpm: "128", duration: FULL,
	Prime: ["S15", "D19"],
	Fiesta2: ["S15", "D19"],
	FiestaEX: ["S15", "D19"],
	Fiesta: ["S15", "D19"],
	NXA_: ["", "", "15", "3", "19"],
},
{
	title: "Come Back Home  [FULL]", duration: FULL,
	NXA_: ["1", "3", "", "4", ""],
	NX2_: ["1", "4", "", "4", ""],
},
{
	title: "Come On!  [FULL]", duration: FULL,
	NXA_: ["", "6", "", "6", ""],
},
{
	title: "Crashday  [FULL]", artist: "Crash", channel: KPOP, bpm: "220", duration: FULL,
	Prime: ["S22", "D22"],
	Fiesta2: ["S22", "D22"],
	FiestaEX: ["S22", "D22"],
},
{
	title: "Crazy  [FULL]", duration: FULL,
	NXA_: ["", "3", "13", "3", ""],
},
{
	title: "Dawn of the Apocalypse  [FULL]", artist: "Vassline", channel: KPOP, bpm: "???", duration: FULL,
	Prime: ["S15", "S21"],
	Fiesta2: ["S15", "S21"],
	FiestaEX: ["S15", "S21"],
	Fiesta: ["S15"],
},
{
	title: "Deja Vu  [FULL]", artist: "SOM2", channel: KPOP, bpm: "115", duration: FULL,
	Prime: ["S7", "S16", "D16"],
	Fiesta2: ["S7", "S16", "D16"],
	FiestaEX: ["S7", "S16", "D16"],
	Fiesta: ["S7", "S16", "D16"],
},
{
	title: "Digan Lo Que Digan  [FULL]", artist: "Nina Pilots", channel: WORLD, bpm: "162", duration: FULL,
	Prime: ["S7", "S18"],
	Fiesta2: ["S7", "S18"],
	FiestaEX: ["S7", "S18"],
	Fiesta: ["S7", "S18"],
	NXA_: ["", "7", "18", "9", ""],
},
{
	title: "Dignity  [FULL]", artist: "Crash", channel: KPOP, bpm: "195", duration: FULL,
	Prime: ["S13", "S19", "D16", "D22"],
	Fiesta2: ["S13", "S19", "D16", "D22"],
	FiestaEX: ["S13", "S19", "D16", "D22"],
	Fiesta: ["S13", "S19", "D16", "D22"],
	NXA_: ["", "14", "19", "16", "22"],
	NX2_: ["", "13", "20", "16", "22"],
},
{
	title: "Energy  [FULL]", duration: FULL,
	Fiesta2: ["S15"],
	FiestaEX: ["S15"],
},
{
	title: "Enter the Dragon  [FULL]", artist: "JTL", duration: FULL,
	Fiesta2: ["S17", "D18", "Dp3"],
	FiestaEX: ["S17", "D18", "Dp3"],
	Fiesta: ["S17", "D18", "Dp3"],
	NXA_: ["", "", "17", "3", "18"],
},
{
	title: "Fantastic Baby  [FULL]", artist: "Bigbang", channel: KPOP, bpm: "130", duration: FULL,
	Prime: ["S17", "D15"],
	Fiesta2: ["S17", "D15"],
},
{
	title: "Feel the Soul  [FULL]", duration: FULL,
	NX2_: ["", "", "18", "", ""],
},
{
	title: "Fire  [FULL]", artist: "2NE1", duration: FULL,
	Fiesta2: ["S14"],
	FiestaEX: ["S14"],
	Fiesta: ["S14"],
},
{
	title: "Fire  [FULL]", artist: "Yahpp", duration: FULL,
	NX2_: ["", "", "19", "", "20"],
},
{
	title: "Fly  [FULL]", artist: "Epik High", duration: FULL,
	Fiesta2: ["S10", "S15", "D16", "D17"],
	FiestaEX: ["S10", "S15", "D16", "D17"],
	Fiesta: ["S10", "S15", "D16", "D17"],
	NX2_: ["", "10", "15", "", "17"],
},
{
	title: "Forward  [FULL]", artist: "DJ Missill", duration: FULL,
	Fiesta2: ["S4", "S15", "D5"],
	FiestaEX: ["S4", "S15", "D5"],
	Fiesta: ["S4", "S15", "D5"],
	NXA_: ["", "4", "15", "5", ""],
},
{
	title: "Guitar Man  [FULL]", duration: FULL,
	NX2_: ["", "8", "", "9", ""],
},
{
	title: "Heart Breaker  [FULL]", artist: "G-Dragon", channel: KPOP, bpm: "135", duration: FULL,
	Prime: ["S16", "D16"],
},
{
	title: "Hold the Line  [FULL]", duration: FULL,
	NX2_: ["", "7", "16", "8", "18"],
},
{
	title: "Hot Issue  [FULL]", duration: FULL,
	Fiesta2: ["S9", "S14", "D16"],
	FiestaEX: ["S9", "S14", "D16"],
},
{
	title: "I'm the Best  [FULL]", artist: "2NE1", channel: KPOP, bpm: "128", duration: FULL,
	Prime: ["S18", "D14"],
	Fiesta2: ["S18", "D14"],
},
{
	title: "Interference  [FULL]", artist: "Doin", channel: ORIGINAL, bpm: "180", duration: FULL,
	Prime: ["S18", "D15", "D18"],
	Fiesta2: ["S18", "D15", "D18"],
	FiestaEX: ["S18", "D15", "D18"],
},
{
	title: "It's My Business  [FULL]", duration: FULL,
	NX2_: ["", "8", "19", "", "20"],
},
{
	title: "La La La  [FULL]", artist: "Big Bang", duration: FULL,
	Fiesta2: ["S4", "S14"],
	FiestaEX: ["S4", "S14"],
	Fiesta: ["S4", "S14"],
	NXA_: ["", "4", "14", "4", ""],
},
{
	title: "Like A Man  [FULL]", artist: "Outsider", channel: KPOP, bpm: "180", duration: FULL,
	Prime: ["S19", "D19"],
	Fiesta2: ["S19", "D19"],
	FiestaEX: ["S19", "D19"],
},
{
	title: "Love is a Danger Zone 2  [FULL]", artist: "Yahpp", bpm: "100 ~ 162", duration: FULL,
	Prime: ["S19", "D21"],
	Fiesta2: ["S19", "D21"],
	FiestaEX: ["S19", "D21"],
	Fiesta: ["S19", "D21"],
	NXA_: ["", "", "19", "", "21"],
	NX2_: ["", "", "19", "", "21"],
},
{
	title: "Lovely  [FULL]", duration: FULL,
	NX2_: ["", "6", "", "7", ""],
},
{
	title: "Magic Girl  [FULL]", duration: FULL,
	Fiesta2: ["S12"],
	FiestaEX: ["S12"],
},
{
	title: "Monkey Fingers  [FULL]", duration: FULL,
	NXA_: ["", "8", "16", "9", "17"],
	NX2_: ["5", "9", "17", "7", "19"],
},
{
	title: "Narcisista Por Excelencia  [FULL]", artist: "PXNDX", duration: FULL,
	Fiesta2: ["S17", "D18"],
	FiestaEX: ["S17", "D18"],
	Fiesta: ["S17", "D18"],
},
{
	title: "No.3  [FULL]", artist: "Bae Chi Gi", channel: KPOP, bpm: "128", duration: FULL,
	Prime: ["S17", "D18"],
	Fiesta2: ["S17", "D18"],
	FiestaEX: ["S17", "D18"],
},
{
	title: "No Despair  [FULL]", duration: FULL,
	NX2_: ["", "7", "18", "", "20"],
},
{
	title: "Panuelito Rojo  [FULL]", artist: "Big Metra", channel: WORLD, bpm: "98", duration: FULL,
	Prime: ["S9", "S16", "D18"],
	Fiesta2: ["S9", "S16", "D18"],
	FiestaEX: ["S9", "S16", "D18"],
	Fiesta: ["S9", "S16", "D18"],
	NXA_: ["", "9", "16", "", "18"],
},
{
	title: "Procedimientos Para Llegar A Un Comun Acuerdo  [FULL]", artist: "PXNDX", bpm: "160", duration: FULL,
	Prime: ["S6", "S17", "D7"],
	Fiesta2: ["S6", "S17", "D7"],
	FiestaEX: ["S6", "S17", "D7"],
	Fiesta: ["S6", "S17", "D7"],
	NXA_: ["", "6", "17", "7", ""],
},
{
	title: "Ring Ding Ding  [FULL]", duration: FULL,
	Fiesta2: ["S16", "D17"],
	FiestaEX: ["S16", "D17"],
},
{
	title: "Shanghai Romance  [FULL]", artist: "Orange Caramel", channel: KPOP, bpm: "149", duration: FULL,
	Prime: ["S17", "D16"],
	Fiesta2: ["S17", "D16"],
},
{
	title: "Shock  [FULL]", duration: FULL,
	Fiesta2: ["S17", "D15"],
	FiestaEX: ["S17", "D15"],
},
{
	title: "Slightly  [FULL]", artist: "45rpm & msgoon", duration: FULL,
	Fiesta2: ["S5", "S17"],
	FiestaEX: ["S5", "S17"],
	Fiesta: ["S5", "S17"],
	NXA_: ["", "5", "17", "5", ""],
},
{
	title: "Step  [FULL]", artist: "KARA", channel: KPOP, bpm: "123", duration: FULL,
	Prime: ["S15", "D17"],
	Fiesta2: ["S15", "D17"],
},
{
	title: "Sugar Free  [FULL]", artist: "T-ara", channel: KPOP, bpm: "128", duration: FULL,
	Prime: ["S15", "D15"],
	notes: ["unlock 1.01 on Prime"],
},
{
	title: "Tell Me  [FULL]", duration: FULL,
	NXA_: ["", "2", "", "3", ""],
	NX2_: ["", "5", "", "5", ""],
},
{
	title: "Trato De No Trabarme  [FULL]", artist: "Big metra", channel: WORLD, bpm: "105", duration: FULL,
	Prime: ["S10", "S22", "D24"],
	Fiesta2: ["S10", "S22", "D24"],
	FiestaEX: ["S10", "S22", "D24"],
	Fiesta: ["S10", "S22", "D24"],
	NXA_: ["", "10", "23", "", "25"],
},
{
	title: "U  [FULL]", duration: FULL,
	NXA_: ["", "3", "15", "3", ""],
},
{
	title: "U Inside My Dim Memory  [FULL]", duration: FULL,
	NX2_: ["", "9", "15", "10", "19"],
},
{
	title: "V.I.P  [FULL]", duration: FULL,
	NXA_: ["1", "4", "", "4", ""],
	NX2_: ["2", "6", "", "6", ""],
},
{
	title: "Very Old Couples  [FULL]", duration: FULL,
	NX2_: ["", "6", "14", "", ""],
},
{
	title: "Wanna  [FULL]", artist: "Kara", duration: FULL,
	Fiesta2: ["S16"],
	FiestaEX: ["S16"],
	Fiesta: ["S16"],
},
];

function ParseLevelNum( levelStr )
{
	var levelSubst_Match = levelStr.match( /(.*)\s*\((\d+)\)/ );
	if( levelSubst_Match )
		return { indicator: levelSubst_Match[ 1 ],  indicatedLevel: parseInt( levelSubst_Match[ 1 ] ),  realLevel: parseInt( levelSubst_Match[ 2 ] ) };

	var couple_Match = levelStr.match( /(.*)\s*\(x(\d+)\)/ );
	if( couple_Match )
		return { indicator: couple_Match[ 1 ],  indicatedLevel: parseInt( couple_Match[ 1 ] ),  players: parseInt( couple_Match[ 2 ] ) };

	return { indicator: levelStr,  indicatedLevel: parseInt( levelStr ),  realLevel: parseInt( levelStr ) };
}



function PreprocessTracklist()
{
	function PreprocessOldStyleCharts( arcadeCharts, anotherCharts )
	{
		var result = [];
		var tagTypes = [ SINGLE, SINGLE, SINGLE, DOUBLE, DOUBLE ];

		function PreprocessStation( inCharts, zone, tags )
		{
			if( ! inCharts )
				return;

			for( var i = 0;  i < tagTypes.length;  ++i )
				if( inCharts[ i ] != "" )
				{
					var chart = ParseLevelNum( inCharts[ i ] );
					chart.tag = tags[ i ];
					chart.type = ( chart.players  ?  COUPLE  :  tagTypes[ i ] );
					chart.zone = zone;
					result.push( chart );
				}
		}

		PreprocessStation( arcadeCharts, "Arcade", [ "NL", "HD", "CZ", "FS", "NM" ] );
		PreprocessStation( anotherCharts, "Special", ["aNL","aHD","aCZ","aFS","aNM" ] );

		return( result.length > 0  ?  result  :  undefined );
	}

	
	function PreprocessNewStyleChart( result, inChart )
	{
		for( var prefix of [ "Sp", "S", "Dp", "D" ] )
			if( inChart.indexOf( prefix ) === 0 )
			{
				var chart = ParseLevelNum( inChart.substring( prefix.length ) );
				chart.tag = prefix;
				chart.type = ( chart.players  ?  COUPLE  :  ( prefix[0] === "S"  ?  SINGLE  :  DOUBLE ) );
				result.push( chart );
				break;
			}
	}


	function PreprocessNewStyleCharts( inCharts )
	{
		if( ! inCharts )
			return;

		var result = [];

		for( var inChart of inCharts )
			PreprocessNewStyleChart( result, inChart );

		return result;
	}

	function PreprocessStringCharts( track, mixID )
	{
		var chartsStr = track[ mixID ];
		if( ! chartsStr )
			return;

		var charts = chartsStr.split( " " );
		for( var chart of charts )
		if( chart[0] === "=" )
		{
			var fromMixID = chart.substr( 1 );
			if( fromMixID === "" )
				fromMixID = GetPreviousMixID( mixID );
			//track[ mixID ] = track[ fromMixID ].slice();
			//track[ mixID ] = JSON.decode( JSON.encode( track[ fromMixID ] ) );
			//track[ mixID ] = DeepCopy( track[ fromMixID ] );
			track[ mixID ] = JSON.parse( JSON.stringify( track[ fromMixID ] ) );
		}
		else if( chart[0] === "+" )
		{
			PreprocessNewStyleChart( track[ mixID ], chart.substring( 1 ) );
		}
/*	
		var mix = mixes[ mixID ];
		
		if( mix.style === "old" )
		{
		}
		else
		{
		}
*/

		
		// split by whitespaces
		// if =
			// copy (mix after = or previous mix if empty)
		// if +
			// add chart after +
	}


	function PreprocessListCharts( track, mixID )
	{
		var mix = mixes[ mixID ];

		if( mix.style === "old" )
		{
			var charts = PreprocessOldStyleCharts( track[ mixID ], track[ mixID + "_" ] );
			if( charts )
				track[ mixID ] = charts;
			else
				delete track[ mixID ];
			delete track[ mixID + "_" ];
		}
		else
		{
			var charts = PreprocessNewStyleCharts( track[ mixID ] );
			if( charts )
				track[ mixID ] = charts;
			else
				delete track[ mixID ];
		}
	}


	for( var track of tracklist )
	{
		if( ! track.duration )
			track.duration = STANDARD;

		for( var mixID in mixes )
		{
			if( typeof track[ mixID ] === "string" )
				PreprocessStringCharts( track, mixID );
			else
				PreprocessListCharts( track, mixID );
		}
	}
}


PreprocessTracklist();


function GetTrackFirstMix( track )
{
	if( track.from )
		return track.from;

	for( var mixID in mixes )
		if( track[ mixID ] )
			return mixID;
}


function GetTrackChannel( track )
{
	return ( track.channel  ?  track.channel  :   knownArtists[ track.artist ] );
}


var chartFilter = {
	//mixID: "NXA",

	type: SINGLE,
	'old': { zone: ARCADE, duration: STANDARD },
	'new': { duration: STANDARD },
	
	//duration,  // <undefined> [default], Remix, Full
	//zone: ARCADE, // Arcade, Special

	levelMin: 0,
	levelMax: 26,

	CheckAddTrack: function( track )
	{
		if ( track.duration != chartFilter[ mixes[ chartFilter.mixID ].style ].duration )
			return;

		function CheckAddChart( chart )
		{
			var realLevelMatches = true;
			var indicatedLevelMatches = true;

			if( chart.type != COUPLE )
			{
				realLevelMatches = ( chartFilter.levelMin <= chart.realLevel  &&  chart.realLevel <= chartFilter.levelMax );
				indicatedLevelMatches = ( chartFilter.levelMin <= chart.indicatedLevel  &&  chart.indicatedLevel <= chartFilter.levelMax );
				if( ! realLevelMatches  &&  ! indicatedLevelMatches )
					return;
			}

			if( mixes[ chartFilter.mixID ].type === "old" )
				if( chart.zone != chartFilter.old.zone )
					return;

			chartFilter.list.push( {
				chart: chart,
				track: track,
				realLevelMatches: realLevelMatches,
				indicatedLevelMatches: indicatedLevelMatches, } );
		}


		var charts = track[ chartFilter.mixID ];
		if( typeof charts === 'undefined' )
			return;

		for( var chart of charts )
			if( chartFilter.type === chart.type )
				CheckAddChart( chart );

	},

	UpdateList: function()
	{
		chartFilter.list = [];

		if( ! chartFilter.mixID )
			return;

		for( var track of tracklist )
			chartFilter.CheckAddTrack( track );
	}
}
