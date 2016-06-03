"use strict";


var mixID = "Prime";  // mix we will use to play

var trackAppearedMixesIDs = [ "Fiesta2", "Prime" ];  // mixes, on which allowed _tracks_ were appeared
function TrackIsAllowedByMix( track )
{
	if( typeof trackAppearedMixesIDs != 'object'  ||  trackAppearedMixesIDs.length === 0 )
		return true;

	return ( trackAppearedMixesIDs.indexOf( GetTrackFirstMix( track ) ) >= 0 );

}

//var chartAppearedMixesIDs = [ "Fiesta2", "Prime" ];  // mixes, on which allowed _charts_ were appeared
function ChartIsAllowedByMix( chart )
{
	if( typeof chartAppearedMixesIDs != 'object'  ||  chartAppearedMixesIDs.length === 0 )
		return true;

	return ( chartAppearedMixesIDs.indexOf( chart.fromMixID ) >= 0 );

}

function IsNonEmptyAndContains( table, item )
{
	if( typeof table != 'object' )
		return false;

	if( table.length === 0 )
		return false;

	return( table.indexOf( item ) < 0 );
}

function GetCharts( request )
{
	var result = [];
	for( var trackID in tracklist )
	{
		var track = tracklist[ trackID ];
	
		if( IsNonEmptyAndContains( request.trackAppearedMixesIDs, GetTrackFirstMix( track ) ) )
			continue;
	
		if( request.duration  &&  track.duration != request.duration )
			continue;

		if( IsNonEmptyAndContains( request.excludeTracks, track.title ) )
			continue;

		var mixCharts = track[ request.mixID ];
		if( ! mixCharts )
			continue;
	
		for( var chart of mixCharts )
		{
			chart.track = track;
			if( IsNonEmptyAndContains( request.chartAppearedMixesIDs, chart.fromMixID ) )
				continue;

			if( request.type  &&  chart.type != request.type )
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

var lowerLevel = 16;
var upperLevel = 20;

var showUCS = false;
var showUnlocks = false;

var tournamentRange = {
	duration: "Standard",
	showUCS: false,
	showUnlocks: false,
	mixID: "Prime",
	trackAppearedMixesIDs: [ "Fiesta2", "Prime" ],
	excludeTracks: [ "Log-In" ], // offsync
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


var S15 = { __proto__: singles, level: 15 };
var S16 = { __proto__: singles, level: 16 };
var S17 = { __proto__: singles, level: 17 };
var S18 = { __proto__: singles, level: 18 };
var S19 = { __proto__: singles, level: 19 };
var S20 = { __proto__: singles, level: 20 };
var S21 = { __proto__: singles, level: 21 };

var D15 = { __proto__: doubles, level: 15 };
var D16 = { __proto__: doubles, level: 16 };
var D17 = { __proto__: doubles, level: 17 };
var D18 = { __proto__: doubles, level: 18 };
var D19 = { __proto__: doubles, level: 19 };
var D20 = { __proto__: doubles, level: 20 };
var D21 = { __proto__: doubles, level: 21 };

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

Stage(  "8 -> 4+4",  S15, D16, R17);
Stage("4+4 -> 4+2",  S17, D17, R18);
Stage("4+2 -> 2+4",  S18, D19, R19);
Stage("2+4 -> 2+2",  S18, D19, R20);
Stage("2+2 -> 2+1",  S19, D20, R21);
Stage("2+1 -> 1+2",  S20, D20, R21);
Stage("1+2 -> 1+1",  S20, D21, R21);
Stage("1+1 -> 1"  ,  S21, D21, R21);

