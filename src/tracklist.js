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
	   title:  <название>
	  artist:  <исполнитель>
	 channel:  ORIGINAL / KPOP / JMUSIC / WORLD
	     bpm:  <бпм> (один или несколько)
	duration:  SHORT / STANDARD / REMIX / FULL
	  charts:  массив shared-чартов
	<микс 1>:  массив инстанс-чартов для микса 1
	<микс 2>:  массив инстанс-чартов для микса 2
	...
	<микс N>:  массив инстанс-чартов для микса N

Структура shared-чарта (т.е. тех данных о чарте, которые не зависят от конкретного микса):
	           index:  индекс чарта в треке
	            type:  SINGLE / DOUBLE / COUPLE
	         fromMix:  индекс микса, на котором впервые появился этот чарт
	etimatedLevelNum:  сложность чарта после переоценки (по чьему-то субьективному ощущению)

Структура инстанс-чарта (т.е. того, как именно этот чарт описан на данном конкретном миксе):
	        shared:  shared-чарт
	          text:  текст с описанием чарта, как он был в исходной таблице. Например, "15" (для старых миксов) или "Dp3" (для новых)
	          zone:  ARCADE / SPECIAL (только для старых чартов)
	           tag:  'NL' / 'HD' / 'CZ' / 'FS' / 'NM' для старых чартов или 'S' / 'Sp' / 'D' / 'Dp' для новых
	     levelText:  сложность чарта, как она объявлена на автомате.
	                 Это может быть число или '??' (черепки-звёздочки на NX также переведены в числа)
	      levelNum:  сложность чарта, выраженная числом (вычисленная из скоринга, даже если написано '??')
	           bpm:  бпм отдельного чарта, если отличается от бпм трека
	fromPatchIndex:  номер патча микса, начиная с которого чарт доступен на этом миксе

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

function VerList(str)
{
	return str.split(' ');
}


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
var XROSS = "Xross";

// duration
var SHORT = "Short";
var STANDARD = "Standard";
var REMIX = "Remix";
var FULL = "Full";

// region
var CHINESE = "Chinese";
var JAPAN = "Japan";
var LATIN = "Latin";
var PHILIPPINES = "Philippines";


const OldArcadeTags     = ["NL", "HD", "CZ", "FS", "NM"];
const OldArcadeTags_low = ["nl", "hd", "cz", "fs", "nm"];

const OldSpecialTags     = ["aNL", "aHD", "aCZ", "aFS", "aNM"];
const OldSpecialTags_low = ["anl", "ahd", "acz", "afs", "anm"];

const OldTagTypes = [ SINGLE, SINGLE, SINGLE, DOUBLE, DOUBLE ];

const NewTags = [ "Sp", "S", "Dp", "D", "CoOp" ];
const NewTagTypes = [ SINGLE, SINGLE, DOUBLE, DOUBLE, COUPLE ];


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
	'Zero':     { style: "old",
	              anothers: true },

	'NX':       { style: "old",
	              anothers: true },  // NX –NEW XENESIS-
	'NX2':      { style: "old",
	              anothers: true, regions: [ CHINESE ] },  // NX2 –NEXT XENESIS-
	'NXA':      { style: "old",
	              anothers: true },  // NX –ABSOLUTE-

	'Fiesta':   { style: "new",
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.10", "1.20"] },
	'FiestaEX': { style: "new",
	              patches: ["1.00", "1.10", "1.20", "1.30", "1.40", "1.50", "1.51"] },
	'Fiesta2':  { style: "new",
	              regions: [ LATIN ],
	              patches: ["1.00", "1.01", "1.02", "1.10", "1.20", "1.30", "1.40", "1.50", "1.51", "1.60", "1.61"] },

	'Prime':    { style: "new",
	              regions: [ LATIN ],
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.08", "1.09", "1.10",
	                        "1.11", "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "1.20", "1.21"] },
	'Prime2':   { style: "new",
	              regions: [ LATIN, JAPAN, PHILIPPINES ],
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05", "1.06", "1.07", "1.08", "1.09", "1.10",
	                        "2.00", "2.01", "2.02", "2.03", "2.04", "2.05", "2.05.1"] },

	'XX':       { style: "new",
	              patches: ["1.00", "1.01", "1.02", "1.03", "1.04", "1.05",
	                        "2.00", "2.01", "2.02", "2.03", "2.04", "2.05", "2.06", "2.07", "2.08"] },

	'Phoenix':  { style: "new",
	              patches: ["1.00", "1.01", "1.02"] },
};


const mixesOrder = [ "Exceed", "Exceed2", "Zero", "NX", "NX2", "NXA", "Fiesta", "FiestaEX", "Fiesta2", "Prime", "Prime2", "XX", "Phoenix" ];
const lowCaseMixesOrder = mixesOrder.map( x => x.toLowerCase() );
const firstNewMixIndex = mixesOrder.indexOf( "Fiesta" );
const lastOldMixIndex = firstNewMixIndex - 1;
//const oldMixesReverseOrder = mixesOrder.slice(0, firstNewMixIndex ).reverse();  // NXA..Exceed
//const newMixesOrder = mixesOrder.slice( firstNewMixIndex );  // Fiesta..Prime


function Normalized( title )
{
	var result = title.toLowerCase();
	for( var chr of ( " !?&'\".,;:*-~()[]{}/\\".split('') ) )
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


function FindTrack( tracklist, idOrTitle )
{
	var track = tracklist[ idOrTitle ];
	if( track )
		return track;

	var normTitle = Normalized( idOrTitle );
	var result = _.filter( tracklist, function( item, key )
		{
			// this match not working well for [FULL] tracks, 'cause their title is identical to arcade title
			//var titleMatch = Normalized( item.title ) === normTitle  ||  ( item.shortTitle  &&  Normalized( item.shortTitle ) === normTitle );
			return Normalized( item.title ) === normTitle;
		} );
	if( result.length === 0 )
		throw new Error( `Can't find track '${idOrTitle}'` );
	else if( result.length > 1 )
		throw new Error( `Several tracks with name '${idOrTitle}' found, specify <id> to find specific one` );
	return result[ 0 ];
}


function FindChartSharedNew( track, chartTag, chartLevelText )
{
	if( ["S", "Sp", "D", "Dp"].indexOf( chartTag ) < 0 )
		throw new Error( `Unknown chartTag ${chartTag}'` );

	for( var mixID of mixesOrder )
	{
		if( mixes[ mixID ].style === "new"  &&  track.charts[ mixID ] )
		{
			var chart = _.findWhere( track.charts[ mixID ], { tag: chartTag, levelText: chartLevelText, } );
			if( chart )
			{
				console.assert( chart.shared );
				return chart.shared;
			}
		}
	}

	throw new Error( `Can't find ${track.id} ${chartTag}-${chartLevelText}` );
}


function FindChartWithIndexInMix( track, chartIndex, mixID )
{
	console.assert( mixesOrder.indexOf( mixID ) >= 0 );

	var chartsInMix = track.charts[ mixID ];
	if( chartsInMix )
	{
		for( var chart of chartsInMix )
			if( chart.shared.index === chartIndex )
				return chart;
	}
	return null;
}


// range treated as [ mixIndexFrom..mixIndexTo ), not including the <mixIndexTo> mix
function FindChartsWithIndexInMixesRange( track, chartIndex, mixIndexFrom, mixIndexTo )
{
	console.assert( 0 <= mixIndexFrom  &&  mixIndexFrom < mixIndexTo  &&  mixIndexTo <= mixesOrder.length );

	var charts = [];
	for( var i = mixIndexFrom;  i < mixIndexTo;  ++i )
	{
		var chartsInMix = track.charts[ mixesOrder[ i ] ];
		if( chartsInMix )
		{
			for( var chart of chartsInMix )
				if( chart.shared.index === chartIndex )
				{
					charts.push( chart );
					break;
				}
		}
	}
	return charts;
}


function GetMixIndex( mixName )
{
	const mixIndex = lowCaseMixesOrder.indexOf( mixName.toLowerCase() );
	if( mixIndex < 0 )
		throw new Error( `Can't find mix '${mixName}'` );
	return mixIndex;
}


function FindChartEx( track, chartDescr, chartPattern, fromMixName, toMixName )
{
	const fromMixID = GetMixIndex( fromMixName );
	const toMixID = GetMixIndex( toMixName );
	if( fromMixID > toMixID )
		throw new Error( `Wrong mix range ${fromMixName} - ${toMixName}` );

	for( var mixID = toMixID;  mixID >= fromMixID;  --mixID )
	{
		if( track.charts[ mixesOrder[ mixID ] ] )
		{
			var chart = _.findWhere( track.charts[ mixesOrder[ mixID ] ], chartPattern );
			if( chart )
				return chart;
		}
	}

	//throw new Error( `Can't find ${track.id} '${chartDescr}' @ ${fromMixName}..${toMixName}` );
	throw new Error( `Can't find ${track.id} '${JSON.stringify(chartPattern)}' @ ${fromMixName}..${toMixName}` );
}


function FindChart( track, chartDescr, beforeMixID )
{
	var chartInfo = chartDescr.split( "-" );

	var chartSearchPattern = {};

	var mixRange = ["", ""];

	var mixName = chartInfo.length > 1  ?  chartInfo[ 1 ]  :  "";
	if( mixName !== "" )
		mixRange = [ mixName, mixName ];

	var localChartDescr = chartInfo [ 0 ];

	var arcadeTagIndex = OldArcadeTags_low.indexOf( localChartDescr.toLowerCase() );
	var specialTagIndex = OldSpecialTags_low.indexOf( localChartDescr.toLowerCase() );
	if( arcadeTagIndex >= 0  ||  specialTagIndex >= 0 )
	{
		const chartTag = ( arcadeTagIndex >= 0  ?  OldArcadeTags[ arcadeTagIndex ]  :  OldSpecialTags[ specialTagIndex ] );
		chartSearchPattern = { tag: chartTag };

		if ( mixName === "" )
			mixRange = [ mixesOrder[ 0 ], mixesOrder[ lastOldMixIndex ] ];
	}
	else
	{
		var result = localChartDescr.match( /(\D+)(\d+)$/ );
		if( result )
			chartSearchPattern = { tag: result[ 1 ], levelText: result[ 2 ] }
		else
			chartSearchPattern = { text: localChartDescr };

		if( mixName === "" )
			mixRange = [ mixesOrder[ firstNewMixIndex ], mixesOrder.at( mixesOrder.findIndex( m => m === beforeMixID ) - 1 ) ];
	}

	try
	{
		return FindChartEx( track, localChartDescr, chartSearchPattern, mixRange[ 0 ], mixRange[ 1 ] );
	}
	catch (e)
	{
		throw new Error( `Can't find ${track.id} chart '${chartDescr}' because of ${e}` );
	}

	//throw new Error( "Can't find " + track.id + " chart '" + chartDescr + "'" );
}


function ChartRealLevelNum( chart )
{
	if( chart.shared.estimatedLevelNum )
		return chart.shared.estimatedLevelNum;
	if( isNaN( chart.levelNum ) )
		return 0;
	return chart.levelNum;
}


function GetTrackFirstMix( track )
{
	if( track.fromMix )
		return track.fromMix;

	for( var mixID of mixesOrder )
		if( track.charts[ mixID ] )
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
	excludeContent: {},

	useLevelEstimations: false,

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

			if( chartFilter.type !== chart.shared.type )
				return;

			if( chart.shared.type !== COUPLE )
			{
				levelMatches = ( chartFilter.levelMin <= chart.levelNum  &&  chart.levelNum <= chartFilter.levelMax );
				if( ! chartFilter.useLevelEstimations )
				{
					realLevelMatches = levelMatches;
				}
				else
				{
					var chartRealLevelNum = ChartRealLevelNum( chart );
					realLevelMatches = ( chartFilter.levelMin <= chartRealLevelNum  &&  chartRealLevelNum <= chartFilter.levelMax );
				}

				if( ! realLevelMatches  &&  ! levelMatches )
					return;

				if( chart.isAmpass  &&  chartFilter.excludeContent["Ampass"] )
					return;

				if( chart.unlockDescr  &&  chartFilter.excludeContent["Unlock"] )
					return;

				if( ! chart.isAmpass  &&  ! chart.unlockDescr  &&  chartFilter.excludeContent["Common"] )
					return;
			}

			if( mixes[ chartFilter.mixID ].style === "old" )
				if( chart.zone != chartFilter.old.zone )
					return;

			if( chart.fromPatchIndex  &&  chartFilter.patchIndex < chart.fromPatchIndex )
				return;

			//item.isUnlocked = ! chart.unlockDescr  ||  chart.unlockPatchIndex;

			for( var mixID of chartFilter.excludeMixIDs )
			{
				//if( track.charts[ mixID ]  &&  _.findWhere( track.charts[ mixID ], { index: chart.index, } ) )
				if( track.charts[ mixID ] )  // временно, пока не будет установлено корректное соотношение между старыми и новыми сложностями для всех чартов
					return;
			}

			chartFilter.list.push( {
				chart: chart,
				track: track,
				realLevelMatches: realLevelMatches,
				levelMatches: levelMatches, } );
		}


		var charts = track.charts[ chartFilter.mixID ];
		if( typeof charts === 'undefined' )
			return;

		for( var chart of charts )
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
						return 10;
					if( item.realLevelMatches )
						return 20;
					if( item.levelMatches )
						return 30;
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

var initFuncs = []

function initTracklist()
{
	for( var f of initFuncs )
		f();
}
//chartFilter.ReadSettings();
