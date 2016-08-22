"use strict";

/* список эталонных чартов:
S18 - 
*/

var tracklistEstimated = [
// Scorpion King  S-15 -> ?17  // grem

// trashy innocence D-15 -> центральный квад
                          "1950  D-21 -> 22",
                      "Accident  D-20 -> 19",
                       "Arirang  S-18 -> 19",       // mndd: ОК
                       "Arirang  D-20 -> 21",       // mndd: OK
            "Bad Girl Good Girl  D-13 -> 12",  // Marina
                "Beat the Ghost  S-18 -> 19",       // mndd: ОК
                "Beat the Ghost  S-20 -> 19",       // mndd: ОК
                           "Bee  S-19 -> 18",       // mndd: OK
                       "Cleaner  D-20 -> 19",       // mndd: OK
                      "Com'Back  D-16 -> 17", // NM // mndd
                         "Crazy  D-19 -> 17", // NM
                      "Crashday  D-26 -> 24",
                 "Dance With Me  D-15 -> 13",       // Marina
                   "Destination  S-16 -> 17",       // mndd: ОК
                       "Dignity  D-18 -> 19",       // mndd: ОК
                  "Extravaganza  S-16 -> 17", //aHD // mndd: ОК
                  "Extravaganza  D-17 -> 18", // NM // mndd: ОК
                  "Extravaganza  D-19 -> 20", //aNM // mndd: ОК
      "Final Audition episode 1  S-19 -> 20", //aCZ // mndd: ОК
    "Final Audition episode 2-1  S-20 -> 21", // CZ // mndd: OK
    "Final Audition episode 2-1  S-21 -> 22", //aCZ // mndd: OK
    "Final Audition episode 2-1  D-21 -> 22", //aNM // mndd: OK
    "Final Audition episode 2-X  S-17 -> 18", // HD // mndd: ОК
          "Final Audition 3 U.F  D-19 -> 18", //aNM // mndd: ОК
               "Flew Far Faster  S-23 -> 22",       // mndd: ОК
                   "Flying Duck  D-18 -> 17",       // mndd: ОК
    "Four Seasons of Loneliness  D-21 -> 22",
               "Get Up (and Go)  D-20 -> 18",       // mndd: 19-ка, у меня по миссам обычная 19-ка.
// да бля, его Эсить пора уже и давно, там делать нефиг, не сложнее оверблоу 18. Сложнее, причем заметно =Р
         "Hardkore of the North  S-21 -> 23",
                         "Hello  D-16 -> 18", // NM // mndd: ОК
                         "Hi-Bi  D-18 -> 19", // NM // mndd: ОК
                      "Hypnosis  D-18 -> 19",       // mndd: ОК
                    "Imprinting  S-20 -> 21",
  "Ignis Fatuus (DM Ashura Mix)  D-17 -> 18",       // mndd: ОК
"Just Hold on (To All Fighters)  S-21 -> 22",       // mndd: ОК
                        "Napalm  D-23 -> 22",       // mndd: ОК
               "Leakage Voltage  S-20 -> 21",
                    "Like a Man  S-18 -> 17",       // mndd: ОК
                  "Loner @ 1449  D-22 -> 20",       // mndd: ОК
                       "Matador  D-21 -> 22",
                  "Mental Rider  S-12 -> 13",  // ben
                  "Mental Rider  S-21 -> 22",
   "Mission Possible -Blowback-  D-17 -> 18",       // mndd: ОК
                        "Napalm  S-22 -> 21",       // mndd: ОК
                    "Necromancy  D-24 -> 23",
                      "Overblow  D-20 -> 19",       // mndd: ОК
                       "Phantom  D-19 -> 20", // NM // mndd: OK
               "Sorceress Elise  S-21 -> 22",       // mndd: ОК
                      "Take Out  S-17 -> 18",       // mndd: ОК
                      "Take Out  D-19 -> 20",       // mndd: ОК
                      "Take Out  D-22 -> 23",       // mndd: ОК
                "The Revolution  D-19 -> 18",
                        "Tepris  D-18 -> 19",       // mndd: ОК
                       "Phantom  S-18 -> 19", // CZ // mndd: ОК
          "Phantom -Intermezzo-  S-21 -> 22",       // mndd: ОК
              "Pumptris Quattro  S-19 -> 20", // CZ // mndd: ОК
                       "Requiem  D-19 -> 18",
                  "Robot Battle  S-21 -> 22",       // mndd: OK
                  "Robot Battle  D-23 -> 24",       // mndd: OK
                 "Super Fantasy  D-21 -> 22",       // mndd: OK
                "Violet Perfume  D-19 -> 18",
                          "Vook  D-17 -> 18", // FS // mndd: OK
                          "Vook  D-18 -> 19", // NM // mndd: OK
                      "Windmill  D-18 -> 17",
                  "Witch Doctor  D-23 -> 22", //aNM // mndd: ОК
                        "X-Tree  D-18 -> 19",       // mndd: OK
                   "Yog-Sothoth  S-21 -> 20",
                   "Yog-Sothoth  D-23 -> 24",
                   "Yog-Sothoth  D-25 -> 26",

     "Beat of the War 2  [FULL]  S-19 -> 20",// CZ // mndd: OK
     "Beat of the War 2  [FULL]  D-20 -> 21",// NM // mndd: OK
];

var tracklistLeftForEstimation = [
// нужно мнение майнда

                       "Blazing  D-19 -> 20", //mndd: Такое… 19.5 макс
            "Digan Lo Que Digan  D-18 -> 17",
              "Caprice of Otada  D-21 -> 23",  //aNM //его вроде нет на Фиесте ЕХ
         "Hardkore of the North  S-21 -> 22",
                  "Miss's Story  D-19 -> 17",
                    "Mr. Larpus  D-23 -> 22",       // mndd: OK
     "Narcisista Por Excelencia  D-18 -> 19",
            "No Rhyme No Reason  D-20 -> 19",
                       "Phantom  S-17 -> 18",//aCZ
                       "Phantom  D-20 -> 18",//aNM
                 "What Happened  D-20 -> 18", //OK


//-----------------------------------------
                     "By Chance  D-16 -> 15",
                       "Arirang  D-10 -> 13", //я ниже 16 не бегаю =(



                      "Accident  S-19 -> 18",
          "All I Want For X-mas  S-11 -> 8",
                 "Another Truth  D-22 -> 18",
                 "Blaze Emotion  D-17 -> 18", //Обычная 18-ка
            "Bullfighter's Song  S-8 -> 9",
                  "Chicken Wing  S-19 -> 20",
          "Chopsticks Challenge  D-16 -> 15",  //NM
                   "Destination  S-18 -> 19",
                         "Dr. M  D-16 -> 17",  //NM //OK
                         "Elise  S-22 -> 20",
                      "Faster Z  S-8 -> 9",

// проверить 2-2 и Vacuum S21, а также Achluoias, 2-2 и Cleaner S22
                    "Guitar Man  S-18 -> 20",  //aCZ //19? Дрели конечно сложные, но больше там ничего нет
                      "Gun Rock  S-18 -> 16",  //CZ //Шутка чтоли!? Обычный крейзи? - ну да, проблема в том, что там кроме тех троек в конце НИЧЕГО сложного нет, а у них сложность даже ояебу сколько, но не выставлять же по ней? //Дино у тебя S на нем? На ссаной 16-ке? Сомневаюсь, пусть остается 18-кой, или на худой - 17
                 "Hello William  D-21 -> 20", //ОК
                        "Hestia  S-18 -> 20",
      "Hypnosis (SynthWulf Mix)  S-8 -> 9",
     "I'll Give You All My Love  D-18 -> 17",  //NM

                    "Mr. Larpus  S-20 -> 19", //Впринципе ок... Я его хоть и на S проходил, но он просто колбасный
                     "My Dreams  S-17 -> 18",  //aCZ
                     "My Dreams  S-18 -> 17",  //CZ
                   "Naissance 2  D-19 -> 20",  //aNM
                        "Napalm  S-19 -> 18",
                    "Necromancy  D-13 -> 14",
          "Phantom -Intermezzo-  S-19 -> 20",
          "Phantom -Intermezzo-  D-15 -> 16",
          "Phantom -Intermezzo-  D-20 -> 21", //MNDD - HZ
                     "Pump Jump  D-17 -> 16",
             //"Pump Me Amadeus  S-17 -> 18",//CZ
               "Pumping Jumping  D-17 -> 18",
              "Pumptris Quattro  D-22 -> 23",//aNM //серьезно? 23? Ты его сам бегаешь на стабильное А, даже на рейте бегал, какое там 23!? - да уж хуже канона сбегаю точно - А что из нормальных 21-22 ты сбегаешь лучше?) Даже ФАЕП1_Д21 ты бегал на 18 миссов(!) Канон - исключение.
                       "Requiem  S-19 -> 20",   // не проще Necromancy S20
               "Sorceress Elise  S-15 -> 16",

      "The Angel Who Lost Wings  D-16 -> 15",
                  "U Got 2 Know  S-18 -> 19",
                  "U Got 2 Know  S-19 -> 18",
                          "Vook  S-17 -> 18",  //aCZ

                         "Wanna  D-17 -> 18",
               "Witch Doctor #1  S-16 -> 17",  //aHD
               "Witch Doctor #1  S-18 -> 19",  //aCZ
               "Witch Doctor #1  S-18 -> 19",  //aCZ
               "Witch Doctor #1  D-19 -> 20",  //NM //ГОВНО

            "Hard Core Rock Mix  S-21 -> 20",
                "Vacuum Cleaner  S-20 -> 21", //ОК, я бы сказал 20.5

              "Crashday  [FULL]  S-22 -> 21",  //CZ // mndd: ОК, хотя он долгий и нудный...

];

var tracklistForOldMixes = [
            "Caprice of Otada  ACZ-21 -> 22",  //ACZ
                     "Chimera  FS-21 -> 22",
  "Final Audition episode 2-2  D-25 -> 27",  //aNM.NX
      "U Inside My Dim Memory  NM-17 -> 16",
                     "Valenti  NM-12 -> 14",
                    "Solitary  aNM-18 -> 20",
];

					
/*
Неподтверждённое:
80's Pop  D-17 (18) -
Caprice of Otada  aHD-17 (18) ?
Caprice of Otada  aCZ-18 (20) ?
Caprice of Otada  aFS-19 (21) ?
Dawn of the Apocalypse  D-21.nm (20) - ДА, какая в жопу это 21!? Это ссаная 20-ка.
Do You Know That ~old school  D-18.nm (19) - 19 ему норм, ты сам его бегал
Final Audition 2  D-19.anm (18) - //Бля даже не знаю - у меня там неплохой результат, но я тупо вребаю 5х и рубаю брутом, на поворотах там достаточно тяжко… Оставь в 19, сам при мне бегал
Final Audition episode 2-2  S-21.acz.nx2 (22) -
Gargoyle  S-18 -> 19 - //Согласен, это 19
Get Up!  D-18 (19) - Больше поход все же на 18
Hyun Jin Young Go  CZ-19 (20) ? //Он, конечно, мудаковатый, но 20 - перебор. Он скорее техничный шибко
Hyun Jin Young Go  NM-20 (21) ?
Necromancy  S-18 (19) - //ОК, 19
Necromancy  D-19 (20) - //МНДД - У меня по миссам тянет на 20, но я всрал холды и тройные взял не альо, в целом найтмар не шибко сложный. Разок еще сбегаю, отпишусь

Pumping Jumping  S-19.new (20) -

Reality  S-17 (18) -
Shake It Up  NM-18 (21) ?
Shake It Up  aNM-18 (19) ?
Solitary  S-17.acz (18) -
Solitary 2  aCZ-17 (18) -
Take Out  S-20 (22) - //22? Многовато, хотя для меня там тяжко. Пусть 21 будет
What Happened  S-20 (22) - //22!? Епнулся!? 21 - максимум

Hard Core Rock Mix  S-18 (19) -

PUMP IT UP with YOU  D-17 (19) -

Narcisista por Excelencia  FULL  D-18 (19) -
Panuelito Rojo  FULL  D-18.nm (19) -
Final Audition episode 2-2  D-18 (19) - Внезапно оказался сложным О_О
Rave Until The Night Is Over D-17 (18) - шото больше похоже на 18, но ты сбегай посмотри
Chicken Wing D-17 (18) - Какой-то напряжный для 17-ки
Msgoon.rmx.pt.6 D-19 (20) - вообще срака

*/


//===================================================================================================================================================


function ApplyPatch( tracklist, estimations )
{
	for( var trackLine of estimations )
	{
		var estimation_Match = trackLine.match( "(.*)  (.*)-(.*) -> (.*)" );
		if( ! estimation_Match )
			console.log( "Can't parse estimation " + trackLine );
		console.assert( estimation_Match );
		
		var trackTitle = estimation_Match[ 1 ];
		var chartTag = estimation_Match[ 2 ];
		var chartLevelText = estimation_Match[ 3 ];
		var chartEstimatedLevelNum = Number( estimation_Match[ 4 ] );
		console.assert( ! isNaN( chartEstimatedLevelNum ) );

		var track = FindTrack( tracklist, trackTitle );
		console.assert( track );
		
		var shared = FindChartSharedNew( track, chartTag, chartLevelText );
		if( ! shared )
			console.log( "Can't find " + track.title + " " + chartTag + "-" + chartLevelText );
		console.assert( shared );
		shared.estimatedLevelNum = chartEstimatedLevelNum;
	}
}


ApplyPatch( tracklist, tracklistEstimated );
