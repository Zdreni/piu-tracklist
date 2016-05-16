"use strict";


String.prototype.endsWith = function(suffix)
{
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
}

	
Array.prototype.shuffle = function()
{
    for( var i = this.length - 1;  i > 0;  --i )
	{
        var j = Math.floor( Math.random() * ( i + 1 ) );

        var temp = this[ i ];
        this[ i ] = this[ j ];
        this[ j ] = temp;
    }
    return this;
}

var CopyAttribsList = function( source, attribs)
{
	var result = {};

	for( var itemName of attribs )
		result[ itemName ] = source[ itemName ];

	return result;
}

var CopyAttribsFrom = function( target, source )
{
	for( var itemName of source )
		target[ itemName ] = source[ itemName ];
}

/*
Структура трека:
	   title: <название>,
	  artist: <исполнитель>,
	 channel: ORIGINAL / KPOP / WORLD,
	     bpm: <бпм> (один или несколько),
	duration: SHORT / STANDARD / REMIX / FULL,

	<микс 1>: массив чартов,
	<микс 2>: массив чартов,
	...
	<микс N>: массив чартов,

Структура чарта:
	 text: текст с описанием чарта, как он был в исходной таблице. Например, "15" (для старых миксов) или "Dp3" (для новых)
	 type: SINGLE / DOUBLE / COUPLE
	 zone: ARCADE / SPECIAL (только для старых чартов)
	  tag: 'NL' / 'HD' / 'CZ' / 'FS' / 'NM' для старых чартов или 'S' / 'Sp' / 'D' / 'Dp' для новых
	levelText: сложность чарта, как она объявлена на автомате. Это может быть число или '??' (черепки-звёздочки на NX также переведены в числа)
	levelNum: сложность чарта, выраженная числом (вычисленная из скоринга, даже если написано '??')
	realLevelNum: сложность чарта после переоценки (по чьему-то субьективному ощущению)
	index: индекс уникального чарта (в пределах трека). Все чарты трека с одинаковым индексом считаются одним чартом, вне зависимости от микса, слота (CZ / HD) и т.д.
	  bpm: бпм отдельного чарта, если отличается от бпм трека
	fromPatchIndex: номер патча микса, начиная с которого чарт доступен на этом миксе

/*
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
*/

var mixes =
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
	'Zero':     { style: "old", anothers: true },
	'NX':       { style: "old", anothers: true },  // NX –NEW XENESIS-
	'NX2':      { style: "old", anothers: true },  // NX2 –NEXT XENESIS-
	'NXA':      { style: "old", anothers: true },  // NX –ABSOLUTE-

	'Fiesta':   { style: "new",
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.10", "1.20"] },
	'FiestaEX': { style: "new",
	              patches: ["1.00", "1.10", "1.20", "1.30", "1.40", "1.50", "1.51"] },
	'Fiesta2':  { style: "new",
	              patches: ["1.0", "1.01", "1.02", "1.10", "1.20", "1.30", "1.40", "1.50", "1.51", "1.60", "1.61"] },
	'Prime':    { style: "new",
	              patches: ["1.0", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.08", "1.09", "1.10",
	                        "1.11", "1.12", "1.13", "1.14", "1.15", "1.16"] },
};

var mixesOrder = [ "Exceed", "Exceed2", "Zero", "NX", "NX2", "NXA", "Fiesta", "FiestaEX", "Fiesta2", "Prime" ];
var firstNewMixIndex = mixesOrder.indexOf( "Fiesta" );
var oldMixesReverseOrder = mixesOrder.slice(0, firstNewMixIndex ).reverse();
//[ "NXA", "NX2", "NX", "Zero", "Exceed2", "Exceed" ];
var newMixesOrder = mixesOrder.slice( firstNewMixIndex );
//[ "Fiesta", "FiestaEX", "Fiesta2", "Prime" ];

// mode
var SINGLE = "Single";
var DOUBLE = "Double";
var COUPLE = "Couple";

// zone
var ARCADE = "Arcade";
var SPECIAL = "Special";

// channel
var ORIGINAL = "Original";
var KPOP = "K-Pop";
var WORLD = "World";
var JMUSIC = "J-Music";

// duration
var SHORT = "Short";
var STANDARD = "Standard";
var REMIX = "Remix";
var FULL = "Full";

// region
var LATIN = "Latin";
var CHINESE = "Chinese";


var OldArcadeTags     = ["NL", "HD", "CZ", "FS", "NM"];
var OldArcadeTags_low = ["nl", "hd", "cz", "fs", "nm"];

var OldSpecialTags     = ["aNL", "aHD", "aCZ", "aFS", "aNM"];
var OldSpecialTags_low = ["anl", "ahd", "acz", "afs", "anm"];

var OldTagTypes = [ SINGLE, SINGLE, SINGLE, DOUBLE, DOUBLE ];

var NewTags = [ "Sp", "S", "Dp", "D" ];
var NewTagTypes = [ SINGLE, SINGLE, DOUBLE, DOUBLE ];


function Normalized( title )
{
	var result = title.toLowerCase();
	for( var chr of " !?&'\".,;:*-~()[]{}/\\".split('') )
	{
		while( true )
		{
			var replResult = result.replace( chr, '' );
			if( result === replResult )
				break;
			else
				result = replResult;
		}
	}
	return result;
}


function FindTrackIfAny( tracklist, title, artist )
{
	var result = _.filter( tracklist, function( item ) { return Normalized( item.title ) === Normalized( title )  &&  item.artist   &&  ( ! artist  ||  Normalized( item.artist ) == Normalized( artist ) ); } );
	if( result.length > 1 )
	{
		window.alert("Too much tracks '" + title + "'");
		return;
	}
	return result[ 0 ];
}


function FindTrack( tracklist, title, artist )
{
	//var result = _.where( tracklist, { title: trackTitle } );
	var result = _.filter( tracklist, function( item ) { return Normalized( item.title ) === Normalized( title )  &&  ( ! artist  ||  Normalized( item.artist ) == Normalized( artist ) ); } );
	if( result.length === 0 )
	{
		window.alert("Can't found track '" + title + "', artist '" + artist + "'" );
	}
	else if( result.length > 1 )
	{
		window.alert("Too much tracks '" + title + "'");
	}
	console.assert( result.length === 1 );
	return result[ 0 ];
}


function FindChartIndexNew( track, chartTag, chartlevelText )
{
	console.assert( ["S", "Sp", "D", "Dp"].indexOf( chartTag ) >= 0 );
	for( var mixID of mixesOrder )
	{
		if( mixes[ mixID ].style === "new"  &&  track[ mixID ] )
		{
			var chart = _.findWhere( track[ mixID ], { tag: chartTag, levelText: chartlevelText,  } );
			if( chart )
				return chart.index;
		}
	}
}


// range treated as [ mixIndexFrom..mixIndexTo ), not including the <mixIndexTo> mix
function FindChartsWithIndexInMixesRange( track, chartIndex, mixIndexFrom, mixIndexTo )
{
	console.assert( 0 <= mixIndexFrom  && mixIndexFrom < mixIndexTo  &&  mixIndexTo <= mixesOrder.length );

	var charts = [];
	for( var i = mixIndexFrom;  i < mixIndexTo;  ++i )
	{
		var trackInMix = track[ mixesOrder[ i ] ];
		if( trackInMix )
		{
			var chart = _.find( trackInMix, { index: chartIndex } );
			if( chart )
				charts.push( chart );
		}
	}
	return charts;
}


function FindChartsWithIndex( track, chartIndex )
{
	return FindChartsWithIndexInMixesRange( track, chartIndex, 0, mixesOrder.length );
}


function FindChart( track, chartDescr )
{
	var chartInfo = chartDescr.split( "." );

	var mixID = chartInfo.length > 1  ?  chartInfo[ 1 ]  :  "";
	var localChartDescr = chartInfo [ 0 ];

	var arcadeTagIndex = OldArcadeTags_low.indexOf( localChartDescr.toLowerCase() );	
	var specialTagIndex = OldSpecialTags_low.indexOf( localChartDescr.toLowerCase() );
	if( arcadeTagIndex >= 0  ||  specialTagIndex >= 0 )
	{
		var chartTag = ( arcadeTagIndex >= 0  ?  OldArcadeTags[ arcadeTagIndex ]  :  OldSpecialTags[ specialTagIndex ] );

		if( mixID != "" )
		{
			var chart = _.findWhere( track[ mixID ], { tag: chartTag, } );
			if( ! chart )
				console.log( "Can't find chart '" + chartDescr + "' in track '" + track.title + "'" );
			return chart;
		}

		for( var oldMixID of oldMixesReverseOrder )
		{
			if( track[ oldMixID ] )
			{
				var chart = _.findWhere( track[ oldMixID ], { tag: chartTag } );
				if( chart )
					return chart;
			}
		}

		console.log( "Can't find " + track.title + " " + chartDescr );
	}
	else
	{
		var result = localChartDescr.match( /(\D+)(\d+)/ );
		var chartTag = localChartDescr;
		var chartlevelText = 0;
		if( result )
		{
			chartTag = result[ 1 ];
			chartlevelText = result[ 2 ];
		}
		
		if( mixID != "" )
		{
			var chart = _.findWhere( track[ mixID ], { tag: chartTag, levelText: chartlevelText, } );
			if( ! chart )
				console.log( "Can't find chart '" + chartDescr + "' in track '" + track.title + "'" );
			return chart;
		}

		for( var newMixID of newMixesOrder )
		{
			if( track[ newMixID ] )
			{
				var chart = _.findWhere( track[ newMixID ], { tag: chartTag, levelText: chartlevelText, } );
				if( chart )
					return chart;
			}
		}

		console.log( "Can't find " + track.title + " " + chartDescr );
	}
		
	console.assert( chart );
	return chart;
}




function GetTrackFirstMix( track )
{
	if( track.fromMix )
		return track.fromMix;

	for( var mixID of mixesOrder )
		if( track[ mixID ] )
			return mixID;
}


var chartFilter = {
    // mixID
	type: SINGLE,
	'old': { zone: ARCADE, duration: STANDARD },
	'new': { duration: STANDARD },

	levelMin: 0,
	levelMax: 26,

	excludeMixIDs: [],

/*
	ReadSettings: function()
	{
		CopyAttribsFrom( chartFilter, JSON.parse( localStorage[ "tracklist.settings" ] ) );
	},

	WriteSettings: function()
	{
		localStorage[ "tracklist.settings" ] = JSON.stringify(
			CopyAttribsList( chartFilter, [ 'mixID', 'type', 'old', 'new', 'levelMin', 'levelMax', 'excludeMixIDs' ] ) );

	},
*/

	CheckAddTrack: function( track )
	{
		if( track.region )
			return;  // temporarily

		if( track.duration != chartFilter[ mixes[ chartFilter.mixID ].style ].duration )
			return;

		function CheckAddChart( chart )
		{
			var realLevelMatches = true;
			var levelMatches = true;

			if( chart.type != COUPLE )
			{
				levelMatches = ( chartFilter.levelMin <= chart.levelNum  &&  chart.levelNum <= chartFilter.levelMax );
				realLevelMatches = ( chartFilter.levelMin <= chart.realLevelNum  &&  chart.realLevelNum <= chartFilter.levelMax );
				if( ! realLevelMatches  &&  ! levelMatches )
					return;
			}

			if( mixes[ chartFilter.mixID ].style === "old" )
				if( chart.zone != chartFilter.old.zone )
					return;

			if( chart.fromPatchIndex  &&  chartFilter.patchIndex < chart.fromPatchIndex )
				return;

			for( var mixID of chartFilter.excludeMixIDs )
			{
				//if( track[ mixID ]  &&  _.findWhere( track[ mixID ], { index: chart.index, } ) )
				if( track[ mixID ] )  // временно, пока не будет установлено корректное соотношение между старыми и новыми сложностями для всех чартов
					return;
			}

			chartFilter.list.push( {
				chart: chart,
				track: track,
				realLevelMatches: realLevelMatches,
				levelMatches: levelMatches, } );
		}


		var charts = track[ chartFilter.mixID ];
		if( typeof charts === 'undefined' )
			return;

		for( var chart of charts )
			if( chartFilter.type === chart.type )
				CheckAddChart( chart );
	},


	UpdateRandomList: function()
	{
		chartFilter.randomIndexes = [];
		for( var i = 0;  i < chartFilter.list.length;  ++i)
		{
			if( chartFilter.list[ i ].realLevelMatches)
				chartFilter.randomIndexes.push( i );
		}
		chartFilter.randomIndexes.shuffle();
	},


	GetNextRandomItem: function()
	{
		if( ! chartFilter.randomIndexes  ||  chartFilter.randomIndexes.length === 0 )
			return;

		var index = chartFilter.randomIndexes.pop();
		if( chartFilter.randomIndexes.length === 0 )
			chartFilter.UpdateRandomList();

		return chartFilter.list[ index ];
	},


	UpdateList: function()
	{
		chartFilter.list = [];

		if( ! chartFilter.mixID )
			return;

		for( var trackID in tracklist )
			chartFilter.CheckAddTrack( tracklist[ trackID ] );

		chartFilter.list.sort( function( item1, item2 )
			{
				function LevelMatchScore( item )
				{
					if( item.realLevelMatches && item.levelMatches )
						return 1;
					if( item.realLevelMatches )
						return 2;
					if( item.levelMatches )
						return 3;
				}
				
				var levelMatchScoreDelta = LevelMatchScore( item1 ) - LevelMatchScore( item2 );
				if( levelMatchScoreDelta )
					return levelMatchScoreDelta;
				return item1.track.title.localeCompare( item2.track.title );
			}
		);

		chartFilter.UpdateRandomList();

		//chartFilter.WriteSettings();
	}
}

//chartFilter.ReadSettings();
