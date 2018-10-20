"use strict";

var separateBPMs =
[
	{                      chart: "Mexi Mexi  CZ", ratio: "2", mixes: "Exceed2" },

	{                       chart: "Gun Rock  NM", ratio: "2", mixes: "..FiestaEX" },
	{                              chart: "N  CZ", ratio: "2", mixes: "..FiestaEX" },
	{                    chart: "Naissance 2  aNM", bpm: "129 - 258" },

	{                    chart: "Compunction  NM", bpm: "133 - 177" },
	{                  chart: "Feel the Soul  HD", ratio: "2" },
	{                  chart: "Feel the Soul  CZ", bpm: "94 - 141" },
	{                  chart: "Feel the Soul  NM", bpm: "94 - 141" },
	{   chart: "Handsome Character that Pass  CZ", bpm: "125 - 250" },
	{                      chart: "Maelstrom  CZ", bpm: "102 - 204" },
	{                      chart: "Maelstrom  NM", bpm: "102 - 204" },

	{                chart: "Big Metra Remix  CZ", ratio: "2", mixes: "..Prime2" },
	{                chart: "Big Metra Remix  NM", ratio: "2", mixes: "FiestaEX..Prime2" },
	{                        chart: "Forward  NM", ratio: "2", mixes: "..FiestaEX" },
	{                 chart: "Panuelito Rojo  NM", ratio: "2", mixes: "..Prime2" },
	{                  chart: "Pump Breakers  NM", bpm: "120 - 240", mixes: "NXA" },
	{   chart: "Trato de no Trabarme  [FULL]  CZ", ratio: "2", mixes: "..Prime2" },
	{   chart: "Trato de no Trabarme  [FULL]  NM", ratio: "2", mixes: "..Prime2" },

	{                      chart: "Good Life  S15", bpm: "98 - 49" },
	{                      chart: "Good Life  D16", bpm: "98 - 147" },

	{    chart: "Mission Possible -Blowback-  S18", bpm: "122, ends 160" },

	{                       chart: "Gargoyle  S18", bpm: "150, ends 195" },
	{             chart: "We Will Meet Again  S14", bpm: "118..177" },
	{                      chart: "Yeo rae a  S13", ratio: "0.5" },

	{                   chart: "Star Command  S12", ratio: "1.25" },

	{ chart: "Twist of Fate (feat. Ruriling)  S18", bpm: "141..28" },
	{ chart: "Twist of Fate (feat. Ruriling)  D20", bpm: "141..28" },
];


function GetMixesRange( text )
{
	var range = [ 0, mixesOrder.length ];

	if( text )
	{
		var descr = text.split( ".." );
		console.assert( descr.length <= 2 );
		if( descr[ 0 ] != "" )
		{
			range[ 0 ] = mixesOrder.indexOf( descr[ 0 ] );
			console.assert( 0 <= range[ 0 ] );
		}

		if( descr.length > 1 )
		{
			if ( descr[ 1 ] != "" )
			{
				range[ 1 ] = mixesOrder.indexOf( descr[ 1 ] );
				console.assert( range[ 0 ] < range[ 1 ] );
			}
		}
		else
			range[ 1 ] = range[ 0 ] + 1;
	}

	return range;
}


function SetChartBPM( descr )
{
	console.assert( descr.bpm  || descr.ratio );
	if( descr.ratio )
		console.assert( ! isNaN( Number( descr.ratio ) ) );

	var i = descr.chart.lastIndexOf( "  " );
	var trackName = descr.chart.substr( 0, i );
	var chartDescr = descr.chart.substr( i + 2 );

	var track = FindTrack( tracklist, trackName );
	var chart = FindChart( track, chartDescr );
	var mixesRange = GetMixesRange( descr.mixes );

	var charts = FindChartsWithIndexInMixesRange( track, chart.shared.index, mixesRange[ 0 ], mixesRange[ 1 ] );
	if( charts.length === 0 )
		throw "Can't find " + descr.chart + " in range [" + mixesOrder[ mixesRange[ 0 ] ] + ".." + mixesOrder[ mixesRange[ 1 ] ] + "]";

	for( var chart of charts )
	{
		if( descr.bpm )
		{
			chart.bpm = descr.bpm;
		}
		else if( descr.ratio )
		{
			var bpmNum = Number( track.bpm );
			console.assert( ! isNaN( bpmNum ) );
			chart.bpm = String( bpmNum * Number( descr.ratio ) );
		}
	}
}


function ApplyBPMs()
{
	for( var item of separateBPMs )
		SetChartBPM( item );
}

/*


стар комманд s12 в районе 190
twist king d15 медленнее
некоторые dp3
*/
