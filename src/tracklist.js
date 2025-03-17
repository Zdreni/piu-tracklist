"use strict";


import _ from 'underscore';

import { OldArcadeTags, OldArcadeTags_low, OldSpecialTags, OldSpecialTags_low } from './constants.js';
import { mixesOrder, firstNewMixIndex, lowCaseMixesOrder, lastOldMixIndex } from './mixes.js';


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


export function FindTrack( tracklist, trackID )
{
	const track = tracklist[ trackID ];
	if( ! track )
		throw new Error( `Can't find track '${trackID}'` );

	return track;
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
export function FindChartsWithIndexInMixesRange( track, chartIndex, mixIndexFrom, mixIndexTo )
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
			const chart = _.findWhere( track.charts[ mixesOrder[ mixID ] ], chartPattern );
			if( chart )
				return chart;
		}
	}

	//throw new Error( `Can't find ${track.id} '${chartDescr}' @ ${fromMixName}..${toMixName}` );
	throw new Error( `Can't find ${track.id} '${JSON.stringify(chartPattern)}' @ ${fromMixName}..${toMixName}` );
}


export function FindChart( track, chartDescr, beforeMixID )
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
		console.log(e);
		throw new Error( `Can't find ${track.id} chart '${chartDescr}' because of ${e}` );
	}
}


export function FindSharedChartByDescr( tracklist, chartDescr )
{
	const descrArr = chartDescr.split( /\s+/ );
	if( descrArr.length != 2 )
		throw new Error(`'${chartDescr}' is invalid description of shared chart`);

	const trackID = descrArr[ 0 ];
	const chartLabelAndMix = descrArr[ 1 ];

	const chartLabelArr = chartLabelAndMix.split( '.' );
	if( chartLabelArr.length > 2 )
		throw new Error(`'${chartLabel}' is invalid label`);

	const chartLabel = chartLabelArr[ 0 ];
	const mixLabel = chartLabelArr.length > 1  ?  chartLabelArr[ 1 ]  :  '';
	const mixes = mixLabel !== ''  ?  [ mixLabel ]  :  mixesOrder;
	//const mixes = chartLabelArr.length > 1  ?  [ chartLabelArr[ 1 ] ]  :  mixesOrder;

	const track = FindTrack( tracklist, trackID );

	const resultIndexes = [];
	for( var mixID of mixes )
	{
		if( track.charts[ mixID ] )
		{
			var chart = _.findWhere( track.charts[ mixID ], { text: chartLabel } );
			if( chart  &&  ! resultIndexes.includes( chart.shared.index ) )
				resultIndexes.push( chart.shared.index );
		}
	}

	if( resultIndexes.length == 0 )
		throw new Error(`Can't find chart ${chartLabelAndMix} in track ${trackID}`);

	if( resultIndexes.length > 1 )
		throw new Error(`Chart ${chartLabelAndMix} in track ${trackID} is ambiguous`);

	return track.charts[ resultIndexes[ 0 ] ];
}


function ChartRealLevelNum( chart )
{
	if( chart.shared.estimatedLevelNum )
		return chart.shared.estimatedLevelNum;
	if( isNaN( chart.levelNum ) )
		return 0;
	return chart.levelNum;
}


export function GetTrackFirstMix( track )
{
	if( track.fromMix )
		return track.fromMix;

	for( var mixID of mixesOrder )
		if( track.charts[ mixID ] )
			return mixID;
}
