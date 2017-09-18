"use strict";


var knownArtists = {
	"BanYa": ORIGINAL,
	"BanYa Production": ORIGINAL,
	"Yahpp": ORIGINAL,

	"Big Bang": KPOP,
	"Eun Ji Won": KPOP,
	"Novasonic": KPOP,
	"Crying Nut": KPOP,
	"2NE1": KPOP,
	"Kara": KPOP,
	"Seo Taiji": KPOP,
	"Taiji Boys": KPOP,
	"Epik High": KPOP,

	"PXNDX": WORLD,
};

/*
Формат строки степчарта, пример
Prime: "= -S10  @1.51 D13 Dp??(x3)"

'=' означает, что все или часть чартов (т.е. трек) перенесли из предыдущего микса.
    Если бы трек взяли не из предыдущего микса, а из более давнего (например, Fiesta),
    можно было бы указать '=Fiesta'.
'-S10' означает, что убрали чарт S10.
'@1.51' означает, что дальше описываются изменения в патче 1.51.
'D13' означает, что добавили чарт D13 (в патче).
'Dp??(x3)' означает, что добавили дабл перформанс, который является каплом на три человека.
'S13.cz' означает, что взят cz из последнего олд-стайл микса
'S13.cz.Zero' означает, что взят cz из зеро
	аналогично 'S15.S14.fiesta' означает, что взяли S14 из фиесты и назначили оценку 15

ID треков берутся из
	https://en.wikipedia.org/wiki/List_of_Pump_It_Up_songs
	https://en.wikipedia.org/wiki/Pump_It_Up_(video_game_series)
	http://www.ph-online.net/cgi-bin/ib3/ikonboard.cgi?act=ST;f=18;t=13117
*/

var tracklist = {

// unsorted

"1550":
{
	title: "Gotta Be You", artist: "2NE1", bpm: "130",
	Prime2: "@1.08 S3 S5 S8 S15 D6 D16 S17 D18",
},

"15C4+_Fallen_Angel":
{
	//altID: "",
	title: "Fallen Angel", artist: "DM Ashura", channel: WORLD, bpm: "157",
	Prime2: "@1.08 S6 S10 S17 D10 D15 D21 D20.ampass",
},

"15F3+_Shub_Niggurath_SHORT":
{
	//altID: "",
	title: "Shub Niggurath  [SHORT]", artist: "Nato", channel: ORIGINAL, bpm: "220",
	Prime2: "@1.08 S18 S22 D23",
},

/*

"15xx":
{
	//altID: "",
	title: "", artist: "", channel: , bpm: "",
	Prime2: "@1.",
},

*/


// \15 - Prime 2

"1501":
{
	title: "Last Rebirth", artist: "SHK", channel: ORIGINAL, bpm: "120",
	Prime2: "S3 S5 S8 S13 S15.ampass D7 D14 D16.ampass  Dp3  @1.05 D18.ampass",
},

// "1502":

"1503":
{
	title: "Hellfire", artist: "Memme", channel: ORIGINAL, bpm: "170",
	Prime2: "S7 S11 S15 S18.ampass D9 D19.ampass D23  @1.06 Dp4",
},

// "1504":
// "1505":
// "1506":

"1507":
{
	title: "God Mode feat. skizzo", artist: "Nato", channel: ORIGINAL, bpm: "152",
	Prime2: "S5 S8 S13 S18 S20.ampass D9 D17 D21.ampass  @1.06 Dp4",
},

"1508":
{
	altID: "15_Shub_Niggurath",
	title: "Shub Niggurath", artist: "Nato", channel: ORIGINAL, bpm: "220",
	Prime2: "@1.06 S11 S15 S19 D17 S21 S24 D23 D26",
},

"1509":
{
	title: "Further", artist: "Doin", channel: ORIGINAL, bpm: "194",
	Prime2: "S10 S18 S22 S24.ampass D14 D22 D25.ampass  @1.06 Dp3",
},

// "1510":
// "1511":

"1512":
{
	title: "Bring Back the Beat", artist: "Lunatic Sounds", channel: ORIGINAL, bpm: "160",
	Prime2: "S7 S12 S17 D8 D19.ampass  @1.06 Dp5  @1.07 S19.ampass",
},
// "1513":
// "1514":
// "1515":

"1516":
{
	title: "Sarabande", artist: "MAX", channel: ORIGINAL, bpm: "157",
	Prime2: "S2 S4 S7 S16 S18.ampass D11 D18 D20.ampass  @1.06 Dp4",
},

"1517":
{
	title: "Kasou Shinja", artist: "MAX", channel: ORIGINAL, bpm: "170",
	Prime2: "@1.02 S4 S7 S9 S16 S18 S20 D12 D19 D23.ampass  @1.06 CoOp(x2).ampass",
},

"1518":
{
	altID: "15_Overblow2",
	title: "Overblow2", artist: "Max", channel: ORIGINAL, bpm: "155",
	Prime2: "@1.07 S5 S9 S15 D7 D14 S18.ampass D19.ampass",
},

// "1519":
// "1520":
// "1521":
// "1522":
// "1523":
// "1524":

"1525":
{
	title: "Arcana Force", artist: "mzet:-P", channel: ORIGINAL, bpm: "175",
	Prime2: "S4 S9 S16 S20.ampass D10 D17 D20.ampass  @1.06 Dp2",
},

"1526":
{
	altID: "15_Allegro_Furioso",
	title: "Allegro Furioso", artist: "DM Ashura", channel: ORIGINAL, bpm: "176",
	Prime2: "@1.04 S5 S10 S13 S17 D14 S20 D20",
},

// "1527":
// "1528":
// "1529":

"1530":
{
	altID: "15_Utsushiyo_No_Kaze",
	title: "Utsushiyo No Kaze feat. Kana", artist: "void", channel: ORIGINAL, bpm: "152",
	Prime2: "@1.05 S7 S11 S16 D11 D19 S20.ampass D18.ampass",
},

// "1531":
// "1532":

"1533":
{
	altID: "15_Hey_U",
	title: "Hey U", artist: "Mazo", channel: ORIGINAL, bpm: "162",
	Prime2: "@1.07 S5 S10 S15 D10 D16",
},

// "1534":
// "1535":
// "1536":
// "1537":
// "1538":
// "1539":
// "1540":
// "1541":
// "1542":
// "1543":

"1544":
{
	title: "Bang Bang Bang", artist: "Big Bang", bpm: "135",
	Prime2: "S1 S3 S5 S10 S15 D6 D16 D20.ampass Sp3  @1.06 Dp3",
},

"1545":
{
	title: "Me Gustas Tu", artist: "Gfriend", channel: KPOP, bpm: "106",
	Prime2: "S2 S4 S6 S13 S15.ampass D6 D14 D16 D19.ampass Dp4",
},

"1546":
{
	title: "Rhythm Ta", artist: "iKon", channel: KPOP, bpm: "82",
	Prime2: "S2 S4 S7 S10 S15 D5 D11 D17.ampass  @1.06 Dp4",
},

"1547":
{
	title: "Chase Me", artist: "Dreamcatcher", channel: KPOP, bpm: "200",
	Prime2: "@1.02 S3 S5 S9 S15 S18 D11 D19 S21.ampass D23.ampass CoOp(x2)",
},

"1548":
{
	title: "Pick Me", artist: "Produce 101", channel: KPOP, bpm: "128",
	Prime2: "S1 S3 S5 S8 S13 S15.ampass D6 D10 D16 Dp3 CoOp(x2).ampass  @1.06 D20.ampass",
},

"1549":
{
	title: "Jackpot", artist: "Block B", channel: KPOP, bpm: "130",
	Prime2: "S1 S3 S6 S9 S15 D6 D15  @1.06 Dp3",
},

// "1550":

"1551":
{
	title: "Boombayah", artist: "Black Pink", channel: KPOP, bpm: "125",
	Prime2: "S2 S4 S6 S9 S13 S16.ampass D7 D15 D17.ampass CoOp(x2)  @1.06 Dp3",
},

"1552":
{
	altID: "15_Sober",
	title: "Sober", artist: "Big Bang", bpm: "130",
	Prime2: "@1.06 S2 S4 S7 S13 D3 D14 S17.ampass D17.ampass CoOp(x2).ampass",
},

"1553":
{
	title: "Up & Down", artist: "EXID", channel: KPOP, bpm: "112",
	Prime2: "S2 S4 S7 S9 S15 S17.ampass D5 D15 CoOp(x2).ampass  @1.06 Dp5",
},

"1554":
{
	altID: "15_Good_Night",
	title: "Good Night", artist: "Dreamcatcher", channel: KPOP, bpm: "196",
	Prime2: "@1.04 S3 S5 S9 S17 D5 D19 S20 S23 D22 D24",
},

"1555":
{
	title: "You're the Best", artist: "Mamamoo", channel: KPOP, bpm: "122",
	Prime2: "S2 S4 S6 S10 S15 D7 D10 D16.ampass  @1.06 Dp2",
},

"1556":
{
	title: "Number Nine", artist: "T-ara", channel: KPOP, bpm: "128",
	Prime2: "S3 S5 S8 S11 S13 S15.ampass D8 D15 D17.ampass  @1.06 Dp4",
},

"1557":
{
	title: "Acquaintance", artist: "Outsider", channel: KPOP, bpm: "130",
	Prime2: "S3 S7 S9 S17 S20.ampass D7 D18 D21.ampass CoOp(x2)  @1.06 Dp4",
},

// "1558":
// "1559":
// "1560":
// "1561":
// "1562":
// "1563":

"1564":
{
	title: "Moon Light Dance", artist: "TatshMusicCircle", channel: JMUSIC, bpm: "182",
	Prime2: "S3 S7 S11 S14 S17.ampass D4 D15 D19.ampass  @1.06 Dp4",
},

// "1565":
// "1566":
// "1567":
// "1568":
// "1569":
// "1570":
// "1571":
// "1572":
// "1573":
// "1574":

"1575":
{
	title: "Step", artist: "S.I.D-Sound", channel: WORLD, bpm: "156",
	Prime2: "@1.02 S7 S13 S17 D12 D18 D20.ampass",
},

"1576":
{
	title: "Just Kiddin", artist: "Vospi", channel: WORLD, bpm: "125",
	Prime2: "@1.01 S5 S13 S16 D9  D18.ampass  @1.06 Dp5",
},

// "1577":
// "1578":
// "1579":
// "1580":
// "1581":
// "1582":
// "1583":

"1584":
{
	altID: "15_Hush",
	title: "HUSH", artist: "Yassi Pressman & Nadine Lustre", channel: WORLD, bpm: "82", region: PHILIPPINES,
	Prime2: "@1.03 S3 S5 S8 S14 D6 D15",
},

// "1585":
// "1586":
// "1587":
// "1588":
// "1589":
// "1590":
// "1591":
// "1592":
// "1593":
// "1594":
// "1595":
// "1596":

"1597":
{
	altID: "15_Helix",
	title: "Helix", artist: "ESTi", channel: XROSS, bpm: "175",
	Prime2: "@1.03 S5 S7 S11 S16 S18 D11 D15 S19.ampass D19.ampass",
},

"1598":
{
	altID: "15_Hyperion",
	title: "Hyperion", artist: "M2U", channel: XROSS, bpm: "145",
	Prime2: "@1.03 S5 S9 S14 D11 D18 S18.ampass D20.ampass",
},

// "15A0":
// "15A1":

"15A2":
{
	altID: "15_Start_On_Red",
	title: "Start On Red", artist: "Nato", channel: XROSS, bpm: "160",
	Prime2: "@1.05 S4 S8 S11 S15 D12 S19 D20",
},

// "15A3":

"15A4":
{
	altID: "15_Magical_Vacation",
	title: "Magical Vacation", artist: "S.I.D-Sound", channel: XROSS, bpm: "154",
	Prime2: "@1.06 S6 S11 S16 D7 D13 S19.ampass D18.ampass",
},

// "15A5":

"15A6":
{
	title: "Death Moon", artist: "SHK", channel: XROSS, bpm: "160",
	Prime2: "S3 S6 S10 S14 S17 S19.ampass D7 D17 D21.ampass CoOp(x2)  @1.06 Dp3",
},

"15A7":
{
	altID: "15_Super_Stylin",
	title: "Super Stylin'", artist: "Warak", channel: XROSS, bpm: "146",
	Prime2: "@1.04 S7 S9 S11 S17 D9 D12 D17.ampass",
},

"15A8":
{
	title: "Christmas Memories", artist: "Beautiful Day remixed by Warak", channel: XROSS, bpm: "170",
	Prime2: "S3 S5 S8 S14 D9 D15 CoOp(x2)  @1.06 Dp4",
},

"15B0":
{
	title: "Asterios -ReEntry-", artist: "ATAS (NaSch)", channel: XROSS, bpm: "148",
	Prime2: "S4 S6 S11 S14 S17 S19.ampass D8 D18 D21.ampass CoOp(x2).ampass  @1.06 Dp3",
},

"15B1":
{
	title: "Le Grand Bleu", artist: "KIEN", channel: XROSS, bpm: "165",
	Prime2: "S7 S12 S16 S18.ampass D9 D18 D20.ampass  @1.06 Dp6",
},

// "15B2":
// "15B3":
// "15B4":

"15B5":
{
	altID: "15_Bedlam",
	title: "Bedlam", artist: "SANY-ON", channel: XROSS, bpm: "183",
	Prime2: "@1.07 S8 S15 S18 D13 D20 S22 D24",
},

// "15B6":

"15B7":
{
	title: "Clue", artist: "Transin", channel: XROSS, bpm: "140",
	Prime2: "@1.01 S4 S8 S12 S16 D10 D18  S18.ampass D20.ampass  @1.06 Dp4",
},

"15B8":
{
	altID: "15_Redline",
	title: "Redline", artist: "Archefluxx", channel: XROSS, bpm: "170",
	Prime2: "@1.04 S5 S10 S16 D13 D20 S18 D19",
},

// "15C1":
// "15C2":
// "15C3":

"15C4":
{
	altID: "15_Seize_My_Day",
	title: "Seize My Day", artist: "Rainbowdragoneyes", channel: WORLD, bpm: "160",
	Prime2: "@1.05 S2 S6 S10 S14 S18 D7 D12 D19 D22.ampass",
},

"15D0":
{
	title: "Vulcan", artist: "Memme", channel: ORIGINAL, bpm: "175", duration: REMIX,
	Prime2: "S22 D24",
},

// "15D1":
// "15D2":

"15D3":
{
	altID: "15_Leather",
	title: "Leather", artist: "Doin", channel: ORIGINAL, bpm: "200", duration: REMIX,
	Prime2: "@1.07 S18 S21 D22 S24 D26",
},

"15E0":
{
	title: "Me Gustas Tu  [FULL]", artist: "GFriend", channel: KPOP, bpm: "106",
	Prime2: "@1.01 S16 D17",
},

"15E1":
{
	title: "Bang Bang Bang  [FULL]", artist: "Big Bang", bpm: "135",
	Prime2: "S6 S18 D20",
},

"15E2":
{
	title: "Boombayah  [FULL]", artist: "Black Pink", channel: KPOP, bpm: "125",
	Prime2: "@1.02 S10 S17 D18",
},

"15E3":
{
	altID: "15_Up_Down_FULL",
	title: "Up & Down  [FULL]", artist: "EXID", channel: KPOP, bpm: "112",
	Prime2: "@1.05 S8 S18 D19",
},

"15E4":
{
	altID: "15_Acquaintance_FULL",
	title: "Acquaintance  [FULL]", artist: "Outsider", channel: KPOP, bpm: "130",
	Prime2: "@1.06 S20 D22",
},

// "15E5":

"15E6":
{
	altID: "15_Hush_FULL",
	title: "HUSH  [FULL]", artist: "Yassi Pressman & Nadine Lustre", channel: WORLD, bpm: "82", region: PHILIPPINES,
	Prime2: "@1.03 S15 D16",
},


"15F0":
{
	title: "Sarabande  [SHORT]", artist: "MAX", channel: ORIGINAL, bpm: "157",
	Prime2: "S9 S16 S18 D17",
},

"15F1":
{
	title: "Death Moon  [SHORT]", artist: "SHK", channel: XROSS, bpm: "160",
	Prime2: "S9 S15 S19 D17 D22  @1.07 S22",
},

// "15F2":

"15F3":
{
	altID: "15_Prime2_Opening",
	title: "PRIME2 Opening  [SHORT]", artist: "MAX", channel: ORIGINAL, bpm: "145",
	Prime2: "@1.04 S7 S12 S17 D18",
},

// \14 - Prime

"1401":
{
	title: "Nemesis", artist: "M2U", channel: ORIGINAL, bpm: "160",
	Prime2: "=",
	Prime: "S4 S7 S11 S16 S18 D12 D20  @1.01 CoOp(x2)",
},

"1402":
{
	title: "Katkoi", artist: "M2U", channel: ORIGINAL, bpm: "180",
	Prime2: "=  @1.08 Dp4",
	Prime: "@1.07 S7 S10 S14 S18 D12 D15 D19",
},

"1403":
{
	title: "Latino Virus", artist: "Warak", channel: ORIGINAL, bpm: "170",
	Prime2: "=",
	Prime: "S3 S7 S9 S17 D12 D19 CoOp(x2)  @1.12 Dp3.ucs",
},

"1404":
{
	title: "Elysium", artist: "Warak", channel: ORIGINAL, bpm: "128",
	Prime2: "=",
	Prime: "@1.13 S4 S8 S15 D10 D16",
},

"1405":
{
	title: "Yog-Sothoth", artist: "Nato", channel: ORIGINAL, bpm: "200",
	Prime2: "=  @1.03 S16.ucs.ampass",
	Prime: "S9 S18 S21 S23 D23 D25  @1.01 CoOp(x3)  @1.19 D17",
},

"1406":
{
	title: "Silhouette Effect", artist: "Nato", channel: ORIGINAL, bpm: "167",
	Prime2: "=",
	Prime: "@1.08 S4 S7 S10 D12  S18 D20",
},

"1407":
{
	title: "Chinese Restaurant", artist: "Memme", channel: ORIGINAL, bpm: "175",
	Prime2: "=",
	Prime: "S4 S7 S10 S16 S18 D10 D20  @1.19 D17.ucs",
},

"1408":
{
	title: "Avalanche", artist: "Memme", channel: ORIGINAL, bpm: "175",
	Prime2: "=  @1.03 S16.ucs.ampass D18.ucs.ampass",
	Prime: "@1.04 S4 S6 S9 S18 D10 D19 D24  @1.13 S22",
},

"1409":
{
	title: "Force of Ra", artist: "Memme", channel: ORIGINAL, bpm: "180",
	Prime2: "=  @1.08 Dp3",
	Prime: "@1.16 S7 S12 S17 D12  S19 D20",
},

"1410":
{
	title: "Requiem", artist: "MAX", channel: ORIGINAL, bpm: "160",
	Prime2: "=",
	Prime: "S4 S7 S11 S16 S19 D9 D19 D23",
},

"1411":
{
	title: "You Got Me Crazy", artist: "MAX", channel: ORIGINAL, bpm: "128",
	Prime2: "=",
	Prime: "@1.05 S4 S9 S17 S18 D5 D18  @1.06 S6",
},

"1412":
{
	title: "B2", artist: "MAX", channel: ORIGINAL, bpm: "158",
	Prime2: "=",
	Prime: "@1.07 S4 S7 S11 S16 S18 D13 D19",
},

"1413":
{
	title: "Meteorize", artist: "Paul Bazooka", channel: ORIGINAL, bpm: "136",
	Prime2: "=",
	Prime: "S3 S5 S10 S15 D8 D16  @1.07 S17 D18",
},

"1414":
{
	title: "Mad5cience", artist: "Paul Bazooka", channel: ORIGINAL, bpm: "130",
	Prime2: "=  @1.08 Dp5",
	Prime: "@1.15 S5 S16 D7 D16  S20",
},

"1415":
{
	title: "Hestia", artist: "Gentle Stick", channel: ORIGINAL, bpm: "150",
	Prime2: "= -S17 -D18  @1.08 Dp3",
	Prime: "@1.01 S4 S7 S10 S18 D11 D20  @1.19 S17.ucs D18.ucs",
},

"1416":
{
	title: "Amphitryon", artist: "Gentle Stick", channel: ORIGINAL, bpm: "155",
	Prime2: "=  @1.08 Dp4",
	Prime: "@1.17 S6 S11 D12  S18 D20",
},

"1417":
{
	title: "Leakage Voltage", artist: "Doin", channel: ORIGINAL, bpm: "180",
	Prime2: "= -D20  @1.08 Dp3",
	Prime: "S10 S15 S17 D12 D19  @1.12 S20.ucs D20.ucs D22.ucs",
},

"1418":
{
	title: "Removable Disk0", artist: "Doin", channel: ORIGINAL, bpm: "130",
	Prime2: "=  @1.08 Dp3",
	Prime: "@1.18 S3 S6 S15 D5 D16",
},

"1419":
{
	title: "Super Fantasy", artist: "SHK", channel: ORIGINAL, bpm: "145",
	Prime2: "= -D16",
	Prime: "S4 S7 S10 S16 S19 D11 D21 CoOp(x2)  @1.14 S14.ucs D16.ucs  @1.19 D18",
},

"1420":
{
	title: "Violet Perfume", artist: "SHK", channel: ORIGINAL, bpm: "140",
	Prime2: "=",
	Prime: "@1.12 S4 S6 S8 S14 S17 D10 D15 D19",
},

"1421":
{
	title: "Red Swan", artist: "Yahpp", bpm: "172",
	Prime2: "=",
	Prime: "S4 S6 S8 S18 D12 D20 D21  @1.02 CoOp(x2)  @1.12 Dp4.ucs Dp20.ucs",
},

"1422":
{
	title: "Hyacinth", artist: "Yahpp", bpm: "192",
	Prime2: "=  @1.08 Dp4",
	Prime: "@1.10 S9 S13 D12  S18 S21 D19 D23",
},

"1423":
{
	title: "Blaze emotion (Band version)", artist: "Yahpp", bpm: "170",
	Prime2: "=  @1.08 Dp3",
	Prime: "@1.17 S2 S8 S17 D4 D18",
},

"1424":
{
	title: "1950", artist: "Slam", channel: ORIGINAL, bpm: "200",
	Prime2: "= -S16",
	Prime: "@1.07 S23 D25  S25 D27  @1.12 S20  @1.19 S16.ucs S17.ucs D21.ucs",
},

"1425":
{
	title: "Sugar Conspiracy Theory", artist: "MAX", channel: ORIGINAL, bpm: "170",
	Prime2: "=",
	Prime: "@1.06 S1 S3 S6 S10 S15 S18 S19 D7 D11 D17 D20",
},

"1426":
{
	title: "Allegro Piu Mosso", artist: "DM Ashura", channel: ORIGINAL, bpm: "160",
	Prime2: "=",
	Prime: "S4 S6 S11 S16 D13 D19  @1.09 S19",
},

"1427":
{
	title: "Annihilator Method", artist: "DM Ashura", channel: ORIGINAL, bpm: "192",
	Prime2: "=",
	Prime: "@1.08 S7 S10 S15 D12  S19 D20  @1.15 D24",
},

"1428":
{
	title: "Move That Body!", artist: "DM Ashura", channel: ORIGINAL, bpm: "145",
	Prime2: "=",
	Prime: "@1.06 S3 S5 S8 S12 S17 S20 D10 D18  @1.11 Dp3",
},

"1429":
{
	title: "Rock the House", artist: "Matduke", channel: WORLD, bpm: "175",
	Prime2: "= -S16",
	Prime: "S7 S10 S17 D10 D18 D22  @1.14 S16.ucs D13.ucs",
},

"1430":
{
	title: "Scorpion King", artist: "r300k", channel: ORIGINAL, bpm: "113",
	Prime2: "=",
	Prime: "@1.12 S3 S5 S8 S15 D10 D16  S19 D20",
},

"1431":
{
	title: "Point Zero One", artist: "SynthWulf", channel: ORIGINAL, bpm: "170",
	Prime2: "=",
	Prime: "@1.13 S9 S16 D11 D17  S20 D22",
},

// "1432":

"1433":
{
	title: "Red Snow", artist: "Cashew", channel: ORIGINAL, bpm: "170",
	Prime2: "=  @1.05 CoOp(x2)  @1.07 D18.ucs  @1.08 Dp4",
	Prime: "@1.15 S11 S16 D12  S19 D20  @1.21 S7",
},

"1434":
{
	title: "Campanella", artist: "Cashew", channel: ORIGINAL, bpm: "140",
	Prime2: "=  @1.08 Dp5",
	Prime: "@1.19 S6 S9 S16 D10 D16",
},

"1435":
{
	title: "You again my love", artist: "CYO Style & Henohenomoheji", channel: ORIGINAL, bpm: "137",
	Prime2: "=  @1.08 Dp4",
	Prime: "@1.21 S1 S3 S6 S14 D6 D14",
},

"1436":
{
	title: "Robot Battle", artist: "CYO Style", channel: ORIGINAL, bpm: "198",
	Prime2: "=",
	Prime: "S8 S12 S21 D12 D23  @1.17 S18.ucs D19.ucs",
},

"1437":
{
	title: "Bar Bar Bar", artist: "Crayon Pop", channel: KPOP, bpm: "134",
	Prime2: "=  @1.08 Dp3",
	Prime: "S3 S5 S8 S14  D4 D11 D15  CoOp(x3)",
},

"1438":
{
	title: "On and On", artist: "VIXX", channel: KPOP, bpm: "119",
	Prime2: "=",
	Prime: "@1.02 S2 S4 S6 S15 D5 D15",
},

"1439":
{
	title: "Elvis", artist: "AOA", channel: KPOP, bpm: "135",
	Prime2: "=",
	Prime: "S2 S4 S7 S15 D5 D16  @1.11 S17",
},

"1440":
{
	title: "Very Good", artist: "Block B", channel: KPOP, bpm: "136",
	Prime2: "=",
	Prime: "@1.04 S3 S6 S9 S15 D5 D15",
},

"1441":
{
	title: "I'm Sorry", artist: "CNBLUE", channel: KPOP, bpm: "131",
	Prime2: "=",
	Prime: "S4 S6 S9 S16 D8 D17",
},

"1442":
{
	title: "Pandora", artist: "Kara", bpm: "140",
	Prime2: "=",
	Prime: "S2 S4 S7 S16 D6 D16",
},

"1443":
{
	title: "Venus", artist: "Shinwa", channel: KPOP, bpm: "126",
	Prime2: "=",
	Prime: "@1.05 S2 S3 S5 S14 D6 D14  @1.11 Dp3",
},

"1444":
{
	title: "Hate, Don't Hate!", artist: "Dal shabet", channel: KPOP, bpm: "123",
	Prime2: "=",
	Prime: "S2 S4 S6 S15 D6 D16",
},

"1445":
{
	title: "Supermagic", artist: "Supreme Team", channel: KPOP, bpm: "112",
	Prime2: "=",
	Prime: "S2 S4 S6 S14 D5 D15",
},

"1446":
{
	title: "Sugar Free", artist: "T-ara", channel: KPOP, bpm: "128",
	Prime2: "=",
	Prime: "S4 S6 S8 S15 D5 D16  @1.11 S17",
},

"1447":
{
	title: "Her", artist: "Block B", channel: KPOP, bpm: "162",
	Prime2: "=",
	Prime: "S4 S6 S9 S16 D7 D17  @1.02 CoOp(x2)",
},

"1448":
{
	title: "NoNoNo", artist: "Apink", channel: KPOP, bpm: "106",
	Prime2: "=",
	Prime: "S2 S3 S5 S14 D5 D14 Sp15 Dp15  @1.02 CoOp(x2)",
},

"1449":
{
	title: "Loner", artist: "Outsider", channel: KPOP, bpm: "125",
	Prime2: "=  @1.08 Dp4",
	Prime: "S3 S5 S8 S15 S19 D6 D17 D22",
},

"1450":
{
	title: "Flying Duck", artist: "Cherry Filter", channel: KPOP, bpm: "158",
	Prime2: "=  @1.08 Dp4",
	Prime: "S3 S7 S10 S16 D11 D18",
},

"1451":
{
	title: "Ineffective Boss Without Power", artist: "Norazo", channel: KPOP, bpm: "170",
	Prime2: "=",
	Prime: "@1.01 S4 S6 S8 S18 D5 D19 CoOp(x3)",
},

"1452":
{
	title: "One", artist: "Epik High", bpm: "135",
	Prime2: "=",
	Prime: "S1 S3 S5 S15 D5 D16",
},

"1453":
{
	title: "The Revolution", artist: "Max & Doom", channel: WORLD, bpm: "160",
	Prime2: "= -S21 -D23 -D24",  // Prime2_hh: "= -S21",
	Prime: "@1.09 S7 S11 S17 S19 D12 D19  @1.11 S21.ucs D22.ucs D23.ucs D24.ucs",
},

"1454":
{
	title: "Selfishness", artist: "S.I.D-Sound", channel: WORLD, bpm: "160",
	Prime2: "=",
	Prime: "@1.03 S3 S6 S11 S17 D12 D18",
},

// "1455":
// "1456":

"1457":
{
	title: "Cosmical Rhythm", artist: "S.I.D-Sound", channel: WORLD, bpm: "128",
	Prime2: "= -S16",
	Prime: "S3 S6 S8 S15 D10 D16  @1.12 S16.ucs D18.ucs",
},

"1458":
{
	title: "Dolly Kiss", artist: "S.I.D-Sound", channel: WORLD, bpm: "149",
	Prime2: "=",
	Prime: "@1.07 S3 S6 S14 D6 D15  @1.19 S17",
},

"1459":
{
	title: "Matador", artist: "Cranky", channel: WORLD, bpm: "168",
	Prime2: "=",
	Prime: "S4 S7 S10 S18 D7 D19  @1.12 S21.ucs D16.ucs D21.ucs",
},

"1460":
{
	title: "Milky Way Galaxy", artist: "3R2", channel: WORLD, bpm: "175",
	Prime2: "=",
	Prime: "@1.03 S6 S11 S17 D11 D18",
},

"1461":
{
	title: "Feel My Happiness", artist: "3R2", channel: WORLD, bpm: "175",
	Prime2: "=  @1.08 Dp2",
	Prime: "@1.19 S3 S10 S17 D6 D18",
},

"1462":
{
	title: "Ragnarok", artist: "SynthWulf", channel: WORLD, bpm: "170",
	Prime2: "=",
	Prime: "S7 S11 S16 S18 D9 D13 D17  @1.13 S20",
},

"1463":
{
	title: "Achluoias", artist: "D_AAN", channel: WORLD, bpm: "200",
	Prime2: "=",
	Prime: "@1.02 S8 S15 S18 S22 D12 D16 D24  @1.03 S24  @1.16 D26",
},

"1464":
{
	title: "Karyawisata", artist: "Vesuvia x REDSHiFT", channel: WORLD, bpm: "173",
	Prime2: "= -D19",
	Prime: "S4 S7 S10 S17 S20 D7 D16  @1.14 S15.ucs D19.ucs",
},

"1465":
{
	title: "video out c", artist: "Vospi", channel: WORLD, bpm: "198",
	Prime2: "=",
	Prime: "@1.11 S9 S14 D14  S17 S22 D23",
},

// "1466":

"1467":
{
	title: "Limbo", artist: "Daddy Yankee", channel: WORLD, bpm: "125",
	region: LATIN,
	// Prime2_hh: "=",
	Prime: "S2 S4 S6 S15 D5 D15",
},

"1468":
{
	title: "Melodia", artist: "Lylloo feat. Egas", channel: WORLD, bpm: "135",
	region: LATIN,
	// Prime2_hh: "=",
	Prime: "S2 S4 S6 S14 D4 D15",
},

"1469":
{
	title: "Que Viva La Vida", artist: "Wisin Ft. Michel Telo", channel: WORLD, bpm: "130",
	region: LATIN,
	// Prime2_hh: "=",
	Prime: "S2 S4 S6 S16 D7 D16",
},

"1470":
{
	title: "Across the ocean", artist: "Zircon", channel: WORLD, bpm: "130",
	Prime2: "=  @1.08 Dp2",
	Prime: "@1.20 S3 S6 S9 S15 D11 D16",
},

"1471":
{
	title: "Enhanced Reality", artist: "Matduke", channel: WORLD, bpm: "170",
	Prime2: "=  @1.04 S16 D18  @1.08 Dp5",
	Prime: "@1.14 S9 S14 D11  S19 D20",
},

"1472":
{
	title: "Stardust Overdrive", artist: "typeMARS", channel: WORLD, bpm: "175",
	Prime2: "=",
	Prime: "@1.09 S4 S9 S16 S18 D5 D13 D16 D19  @1.16 D24",
},

"1473":
{
	title: "Reminiscence", artist: "MAX", bpm: "155", channel: ORIGINAL,
	Prime2: "=",
	Prime: "@1.10 S3 S6 S10 D10 CoOp(x2)  S17 D18",
},

"1474":
{
	title: "Moment Day", artist: "MAX", channel: ORIGINAL, bpm: "158",
	Prime2: "=  @1.08 Dp5",
	Prime: "@1.16 S3 S6 S10 S15 S17 D9 D16 CoOp(x2)  S18 D19",
},

"1475":
{
	title: "Amai Yuuwaku Dangerous", artist: "Bakusute Sotokanda Icchome", channel: JMUSIC, bpm: "125",
	Prime2: "=",
	Prime: "@1.11 S1 S3 S6 S11 S15 D5 D10 D16",
},

"1476":
{
	title: "Yoropiku Pikuyoro!", artist: "Bakasute Sotokanda Icchome", channel: JMUSIC, bpm: "198",
	Prime2: "=",
	Prime: "@1.10 S3 S5 S9 S15 D5 D16 Sp3",
},

"1477":
{
	title: "Imprinting", artist: "Sakuzyo", channel: JMUSIC, bpm: "175",
	Prime2: "=",
	Prime: "@1.10 S4 S7 S11 D12  S17 S20 D20  @1.15 D24",
},

"1478":
{
	title: "Sudden Romance (PIU Edit)", artist: "void", channel: JMUSIC, bpm: "152", fromMix: "Prime",
	shortTitle: "Sudden Romance",
	Prime2: "S4 S6 S9 S14 S19  D8 D14 D19  @1.08 Dp4",
	// from PrimeJE
},

"1479":
{
	title: "Mitotsudaira", artist: "ETIA.", channel: JMUSIC, bpm: "136",
	Prime2: "=  @1.08 Dp4",
	Prime: "@1.20 S1 S4 S9 S15 S18 D10 D16 D19",
},

"1480":
{
	title: "Smile Diary", artist: "you", channel: JMUSIC, bpm: "175",
	Prime2: "=  @1.08 Dp5",
	Prime: "@1.19 S4 S7 S11 S16 D8 D17  S19 D20",
},

"1481":
{
	title: "Bad Apple!! feat. Nomico", artist: "Masayoshi Minoshima", channel: JMUSIC, bpm: "138",
	shortTitle: "Bad Apple",
	Prime2: "=",
	Prime: "@1.09 S1 S5 S9 S13 D10  S17 S19 D18 D21  @1.17 S3  @1.21 S15",
},

"1482":
{
	title: "Creed -1st Desire-", artist: "TatshMusicCircle", channel: JMUSIC, bpm: "163",
	Prime2: "=",
	Prime: "@1.13 S4 S7 S12 D11 Dp5  S18 S21 D18 D23",
},

"1483":
{
	title: "Sora no Shirabe", artist: "TatshMusicCircle", channel: JMUSIC, bpm: "172",
	Prime2: "=  @1.08 Dp4",
	Prime: "@1.18 S3 S8 S12 S15 D11 D16  S18 D20",
},

"1484":
{
	title: "Four Seasons of Loneliness", artist: "TatshMusicCircle", channel: JMUSIC, bpm: "178",
	//fullTitle: "Four Seasons of Loneliness ver B feat. Sariyajin",
	Prime2: "=",
	Prime: "@1.09 S1 S4 S6 S10 S14 D10 D14 CoOp(x2)  S17 S20 D18 D21",
},

"1485":
{
	title: "Ai, Yurete", artist: "TatshMusicCircle", channel: JMUSIC, bpm: "152", fromMix: "Prime",
	Prime2: "S1 S3 S6 S9 S13 S16  D8 D15 D18  @1.08 Dp4",
	// from PrimeJE
},

"1486":
{
	title: "Setsuna Trip", artist: "LastNote", channel: JMUSIC, bpm: "145",
	Prime2: "=",
	Prime: "@1.12 S1 S5 S9 S13 S16  D8 D14  CoOp(x2)  S18 D19  @1.17 S3",
},

"1487":
{
	title: "Trashy Innocence", artist: "LastNote", channel: JMUSIC, bpm: "230",
	Prime2: "=",
	Prime: "@1.14 S1 S5 S10 S14  D10 D15  CoOp(x2)  S20 D24  @1.17 S3",
},

"1488":
{
	title: "Ren'ai Yuusha", artist: "LastNote", channel: JMUSIC, bpm: "190",
	Prime2: "=  @1.08 Dp4",
	Prime: "@1.14 S3 S6 S12 S17 D4 D13 D18 CoOp(x3)  S19 D20",
},

"1489":
{
	title: "Houkago Stride", artist: "Last Note", channel: JMUSIC, bpm: "225",
	Prime2: "=  @1.08 Dp5",
	Prime: "@1.16 S3 S6 S10 S15 D10 D16  S19 D21",
},

"1490":
{
	title: "Prime", artist: "Tatsh", channel: JMUSIC, bpm: "165",
	Prime2: "=  @1.08 Dp3",
	Prime: "@1.15 S4 S7 S11 S16 S18 D12 D16 D18  S20 D20",
},

"1491":
{
	title: "Bad &infin; End &infin; Night", artist: "HitoshizukuP X yama&#9651", channel: JMUSIC, bpm: "204",
	Prime2: "=",
	Prime: "@1.11 S2 S6 S10 S13 D11 Dp4 CoOp(x3)  S17 S19 D18 D23  @1.17 S4",
},

"1492":
{
	title: "Queen of the Red", artist: "ETIA", channel: JMUSIC, bpm: "188",
	Prime2: "=",
	Prime: "@1.12 S4 S7 S11 S15 D12 D16 S18 D19",
},

"1493":
{
	title: "Idealized Romance", artist: "void", channel: JMUSIC, bpm: "140",
	Prime2: "=",
	Prime: "@1.16 S2 S4 S7 S11 S16 D10  S18 D18",
},

"1494":
{
	title: "Just Hold On (To All Fighters)", artist: "Void", channel: JMUSIC, bpm: "170",
	shortTitle: "Just Hold On",
	Prime2: "=",
	Prime: "@1.14 S4 S7 S10 S16 D12 D18  S21 D22 D25",
},

"1495":
{
	title: "Unlock", artist: "Daichi Miura (Cover)", channel: JMUSIC, bpm: "128",
	region: JAPAN,
	Prime2: "S2 S3 S5 S7 S11 S14  D3 D9 D15",  //? AM.Pass exclusive
	// from PrimeJE
},

"1496":
{
	title: "Heavy Rotation", artist: "AKB48 (Cover)", channel: JMUSIC, bpm: "178",
	region: JAPAN,
	Prime2: "S2 S4 S5 S9 S16 S18  D6 D16 D19  CoOp(x2)",  //? AM.Pass exclusive
	// from PrimeJE
},

"1497":
{
	title: "Break It Down", artist: "MAZO", channel: ORIGINAL, bpm: "176",
	Prime2: "=",
	Prime: "@1.15 S7 S14 S16 D5 D12 D17",
},

"1498":
{
	title: "Hypercube", artist: "MAX", channel: ORIGINAL, bpm: "145",
	Prime2: "=",
	Prime: "@1.12 S6 S10 S15 S17 D10 D16 D20",
},

"1499":
{
	title: "Like Me", artist: "SHK", channel: ORIGINAL, bpm: "155",
	Prime2: "=  @1.08 Dp2",
	Prime: "@1.21 S6 S10 S14 S17 D11 D18 CoOp(x2)",
},

"14A0":
{
	title: "Beethoven Influenza", artist: "BanYa & Warak", channel: ORIGINAL, bpm: "170", duration: REMIX,
	Prime2: "=",
	Prime: "S18 S21 D21",
},

"14A1":
{
	title: "Avalanquiem", artist: "MAX & Memme", channel: ORIGINAL, bpm: "175", duration: REMIX,
	Prime2: "=",
	Prime: "@1.04 S23 D25  @1.10 S19",
},

"14A2":
{
	title: "Paradoxx", artist: "Slam & NATO", channel: ORIGINAL, bpm: "220", duration: REMIX,
	Prime2: "=",
	Prime: "@1.18 S21 S23 S26  @1.19 D28",
},

"14C0":
{
	title: "Bar Bar Bar  [FULL]", artist: "Crayon Pop", channel: KPOP, bpm: "134",
	Prime2: "=",
	Prime: "S16 D15",
},

"14C1":
{
	title: "Sugar Free  [FULL]", artist: "T-ara", channel: KPOP, bpm: "128",
	Prime2: "=",
	Prime: "@1.01 S15 D15",
},

"14C2":
{
	title: "NoNoNo  [FULL]", artist: "Apink", channel: KPOP, bpm: "106",
	Prime2: "=",
	Prime: "@1.12 S14 S15 D16",
},

"14C3":
{
	title: "Move That Body!  [FULL]", artist: "DM Ashura feat. Skizzo & Hanna", channel: ORIGINAL, bpm: "145",
	Prime2: "= -D20",
	Prime: "@1.11 S17.ucs S18.ucs D19.ucs D20.ucs",
},

"14C4":
{
	title: "Pandora  [FULL]", artist: "Kara", bpm: "140",
	Prime2: "=",
	Prime: "@1.14 S17 D18",
},

"14C5":
{
	title: "Four Seasons of Loneliness ver B feat. Sariyajin  [FULL]", artist: "TatshMusicCircle", channel: JMUSIC, bpm: "178",
	shortTitle: "Four Seasons of Loneliness",
	Prime2: "=",
	Prime: "@1.09 S14 S19 D14 D19",
},

"14C6":
{
	title: "Bad Apple!! feat. Nomico  [FULL]", artist: "Masayoshi Minoshima", channel: JMUSIC, bpm: "138",
	shortTitle: "Bad Apple",
	Prime2: "=",
	Prime: "@1.09 S10 S14 S17 D11 D18 D22 CoOp(x4)",
},

"14C7":
{
	title: "Creed -1st Desire-  [FULL]", artist: "TatshMusicCircle", channel: JMUSIC, bpm: "163",
	Prime2: "=",
	Prime: "@1.13 S18 S23 D19 D24",
},

"14E0":
{
	title: "Super Fantasy  [SHORT]", artist: "SHK", channel: ORIGINAL, bpm: "145",
	Prime2: "=",
	Prime: "@1.10 S19 D17",
},

"14E1":
{
	title: "Yog-Sothoth  [SHORT]", artist: "Nato", channel: ORIGINAL, bpm: "200",
	Prime2: "=",
	Prime: "S13 S18 S21 D16 D21",
},

"14E2":
{
	title: "Silhouette Effect  [SHORT]", artist: "Nato", channel: ORIGINAL, bpm: "167",
	Prime2: "=",
	Prime: "@1.08 S17 D18",
},

"14E3":
{
	title: "Selfishness  [SHORT]", artist: "S.I.D-Sound", channel: WORLD, bpm: "160",
	Prime2: "=",
	Prime: "@1.03 S17 D18",
},

"14E4":
{
	title: "Rock the House  [SHORT]", artist: "Matduke", channel: WORLD, bpm: "175",
	// it was ORIGINAL at Prime2 1.01 (and maybe in Prime, but that was left annoticed because it was New Tunes). In P2 1.07 it is WORLD
	Prime2: "=",
	Prime: "S15 S18 D20",
},

"14E5":
{
	title: "Move That Body!  [SHORT]", artist: "DM Ashura", channel: ORIGINAL, bpm: "145",
	Prime2: "=",
	Prime: "@1.06 S16 D18",
},

"14E6":
{
	title: "Prime Opening", artist: "MAX", channel: ORIGINAL, bpm: "128", duration: SHORT,
	Prime2: "=",
	Prime: "@1.02 S15 D15 CoOp(x5)",
},

"14E7":
{
	title: "Stardust Overdrive  [SHORT]", artist: "typeMARS", channel: WORLD, bpm: "175",
	Prime2: "=",
	Prime: "@1.09 S16 D17",
},

"14F0":
{
	title: "Heavy Rotation  [SHORT]", artist: "AKB48 (Cover)", channel: JMUSIC, bpm: "178",
	region: JAPAN,
	Prime2: "S10 S15 S18  D9 D16 D20",  //? AM.Pass exclusive
	// PrimeJE
},


// \13 - Fiesta 2

"1301":
{
	title: "Pop the Track", artist: "J-Mi & Midi-D & Ft. Hanna Stockzell", channel: WORLD, bpm: "160",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S2 S7 S9 S16 D9 D18 Dp??(x2)  @1.40 S19  @1.60 D20",
},

"1302":
{
	title: "Electric", artist: "The DNC", channel: WORLD, bpm: "120",
	Prime: "=  @1.15 S17",
	Fiesta2: "S2 S4 S6 S14 D4 D16",
},

"1303":
{
	title: "Passacaglia", artist: "SynthWulf", channel: WORLD, bpm: "175",
	Prime2: "=",
	Prime: "= -S19",
	Fiesta2: "S4 S7 S10 S16 D12 D17 D22  @1.01 S20  @1.50 S19  @1.60 D24",
},

"1304":
{
	title: "Baroque Virus", artist: "Zircon", channel: WORLD, bpm: "135",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S5 S9 S17  D11 D18  @1.60 D20",
},

"1305":
{
	title: "Elise", artist: "DM Ashura", channel: ORIGINAL, bpm: "162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S4 S7 S10 S17 S19 D13 D16 Dp??(x2)  @1.40 S22 D23",
},

"1306":
{
	title: "Ignis Fatuus (DM Ashura Mix)", artist: "BanYa & DM Ashura", channel: ORIGINAL, bpm: "220",
	shortTitle: "Ignis Fatuus",
	Prime2: "=",
	Prime: "= -D24 -D26",
	Fiesta2: "S9 S15 S19 S23 D15 D17 D19 D23 D25 Dp??(x2)  @1.50 D24 D26",
},

"1307":
{
	title: "Love is a Danger Zone (Cranky Mix)", artist: "BanYa & Cranky", channel: ORIGINAL, bpm: "155",
	shortTitle: "Love is a Danger Zone  (Cranky)",
	Prime2: "=",
	Prime: "= -S19",
	Fiesta2: "S6 S12 S20 D8 D16 Dp??(x2)  @1.01 D24  @1.40 S18  @1.50 S19  @1.60 S22 D20",
},

"1308":
{
	title: "Hypnosis (SynthWulf Mix)", artist: "BanYa & SynthWulf", channel: ORIGINAL, bpm: "175",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S8 S11 S17 S21 D13 D15  @1.01 D20",
},

"1309":
{
	title: "Flew Far Faster", artist: "Doin", channel: ORIGINAL, bpm: "200",
	Prime2: "=",
	Prime: "=  @1.14 D24",
	Fiesta2: "S10 S17 S23 D22 Dp??(x3)  @1.01 D12",
},

"1310":
{
	title: "Unique", artist: "SHK", channel: ORIGINAL, bpm: "145",
	Prime2: "=",
	Prime: "= -S16",
	Fiesta2: "S3 S6 S10 S17 D12 D19  @1.40 S15 D16  @1.50 S16",
},

"1311":
{
	title: "Accident", artist: "MAX", channel: ORIGINAL, bpm: "183",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S4 S7 S10 S19 D11 D20",
},

"1312":
{
	title: "D", artist: "MAX", channel: ORIGINAL, bpm: "180",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S4 S7 S9 S18 D11 D19  @1.40 D18",
},

"1313":
{
	title: "U Got Me Rocking", artist: "MAX", channel: ORIGINAL, bpm: "128",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S3 S6 S8 S17 D4 D17 Dp3  @1.01 S18",
},

"1314":
{
	title: "Lucid (PIU Edit)", artist: "Yak Won", channel: ORIGINAL, bpm: "40 ~ 190",
	shortTitle: "Lucid",
	Prime2: "=",
	Prime: "=  @1.12 S16.ucs",
	Fiesta2: "S4 S7 S10 S20 D11 D20 Dp??(x2)  @1.60 D23",
},

"1315":
{
	title: "Nobody", artist: "Wonder Girls", channel: KPOP, bpm: "131",
	Prime: "=",
	Fiesta2: "S2 S4 S6 S15 D8 D17 Sp3 Dp4",
},

"1316":
{
	title: "Bad Girl Good Girl", artist: "Miss A", channel: KPOP, bpm: "136",
	Prime: "=",
	Fiesta2: "S1 S3 S5 S14  D4 D13  Sp2 Dp3",
},

"1317":
{
	title: "Step", artist: "KARA", channel: KPOP, bpm: "123",
	Prime: "= -D16",
	Fiesta2: "S2 S4 S7 S15 D5 D15 Sp2 Dp4  @1.50 D16",
},

"1318":
{
	title: "I'm the Best", artist: "2NE1", bpm: "128",
	Prime: "=",
	Fiesta2: "S2 S4 S6 S15 D5 D13 Sp3 Dp4",
},

"1319":
{
	title: "Can't Nobody", artist: "2NE1", bpm: "130",
	Prime: "= -S17",
	Fiesta2: "S2 S4 S6 S15 D5 D16 Sp3 Dp5  @1.50 S17",
},

"1320":
{
	title: "Shanghai Romance", artist: "Orange Caramel", channel: KPOP, bpm: "149",
	Prime: "= -S18 -D17",
	Fiesta2: "S4 S7 S9 S14 D5 D13 Sp2 Dp4  @1.01 S16  @1.50 S18 D17",
},

"1321":
{
	title: "Fantastic Baby", artist: "Big Bang", bpm: "130",
	Prime: "=",
	Fiesta2: "S3 S5 S8 S14 D5 D17 Sp1 Dp5",
},

"1322":
{
	title: "Lie", artist: "Big Bang", bpm: "125",
	Prime: "=",
	Fiesta2: "S2 S4 S6 S15 D5 D15 Sp2 Dp5",
},

"1323":
{
	title: "Heart Breaker", artist: "G-Dragon", channel: KPOP, bpm: "135",
	Prime: "= -D18",
	Fiesta2: "S1 S3 S5 S15 D4 D16 Sp3 Dp6  @1.50 D18",
},

"1324":
{
	title: "Hands Up (East 4A Mix)", artist: "2PM", channel: KPOP, bpm: "130",
	shortTitle: "Hands Up",
	Fiesta2: "S3 S5 S8 S15 D5 D15 Sp3 Dp4",
},

"1325":
{
	title: "Be Mine", artist: "Infinite", channel: KPOP, bpm: "130",
	Prime: "=",
	Fiesta2: "S2 S4 S7 S15  D5 D15  Sp3 Dp5",
},

"1326":
{
	title: "Crayon", artist: "G-Dragon", channel: KPOP, bpm: "132",
	Prime: "=",
	Fiesta2: "@1.10 S4 S6 S8 S17 D5 D17",
},

"1327":
{
	title: "Mackerel", artist: "Norazo", channel: KPOP, bpm: "150",
	Prime: "=",
	Fiesta2: "S4 S6 S8 S16 D5 D15 Sp2 Dp4 Dp??(x2)",
},

"1328":
{
	title: "Two Guys", artist: "Bae Chi Gi", channel: KPOP, bpm: "128",
	Prime: "= -D18",
	Fiesta2: "S4 S7 S9 S15 D5 D16 Sp3 Dp6  @1.50 D18",
},

"1329":
{
	title: "Danza Kuduro", artist: "Don Omar & Ft. Lucenzo", channel: WORLD, bpm: "130",
	region: LATIN,
	Prime: "=",
	Fiesta2: "S4 S7 S9 S15 D10 D16",
},

"1330":
{
	title: "Rabiosa", artist: "Shakira & Ft. Pitbull", channel: WORLD, bpm: "133",
	region: LATIN,
	Prime: "=",
	Fiesta2: "S2 S4 S7 S14 D5 D16",
},

"1331":
{
	title: "Lovumba", artist: "Daddy Yankee", channel: WORLD, bpm: "121",
	region: LATIN,
	Prime: "= -D19",
	Fiesta2: "S2 S5 S8 S14 D5 D16  @1.50 D19",
},

"1332":
{
	title: "One Two Three Go!", artist: "Belanova", channel: WORLD, bpm: "150",
	Prime: "=",
	Fiesta2: "S3 S6 S8 S13 D7 D14",
},

"1333":
{
	title: "Los Malaventurados No Lloran", artist: "PXNDX", bpm: "172",
	Prime: "=",
	Fiesta2: "S4 S7 S9 S16 D12 D18",
},

"1334":
{
	title: "Sik Asik", artist: "Ayu Ting Ting", channel: WORLD, bpm: "147",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S3 S5 S8 S13 D4  @1.01 D14",
},

"1335":
{
	title: "Online", artist: "Saykoji", channel: WORLD, bpm: "118",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S1 S4 S6 S15 D4  @1.01 D15",
},

"1336":
{
	title: "Dam", artist: "Ben Chalatit", channel: WORLD, bpm: "141",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S1 S3 S5 S8 D4 D9",
},

"1337":
{
	title: "Sugar Eyes", artist: "Sugar Eyes", channel: WORLD, bpm: "122",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S1 S3 S6 S8 S10 D4 D9  @1.60 S13",
},

"1338":
{
	title: "Log-In", artist: "SHK", channel: ORIGINAL, bpm: "140",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "@1.40 S4 S7 S10 S18 S21 D10 D20",
},

"1339":
{
	title: "Windmill", artist: "Yak Won", channel: ORIGINAL, bpm: "246",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "@1.40 S8 S13 S17 S21 D14 D18 D24",
},

"1340":
{
	title: "Follow Me", artist: "SHK", channel: ORIGINAL, bpm: "155",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "@1.60 S4 S6 S9 S14 S17 D9 D18 Dp??(x2)",
},

"1341":
{
	title: "Yeo Rae A", artist: "S.I.D-Sound", channel: ORIGINAL, bpm: "90",
	Prime2: "=",
	Prime: "=  @1.06 S8",
	Fiesta2: "@1.60 S1 S3 S5 S13 D5 D12",
},

"1390":
{
	title: "Mental Rider", artist: "SQUAR", channel: ORIGINAL, bpm: "120 ~ 140",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "@1.50 S12 S16 S21 D13 D19 D23",
},

"13A0":
{
	title: "BIG to the BANG", artist: "Big Bang & MAX", channel: KPOP, bpm: "135", duration: REMIX,
	// Prime2_hh: "=",
	Prime: "=",
	Fiesta2: "S17 D17",
},

"13A1":
{
	title: "Super Mackerel", artist: "Norazo & MAX", channel: KPOP, bpm: "150", duration: REMIX,
	Prime: "=",
	Fiesta2: "S16 D18",
},

"13A2":
{
	title: "Infinity RMX", artist: "SynthWulf & MAX", channel: ORIGINAL, bpm: "175", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S20 D20",
},

"13A3":
{
	title: "What Are You Doin'?", artist: "Doin & MAX", channel: ORIGINAL, bpm: "200", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S19 D24",
},

"13C0":
{
	title: "Step  [FULL]", artist: "KARA", channel: KPOP, bpm: "123",
	Prime: "=",
	Fiesta2: "S15 D17",
},

"13C1":
{
	title: "I'm the Best  [FULL]", artist: "2NE1", bpm: "128",
	Prime: "=",
	Fiesta2: "S18 D14",
},

"13C2":
{
	title: "Shanghai Romance  [FULL]", artist: "Orange Caramel", channel: KPOP, bpm: "149",
	Prime: "=",
	Fiesta2: "S17 D16",
},

"13C3":
{
	title: "Fantastic Baby  [FULL]", artist: "Big Bang", bpm: "130",
	Prime: "=",
	Fiesta2: "S17 D15",
},

"13C4":
{
	title: "Can't Nobody  [FULL]", artist: "2NE1", bpm: "130",
	Prime: "=",
	Fiesta2: "@1.60 S15 D16",
},

"13C5":
{
	title: "Heart Breaker  [FULL]", artist: "G-Dragon", channel: KPOP, bpm: "135",
	Prime: "=",
	Fiesta2: "@1.60 S16 D16",
},

// 13C6: Mackerel full  cancelled
// 13C7: Crayon full  cancelled
// 13C8: Danza Kuduro full  cancelled

"13E0":
{
	title: "Pop the Track  [SHORT]", artist: "J-Mi & Midi-D & Ft. Hanna Stockzell", channel: WORLD, bpm: "160",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S18 D16",
},

"13E1":
{
	title: "Passacaglia  [SHORT]", artist: "SynthWulf", channel: WORLD, bpm: "175",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S17 D18",
},

"13E2":
{
	title: "Ignis Fatuus (DM Ashura Mix)  [SHORT]", artist: "DM Ashura", channel: ORIGINAL, bpm: "220",
	shortTitle: "Ignis Fatuus",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S21 D21",
},

"13E3":
{
	title: "Flew Far Faster  [SHORT]", artist: "Doin", channel: ORIGINAL, bpm: "200",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S18 D21",
},

"13E4":
{
	title: "Unique  [SHORT]", artist: "SHK", channel: ORIGINAL, bpm: "145",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S18 D16",
},

"13E5":
{
	title: "U Got Me Rocking  [SHORT]", artist: "MAX", channel: ORIGINAL, bpm: "128",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S17 D17",
},


// \12 - crossovers from Pro 2

"1201":
{
	title: "Monolith", artist: "Affinity", channel: WORLD, bpm: "196",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S3 S5 S9  @1.50 D13   @1.60 S16 D18",
},

"1202":
{
	title: "Y2Z", artist: "Affinity", channel: WORLD, bpm: "162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "@1.30 S3 S6 S9 S16 D9 D17",
},

"1206":
{
	title: "Rockhill", artist: "Beltaine", channel: WORLD, bpm: "140",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "@1.10 S3 S6 S11 S16 D12 D18",
},

"1208":
{
	title: "Switchback", artist: "Celldweller", channel: WORLD, bpm: "112",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S3 S5 S9  @1.50 S15 S18 D10 D16 D18",
},

"1209":
{
	title: "Ladybug", artist: "Coconut", channel: WORLD, bpm: "133",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S1 S3 S5  @1.50 S13 D13 Dp??(x2)",
},

"1212":
{
	title: "Hardkore of the North", artist: "Diclonius Kid", channel: WORLD, bpm: "190",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S4 S7 S11  @1.50 S21 D16  @1.60 D23",
},

"1218":
{
	title: "Rippin' It Up", artist: "Future Funk Squad", channel: WORLD, bpm: "128",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S2 S5 S9  @1.50 S16 D4 D18",
},

"1219":
{
	title: "Tribe Attacker", artist: "Hi-G", channel: WORLD, bpm: "150",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S3 S6 S9  @1.50 S16 D10 D15 Dp??(x4)",
},

"1221":
{
	title: "Virtual Emotion", artist: "Inspector K", channel: WORLD, bpm: "180",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S3 S7 S11  @1.40 D18  @1.50 S17 Dp??(x2)",
},

"1222":
{
	title: "Take Me Back", artist: "KaW", channel: WORLD, bpm: "172",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "@1.20 S3 S7 S9 S17 D10 D16",
},

"1225":
{
	title: "Re:RAVE", artist: "KURi-ZiLL", channel: WORLD, bpm: "146",
	Prime2: "=",
	Prime: "= -S16",
	Fiesta2: "@1.50 S2 S6 S11 S16 S17 D12 D18",
},

"1226":
{
	title: "Heel and Toe", artist: "KURi-ZiLL", channel: WORLD, bpm: "185",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S2 S7 S9  @1.50 D11 Dp??(x2)  @1.60 S17",
},

"1228":
{
	title: "Dream to Nightmare", artist: "Nightmare", channel: WORLD, bpm: "178",
	Prime2: "=",
	Prime: "= -S23  @1.19 S22",
	Fiesta2: "@1.30 S19 S21 S23 D22 D24",
},

"1230":
{
	title: "Rainspark", artist: "Sanxion7", channel: WORLD, bpm: "125",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S2 S5 S9  @1.50 S15 D5 D17",
},

"1235":
{
	title: "Utopia", artist: "Smiley", channel: WORLD, bpm: "166",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S4 S7 S9 S17 D9 D18",
},

"1236":
{
	title: "Xuxa", artist: "Smiley", channel: WORLD, bpm: "160",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "@1.20 S3 S5 S9 S14 D12 D18 Dp??(x2)",
},

"1237":
{
	title: "Be Alive (Raaban Inc. Mix)", artist: "Stian K", channel: WORLD, bpm: "142",
	shortTitle: "Be Alive",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S2 S5 S8  @1.50 D10 Dp??(x2)  @1.60 S15 S17 D16",
},

"1240":
{
	title: "VVV", artist: "Zig Zag", channel: WORLD, bpm: "310",
	Prime2: "=",
	Prime: "= -D24",
	Fiesta2: "@1.50 S18 S23 D16 D19 D24",
},

"1241":
{
	title: "Star Command", artist: "Zircon", channel: WORLD, bpm: "155",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "S3 S5 S12  @1.50 S15 S19 D14 D21  @1.60 D23",
},


// \11 - Fiesta EX

"1101":
{
	title: "Cleaner", artist: "Doin", channel: ORIGINAL, bpm: "203",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S18 S22 S23 D20 D24  @1.30 D26  @1.51 S4 S7 S12",
},

"1102":
{
	title: "Interference", artist: "Doin", channel: ORIGINAL, bpm: "180.4",
	Prime2: "=",
	Prime: "=  @1.05 D21",
	Fiesta2: "=",
	FiestaEX: "S11 S18 D19  @1.20 D12 Sp2 Dp3",
},

"1103":
{
	title: "Reality", artist: "SHK", channel: ORIGINAL, bpm: "135",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S3 S6 S14 S17 D4 D15 Sp4 Dp2  @1.51 S8",
},

"1104":
{
	title: "Take Out", artist: "SHK", channel: ORIGINAL, bpm: "170",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S4 S7 S11 S17 D13 D19 D22 Dp??(x3)  @1.20 S20  @1.30 D23",
},

"1105":
{
	title: "Butterfly", artist: "MAX & Rorychesell (SID-SOUND)", channel: ORIGINAL, bpm: "128",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S3 S6 S13 D7 D17 Sp2 Dp3  @1.10 S16  @1.51 S8",
},

"1106":
{
	title: "Overblow", artist: "MAX", channel: ORIGINAL, bpm: "155",
	Prime2: "=",
	Prime: "=  @1.11 Dp??(x2)",
	Fiesta2: "=",
	FiestaEX: "S4 S7 S10 S18 D12 D20 Sp2  @1.20 S16 S20 D18 Dp3",
},

"1107":
{
	title: "We Got 2 Know", artist: "MAX", channel: ORIGINAL, bpm: "128",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S5 S8 S17 S20 D4 D18 Sp2 Dp3  @1.30 Dp??(x3)  @1.51 S1",
},

"1108":
{
	title: "Magic", artist: "Secret", channel: KPOP, bpm: "107",
	Fiesta2: "=",
	FiestaEX: "S1 S4 S8 S13 D3 D14 Sp3 Dp4",
},

"1109":
{
	title: "Hot Issue", artist: "4Minute", channel: KPOP, bpm: "128",
	Fiesta2: "=  @1.50 D26",
	FiestaEX: "S3 S7 S10 D5 D13 Sp4 Dp5  @1.30 S16 D15",
},

"1110":
{
	title: "Magic Girl", artist: "Orange Caramel", channel: KPOP, bpm: "136",
	Fiesta2: "=",
	FiestaEX: "S4 S7 S11 D5 D13 D21 Sp3 Dp4  @1.10 S15  @1.30 D16",
},

"1111":
{
	title: "Ring Ding Dong", artist: "SHINee", channel: KPOP, bpm: "125",
	Fiesta2: "=",
	FiestaEX: "S3 S5 S8 S15 D5 D17 Sp3 Dp4",
},

"1112":
{
	title: "Shock", artist: "BEAST", channel: KPOP, bpm: "135",
	Fiesta2: "=",
	FiestaEX: "S3 S5 S14 D4 D15 Dp5  @1.10 S16  @1.51 S8",
},

"1113":
{
	title: "Last Farewell", artist: "Big Bang", bpm: "135",
	Fiesta2: "=",
	FiestaEX: "S2 S5 S13 S17 D6 D14 Sp3 Dp5  @1.51 S8",
},

"1114":
{
	title: "Superman", artist: "Norazo", channel: KPOP, bpm: "150",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S4 S6 S8 S14 D9 D15 Dp4 Dp??(x2)  @1.10 S16  @1.20 Sp1  @1.30 D23",
},

"1115":
{
	title: "Energy", artist: "Mighty Mouth", channel: KPOP, bpm: "155",
	Fiesta2: "=",
	FiestaEX: "S4 S8 S13 S15 D9 D14 Sp4 Dp5",
},

"1116":
{
	title: "Mother", artist: "1TYM", channel: KPOP, bpm: "96",
	Fiesta2: "=",
	FiestaEX: "S1 S4 S7 S13 D5 D14 Sp2 Dp3",
},

"1117":
{
	title: "No. 3", artist: "Bae Chi Gi", channel: KPOP, bpm: "128",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S4 S7 S16 D5 D16 Dp4  @1.51 S9",
},

"1118":
{
	title: "Like a Man", artist: "Outsider", channel: KPOP, bpm: "180",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S6 S8 S18 D10 D18  @1.20 Dp3  @1.51 S4",
},

"1119":
{
	title: "Crashday", artist: "Crash", channel: KPOP, bpm: "220",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S17 S23 D17 D26  @1.20 S24  @1.51 S4 S6 S11",
},

"1120":
{
	title: "What Happened", artist: "Throwdown", channel: WORLD, bpm: "130",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S17 S20 D20  @1.30 D23  @1.51 S3 S7 S12",
},

"1121":
{
	title: "Gargoyle", artist: "Sanxion7", channel: WORLD, bpm: "150",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=  @1.60 S22",
	FiestaEX: "S9 S18 D12 D20  @1.20 Sp2  @1.30 D23  @1.51 S4 S7",
},

"1122":
{
	title: "Allegro Con Fuoco", artist: "DM Ashura", channel: WORLD, bpm: "156",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=  @1.60 S22",
	FiestaEX: "S4 S7 S11 S17 D9 D18 Dp6  @1.20 Sp1  @1.30 D23",
},

"1123":
{
	title: "Hungarian Dance V", artist: "BanYa Production", bpm: "145",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S4 S6 S8 S17 D9 D17  @1.20 Sp2  @1.40 S18",
},

"1124":
{
	title: "The Devil", artist: "BanYa Production", bpm: "130 ~ 240",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S6 S9 S12 S20 D13 D21 Dp??(x2)  @1.51 S4",
},

"1125":
{
	title: "X-Rave", artist: "DM Ashura", channel: WORLD, bpm: "147",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.30 S3 S6 S9 S17 D11 D20 Sp2 Dp6",
},

"1126":
{
	title: "Native", artist: "SHK", channel: ORIGINAL, bpm: "135",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.30 S9 S17 S20 D10 D18 Sp2 Dp3  @1.51 S3 S5",
},

"1127":
{
	title: "Smells Like a Chocolate", artist: "Vospi", channel: WORLD, bpm: "175.9",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.30 S9 S16 D12 D17 Sp1 Dp3  @1.51 S4 S6",
},

"1128":
{
	title: "Necromancy", artist: "Zircon", channel: WORLD, bpm: "173",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.20 S10 S18 S20 D13 D19  @1.30 D24 Sp2 Dp3  @1.51 S4 S7",
},

"1129":
{
	title: "K-Pop Girl Group RMX", artist: "Secret & Orange Caramel & 4Minute & 2NE1", channel: KPOP, bpm: "128", duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "S14 D15",
},

"1130":
{
	title: "K-POP Boy Group RMX", artist: "BEAST & Big Bang & SHINee", channel: KPOP, bpm: "125 - 135", duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "@1.30 D17",
},

"1131":
{
	title: "Vacuum Cleaner", artist: "Doin", channel: ORIGINAL, bpm: "222.22", duration: REMIX,
	Prime2: "=",
	Prime: "=  @1.19 D20",
	Fiesta2: "=",
	FiestaEX: "@1.30 S15 S20 S25 D27",
},

"1132":
{
	title: "Everybody Got 2 Know", artist: "MAX", channel: ORIGINAL, bpm: "128", duration: REMIX,
	Prime2: "=",
	Prime: "= -S??",
	Fiesta2: "=",
	FiestaEX: "@1.20 S?? S19 D18",  // S?? – анлок, S19 без стопов
},

"1135":
{
	title: "Interference  [FULL]", artist: "Doin", channel: ORIGINAL, bpm: "180",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.40 S18 D15 D18",
},

"1136":
{
	title: "Magic Girl  [FULL]", artist: "Orange Caramel", channel: KPOP, bpm: "136",
	Fiesta2: "=",
	FiestaEX: "S12",
},

"1137":
{
	title: "Ring Ding Dong  [FULL]", artist: "SHINee", channel: KPOP, bpm: "125",
	Fiesta2: "=",
	FiestaEX: "@1.30 S16 D17",
},

"1138":
{
	title: "Shock  [FULL]", artist: "BEAST", channel: KPOP, bpm: "135",
	Fiesta2: "=",
	FiestaEX: "S17 D15",
},

"1139":
{
	title: "Energy  [FULL]", artist: "Mighty Mouth", channel: KPOP, bpm: "155",
	Fiesta2: "=",
	FiestaEX: "S15",
},

"1140":
{
	title: "Like a Man  [FULL]", artist: "Outsider", channel: KPOP, bpm: "180",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S19 D19",
},

"1141":
{
	title: "No. 3  [FULL]", artist: "Bae Chi Gi", channel: KPOP, bpm: "128",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S17 D18",
},

"1142":
{
	title: "Crashday  [FULL]", artist: "Crash", channel: KPOP, bpm: "220",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S22  @1.51 D22",
},

"1143":
{
	title: "Hot Issue  [FULL]", artist: "4Minute", channel: KPOP, bpm: "128",
	Fiesta2: "=",
	FiestaEX: "@1.30 S9 S14 D16",
},

"1145":
{
	title: "Trotpris  [SHORT]", artist: "Doin", channel: ORIGINAL, bpm: "156.118",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "D15  @1.30 S14",
},

"1146":
{
	title: "Cleaner  [SHORT]", artist: "Doin", channel: ORIGINAL, bpm: "203",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S21  @1.40 D20",
},

"1147":
{
	title: "Take Out  [SHORT]", artist: "SHK", channel: ORIGINAL, bpm: "170",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S18 D19",
},

"1148":
{
	title: "Overblow  [SHORT]", artist: "MAX", channel: ORIGINAL, bpm: "155",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S18 D17",
},

"1149":
{
	title: "X-Rave  [SHORT]", artist: "DM Ashura", channel: WORLD, bpm: "147",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S16 D18",
},

"1152":
{
	title: "Pavane", artist: "V.A.", channel: ORIGINAL, bpm: "160",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.30 S3 S6 S10 S17 D16 D22 Sp2",
},

"1153":
{
	title: "Pine Nut", artist: "Doin", channel: ORIGINAL, bpm: "200",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.51 S13 S20 D16",
},

"1154":
{
	title: "ASDF", artist: "Doin", channel: ORIGINAL, bpm: "170",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.51 S9 S17 D10 D17",
},

"1159":
{
	title: "Rave Until The Night Is Over", artist: "DM Ashura feat. MC Jay & Veronica", channel: WORLD, bpm: "144",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "@1.10 S5 S9 S15 D11 D17 Sp3 Dp4  @1.51 S2",
},

"1160":
{
	title: "Jonathan's Dream", artist: "MAX & Seorryang (SID-SOUND)", channel: ORIGINAL, bpm: "140",
	Prime2: "=",
	Prime: "= -D18",
	Fiesta2: "=  @1.50 D18",
	FiestaEX: "@1.51 S8 S16 D10 D15",
},


// \10 - Fiesta

"1001":
{
	title: "X-Tree", artist: "Yahpp", bpm: "190",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 Sp2 Dp3  @1.51 S3",
	Fiesta: "S7 S12 S20 D14 D18 D22",
},

"1002":
{
	title: "Sorceress Elise", artist: "Yahpp", bpm: "158",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 S15 S21",
	Fiesta: "S4 S6 S8 S10 S18 S23 D8 D17 D24 Dp??(x2)",
},

"1003":
{
	title: "Betrayer -Act. 2-", artist: "msgoon", channel: ORIGINAL, bpm: "92",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 D15",
	Fiesta: "S4 S6 S10 Sp3 Dp3",
},

"1004":
{
	title: "Good Life", artist: "Drunken Tiger", channel: KPOP, bpm: "98.2",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S2 S4 S15 D5 D16 Sp2 Dp3",
},

"1005":
{
	title: "Big Beat", artist: "NOW", channel: KPOP, bpm: "104",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S5 S13 S15  D6 D14  Sp3 Dp5",
},

"1006":
{
	title: "Exciting", artist: "Dynamic Duo", channel: KPOP, bpm: "104",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S2 S3 S14 D14 Sp5",
},

"1007":
{
	title: "By Chance", artist: "Baby V.O.X.", channel: KPOP, bpm: "127",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S5",
	Fiesta: "S2 S4 S15 D6 D16 Sp2 Dp4",
},

"1008":
{
	title: "U Got 2 Know", artist: "MAX", channel: ORIGINAL, bpm: "127",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S2 S7 S8",
	Fiesta: "S18 S19 D18 Sp2 Dp4  @1.05 S17",
},

"1009":
{
	title: "To the Sky", artist: "Lexy", channel: KPOP, bpm: "130",
	Fiesta2: "=",
	FiestaEX: "= S15",
	Fiesta: "S1 S3 S5 S12 D6 D16 Sp3 Dp6",
},

"1010":
{
	title: "The Angel Who Lost Wings", artist: "Roo'ra", channel: KPOP, bpm: "135",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S1 S4 S6 S13 D6 D16 Sp2 Dp3",
},

"1011":
{
	title: "Innocent", artist: "Koyote", channel: KPOP, bpm: "137",
	Fiesta2: "=",
	FiestaEX: "= S14",  // pumbi unlock
	Fiesta: "S3 S5 S11 D6 D15",
},

"1012":
{
	title: "Enjoy! Enjoy!", artist: "Mudagang", channel: KPOP, bpm: "138",
	Fiesta2: "=",
	FiestaEX: "= -S4",
	Fiesta: "S3 S4 S6 S11 S14 D7 D14 Sp4 Dp5",
	// Fiesta S4 gone after 1.10
},

"1013":
{
	title: "Destination", artist: "SHK", channel: ORIGINAL, bpm: "150",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S19  @1.10 Dp5",  // S19 - pumbi unlock
	Fiesta: "S11 S18 D13 D20  @1.05 S16  @1.10 S4 S7",
},

"1014":
{
	title: "Twist King", artist: "Turbo", channel: KPOP, bpm: "156",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S10",
	Fiesta: "S4 S6 S14 D7 D15 Sp4",
},

"1015":
{
	title: "Fire", artist: "2NE1", bpm: "126",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 D14",
	Fiesta: "S3 S5 S8 S15 D4 D11 Sp3 Dp4  @1.05 S16",
},

"1016":
{
	title: "Wanna", artist: "Kara", bpm: "161",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S2 S4 S9 S16 D3 D12 Sp2 Dp5  @1.05 D17",
},

"1017":
{
	title: "Vacuum", artist: "Doin", channel: ORIGINAL, bpm: "200",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=  @1.60 S19",
	FiestaEX: "=  @1.10 Dp3",
	Fiesta: "S21 S23 D25  @1.05 D22",
},

"1018":
{
	title: "Narcisista Por Excelencia", artist: "PXNDX", bpm: "164",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3",
	Fiesta: "S5 S8 S16 D9 D18",
},

"1019":
{
	title: "No Rhyme No Reason", artist: "LTJ X-Perience", channel: WORLD, bpm: "110",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S8",
	Fiesta: "S2 S5 S15 Sp2  @1.05 D20",
},

"1020":
{
	title: "80's Pop", artist: "Energy Presents", channel: WORLD, bpm: "128",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S8",
	Fiesta: "S2 S5 S12 D6 D17 Sp3 Dp4  @1.05 S16",
},

"1021":
{
	title: "Do It -Reggae Style-", artist: "BanYa Production", bpm: "96",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S13 D15 Sp4 Dp5",
},

"1022":
{
	title: "Xenesis", artist: "BanYa Production", bpm: "152",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 Sp1",
	Fiesta: "S4 S7 S10 S18 D12 D15 D18",
},

"1023":
{
	title: "Arirang", artist: "BanYa Production", bpm: "160",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 Dp2",
	Fiesta: "S9 S18 S22 D10 D20",
},

"1024":
{
	title: "Tek -Club Copenhagen-", artist: "BanYa Production", bpm: "132",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S3 S5 S16 D17 Sp5 Dp4  @1.10 S17",
},

"1025":
{
	title: "Hello William", artist: "BanYa Production", bpm: "170",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4 S6 S9 S19 D9 D21  @1.10 S17",
},

"1026":
{
	title: "Turkey March -Minimal Tunes-", artist: "BanYa Production", bpm: "130",
	shortTitle: "Turkey March -Minimal-",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= Dp1",
	Fiesta: "S3 S6 S8 S17 D10 D18",
},

"1027":
{
	title: "Get Up (and Go)", artist: "BanYa Production", bpm: "164",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.10 Dp3",
	Fiesta: "S4 S7 S10 S17 D11 D20",
},

"1028":
{
	title: "Phantom -Intermezzo-", artist: "BanYa Production", bpm: "140",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= D20 Dp3  @1.51 S3 S7",
	Fiesta: "S12 S19 S21 D15 D19  @1.05 S15",
},

"1029":
{
	title: "Mission Possible -Blowback-", artist: "BanYa Production", bpm: "128",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S18 D17 Sp3 Dp5",
},

"1030":
{
	title: "Pumping Jumping", artist: "BanYa Production", bpm: "116",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "= S19",
	Fiesta: "S1 S3 S5 S13 S15 S17 D6 D17 Sp4 Dp5 Dp6",
},

"1031":
{
	title: "B.P Classic Remix", artist: "BanYa Production", bpm: "164", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S18",
	Fiesta: "S12 D13 D19",
},

"1032":
{
	title: "K-Pop Mix (Old & New)", artist: "BanYa Production", bpm: "138", duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7 S13",
},

"1033":
{
	title: "PaPa Helloizing", artist: "BanYa Production", bpm: "145 ~ 158", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S19",
	Fiesta: "S8",
},

"1034":
{
	title: "B.P Classic Remix 2", artist: "BanYa Production", bpm: "180", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S11 S18",
},

"1035":
{
	title: "Hard Core Rock Mix", artist: "BanYa Production", bpm: "???", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S18 S21",
},

"1036":
{
	title: "Pro Pop Mix (new remix)", artist: "BanYa Production", bpm: "151", duration: REMIX,
	shortTitle: "Pro Pop Mix (new)",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S17",
},

"1037":
{
	title: "Set Up Me2 Mix", artist: "BanYa Production", bpm: "122", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S17",
},

"1038":
{
	title: "msgoon RMX pt. 5", artist: "msgoon", channel: ORIGINAL, duration: REMIX, bpm: "102.8",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S17 D17 Sp3 Dp4",
},

"1039":
{
	title: "msgoon RMX pt. 6", artist: "msgoon", channel: ORIGINAL, bpm: "150", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "D19 S20",
},

"1040":
{
	title: "msgoon RMX pt. 7", artist: "msgoon", channel: ORIGINAL, duration: REMIX, bpm: "130",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S17 Dp4",
},

"1041":
{
	title: "History: We Are The Zest", artist: "msgoon", channel: ORIGINAL, bpm: "112.5", duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp6 Dp5",
},

"1042":
{
	title: "Deja Vu  [FULL]", artist: "SOM2", channel: KPOP, bpm: "115",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7 S16 D16",
},

"1043":
{
	title: "Narcisista Por Excelencia  [FULL]", artist: "PXNDX", bpm: "164",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S17 D18",
},

"1044":
{
	title: "Dawn of the Apocalypse  [FULL]", artist: "Vassline", channel: KPOP, bpm: "???",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S21",
	Fiesta: "S15",
},

"1045":
{
	title: "Fire  [FULL]", artist: "2NE1", bpm: "126",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S14",
},

"1046":
{
	title: "Wanna  [FULL]", artist: "Kara", bpm: "161",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S16",
},

"1047":
{
	title: "Pump It Up With You", artist: "msgoon", channel: ORIGINAL, bpm: "105-135", duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S17 D17",
},

"1048":
{
	title: "Final Audition 2  [SHORT]", artist: "BanYa", bpm: "130",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S16 D17 -D18",
	// переоценка или новый чарт?
	Fiesta: "D18",
},

"1049":
{
	title: "Final Audition 3 U.F  [SHORT]", artist: "BanYa", bpm: "130.5",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S17",
	Fiesta: "D16",
},

"1050":
{
	title: "Final Audition episode 2-X  [SHORT]", artist: "Yahpp", bpm: "170",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S20",
	Fiesta: "D19",
},

"1061":
{
	title: "K.O.A : Alice in Wonderworld  [SHORT]", artist: "BanYa Production", bpm: "156",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= D18",
	Fiesta: "S8 S16",
},

"1051":
{
	title: "Love is a Danger Zone  [SHORT]", artist: "BanYa", bpm: "140",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S20",
	Fiesta: "D17  @1.06 S13",
},

"1052":
{
	title: "Love is a Danger Zone 2  [SHORT]", artist: "BanYa", bpm: "162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S19 D21  @1.06 S8",
},

"1053":
{
	title: "Extravaganza  [SHORT]", artist: "BanYa", bpm: "195",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S14 Sp15  @1.06 D14 D21",
},

"1054":
{
	title: "Chicken Wing  [SHORT]", artist: "BanYa", bpm: "200",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S20 D13",
},

"1055":
{
	title: "Winter  [SHORT]", artist: "BanYa", bpm: "168",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= D17",
	Fiesta: "S6 S9 S16  @1.06 D10",
},

"1056":
{
	title: "Solitary 2  [SHORT]", artist: "BanYa", bpm: "136",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S18",
	Fiesta: "D17",
},

"1057":
{
	title: "Moonlight  [SHORT]", artist: "BanYa", bpm: "180",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= D20",
	Fiesta: "S18  @1.06 S16",
},

"1058":
{
	title: "Witch Doctor  [SHORT]", artist: "BanYa", bpm: "195",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S20",
	Fiesta: "D16  @1.06 S14",
},

"1059":
{
	title: "Exceed 2 Opening", artist: "BanYa Production", bpm: "178", duration: SHORT, fromMix: "Fiesta",
	Prime2: "=",
	Prime: "= -D??(x9)",
	Fiesta2: "=",
	FiestaEX: "= D??(x9).nm",
	Fiesta: "S15  @1.06 D19",
	Exceed2: ["", "", "", "", "??(x9)"],
},

"1060":
{
	title: "NX Opening", artist: "Yahpp", bpm: "133", duration: SHORT,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S16 D17",
},

"1062":
{
	title: "Bemera  [SHORT]", artist: "Yahpp", bpm: "210",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S21 D19  @1.06 S13 S23",
},

"1063":
{
	title: "Pumptris (8Bit ver.)  [SHORT]", artist: "Yahpp", bpm: "162",
	shortTitle: "Pumptris (8Bit)",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= D22",
	Fiesta: "S16  @1.06 S8",
},

"1064":
{
	title: "Destination  [SHORT]", artist: "SHK", channel: ORIGINAL, bpm: "150",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S15 D18  @1.06 S9 D20",
},

"1065":
{
	title: "Procedimientos Para Llegar a un Comun Acuerdo  [SHORT]", artist: "PXNDX", bpm: "160",
	shortTitle: "Procedimientos Para Llegar\na un Comun Acuerdo",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S18 D16",
},

"1094":
{
	title: "Tepris", artist: "Doin", channel: ORIGINAL, bpm: "145",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "@1.10 S2 S7 S16 Dp??(x2) S4 D9 D18",
},

"1095":
{
	title: "Napalm", artist: "Doin", channel: ORIGINAL, bpm: "185",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "@1.10 S13 S19 S22 D14 D23",
},

"1096":
{
	title: "Dieciseis", artist: "Nina Pilots", channel: WORLD, bpm: "143",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "@1.10 S2 S4 S6 S13 D5 D15",
},


// \F - NXA

"F01":
{
	title: "Blaze Emotion", artist: "Yahpp", bpm: "170",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3 S6 S9",
	Fiesta: "S2.nl S7.hd S17.cz D10.fs D17.nm  S16.acz D18.anm",
	NXA: ["2", "7", "17", "10", "18"], NXA_: ["", "", "17", "", "18"],
},

"F02":
{
	title: "Cannon X.1", artist: "Yahpp", bpm: "185",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S7",
	Fiesta: "S3.nl S10.hd S20.cz D13.fs D22.nm  S21.acz",
	NXA: ["3", "10", "20", "13", "23"], NXA_: ["", "8", "21", "10", ""],
},

"F03":
{
	title: "Chopsticks Challenge", artist: "Yahpp", bpm: "128",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S6.hd S17.cz D3.fs D16.nm Sp1",  //? nl
	NXA: ["3", "6", "17", "3", "16"],
},

"F04":
{
	title: "La La La", artist: "Big Bang", bpm: "102",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S1",
	Fiesta: "Sp2.nl S5.hd S10.cz Dp5.fs D13.nm  @1.10 S3",
	NXA: ["2", "5", "10", "5", "13"],
},

"F05":
{
	title: "Adios", artist: "Eun Ji Won", bpm: "123",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S1",
	Fiesta: "Sp2.nl S6.hd S14.cz Dp4.fs D16.nm  @1.10 S3",
	NXA: ["2", "6", "14", "4", "16"],
},

"F06":
{
	title: "Slightly", artist: "45rpm", channel: KPOP, bpm: "120",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 D14",
	Fiesta: "Sp1.nl S4.hd S14.cz Dp5.fs D12.nm",
	NXA: ["1", "4", "14", "5", "12"],
},

"F07":
{
	title: "I'm Your Girl", artist: "S.E.S", channel: KPOP, bpm: "102",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S5.hd S12.cz Dp6.fs D10.nm  S1.new S3.new",
	NXA: ["2", "5", "12", "6", "10"],
},

"F08":
{
	title: "Only You", artist: "Namolla Family", channel: KPOP, bpm: "108",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S3.nl S6.hd S12.cz D3.fs D13.nm",
	NXA: ["3", "6", "12", "3", "13"],
},

"F09":
{
	title: "Chocolate", artist: "Banana Girl", channel: KPOP, bpm: "130",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S5.hd S9.cz Dp3.fs D9.nm  S6.ahd S13.acz D15.anm",
	NXA: ["2", "5", "9", "3", "9"], NXA_: ["", "6", "13", "", "15"],
},

"F10":
{
	title: "Forward", artist: "DJ Missill", channel: KPOP, bpm: "97",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S2",
	Fiesta: "Sp2.nl S5.hd S13.cz Dp5.fs D13.nm  @1.10 S4",
	NXA: ["2", "5", "13", "5", "13"],
},

"F11":
{
	title: "Uprock", artist: "Sam-I-Am", channel: WORLD, bpm: "120",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S5.hd S17.cz Dp4.fs D14.nm",
	NXA: ["2", "5", "17", "4", "14"],
},

"F12":
{
	title: "Crazy", artist: "Gyfted", channel: KPOP, bpm: "108",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 Dp3  @1.51 S2 S4 S8",
	Fiesta: "Sp2.nl S5.hd S15.cz Dp6.fs D19.nm",
	NXA: ["2", "6", "15", "6", "19"],
},

"F13":
{
	title: "Panuelito Rojo", artist: "Big Metra", channel: WORLD, bpm: "98",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp1.nl S5.hd S10.cz Dp4.fs D18.nm",
	NXA: ["1", "5", "10", "4", "18"],
},

"F14":
{
	title: "Procedimientos Para Llegar a un Comun Acuerdo", artist: "PXNDX", bpm: "160",
	shortTitle: "Procedimientos Para Llegar\na un Comun Acuerdo",
	Prime2: "=",
	Prime: "=  @1.19 S18 D19",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S3.nl S7.hd S15.cz D7.fs D16.nm",
	NXA: ["3", "7", "15", "7", "16"],
},

"F15":
{
	title: "Digan Lo Que Digan", artist: "Nina Pilots", channel: WORLD, bpm: "162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S7 S9",
	Fiesta: "S3.nl S6.hd S16.cz Dp8.fs D13.nm  D18",
	NXA: ["3", "6", "16", "8", "13"],
},

"F16":
{
	title: "Pump Breakers", artist: "Tico", channel: WORLD, bpm: "120",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S5.nl S17.cz Dp4.fs  D15",  // после NXA убрали удвоение BPM - считать другим чартом
	NXA: ["2", "5", "17", "4", "15"],
},

"F17":
{
	title: "Change Myself", artist: "Wang Lee Hom", channel: WORLD, bpm: "104",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp1.nl S5.hd S10.cz Dp5.fs D9.nm  S1.new S4.new",
	NXA: ["1", "5", "10", "5", "9"],
},

"F18":
{
	title: "Come On!", artist: "Lee Jeong Hyun", channel: WORLD, bpm: "141",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S2.nl S5.hd S12.cz Dp4.fs D9.nm  S4",
	NXA: ["2", "5", "12", "4", "9"],
},

"F19":
{
	title: "Bad Character", artist: "Jang Na Ra", channel: WORLD, bpm: "100",
	Fiesta2: "=",
	FiestaEX: "= -S5",
	Fiesta: "Sp1.nl S5.hd S10.cz  Dp3.fs D11.nm  S3.new S6.new",
	NXA: ["1", "6", "10", "3", "11"],
},

"F20":
{
	title: "U", artist: "Super Junior M", channel: KPOP, bpm: "115",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S6.hd S14.cz Dp5.fs D13.nm  S1.new Sp1.new S4.new",
	NXA: ["2", "6", "14", "5", "13"],
},

"F21":
{
	title: "Breakin' Love", artist: "Yoo Seung Jun", channel: WORLD, bpm: "102",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S6.hd S12.cz  Dp4.fs D14.nm",
	NXA: ["2", "6", "12", "4", "14"],
},

"F22":
{
	title: "The People Didn't Know", artist: "BanYa Production", bpm: "134",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S2.nl S5.hd S15.cz D7.fs D17.nm",
	NXA: ["2", "5", "15", "7", "17"],
},

"F23":
{
	title: "DJ Otada", artist: "BanYa Production", bpm: "180",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S6",
	Fiesta: "S4.nl S8.hd S19.cz D14.fs D22.nm",
	NXA: ["4", "8", "19", "14", "22"], NXA_: ["", "", "20", "", "21"],
},

"F24":
{
	title: "K.O.A. -Alice in Wonderworld-", artist: "BanYa Production", bpm: "156",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S2",
	Fiesta: "S3.nl S8.hd S17.cz D18.nm  S5.new D10.new",
	NXA: ["3", "8", "17", "9", "18"],
},

"F25":
{
	title: "My Dreams", artist: "BanYa Production", bpm: "136",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4.nl S10.hd S18.cz Dp5.fs D18.nm  S17.acz",
	NXA: ["4", "10", "18", "5", "18"], NXA_: ["", "", "19", "", ""],
},

"F26":
{
	title: "Toccata", artist: "BanYa Production", bpm: "104",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S10.hd S17.cz Dp6.fs D14.nm  D17.afs  @1.10 S4.new S7.new",
	NXA: ["3", "10", "17", "6", "14"], NXA_: ["", "16", "", "17", ""],  //? проверить спешл зону
},

"F27":
{
	title: "Do It!", artist: "House Rulez", channel: KPOP, bpm: "129",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S6.hd S15.cz Dp4.fs D18.nm",
	NXA: ["2", "6", "15", "5", "18"],
},

"F28":
{
	title: "Dawn of the Apocalypse", artist: "Vassline", channel: KPOP, bpm: "160-190",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4.nl S14.hd S21.cz D14.fs D21.nm",
	NXA: ["4", "14", "21", "14", "21"],
	// NXA unlock
},

"F29":
{
	title: "Final Audition episode 2-X", artist: "Yahpp", bpm: "170",
	shortTitle: "Final Audition ep. 2-X",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 Dp2  @1.51 S3 S5",
	Fiesta: "S8.nl S17.hd S23.cz D21.fs D24.nm",
	NXA: ["8", "17", "??(23)", "21", "??(24)"],
},

"F30":
{
	title: "45rpm & Eun Ji Won Remix", artist: "45RPM / Eun Ji Won", channel: KPOP, bpm: "123", duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S11.cz Dp5.fs D14.nm",
	NXA_: ["", "", "11", "5", "14"],
},

"F31":
{
	title: "The People Didn't Know Pumping Up", artist: "BanYa Production", bpm: "134", duration: REMIX,
	shortTitle: "The People Didn't Know\nPumping Up",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7.hd D4.fs D17.nm",
	NXA_: ["", "7", "", "4", "17"],
},

"F32":
{
	title: "Ugly Duck Toccata", artist: "BanYa Production", bpm: "104", duration: REMIX,
	NXA_: ["", "12", "15", "", "16"],
},

"F33":
{
	title: "Caprice of DJ Otada", artist: "BanYa Production", bpm: "180", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 D25",
	Fiesta: "S11.hd S19.cz D22.nm",
	NXA_: ["", "11", "19", "", "22"],
},

"F34":
{
	title: "Dr. KOA", artist: "BanYa Production", bpm: "156", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S8.hd S18.cz D20.nm",
	NXA_: ["", "8", "18", "", "20"],
},

"F35":
{
	title: "Jam O Beat # No. 4", artist: "BanYa Production / HEaDTriP", channel: ORIGINAL, bpm: "121", duration: REMIX,
	NXA_: ["", "", "16", "6", "16"],
},

"F36":
{
	title: "YG Remix", artist: "Big Bang / Perry", channel: KPOP, bpm: "102", duration: REMIX,
	NXA_: ["", "5", "", "6", "15"],
},

"F37":
{
	title: "Nina PXNDX Mix", artist: "Nina Pilots / PXNDX", channel: WORLD, bpm: "160", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S6.hd S16.cz D8.fs",
	NXA_: ["", "6", "16", "8", ""],
},

"F38":
{
	title: "Big Metra Remix", artist: "Big metra", channel: WORLD, bpm: "105", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S5.hd S19.cz D17.nm",
	NXA_: ["", "5", "19", "", "17"],
},

"F39":
{
	title: "NXA Hip-Hop Mix", artist: "DJ Missill / Gyfted", channel: WORLD, bpm: "108", duration: REMIX,
	NXA_: ["", "6", "13", "4", ""],
},

"F40":
{
	title: "Novasonic Mix ver. 3", artist: "Novasonic", bpm: "136", duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S6.hd S17.cz D19.nm",
	NXA_: ["", "6", "17", "", "19"],
},

"F41":
{
	title: "Mr. Fire Fighter Falls in Love With Me", artist: "Spooky Banana / No Brain", channel: KPOP, bpm: "158", duration: REMIX,
	shortTitle: "Mr. Fire Fighter\nFalls in Love With Me",
	NXA_: ["", "8", "15", "9", ""],
},

"F42":
{
	title: "J Knows That Old Bong", artist: "BanYa Production", bpm: "130", duration: REMIX,
	NXA_: ["", "8", "17", "", "18"],
},

"F43":
{
	title: "Turkey Virus", artist: "BanYa Production", bpm: "150-162", duration: REMIX,
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S8.hd S15.cz D11.fs",
	NXA_: ["", "8", "15", "11", ""],
},

"F44":
{
	title: "msgoon RMX pt. 1", artist: "msgoon", channel: ORIGINAL, bpm: "120", duration: REMIX,
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7.hd S17.cz D17.nm",
	NXA_: ["", "7", "17", "", "17"],
},

"F45":
{
	title: "msgoon RMX pt. 2", artist: "msgoon", channel: KPOP, bpm: "105", duration: REMIX,
	NXA_: ["", "5", "16", "5", ""],
},

"F46":
{
	title: "msgoon RMX pt. 3", artist: "msgoon", channel: ORIGINAL, bpm: "168", duration: REMIX,
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S6.hd S17.cz D11.fs D20.nm",
	NXA_: ["", "6", "17", "11", "20"],
},

"F50":
{
	title: "Chopsticks Challenge  [FULL]", artist: "Yahpp", bpm: "128",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S15.cz D19.nm",
	NXA_: ["", "", "15", "3", "19"],
},

"F51":
{
	title: "La La La  [FULL]", artist: "Big Bang", bpm: "102",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4.hd S14.cz",
	NXA_: ["", "4", "14", "4", ""],
},

"F52":
{
	title: "Adios  [FULL]", artist: "Eun Ji Won", bpm: "123",
	NXA_: ["", "4", "15", "4", ""],
},

"F53":
{
	title: "Panuelito Rojo  [FULL]", artist: "Big Metra", channel: WORLD, bpm: "98",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S9.hd S16.cz D18.nm",
	NXA_: ["", "9", "16", "", "18"],
},

"F54":
{
	title: "Procedimientos Para Llegar a un Comun Acuerdo  [FULL]", artist: "PXNDX", bpm: "160",
	shortTitle: "Procedimientos Para Llegar\na un Comun Acuerdo",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S6.hd S17.cz D7.fs",
	NXA_: ["", "6", "17", "7", ""],
},

"F55":
{
	title: "Forward  [FULL]", artist: "DJ Missill", channel: KPOP, bpm: "97",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4.hd S15.cz D5.fs",
	NXA_: ["", "4", "15", "5", ""],
},

"F56":
{
	title: "Slightly  [FULL]", artist: "45rpm ft. msgoon", channel: KPOP, bpm: "120",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S5.hd S17.cz",
	NXA_: ["", "5", "17", "5", ""],
},

"F58":
{
	title: "Chocolate  [FULL]", artist: "Banana Girl", channel: KPOP, bpm: "130",
	NXA_: ["", "6", "15", "8", ""],
},

"F63":
{
	title: "Change Myself  [FULL]", artist: "Wang Lee Hom", channel: WORLD, bpm: "104.5",
	NXA_: ["", "3", "14", "3", ""],
},

"F65":
{
	title: "Beat # No.4  [FULL]", artist: "HEaDTriP", channel: KPOP, bpm: "121",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S17.cz Dp6.fs D19.nm",
	NXA_: ["", "", "17", "6", "19"],
},

"F57":
{
	title: "Come On!  [FULL]", artist: "Lee Jeong Hyun", channel: WORLD, bpm: "140",
	NXA_: ["", "6", "", "6", ""],
},

"F59":
{
	title: "Digan Lo Que Digan  [FULL]", artist: "Nina Pilots", channel: WORLD, bpm: "162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7.hd S18.cz",
	NXA_: ["", "7", "18", "9", ""],
},

"F60":
{
	title: "Trato De No Trabarme  [FULL]", artist: "Big metra", channel: WORLD, bpm: "105",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S10.hd S22.cz D24.nm",
	NXA_: ["", "10", "23", "", "25"],
},

"F61":
{
	title: "Crazy  [FULL]", artist: "Gyfted", channel: KPOP, bpm: "108",
	NXA_: ["", "3", "13", "3", ""],
},

"F62":
{
	title: "U  [FULL]", artist: "Super Junior M", channel: KPOP, bpm: "115",
	NXA_: ["", "3", "15", "3", ""],
},

"F64":
{
	title: "Enter the Dragon  [FULL]", artist: "JTL", channel: KPOP, bpm: "110",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S17.cz Dp3.fs D18.nm",
	NXA_: ["", "", "17", "3", "18"],
},

"F80":
{
	title: "In Your Fantasy", artist: "Taiji Boys", bpm: "130", fromMix: "NXA",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "@1.10 S2 S4 S6 S14 D7 D16 Dp3",
},


// \E - NX2

"E01":
{
	title: "Solitary 1.5", artist: "Yahpp", bpm: "136",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp4.nl S7.hd S16.cz Dp6.fs D18.nm",
	NXA: ["4", "7", "16", "6", "18"],
	NX2: ["3", "7", "16", "6", "18"],
},

"E02":
{
	title: "Beat the Ghost", artist: "BanYa Production", bpm: "124",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S3.nl S9.hd S18.cz D7.fs D20.nm  @1.10 S20",
	NX2: ["3", "9", "18", "7", "20"],
},

"E03":
{
	title: "Caprice of Otada", artist: "BanYa Production", bpm: "160",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=  @1.50 D21.anm",
	FiestaEX: "=  @1.51 S6",
	Fiesta: "S8.hd S17.cz D10.fs D18.nm  @1.10 S4",
	NXA: ["3", "8", "17", "10", "18"], NXA_: ["", "17", "19", "19", "21"],
	NX2: ["3", "8", "17", "9", "19"], NX2_: ["", "16", "19", "18", "21"],
},

"E04":
{
	title: "Money", artist: "BanYa Production", bpm: "130",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "Sp4.nl S10.hd S14.cz D12.fs D16.nm",
	NX2: ["4", "7", "13", "8", "16"],
},

"E05":
{
	title: "Monkey Fingers 2", artist: "BanYa Production", bpm: "180",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S6 S10 S17.cz D9 D19.nm",  //?
	NX2: ["4", "8", "17", "7", "19"],
},

"E06":
{
	title: "Nice to Meet You", artist: "Bae Chi Gi", channel: KPOP, bpm: "117",
	NXA: ["2", "5", "14", "5", "14"],
	NX2: ["2", "5", "14", "5", "14"],
},

"E07":
{
	title: "Very Old Couples", artist: "015B", channel: KPOP, bpm: "121",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S6.hd S13.cz Dp6.fs D15.nm",
	NXA: ["2", "6", "13", "6", "15"],
	NX2: ["3", "6", "13", "6", "15"],
},

"E08":
{
	title: "Get My Phone Call", artist: "Mina", channel: KPOP, bpm: "108",
	NXA: ["1", "5", "13", "5", "14"],
	NX2: ["1", "5", "13", "5", "14"],
},

"E09":
{
	title: "Shiny Day", artist: "Joanne", channel: KPOP, bpm: "106",
	NXA: ["3", "5", "13", "4", "14"],
	NX2: ["3", "5", "13", "4", "14"],
},

"E10":
{
	title: "A.U. Ready?", artist: "Gil Gun", channel: KPOP, bpm: "94",
	NXA: ["1", "5", "10", "5", "12"], NXA_: ["", "", "", "13", "16"],
	NX2: ["2", "5", "10", "5", "12"], NX2_: ["", "", "", "12", "15"],
},

"E11":
{
	title: "V.I.P.", artist: "Bada", channel: KPOP, bpm: "112",
	NXA: ["3", "5", "11", "5", "15"],
	NX2: ["3", "5", "11", "5", "13"],
},

"E12":
{
	title: "Faster Z", artist: "Yahpp", bpm: "162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S6  @1.30 D23",
	Fiesta: "S4.nl S12.hd S19.cz D14.fs D20.nm  S8.anl S16.ahd S20.acz",
	NXA: ["4", "12", "19", "14", "20"], NXA_: ["8", "16", "19", "18", "22"],
	NX2: ["4", "11", "20", "15", "??(24)"], NX2_: ["", "15", "19", "19", "20"],
},

"E13":
{
	title: "Pumptris Quattro", artist: "Yahpp", bpm: "153",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S3.nl S7.hd S19.cz D13.fs D20.nm  Sp10.anl S12.ahd S17.acz Dp2.afs D22.anm",
	NXA: ["3", "7", "19", "13", "20"], NXA_: ["10", "12", "17", "2", "22"],
	NX2: ["3", "8", "20", "14", "??(22)"], NX2_: ["7", "8", "17", "4", "22"],
},

"FE13B":
{
	altID: "E13B",
	title: "Pumptris Quattro (8bit version)", artist: "Yahpp", bpm: "162",
	shortTitle: "Pumptris Quattro (8bit)",
	Prime2: "=",
	Prime: "= -D??(x3)",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3 S5 S8",
	Fiesta: "S16 S17 D??(x3) Sp15 Dp??(x2)",  //?
	NXA_: ["16", "16", "17", "??(x3)", "??(x2)"],
},

"E14":
{
	title: "It's My Business", artist: "Taiji Boys", bpm: "200",
	NXA: ["3", "11", "20", "13", "21"], NXA_: ["", "", "14", "", "17"],
	NX2: ["3", "10", "20", "13", "21"], NX2_: ["", "", "10", "", "14"],
},

"E15":
{
	title: "You Fell in Me", artist: "No Brain", channel: KPOP, bpm: "152",
	NXA: ["2", "6", "16", "8", "16"], NXA_: ["", "", "16", "", "17"],
	NX2: ["2", "6", "17", "8", "16"], NX2_: ["", "", "16", "", "18"],
},

"E16":
{
	title: "Maelstrom", artist: "Pia", channel: KPOP, bpm: "102",
	NXA: ["2", "5", "16", "5", "19"],
	NX2: ["3", "5", "16", "5", "18"],
},

"E17":
{
	title: "Astral Song", artist: "Crying Nut", bpm: "~190",
	NXA: ["3", "7", "15", "8", "17"],
	NX2: ["4", "9", "15", "9", "17"],
},

"E18":
{
	title: "No Despair", artist: "Hot Potato", channel: KPOP, bpm: "160",
	NXA: ["2", "6", "19", "8", "21"],
	NX2: ["1", "6", "18", "8", "20"],
},

"E19":
{
	title: "Compunction", artist: "May", channel: KPOP, bpm: "133",
	NXA: ["2", "6", "16", "4", "17"],
	NX2: ["2", "6", "16", "4", "17"],
},

"E20":
{
	title: "Beat # No.4", artist: "HeaDTriP", channel: KPOP, bpm: "121",
	Prime: "=  @1.19 D18",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S6.hd S15.cz Dp5.fs D17.nm",
	NXA: ["2", "6", "15", "5", "17"],
	NX2: ["2", "6", "16", "5", "17"],
},

"E21":
{
	title: "Come Back Home", artist: "Taiji Boys", bpm: "93",
	NXA: ["1", "4", "", "4", ""],
	NX2: ["1", "4", "", "4", ""],
},

"E22":
{
	title: "Feel the Soul", artist: "Seo Taiji", bpm: "93.54",
	NXA: ["2", "7", "17", "4", "18"],
	NX2: ["3", "9", "18", "4", "20"],
},

"E23":
{
	title: "Guitar Man", artist: "BanYa Production", bpm: "120",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "S3.nl S9 S13.cz D10 D13.nm  S18.acz D19.anm",  //? hd fs
	NX2: ["3", "7", "12", "7", "13"], NX2_: ["", "", "17", "", "20"],
},

"E24":
{
	title: "Higgledy Piggledy", artist: "BanYa Production", bpm: "150",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=  @1.51 S16",
	FiestaEX: "=  @1.51 S9",
	Fiesta: "Sp1.nl S6.hd S14.cz D8.fs D15.nm  S2.new",
	NXA: ["1", "6", "14", "8", "15"], NXA_: ["", "16", "18", "", ""],
	NX2: ["2", "7", "15", "8", "17"], NX2_: ["", "16", "18", "", ""],
},

"E25":
{
	title: "Jam o' Beat", artist: "BanYa Production", bpm: "120",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S7.hd S14.cz Dp6.fs D14.nm",
	NXA: ["2", "7", "14", "6", "14"],
	NX2: ["3", "7", "15", "6", "16"],
},

"E26":
{
	title: "Chopstix", artist: "Sonic Dimension", channel: WORLD, bpm: "134",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S5.hd S13.cz Dp2.fs D15.nm",
	NXA: ["2", "5", "13", "2", "15"],
	NX2: ["3", "5", "14", "2", "16"],
},

"E27":
{
	title: "Dance All Night", artist: "Oscillator X", channel: WORLD, bpm: "140",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S5.hd S13.cz D15.nm",
	NXA: ["2", "5", "13", "2", "15"],
	NX2: ["3", "6", "11", "6", "13"],
},

"E28":
{
	title: "Dance Vibrations", artist: "Elpis", channel: WORLD, bpm: "130",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4",
	Fiesta: "Sp1.nl S5.hd S10.cz Dp6.fs D15.nm  S14.acz D18.anm",
	NXA: ["1", "5", "10", "6", "15"],
	NX2: ["2", "6", "10", "6", "15"], NX2_: ["", "", "14", "", "18"],
},

"E29":
{
	title: "Energizer", artist: "ZiGZaG", channel: WORLD, bpm: "151",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S7",
	Fiesta: "Sp2.nl S9.hd S16.cz D11.fs D17.nm",
	NXA: ["2", "9", "16", "11", "17"],
	NX2: ["3", "9", "16", "10", "17"],
},

"E30":
{
	title: "Groovin' Motion", artist: "Sonic Dimension", channel: WORLD, bpm: "130",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S6.hd S9.cz Dp6.fs D11.nm",
	NXA: ["3", "6", "9", "6", "11"],
	NX2: ["3", "6", "12", "6", "12"],
},

"E31":
{
	title: "Tell Me", artist: "Wonder Girls", channel: KPOP, bpm: "127",
	NXA: ["1", "5", "12", "5", "14"],
	NX2: ["2", "5", "14", "5", "16"],
	// Korean only on NX2
},

"E50":
{
	title: "BanYa-P Guitar Remix", artist: "BanYa Production", bpm: "120", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S22.cz D24.nm",
	NXA_: ["", "", "22", "", "24"],
	NX2_: ["", "", "25", "", "25"],
},

"E51":
{
	title: "Guitar Man  [FULL]", artist: "BanYa Production", bpm: "120", duration: REMIX,
	NX2_: ["", "8", "", "9", ""],
},

"E52":
{
	title: "Money Fingers", artist: "BanYa Production", bpm: "170", duration: REMIX,
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S8.hd S16.cz D9.fs D17.nm",
	NX2_: ["", "9", "14", "10", "18"],
},

"E53":
{
	title: "Monkey Fingers  [FULL]", artist: "BanYa Production", bpm: "186", duration: REMIX,
	NXA_: ["", "8", "16", "9", "17"],
	NX2_: ["5", "9", "17", "7", "19"],
},

"E54":
{
	title: "NX2 K-Pop Remix 1", artist: "U;Nee/Duke/Lee Hyun Do", channel: KPOP, bpm: "136", duration: REMIX,
	NXA_: ["", "6", "13", "7", "16"],
	NX2_: ["", "8", "15", "9", "16"],
},

"E55":
{
	title: "NX2 K-Hip Hop Remix", artist: "Eun Ji Won/Dynamic Duo", channel: KPOP, bpm: "110", duration: REMIX,
	NX2_: ["", "7", "14", "", "15"],
},

"E56":
{
	title: "Astral Song  [FULL]", artist: "Crying Nut", bpm: "??? (~190)", duration: REMIX,
	NX2_: ["", "8", "", "", ""],
},

"E57":
{
	title: "NX2 K-Pop Remix 2", artist: "Mina/Bae Chi Gi", channel: KPOP, bpm: "117", duration: REMIX,
	NXA_: ["", "5", "", "", "15"],
	NX2_: ["", "7", "", "", "14"],
},

"E58":
{
	title: "No Despair  [FULL]", artist: "Hot Potato", channel: KPOP, bpm: "160", duration: REMIX,  // REMIX indeed
	NX2_: ["", "7", "18", "", "20"],
},

"E59":
{
	title: "NX2 K-Pop Remix 3", artist: "Lee Hyun Do / Som 2", channel: KPOP, bpm: "112", duration: REMIX,
	NX2_: ["", "7", "13", "", "13"],
},

"E60":
{
	title: "NX2 Diva Remix", artist: "Joanne / Bada", channel: KPOP, bpm: "120", duration: REMIX,
	NXA_: ["", "4", "9", "5", ""],
	NX2_: ["", "4", "12", "5", ""],
},

"E70":
{
	title: "It's My Business  [FULL]", artist: "Taiji Boys", bpm: "200",
	NX2_: ["", "8", "19", "", "20"],
},

"E71":
{
	title: "Very Old Couples  [FULL]", artist: "015B", channel: KPOP, bpm: "121",
	NX2_: ["", "6", "14", "", ""],
},

"E72":
{
	title: "Come Back Home  [FULL]", artist: "Taiji Boys", bpm: "93",
	NXA_: ["1", "3", "", "4", ""],
	NX2_: ["1", "4", "", "4", ""],
},

"E73":
{
	title: "Feel the Soul  [FULL]", artist: "Seo Taiji", bpm: "187.08",
	NX2_: ["", "", "18", "", ""],
},

"E74":
{
	title: "V.I.P  [FULL]", artist: "Bada", channel: KPOP, bpm: "112",
	NXA_: ["1", "4", "", "4", ""],
	NX2_: ["2", "6", "", "6", ""],
},

"E76":
{
	title: "Fly  [FULL]", artist: "Epik High", bpm: "128",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S10.hd S15.cz D17.nm  D16",
	NX2_: ["", "10", "15", "", "17"],
},

"E77":
{
	title: "Tell Me  [FULL]", artist: "Wonder Girls", channel: KPOP, bpm: "127",
	NXA_: ["", "2", "", "3", ""],
	NX2_: ["", "5", "", "5", ""],
},

"E92":
{
	title: "Fist of Fury", artist: "Luo Zi Xiang", channel: WORLD, bpm: "92",
	region: CHINESE,
	NX2: ["1", "6", "11", "4", "15"],
},

"E93":
{
	title: "Long Live the Chinese", artist: "Wang Lee Hom", channel: WORLD, bpm: "140",
	region: CHINESE,
	NX2: ["2", "6", "10", "4", "15"],
},

"E94":
{
	title: "Fire", artist: "Karen Mok", channel: WORLD, bpm: "125",
	region: CHINESE,
	NX2: ["2", "6", "11", "3", "14"],
},

"E95":
{
	title: "Wild Game", artist: "Jolin Tsai", channel: WORLD, bpm: "139",
	region: CHINESE,
	NX2: ["3", "6", "13", "4", "15"],
},

"E96":
{
	title: "One Last Chance", artist: "ENERGY", channel: WORLD, bpm: "100",
	region: CHINESE,
	NX2: ["1", "4", "11", "3", "10"],
},

"E97":
{
	title: "Mechanical Doll", artist: "Luo Zi Xiang", channel: WORLD, bpm: "106",
	region: CHINESE,
	NX2: ["4", "4", "10", "4", "11"],
},

"E99":
{
	title: "Take It Off", artist: "Alex", channel: WORLD, bpm: "132",
	region: CHINESE,
	NX2: ["3", "6", "10", "4", "17"],
},

"E928":
{
	title: "FAE1 & Chicken Wing Remix (NX2 ver.)", artist: "BanYa", bpm: "200", duration: REMIX, fromMix: "Extra",
	shortTitle: "FAE1 & Chicken Wing Remix",  //? altTitle: "Extra Remix"
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S8.hd S21.cz D13.fs",
	NXA_: ["", "8", "21", "13", ""],
	NX2_: ["", "10", "", "11", ""],
},


// \D - NX

"D01":
{
	title: "Witch Doctor #1", artist: "Yahpp", bpm: "122",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "Sp3.nl S9.hd S15.cz Dp7.fs D20.nm  S16.ahd-NX2 S18.acz-NX2 D17.afs-NX2 D19.anm-NX2   @1.51 S2 S5 S8",
	NXA: ["3", "7", "14", "5", "19"], NXA_: ["", "7", "18", "7", "20"],
	NX2: ["3", "7", "14", "5", "19"], NX2_: ["", "18", "20", "19", "21"],
	NX: ["3", "7", "14", "5", "19"], NX_: ["", "17", "18", "20", ""],
},

"D02":
{
	title: "Arch of Darkness", artist: "Yahpp", bpm: "136",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S4.nl S8.hd S14.cz D7.fs D18.nm  S16.acz  @1.51 S2 S5",
	NXA: ["3", "7", "14", "4", "16"], NXA_: ["", "", "17", "", ""],
	NX2: ["3", "7", "14", "4", "17"],
	NX: ["3", "7", "14", "8", "17"],
},

"D03":
{
	title: "Chimera", artist: "Yahpp", bpm: "210",
	Prime2: "=",
	Prime: "= -D??(x3)",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7.nl S16.hd S23.cz D25.nm  D16.afs Dp??(x2).new  S4.new S11.new S18.new D??(x3).anm",
	NXA: ["7", "16", "23", "21", "??(25)"], NXA_: ["", "16", "19", "16", "??(x3)"],
	NX2: ["8", "17", "23", "20", "??(25)"], NX2_: ["", "13", "20", "15", "??(x3)"],
	NX: ["8", "15/16", "22", "20", "??(25)"], NX_: ["", "13", "", "15/16", "??(x3)"],
},

"D04":
{
	title: "Go Back", artist: "Dynamic Duo", channel: KPOP, bpm: "112",
	NX2: ["1", "4", "9", "4", "10"],
	NX: ["1", "4", "8", "4", "10"],
},

"D05":
{
	title: "Fly", artist: "Epik High", bpm: "128",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S14.cz Dp4.fs D16.nm  S1.new S3.new S6.new",
	NX2: ["3", "5", "14", "4", "16"],
	NX: ["3", "5", "14", "4", "15/16"],
},

"D06":
{
	title: "One Night", artist: "DJ DOC", channel: KPOP, bpm: "132",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S5.hd S13.cz Dp4.fs D14.nm",
	NXA: ["2", "5", "13", "4", "14"],
	NX2: ["2", "5", "13", "4", "14"],
	NX: ["2", "5", "13", "4", "14"],
},

"D07":
{
	title: "U Inside My Dim Memory", artist: "Hyun Jin Young vs. Yahpp", channel: KPOP, bpm: "118",
	NX2: ["3", "6", "14", "4", "18"],
	NX: ["3", "6", "14", "4", "18"], NX_: ["", "", "", "5", ""],
},

"D08":
{
	title: "Free!", artist: "Jiny", channel: KPOP, bpm: "175",
	NX2: ["4", "7", "15", "8", "18"], NX2_: ["", "", "", "5", ""],
	NX: ["4", "7", "15/16", "8", "18"],
},

"D09":
{
	title: "Lovely", artist: "Kim Jong Kook", channel: KPOP, bpm: "188",
	NX2: ["4", "5", "12", "4", "13"],
	NX: ["4", "5", "12", "4", "13"],
},

"D10":
{
	title: "Terminal Depository", artist: "Ururbu Project", channel: KPOP, bpm: "138",
	NX2: ["3", "6", "13", "5", "16"],
	NX: ["3", "6", "13", "5", "15/16"],
},

"D11":
{
	title: "For You", artist: "N.EX.T", channel: KPOP, bpm: "160",
	NX2: ["1", "5", "14", "5", "20"], NX2_: ["", "", "", "13", ""],
	NX: ["1", "5", "14", "5", "20"], NX_: ["", "", "", "14", ""],
},

"D12":
{
	title: "Snow Dream", artist: "Apple Jam", channel: KPOP, bpm: "170",
	NX2: ["3", "5", "13", "7", "13"], NX2_: ["", "", "", "6", ""],
	NX: ["3", "5", "13", "7", "13"],
},

"D13":
{
	title: "Handsome Character That Pass", artist: "May", channel: KPOP, bpm: "125",
	NX2: ["2", "4", "18", "3", "15"], NX2_: ["", "", "13", "", "14"],
	NX: ["1", "4", "18", "3", "15/16"],
},

"D14":
{
	title: "2006 Love Song", artist: "BanYa Production", bpm: "96",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "S3.nl S10.hd S12.cz  Dp5.fs D13.nm  @1.30 S15.new",
	NX: ["2", "7", "10", "4", "13"],
},

"D15":
{
	title: "Do You Know That -Old School-", artist: "BanYa Production", bpm: "120",
	shortTitle: "Do You Know That\n-Old School-",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S4.nl S6.hd S14.cz Dp8.fs D18.nm",
	NX2: ["3", "4", "15", "7", "18"],
	NX: ["3", "4", "15/16", "7", "18"],
},

"D16":
{
	title: "Gun Rock", artist: "BanYa Production", bpm: "104",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S5 S11 S18.cz D11 D22.nm   S17.acz D18.anm",  //? nl hd fs, и проверить аркаду для NX2
	                                NX2_: ["", "", "18", "", "19"],
	NX: ["2", "8", "18", "6", "22"], NX_: ["", "", "17", "", "18"],
},

"D17":
{
	title: "Bullfighter's Song", artist: "BanYa Production", bpm: "168",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4",
	Fiesta: "S5.nl S8.hd S16.cz D9.fs D21.nm  @1.10 D17.new",
	NX2: ["4", "8", "16", "6", "20"],
	NX: ["4", "8", "15/16", "6", "20"],
},

"D18":
{
	title: "Ugly Dee", artist: "BanYa Production", bpm: "92",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3 S5 S9",
	Fiesta: "D11.afs D15.anm",
	NXA_: ["", "", "", "11", "15"],
	NX2_: ["", "", "", "15", "15"],
	NX: ["1", "4", "13", "5", "14"],
},

"D19":
{
	title: "Hyun Jin Young Go Jin Young Go", artist: "Hyun Jin Young", channel: KPOP, bpm: "150",
	shortTitle: "Hyun Jin Young Go",
	NX2: ["3", "6", "19", "6", "20"],
	NX: ["3", "6", "19", "6", "19"],
},

"D20":
{
	title: "My Brother is Street Singer", artist: "Park Hyang Lim vs. Yahpp", channel: KPOP, bpm: "129",
	NX2: ["2", "5", "11", "3", "13"],
	NX: ["2", "5", "11", "3", "13"],
},

"D21":
{
	title: "So", artist: "Typhoon", channel: KPOP, bpm: "138",
	NX2: ["1", "6", "12", "2", "12"], NX2_: ["12", "13", "15", "14", "16"],
	NX: ["1", "6", "12", "2", "12"],
},

"D22":
{
	title: "Hold the Line", artist: "Cho PD & B.E.G.", channel: KPOP, bpm: "126",
	NX2: ["2", "4", "12", "4", "14"],
	NX: ["2", "4", "12", "4", "14"],
},

"D23":
{
	title: "Hybs", artist: "DJ Dookie", channel: WORLD, bpm: "102",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S4.hd S11.cz Dp4.fs D13.nm",
	NXA: ["2", "4", "11", "4", "13"],
	NX2: ["2", "4", "11", "4", "13"],
	NX: ["2", "4", "11", "4", "13"],
},

"D24":
{
	title: "Throw 'em Up", artist: "Andrew Kim", channel: WORLD, bpm: "100",
	NX2: ["2", "5", "14", "5", "15"],
	NX: ["2", "5", "14", "5", "15/16"],
},

"D25":
{
	title: "Bust Back", artist: "DVS", channel: WORLD, bpm: "94",
	NX: ["3", "6", "12", "5", "13"],
},

"D26":
{
	title: "Haley", artist: "Sam-I-Am", channel: WORLD, bpm: "112",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp2.nl S4.hd S9.cz Dp4.fs D11.nm",
	NXA: ["2", "4", "9", "4", "11"],
	NX2: ["2", "4", "9", "4", "11"],
	NX: ["2", "4", "9", "4", "11"],
},

"D27":
{
	title: "We Goin' Fly -remix-", artist: "Gyfted", channel: WORLD, bpm: "112",
	shortTitle: "We Goin' Fly",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S5.hd S15.cz Dp6.fs D19.nm",
	NXA: ["3", "5", "15", "6", "19"],
	NX2: ["4", "5", "14", "6", "19"],
	NX: ["4", "5", "14", "6", "19"],
},

"D28":
{
	title: "Final Audition episode 2-1", artist: "Yahpp", bpm: "170",
	shortTitle: "Final Audition ep. 2-1",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S3.nl S7.hd S20.cz D9.fs D22.nm  S18.ahd S21.acz D21.anm  @1.10 S4.new",
	NXA: ["3", "7", "20", "9", "22"], NXA_: ["", "19", "21", "", "22"],
	NX2: ["3", "7", "20", "9", "22"], NX2_: ["", "", "20", "", "22"],
	NX: ["3", "7", "20", "9", "22"], NX_: ["", "", "20", "", "21"],
},

"D29":
{
	title: "Fire", artist: "Yahpp", bpm: "133",
	NX2_: ["", "12", "15", "13", "15"],
},

"D30":
{
	title: "Final Audition episode 2-2", artist: "Yahpp", bpm: "200",
	shortTitle: "Final Audition ep. 2-2",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7.nl S16.hd S22.cz D24.nm  S17.ahd S21.acz D18.afs D23.anm",
	NXA: ["7", "16", "22", "18", "24"], NXA_: ["", "16", "21", "18", "23"],
	NX2: ["7", "16", "22", "18", "24"], NX2_: ["", "16", "21", "18", "25"],
	NX: ["7", "15/16", "21", "18", "??(24)"], NX_: ["", "", "21", "18", "??"],
	notes: ["arcade unlock on NX, play 2-1 200 times"],
},

"D31":
{
	title: "K-Pop Dance Remix", artist: "DJ DOC/Epik High", channel: KPOP, bpm: "132", duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S8.hd S14.cz D9.fs D16.nm",
	NX2_: ["", "8", "15", "9", "17"],
	NX_: ["", "8", "15/16", "9", "15/16"],
},

"D32":
{
	title: "Groove Party", artist: "Clon/Tashannie", channel: KPOP, bpm: "105-110", duration: REMIX,
	// Prime2_hh: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S5.hd S14.cz Dp5.fs D15.nm",
	NXA_: ["", "5", "14", "5", "15"],
	NX2_: ["", "7", "13", "6", "15"],
	NX_: ["", "5", "12", "6", "14"],
},

"D33":
{
	title: "Pop House Mix", artist: "Kristeen/Scoop/Fresno", channel: WORLD, bpm: "128-130.5", duration: REMIX,
	NX2_: ["", "8", "15", "", "16"],
	NX_: ["", "8", "14", "", "15/16"],
},

"D34":
{
	title: "Wi-Ex-Doc-Va", artist: "Yahpp", bpm: "195", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S15.hd S21.cz D15.fs D23.nm",
	NXA_: ["", "15", "21", "15", "23"],
	NX2_: ["", "16", "21", "19", "25"],
	NX_: ["", "15/16", "21", "17", "23"],
},

"D35":
{
	title: "Bemera", artist: "Yahpp", bpm: "210", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S16.hd S24.cz D18.fs D26.nm",
	NXA_: ["", "16", "24", "18", "25"],
	NX2_: ["", "15", "24", "18", "25"],
	NX_: ["", "14", "22", "18", "??"],
},

"D36":
{
	title: "BanYa-P Classic Mix", artist: "BanYa Production", bpm: "92-190", duration: REMIX,
	NX2_: ["", "14", "19", "15", "20"],
	NX_: ["", "11", "19", "13", "20"],
},

"D37":
{
	title: "Chicago Club Mix", artist: "Haley/DVS/Gyfted", channel: WORLD, bpm: "112", duration: REMIX,
	NX_: ["", "10", "15/16", "11", "17"],
},

"D38":
{
	title: "U Inside My Dim Memory  [FULL]", artist: "Hyun Jin Young vs. Yahpp", channel: KPOP, bpm: "118",
	NX2_: ["", "9", "15", "10", "19"],
	NX_: ["", "8", "14", "9", "15/16"],
},

"D39":
{
	title: "Fire  [FULL]", artist: "Yahpp", bpm: "136",
	NX2_: ["", "", "19", "", "20"],
	NX_: ["", "", "18", "(@)", "20"],
},

"D40":
{
	title: "Lovely  [FULL]", artist: "Kim Jong Kook", channel: KPOP, bpm: "188",
	NX2_: ["", "6", "", "7", ""],
	NX_: ["", "5", "(@)", "6", "(@)"],
},

"D41":
{
	title: "Love is a Danger Zone 2  [FULL]", artist: "Yahpp", bpm: "100 ~ 162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S19.cz D21.nm",
	NXA_: ["", "", "19", "", "21"],
	NX2_: ["", "", "19", "", "21"],
	NX_: ["", "(@)", "18", "(@)", "20"],
},

"D42":
{
	title: "Beat of the War 2  [FULL]", artist: "Yahpp", bpm: "???",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S19.cz D20.nm",
	NXA_: ["", "", "19", "", "20"],
	NX2_: ["", "", "19", "", "21"],
	NX_: ["", "(@)", "20", "", "21"],
},

"D43":
{
	title: "Hold the Line  [FULL]", artist: "Cho PD & B.E.G.", channel: KPOP, bpm: "126",
	NX2_: ["", "7", "16", "8", "18"],
	NX_: ["", "7", "15/16", "8", "18"],
},


// \C - Zero

"C01":
{
	title: "Beat of the War 2", artist: "BanYa", bpm: "190",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S6",
	Fiesta: "S5.nl S10.hd S16.cz D12.fs D19.nm",
	NXA: ["5", "10", "16", "12", "19"],
	NX2: ["4", "9", "16", "11", "19"],
	NX: ["4", "9", "15/16", "11", "19"],
	Zero: ["3", "8", "17", "9", "20"],
},

"C02":
{
	title: "Moonlight", artist: "BanYa", bpm: "180",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4",
	Fiesta: "S10.hd S19.cz D11.fs D21.nm  S18.acz D20.anm  S7.new",
	NXA: ["", "10", "19", "11", "21"], NXA_: ["", "", "19", "", "21"],
	NX2: ["", "8", "19", "11", "21"],
	NX: ["", "8", "19", "11", "21"],
	Zero: ["", "7", "18", "8", "21"],
},

"C03":
{
	title: "Witch Doctor", artist: "BanYa", bpm: "195",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S6 S10",
	Fiesta: "S16.cz D22.nm  S19.ahd S21.acz D19.afs D23.anm",
	NXA: ["", "", "16", "", "23"], NXA_: ["", "19", "21", "19", "23"],
	NX2: ["", "", "17", "", "23"], NX2_: ["", "", "21", "", "22"],
	NX: ["", "", "15/16", "", "22"], NX_: ["", "", "20", "", "22"],
	Zero: ["", "", "17", "", "22"], Zero_: ["", "", "??", "", "??"], // аркада на Zero - анлок за миссию
},

"C04":
{
	title: "Love is a Danger Zone 2", artist: "BanYa", bpm: "162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S9",
	Fiesta: "S7.nl S15.hd S21.cz D17.fs D23.nm  @1.10 S4",
	NXA: ["7", "15", "21", "17", "23"],
	NX2: ["6", "15", "21", "18", "23"],
	NX: ["6", "15/16", "21", "18", "23"],
	Zero: ["7", "15", "21", "18", "23"],
},

"C05":
{
	title: "Phantom", artist: "BanYa", bpm: "136",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S2 S7",
	Fiesta: "S12.hd S18.cz Dp7.fs D19.nm  S17.acz D12.afs D20.anm",
	NXA: ["", "12", "18", "7", "19"], NXA_: ["", "", "18", "11", "20"],
	NX2: ["", "10", "18", "7", "19"], NX2_: ["", "", "19", "", "20"],
	NX: ["", "10", "18", "7", "19"], NX_: ["", "", "", "", "18"],
	Zero: ["", "10", "18", "6", "19"],
},

"C06":
{
	title: "Papa Gonzales", artist: "BanYa", bpm: "145",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S8",
	Fiesta: "S6.hd S14.cz D7.fs D18.nm",
	NX: ["", "6", "14", "7", "18"],
	Zero: ["", "6", "14", "7", "18"],
},

"C07":
{
	title: "Jump", artist: "BanYa", bpm: "96",
	Zero: ["3", "7", "9", "", ""],
},

"C08":
{
	title: "Emergency", artist: "Drunken Tiger", channel: KPOP, bpm: "110",
	NX2: ["2", "5", "12", "5", "14"],
	NX: ["2", "5", "12", "5", "14"],
	Zero: ["3", "4", "12", "6", "15"],
},

"C09":
{
	title: "My Friend", artist: "Cho PD", channel: KPOP, bpm: "127",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S12.cz Dp5.fs D14.nm  Dp6.afs  S1.new S3.new S6.new",
	NX2: ["3", "4", "12", "5", "14"],
	NX: ["3", "4", "12", "5", "14"],  NX_: ["", "", "", "6", ""],
	Zero: ["3", "4", "13", "5", "16"], Zero_: ["", "", "", "??", ""],
},

"C10":
{
	title: "Wuthering Heights", artist: "Eugene", channel: KPOP, bpm: "138",
	NX2: ["2", "4", "", "3", ""],
	NX: ["2", "4", "", "3", ""],
	Zero: ["2", "4", "", "3", ""],
},

"C11":
{
	title: "Do It Yourself", artist: "Lazy Bone", channel: KPOP, bpm: "106",
	NX2: ["", "6", "13", "7", "14"], NX2_: ["", "", "", "", "17"],
	NX: ["", "6", "13", "7", "14"], NX_: ["", "", "", "", "17"],
	Zero: ["", "6", "13", "7", "14"], Zero_: ["", "", "", "", "??"],
},

"C12":
{
	title: "What's Going On?", artist: "Turtles", channel: KPOP, bpm: "130",
	NX2: ["3", "3", "7", "5", "8"],
	NX: ["3", "3", "7", "5", "8"],
	Zero: ["3", "2", "7", "5", "9"],
},

"C13":
{
	title: "All Famy", artist: "Eun Ji Won", bpm: "94",
	Zero: ["2", "3", "", "4", ""],
},

"C14":
{
	title: "Chung Hwa Ban Jeom", artist: "Louis", channel: KPOP, bpm: "150",
	Prime2: "=",
	Prime: "=  @1.06 S4 S9",
	Fiesta2: "=",
	FiestaEX: "Sp1.nl S6.hd S14.cz Dp2.fs D16.nm",
	NX2: ["1", "5", "12", "3", "15"],
	NX: ["1", "5", "12", "3", "15/16"],
	Zero: ["2", "5", "13", "2", "16"],
},

"C15":
{
	title: "Mr. Fire Fighter", artist: "Spooky Banana", channel: KPOP, bpm: "158",
	Fiesta2: "=",
	FiestaEX: "= -S2",
	Fiesta: "S2.nl S7.hd S13.cz D8.fs D15.nm  S4.new",
	NXA: ["2", "7", "13", "8", "15"],
	NX2: ["2", "7", "13", "8", "15"],
	NX: ["2", "7", "13", "8", "15/16"],
	Zero: ["2", "6", "13", "8", "15"],
},

"C16":
{
	title: "Footprints", artist: "T.O", channel: KPOP, bpm: "135",
	NX2: ["", "5", "11", "5", "11"],
	NX: ["", "5", "11", "5", "11"],
	Zero: ["", "5", "12", "5", "13"],
},

"C17":
{
	title: "Oh My!", artist: "Jang Yoon Jung", channel: KPOP, bpm: "112",
	NX2: ["2", "4", "10", "4", "11"],
	NX: ["2", "4", "10", "4", "11"],
	Zero: ["3", "4", "9", "5", "10"],
},

"C18":
{
	title: "Enter the Dragon", artist: "JTL", channel: KPOP, bpm: "110",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S8",
	Fiesta: "Sp2.nl S5.hd S14.cz Dp5.fs D17.nm  S1.new S4.new",
	NXA: ["2", "5", "14", "5", "17"],
	NX2: ["2", "5", "14", "5", "17"],
	NX: ["2", "5", "14", "5", "17"],
	Zero: ["3", "4", "14", "5", "17"],
},

"C19":
{
	title: "Storm", artist: "Perry", channel: KPOP, bpm: "96",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S5 S12 D13 Sp3 Dp4",
	NXA: ["3", "5", "12", "4", "13"],
	NX2: ["2", "5", "12", "4", "13"],
	NX: ["2", "5", "12", "4", "13"],
	Zero: ["2", "3", "12", "4", "13"],
},

"C20":
{
	title: "Turn Around", artist: "Mina", channel: KPOP, bpm: "113",
	NX2: ["2", "4", "13", "5", "14"],
	NX: ["2", "4", "13", "5", "14"],
	Zero: ["3", "5", "11", "5", "14"],
},

"C21":
{
	title: "I Love You Baby", artist: "Pandera", channel: WORLD, bpm: "100",
	NX: ["3", "5", "11", "5", "13"],
	Zero: ["3", "5", "12", "5", "15"],
},

"C22":
{
	title: "Up Up", artist: "Cachy Huang", channel: WORLD, bpm: "135",
	NX: ["3", "4", "10", "4", "11"],
	Zero: ["3", "4", "9", "4", "10"],
},

"C41":
{
	title: "Love is a Danger Zone (try to B.P.M.)", artist: "BanYa", bpm: "140 ~ 169", duration: REMIX,
	shortTitle: "Love is a Danger Zone (B.P.M.)",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S12.hd S20.cz D14.fs D23.nm",
	NXA_: ["", "15", "19", "15", "22"],
	NX2_: ["", "14", "21", "16", "23"],
	NX_: ["", "14", "20", "15/16", "23"],
	Zero_: ["", "12", "20", "14", "23"],
},

"C42":
{
	title: "K-Hip Hop Mix Vol. 1", artist: "Perry/Drunken Tiger/JTL/Eun Ji Won", channel: KPOP, bpm: "110", duration: REMIX,
	NX2_: ["", "8", "14", "7", ""],
	NX_: ["", "8", "14", "7", ""],
	Zero_: ["", "7", "13", "6", ""],
},

"C43":
{
	title: "Zero K-House Mix Vol. 1", artist: "Turtles/Cho PD/Harisu/Jang Yoon Jung", channel: KPOP, bpm: "136", duration: REMIX,
	NX_: ["", "7", "13", "6", ""],
	Zero_: ["", "6", "12", "5", ""],
},

"C44":
{
	title: "Ignition Starts/Hypnosis/Extravaganza Remix", artist: "BanYa", bpm: "146/180/195", duration: REMIX,
	Zero_: ["", "??", "??", "??", ""],
},

"C1C04":
{
	title: "Love is a Danger Zone 2 (D&G Ver.)", artist: "BanYa", bpm: "162",
	shortTitle: "Love is a Danger Zone 2 (D&G)",
	Prime2: "=",
	Prime: "= -D??(x2)",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S16.ahd S17.acz D??(x2).afs Dp??(x2).anm",  //? afs anm проверить
	NXA_: ["", "16", "17", "??(x2)", "??(x2)"],
	// Dp - капл, D - ahd+acz
	NX2_: ["", "16", "18", "", "??(x2)"],
	NX_: ["", "15/16", "18", "", "??(x2)"],
	Zero_: ["", "??", "??", "", "??(x2)"],
},


// \B - Exceed 2

"B01":
{
	title: "Greenhorn", artist: "Lexy", channel: KPOP, bpm: "109",
	NXA: ["2", "4", "13", "5", "13"],
	NX2: ["2", "4", "13", "5", "15"],
	NX: ["2", "4", "13", "5", "15/16"],
	Zero: ["1", "4", "13", "5", "15"],
	Exceed2: ["1", "4", "13", "5", "15"],
},

"B02":
{
	title: "Hot", artist: "1Tym", channel: KPOP, bpm: "98",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S2.nl S4.hd S10.cz Dp4.fs D12.nm  S6.new",
	NXA: ["2", "5", "10", "4", "12"],
	NX2: ["2", "5", "11", "4", "12"],
	NX: ["2", "5", "11", "4", "12"],
	Zero: ["2", "5", "10", "4", "12"],
	Exceed2: ["2", "5", "10", "4", "12"],
},

"B03":
{
	title: "Pray", artist: "Som2", channel: KPOP, bpm: "122",
	NX2: ["2", "4", "9", "4", "11"],
	NX: ["2", "4", "9", "4", "11"],
	Exceed2: ["2", "5", "8", "4", "11"],
},

"B04":
{
	title: "Go Away", artist: "B.M.K.", channel: KPOP, bpm: "132",
	Zero: ["2", "6", "11", "5", "15"],
	Exceed2: ["2", "6", "11", "5", "15"],
},

"B05":
{
	title: "Drunken in Melody", artist: "Eun Ji Won", bpm: "94",
	NXA: ["3", "5", "", "5", ""],
	NX2: ["2", "5", "", "5", ""],
	NX: ["2", "5", "", "5", ""],
	Zero: ["3", "6", "", "5", ""],
	Exceed2: ["3", "6", "10", "5", "11"],
},

"B06":
{
	title: "Deja Vu", artist: "SOM2", channel: KPOP, bpm: "115",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S1",
	Fiesta: "S3.nl S6.hd S13.cz D6.fs D13.nm",
	NXA: ["3", "6", "13", "6", "13"],
	NX2: ["3", "5", "14", "6", "14"], NX2_: ["", "", "", "", "17"],
	NX: ["3", "5", "14", "6", "14"], NX_: ["", "", "", "", "17"],
	Zero: ["3", "6", "13", "6", "14"],
	Exceed2: ["3", "6", "13", "6", "14"],
},

"B07":
{
	title: "U", artist: "Ju Dain", channel: KPOP, bpm: "111",
	Zero: ["3", "6", "11", "6", "14"],
	Exceed2: ["3", "6", "11", "6", "14"],
},

"B08":
{
	title: "Sajahu", artist: "Lee Hyun Do", channel: KPOP, bpm: "127",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S13.cz Dp5.fs D14.nm  S3.new S6.new",
	NXA: ["3", "5", "13", "5", "14"],
	NX2: ["3", "5", "13", "5", "14"],
	NX: ["3", "5", "13", "5", "14"],
	Zero: ["2", "5", "13", "5", "14"],
	Exceed2: ["2", "5", "13", "5", "14"],
},

"B09":
{
	title: "Typhoon", artist: "Lee Hyun Do", channel: KPOP, bpm: "112",
	NX2: ["2", "5", "10", "5", "13"],
	NX: ["2", "5", "10", "5", "13"],
	Zero: ["3", "6", "11", "6", "14"],
	Exceed2: ["2", "6", "11", "6", "14"],
},

"B10":
{
	title: "Eternity", artist: "Uhm Jung Hwa", channel: KPOP, bpm: "120",
	Zero: ["1", "5", "9", "5", "12"],
	Exceed2: ["1", "5", "9", "5", "12"],
},

"B11":
{
	title: "Foxy Lady", artist: "Harisu", channel: KPOP, bpm: "130",
	NX: ["3", "5", "12", "5", "13"],
	Zero: ["3", "6", "13", "5", "15"],
	Exceed2: ["3", "6", "13", "5", "15"],
},

"B12":
{
	title: "Too Late", artist: "Shyne", channel: KPOP, bpm: "97",
	NX: ["3", "4", "", "5", ""],
	Zero: ["3", "5", "", "5", ""],
	Exceed2: ["2", "5", "11", "5", "12"],
},

"B13":
{
	title: "I'll Give You All My Love", artist: "Wax", channel: KPOP, bpm: "164",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S2",
	Fiesta: "S4.nl S7.hd S16.cz D7.fs D18.nm",
	NXA: ["3", "7", "16", "7", "18"],
	NX2: ["3", "7", "16", "7", "18"],
	NX: ["3", "7", "15/16", "7", "18"], NX_: ["", "", "", "", "20"],
	Zero: ["3", "7", "15", "8", "17"], Zero_: ["", "", "", "", "??"],
	Exceed2: ["3", "7", "16", "8", "18"],
},

"B14":
{
	title: "Huu Yah Yeah", artist: "Y-Me", channel: KPOP, bpm: "110",
	NX: ["3", "6", "13", "6", "13"],
	Zero: ["3", "6", "12", "7", "14"],
	Exceed2: ["3", "6", "12", "7", "14"],
},

"B15":
{
	title: "We Don't Stop", artist: "Asoto Union", channel: KPOP, bpm: "100",
	NX: ["2", "5", "10", "4", "11"],
	Zero: ["3", "6", "9", "5", "10"],
	Exceed2: ["3", "6", "9", "5", "10"],
},

"B16":
{
	title: "J Bong", artist: "BanYa", bpm: "140",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3 S8",
	Fiesta: "S5.nl S7.hd S13.cz Dp5.fs D17.nm",
	NX2: ["5", "7", "13", "5", "17"],
	Zero: ["5", "7", "13", "5", "19"],
	Exceed2: ["5", "7", "13", "5", "17"],
},

"B17":
{
	title: "Hi-Bi", artist: "BanYa", bpm: "145",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S5",
	Fiesta: "S3.nl S8.hd S15.cz D18.nm  S18.acz D20.anm  D8",  //? fs
	NXA: ["3", "8", "15", "8", "18"], NXA_: ["", "", "18", "7", "20"],
	NX2: ["4", "8", "14", "8", "18"], NX2_: ["", "", "17", "6", "18"],
	NX: ["4", "8", "14", "8", "18"], NX_: ["", "", "17", "", "19"],
	Zero: ["3", "8", "14", "8", "18"],
	Exceed2: ["3", "8", "14", "8", "18"],
},

"B18":
{
	title: "Solitary 2", artist: "BanYa", bpm: "136",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S8",
	Fiesta: "Sp3.nl S6.hd S17.cz Dp6.fs D18.nm",
	NXA: ["3", "6", "17", "6", "18"],
	NX2: ["3", "6", "17", "6", "19"],
	NX: ["3", "6", "17", "6", "19"], NX_: ["", "", "17", "", "20"],
	Zero: ["3", "6", "16", "6", "18"], Zero_: ["", "", "??", "", "??"],
	Exceed2: ["??", "??", "??", "??", "??"],  // unlock
},

"B19":
{
	title: "Canon-D", artist: "BanYa", bpm: "160",
	Prime2: "= -S18 -D18",
	Prime: "=  @1.11 S17.ucs S18.ucs D17.ucs D18.ucs  @1.14 Dp??(x2)",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S9",
	Fiesta: "S3.nl S7.hd S20.cz D10.fs D22.nm  S21.acz",
	NXA: ["4", "6", "20", "10", "22"], NXA_: ["", "", "21", "", "21"],
	NX2: ["3", "5", "20", "9", "22"],
	NX: ["3", "5", "19", "9", "21"],
	Zero: ["2", "5", "20", "8", "21"],
	Exceed2: ["2", "6", "??(20)", "7", "??(22)"],
},

"B20":
{
	title: "Le Code De Bonne Conduite", artist: "Manresa", channel: WORLD, bpm: "171",
	NX2: ["4", "5", "12", "8", "15"],
	NX: ["4", "5", "12", "8", "15/16"],
	Zero: ["4", "7", "10", "8", "15"],
	Exceed2: ["4", "7", "10", "8", "15"],
},

"B26":
{
	title: "Novarash", artist: "Novasonic/Crash", bpm: "118", channel: KPOP, duration: REMIX,
	Fiesta2: "=",
	FiestaEX: "S11.hd S17.cz D12.fs",
	NX2_: ["", "8", "16", "10", ""],
	NX_: ["", "8", "13", "10", ""],
	Zero_: ["", "8", "18", "9", ""],
	Exceed2_: ["", "8", "18", "9", ""],
},

"B27":
{
	title: "Lexy & 1TYM Remix", artist: "Lexy/1TYM", channel: KPOP, bpm: "123", duration: REMIX,
	Exceed2_: ["", "7", "11", "8", ""],
	Zero_: ["", "7", "11", "8", ""],
},

"B28":
{  //? B58
	title: "Treme Vook of the War", artist: "BanYa", bpm: "140 - 202", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S11.hd S19.cz D13.fs D22.nm",
	NXA_: ["", "12", "18", "15", "22"],
	NX2_: ["", "13", "19", "16", "22"],
	NX_: ["", "12", "18", "13", "21"],
	Zero_: ["", "11", "19", "13", "22"],
	Exceed2_: ["", "10", "20", "12", ""],  //Exceed2_: ["", "", "??", "", "??"], - эназеры, хз как впихнуть
},

"B29":
{
	title: "Banya Classic Remix", artist: "BanYa", bpm: "162 ~ 170", duration: REMIX,
	Prime2: "=",
	Prime: "= D11 -Dp11",  // просто сменили тип?
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "@1.10 S7.hd S19.cz Dp11.fs D20.nm",
	NX2_: ["", "10", "19", "11", "21"],
	NX_: ["", "11", "19", "11", "19"],
	Zero_: ["", "9", "19", "11", "??"],
	Exceed2_: ["", "9", "19", "11", "??"],
},

"B30":
{
	title: "Deux Remix", artist: "Deux", channel: KPOP, bpm: "119.5", duration: REMIX,
	NX2_: ["", "7", "14", "8", ""],
	NX_: ["", "7", "14", "7", ""],
	Zero_: ["", "6", "15", "7", ""],
	Exceed2_: ["", "6", "15", "7", ""],
},

"B31":
{
	title: "Diva's Remix", artist: "BoA*/Shyne/Y*Me", channel: KPOP, bpm: "110", duration: REMIX,
	NX_: ["", "8", "11", "9", ""],
	Zero_: ["", "7", "11", "8", ""],
	Exceed2_: ["", "7", "11", "8", ""],
},

"B50":
{
	title: "World Remix", artist: "Mozquito / Down Low / B.M.K. / Uhm Jung Hwa", channel: WORLD, bpm: "128", duration: REMIX,
	Exceed2_: ["", "5", "9", "6", ""],
	Zero_: ["", "5", "9", "6", ""],
},

"B51":
{
	title: "Dignity  [FULL]", artist: "Crash", channel: KPOP, bpm: "195",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S13.hd S19.cz D16.fs D22.nm",
	NXA_: ["", "14", "19", "16", "22"],
	NX2_: ["", "13", "20", "16", "22"],
	NX_: ["", "14", "19", "15/16", "21"],
	Exceed2_: ["", "??", "??", "??", ""],
	Zero_: ["", "??", "??", "??", ""],
},

"B52":
{
	title: "Novasonic Remix", artist: "Novasonic", bpm: "136", duration: REMIX,
	Exceed2_: ["", "7", "11", "9", ""],
	Zero_: ["", "7", "11", "9", ""],
},

"B53":
{
	title: "Turbo Remix", artist: "Turbo", channel: KPOP, bpm: "147.7", duration: REMIX,
	NX2_: ["", "9", "12", "10", ""],
	NX_: ["", "9", "11", "11", ""],
	Zero_: ["", "8", "14", "10", ""],
	Exceed2_: ["", "8", "14", "10", ""],
},

"B54":
{
	title: "2nd Hidden Remix", artist: "Clon/Sechskies", channel: KPOP, bpm: "140", duration: REMIX,
	NX2_: ["", "10", "11", "13", "16"],
	NX_: ["", "10", "11", "12", "17"],
	Zero_: ["", "9", "10", "12", "??"],
	Exceed2_: ["", "9", "10", "12", "??"],
},

"B55":
{
	title: "Drunken Family Remix", artist: "Drunken Tiger/Honey Family", channel: KPOP, bpm: "95", duration: REMIX,
	NX2_: ["", "6", "7", "6", ""],
	NX_: ["", "6", "7", "6", ""],
	Zero_: ["", "5", "6", "5", ""],
	Exceed2_: ["", "5", "6", "5", ""],
},

"B56":
{
	title: "BanYa Hip-Hop Remix", artist: "BanYa", bpm: "99", duration: REMIX,
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S6 S7 Dp6",
	NXA_: ["", "3", "9", "7", ""],
	NX2_: ["", "7", "8", "7", ""],
	NX_: ["", "7", "8", "7", ""],
	Zero_: ["", "6", "7", "6", ""],
	Exceed2_: ["", "6", "7", "6", ""],
},

"B57":
{
	title: "Canon-D  [FULL]", artist: "BanYa", bpm: "160",
	Prime2: "=",
	Prime: "=  @1.19 D24",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S11.hd S16.cz  D23",
	NXA_: ["", "11", "16", "", ""],
	NX2_: ["", "15", "17", "", ""],
	NX_: ["", "15/16", "17", "", "(@)"],
	Zero_: ["", "", "??", "", ""],
	Exceed2_: ["", "", "??", "", ""],
},


// \A - Exceed

"A01":
{
	title: "Final Audition 3 U.F", artist: "BanYa", bpm: "130",
	Prime2: "=",
	Prime: "=  @1.19 S17",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S2 S5 S9",
	Fiesta: "Sp3.nl S6.hd S14.cz Dp5.fs D17.nm  D19.anm",
	NXA: ["3", "6", "14", "5", "17"], NXA_: ["", "", "", "", "19"],
	NX2: ["3", "6", "14", "5", "17"], NX2_: ["", "", "", "", "18"],
	NX: ["3", "6", "14", "5", "17"], NX_: ["", "", "", "", "18"],
	Zero: ["3", "5", "13", "4", "16"], Zero_: ["", "", "", "", "??"],
	Exceed2: ["3", "5", "13", "4", "15"],
	Exceed: ["2", "5", "13", "5", "17"],
},

"A02":
{
	title: "Naissance 2", artist: "BanYa", bpm: "129",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S6.hd S13.cz Dp5.fs D15.nm  D19.anm",
	NXA: ["3", "6", "13", "5", "15"], NXA_: ["", "", "", "", "19"],
	NX2: ["3", "6", "13", "5", "15"], NX2_: ["", "", "", "", "20"],
	NX: ["3", "6", "13", "5", "15/16"], NX_: ["", "", "", "", "19"],
	Zero: ["2", "6", "13", "5", "14"], Zero_: ["", "", "", "", "??"],
	Exceed2: ["2", "6", "13", "5", "14"],
	Exceed: ["2", "6", "11", "6", "15"],
},

"A03":
{
	title: "Monkey Fingers", artist: "BanYa", bpm: "186",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S3",
	Fiesta: "Sp5.nl S8.hd S15.cz D17.nm  S5.new",
	NXA: ["5", "8", "15", "7", "17"],
	NX2: ["3", "7", "15", "7", "17"],
	NX: ["3", "7", "15/16", "7", "17"],
	Zero: ["4", "7", "15", "6", "18"],
	Exceed2: ["4", "7", "15", "6", "18"],
	Exceed: ["4", "7", "17", "6", "18"],
},

"A04":
{
	title: "Blazing", artist: "BanYa", bpm: "158",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S9",
	Fiesta: "S3.nl S6.hd S15.cz  D19.nm",
	NX: ["3", "6", "15/16", "6", "19"],
	Zero: ["3", "6", "15", "6", "19"],
	Exceed2: ["3", "6", "14", "6", "19"],
	Exceed: ["3", "6", "14", "5", "17"],
},

"A05":
{
	title: "Pump Me Amadeus", artist: "BanYa", bpm: "170",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= -S4  @1.51 S3",
	Fiesta: "S5.nl S9.hd S17.cz D10.fs D19.nm  D18  @1.10 S4",
	NX: ["4", "9", "17", "10", "19"],
	Zero: ["4", "8", "16", "8", "19"],
	Exceed2: ["4", "8", "16", "8", "19"],
	Exceed: ["4", "7", "15", "8", "20"],
},

"A06":
{
	title: "X-Treme", artist: "BanYa", bpm: "162",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.40 S18  @1.51 S4 S7",
	Fiesta: "S9.hd S14.cz D19.nm  D13.new",
	NXA: ["5", "9", "14", "9", "19"],
	NX2: ["4", "7", "14", "9", "19"],
	NX: ["4", "7", "14", "9", "19"],
	Zero: ["5", "7", "14", "8", "19"],
	Exceed2: ["5", "7", "14", "8", "19"],
	Exceed: ["4", "7", "15", "7", "19"],
},

"A07":
{
	title: "Get Up!", artist: "BanYa", bpm: "180",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=  @1.51 D17.nm",
	FiestaEX: "=",
	Fiesta: "S4.nl S8.hd S13.cz D9.fs  D18.new",
	NX2: ["4", "7", "15", "7", "18"],
	Exceed2: ["4", "7", "13", "7", "16"],
	Exceed: ["5", "7", "12", "7", "18"],
},

"A08":
{
	title: "Dignity", artist: "Crash", channel: KPOP, bpm: "195",
	Prime: "=",
	Fiesta2: "=  @1.60 S22",
	FiestaEX: "=  @1.30 D18",
	Fiesta: "S5.nl S12.hd S20.cz D13.fs D23.nm  S16.ahd  @1.10 S3",
	NXA: ["5", "12", "20", "13", "23"], NXA_: ["", "16", "", "", ""],
	NX2: ["4", "11", "20", "15", "23"],
	NX: ["4", "12", "20", "15/16", "23"],
	Zero: ["5", "9", "20", "12", "22"],
	Exceed2: ["5", "9", "20", "12", "22"],
	Exceed: ["5", "8", "15", "12", "20"],
},

"A09":
{
	title: "Shake That Bootie", artist: "OneTwo", channel: KPOP, bpm: "145",
	NX: ["3", "6", "14", "6", "15/16"],
	Zero: ["3", "6", "13", "6", "16"],
	Exceed2: ["3", "6", "13", "6", "16"],
	Exceed: ["3", "5", "12", "6", "16"],
},

"A10":
{
	title: "Valenti", artist: "BoA", channel: KPOP, bpm: "104",
	Zero: ["2", "4", "9", "4", "11"],
	Exceed2: ["2", "4", "9", "4", "11"],
	Exceed: ["2", "4", "12", "5", "13"],
},

"A11":
{
	title: "What Do You Really Want?", artist: "Crash", channel: KPOP, bpm: "110",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S9.hd S19.cz D16.nm D20.anm  S14",
	NXA: ["3", "9", "19", "11", "16"],
	NX2: ["2", "9", "20", "11", "14"],
	NX: ["2", "9", "20", "11", "14"], NX_: ["", "", "12", "", "20"],
	Zero: ["2", "7", "18", "7", "14"],
	Exceed2: ["2", "7", "16", "7", "14"],
	Exceed: ["2", "6", "14", "7", "15"],
},

"A12":
{
	title: "Go", artist: "U:Nee", channel: KPOP, bpm: "138",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S3 S7 S12 D13 Dp3",
	NXA: ["3", "7", "12", "3", "13"],
	NX2: ["3", "6", "12", "3", "13"],
	NX: ["3", "6", "12", "3", "13"],
	Zero: ["2", "6", "11", "6", "13"],
	Exceed2: ["2", "6", "11", "3", "13"],
	Exceed: ["2", "3", "9", "4", "12"],
},

"A13":
{
	title: "Flamenco", artist: "Oliver", channel: KPOP, bpm: "105",
	Exceed2: ["2", "5", "9", "5", "11"],
	Exceed: ["3", "5", "9", "5", "11"],
},

"A14":
{
	title: "Kiss me", artist: "Debbie Scott", channel: WORLD, bpm: "126",
	NX: ["1", "5", "13", "6", "15/16"], NX_: ["", "", "(@)", "", "15/16"],
	Zero: ["1", "5", "12", "5", "14"],
	Exceed2: ["1", "5", "12", "5", "14"],
	Exceed: ["2", "4", "8", "5", "10"],
},

"A15":
{
	title: "Essa Maneira", artist: "Kaoma", channel: WORLD, bpm: "150",
	NX2: ["3", "7", "13", "9", "14"],
	NX: ["3", "7", "13", "9", "14"],
	Zero: ["2", "6", "12", "7", "13"],
	Exceed2: ["2", "6", "9", "7", "12"],
	Exceed: ["3", "5", "8", "5", "12"],
},

"A16":
{
	title: "Ba Be Loo Be Ra", artist: "Kristeen", channel: WORLD, bpm: "126",
	Exceed2: ["1", "4", "9", "5", "13"],
	Exceed: ["1", "4", "9", "5", "12"],
},

"A17":
{
	title: "La Cubanita", artist: "Los ninos de sara", channel: WORLD, bpm: "120",
	NX2: ["4", "9", "13", "10", "16"],
	NX: ["4", "9", "13", "10", "15/16"],
	Zero: ["2", "6", "12", "7", "13"],
	Exceed2: ["2", "6", "12", "7", "13"],
	Exceed: ["2", "5", "7", "6", "14"],
},

"A18":
{
	title: "Shake It Up", artist: "Rod", channel: WORLD, bpm: "120",
	NX2: ["4", "9", "15", "3", "19"],
	NX: ["4", "9", "15/16", "3", "19"], NX_: ["", "", "15/16", "", "19"],
	Zero: ["2", "7", "14", "7", "19"],
	Exceed2: ["2", "7", "14", "7", "18"],
	Exceed: ["3", "6", "10", "7", "14"],
},

"A19":
{
	title: "One Love", artist: "S'Max", channel: KPOP, bpm: "98",
	NX: ["2", "5", "9", "4", "10"],
	Zero: ["2", "5", "8", "4", "11"],
	Exceed2: ["2", "5", "8", "4", "11"],
	Exceed: ["2", "5", "7", "4", "11"],
},

"A20":
{
	title: "Power of Dream", artist: "Victoria", channel: WORLD, bpm: "122",
	NX2: ["1", "7", "14", "6", "15"],
	NX: ["1", "7", "14", "6", "15/16"],
	Zero: ["1", "6", "14", "5", "15"],
	Exceed2: ["1", "6", "13", "5", "14"],
	Exceed: ["1", "5", "13", "4", "14"],
},

"A21":
{
	title: "Watch Out", artist: "Victoria", channel: WORLD, bpm: "106",
	NX2: ["3", "6", "10", "6", "12"],
	NX: ["3", "6", "10", "6", "12"],
	Zero: ["2", "5", "11", "7", "12"],
	Exceed2: ["2", "5", "11", "7", "12"],
	Exceed: ["2", "4", "11", "5", "12"],
},

"A22":
{
	title: "Fiesta", artist: "El Cuba", channel: WORLD, bpm: "140",
	NX: ["4", "7", "11", "6", "13"],
	Zero: ["2", "7", "8", "5", "10"],
	Exceed2: ["2", "7", "8", "5", "10"],
	Exceed: ["2", "5", "12", "4", "11"],
},

"A23":
{
	title: "Soca Make Yuh Ram Ram", artist: "General Grant", channel: WORLD, bpm: "108",
	NX2: ["3", "5", "10", "5", "12"],
	NX: ["3", "5", "10", "5", "12"],
	Zero: ["2", "5", "9", "6", "10"],
	Exceed2: ["2", "5", "9", "6", "10"],
	Exceed: ["3", "5", "9", "4", "8"],
},

"A24":
{
	title: "Born to be Alive", artist: "P. Hernandez & B. Thomas", channel: WORLD, bpm: "124",
	Exceed2: ["2", "5", "9", "5", "12"],
	Exceed: ["2", "5", "11", "4", "12"],
},

"A25":
{
	title: "Xibom Bombom", artist: "Los del ritmo", channel: WORLD, bpm: "148",
	Exceed2: ["1", "5", "8", "5", "9"],
	Exceed: ["3", "4", "8", "4", "10"],
},


// \9

"902":
{
	title: "Circus Magic", artist: "Crying Nut", bpm: "141", fromMix: "Extra",
	NX2: ["3", "8", "14", "9", ""],
	NX: ["3", "8", "14", "9", ""], NX_: ["", "", "", "", "15/16"],
	Zero_: ["", "", "", "", "??"],
	Exceed2: ["4", "7", "9", "8", ""],
	Exceed: ["3", "6", "11", "5", ""],
},

"906":
{
	title: "Starian", artist: "Duke", channel: KPOP, bpm: "135", fromMix: "Extra",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S2",
	Fiesta: "S7.hd S13.cz D9.fs  S15.acz D17.anm",
	NXA: ["", "7", "13", "9", ""], NXA_: ["", "", "15", "", "17"],
	NX2: ["", "7", "13", "9", ""],
	NX: ["", "7", "13", "9", ""],
	Zero: ["", "6", "12", "7", ""],
	Exceed2: ["", "6", "12", "7", ""],
	Exceed: ["", "5", "12", "5", ""],
},

"909":
{
	title: "Mistake", artist: "U'Two", channel: KPOP, bpm: "110", fromMix: "Extra",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 S11",
	Fiesta: "Sp1.nl S6.hd Dp6.fs D12.nm  S2.new S4.new",
	NXA: ["1", "6", "", "6", "12"],
	NX2: ["1", "6", "", "6", "13"],
	NX: ["1", "6", "", "6", ""],
},

"910":
{
	title: "The Rap. act 3", artist: "Honey Family", channel: KPOP, bpm: "98", fromMix: "Extra",
	Zero: ["3", "5", "12", "5", "13"],
	Exceed2: ["3", "5", "12", "5", "13"],
},

"911":
{
	title: "Chicken Wing", artist: "BanYa", bpm: "200", fromMix: "Extra",
	Prime2: "= -S22",
	Prime: "=  @1.17 S21.ucs S22.ucs D23.ucs",
	Fiesta2: "=  @1.60 S17",
	FiestaEX: "=  @1.51 S4 S6 S9 D17",
	Fiesta: "S10.cz D11.nm  S19",
	Exceed2: ["", "", "10", "", "11"],
	Exceed: ["", "", "10", "6", ""],
},

"913":
{
	title: "Can Can", artist: "F2 Systems", channel: ORIGINAL, bpm: "197", fromMix: "Extra",
	Exceed2: ["", "", "12", "", "14"],
	Exceed: ["", "", "12", "", "15"],
},

"915":
{
	title: "Loner", artist: "T.T.Ma", channel: KPOP, bpm: "155", fromMix: "Extra",
	NX: ["", "8", "13", "6", ""],
	Zero: ["", "6", "10", "7", ""],
	Exceed2: ["", "6", "10", "7", ""],
	Exceed: ["", "6", "10", "6", ""],
},

"916":
{
	title: "Monkey Magic", artist: "E-paksa", channel: KPOP, bpm: "151.9", fromMix: "Extra",
	Exceed: ["3", "6", "10", "6", ""],
},

"919":
{
	title: "Lazenca, Save Us", artist: "N.EX.T", channel: KPOP, bpm: "85", fromMix: "Extra",
	NXA: ["3", "6", "", "5", ""],
	NX2: ["2", "5", "", "5", ""],
	NX: ["2", "5", "", "5", ""],
},

"921":
{
	title: "Pierrot", artist: "Lee Hyun Do", channel: KPOP, bpm: "100", fromMix: "Extra",
	Exceed2: ["2", "5", "12", "5", "12"],
	Exceed: ["2", "5", "11", "5", "12"],
},

"922":
{
	title: "Final Audition episode 1", artist: "BanYa", bpm: "189", fromMix: "Extra",
	shortTitle: "Final Audition ep. 1",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S7",
	Fiesta: "S8.hd S15.cz D11.fs D21.nm  S13.ahd S19.acz D23.anm",
	NXA: ["", "8", "15", "11", "21"], NXA_: ["", "13", "19", "", "23"],
	NX2: ["", "8", "15", "11", "21"], NX2_: ["", "10", "19", "", "22"],
	NX: ["", "8", "15/16", "11", "21"], NX_: ["", "9", "", "(@)", "22"],
	Zero: ["", "7", "15", "8", "21"],
	Exceed2: ["", "7", "15", "8", "21"],
	Exceed: ["", "6", "14", "7", "19"],
},


// \8

"801":
{
	title: "Bambole", artist: "Papa Gonzales", channel: WORLD, bpm: "128", fromMix: "Premiere3",
	Exceed2: ["2", "9", "11", "6", "12"],
	Exceed: ["1", "7", "12", "6", "13"],
},

"802":
{
	title: "Bee", artist: "BanYa", bpm: "160", fromMix: "Premiere3",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 D19  @1.51 S7 S10",
	Fiesta: "S4.nl S11.hd S15.cz D11.fs D21.nm  S19.acz D23.anm",
	NXA: ["4", "11", "15", "11", "21"], NXA_: ["", "", "19", "", "23"],
	NX2: ["3", "8", "15", "11", "21"], NX2_: ["", "", "18", "", "23"],
	NX: ["3", "8", "15/16", "11", "21"], NX_: ["", "", "18", "23", "??"],
	Zero: ["3", "6", "13", "9", "20"],
	Exceed2: ["3", "6", "13", "9", "20"],
	Exceed: ["3", "6", "12", "9", "18"],
},

"803":
{
	title: "Burning Krypt", artist: "B-Legit, 2Wice, & 4Tray", channel: WORLD, bpm: "96", fromMix: "Premiere3",
	Exceed: ["2", "4", "9", "6", ""],
},

"804":
{
	title: "Can You Feel Dis or Dat", artist: "2Wice", channel: WORLD, bpm: "97", fromMix: "Premiere3",
	Exceed: ["2", "4", "11", "6", ""],
},

"805":
{
	title: "Clap Your Hands", artist: "Scoop feat. Joyce Lyle", channel: WORLD, bpm: "127", fromMix: "Premiere3",
	NX: ["3", "6", "10", "5", "14"],
	Zero: ["2", "5", "9", "5", "14"],
	Exceed2: ["2", "5", "9", "5", "14"],
	Exceed: ["2", "5", "9", "6", "14"],
},

"806":
{
	title: "Conga", artist: "Queen Latin", channel: WORLD, bpm: "124", fromMix: "Premiere3",
	NX: ["3", "6", "14", "8", "15/16"],
	Zero: ["4", "5", "12", "7", "15"],
	Exceed2: ["4", "5", "12", "7", "15"],
	Exceed: ["2", "5", "12", "6", ""],
},

"807":
{
	title: "D Gang", artist: "BanYa", bpm: "150", fromMix: "Premiere3",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4.nl S6.hd S9.cz D7.fs  S18 D15",
	Exceed2: ["4", "6", "9", "7", ""],
	Exceed: ["3", "5", "9", "8", ""],
},

"808":
{
	title: "DJ Nightmare", artist: "Rodney O & Joe Cooley", channel: WORLD, bpm: "114", fromMix: "Premiere3",
	Exceed: ["2", "4", "11", "5", ""],
},

"809":
{
	title: "Eres Para Mi", artist: "Mozquito", channel: WORLD, bpm: "128", fromMix: "Premiere3",
	NX: ["2", "5", "13", "8", ""],
	Zero: ["2", "5", "11", "7", ""], Zero_: ["", "", "", "??", ""], //? правда был эназер?
	Exceed2: ["2", "5", "11", "7", ""],
	Exceed: ["2", "4", "11", "6", ""],
},

"810":
{
	title: "Fiesta Macarena Pt. 1", artist: "DJ Paula", channel: WORLD, bpm: "131", fromMix: "Premiere3",
	Exceed2: ["2", "5", "8", "6", ""],
	Exceed: ["2", "4", "7", "6", ""],
},

"811":
{
	title: "Hello", artist: "BanYa", bpm: "140", fromMix: "Premiere3",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7 S16 D9 D16.nm",  //?
	Exceed2: ["2", "7", "13", "7", "16"],
	Exceed: ["2", "6", "13", "8", ""],
},

"812":
{
	title: "On Your Side", artist: "Kay Kent", channel: WORLD, bpm: "123", fromMix: "Premiere3",
	Exceed2: ["1", "4", "7", "5", ""],
	Exceed: ["1", "4", "8", "5", ""],
},

"813":
{
	title: "Everybody", artist: "Carlos T. Quila", channel: WORLD, bpm: "110", fromMix: "Premiere3",
	Exceed2: ["1", "6", "8", "6", ""],
	Exceed: ["1", "6", "8", "5", ""],
},

"814":
{
	title: "Join The Party", artist: "Gans", channel: WORLD, bpm: "131", fromMix: "Premiere3",
	NX: ["3", "6", "13", "5", "14"], NX_: ["", "", "", "", "18"],
	Zero: ["2", "5", "11", "5", "13"], Zero_: ["", "", "", "", "??"],
	Exceed2: ["2", "5", "11", "5", "13"],
	Exceed: ["1", "5", "11", "5", "14"],
},

"815":
{
	title: "Lay It Down", artist: "Fresno", channel: WORLD, bpm: "131", fromMix: "Premiere3",
	Exceed2: ["3", "5", "8", "5", ""],
	Exceed: ["3", "5", "8", "5", ""],
},

"816":
{
	title: "Let the Sunshine", artist: "Lisa Cool & The South Spirit", channel: WORLD, bpm: "128", fromMix: "Premiere3",
	Exceed2: ["2", "4", "7", "4", ""],
	Exceed: ["2", "4", "8", "3", ""],
},

"817":
{
	title: "Lovething", artist: "Down Low", channel: WORLD, bpm: "103", fromMix: "Premiere3",
	Exceed: ["2", "5", "10", "4", "12"],
},

"818":
{
	title: "Mexi Mexi", artist: "Mozquito", channel: WORLD, bpm: "138", fromMix: "Premiere3",
	NX: ["4", "7", "12", "7", ""], NX_: ["", "", "", "", "15/16"],
	Zero: ["3", "6", "11", "5", ""], Zero_: ["", "", "", "", "??"],
	Exceed2: ["3", "6", "11", "5", ""],
	Exceed: ["3", "6", "13", "5", ""],
},

"819":
{
	title: "You Don't Wanna Runup", artist: "Rodney O & Joe Cooley", channel: WORLD, bpm: "107", fromMix: "Premiere3",
	Exceed: ["3", "7", "13", "6", ""],
},

"820":
{
	title: "Beat of the War", artist: "BanYa", bpm: "202", fromMix: "Premiere3",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3 S9",
	Fiesta: "S5.nl S10.hd S15.cz  D12.fs D19.nm",
	NX2: ["5", "10", "15", "12", "19"],
	NX: ["5", "10", "15/16", "12", "19"],
	Zero: ["5", "9", "13", "9", "19"],
	Exceed2: ["5", "9", "13", "9", "20"],
	Exceed: ["4", "7", "14", "7", ""],
},

"821":
{
	title: "Empire of the Sun", artist: "Novasonic", bpm: "118", fromMix: "Premiere3",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp1.nl S6.hd S11.cz Dp4.fs D13.nm",
	Zero: ["1", "6", "11", "4", "13"],
	Exceed2: ["1", "6", "11", "4", "13"],
	Exceed: ["2", "5", "10", "5", "15"],
},

"823":
{
	title: "Let's Get the Party Started", artist: "Pink", channel: WORLD, bpm: "128.9", fromMix: "Premiere3",
	Exceed: ["2", "6", "15", "6", "20"],
},

"826":
{
	title: "Come to Me", artist: "BanYa", bpm: "100 ~ 107", fromMix: "Premiere3",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4",
	Fiesta: "Sp3.nl S6.hd S11.cz Dp6.fs D13.nm  S12.ahd S15.acz D14.anm",
	NXA: ["3", "6", "11", "6", "13"], NXA_: ["", "12", "15", "", "14"],
	NX2: ["3", "6", "11", "6", "13"], NX2_: ["", "12", "15", "", "14"],
	NX: ["3", "6", "11", "6", "13"],
	Zero: ["3", "5", "10", "6", "12"],
	Exceed2: ["3", "8", "10", "6", "12"],
	Exceed: ["1", "7", "10", "6", "12"],
},


// \7

"701":
{
	title: "Dr. M", artist: "BanYa", bpm: "145", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S9",
	Fiesta: "S3.nl S7.hd S12.cz D11.fs D16.nm  S16.acz",
	NXA: ["4", "7", "12", "11", "15"], NXA_: ["", "", "16", "", ""],
	NX2: ["3", "7", "11", "9", "16"], NX2_: ["", "", "16", "", ""],
	NX: ["3", "7", "11", "9", "15/16"], NX_: ["", "", "15/16", "", ""],
	Zero: ["2", "6", "12", "8", "16"],
	Exceed2: ["2", "6", "12", "8", "16"],
	Exceed: ["2", "5", "12", "6", "16"],
},

"702":
{
	title: "Emperor", artist: "BanYa", bpm: "150", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 Sp3 Dp3  @1.51 S2 S8",
	Fiesta: "S5 S11 S16 D17",
},

"703":
{
	title: "Get Your Groove On", artist: "BanYa", bpm: "96", fromMix: "Rebirth",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "S4 S6 S13 D9",  //? nl hd cz fs
	Exceed2: ["1", "5", "7", "8", ""],
	Exceed: ["1", "4", "8", "5", ""],
},

"704":
{
	title: "Love is a Danger Zone", artist: "BanYa", bpm: "140", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S10",
	Fiesta: "S3.nl S7.hd S19.cz D6.fs D20.nm  S15.acz D15.afs Dp??(x2).anm",
	NXA: ["4", "7", "19", "6", "20"], NXA_: ["", "", "16", "7", "??(x2)"],  // у afs неправильная официальная оценка, он гораздо круче (и это новый чарт, не из NX2)
	NX2: ["3", "5", "19", "6", "20"], NX2_: ["", "", "16", "8", "??(x2)"],
	NX: ["3", "6", "19", "6", "20"], NX_: ["", "", "15/16", "8", "??(x2)"],
	Zero: ["2", "6", "19", "6", "20"], Zero_: ["", "", "", "??", "??(x2)"],
	Exceed2: ["2", "6", "18", "6", "20"],
	Exceed: ["2", "6", "11", "5", ""],
},

"705":
{
	title: "Maria", artist: "BanYa", bpm: "136", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=  @1.12 S18.ucs",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S6 S11 S15 D15",  //?
	Exceed2: ["2", "5", "8", "6", ""],
	Exceed: ["2", "5", "8", "5", ""],
},

"706":
{
	title: "Mission Possible", artist: "BanYa", bpm: "124", fromMix: "Rebirth",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "S5 S7 S13 D8  @1.20 S19",
},

"707":
{
	title: "My Way", artist: "BanYa", bpm: "118", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 Dp4  @1.51 S3 S8",
	Fiesta: "Sp2.nl S5.hd S12.cz Dp6.fs D15.nm",
	Zero: ["2", "5", "12", "6", "15"],
	Exceed2: ["2", "5", "12", "6", "15"],
},

"708":
{
	title: "Point Break", artist: "BanYa", bpm: "92", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S6.hd Dp6.fs  D14.new",
	NXA: ["3", "6", "9", "6", "13"],
	NX2: ["3", "6", "9", "6", "13"],
	NX: ["3", "6", "9", "6", ""],
	Zero: ["1", "4", "8", "5", ""],
	Exceed2: ["1", "4", "8", "5", ""],
},

"709":
{
	title: "Street Show Down", artist: "BanYa", bpm: "124", fromMix: "Rebirth",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S7 S15 D13 Sp4 Dp6",
	NX2: ["4", "7", "8", "6", "13"],
	Zero: ["4", "7", "8", "6", "13"],
	Exceed2: ["4", "7", "8", "6", "14"],
},

"710":
{
	title: "Top City", artist: "BanYa", bpm: "110.72", fromMix: "Rebirth",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "S4 S6 S12 D7 D12",
},

"711":
{
	title: "Winter", artist: "BanYa", bpm: "168", fromMix: "Rebirth",
	Prime2: "=  @1.07 S19",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 D17",
	Fiesta: "S4.nl S8.hd S15.cz D11.fs D19.nm  S6",
	NXA: ["4", "8", "15", "11", "19"],
	NX2: ["4", "9", "14", "10", "19"],
	NX: ["4", "9", "14", "10", "19"],
	Zero: ["3", "8", "14", "9", "19"],
	Exceed2: ["3", "8", "14", "9", "18"],
	Exceed: ["3", "7", "14", "7", "18"],
},

"712":
{
	title: "Will o' the Wisp", artist: "BanYa", bpm: "210", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3",
	Fiesta: "S5.nl S10.hd S13.cz D13.fs D19.nm  S19.acz D21.anm  D10",
	NXA: ["5", "10", "13", "13", "19"], NXA_: ["", "", "19", "", "21"],
	NX2: ["5", "10", "13", "13", "19"],
	NX: ["5", "10", "13", "13", "19"],
	Zero: ["4", "8", "13", "10", "19"],
	Exceed2: ["4", "8", "13", "10", "19"],
	Exceed: ["4", "7", "12", "7", "20"],
},

"713":
{
	title: "Till the End of Time", artist: "BanYa", bpm: "140", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=  @1.17 S13.ucs S17.ucs D8.ucs D13.ucs D16.ucs",
	Fiesta2: "=",
	FiestaEX: "=  @1.10 Dp3",
	Fiesta: "S2 S4 S9",
},

"714":
{
	title: "Oy Oy Oy", artist: "BanYa", bpm: "148", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 Sp2 Dp3  @1.30 S13 D13  @1.51 S4",
	Fiesta: "S6.hd S8.cz",
	Exceed2: ["3", "6", "8", "7", ""],
	Exceed: ["3", "6", "8", "6", ""],
},

"715":
{
	title: "We Will Meet Again", artist: "BanYa", bpm: "118", fromMix: "Rebirth",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "S3 S8 S13 D8  @1.30 S14",
},

"716":
{
	title: "Miss's Story", artist: "BanYa", bpm: "111", fromMix: "Rebirth",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp3.nl S5.hd Dp5.fs  S18.new D19.new",
	NX2: ["3", "5", "12", "3", ""],
},

"717":
{
	title: "Set Me Up", artist: "BanYa", bpm: "120", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S9  @1.10 Dp4  @1.30 S13  @1.51 S2 S4 S6",
	Fiesta: "Sp4 Dp7",
},

"718":
{
	title: "Dance With Me", artist: "BanYa", bpm: "122", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= S12  @1.10 Dp4  @1.30 S14 D15  @1.51 S2 S4 S6",
	Fiesta: "Sp4 Dp6",
},

"719":
{
	title: "Go Away!", artist: "To-Ya", channel: KPOP, bpm: "103", fromMix: "Rebirth",
	Exceed2: ["2", "4", "9", "6", ""],
	Exceed: ["1", "4", "9", "5", ""],
},

"721":
{
	title: "Gotta Be Kidding!", artist: "Hanul", channel: KPOP, bpm: "138", fromMix: "Rebirth",
	Exceed2: ["1", "4", "13", "3", ""],
	Exceed: ["1", "4", "11", "3", ""],
},

"730":
{
	title: "Perfect!", artist: "Diva", channel: KPOP, bpm: "132", fromMix: "Rebirth",
	Zero: ["1", "5", "10", "4", "13"],
	Exceed2: ["1", "5", "10", "4", "13"],
	Exceed: ["1", "5", "10", "3", "13"],
},

"735":
{
	title: "Vook", artist: "BanYa", bpm: "184", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S7",
	Fiesta: "S9.hd S15.cz D17.fs D18.nm  S17.ahd S20.acz D12.afs D19.anm",
	NXA: ["5", "9", "15", "17", "18"], NXA_: ["", "17", "20", "12", "19"],
	NX2: ["4", "8", "14", "16", "18"], NX2_: ["", "16", "18", "12", "19"],
	NX: ["4", "8", "14", "15/16", "18"], NX_: ["", "", "(@)", "11", "19"],
	Zero: ["4", "7", "14", "15", "18"], Zero_: ["", "", "", "??", "??"],
	Exceed2: ["4", "7", "14", "15", "17"],
	Exceed: ["4", "7", "14", "7", "18"],
},

"736":
{
	title: "Csikos Post", artist: "BanYa", bpm: "180", fromMix: "Rebirth",
	Prime2: "=",
	Prime: "=  @1.12 D21.ucs",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S3.nl S7.hd S13.cz D8.fs D16.nm  S10",
	NX: ["4", "7", "13", "8", "15/16"], NX_: ["", "", "", "", "17"],
	Zero: ["3", "6", "12", "7", "14"],
	Exceed2: ["3", "6", "12", "7", "14"],
	Exceed: ["3", "6", "13", "6", "15"],
},


// \6


// \5

"501":
{
	title: "Pump Jump", artist: "BanYa", bpm: "106", fromMix: "Perfect",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4 S15 D17 Sp2 Dp4",  //? fiesta
	Exceed: ["2", "4", "9", "4", ""],
},

"502":
{
	title: "N", artist: "BanYa", bpm: "106", fromMix: "Perfect",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 D16",
	Fiesta: "Sp2.nl S5.hd S16.cz Dp5.fs",
	NXA: ["2", "5", "16", "5", ""],
	NX2: ["2", "5", "16", "5", ""],
	NX: ["2", "5", "15/16", "5", ""],
	Zero: ["2", "4", "14", "4", ""],
},

"503":
{
	title: "Rolling Christmas", artist: "BanYa", bpm: "142", fromMix: "Perfect",
	Prime2: "=",
	Prime: "=  @1.11 Dp??(x2)  @1.12 D17.ucs",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "D5.fs D13.nm  S3.new S5.new S8.new S13.new",
	NX: ["4", "5", "10", "5", "13"],
	Zero: ["2", "4", "7", "4", "12"],
	Exceed2: ["2", "5", "8", "5", ""],
	Exceed: ["3", "5", "8", "4", ""],
},

"504":
{
	title: "All I Want For X-mas", artist: "BanYa", bpm: "130", fromMix: "Perfect",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S3.nl S6.hd S11.cz D7.fs",
	Exceed2: ["2", "5", "7", "4", ""],
	Exceed: ["2", "5", "8", "4", ""],
},

"505":
{
	title: "Beethoven Virus", artist: "BanYa", bpm: "162", fromMix: "Perfect",
	Prime2: "=",
	Prime: "= -Dp11",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 Dp3",
	Fiesta: "S4.nl S7.hd D8 D20.nm  Dp11  S17.acz  S8.new S13.new S16.new D18.new",  //? D8 Dp11
	NXA: ["4", "7", "13", "8", "20"], NXA_: ["", "10", "17", "11", ""],
	NX2: ["3", "7", "13", "8", "20"], NX2_: ["", "7", "17", "9", ""],
	NX: ["3", "7", "13", "8", "20"], NX_: ["", "(@)", "15/16", "", "(@)"],
	Zero: ["3", "6", "13", "8", "20"],
	Exceed2: ["3", "6", "13", "8", "20"],
	Exceed: ["4", "6", "11", "6", "17"],
},

"507":
{
	title: "Come Back to Me", artist: "Deux", channel: KPOP, bpm: "116", fromMix: "Perfect",
	NXA: ["2", "5", "11", "6", "13"],
	NX2: ["2", "5", "11", "6", "13"],
	NX: ["2", "5", "11", "6", "13"],
	Exceed2: ["2", "5", "10", "6", "11"],
	Exceed: ["2", "5", "10", "5", "11"],
},

"508":
{
	title: "As I Told U", artist: "Kim Sung Jae", channel: KPOP, bpm: "120", fromMix: "Perfect",
	Exceed2: ["2", "5", "9", "5", "12"],
	Exceed: ["2", "5", "10", "4", "10"],
},

"516":
{
	title: "Slam", artist: "Novasonic", bpm: "132", fromMix: "Perfect",
	Prime2: "=  @1.04 D23",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S9",
	Fiesta: "S3.nl S6.hd S17.cz D6.fs D20.nm  S18.acz",
	NXA: ["3", "6", "17", "6", "20"], NXA_: ["", "", "18", "", "19"],
	NX2: ["3", "6", "18", "6", "20"],
	NX: ["3", "6", "15/16", "6", "20"],
	Zero: ["3", "5", "15", "6", "19"],
	Exceed2: ["3", "5", "15", "6", "19"],
	Exceed: ["3", "5", "12", "5", "17"],
},

"517":
{
	title: "Space Fantasy", artist: "E-paksa", channel: KPOP, bpm: "186", fromMix: "Perfect",
	Exceed: ["4", "6", "11", "6", ""],
},


// \4

"401":
{
	title: "Oh! Rosa", artist: "BanYa", bpm: "148", fromMix: "OBG_SE",
	Prime2: "=  @1.04 CoOp(x2)",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "D7.fs  S7.new S13.new",
	Exceed2: ["3", "6", "9", "7", ""],
	Exceed: ["3", "5", "9", "6", ""],
},

"402":
{
	title: "First Love", artist: "BanYa", bpm: "104", fromMix: "OBG_SE",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp1.nl S4.hd S9.cz Dp4.fs  D14",
	Exceed2: ["1", "4", "9", "4", ""],
	Exceed: ["1", "4", "9", "3", ""],
},

"403":
{
	title: "Betrayer", artist: "BanYa", bpm: "92", fromMix: "OBG_SE",
	Prime2: "=",
	Prime: "@1.11 = S16 D17",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S1 S13",
	Fiesta: "Sp2.nl S5.hd S8.cz D8.fs D13.new",
	Exceed: ["2", "5", "8", "6", ""],
},

"404":
{
	title: "Solitary", artist: "BanYa", bpm: "136", fromMix: "OBG_SE",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: " =  @1.30 Dp5  @1.51 S2 S4 S8",
	Fiesta: "Sp3.nl S6.hd S9.cz D7.fs D16.nm  S17.acz  S16.new",
	NXA: ["3", "6", "9", "7", "16"], NXA_: ["", "", "17", "", "18"],
	NX2: ["3", "5", "9", "7", "16"], NX2_: ["", "", "17", "", "19"],
	NX: ["3", "5", "9", "7", "15/16"],
	Zero: ["3", "5", "8", "6", "15"],
	Exceed2: ["3", "5", "8", "6", "15"],
	Exceed: ["3", "5", "9", "6", ""],
},

"405":
{
	title: "Mr. Larpus", artist: "BanYa", bpm: "190", fromMix: "OBG_SE",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3",
	Fiesta: "S5.nl S11.hd S14.cz S22.acz D14.fs D17.nm D23.afs  S20.new",  //? что за D25, он вроде только на фиесте ex есть
	NXA: ["5", "11", "14", "14", "17"], NXA_: ["", "", "22", "23", "25"],
	NX2: ["4", "11", "14", "14", "17"], NX2_: ["", "", "21", "23", "25"],
	NX: ["4", "11", "14", "14", "17"], NX_: ["", "", "21", "21", "23"],
	Zero: ["4", "9", "13", "10", "18"], Zero_: ["", "", "", "", "??"],
	Exceed2: ["4", "9", "13", "10", "18"],
	Exceed: ["4", "7", "12", "10", "19"],
},

"411":
{
	title: "A-Trap", artist: "Baby V.O.X.", channel: KPOP, bpm: "125", fromMix: "OBG_SE",
	Exceed2: ["1", "4", "12", "4", "13"],
},

"413":
{
	title: "Run!", artist: "Novasonic", bpm: "140", fromMix: "OBG_SE",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4.nl S8.hd S15.cz D8.fs D17.nm",
	NX: ["4", "8", "15/16", "8", "15/16"],
	Zero: ["2", "5", "15", "6", "16"],
	Exceed2: ["2", "5", "15", "6", "16"],
	Exceed: ["2", "5", "10", "6", ""],
},

"414":
{
	title: "Run to You", artist: "DJ DOC", channel: KPOP, bpm: "132", fromMix: "OBG_SE",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S4 S5 S10 D6  @1.20 S13 D14  @1.51 S2 S7",  //?
	Exceed: ["2", "5", "9", "3", ""],
},


// \3

"301":
{
	title: "Final Audition 2", artist: "BanYa", bpm: "130", fromMix: "OBG",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 Dp3  @1.51 S4 S7",
	Fiesta: "S8.hd S10.cz D8.fs D17.nm  S16.acz D19.anm",
	NXA: ["", "8", "10", "8", "17"], NXA_: ["", "", "16", "", "19"],
	NX2: ["", "8", "10", "8", "17"], NX2_: ["", "", "16", "", "19"],
	NX: ["", "8", "10", "8", "17"], NX_: ["", "", "15/16", "", "18"],
	Zero: ["", "7", "9", "7", "16"], Zero_: ["", "", "??", "", ""],
	Exceed2: ["", "7", "9", "7", "17"],
	Exceed: ["", "6", "10", "6", "17"],
},

"302":
{
	title: "Naissance", artist: "BanYa", bpm: "136", fromMix: "OBG",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4 S8",
	Fiesta: "S7.hd S10.cz D7.fs D15.nm  S20.acz",
	NXA: ["", "7", "10", "7", "15"], NXA_: ["", "", "20", "", ""],
	NX2: ["", "7", "11", "7", "14"],
	NX: ["", "7", "11", "7", "14"],
	Zero: ["", "7", "9", "7", "14"],
	Exceed2: ["", "7", "9", "7", ""],
	Exceed: ["", "6", "9", "6", ""],
},

"303":
{
	title: "Turkey March", artist: "BanYa", bpm: "150", fromMix: "OBG",
	Prime2: "=",
	Prime: "=  @1.12 S18.ucs D17.ucs Dp??(x2).ucs",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S3",
	Fiesta: "S7.hd S12.cz D9.fs D19.nm  S15.ahd",
	NXA: ["", "7", "12", "9", "19"],
	NX2: ["", "7", "12", "9", "18"], NX2_: ["", "15", "18", "", ""],
	NX: ["", "7", "12", "9", "18"],
	Zero: ["", "7", "12", "8", "19"],
	Exceed2: ["", "7", "12", "8", "18"],
	Exceed: ["", "6", "11", "8", "16"],
},

"304":
{
	title: "With My Lover", artist: "BanYa", bpm: "124", fromMix: "OBG",
	NX: ["3", "", "10", "", "11"],
	Zero: ["3", "", "10", "", "11"],
},

"306":
{
	title: "Nightmare", artist: "BanYa", bpm: "120", fromMix: "OBG",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 D13",
	Fiesta: "S1.nl S4.hd Dp5.fs",
	Exceed2: ["1", "4", "", "5", ""],
	Exceed: ["1", "5", "", "4", ""],
},

"307":
{
	title: "Close Your Eyes", artist: "BanYa", bpm: "105", fromMix: "OBG",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S4 Sp2 Dp3",
},

"308":
{
	title: "Free Style", artist: "BanYa", bpm: "99", fromMix: "OBG",
	Prime2: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S13",
	Fiesta: "Sp1.nl Dp3.fs  D15",
	Zero: ["1", "", "", "3", ""],
},

"309":
{
	title: "Midnight Blue", artist: "BanYa", bpm: "80", fromMix: "OBG",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "Sp4 Dp5  @1.10 S12 D13",
},

"310":
{
	title: "She Likes Pizza", artist: "BanYa", bpm: "230", fromMix: "OBG",
	Prime2: "=  @1.05 S21 D23",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S8.hd S9.cz D9.fs D16.nm",
	NXA: ["", "8", "9", "9", "16"],
	NX2: ["", "7", "11", "8", "16"],
	NX: ["", "7", "11", "8", "15/16"],  NX_: ["", "", "", "", "19"],
	Zero: ["", "7", "9", "8", "16"],
	Exceed2: ["", "7", "9", "8", "16"],
	Exceed: ["", "7", "10", "9", "16"],
},

"311":
{
	title: "Pumping Up", artist: "BanYa", bpm: "135", fromMix: "OBG",
	Prime2: "=  @1.06 D15",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 S12",
	Fiesta: "S4.hd",
	Zero: ["", "4", "", "", ""],
	Exceed2: ["", "4", "", "", ""],
	Exceed: ["", "4", "", "", ""],
},

"312":
{
	title: "Don't Bother Me", artist: "Tashannie", channel: KPOP, bpm: "110", fromMix: "OBG",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.20 D13",
	Fiesta: "Sp2.nl S10.cz D5.fs  S4.new S5.new",
	NXA: ["2", "6", "10", "6", ""],
	NX2: ["3", "6", "12", "6", ""],
	NX: ["3", "6", "12", "6", ""],
	Zero: ["1", "7", "10", "5", ""],
	Exceed2: ["1", "7", "10", "5", ""],
	Exceed: ["1", "6", "9", "4", ""],
},

"313":
{
	title: "Love Song", artist: "Yu Seung Jun (Steve Yoo)", channel: KPOP, bpm: "118", fromMix: "OBG",
	NX: ["2", "4", "10", "4", "11"],
	Zero: ["1", "4", "9", "4", "11"],
	Exceed2: ["1", "4", "9", "4", "11"],
},

"315":
{
	title: "To the Top", artist: "6 Mill, Bionic Juno", channel: KPOP, bpm: "120", fromMix: "OBG",
	Exceed2: ["1", "5", "", "", ""],
},

"318":
{
	title: "We Are", artist: "Deux", channel: KPOP, bpm: "116", fromMix: "OBG",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.30 Dp4  @1.51 S2",
	Fiesta: "S5.hd S12.cz D6.fs D13.nm  @1.10 S4",
	NXA: ["", "5", "12", "6", "13"],
	NX2: ["", "5", "13", "6", "14"],
	NX: ["", "5", "13", "6", "14"],
	Zero: ["", "5", "9", "5", "12"],
	Exceed2: ["", "5", "9", "5", ""],
	Exceed: ["", "5", "9", "4", ""],
},


// \2

"202":
{
	title: "Hate", artist: "BanYa", bpm: "90", fromMix: "2nd",
	Zero: ["1", "3", "", "4", ""],
	Exceed2: ["1", "4", "", "3", ""],
	Exceed: ["1", "4", "", "3", ""],
},

"203":
{
	title: "Koul", artist: "BanYa", bpm: "102", fromMix: "2nd",
	Exceed2: ["", "5", "10", "5", ""],
	Exceed: ["", "5", "8", "4", ""],
},

"204":
{
	title: "Final Audition", artist: "BanYa", bpm: "130", fromMix: "2nd",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S2 S6 S9",
	Fiesta: "S7.hd S17.cz Dp3.fs D17.nm  S15.acz D15.anm",
	NXA: ["3", "7", "17", "3", "17"], NXA_: ["", "", "15", "", "16"],
	NX2: ["3", "7", "15", "3", "16"], NX2_: ["", "", "17", "", "16"],
	NX: ["3", "7", "15/16", "3", "15/16"], NX_: ["", "", "15/16", "", "15/16"],
	Zero: ["2", "7", "15", "3", "17"], Zero_: ["", "", "??", "", "??"],
	Exceed2: ["2", "7", "14", "3", "17"],
	Exceed: ["2", "5", "13", "3", "18"],
},

"205":
{
	title: "Extravaganza", artist: "BanYa", bpm: "195", fromMix: "2nd",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S4",
	Fiesta: "S9.hd S11.cz D12.fs D17.nm  S16.ahd S21.acz D19.anm  @1.10 S7",
	NXA: ["", "10", "11", "12", "17"], NXA_: ["", "16", "21", "", "19"],
	NX2: ["", "10", "12", "13", "18"], NX2_: ["", "", "21", "", "19"],
	NX: ["", "10", "12", "13", "18"], NX_: ["", "(@)", "21", "", "19"],
	Zero: ["", "8", "11", "9", "17"], Zero_: ["", "", "??", "", "??"],
	Exceed2: ["", "7", "11", "7", "18"],
	Exceed: ["", "6", "10", "6", "17"],
},

"208":
{
	title: "Fighting Spirits", artist: "H.O.T.", channel: KPOP, bpm: "98", fromMix: "2nd",
	NX: ["2", "", "", "5", ""], NX_: ["", "", "13", "", "15/16"], //? только до версии 1.08
	Zero: ["2", "", "", "5", ""],
	Exceed2: ["2", "", "", "5", ""],
	Exceed: ["3", "", "", "5", ""],
},

"212":
{
	title: "Com'Back", artist: "Sechs Kies", channel: KPOP, bpm: "158", fromMix: "2nd",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "= -D8  @1.51 S8",
	Fiesta: "S6.hd S15.cz D16.nm  D7 D8  @1.10 S4",
	NXA: ["", "6", "15", "", "16"],
	NX2: ["", "6", "15", "", "16"],
	NX: ["", "6", "15/16(15)", "", "15/16(16)"],
	Zero: ["", "6", "14", "", "16"],
	Exceed2: ["", "6", "8", "", ""],
	Exceed: ["", "6", "12", "", ""],
},

"213":
{
	title: "Mobius Strip", artist: "Sechs Kies", channel: KPOP, bpm: "106", fromMix: "2nd",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S2",
	Fiesta: "S6.hd S12.cz D7.fs D14.nm  S4.new",
	NX: ["", "6", "12", "6", "14"],
	Zero: ["", "5", "12", "6", "14"],
	Exceed2: ["", "5", "", "6", ""],
},

"224":
{
	title: "Techno Repeatorment", artist: "BanYa", bpm: "150", duration: REMIX, fromMix: "2nd",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "S7 D8  @1.51 S19",
},


// \1

"101":
{
	title: "Ignition Starts", artist: "BanYa", bpm: "146", fromMix: "1st",
	Prime2: "=",
	Prime: "@1.01 S8.hd S15.cz D10.fs  @1.19 S18 D17",
	Exceed2: ["", "6", "12", "7", ""],
	Exceed: ["", "6", "12", "6", ""],
},

"102":
{
	title: "Hypnosis", artist: "BanYa", bpm: "180", fromMix: "1st",
	Prime2: "=",
	Prime: "@1.01 S7.hd S15.cz D8.fs D15.nm  S18 D18",
	Exceed2: ["", "6", "12", "7", "15"],
	Exceed: ["", "6", "12", "6", "16"],
},

"103":
{
	title: "Forever Love", artist: "Fin.K.L", channel: KPOP, bpm: "138", fromMix: "1st",
	NXA: ["1", "", "", "", "13"],
	NX2: ["1", "", "", "", "13"],
	NX: ["1", "", "", "", "13"],
	Zero: ["1", "", "", "", "11"],
	Exceed2: ["1", "", "", "", ""],
},

"104":
{
	title: "Passion", artist: "Yu Seung Jun (Steve Yoo)", channel: KPOP, bpm: "125", fromMix: "1st",
	Exceed2: ["1", "5", "", "5", ""],
	Exceed: ["2", "5", "", "4", ""],
},

"108":
{
	title: "Come to Me", artist: "Clon", channel: KPOP, bpm: "137", fromMix: "1st",
	Zero: ["2", "5", "9", "5", "12"],
	Exceed2: ["2", "5", "9", "5", "12"],
	Exceed: ["2", "5", "8", "4", ""],
},

"109":
{
	title: "Funky Tonight", artist: "Clon", channel: KPOP, bpm: "105", fromMix: "1st",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.40 D14",
	Fiesta: "S4.hd S12.cz D4.fs  S2.new S5.new",
	NXA: ["", "4", "12", "4", ""],
	NX2: ["", "4", "12", "4", ""],
	NX: ["", "4", "12", "4", ""],
	Zero: ["", "4", "11", "4", ""],
	Exceed2: ["", "4", "", "4", ""],
	Exceed: ["", "4", "", "4", ""],
},

"111":
{
	title: "Hatred", artist: "Novasonic", bpm: "136", fromMix: "1st",
	Fiesta2: "=",
	FiestaEX: "=",
	Fiesta: "S6 S13.cz D7 D16.nm Dp7",  //? hd fs
	Zero: ["2", "7", "13", "7", "16"],
	Exceed2: ["2", "7", "13", "7", "16"],
},

"112":
{
	title: "Another Truth", artist: "Novasonic", bpm: "136", fromMix: "1st",
	Prime2: "=",
	Prime: "=",
	Fiesta2: "=",
	FiestaEX: "=  @1.51 S8",
	Fiesta: "S3.nl S5.hd S15.cz D6.fs D16.nm  D17.afs D22.anm",
	NXA: ["4", "5", "15", "6", "16"], NXA_: ["", "", "", "17", "22"],
	NX2: ["3", "5", "15", "6", "16"], NX2_: ["", "", "", "18", "21"],
	NX: ["3", "5", "15/16", "6", "15/16"], NX_: ["", "", "", "18", "22"],
	Zero: ["3", "5", "16", "6", "16"], Zero_: ["", "", "", "", "??"],
	Exceed2: ["3", "5", "", "6", "16"],
	Exceed: ["3", "5", "", "5", "18"],
},



/*{
	title: "Narcisista Por Excelencia  [SHORT]", artist: "PXNDX", bpm: "164",
	Prime: "S17 D18",
},*/

};


/* unused:
{
	title: "May Remix", duration: REMIX,
	title: "Mr. Fire Fighter & Beat of the War 2", duration: REMIX,
},
*/


function GetPreviousMixID( nextMixID )
{
	var mixIndex = mixesOrder.indexOf( nextMixID );
	console.assert( mixIndex > 0);
	return mixesOrder[ mixIndex - 1 ];
}


function ParseChartLevel( chart, chartText )
{
	// check for "instant level substitution" here
	// it is used not for a players re-estimation, but for official estimation, in case when number is not visible on arcade
	// for example, this is used for '??' levels, as well as for 15/16 levels on NX, which are marked with the same symbol
	var levelSubst_Match = chartText.match( /(.*)\s*\((\d+)\)$/ );   // '14 (15)'
	if( levelSubst_Match )
	{
		chart.levelText = levelSubst_Match[ 1 ];
		chart.levelNum = Number( levelSubst_Match[ 2 ] );
		console.assert( ! isNaN( chart.levelNum ) );
		return;
	}

	var couple_Match = chartText.match( /(.*)\s*\(x(\d+)\)$/ );   // '?? (x2)'
	if( couple_Match )
	{
		if( couple_Match[ 1 ] !== "" )
		{
			chart.levelText = couple_Match[ 1 ];
			chart.levelNum = Number( couple_Match[ 1 ] );
		}
		//console.assert( ! isNaN( chart.levelNum ) );
		if( ! chart.shared.players )
		{
			chart.shared.players = Number( couple_Match[ 2 ] );
			console.assert( ! isNaN( chart.shared.players ) );
		}
		else
			console.assert( chart.shared.players === Number( couple_Match[ 2 ] ) );
		return;
	}

	console.assert( ! chartText.match( /(\d+)\s*\((.+)\)/ ) );

	chart.levelText = chartText;
	chart.levelNum = Number( chartText );
	//console.assert( ! isNaN( chart.levelNum ) );  -  if level is '??', we will get NaN here and this is ok
}


function GetSharedChart( track, idx )
{
	if( ! track.charts )
		track.charts = {};
	if( ! ( idx in track.charts ) )
		track.charts[ idx ] = { index: idx };
	return track.charts[ idx ];
}

// On NX, both 15 and 16 were marked as one 'skull' mark. So the only way to determine level precisely
// is to pass it with predictable score and calculate level bonus multiplier manually.
var NX_GLITCH_LEVEL = "15/16"

// On NX, there were charts unavailable to play in normal mode, one needs a hack to pley them.
// So they had no official level, no easy access and should not be treated as common charts.
var NX_SPECIAL_ZONE_HIDDEN = "(@)"

// Some charts were marked as "?? DANGER", so they have no official estimation
var NO_OFFICIAL_ESTIMATION = "??"

function PreprocessOldStyleStation( track, inCharts, zone, tags, oldSlotSharedCharts )
{
	var result = [];

	if( ! inCharts )
		return result;

	for( var i = 0;  i < OldTagTypes.length;  ++i )
	{
		if( inCharts[ i ] === ""  ||  inCharts[ i ] === NX_SPECIAL_ZONE_HIDDEN )
			continue;

		var chart = {};
		chart.tag = tags[ i ];
		if( ! oldSlotSharedCharts[ chart.tag ] )
			oldSlotSharedCharts[ chart.tag ] = GetSharedChart( track, ++track.chartsCount );
		chart.shared = oldSlotSharedCharts[ chart.tag ];
		ParseChartLevel( chart, inCharts[ i ] );

		var levelIsOfficial =  ! isNaN( chart.levelNum )  &&  String( chart.levelNum ) == chart.levelText
		var coupleDetected =  ! isNaN( chart.shared.players )  &&  chart.shared.players >= 2
		var levelIsSpecified =  ! isNaN( chart.levelNum )  &&  inCharts[ i ].endsWith( "(" + String( chart.levelNum ) + ")" )
		if( ! levelIsOfficial  &&  ! levelIsSpecified  &&  ! coupleDetected )
		{
			if( inCharts[ i ] === NX_GLITCH_LEVEL )
				chart.levelNum = 15;
			else if( inCharts[ i ] === NO_OFFICIAL_ESTIMATION )
				;
			else
				console.warn( "level of '" + track.title + "  " + tags[ i ] + "-" + inCharts[ i ] + "' can't be parsed, got " + String( chart.levelNum ) );
		}

		chart.text = chart.tag + "-" + inCharts[ i ];
		var chartType = chart.shared.players  ?  COUPLE  :  OldTagTypes[ i ];
		if( ! chart.shared.type )
			chart.shared.type = chartType;
		else
			console.assert( chart.shared.type == chartType );

		chart.zone = zone;
		result.push( chart );
	}

	return result;
}

/*
function PreprocessOldStyleListCharts( track, mixID, oldSlotSharedCharts )
{
	var arcadeCharts = track[ mixID ];
	var anotherCharts = track[ mixID + "_" ];
	var result = [];

	if( track.duration === REMIX  ||  track.duration === FULL )
	{
		result.concat( PreprocessOldStyleStation( anotherCharts, SPECIAL, OldArcadeTags, oldSlotSharedCharts ) );
	}
	else
	{
		result.concat( PreprocessOldStyleStation( arcadeCharts, ARCADE, OldArcadeTags, oldSlotSharedCharts, result ) );
		result.concat( PreprocessOldStyleStation( anotherCharts, SPECIAL, OldSpecialTags, oldSlotSharedCharts, result ) );
	}

	return( result.length > 0  ?  result  :  undefined );
}
*/

function ParseNewStyleChart( track, chartText, sharedIndex )
{
	for( var prefix of NewTags )
		if( chartText.indexOf( prefix ) === 0 )
		{
			var chart = {};
			chart.shared = GetSharedChart( track, sharedIndex > 0  ?  sharedIndex  :  ++track.chartsCount );
			ParseChartLevel( chart, chartText.substring( prefix.length ) );
			chart.text = chartText;
			chart.tag = prefix;
			var chartType = ( chart.shared.players  ?  COUPLE  :  ( prefix[0] === "S"  ?  SINGLE  :  DOUBLE ) );
			if( ! chart.shared.type )
				chart.shared.type = chartType;
			else
				console.assert( chart.shared.type === chartType );

			return chart;
		}
	alert( "Unknown chart tag '" + chartText + "'" );
}


function PreprocessNewStyleChart( track, result, chartDescr, mixID, patchIndex )
{
	var descrTokens = chartDescr.split( "." );
	var chartText = descrTokens[ 0 ];
	descrTokens = descrTokens.slice( 1 );

	var sharedIndex = 0;
	var prevChart;
	var chartIsUcs = false;

	for( var token of descrTokens )
	{
		if( token === "new" )
			continue;

		if( token === "ucs" )
		{
			chartIsUcs = true;
			continue;
		}

		if( token === "ampass" )
			continue;

		prevChart = FindChart( track, token );
		if( ! prevChart )
			alert( "Unknown prev chart '" + track.title + "  " + token + "'" );
		console.assert( prevChart );
		sharedIndex = prevChart.shared.index;
	}

	var chart = ParseNewStyleChart( track, chartText, sharedIndex );

	if( prevChart )
		chart.fromMixID = prevChart.fromMixID;
	else
		chart.fromMixID = mixID;

	if( chartIsUcs )
		chart.isUCS = true;

	if( chart && prevChart )
		console.assert( ( prevChart.type === SINGLE ) === ( chart.type === SINGLE ) );

	result.push( chart );

	if( patchIndex > 0 )
		chart.fromPatchIndex = patchIndex;

	return chart;
}


function RemoveNewStyleChart( track, mixID, chartText )
{
	var index = _.findIndex( track[ mixID ], function( item ) { return item.text === chartText; } );
	if( index < 0)
	{
		console.log( "Can't find " + track.title + " " + chartText + " on " + mixID );
		console.assert( index >= 0 );
		return;
	}
	track[ mixID ].splice( index, 1 );
}


function CopyCharts( track, mixID, fromMixID, patchIndex )
{
	console.assert( track[ mixID ].length === 0 );

	if( fromMixID === "" )
	{
		var mixIndex = mixesOrder.indexOf( mixID );
		for( var i = mixIndex - 1;  i >= 0;  --i )
			if( track[ mixesOrder[ i ] ] )
			{
				fromMixID = mixesOrder[ i ];
				break;
			}
	}

	console.assert( track[ fromMixID ] );
	track[ mixID ] = JSON.parse( JSON.stringify( track[ fromMixID ] ) );
	for( var chart of track[ mixID ] )
	{
		if( patchIndex > 0 )
			chart.fromPatchIndex = patchIndex;
		else
			delete chart.fromPatchIndex;
	}
}


function ParsePatchIndex( mixID, patchName )
{
	var patchIndex = mixes[ mixID ].patches.indexOf( patchName );
	if( patchIndex < 0 )
	{
		console.log( "ERROR: No patch " + patchName + " for " + mixID );
		alert( "No patch " + patchName + " for " + mixID );
		console.assert( false );
	}
	return patchIndex;
}


function PreprocessNewStyleStringCharts( track, mixID )
{
	var chartsStr = track[ mixID ];
	if( ! chartsStr )
		return;

	track[ mixID ] = [];

	var charts = chartsStr.split( " " );
	var patchIndex = mixes[ mixID ].patches ? 0 : -1;
	for( var token of charts )
	{
		if( token === "")
		{
		}
		else if( token[0] === '=' )
		{
			CopyCharts( track, mixID, token.substr( 1 ), patchIndex );
		}
		else if( token[0] === '+' )
		{
			var chart = PreprocessNewStyleChart( track, track[ mixID ], token.substr( 1 ), mixID, patchIndex );
		}
		else if( token[0] === 'S'  ||  token[0] === 'D'  ||  token.substr(0, 4) === 'CoOp' )  // implicit '+' is considered
		{
			var chart = PreprocessNewStyleChart( track, track[ mixID ], token, mixID, patchIndex );
		}
		else if( token[0] === '-' )
		{
			RemoveNewStyleChart( track, mixID, token.substring( 1 ) );
		}
		else if( token[0] === '@' )
		{
			patchIndex = ParsePatchIndex( mixID, token.substring( 1 ) );
		}
		else
		{
			var message = "Unrecognized '" + track.title + "' chart token :'" + token + "'";
			console.log( "ERROR: " + message );
			alert( message );
			console.assert( false );
		}
	}
}


function PreprocessOldStyleListCharts( track, mixID, oldSlotSharedCharts )
{
	var mix = mixes[ mixID ];
	console.assert( mix.style === "old"  ||  ! track[ mixID ] );

	var arcadeCharts = track[ mixID ];
	var specialCharts = track[ mixID + "_" ];
	if( arcadeCharts  ||  specialCharts )
	{
		// for check:
		// track[ mixID + "_A" ] = arcadeCharts;
		// track[ mixID + "_S" ] = specialCharts;

		if( track.duration !== REMIX  &&  track.duration !== FULL )
			track[ mixID ] = PreprocessOldStyleStation( track, arcadeCharts, ARCADE, OldArcadeTags, oldSlotSharedCharts )
		                     .concat(
			                 PreprocessOldStyleStation( track, specialCharts, SPECIAL, OldSpecialTags, oldSlotSharedCharts )
			                 );
		else
			track[ mixID ] = PreprocessOldStyleStation( track, specialCharts, SPECIAL, OldArcadeTags, oldSlotSharedCharts );

		console.assert( track[ mixID ].length > 0 );

		delete track[ mixID + "_" ];
	}
}


function GuessDurationFromTitle( title )
{
	if( title.endsWith( "[SHORT]" ) )
		return SHORT;

	if( title.endsWith( "[FULL]" ) )
		return FULL;

	return STANDARD;
}


function PreprocessTrack( track )
{
	if( ! track.duration )
		track.duration = GuessDurationFromTitle( track.title );

	if( ! track.artist )
		console.error( "'" + track.title + "' has no artist specified." );

	if( ! track.channel )
		track.channel = knownArtists[ track.artist ];
	else if( knownArtists[ track.artist ] === track.channel )
		console.warn( "'" + track.title + "' artist '" + track.artist + "' channel is already defined as '" + track.channel + "'" );

	if( [ ORIGINAL, WORLD, KPOP, JMUSIC, XROSS ].indexOf( track.channel ) < 0 )
		console.error( "'" + track.title + "' has no channel specified.")

	if( ! track.bpm )
		console.error( "'" + track.title + "' has no bpm specified." );

	track.chartsCount = 0;

	var oldSlotSharedCharts = {};
	for( var mixID of mixesOrder )
	{
		if( typeof track[ mixID ] === "string" )
			PreprocessNewStyleStringCharts( track, mixID );
		else
			PreprocessOldStyleListCharts( track, mixID, oldSlotSharedCharts );
	}
}


function PreprocessTracklist()
{
	for( var trackID in tracklist )
		PreprocessTrack( tracklist[ trackID ] );
}


PreprocessTracklist();

/*
function PostprocessTracklist()
{
	function GetNewStyleChartDiff( track, newMix, oldMix )
	{
		if( ! track[ newMix ] )
			return;
		//&&  ! track[ oldMix ] )
		//	return;

		var result = "";
		if( track[ oldMix ] )
			result = "=";

		var oldCharts = track[ oldMix ] ? track[ oldMix ] : [];

		for( var newChart of track[ newMix ] )
			if ( ! _.find( oldCharts, function( item ) { return( item.text === newChart.text ); } ) )
				result += " +" + newChart.text;

		for( var oldChart of oldCharts )
			if ( ! _.find( track[ newMix ], function( item ) { return( item.text === oldChart.text ); } ) )
				result += " -" + oldChart.text;

		return result.trim();
	}

	for( var track of tracklist )
	{
		if ( ! track.Prime  &&  ! track.Fiesta2  &&  ! track.FiestaEX  &&  ! track.Fiesta )
			continue;

		console.log( track.title );
		var r1 = GetNewStyleChartDiff( track, "Prime", "Fiesta2" )
		if( r1 )
			console.log( "\tPrime: \"" + r1 + "\", " );

		var r2 = GetNewStyleChartDiff( track, "Fiesta2", "FiestaEX" );
		if( r2 )
			console.log( "\tFiesta2: \"" + r2 + "\", " );

		var r3 = GetNewStyleChartDiff( track, "FiestaEX", "Fiesta" );
		if( r3 )
			console.log( "\tFiestaEX: \"" + r3 + "\", " );

		var r4 = GetNewStyleChartDiff( track, "Fiesta", "-" );
		if( r4 )
			console.log( "\tFiesta: \"" + r4 + "\", " );

        console.log( "" );
	}
}

//PostprocessTracklist();
*/