"use strict";


import _ from 'underscore';


import {
	SINGLE, DOUBLE, COUPLE,
	ORIGINAL, KPOP, WORLD, XROSS, JMUSIC,
	ARCADE, SPECIAL,
	SHORT, STANDARD, REMIX, FULL,
	OldArcadeTags, OldSpecialTags, OldTagTypes,
	NewTags,
} from './constants.js';

import {
	mixes, mixesOrder,
} from './mixes.js';

import {
	GetTrackFirstMix, FindChart,
} from './tracklist.js';


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

'=' означает, что набор чартов (т.е. трек) перенесли из самого свежего предыдущего микса,
    в котором он был. Если по какой-то причине надо взять набор чартов из конкретного микса
    (например, Fiesta), можно было бы указать '=Fiesta'.
'-S10' означает, что убрали чарт S10.
'@1.51' означает, что дальше описываются изменения в патче 1.51.
'D13' означает, что добавили чарт D13 (в патче).
'Dp??(x3)' означает, что добавили дабл перформанс, который является каплом на три человека.
'CoOp(x3)' означает кооп в новом стиле
'S13`cz' означает, что взят cz из последнего олд-стайл микса
'S13`cz-Zero' означает, что взят cz из зеро
	аналогично 'S15`S14-Fiesta' означает, что взяли S14 из фиесты и назначили оценку 15
	(если тип не менялся, можно просто указать число - S15`14-Fiesta)

ID треков берутся из
	https://en.wikipedia.org/wiki/List_of_Pump_It_Up_songs
	https://en.wikipedia.org/wiki/Pump_It_Up_(video_game_series)
	http://www.ph-online.net/cgi-bin/ib3/ikonboard.cgi?act=ST;f=18;t=13117

NX2-треклист со спешл-зоной - https://www.youtube.com/watch?v=fUjjee_1GmU
*/

const readableTracklist = {};


function extendObjWithNewKeys( obj1, obj2 )
{
	for( const key in obj2 )
		if( obj2.hasOwnProperty( key ) )
		{
			if( key in obj1 )
				throw new Error(`Duplicate key ${key} in objects`);
			obj1[ key ] = obj2[ key ];
		}
	return obj1;
}


import { newTunes__17__Phoenix } from './tracklist/17__Phoenix.js';
extendObjWithNewKeys( readableTracklist, newTunes__17__Phoenix );

import { newTunes__16__XX } from './tracklist/16__XX.js';
extendObjWithNewKeys( readableTracklist, newTunes__16__XX );

import { newTunes__15__Prime2 } from './tracklist/15__Prime2.js';
extendObjWithNewKeys( readableTracklist, newTunes__15__Prime2 );

import { newTunes__14__Prime } from './tracklist/14__Prime.js';
extendObjWithNewKeys( readableTracklist, newTunes__14__Prime );

import { newTunes__13__Fiesta2 } from './tracklist/13__Fiesta2.js';
extendObjWithNewKeys( readableTracklist, newTunes__13__Fiesta2 );

import { newTunes__12__Pro2 } from './tracklist/12__Pro2.js';
extendObjWithNewKeys( readableTracklist, newTunes__12__Pro2 );

import { newTunes__11__FiestaEx } from './tracklist/11__FiestaEx.js';
extendObjWithNewKeys( readableTracklist, newTunes__11__FiestaEx );

import { newTunes__10__Fiesta } from './tracklist/10__Fiesta.js';
extendObjWithNewKeys( readableTracklist, newTunes__10__Fiesta );

import { newTunes__0F__NXA } from './tracklist/0F__NXA.js';
extendObjWithNewKeys( readableTracklist, newTunes__0F__NXA );

import { newTunes__0E__NX2 } from './tracklist/0E__NX2.js';
extendObjWithNewKeys( readableTracklist, newTunes__0E__NX2 );

import { newTunes__0D__NX } from './tracklist/0D__NX.js';
extendObjWithNewKeys( readableTracklist, newTunes__0D__NX );

import { newTunes__0C__Zero } from './tracklist/0C__Zero.js';
extendObjWithNewKeys( readableTracklist, newTunes__0C__Zero );

import { newTunes__0B__Exceed2 } from './tracklist/0B__Exceed2.js';
extendObjWithNewKeys( readableTracklist, newTunes__0B__Exceed2 );

import { newTunes__0A__Exceed } from './tracklist/0A__Exceed.js';
extendObjWithNewKeys( readableTracklist, newTunes__0A__Exceed );

import { newTunes__09__Extra } from './tracklist/09__Extra.js';
extendObjWithNewKeys( readableTracklist, newTunes__09__Extra );

import { newTunes__08__Premiere3 } from './tracklist/08__Premiere3.js';
extendObjWithNewKeys( readableTracklist, newTunes__08__Premiere3 );

import { newTunes__07__Rebirth } from './tracklist/07__Rebirth.js';
extendObjWithNewKeys( readableTracklist, newTunes__07__Rebirth );


// 601	Oops! I Did it Again	Pump Premiere
// 602	Bye Bye Bye	Pump Premiere
// 603	I Need to Know	Pump Premiere
// 604	Let's Get Loud!	Pump Premiere
// 605	Mambo #5	Pump Premiere
// 606	Take on Me	Pump Premiere
// 607	A Cerca	Skank
// 608	De Volta ao Planeta	Jota Quest
// 609	Pensamento	Cidade Negra
// 610	Popozuda Rock 'n Roll	De Falla
// 611	Rebola Na Boa	Mr. Jam
// 612	Sempre Assim	Jota Quest
// 613	Uma Bomba	Braga Boys
// 614	Vaquiero Bom Demais	Limão Com Mel


import { newTunes__05__Perfect } from './tracklist/05__Perfect.js';
extendObjWithNewKeys( readableTracklist, newTunes__05__Perfect );

import { newTunes__04__OBG_SE } from './tracklist/04__OBG_SE.js';
extendObjWithNewKeys( readableTracklist, newTunes__04__OBG_SE );

import { newTunes__03__OBG } from './tracklist/03__OBG.js';
extendObjWithNewKeys( readableTracklist, newTunes__03__OBG );

import { newTunes__02__2nd } from './tracklist/02__2nd.js';
extendObjWithNewKeys( readableTracklist, newTunes__02__2nd );

import { newTunes__01__1st } from './tracklist/01__1st.js';
extendObjWithNewKeys( readableTracklist, newTunes__01__1st );

/*{
	title: "Narcisista Por Excelencia  [SHORT]", artist: "PXNDX", bpm: "164",
	pumpoutID: "",

	charts: {
		Prime: "S17 D18",
	},
},*/


export let tracklist = JSON.parse( JSON.stringify( readableTracklist ) );

/* unused:
{
	title: "May Remix", duration: REMIX,
	title: "Mr. Fire Fighter & Beat of the War 2", duration: REMIX,
},
*/

// On NX, both 15 and 16 were marked as one 'skull' mark. So the only way to determine level precisely
// is to pass it with predictable score and calculate level bonus multiplier manually.
var NX_GLITCH_LEVEL = "15/16"

// On NX, there were charts unavailable to play in normal mode, one needs a hack to pley them.
// So they had no official level, no easy access and should not be treated as common charts.
var NX_SPECIAL_ZONE_HIDDEN = "(-)"

// Some charts were marked as "?? DANGER", so they have no official estimation
var NO_OFFICIAL_ESTIMATION = "??"



function GetPreviousMixID( nextMixID )
{
	var mixIndex = mixesOrder.indexOf( nextMixID );
	console.assert( mixIndex > 0);
	return mixesOrder[ mixIndex - 1 ];
}


function ParseChartLevel( track, chart, chartText )
{
	// check for "instant level substitution" here
	// it is used not for a players re-estimation, but for official estimation, in case when number is not visible on arcade
	// for example, this is used for '??' levels, as well as for 15/16 levels on NX, which are marked with the same symbol
	var levelSubst_Match = chartText.match( /(.*)\s*\((\d+)\)$/ );   // '14 (15)'
	if( levelSubst_Match )
	{
		chart.levelText = levelSubst_Match[ 1 ];
		chart.levelNum = Number( levelSubst_Match[ 2 ] );
		if( isNaN( chart.levelNum ) )
			throw new Error( "Can't parse chart level of " + track.title + "  '" + chartText + "'" );
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
			if( isNaN( chart.shared.players ) )
				throw new Error( "Can't parse couple number of players for " + track.title + "  '" + chartText + "'" );
		}
		else
			console.assert( chart.shared.players === Number( couple_Match[ 2 ] ) );
		return;
	}

	if( chartText.match( /(\d+)\s*\((.+)\)/ ) )
		throw new Error( "Error in parsing " + track.title + "  '" + chartText + "'" );

	chart.levelText = chartText;
	chart.levelNum = Number( chartText );
	if( chartText !== NO_OFFICIAL_ESTIMATION  &&  chartText !== NX_GLITCH_LEVEL  &&  String( chart.levelNum ) !== chartText )
		throw new Error( "Error in parsing " + track.title + "  level '" + chartText + "'" );
	if( chart.levelNum < 1  ||  chart.levelNum > 30 )
		throw new Error( "Error in parsing " + track.title + "  level '" + chartText + "'" );
}


function GetSharedChart( track, idx )
{
	if( ! track.charts )
		track.charts = {};
	if( ! ( idx in track.charts ) )
		track.charts[ idx ] = { index: idx };
	return track.charts[ idx ];
}


function HandleNXLevel( chartText )
{
	var stars_Match = chartText.match( /\*(.*)$/ );
	if( stars_Match )
		return ( parseFloat( stars_Match[ 1 ] ) * 2 ).toString( 10 );

	var skulls_Match = chartText.match( /@(\d+)(.*)$/ );
	if( skulls_Match )
	{
		var skulls = parseInt( skulls_Match[ 1 ] );
		if( skulls == 1 )
			return "15/16" + skulls_Match[ 2 ];
		else
			return ( skulls + 15 ).toString( 10 ) + skulls_Match[ 2 ];
	}

	return chartText;
}


function PreprocessOldStyleStation( track, mixID, inCharts, zone, tags, oldSlotSharedCharts )
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
		if( mixID === "NX" )
			inCharts[ i ] = HandleNXLevel( inCharts[ i ] );
		ParseChartLevel( track, chart, inCharts[ i ] );

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
		else if( chart.shared.type !== chartType )
			throw new Error( track.name + " chart " + chart.text + " type inconsistent with previous mixes" );

		chart.zone = zone;
		result.push( chart );
	}

	return result;
}


function ParseNewStyleChart( track, chartText, sharedIndex )
{
	for( var prefix of NewTags )
		if( chartText.indexOf( prefix ) === 0 )
		{
			var chart = {};
			chart.shared = GetSharedChart( track, sharedIndex > 0  ?  sharedIndex  :  ++track.chartsCount );
			ParseChartLevel( track, chart, chartText.substring( prefix.length ) );
			chart.text = chartText;
			chart.tag = prefix;
			var chartType = ( chart.shared.players  ?  COUPLE  :  ( prefix[0] === "S"  ?  SINGLE  :  DOUBLE ) );
			if( ! chart.shared.type )
				chart.shared.type = chartType;
			else if( chart.shared.type !== chartType )
				throw new Error( `Track '${ track.name }' chart ${ chartText } type ${ chartType } is inconsistent with previous type ${ chart.shared.type }` );

			return chart;
		}
	throw new Error( "Unknown chart tag '" + chartText + "'" );
}


function PreprocessNewStyleChart( track, trackID, result, chartDescr, mixID, patchIndex )
{
	var descrTokens = chartDescr.split( "." );
	var chartText = descrTokens[ 0 ];
	descrTokens = descrTokens.slice( 1 );

	var sharedIndex = 0;
	var prevChart;

	var prevChartDelimPos = chartText.indexOf( "`" );
	if( prevChartDelimPos > -1 )
	{
		var prevChartText = chartText.substr( prevChartDelimPos + 1 );
		chartText = chartText.substr( 0, prevChartDelimPos );
		if( ! isNaN( prevChartText[ 0 ] ) )  // to find S23 in re-estimation S22`23
		{
			// take type from chartText (S or D etc) and add it to token
			var levelMatches = chartText.match( /(.*?)(\d+)$/ );
			if( levelMatches )
				prevChartText = levelMatches[ 1 ] + prevChartText;
		}

		prevChart = FindChart( track, prevChartText, mixID );
		sharedIndex = prevChart.shared.index;
	}

	var chart = ParseNewStyleChart( track, chartText, sharedIndex );
	if( patchIndex > 0 )
		chart.fromPatchIndex = patchIndex;

	if( prevChart )
	{
		if( prevChart.type !== chart.type )
			throw new Error( `Track ${ trackID } chart ${ chart.text } type is inconsistent with previous type ${ prevChart.text }` );
		chart.fromMixID = prevChart.fromMixID;
	}
	else
	{
		chart.fromMixID = mixID;
	}


	for( var token of descrTokens )
		if( token === "new" )
			;
		else if( token === "lock"  ||  token === "?lock" )
			chart.isLocked = true;
		else if( token === "ampass" )
			chart.isAmpass = true;
		else if( token === "ucs" )
			chart.isUCS = true;
		else
			throw new Error( `Unknown token '${ token }' for track ${ trackID } chart ${ chartText }` );


	var chartIndexToReplace = -1;
	if( prevChart )
		chartIndexToReplace = _.findIndex( result, function( item ) { return item.shared.index === prevChart.shared.index; } );

	if( chartIndexToReplace >= 0 )
		result[ chartIndexToReplace ] = chart;
	else
		result.push( chart );


	return chart;
}


function RemoveNewStyleChart( track, mixID, chartText )
{
	var index = _.findIndex( track.charts[ mixID ], function( item ) { return item.text === chartText; } );
	if( index < 0)
		throw new Error( "Can't find '" + track.title + "'' " + chartText + " chart @ " + mixID );
	if( index != _.findLastIndex( track.charts[ mixID ], function( item ) { return item.text === chartText; } ) )
		throw new Error( "Several '" + track.title + "'' " + chartText + " charts @ " + mixID );
	track.charts[ mixID ].splice( index, 1 );
}


function CopyCharts( track, mixID, fromMixID, patchIndex )
{
	console.assert( track.charts[ mixID ].length === 0 );

	if( fromMixID === "" )
	{
		var mixIndex = mixesOrder.indexOf( mixID );
		for( var i = mixIndex - 1;  i >= 0;  --i )
			if( track.charts[ mixesOrder[ i ] ] )
			{
				fromMixID = mixesOrder[ i ];
				break;
			}
	}

	console.assert( track.charts[ fromMixID ] );
	track.charts[ mixID ] = JSON.parse( JSON.stringify( track.charts[ fromMixID ] ) );
	for( var chart of track.charts[ mixID ] )
	{
		if( patchIndex > 0 )
			chart.fromPatchIndex = patchIndex;
		else
			delete chart.fromPatchIndex;
		delete chart.isLocked;
		delete chart.isAmpass;
		delete chart.isUCS;
	}
}


function ParsePatchIndex( mixID, patchName )
{
	var patchIndex = mixes[ mixID ].patches.indexOf( patchName );
	if( patchIndex < 0 )
		throw new Error( `Invalid patch '${ patchName }' specified for mix '${ mixID }'` );
	return patchIndex;
}


function PreprocessNewStyleStringCharts( track, trackID, mixID )
{
	var chartsStr = track.charts[ mixID ];
	if( ! chartsStr )
		return;

	track.charts[ mixID ] = [];

	var charts = chartsStr.split( " " );
	var patchIndex = mixes[ mixID ].patches ? 0 : -1;
	for( var token of charts )
	{
		if( token === ""  ||  token[0] === "_" )
		{
		}
		else if( token[0] === '=' )
		{
			CopyCharts( track, mixID, token.substr( 1 ), patchIndex );
		}
		else if( token[0] === '+' )
		{
			var chart = PreprocessNewStyleChart( track, trackID, track.charts[ mixID ], token.substr( 1 ), mixID, patchIndex );
		}
		else if( token[0] === 'S'  ||  token[0] === 'D'  ||  token.substr(0, 4) === 'CoOp' )  // implicit '+' is considered
		{
			var chart = PreprocessNewStyleChart( track, trackID, track.charts[ mixID ], token, mixID, patchIndex );
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
			throw new Error( `Unrecognized chart token '${ token }' in track '${ id }'` );
		}
	}

	var chartLabels = new Set();
	for( var chart of track.charts[ mixID ] )
	{
		if( chartLabels.has( chart.text ) )
			throw new Error( `Duplicate chart '${ chart.text }' in track '${ id }' on mix ${ mixID }` );
		chartLabels.add( chart.text );
	}
}


function PreprocessOldStyleListCharts( track, mixID, oldSlotSharedCharts )
{
	var mix = mixes[ mixID ];
	console.assert( mix.style === "old"  ||  ! track.charts[ mixID ] );

	var arcadeCharts = track.charts[ mixID ];
	var specialCharts = track.charts[ mixID + "_" ];
	if( arcadeCharts  ||  specialCharts )
	{
		if( track.duration !== REMIX  &&  track.duration !== FULL )
			track.charts[ mixID ] = PreprocessOldStyleStation( track, mixID, arcadeCharts, ARCADE, OldArcadeTags, oldSlotSharedCharts )
		                           .concat(
			                       PreprocessOldStyleStation( track, mixID, specialCharts, SPECIAL, OldSpecialTags, oldSlotSharedCharts )
			                    );
		else
			track.charts[ mixID ] = PreprocessOldStyleStation( track, mixID, specialCharts, SPECIAL, OldArcadeTags, oldSlotSharedCharts );

		console.assert( track.charts[ mixID ].length > 0 );

		delete track.charts[ mixID + "_" ];
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


function ValidatedMixAndVersion( k )
{
	var arr = k.split( "@" );
	if( arr.length > 2 )
		throw new Error( `Mix-patch format '${ k }' is invalid` );

	var mix = mixes[ arr[ 0 ] ];
	if( ! mix )
		throw new Error( `Mix '${ arr[ 0 ] }' can't be found` );

	if( arr.length == 1 )
		return arr[ 0 ] + "@" + mix.patches[ 0 ];

	if( mix.patches.indexOf( arr[ 1 ] ) < 0 )
		throw new Error( `Mix '${ arr[ 0 ] }' patch '${ arr[ 1 ] }' can't be found` );

	return k;
}


var pumpoutMap = {}
var arcadeMap = {}

function PreprocessTrack( track )
{
	const trackID = track.id;

	if( trackID.match(/[^a-zA-Z\d_]/g) )
		throw new Error( `Track ID '${ trackID }' contains invalid characters` );

	if( ! trackID.match(/^[\d][\dA-F]__/g) )
		throw new Error( `Track ID '${ trackID }' has invalid format` );

	for( var cutType of ["FULL", "REMIX", "SHORT"] )
		if( trackID.endsWith( cutType ) && ! trackID.endsWith( `__${ cutType }` ) )
			throw new Error( `Track ID '${ trackID }' has invalid cut format` );


	if( ! track.duration )
		track.duration = GuessDurationFromTitle( track.title );

	if( ! track.artist )
		throw new Error( `Track ${ trackID } has no artist specified` );

	if( ! track.channel )
		track.channel = knownArtists[ track.artist ];
	else if( knownArtists[ track.artist ] === track.channel )
		console.warn( `Track ${ trackID } artist '${ track.artist }' channel is already defined as '${ track.channel }'` );

	if( [ ORIGINAL, WORLD, KPOP, JMUSIC, XROSS, "TODO" ].indexOf( track.channel ) < 0 )
		throw new Error( `Track ${ trackID } has no channel specified` );

	if( ! track.bpm )
		throw new Error( `Track ${ trackID } has no bpm specified` );

	if( track.sortingID === "" )
		delete track.sortingID;

	delete track.sortingBetween;

	if( track.pumpoutID )
	{
		if( track.pumpoutID !== "" )
		{
			if( track.pumpoutID <= 0  ||  track.pumpoutID > 1000 )
				throw new Error( `Invalid pumpout ID '${ track.pumpoutID }' in track ${ trackID }` );

			if( pumpoutMap[ track.pumpoutID ] )
				throw new Error( `Duplicate pumpout ID '${ track.pumpoutID }' in tracks ${ trackID } and ${ pumpoutMap[ track.pumpoutID ] }` );

			pumpoutMap[ track.pumpoutID ] = trackID;
		}
		delete track.pumpoutID;
	}

	if( track.arcadeID )
	{
		if( arcadeMap[ track.arcadeID ] )
			throw new Error( `Duplicate arcade ID '${ track.arcadeID }' in track ${ trackID }` );
		arcadeMap[ track.arcadeID ] = true;
	}

	if( typeof track.altID === 'string' )
		track.altID = [ track.altID ];

	track.chartsCount = 0;

	var oldSlotSharedCharts = {};
	for( var mixID of mixesOrder )
	{
		if( typeof track.charts[ mixID ] === "string" )
			PreprocessNewStyleStringCharts( track, trackID, mixID );
		else
			PreprocessOldStyleListCharts( track, mixID, oldSlotSharedCharts );
	}


	var mixRegions = [];
	if( mixes[ GetTrackFirstMix( track ) ] )
		mixRegions = mixes[ GetTrackFirstMix( track ) ].regions;
	if( track.region  &&  ( ! mixRegions  || mixRegions.indexOf( track.region ) < 0 ) )
		throw new Error( `Unavailable region '${ track.region }' for track ${ trackID } in mix ${ track.fromMixID }.` );

	if( track.changes )
	{
		var changes = {}
		for( var k in track.changes )
			changes[ ValidatedMixAndVersion( k ) ] = track.changes[ k ];
		track.changes = changes;
	}
}


function validateTrackSortingBetween( tracklist, trackID )
{
	const track = tracklist[ trackID ];

	const prevID = track.sortingBetween[ 0 ];
	if( prevID === null )
	{
		if( ! track.sortingID  &&  ! track.arcadeID )
			throw new Error( `Track '${trackID}' is in the start of sorting chain, but doesn't have arcadeID or sortingID` );
	}
	else
	{
		if( track.sortingID )
			throw new Error( `Track '${trackID }' is in the middle of sorting chain, but has sortingID` );
		const prevTrack = tracklist[ prevID ];
		if( ! prevTrack )
			throw new Error( `Track '${prevID}' referred in sorting from '${trackID}' doesn't exists` );
		if( ! prevTrack.sortingBetween )
			throw new Error( `Track '${prevID}' referred in sorting from '${trackID}' doesn't have sortingBetween` );
		if( prevTrack.sortingBetween[ 1 ] !== trackID )
			throw new Error( `Track '${prevID}' referred in sorting from '${trackID}' refers back to '${prevTrack.sortingBetween[ 1 ]}' instead` );
	}

	const nextID = track.sortingBetween[ 1 ];
	if( nextID === null )
	{
		if( prevID === null )
			throw new Error( `Track '${trackID}' can't have both empty entries of sortingBetween` );
	}
	else
	{
		const nextTrack = tracklist[ nextID ];		
		if( ! nextTrack )
			throw new Error( `Track '${nextID}' referred in sorting from '${trackID}' doesn't exists` );
		if( ! nextTrack.sortingBetween )
			throw new Error( `Track '${nextID}' referred in sorting from '${trackID}' doesn't have sortingBetween` );
		if( nextTrack.sortingBetween[ 0 ] !== trackID )
			throw new Error( `Track '${nextID}' referred in sorting from '${trackID}' refers back to '${nextTrack.sortingBetween[ 0 ]}' instead` );
	}
}


function generateSortingIdsForChain( tracklist, initialID )
{
	var sortingPrefix = tracklist[ initialID ].sortingID  ||  tracklist[ initialID ].arcadeID;
	var counter = 1;
	var trackID = tracklist[ initialID ].sortingBetween[ 1 ];
	while( trackID !== null )
	{
		const track = tracklist[ trackID ];
		if( track.sortingID )
			throw new Error( `Track ${trackID} has already assigned sortingID ${track.sortingID}` );

		track.sortingID = `${sortingPrefix}__${String(counter).padStart(3, '0')}`;
		trackID = track.sortingBetween[ 1 ];
		++counter;
	}

	console.log( `Sorted chain: '${initialID}' as '${sortingPrefix}__*' of length ${counter}` );
}


function GenerateSortingIDs( tracklist )
{
	var sortingChains = [];

	for( const trackID in tracklist )
	{
		if( tracklist[ trackID ].sortingBetween )
		{
			validateTrackSortingBetween( tracklist, trackID );
			if( tracklist[ trackID ].sortingBetween[ 0 ] === null )
				sortingChains.push( trackID );
		}
	}

	for( const trackID of sortingChains )
		generateSortingIdsForChain( tracklist, trackID );
}


export function PreprocessTracklist()
{
	GenerateSortingIDs( tracklist );

	for( var trackID in tracklist )
	{
		tracklist[ trackID ].id = trackID;
		PreprocessTrack( tracklist[ trackID ] );
	}
}
