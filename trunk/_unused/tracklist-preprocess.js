/*
tracklist_transformed =
[
	{ title: "Love is a Danger Zone", artist: "Banya", channel: "Banya", bpm: "140",
		NXA: ["4", "7", "19", "6", "20"], NXA_: ["", "", "16", "7", "??"],
		NX2: ["3", "5", "19", "6", "20"], NX2_: ["", "", "16", "8", "??"]
		NX: ["3", "6", "18", "6", "19"],
		Zero: ["2", "6", "19", "6", "20"],
		Exceed2: ["2", "6", "18", "6", "20"],
	},
]
*/

document.write('<textarea id="result"style="font-size: 9pt"></textarea>');

/*
tracks = 
[
	{ title: "Love is a Danger Zone", artist: "Banya", channel: "Banya", bpm: "140",
		singles: ["4", "7", "19", "", "", "16"], doubles: ["", "6", "20", "", "7", "??"] },
]
*/

xls_tracklist_Arcade =
[
	"Eun Ji Won	Adios		123	2	6	14	4	16																				",
	"Novasonic	Another Truth	K-Pop	136	4	5	15	6	16	3	5	15	6	16	3	5	15	6	15	3	5	16	6	16	3	5		6	16",
	"Yahpp	Arch of Darkness	BanYa	136	3	7	14	4	16	3	7	14	4	17	3	7	14	8	16										",
	"Crying Nut	Astral Song	K-Pop	~190	3	7	15	8	17	4	9	15	9	17															",
	"Gil Gun	A.U. Ready?	K-Pop	94	1	5	10	5	12	2	5	10	5	12															",
	"HeaDTriP	Beat # No.4	K-Pop	121	2	6	15	5	17	2	6	16	5	17															",
	"Banya	Beat of the War	Banya	202						5	10	15	12	19	5	10	15	12	18	5	9	13	9	19	5	9	13	9	20",
	"Banya	Beat of the War 2	Banya	190	5	10	16	12	19	4	9	16	11	19	4	9	15	11	18	3	8	17	9	20					",
	"BanYa Production	Beat the Ghost		124						3	9	18	7	20															",
	"Banya	Bee	Banya	160	4	11	15	11	21	3	8	15	11	21	3	8	15	11	20	3	6	13	9	20	3	6	13	9	20",
	"Banya	Beethoven Virus	Banya	162	4	7	13	8	20	3	7	13	8	20	3	7	13	8	19	3	6	13	8	20	3	6	13	8	20",
	"Yahpp	Blaze Emotion		170	2	7	17	10	18																				",
	"BanYa Production	Bullfighter's Song	BanYa	168						4	8	16	6	20	4	8	15	6	19										",
	"Banya	Canon-D	Banya	160	4	6	20	10	22	3	5	20	9	22	3	5	18	9	20	2	5	20	8	21	2	6	??	7	??",
	"Yahpp	Cannon X.1		185	3	10	20	13	23																				",
	"BanYa Production	Caprice of Otada	Banya	160	3	8	17	10	18	3	8	17	9	19															",
	"Wang Lee Hom	Change Myself		104	1	5	10	5	9																				",
	"Yahpp	Chimera	BanYa	210	7	16	23	21	?? (25)	8	17	23	20	?? (25)	8	15	21	19	?? (25)										",
	"Banana Girl	Chocolate		130	2	5	9	3	9																				",
	"Yahpp	Chopsticks Challenge		128	3	6	17	3	16																				",
	"Sonic Dimension	Chopstix	Pop	134	2	5	13	2	15	3	5	14	2	16															",
	"Louis	Chung Hwa Ban Jeom	K-Pop	150						1	5	12	3	15	1	5	12	3	15	2	5	13	2	16					",
	"Crying Nut	Circus Magic	K-Pop	141						3	8	14	9		3	8	14	9	 						4	7	9	8	",
	"SechsKies	Com'back	K-Pop	158		6	15		16		6	15		16	 	6	15	 	15		6	14		16		6	8		",
	"Seo Taiji & Boys	Come Back Home	K-Pop	93	1	4		4		1	4		4																",
	"Deux	Come Back To Me	K-Pop	116	2	5	11	6	13	2	5	11	6	13	2	5	11	6	13						2	5	10	6	11",
	"Banya	Come To Me	Banya	107	3	6	11	6	13	3	6	11	6	13	3	6	11	6	13	3	5	10	6	12	3	8	10	6	12",
	"May	Compunction	K-Pop	133	2	6	16	4	17	2	6	16	4	17															",
	"Gyfted	Crazy		108	2	6	15	6	19																				",
	"Oscillator X	Dance All Night	Pop	140	2	5	13	2	15	3	6	11	6	13															",
	"Elpis	Dance Vibrations	Pop	130	1	5	10	6	15	2	6	10	6	15															",
	"Vassline	Dawn of the Apocalypse			4	14	21	14	21																				",
	"Som2	Deja Vu	K-Pop	115	3	6	13	6	13	3	5	14	6	14	3	5	14	6	14	3	6	13	6	14	3	6	13	6	14",
	"Nina Pilots	Digan Lo Que Digan		162	3	6	16	8	13																				",
	"Crash	Dignity	K-Pop	195	5	12	20	13	23	4	11	20	15	23	4	12	19	15	22	5	9	20	12	22	5	9	20	12	22",
	"BanYa Production	DJ Otada		180	4	8	19	14	22																				",
	"House Rulez	Do It!		129	2	6	15	5	18																				",
	"Lazy Bone	Do It Yourself	K-Pop	106							6	13	7	14	 	6	13	7	14		6	13	7	14					",
	"BanYa Production	Do You Know That ~old school	BanYa	120						3	4	15	7	18	3	4	15	7	17										",
	"Tashannie	Don't Bother Me	K-Pop	110	2	6	10	6		3	6	12	6		3	6	12	6	 	1	7	10	5		1	7	10	5	",
	"Banya	Dr. M	Banya	145	4	7	12	11	15						3	7	11	9	15	2	6	12	8	16	2	6	12	8	16",
	"Eun Ji Won	Drunken in Melody	K-Pop	94	3	5		5		2	5		5		2	5	 	5	 	3	6		5		3	6	10	5	11",
	"Drunken Tiger	Emergency	K-Pop	110						2	5	12	5	14	2	5	12	5	14	3	4	12	6	15					",
	"ZiGZaG	Energizer	Pop	151	2	9	16	11	17	3	9	16	10	17															",
	"JTL	Enter the Dragon	K-Pop	110	2	5	14	5	17	2	5	14	5	17	2	5	14	5	16	3	4	14	5	17					",
	"Kaoma	Essa Maneira	Pop	150						3	7	13	9	14	3	7	13	9	14	2	6	12	7	13	2	6	9	7	12",
	"Banya	Extravaganza	Banya	195		10	11	12	17		10	12	13	18	 	10	12	13	17		8	11	9	17		7	11	7	18",
	"Yahpp	Faster Z	Banya	162	4	12	19	14	20	4	11	20	15	??(24)															",
	"Seo Taiji	Feel the Soul	K-Pop	93.54	2	7	17	4	18	3	9	18	4	20															",
	"Banya	Final Audition	Banya	130	3	7	17	3	17	3	7	15	3	16	3	7	15	3	15	2	7	15	3	17	2	7	14	3	17",
	"Banya	Final Audition 2	Banya	130		8	10	8	17		8	10	8	17	 	8	10	8	16		7	9	7	16		7	9	7	17",
	"Banya	Final Audition 3 U.F	Banya	130	3	6	14	5	17	3	6	14	5	17	3	6	14	5	16	3	5	13	4	16	3	5	13	4	15",
	"Banya	Final Audition episode 1	Banya	189		8	15	11	21		8	15	11	21	 	8	15	11	20		7	15	8	21		7	15	8	21",
	"Yahpp	Final Audition episode 2-1	BanYa	170	3	7	20	9	22	3	7	20	9	22	3	7	19	9	21										",
	"Yahpp	Final Audition episode 2-2	BanYa	200	7	16	22	18	24	7	16	22	18	24	7	15	20	17	??(24)										",
	"Yahpp	Final Audition Ep. 2-X	BanYa	170	8	17	??(24)	21	??(25)																				",
	"Yahpp	Fire	BanYa	133											 	 	 	 	 						 				",
	"Epik High	Fly	K-Pop	128						3	5	14	4	16	3	5	14	4	15										",
	"T.O	Footprints	K-Pop	135							5	11	5	11	 	5	11	5	11		5	12	5	13					",
	"N.EX.T	For You	K-Pop	160						1	5	14	2	20	1	5	14	5	19										",
	"Fin.K.L	Forever Love	K-Pop	138	1				13	1				13	1	 	 	 	13	1				11	1				",
	"DJ Missill	Forward		97	2	5	13	5	13																				",
	"Jiny	Free!	K-Pop	175						4	7	15	8	18	4	7	15	8	17										",
	"Clon	Funky Tonight	K-Pop	105		4	12	4			4	12	4		 	4	12	4	 		4	11	4			4		4	",
	"Mina	Get My Phone Call	K-Pop	108	1	5	13	5	14	1	5	13	5	14															",
	"Banya	Get Up!	Banya	180						4	7	15	7	18											4	7	13	7	16",
	"U:Nee	Go	K-Pop	138	3	7	12	3	13	3	6	12	3	13	3	6	12	3	13	2	6	11	6	13	2	6	11	3	13",
	"Dynamic Duo	Go Back	K-Pop	112						1	4	9	4	10	1	4	8	4	10										",
	"Lexy	Greenhorn	K-Pop	109	2	4	13	5	13	2	4	13	5	15	2	4	13	5	15	1	4	13	5	15	1	4	13	5	15",
	"Sonic Dimension	Groovin' Motion	Pop	130	3	6	9	6	11	3	6	12	6	12															",
	"BanYa Production	Guitar Man		120						3	7	12	7	13															",
	"Sam-I-Am	Haley	Pop	112	2	4	9	4	11	2	4	9	4	11	2	4	9	4	11										",
	"May	Handsome Character That Pass	K-Pop	125						2	4	18	3	15	1	4	17	3	15										",
	"Banya	Hi-Bi	Banya	145	3	8	15	8	18	4	8	14	8	18	4	8	14	8	17	3	8	14	8	18	3	8	14	8	18",
	"BanYa Production	Higgledy Piggledy	Banya	150	1	6	14	8	15	2	7	15	8	17															",
	"Cho PD & B.E.G.	Hold the Line	K-Pop	126						2	4	12	4	14	2	4	12	4	14										",
	"1Tym	Hot	K-Pop	98	2	5	10	4	12	2	5	11	4	12	2	5	11	4	12	2	5	10	4	12	2	5	10	4	12",
	"DJ Dookie	Hybs	Pop	102	2	4	11	4	13	2	4	11	4	13	2	4	11	4	13										",
	"Hyun Jin Young	Hyun Jin Young Go Jin Young Go	K-Pop	150						3	6	19	6	20	2	6	18	6	18										",
	"S.E.S	I Am Your Girl		102	2	5	12	6	10																				",
	"Wax	I'll Give You All My Love	K-Pop	164	3	7	16	7	18	3	7	16	7	18	3	7	15	7	17	3	7	15	8	17	3	7	16	8	18",
	"Seo Taiji & Boys	It's My Business	K-Pop	200	3	11	20	13	21	3	10	20	13	21															",
	"Banya	J Bong	Banya	140						5	7	13	5	17						5	7	13	5	19	5	7	13	5	17",
	"BanYa Production	Jam o' Beat	Banya	120	2	7	14	6	14	3	7	15	6	16															",
	"BanYa Production	K.O.A. -Alice in Wonderworld-		156	3	8	17	9	18																				",
	"Los ninos de sara	La Cubanita	Pop	120						4	9	13	10	16	4	9	13	10	15	2	6	12	7	13	2	6	12	7	13",
	"Big Bang	LaLaLa		102	2	5	13	5	13																				",
	"N.EX.T	Lazenca, Save Us	K-Pop	85	3	6		5		2	5		5		2	5	 	5	 										",
	"Manresa	Le Code De Bonne Conduite	Pop	171						4	5	12	8	15	4	5	12	8	15	4	7	10	8	15	4	7	10	8	15",
	"Banya	Love is a Danger Zone	Banya	140	4	7	19	6	20	3	5	19	6	20	3	6	18	6	19	2	6	19	6	20	2	6	18	6	20",
	"Banya	Love is a Danger Zone 2	Banya	162	7	15	21	17	23	6	15	21	18	23	6	15	20	17	22	7	15	21	18	23					",
	"Kim Jong Kook	Lovely	K-Pop	188						4	5	12	4	13	4	5	12	4	13										",
	"Pia	Maelstrom	K-Pop	102	2	5	16	5	19	3	5	16	5	18															",
	"BanYa	Miss's Story		111						3	5	12	3																",
	"U'Two	Mistake	K-Pop	110	1	6		6	12	1	6		6	13	1	6	 	6	 										",
	"BanYa Production	Money		130						4	7	13	8	16															",
	"Banya	Monkey Fingers	Banya	186	5	8	15	7	17	3	7	15	7	17	3	7	15	7	16	4	7	15	6	18	4	7	15	6	18",
	"BanYa Production	Monkey Fingers 2		180						4	8	17	7	19															",
	"Banya	Moonlight	Banya	180		10	19	11	21		8	19	11	21	 	8	18	11	20		7	18	8	21					",
	"Spooky Banana	Mr. Fire Fighter	K-Pop	158	2	7	13	8	15	2	7	13	8	15	2	7	13	8	15	2	6	13	8	15					",
	"Banya	Mr. Larpus	Banya	190	5	11	14	14	17	4	11	14	14	17	4	11	14	14	16	4	9	13	10	18	4	9	13	10	18",
	"Park Hyang Lim vs. Yahpp	My Brother is Street Singer	K-Pop	129						2	5	11	3	13	2	5	11	3	13										",
	"BanYa Production	My Dreams		136	4	10	18	5	18																				",
	"Cho PD	My Friend	K-Pop	127						3	4	12	5	14	3	4	12	5	14	3	4	13	5	16					",
	"Banya	N	Banya	106	2	5	16	5		2	5	16	5		2	5	15	5	 	2	4	14	4						",
	"Banya	Naissance	Banya	136		7	10	7	15		7	11	7	14	 	7	11	7	14		7	9	7	14		7	9	7	",
	"Banya	Naissance 2	Banya	129	3	6	13	5	15	3	6	13	5	15	3	6	13	5	15	2	6	13	5	14	2	6	13	5	14",
	"Bae Chi Gi	Nice to Meet You	K-Pop	117	2	5	14	5	14	2	5	14	5	14															",
	"Hot Potato	No Despair	K-Pop	160	2	6	19	8	21	1	6	18	8	20															",
	"Jang Yoon Jung	Oh My!	K-Pop	112							4	10	4	11	2	4	10	4	11	3	4	9	5	10					",
	"DJ DOC	One Night	K-Pop	132	2	5	13	4	14	2	5	13	4	14	2	5	13	4	14										",
	"Namola Family	Only You		108	3	6	12	3	13																				",
	"Big Metra	Panuelito Rojo		98	1	5	10	4	18																				",
	"BanYa Production	People Didn't Know		134	2	5	15	7	17																				",
	"Banya	Phantom	Banya	130		12	18	7	19		10	18	7	19	 	10	17	7	18		10	18	6	19					",
	"Banya	Point Break	Banya	92	3	6	9	6	13	3	6	9	6	13	3	6	9	6	 	1	4	8	5		1	4	8	5	",
	"Victoria	Power of Dream	Pop	122						1	7	14	6	15	1	7	14	6	15	1	6	14	5	15	1	6	13	5	14",
	"Som2	Pray	K-Pop	122						2	4	9	4	11	2	4	9	4	11						2	5	8	4	11",
	"Pxndx	Procedimientos Para Llegar a un Comun Acuerdo		160	3	7	15	7	16																				",
	"Tico	Pump Breakers		120	2	5	17	4	15																				",
	"Yahpp	Pumptris Quattro	Banya	153	3	7	19	13	20	3	8	20	14	??(22)															",
	"Lee Hyun Do	Sajahu	K-Pop	127	3	5	13	5	14	3	5	13	5	14	3	5	13	5	14	2	5	13	5	14	2	5	13	5	14",
	"Rod	Shake It Up	Pop	120						4	9	15	3	19	4	9	15	3	18	2	7	14	7	19	2	7	14	7	18",
	"Banya	She Likes Pizza	Banya	230		8	9	9	16		7	11	8	16	 	7	11	8	15		7	9	8	16		7	9	8	16",
	"Joanne	Shiny Day	K-Pop	106	3	5	13	4	14	3	5	13	4	14															",
	"Novasonic	Slam	K-Pop	132	3	6	17	6	20	3	6	18	6	20	3	6	15	6	19	3	5	15	6	19	3	5	15	6	19",
	"45rpm	Slightly		120	1	4	14	5	12																				",
	"Apple Jam	Snow Dream	K-Pop	170						3	5	13	7	13	3	5	13	7	13										",
	"Typhoon	So	K-Pop	138						1	6	12	2	12	1	6	12	2	12										",
	"General Grant	Soca Make Yuh Ram Ram	Pop	108						3	5	10	5	12	3	5	10	5	12	2	5	9	6	10	2	5	9	6	10",
	"Banya	Solitary	Banya	136	3	6	9	7	16	3	5	9	7	16	3	5	9	7	15	3	5	8	6	15	3	5	8	6	15",
	"Yahpp	Solitary 1.5	Banya	136	4	7	16	6	18	3	7	16	6	18															",
	"Banya	Solitary 2	Banya	136	3	6	17	6	18	3	6	17	6	19	3	6	16	6	18	3	6	16	6	18					",
	"Duke	Starian	K-Pop	135		7	13	9			7	13	9		 	7	13	9	 		6	12	7			6	12	7	",
	"Perry	Storm	K-Pop	96	3	5	12	4	13	2	5	12	4	13	2	5	12	4	13	2	3	12	4	13					",
	"Banya	Street Show Down	Banya	124						4	7	8	6	13						4	7	8	6	13	4	7	8	6	14",
	"Wonder Girls	Tell Me	K-Pop	127	1	5	12	5	14	2	5	14	5	16															",
	"Ururbu Project	Terminal Depository	K-Pop	138						3	6	13	5	16	3	6	13	5	15										",
	"Andrew Kim	Throw 'em Up	Pop	100						2	5	14	5	15	2	5	14	5	15										",
	"BanYa Production	Toccata		104	3	10	17	6	14																				",
	"Banya	Turkey March	Banya	150		7	12	9	19		7	12	9	18	 	7	12	9	17		7	12	8	19		7	12	8	18",
	"Mina	Turn Around	K-Pop	113						2	4	13	5	14	2	4	13	5	14	3	5	11	5	14					",
	"Lee Hyun Do	Typhoon	K-Pop	112						2	5	10	5	13	2	5	10	5	13	3	6	11	6	14	2	6	11	6	14",
	"Hyun Jin Young vs. Yahpp	U Inside My Dim Memory	K-Pop	118						3	6	14	4	18	3	6	14	4	17										",
	"Sam-I-Am	Uprock		120	2	5	17	4	14																				",
	"015B	Very Old Couples	K-Pop	121	2	6	13	6	15	3	6	13	6	15															",
	"Bada	V.I.P.	K-Pop	112	3	5	11	5	15	3	5	11	5	13															",
	"Banya	Vook	Banya	184	5	9	15	17	18	4	8	14	16	18	4	8	14	15	17	4	7	14	15	18	4	7	14	15	17",
	"Victoria	Watch Out	Pop	106						3	6	10	6	12	3	6	10	6	12	2	5	11	7	12	2	5	11	7	12",
	"Deux	We Are	K-Pop	116		5	12	6	13		5	13	6	14	 	5	13	6	14		5	9	5	12		5	9	5	",
	"Gyfted	We Goin' Fly -remix-	Pop	112	3	5	15	6	19	4	5	14	6	19	4	5	14	6	18										",
	"Crash	What Do You Really Want?	K-Pop	110	3	9	19	11	16	2	9	20	11	14	2	9	19	11	14	2	7	18	7	14	2	7	16	7	14",
	"Turtles	What's Goin' On?	K-Pop	130						3	3	7	5	8	3	3	7	5	8	3	2	7	5	9					",
	"Banya	Will o' the Wisp	Banya	210	5	10	13	13	19	5	10	13	13	19	5	10	13	13	18	4	8	13	10	19	4	8	13	10	19",
	"Banya	Winter	Banya	168	4	8	15	11	19	4	9	14	10	19	4	9	14	10	18	3	8	14	9	19	3	8	14	9	18",
	"Banya	Witch Doctor	Banya	195			16		23			17		23	 	 	15	 	21			17		22					",
	"Yahpp	Witch Doctor #1	BanYa	122	3	7	14	5	19	3	7	14	5	19	3	7	14	5	18						 	 			",
	"Eugene	Wuthering Heights	K-Pop	138						2	4		3		2	4	 	3	 	2	4		3						",
	"Banya	X-Treme	Banya	162	5	9	14	9	19	4	7	14	9	19	4	7	14	9	18	5	7	14	8	19	5	7	14	8	19",
	"No Brain	You Fell in Me	K-Pop	152	2	6	16	8	16	2	6	17	8	16															",
	"BanYa Production	2006 Love Song	BanYa	96											2	7	10	4	13										",
	"Eun Ji Won	All Famy	K-Pop	94																2	3		4						",
	"Banya	All I Want For X-Mas	Banya	130																					2	5	7	4	",
	"Kim Sung Jae	As I Told You	K-Pop	120																					2	5	9	5	12",
	"Baby V.O.X.	A-Trap	K-Pop	125																					1	4	12	4	13",
	"Kristeen	Ba Be Loo Be Ra	Pop	126																					1	4	9	5	13",
	"Papa Gonzales	Bambole	Pop	128																					2	9	11	6	12",
	"Banya	Blazing	Banya	158											3	6	15	6	18	3	6	15	6	19	3	6	14	6	19",
	"P. Hernandez & B. Thomas	Born to be Alive	Pop	124																					2	5	9	5	12",
	"DVS	Bust Back	Pop	94											3	6	12	5	13										",
	"F2 Systems	Can Can	Banya	197																							12		14",
	"Banya	Chicken Wing	Banya	200																							10		11",
	"Scoop feat. Joyce Lyle	Clap Your Hands	Pop	127											3	6	10	5	14	2	5	9	5	14	2	5	9	5	14",
	"Clon	Come to Me	K-Pop	137																2	5	9	5	12	2	5	9	5	12",
	"Queen Latin	Conga	Pop	124											3	6	14	8	15	4	5	12	7	15	4	5	12	7	15",
	"Banya	Csikos' Post	Banya	180											4	7	13	8	15	3	6	12	7	14	3	6	12	7	14",
	"Banya	D Gang	Banya	150																					4	6	9	7	",
	"Novasonic	Empire of the sun	K-Pop	118																1	6	11	4	13	1	6	11	4	13",
	"Mozquito	Eres Para Mi	Pop	128											2	5	13	8	 	2	5	11	7		2	5	11	7	",
	"Uhm Jung Hwa	Eternity	K-Pop	120																1	5	9	5	12	1	5	9	5	12",
	"Carlos T. Quila	Everybody	Pop	110																					1	6	8		",
	"El Cuba	Fiesta	Pop	140											4	7	11	6	13	2	7	8	5	10	2	7	8	5	10",
	"DJ Paula	Fiesta Macarena Pt. 1	Pop	131																					2	5	8	6	",
	"H.O.T.	Fighting Spirit	K-Pop	98											2	 	 	5	 	2			5		2			5	",
	"Banya	Free Style	Banya	99																1			3						",
	"Banya	First Love	Banya	104																					1	4	9	4	",
	"Oliver	Flamenco	K-Pop	105																					2	5	9	5	11",
	"Harisu	Foxy Lady	K-Pop	130											3	5	12	5	13	3	6	13	5	15	3	6	13	5	15",
	"Banya	Get Your Groove On	Banya	96																					1	5	7	8	",
	"B.M.K.	Go Away	K-Pop	132																2	6	11	5	15	2	6	11	5	15",
	"To-Ya	Go Away!	K-Pop	103																					2	4	9	6	",
	"Hanul	Gotta Be Kidding!	K-Pop	138																					1	4	13	3	",
	"BanYa Production	Gun Rock	BanYa	104											2	8	17	6	21										",
	"Banya	Hate	Banya	90																1	3		4		1	4		3	",
	"Novasonic	Hatred	K-Pop	136																2	7	13	7	16	2	7	13	7	16",
	"Banya	Hello	Banya	140																					2	7	13	7	16",
	"Y-Me	Huu Yah Yeah	K-Pop	110											3	6	13	6	13	3	6	12	7	14	3	6	12	7	14",
	"Banya	Hypnosis	Banya	180																						6	12	7	15",
	"Pandera	I Love You Baby	Pop	100											3	5	11	5	13	3	5	12	5	15					",
	"Banya	Ignition Starts!	Banya	146																						6	12	7	",
	"Gans	Join The Party	Pop	131											3	6	13	5	14	2	5	11	5	13	2	5	11	5	13",
	"Banya	Jump	Banya	96																3	7	9							",
	"Debbie Scott	Kiss me	Pop	126											1	5	13	6	15	1	5	12	5	14	1	5	12	5	14",
	"Banya	Koul	Banya	102																						5	10	5	",
	"Fresno	Lay It Down	Pop	131																					3	5	8	5	",
	"Lisa Cool & The South Spirit	Let the Sunshine	Pop	128																					2	4	7	4	",
	"T.T.Ma	Loner	K-Pop	155											 	8	13	6	 		6	10	7			6	10	7	",
	"Yu Seung Jun (Steve Yoo)	Love Song	K-Pop	118											2	4	10	4	11	1	4	9	4	11	1	4	9	4	11",
	"Banya	Maria	Banya	136																					2	5	8	6	",
	"Mozquito	Mexi Mexi	Pop	138											4	7	12	7	 	3	6	11	5		3	6	11	5	",
	"SechsKies	Mobius Strip	K-Pop	106											 	6	12	6	14		5	12	6	14		5		6	",
	"Banya	My Way	Banya	118																2	5	12	6	15	2	5	12	6	15",
	"Banya	Nightmare	Banya	120																					1	4		5	",
	"Banya	Oh! Rosa!	Banya	148																					3	6	9	7	",
	"Kay Kent	On Your Side	Pop	123																					1	4	7	5	",
	"S'Max	One Love	K-Pop	98											2	5	9	4	10	2	5	8	4	11	2	5	8	4	11",
	"Banya	Oy Oy Oy	Banya	148																					3	6	8	7	",
	"Banya	Papa Gonzales	Banya	145											 	6	14	7	17		6	14	7	18					",
	"Yu Seung Jun (Steve Yoo)	Passion	K-Pop	125																					1	5		5	",
	"Diva	Perfect!	K-Pop	132																1	5	10	4	13	1	5	10	4	13",
	"Lee Hyun Do	Pierrot	K-Pop	100																					2	5	12	5	12",
	"Banya	Pump me Amadeus	Banya	170											4	9	16	10	18	4	8	16	8	19	4	8	16	8	19",
	"Banya	Pumping Up	Banya	135																	4					4			",
	"Banya	Rolling Christmas	Banya	142											4	5	10	5	13	2	4	7	4	12	2	5	8	5	",
	"Novasonic	Run!	K-Pop	140											4	8	15	8	15	2	5	15	6	16	2	5	15	6	16",
	"OneTwo	Shake That Bootie	K-Pop	145											3	6	14	6	15	3	6	13	6	16	3	6	13	6	16",
	"Honey Family	The Rap. act 3	K-Pop	98																3	5	12	5	13	3	5	12	5	13",
	"6 Mill, Bionic Juno	To the Top	K-Pop	120																					1	5			",
	"Shyne	Too Late	K-Pop	97											3	4	 	5	 	3	5		5		2	5	11	5	12",
	"Ju Dain	U	K-Pop	111																3	6	11	6	14	3	6	11	6	14",
	"BanYa Production	Ugly Dee	BanYa	92											1	4	13	5	14										",
	"Cachy Huang	Up Up	Pop	135											3	4	10	4	11	3	4	9	4	10					",
	"BoA	Valenti	K-Pop	104																2	4	9	4	11	2	4	9	4	11",
	"Asoto Union	We Don't Stop	K-Pop	100											2	5	10	4	11	3	6	9	5	10	3	6	9	5	10",
	"Banya	With My Lover	Banya	124											3	 	10	 	11	3		10		11					",
	"Los del ritimo	Xi Bom Bom Bom	Pop	148																					1	5	8	5	9"
]

xls_tracklist_Special =
[
	"Another	A.U. Ready?				13	16				12	15	",
	"Another	Another Truth				17	22				18	21	",
	"Another	Arch of Darkness			17								",
	"Another	Bee			19		23			18		23	",
	"Another	Beethoven Virus		10	17	11			7	17	9		",
	"Another	Blaze Emotion			17		18						",
	"Another	Cannon X.1		8	21	10							",
	"Another	Canon-D			21		21						",
	"Another	Caprice of Otada		17	19	19	21		16	19	18	21	",
	"Another	Chimera		16	19	16	??(24)		13	20	15	??(24)	",
	"Another	Chocolate		6	13		15						",
	"Another	Dignity		16									",
	"Another	DJ Otada			20		21						",
	"Another	Dr. M			16					16			",
	"Another	Extravaganza		16	21		19			21		19	",
	"Another	Faster Z	8	16	19	18	22		15	19	19	20	",
	"Another	Final Audition			15		16			17		16	",
	"Another	Final Audition 2			16		19			16		19	",
	"Another	Final Audition 3 U.F					19					18	",
	"Another	Final Audition episode 1		13	19		23		10	19		22	",
	"Another	Final Audition episode 2-1		19	21		22			20		22	",
	"Another	Final Audition episode 2-2		16	21	18	23		16	21	18	25	",
	"Another	Love is a Danger Zone			16	7	??			16	8	??	",
	"Another	Love is a Danger Zone 2		16	17	??	??		16	18		??	",
	"Another	Hi-Bi			18	7	20			17	6	18	",
	"Another	Higgledy Piggledy		16	18				16	18			",
	"Another	It's My Business			14		17			10		14	",
	"Another	Moonlight			19		21						",
	"Another	Mr. Larpus			22	23	25			21	23	25	",
	"Another	My Dreams			19								",
	"Another	Naissance			20								",
	"Another	Naissance 2					19					20	",
	"Another	Phantom			18	11	20			19		20	",
	"Another	Pumptris Quattro	10	12	17	2	22	7	8	17	4	22	",
	"Another	Pumptris Quattro [8bit]	16	16	17	??	??						",
	"Another	Slam			18		19						",
	"Another	Solitary			17		18			17		19	",
	"Another	Starian			15		17						",
	"Another	Toccata		16	17								",
	"Another	Ugly Dee				11	15				15	15	",
	"Another	Vook		17	20	12	19		16	18	12	19	",
	"Another	Will o' the Wisp			19		21						",
	"Another	Witch Doctor #1		7	18	7	20		18	20	19	21	",
	"Another	Witch Doctor		19	21	19	23			21		22	",
	"Another	You Fell in Me			16		17			16		18	",

	"Another	Deja Vu										17	",
	"Another	Do It Yourself										17	",
	"Another	For You									13		",
	"Another	Gun Rock								18		19	",
	"Another	Turkey March							15	18			",
	"Another	Come to Me							12	17		14	",
	"Another	Free!									5		",
	"Another	Snow Dream									6		",
	"Another	Handsome Character That Pass								13		14	",
	"Another	So						12	13	15	14	16	",
	"Another	Fire							12	15	13	15	",
	"Another	Guitar Man								17		20	",
	"Another	Dance Vibrations								14		18	",

	"Remix	2nd Hidden Remix							10	11	13	16	",
	"Remix	45rpm & Eun Ji Won Remix			11	5	14						",
	"Full	Adios		4	15	4							",
	"Full	Astral Song							8				",
	"Remix	BanYa Classic Mix							10	19	11	21	none (NX2), WorldMax (NXA)",
	"Remix	BanYa Hip-Hop Remix		3	9	7			7	8	7		",
	"Remix	BanYa-P Classic Mix							14	19	15	20	",
	"Remix	BanYa-P Guitar Remix			22		24			25		25	",
	"Full	Beat # No. 4			17	6	19						",
	"Full	Beat of the War 2			19		20			19		21	",
	"Remix	Bemera Remix		16	24	18	25		15	24	18	25	",
	"Remix	Big Metra Remix		5	19		17						",
	"Full	Canon-D		11	16				15	17			",
	"Remix	Caprice of DJ Otada		11	19		22						",
	"Full	Change Myself		3	14	3							",
	"Remix	Chicago Club Mix											WorldMax (NX2)",
	"Full	Chocolate		6	15	8							",
	"Full	Chopsticks Challenge			15	3	19						",
	"Full	Come Back Home	1	3		4		1	4		4		",
	"Full	Come On!		6		6							",
	"Full	Crazy		3	13	3							",
	"Full	Deja Vu											WorldMax (NX2, NXA)",
	"Remix	Deux Remix							7	14	8		",
	"Full	Digan Lo Que Digan		7	18	9							",
	"Full	Dignity		14	19	16	22		13	20	16	22	",
	"Remix	Dr. K.O.A		8	18		20						",
	"Remix	Drunken Family Remix							6	7	6		",
	"Full	Emergency											WorldMax (NX2)",
	"Full	Enter the Dragon			17	3	18						",
	"Remix	FAE1 & Chicken Wing Remix (NX2 ver.)		8	21	13			10		11		",
	"Full	Feel the Soul								18			none (NX2), WorldMax (NXA)",
	"Full	Fire								19		20	",
	"Full	Fly							10	15		17	",
	"Full	For You											WorldMax (NX2, NXA beta version)",
	"Full	Forward		4	15	5							",
	"Full	Free											WorldMax (NX2)",
	"Remix	Groove Party Remix		5	14	5	15		7	13	6	15	",
	"Full	Guitar Man							8		9		none (NX2), WorldMax (NXA)",
	"Full	Hold the Line							7	16	8	18	",
	"Full	I'll Give You All My Love											WorldMax (NX2, NXA)",
	"Full	It's My Business							8	19		20	none (NX2), WorldMax (NXA)",
	"Remix	J Knows That Old Bong		8	17		18						",
	"Remix	Jam O Beat # No. 4			16	6	16						",
	"Remix	K-Pop Dance Remix							8	15	9	17	",
	"Full	LaLaLa		4	14	4							",
	"Remix	Lexy/1TYM Remix											WorldMax (NX2, NXA)",
	"Full	Love is a Danger Zone 2			19		21			19		21	",
	"Full	Lovely							6		7		",
	"Remix	May Remix											WorldMax (NX2)",
	"Remix	Money Fingers							9	14	10	18	",
	"Full	Monkey Fingers		8	16	9	17	5	9	17	7	19	",
	"Remix	Mr. Fire Fighter & Beat of the War 2											WorldMax (NX2, NXA)",
	"Full	Mr. Fire Fighter											WorldMax (NX2, NXA)",
	"Remix	Mr. Fire Fighter Falls in Love With Me		8	15	9							",
	"Remix	msgoon RMX pt. 1		7	17		17						",
	"Remix	msgoon RMX pt. 2		5	16	5							",
	"Remix	msgoon RMX pt. 3		6	17	11	20						",
	//"Remix	msgoon RMX pt. 4	WorldMax (NXA)										WorldMax (NXA)",
	"Remix	Nina Pxndx Remix		6	16	8							",
	"Full	No Despair							7	18		20	",
	"Remix	Novarash Remix							8	16	10		",
	"Remix	Novasonic Mix ver. 3		6	17		19						",
	"Remix	Novasonic Remix						WorldMax (NX2)					WorldMax (NX2)",
	"Remix	NX2 Diva Remix		4	9	5			4	12	5		",
	"Remix	NX2 K-Hip Hop Remix							7	14		15	",
	"Remix	NX2 K-Pop Remix 1		6	13	7	16		8	15	9	16	",
	"Remix	NX2 K-Pop Remix 2		5			15		7			14	",
	"Remix	NX2 K-Pop Remix 3							7	13		13	",
	"Remix	NXA Hip-Hop Mix		6	13	4							",
	"Full	Panuelito Rojo		9	16		18						",
	"Remix	Pop House Remix							8	15		16	",
	"Remix	Pro Pop Remix											WorldMax (NX2, NXA)",
	"Full	Procedimientos Para Llegar A Un Comun Acuerdo		6	17	7							",
	"Remix	Red Song						WorldMax (NX2)					WorldMax (NX2)",
	//"Remix	Scream Song	WorldMax (NXA)										WorldMax (NXA)",
	"Full	Slightly		5	17	5							",
	"Full	Tell Me		2		3			5		5		Korean version only (NX2), none (NXA)",
	"Remix	The People Didn't Know \"Pumping Up\"		7		4	17						",
	"Full	Trato De No Trabarme		10	23		25",
	"Remix	Treme-Vook of the War Remix		12	18	15	22		13	19	16	22	",
	"Remix	Try to B.P.M - LIADZ Remix		15	19	15	22		14	21	16	23	",
	"Remix	Turbo Remix							9	12	10		",
	"Remix	Turkey Virus		8	15	11							",
	"Full	U		3	15	3							",
	"Full	U Inside My Dim Memory							9	15	10	19	WorldMax (NX2, NXA beta version)",
	"Remix	Ugly Duck Toccata		12	15		16						",
	"Full	V.I.P	1	4		4		2	6		6		",
	"Full	Very Old Couples							6	14			",
	"Remix	Wi-Ex Doc-Va Remix		15	21	15	23		16	21	19	25	",
	"Remix	YG Remix		5		6	15						",
	"Remix	Zero K-Hip Hop Remix							8	14	7		"
];

///////////////////////////////////

tracklist = []

mixes = ["NXA", "NX2", "NX", "Zero", "Exceed2"]

function extractLevels( arr, fromIndex )
{
	var anythingToExtract = false;
	for( var i = fromIndex;  i < fromIndex + 5;  ++i )
	{
		if( arr[ i ] != "" )
		{
			anythingToExtract = true;
			break;
		}
	}
	
	if( ! anythingToExtract )
		return;

	return arr.slice( fromIndex, fromIndex + 5 );
}

///////////////////////////////////////////////////////////////////////////////////////////////////

function AddArcadeTrack( trackStr )
{
	var trackArr = trackStr.split("\t");

	var track = {
		title: trackArr[ 1 ],
		artist: trackArr[ 0 ],
		channel: trackArr[ 2 ],
		bpm: trackArr[ 3 ],
	};

	if( track.channel === "BanYa"  ||  track.channel === "Banya" )
		track.channel = "Original";
	if( track.channel === "Pop" )
		track.channel = "World";

	var levelPos = 4;
	for( var i in mixes )
	{
		track[ mixes[ i ] ] = extractLevels( trackArr, levelPos );
		levelPos += 5;
	}

	tracklist.push( track );
}


for (var i in xls_tracklist_Arcade)
	AddArcadeTrack( xls_tracklist_Arcade[ i ] );

///////////////////////////////////////////////////////////////////////////////////////////////////

function AddSpecialTrack( trackStr )
{
	var trackArr = trackStr.split("\t");

	var track = null;

	if( ["Another", "Remix", "Full"].indexOf( trackArr[ 0 ] ) < 0 )
		alert( "Invalid track category " + trackArr[ 0 ] );
	
	if( trackArr[ 0 ] === "Another" )
	{
		var title = trackArr[ 1 ];
		var result = _.filter(tracklist, function( obj ) { return obj.title === title } );
		if( result.length != 1 )
		{
			if ( result.length === 0 )
			{
				//alert( "No track " + title + " found!" );
				track = {
					title: trackArr[ 1 ],
				};
				tracklist.push( track );
			}
			else
				alert( "Several tracks " + title + " found!" );
		}
		else
			track = result[ 0 ];
	}
	else
	{
		track = {
			title: trackArr[ 1 ],
			duration: trackArr[ 0 ],
		};
		tracklist.push( track );
	}
	
	if( trackArr[ 0 ] === "Full" )
		track.title += "  [FULL]";

	track.NXA_ = extractLevels( trackArr, 2 );
	track.NX2_ = extractLevels( trackArr, 7 );
}

for (var i in xls_tracklist_Special)
	AddSpecialTrack( xls_tracklist_Special[ i ] );

///////////////////////////////////////////////////////////////////////////////////////////////////

function GetDurationIndex( durationStr )
{
	if( durationStr === "Remix" )
		return 2;

	if( durationStr === "Full" )
		return 3;

	return 1;
}

tracklist.sort( function( a, b ) {
	var aDI = GetDurationIndex( a.duration );
	var bDI = GetDurationIndex( b.duration );
	if ( aDI != bDI )
		return aDI - bDI;

	return ( a.title.localeCompare( b.title ) );
} );

///////////////////////////////////////////////////////////////////////////////////////////////////
//  output
///////////////////////////////////////////////////////////////////////////////////////////////////

function TracksOutput()
{
	function jsonAttr( attrList, tag )
	{
		if( typeof attrList[ tag ] == 'undefined' )
			return "";
	
		if( attrList[ tag ] instanceof Array )
			return tag + ": [\"" + attrList[ tag ].join( "\", \"" ) + "\"], ";
	
		return tag + ": \"" + attrList[tag] + "\", ";
	}
	
	var resultText = "tracks = [\n";
	
	for (var i in tracklist)
	{
		var track = tracklist[ i ];
		resultText += "\t{\n\t\t" +
					jsonAttr( track, "title" ) +
					jsonAttr( track, "artist" ) +
					jsonAttr( track, "channel" ) +
					jsonAttr( track, "bpm" ) +
					jsonAttr( track, "duration" ) +
					"\n";
	
	for( var i in mixes )
		{
			if( track[ mixes[ i ] ]  ||  track[ mixes[ i ] + '_' ] )
				resultText += "\t\t" + jsonAttr( track, mixes[ i ] ) + jsonAttr( track, mixes[ i ] + '_' ) + "\n";
		}
	
		resultText += "\t},\n";
	}
	
	resultText += "];";

	return resultText;
}

$("#result").html( TracksOutput() );
