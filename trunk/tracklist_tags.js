"use strict";

function AddTags( chart, tags )
{
}

/*
function FindChart( track, chartText )
{
	for( var chart of track[ mixID ] )
		if( chart.text === chartText )
			return chart;
}
*/


function Tag( tag, fullChartDescr )
{
	if( Array.isArray( fullChartDescr ) )
	{
		for( var item of fullChartDescr )
			Tag( tag, item );
		return;
	}

	var chart_Match = fullChartDescr.match( "(.*)  (.*)-(.*)" );
	if( ! chart_Match )
	{
		window.alert( "Can't parse chart '" + fullChartDescr + "'" );
		return;
	}

	var trackTitle = chart_Match[ 1 ];
	var chartTag = chart_Match[ 2 ];
	var chartLevelText = chart_Match[ 3 ];

	var track = FindTrack( tracklist, trackTitle );
	var shared = FindChartSharedNew( track, chartTag, chartLevelText );
	if( ! shared.tags )
		shared.tags = tag;
	else
		shared.tags += " " + tag;
}


function ApplyTags()
{
	/*
	Tag( "IPF-2016",
		[
			"Passacaglia  S-20",
			"Love is a Danger Zone (Cranky Mix)  S-20",
			"Lucid (PIU Edit)  S-20",
			"Move That Body!  S-20",
			"1950  S-20",
			"Karyawisata  S-20",

			"Hypnosis (SynthWulf Mix)  S-21",
			"Dream to Nightmare  S-21",
			"Hardkore of the North  S-21",
			"Windmill  S-21",
			"Mental Rider  S-21",
			"Yog-Sothoth  S-21",
			"Robot Battle  S-21",

			"Elise  S-22",
			"Love is a Danger Zone (Cranky Mix)  S-22",
			"Dream to Nightmare  S-22",
			"Achluoias  S-22",

			"Ignis Fatuus (DM Ashura Mix)  S-23",
			"Flew Far Faster  S-23",
			"VVV  S-23",
			//"Yog-Sothoth  S-23",
			"1950  S-23",

			"Passacaglia  D-24",
			"Dream to Nightmare  D-24",
			"Love is a Danger Zone (Cranky Mix)  D-24",
			"Flew Far Faster  D-24",
			"Windmill  D-24",
			"Avalanche  D-24",
			"Achluoias  D-24",

			"Ignis Fatuus (DM Ashura Mix)  D-25",
			"Yog-Sothoth  D-25",
			//"1950  D-25",
		] );
	*/
/*
	Tag( "Drills",
		[
		] )

	Tag( "Bursts",
		[
		] )

	Tag( "Streams",
		[
		] )

	Tag( "Tricky_stops",
		[
			"Bad Apple!! feat. Nomico  S-15",
			"Everybody Got 2 Know  S-19",
			"NoNoNo  Sp-15",
			"NoNoNo  Dp-15",
			"Red Swan  Dp-20",
			"Uprock  S-17",
		] )

	Tag( "M-runs",
		[
			"Mr. Larpus  S-22",
			"Dignity  S-22",
		] )

	Tag( "brackets",
		[
			"1950  D-21",
			"1950  D-25",
			"1950  S-25",
			"Achluoias  D-24",
			"Achluoias  S-24",
			"Avalanche  D-24",
			"Avalanche  S-22",
			"Bad &infin; End &infin; Night  D-23",
			"BanYa-P Guitar Remix  D-24",
			"BanYa-P Guitar Remix  S-22",
			"Beat the Ghost  S-18",
			"Chicken Wing  S-21",
			"Chicken Wing  S-22",
			"Chicken Wing  D-23",
			"Cleaner  D-26",
			"Cleaner  [SHORT]  D-20",
			"Crashday  D-26",
			"Creed -1st Desire-  D-23",
			"Creed -1st Desire-  S-21",
			"Dawn of the Apocalypse  S-21",
			"Dream to Nightmare  D-22",
			"Dream to Nightmare  D-24",
			"Dream to Nightmare  S-19",
			"Dream to Nightmare  S-22",
			"Elise  D-23",
			"Enhanced Reality  D-20",
			"Exceed 2 Opening  D-19",
			"Final Audition episode 1  D-23",
			"Hi-Bi  D-20",
			"Houkago Stride  D-21",
			"Hyacinth  D-19",
			"Hyacinth  D-23",
			"Hypnosis (SynthWulf Mix)  D-20",
			"Ignis Fatuus (DM Ashura Mix)  D-25",
			"Ignis Fatuus (DM Ashura Mix)  [SHORT]  D-21",
			"Just Hold On (To All Fighters)  D-25",
			"Leakage Voltage  D-20",
			"Leakage Voltage  D-22",
			"Lucid (PIU Edit)  D-23",
			"Mad5cience  S-20",
			"Mental Rider  D-23",
			"Meteorize  S-17",
			"Monkey Fingers 2  D-19",
			"Napalm  D-23",
			"Passacaglia  D-22",
			"Red Swan  D-20",
			"Red Swan  D-21",
			"Slam  S-18",
			"Stardust Overdrive  D-24",
			"Switchback  D-18",
			"The Revolution  D-22",
			//?"Turkey March  D-19",
			"Vacuum Cleaner  S-25",
			"Video Out C  S-22",
			"What Do You Really Want?  S-19",
			"What Happened  D-20",
			"What Happened  D-23",
			"Windmill  D-24",
			"Witch Doctor #1  D-19",
			"X-Rave  S-17",
			"Yog-Sothoth  D-25",
		] )

	/*
	Tag( "slowdowns",
		[
			"",
			"",
			"",
			"",
			"",
			"",
			"Moonlight  S-19",
			"Moonlight  D-21",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
		] );
	*/
/*
	Tag( "bruteforce",
		[
			"Chimera  S-23",
			"Dignity  [FULL]  S-19",
			"Dignity  S-22",
			"Hi-Bi  S-18",
			"Love is a Danger Zone  S-19",
			"Mr. Larpus  S-22",
			"Trato De No Trabarme  [FULL]  S-22",
		] );


	Tag( "extreme-twists",
		[
			"Love is a Danger Zone 2  D-23",
			"Love is a Danger Zone (Cranky Mix)  S-19",
			"Love is a Danger Zone (Cranky Mix)  S-22",
		] );


	Tag( "quads",
		[
		] );

	Tag( "lol",
		[
			"VVV  D-16",
			"Destination  [SHORT]  D-18",
			"Final Audition  S-15",
			"Pumptris (8Bit ver.)  [SHORT]  D-22",
		])
*/

	var S19 =
	[
		"Allegro Piu Mosso  S-19",
		"Annihilator Method  S-19",
		"Asterios -ReEntry-  S-19",
		"Awakening  S-19",
		"Bad &infin; End &infin; Night  S-19",
		"Bad Apple!! feat. Nomico  S-19",
		"Break Out  S-19",
		"Bring Back the Beat  S-19",
		"Death Moon  S-19",
		"Fallen Angel  S-19",
		"Force of Ra  S-19",
		"Helix  S-19",
		"Houkago Stride  S-19",
		"Rave'til the earth's end  S-19",
		"Red Snow  S-19",
		"Ren'ai Yuusha  S-19",
		"Requiem  S-19",
		"Scorpion King  S-19",
		"Shub Niggurath  S-19",
		"Smile Diary  S-19",
		"Start On Red  S-19",
		"Sudden Romance (PIU Edit)  S-19",
		"Sugar Conspiracy Theory  S-19",
		"Super Fantasy  S-19",
		"The Revolution  S-19",
		"Travel to Future  S-19",
		"Waltz of Doge  S-19",
	];

	var S20 =
	[
		"1950  S-20",
		"Allegro Furioso  S-20",
		"Arcana Force  S-20",
		"Black Dragon  S-20",
		"Four Seasons of Loneliness  S-20",
		"God Mode feat. skizzo  S-20",
		"Good Night  S-20",
		"Gothique Resonance  S-20",
		"Karyawisata  S-20",
		"Kasou Shinja  S-20",
		"Le Grand Bleu  S-20",
		"Mad5cience  S-20",
		"Move That Body!  S-20",
		"Point Zero One  S-20",
		"Ragnarok  S-20",
		"Sarabande  S-20",
		"The Festival of Ghost2 (Sneak)  S-20",
		"Trashy Innocence  S-20",
		"Tritium  S-20",
		"Utsushiyo No Kaze feat. Kana  S-20",
	];

	var S21 =
	[
		"Creed -1st Desire-  S-21",
		"Donatello  S-21",
		"Escape  S-21",
		"HTTP  S-21",
		"Infinity  S-21",
		"Just Hold On (To All Fighters)  S-21",
		"Keep On!  S-21",
		"Matador  S-21",
		"Shub Niggurath  S-21",
		"Yog-Sothoth  S-21",
	];

	var S22 =
	[
		"Achluoias  S-22",
		"Avalanche  S-22",
		"Bedlam  S-22",
		"Cross Over  S-22",
		"Further  S-22",
		"video out c  S-22",
	];

	var S23 =
	[
		"1950  S-23",
		"Annihilator Method  S-23",
		"Good Night  S-23",
		"The Quick Brown Fox Jumps Over The Lazy Dog  S-23",
		"Yog-Sothoth  S-23",
	];

	var S24p =
	[
		"Achluoias  S-24",
		"Escape  S-24",
		"Further  S-24",
		"Shub Niggurath  S-24",
	];


	var D18 =
	[
		"Ai, Yurete  D-18",
		"Anguished Unmaking  D-18",
		"Asterios -ReEntry-  D-18",
		"Bad &infin; End &infin; Night  D-18",
		"Bad Apple!! feat. Nomico  D-18",
		"Beautiful  D-18",
		"Blaze emotion (Band version)  D-18",
		"Break Out  D-18",
		"Clue  D-18",
		"Cosmical Rhythm  D-18",
		"Creed -1st Desire-  D-18",
		"Donatello  D-18",
		"Feel My Happiness  D-18",
		"Four Seasons of Loneliness  D-18",
		"Heart Attack  D-18",
		"Hyperion  D-18",
		"Idealized Romance  D-18",
		"Just Hold On (To All Fighters)  D-18",
		"Just Kiddin  D-18",
		"Last Rebirth  D-18",
		"Le Grand Bleu  D-18",
		"Magical Vacation  D-18",
		"Meteorize  D-18",
		"Milky Way Galaxy  D-18",
		"Move That Body!  D-18",
		"Pick Me @ 1561  D-18",
		"Prime  D-18",
		"Rave'til the earth's end  D-18",
		"Red Snow  D-18",
		"Ren'ai Yuusha  D-18",
		"Rock the House  D-18",
		"Sarabande  D-18",
		"Selfishness  D-18",
		"Silver Beat feat. ChisaUezono  D-18",
		"Start On Red  D-18",
		"Step @ 1575  D-18",
		"Super Fantasy  D-18",
		"Travel to Future  D-18",
		"Up & Up @ 1538  D-18",
		"Utsushiyo No Kaze feat. Kana  D-18",
		"V3  D-18",
		"Waltz of Doge  D-18",
		"You Got Me Crazy  D-18",
	];

	var D19 =
	[
		"Allegro Piu Mosso  D-19",
		"B2  D-19",
		"Black Dragon  D-19",
		"Bring Back the Beat  D-19",
		"Cross Over  D-19",
		"Energetic  D-19",
		"Escape  D-19",
		"Good Night  D-19",
		"HTTP  D-19",
		"Helix  D-19",
		"Hellfire  D-19",
		"Hyacinth  D-19",
		"Infinity  D-19",
		"Kasou Shinja  D-19",
		"Katkoi  D-19",
		"Kill Them!  D-19",
		"Latino Virus  D-19",
		"Matador  D-19",
		"Mitotsudaira  D-19",
		"Moon Light Dance  D-19",
		"Overblow2  D-19",
		"Queen of the Red  D-19",
		"Redline  D-19",
		"Robot Battle  D-19",
		"Seize My Day  D-19",
		"Setsuna Trip  D-19",
		"Stardust Overdrive  D-19",
		"Sudden Romance (PIU Edit)  D-19",
		"The Revolution  D-19",
		"Tritium  D-19",
		"Visual Dream II (In Fiction)  D-19",
	];

	var D20 =
	[
		"Allegro Furioso  D-20",
		"Amphitryon  D-20",
		"Annihilator Method  D-20",
		"Arcana Force  D-20",
		"Awakening  D-20",
		"BSPower Explosion  D-20",
		"Bedlam  D-20",
		"Clue  D-20",
		"Cross Time  D-20",
		"Force of Ra  D-20",
		"Heart Attack  D-20",
		"Hestia  D-20",
		"Hyperion  D-20",
		"Keep On!  D-20",
		"Le Grand Bleu  D-20",
		"Nemesis  D-20",
		"Passing Rider  D-20",
		"Prime  D-20",
		"Rave'til the earth's end  D-20",
		"Red Swan  D-20",
		"Redline  D-20",
		"Ren'ai Yuusha  D-20",
		"Scorpion King  D-20",
		"Silhouette Effect  D-20",
		"Sora no Shirabe  D-20",
		"Start On Red  D-20",
		"Step @ 1575  D-20",
		"Sugar Conspiracy Theory  D-20",
		"The Festival of Ghost2 (Sneak)  D-20",
		"Time Attack <Blue>  D-20",
		"Up & Up @ 1538  D-20",
		"Waltz of Doge  D-20",
	];

	var D21 =
	[
		"Death Moon  D-21",
		"Feel My Happiness  D-21",
		"God Mode feat. skizzo  D-21",
		"Houkago Stride  D-21",
		"Travel to Future  D-21",
		"V3  D-21",
	];

	var D22 =
	[
		"Anguished Unmaking  D-22",
		"Donatello  D-22",
		"Escape  D-22",
		"Further  D-22",
		"Good Night  D-22",
		"Just Hold On (To All Fighters)  D-22",
		"Leakage Voltage  D-22",
		"Point Zero One  D-22",
		"Seize My Day  D-22",
	];

	var D23 =
	[
		"BSPower Explosion  D-23",
		"Bad &infin; End &infin; Night  D-23",
		"Chase Me  D-23",
		"Creed -1st Desire-  D-23",
		"Cross Over  D-23",
		"HTTP  D-23",
		"Hellfire  D-23",
		"Kasou Shinja  D-23",
		"Requiem  D-23",
		"Shub Niggurath  D-23",
		"Travel to Future  D-23",
		"video out c  D-23",
	];

	var D24p =
	[
		"A Site De La Rue  D-24",
		"Achluoias  D-24",
		"Annihilator Method  D-24",
		"Bedlam  D-24",
		"Good Night  D-24",
		"Imprinting  D-24",
		"Sarabande  D-24",
		"The Quick Brown Fox Jumps Over The Lazy Dog  D-24",
		"Trashy Innocence  D-24",
		"V3  D-24",

		"1950  D-25",
		"Further  D-25",
		"Just Hold On (To All Fighters)  D-25",
		"Yog-Sothoth  D-25",

		"Achluoias  D-26",
		"Shub Niggurath  D-26",
	];

	var male = [].concat( S21, D21, S22, D22, S23, D23, S24p, D24p );
	var female = male.concat( D18, S19, D19, S20, D20 );

	Tag( "WPT-2019.male", male );
	Tag( "WPT-2019.female", female );
	// AddTags( "Arirang  S-18", DRILLS +
}


initFuncs.push( ApplyTags );
