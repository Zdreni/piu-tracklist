"use strict";

var tracklistEstimated = [
                    "Accident  S-19 -> 18",
        "All I Want For X-mas  S-11 -> 8",
               "Another Truth  D-22 -> 18",
                     "Arirang  S-18 -> 19",
                     "Arirang  D-20 -> 21",
              "Beat the Ghost  S-18 -> 19",
              "Beat the Ghost  S-20 -> 19",
                         "Bee  S-19 -> 18",
                         "Bee  D-19 -> 20",
               "Blaze Emotion  D-17 -> 18",
                     "Blazing  D-19 -> 20",
          "Bullfighter's Song  S-8 -> 9",
                   "By Chance  D-16 -> 15",
            "Caprice of Otada  D-21 -> 23",  //aNM
                "Chicken Wing  S-19 -> 20",
        "Chopsticks Challenge  D-16 -> 15",  //NM
                       "Crazy  D-19 -> 16",  //NM
                 "Destination  S-18 -> 19",
          "Digan Lo Que Digan  D-18 -> 17",
                     "Dignity  D-18 -> 20",
                       "Dr. M  D-16 -> 17",  //NM
                       "Elise  S-22 -> 20",
                "Extravaganza  S-16 -> 17",  //aHD
                "Extravaganza  D-17 -> 18",  //NM
                "Extravaganza  D-19 -> 20",  //aNM
                    "Faster Z  S-8 -> 9",
        "Final Audition 3 U.F  D-19 -> 18",  //aNM
    "Final Audition episode 1  S-19 -> 20",  //aCZ
  "Final Audition episode 2-1  S-20 -> 21",  //CZ
  "Final Audition episode 2-1  S-21 -> 22",  //aCZ
  "Final Audition episode 2-1  D-21 -> 23",  //aNM
  "Final Audition episode 2-X  S-17 -> 18",  //HD
             "Flew Far Faster  S-23 -> 22",  // проверить 2-2 и Vacuum S21, а также Achluoias, 2-2 и Cleaner S22
             "Get Up (and Go)  D-20 -> 18",
                  "Guitar Man  S-18 -> 20",  //aCZ
                    "Gun Rock  S-18 -> 16",  //CZ
       "Hardkore of the North  S-21 -> 22",
                      "Hatred  D-16 -> 17",  //NM
                       "Hello  D-16 -> 17",  //NM
               "Hello William  D-21 -> 20",
                      "Hestia  S-18 -> 20",
                       "Hi-Bi  D-18 -> 19",  //NM
    "Hypnosis (SynthWulf Mix)  S-8 -> 9",
"Ignis Fatuus (DM Ashura Mix)  D-17 -> 18",
   "I'll Give You All My Love  D-18 -> 17",  //NM
                  "Like a Man  S-18 -> 17",
                "Miss's Story  D-19 -> 17",
 "Mission Possible -Blowback-  D-17 -> 18",
                  "Mr. Larpus  S-20 -> 19",
                   "My Dreams  S-17 -> 18",  //aCZ
                   "My Dreams  S-18 -> 17",  //CZ
                 "Naissance 2  D-19 -> 20",  //aNM
                      "Napalm  S-19 -> 18",
                      "Napalm  S-22 -> 21",
                      "Napalm  D-23 -> 22",
   "Narcisista Por Excelencia  D-18 -> 19",
                  "Necromancy  D-13 -> 14",
                  "Necromancy  D-24 -> 23",
          "No Rhyme No Reason  D-20 -> 19",
                    "Overblow  D-18 -> 19",
                    "Overblow  D-20 -> 19",
                     "Phantom  S-17 -> 18",  //aCZ
                     "Phantom  D-19 -> 20",  //NM
                     "Phantom  D-20 -> 18",  //aNM
        "Phantom -Intermezzo-  S-19 -> 20",
        "Phantom -Intermezzo-  S-21 -> 22",
        "Phantom -Intermezzo-  D-15 -> 16",
        "Phantom -Intermezzo-  D-20 -> 21",
                   "Pump Jump  D-17 -> 16",
           //"Pump Me Amadeus  S-17 -> 18",  //CZ
             "Pumping Jumping  D-17 -> 18",
            "Pumptris Quattro  D-22 -> 23",  //aNM
                "Robot Battle  S-21 -> 22",
                     "Requiem  S-19 -> 20",  // не проще Necromancy S20
             "Sorceress Elise  S-15 -> 16",
             "Sorceress Elise  S-21 -> 22",
                    "Take Out  S-17 -> 18",
                      "Tepris  D-18 -> 20",
    "The Angel Who Lost Wings  D-16 -> 15",
                "U Got 2 Know  S-18 -> 19",
                "U Got 2 Know  S-19 -> 18",
                        "Vook  S-17 -> 18",  //aCZ
                        "Vook  D-17 -> 18",  //FS
                        "Vook  D-18 -> 19",  //NM
                       "Wanna  D-17 -> 18",
               "What Happened  D-20 -> 18",
                "Witch Doctor  D-23 -> 22",  //aNM
             "Witch Doctor #1  S-16 -> 17",  //aHD
             "Witch Doctor #1  S-18 -> 19",  //aCZ
             "Witch Doctor #1  S-18 -> 19",  //aCZ
             "Witch Doctor #1  D-19 -> 20",  //NM
                      "X-Rave  D-20 -> 21",
                      "X-Tree  D-18 -> 19",
                 "Yog-Sothoth  S-21 -> 20",  // не сложнее чем X-tree 20 и вообще любая 20, проще любой 21

          "Hard Core Rock Mix  S-21 -> 20",
              "Vacuum Cleaner  S-20 -> 21",

   "Beat of the War 2  [FULL]  S-19 -> 20",  //CZ
   "Beat of the War 2  [FULL]  D-20 -> 21",  //NM
            "Crashday  [FULL]  S-22 -> 21",  //CZ

];

var tracklistForOldMixes = [
            "Caprice of Otada  CZ-21 -> 22",  //CZ
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
Dawn of the Apocalypse  D-21.nm (20) -
Do You Know That ~old school  D-18.nm (19) - 
Final Audition 2  D-19.anm (18) -
Final Audition episode 2-2  S-21.acz.nx2 (22) -
Gargoyle  S-18 (19) -
Get Up!  D-18 (19) -
Hyun Jin Young Go  CZ-19 (20) ?
Hyun Jin Young Go  NM-20 (21) ?
Necromancy  S-18 (19) -
Necromancy  D-19 (21) -
Phantom  S-18.cz (19) -
Pumping Jumping  S-19.new (20) -
Pumptris Quattro  S-19.cz (20) -
Reality  S-17 (18) -
Shake It Up  NM-18 (21) ?
Shake It Up  aNM-18 (19) ?
Solitary  S-17.acz (18) -
Solitary 2  aCZ-17 (18) -
Take Out  S-20 (22) -
Take Out  D-19 (21) -
What Happened  S-20 (22) -

Hard Core Rock Mix  S-18 (19) -
PUMP IT UP with YOU  D-17 (19) -

Narcisista por Excelencia  FULL  D-18 (19) -
Panuelito Rojo  FULL  D-18.nm (19) -
*/


function ApplyPatch( tracklist, estimations )
{
	for( var trackLine of estimations )
	{
		var estimation_Match = trackLine.match( "(.*)  (.*)-(.*) -> (.*)" );
		console.assert( estimation_Match );
		
		var trackTitle = estimation_Match[ 1 ];
		var chartTag = estimation_Match[ 2 ];
		var chartLevelText = estimation_Match[ 3 ];
		var chartRealLevelNum = Number( estimation_Match[ 4 ] );
		console.assert( ! isNaN( chartRealLevelNum ) );

		var track = FindTrack( tracklist, trackTitle );
		console.assert( track );
		
		var chartIndex = FindChartIndexNew( track, chartTag, chartLevelText );
		if( ! chartIndex )
			console.log( "Can't find " + track.title + " " + chartTag + "-" + chartLevelText );
		console.assert( chartIndex );
		
		var charts = FindChartsWithIndex( track, chartIndex );
		console.assert( charts.length > 0 );
		for( var chart of charts )
			chart.realLevelNum = chartRealLevelNum;
	}
}


ApplyPatch( tracklist, tracklistEstimated );
