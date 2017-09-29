"use strict";

var tracklistVotes = {

// Scorpion King  S-15 -> ?17  // grem

// trashy innocence D-15 -> центральный квад
// Venus  D-14 - мигания стрелок, смена чарта из-под ног
// ? Destination D-13 -> 14

	"1950  S-25": {
		Dino: 24,
	},
	"1950  D-21": {
		Dino: 22,
	},
	"Accident  S-19": {
		Dino: 18,
	},
	"Accident  D-20": {
		Dino: 19,
	},
	"Annihilator Method  D-12": {
		Dino: 13,
	},
	"Arirang  D-10": {
		Dino: 13,
		Grem: 12,
		Grumd: 13,
	},
	"Arirang  S-18": {
		Dino: 19,
		Mindless: 19,
	},
	"Arirang  S-22": {
		Dino: 23,
	},
	"Arirang  D-20": {
		Dino: 21,
		Mindless: 21,
	},
	"Another Truth  D-22": {
		Dino: 20,
	},
	"Bad Girl Good Girl  D-13": {
		Marina: 12,
	},
	"Beat the Ghost  S-18": {
		Dino: 19,
		Mindless: 19,
	},
	"Beat the Ghost  S-20": {
		Dino: 19,
		Mindless: 19,
	},
	"Bee  S-19": {
		Dino: 18,
		Mindless: 18,
	},
	"Campanella  D-16": {
		Grumd: 17, // брекеты на д16 редкость, а тут они в стримах, новая и сложная техника для д16
	},
	"Cannon X.1  D-13": {
		Dino: 14,
	},
	"Caprice of Otada  D-21": { //aNM
		Dino: 22,
	},
	"Chase Me  S-21": {
		Dino: 20,
	},
	"Chicken Wing  S-19": {
		Dino: 20,
	},
	"Chicken Wing  S-21": {
		Dino: 22,
	},
	//"Chimera  S-23": 24,
	"Cleaner  S-22": {
		Dino: 21,
	},
	"Cleaner  S-23": {
		Dino: 22,
	},
	"Cleaner  D-20": {
		Dino: 19,
		Mindless: 19,
	},
	"Com'Back  D-16": { // NM
		Dino: 17,
		Mindless: 17,
	},
	"Crazy  D-19": {  // NM
		Dino: 17,
	},
	"Crashday  S-23": {
		Dino: 22,
	},
	"Crashday  S-24": {
		Dino: 23,
	},
	"Crashday  D-26": {
		Dino: 24,
	},
	"Creed -1st Desire-  S-21": {
		Dino: 22,
	},
	"Csikos Post  D-21": {
		Dino: 22,
	},
	"Dance With Me  D-15": {
		Marina: 13
	},
	"Dawn of the Apocalypse  D-21": {  // NM
		Dino: 20,
		Mindless: 20,
	},
	"Destination  S-16": {
		Dino: 17,
		Mindless: 17,
	},
	"Destination  S-18": {
		Dino: 19,
	},
	"Destination  S-19": {
		Dino: 20,
	},
	"Dignity  D-13": {
		Dino: 15,
		Grumd: 15,
	},
	"Dignity  D-18": {
		Dino: 19,
		Mindless: 19,
	},
	"Dr. M  D-16": {
		Dino: 17,
		Grumd: 17,
	},
	"Dream to Nightmare  D-24": {
		Dino: 23,
	},
	"Extravaganza  S-16": {  // aHD
		Dino: 17,
		Mindless: 17,
	},
	"Extravaganza  D-17": {  // NM
		Dino: 18,
		Mindless: 18,
	},
	"Extravaganza  D-19": {  // aNM
		Dino: 20,
		Mindless: 20,
	},
	"Fallen Angel  D-20": {
		Dino: 21,
	},
	"Final Audition episode 1  S-19": { // aCZ
		Dino: 20,
		Mindless: 20,
	},
	"Final Audition episode 2-1  S-20": {  // CZ
		Dino: 21,
		Mindless: 21,
	},
	"Final Audition episode 2-1  S-21": {  // aCZ
		Dino: 22,
		Mindless: 22,
	},
	"Final Audition episode 2-1  D-21": {  // aNM
		Dino: 22,
		Mindless: 22,
	},
	"Final Audition episode 2-2  S-21": {  // aCZ
		Dino: 22,
	},
	"Final Audition episode 2-X  S-17": { // HD
		Dino: 19,
		Mindless: 18,
	},
	"Final Audition 3 U.F  D-19": {  // aNM
		Dino: 18,
		Mindless: 18,
	},
	"Flew Far Faster  S-23": {
		Dino: 22,
		Mindless: 22,
	},
	"Flying Duck  D-18": {
		Dino: 17,
		Mindless: 17,
		Grumd: 17,
	},
	"Four Seasons of Loneliness  S-20": {
		Dino: 21,
	},
	"Four Seasons of Loneliness  D-21": {
	//	Dino: 22,
	},
	"Get Up (and Go)  D-20": {
		Dino: 18,
		Mindless: 19,
	},
	"Good Night  S-20": {
		Dino: 19,
	},
	"Good Night  S-23": {
		Dino: 22,
	},
	"Hardkore of the North  S-21": {
		Dino: 22,
	},
	"Hello  D-16": {  // NM
		Dino: 18,
		Mindless: 18,
	},
	"Hello William  D-21":
	{
		Dino: 20,
		Mindless: 20,
	},
	"Hestia  S-18": {
		Dino: 19,
	},
	"Houkago Stride  D-21": {
		Dino: 22,
		Grumd: 20,
	},
	"Hi-Bi  D-18": {  // NM
		Dino: 19,
		Mindless: 19,
	},
	"Hypnosis  S-18": {
		Dino: 19,
	},
	"Hypnosis  D-18": {
		Dino: 19,
		Mindless: 19,
	},
	"I'll Give You All My Love  D-18": {  // NM
		Dino: 17,
	},
	"Imprinting  S-20": {
		Dino: 21,
	},
 	"Ignis Fatuus (DM Ashura Mix)  S-23": {
// 		Dino: 22,
 	},
	"Ignis Fatuus (DM Ashura Mix)  D-17": {
		Dino: 18,
		Mindless: 18,
	},
 	"Ignition Starts  S-18": {
 		Dino: 19,
 	},
	"Just Hold on (To All Fighters)  S-21": {
		Dino: 22,
		Mindless: 22,
	},
	"Napalm  D-23": {
		Dino: 22,
		Mindless: 22,
	},
	"Leakage Voltage  S-20": {
		Dino: 21,
	},
	"Like a Man  S-18": {
		Dino: 17,
		Mindless: 17,
	},
	"Loner @ 1449  D-22": {
		Dino: 20,
		Mindless: 20,
	},
	"Love is a Danger Zone  S-7": {
		Taras: 8,
	},
	"Matador  D-21": {
		Dino: 22,
	},
	"Mental Rider  S-12": {
		Benkovsky: 13,
	},
	"Mental Rider  D-13": {
		Dino: 15,
	},
	//? "Mental Rider  S-21": { Dino: 22, },
	"Mental Rider  D-23": {
		Dino: 24,
	},
	"Mission Possible -Blowback-  D-17": {
		Dino: 18,
		Mindless: 18,
	},
	"msgoon RMX pt. 6  S-20": {
		Dino: 21,
	},
	"Mr. Larpus  S-20": {
		Dino: 19,
		Mindless: 19,
	},
	"Mr. Larpus  D-23": {
		Dino: 21,
	},
	"Moonlight  S-7": {
		Vadim: 8,
	},
	"Moonlight  S-19": {
		Dino: 20,
	},
	"Naissance 2  D-19": {  // aNM
		Dino: 20,   // перепады BPM делают своё дело
	},
	"Napalm  S-19": {
		Dino: 18,
	},
	"Napalm  S-22": {
		Dino: 21,
		Mindless: 21,
	},
  	"Narcisista Por Excelencia  D-18": {
		Dino: 19,
		Grumd: 19,
	},
	"Necromancy  S-20": {
		Dino: 19,
	},
	"Necromancy  D-13": {
		Dino: 14,
	},
	"Necromancy  D-24": {
		Dino: 23,
	},
	"NoNoNo  D-14": {
		Dino: 12,
	},
	"No Rhyme No Reason  D-20": {
		Dino: 19,
	},
	"Overblow  D-20": {
		Dino: 19,
		Mindless: 19,
	},
	"Papa Gonzales  S-14": {  // CZ
		Dino: 15,
	},
	"Phantom  S-17": {  // aCZ
		Dino: 18,
	},
	"Phantom  S-18": {  // CZ
		Dino: 19,
		Mindless: 19,
	},
	"Phantom  D-19": {  // NM
		Dino: 20,
		Mindless: 20,
	},
	"Phantom  D-20": {  // aNM
		//	Dino: 19,
	},
	"Phantom -Intermezzo-  S-19": {
		Dino: 20,
	},
	"Phantom -Intermezzo-  S-21": {
		Dino: 22,
		Mindless: 22,
	},
	"Phantom -Intermezzo-  D-15": {
		Dino: 16,
		Mindless: 16,
	},
	"Phantom -Intermezzo-  D-20": {
		Dino: 21,
	},
	"Pop the Track  D-20": {
		Dino: 21,
	},
	"Pumptris Quattro  S-19": {  // CZ
		Dino: 20,
		Mindless: 20,
	},
	"Ragnarok  S-20": {
		Dino: 21,
	},
	"Rave Until The Night Is Over  D-17": {
		Dino: 18,
	},
	"Requiem  D-19": {
		Dino: 18,
	},
	"Robot Battle  S-21": {
		Dino: 22,
		Mindless: 22,
	},
	"Robot Battle  D-23": {
		Dino: 24,
		Mindless: 24,
	},
	"Setsuna Trip  D-14": {
		Dino: 13,
	},
	"Slam  D-23": {
		Dino: 24,
		Dope: 24,
	},
	"Sorceress Elise  S-21": {
		Dino: 22,
		Mindless: 22,
	},
	"Solitary  D-16": {
		Grumd: 17,
	},
	"Star Command  D-21": {
		Grumd: 20,
	},
	"Stardust Overdrive  D-24": {
		Dino: 23,
	},
	"Super Fantasy  D-21": {
		Dino: 22,
		Mindless: 22,
	},
	"Sugar Free  S-17": {
		Grumd: 16,
	},
	"Take Out  S-17": {
		Dino: 18,
		Mindless: 18,
	},
	"Take Out  S-20": {
		Dino: 21,
		Mindless: 21,
	},
	"Take Out  D-19": {
		Dino: 20,
		Mindless: 20,
	},
	"Take Out  D-22": {
		Dino: 23,
		Mindless: 23,
	},
	"Tepris  D-18": {
		Dino: 19,
		Mindless: 19,
	},
	"The Devil  S-20": {
		Dino: 19,
	},
	"The Devil  D-21": {
		Dino: 20,
	},
	"The Revolution  D-23": {  // reestimated in Prime2
		Dino: 22,
	},
	"The Revolution  D-19": {
		Dino: 18,
		Grumd: 19,
	},
	"Till the End of Time  D-13": {
		Dino: 12,
	},
	"Trashy Innocence  S-20": {
		Dino: 19,
	},
	"Trashy Innocence  D-24": {
		Dino: 23,
	},
	"Violet Perfume  S-17": {
		Grumd: 16,
	},
	"Violet Perfume  D-19": {
		Dino: 18,
		Grumd: 18,
	},
	"Vook  D-17": {  // FS
		Dino: 18,
		Mindless: 18,
		Grumd: 19,
	},
	"Vook  D-18": {  // NM
		Dino: 19,
		Mindless: 19,
	},
	"VVV  S-18": {
		Dino: 19,
	},
	"VVV  D-19": {
		Dino: 20,
	},
	"What Happened  S-20": {
		Dino: 21,
	},
	"What Happened  D-20": {
		Dino: 18,
		Mindless: 18,
		Grumd: 19,
	},
	"Windmill  D-18": {
		Dino: 17,
	},
	"Windmill  D-24": {
		Dino: 23,
	},
	"Winter  D-11": {
		Dino: 12,
	},
	"Witch Doctor  D-23": {  //aNM
		Dino: 22,
		Mindless: 22,
	},
	"X-Tree  D-18": {
		Dino: 19,
		Mindless: 19,
	},
	"Yog-Sothoth  S-21": {
		Dino: 20,
	},
	"Yog-Sothoth  S-23": {
		Dino: 22,
	},
	"Yog-Sothoth  D-23": {
		Dino: 24,
	},
	"Yog-Sothoth  D-25": {
		Dino: 26,
	},

	"Beat of the War 2  [FULL]  S-19": {  // CZ
		Dino: 20,
		Mindless: 20,
	},
	"Beat of the War 2  [FULL]  D-20": {  // NM
		Dino: 21,
		Mindless: 21
	},
};

var tracklistLeftForEstimation = [
// нужно мнение майнда

                       "Blazing  D-19 -> 20", //mndd: Такое… 19.5 макс
            "Digan Lo Que Digan  D-18 -> 17",
                  "Miss's Story  D-19 -> 17",


//-----------------------------------------
                     "By Chance  D-16 -> 15",



          "All I Want For X-mas  S-11 -> 8",
                 "Another Truth  D-22 -> 18", // grumd: лучше 20, там холды сливают весь кредит, если недостаточно хорошо попасть по кваду
                 "Blaze Emotion  D-17 -> 18", //Обычная 18-ка
            "Bullfighter's Song  S-8 -> 9",
          "Chopsticks Challenge  D-16 -> 15",  //NM

                         "Elise  S-22 -> 20",
                      "Faster Z  S-8 -> 9",

// проверить 2-2 и Vacuum S21, а также Achluoias, 2-2 и Cleaner S22
                    "Guitar Man  S-18 -> 20",  //aCZ //19? Дрели конечно сложные, но больше там ничего нет
                      "Gun Rock  S-18 -> 16",  //CZ //Шутка чтоли!? Обычный крейзи? - ну да, проблема в том, что там кроме тех троек в конце НИЧЕГО сложного нет, а у них сложность даже ояебу сколько, но не выставлять же по ней? //Дино у тебя S на нем? На ссаной 16-ке? Сомневаюсь, пусть остается 18-кой, или на худой - 17
      "Hypnosis (SynthWulf Mix)  S-8 -> 9",

                     "My Dreams  S-17 -> 18",  //aCZ
                     "My Dreams  S-18 -> 17",  //CZ
                     "Pump Jump  D-17 -> 16",
             //"Pump Me Amadeus  S-17 -> 18",//CZ
               "Pumping Jumping  D-17 -> 18",
               "Sorceress Elise  S-15 -> 16",

      "The Angel Who Lost Wings  D-16 -> 15",
                  "U Got 2 Know  S-18 -> 19",
                  "U Got 2 Know  S-19 -> 18",
                          "Vook  S-17 -> 18",  //aCZ

                         "Wanna  D-17 -> 18",
               "Witch Doctor #1  S-16 -> 17",  // aHD
               "Witch Doctor #1  S-18 -> 19",  // aCZ
               "Witch Doctor #1  S-18 -> 19",  // aCZ
               "Witch Doctor #1  D-19 -> 20",  // NM //ГОВНО

            "Hard Core Rock Mix  S-21 -> 20",
                "Vacuum Cleaner  S-20 -> 21", //ОК, я бы сказал 20.5

              "Crashday  [FULL]  S-22 -> 21",  //CZ // mndd: ОК, хотя он долгий и нудный...

];

//////////////////////////////////////////////////////////////////////////////////////////


/*
Неподтверждённое:
80's Pop  D-17 (18) -
Caprice of Otada  aHD-17 (18) ?
Caprice of Otada  aCZ-18 (20) ?
Caprice of Otada  aFS-19 (21) ?
Do You Know That ~old school  D-18.nm (19) - 19 ему норм, ты сам его бегал
Final Audition 2  D-19.anm (18) - //Бля даже не знаю - у меня там неплохой результат, но я тупо вребаю 5х и рубаю брутом, на поворотах там достаточно тяжко… Оставь в 19, сам при мне бегал
Final Audition episode 2-2  S-21.acz.nx2 (22) -
Gargoyle  S-18 -> 19 - //Согласен, это 19
Get Up!  D-18 (19) - Больше похож все же на 18
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

Hard Core Rock Mix  S-18 (19) -

PUMP IT UP with YOU  D-17 (19) -

Narcisista por Excelencia  FULL  D-18 (19) -
Panuelito Rojo  FULL  D-18.nm (19) -
Final Audition episode 2-2  D-18 (19) - Внезапно оказался сложным О_О
Chicken Wing D-17 (18) - Какой-то напряжный для 17-ки
Msgoon.rmx.pt.6 D-19 (20) - вообще срака

*/


//===================================================================================================================================================


function ApplyPatch( tracklist, estimations )
{
	for( var chartDescr in estimations )
	{
		var estimation_Match = chartDescr.match( "(.*)  (.*)-(.*)" );
		if( ! estimation_Match )
			console.log( "Can't parse estimation " + chartDescr );
		console.assert( estimation_Match );

		var trackTitle = estimation_Match[ 1 ];
		var chartTag = estimation_Match[ 2 ];
		var chartLevelText = estimation_Match[ 3 ];

		var track = FindTrack( tracklist, trackTitle );
		console.assert( track );

		var shared = FindChartSharedNew( track, chartTag, chartLevelText );
		if( ! shared )
			console.log( "Can't find " + track.title + " " + chartTag + "-" + chartLevelText );
		console.assert( shared );

		var votes = estimations[ chartDescr ];
		if( Object.keys( votes ).length > 0 )
		{
/*
			var votesSum = 0;
			for( var v in votes )
				votesSum += votes[ v ];
			shared.estimatedLevelNum = votesSum / Object.keys( votes ).length;
*/
			var sum = _.reduce( Object.values( votes ), function( x, y ) { return x + y }, 0 );
			var suggestedLevelNum = Math.round( sum / Object.keys( votes ).length * 10 ) / 10;
			if( suggestedLevelNum != chartLevelText )
				shared.suggestedLevelNum = suggestedLevelNum;
		}

		//var chartEstimatedLevelNum = Number( estimation_Match[ 4 ] );
		//console.assert( ! isNaN( chartEstimatedLevelNum ) );
		//shared.estimatedLevelNum = chartEstimatedLevelNum;
	}
}


ApplyPatch( tracklist, tracklistVotes );
