"use strict";


function IsNonEmpty( table )
{
	return ( typeof table === 'object'  &&  table.length > 0 );
}

function IsEmpty( table )
{
	return ( typeof table != 'object'  ||  table.length === 0 );
}

function IsEmptyOrContains( table, item )
{
	return IsEmpty( table )  ||  table.indexOf( item ) >= 0;
}


function GetCharts( request )
{
	var result = [];
	for( var trackID in tracklist )
	{
		var track = tracklist[ trackID ];
	
		if( ! IsEmptyOrContains( request.trackAppearedMixesIDs, GetTrackFirstMix( track ) ) )
			continue;
	
		if( request.duration  &&  track.duration != request.duration )
			continue;

		if( IsEmptyOrContains( request.excludeTracks, track.title ) )
			continue;

		var mixCharts = track[ request.mixID ];
		if( ! mixCharts )
			continue;
	
		for( var chart of mixCharts )
		{
			chart.track = track;
			if( ! IsEmptyOrContains( request.chartAppearedMixesIDs, chart.fromMixID ) )
				continue;

			if( request.type  &&  chart.shared.type != request.type )
				continue;
	
			var chartIsUnlock = chart.unlockDescr  &&  ! chart.unlockPatchIndex;
			if( chartIsUnlock  &&  ! request.showUnlocks )
				continue;
	
			if( chart.isUCS  &&  ! request.showUCS )
				continue;

			if( request.level === chart.levelNum )
				result.push( chart );
		}
	}

	return result;
}

function LogCharts( request )
{
	var charts = GetCharts( request );
	charts.sort( function( c1, c2 ) { return c1.track.title.localeCompare( c2.track.title ); } );
	for( var chart of charts )
	{
		console.log( chart.track.title + "  " + chart.text );
	}
}

function shuffled(array)
{
	var currentIndex = array.length;

	// While there remain elements to shuffle...
	while (currentIndex !== 0)
	{
		// Pick a remaining element...
		var randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		var temp = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temp;
	}

	return array;
}

var lowerLevel = 18;
var upperLevel = 28;

//var showUCS = false;
//var showUnlocks = false;

var tournamentRange = {
	duration: "Standard",
	showUCS: true,
	showUnlocks: true,
	showReestimatedCharts: false,  // to show charts which had different level on some mixes
	mixID: "XX",  // mix we will use to play
	trackAppearedMixesIDs: [ "Prime", "Prime2" ],  // mixes, on which allowed _tracks_ were appeared
	excludeTracks: [
		//"Log-In", // offsync
		//"Nobody", // lot of stops
		//"Move That Body!", // tournament
		//"Super Fantasy", // tournament
	]
}

var singles = {
	__proto__: tournamentRange,
	type: "Single",
}

var doubles = {
	__proto__: tournamentRange,
	type: "Double",
}

var any = {
	__proto__: tournamentRange,
}


var S11 = { __proto__: singles, level: 11 };
var S12 = { __proto__: singles, level: 12 };
var S13 = { __proto__: singles, level: 13 };
var S14 = { __proto__: singles, level: 14 };
var S15 = { __proto__: singles, level: 15 };
var S16 = { __proto__: singles, level: 16 };
var S17 = { __proto__: singles, level: 17 };
var S18 = { __proto__: singles, level: 18 };
var S19 = { __proto__: singles, level: 19 };
var S20 = { __proto__: singles, level: 20 };
var S21 = { __proto__: singles, level: 21 };
var S22 = { __proto__: singles, level: 22 };
var S23 = { __proto__: singles, level: 23 };
var S24 = { __proto__: singles, level: 24 };
var S25 = { __proto__: singles, level: 25 };

var D13 = { __proto__: doubles, level: 13 };
var D14 = { __proto__: doubles, level: 14 };
var D15 = { __proto__: doubles, level: 15 };
var D16 = { __proto__: doubles, level: 16 };
var D17 = { __proto__: doubles, level: 17 };
var D18 = { __proto__: doubles, level: 18 };
var D19 = { __proto__: doubles, level: 19 };
var D20 = { __proto__: doubles, level: 20 };
var D21 = { __proto__: doubles, level: 21 };
var D22 = { __proto__: doubles, level: 22 };
var D23 = { __proto__: doubles, level: 23 };
var D24 = { __proto__: doubles, level: 24 };
var D25 = { __proto__: doubles, level: 25 };

var R15 = { __proto__: any, level: 15 };
var R16 = { __proto__: any, level: 16 };
var R17 = { __proto__: any, level: 17 };
var R18 = { __proto__: any, level: 18 };
var R19 = { __proto__: any, level: 19 };
var R20 = { __proto__: any, level: 20 };
var R21 = { __proto__: any, level: 21 };

var sets = {};

function Stage(name, t1, t2, t3)
{
	sets[ name + " (a)" ] = GetCharts( t1 );
	sets[ name + " (b)" ] = GetCharts( t2 );
	sets[ name + " (c)" ] = GetCharts( t3 );
}

if( true )  // range 15-20
{
	Stage(  "8 -> 4+4",  S15, D16, R16);
	Stage("4+4 -> 4+2",  S17, D17, R18);
	Stage("4+2 -> 2+4",  S17, D18, R18);
	Stage("2+4 -> 2+2",  S18, D19, R20);
	Stage("2+2 -> 2+1",  S19, D19, R20);
	Stage("2+1 -> 1+2",  S19, D20, R20);
	Stage("1+2 -> 1+1",  S19, D20, R20);
	Stage("1+1 -> 1"  ,  S20, D20, R20);
}
else  // range 15-21
{
	Stage(  "8 -> 4+4",  S15, D16, R17);
	Stage("4+4 -> 4+2",  S17, D17, R18);
	Stage("4+2 -> 2+4",  S18, D19, R19);
	Stage("2+4 -> 2+2",  S18, D19, R20);
	Stage("2+2 -> 2+1",  S19, D20, R21);
	Stage("2+1 -> 1+2",  S20, D20, R21);
	Stage("1+2 -> 1+1",  S20, D21, R21);
	Stage("1+1 -> 1"  ,  S21, D21, R21);
}
