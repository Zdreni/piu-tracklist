"use strict";

var separateBPMs =
[
	{                      chart: "08__Mexi_Mexi  CZ", ratio: "2", mixes: "Exceed2" },

	{                       chart: "0D__Gun_Rock  NM", ratio: "2", mixes: "..FiestaEX" },
	{                              chart: "05__N  CZ", ratio: "2", mixes: "..FiestaEX" },
	{                    chart: "0A__Naissance_2  aNM", bpm: "129 - 258" },

	{                    chart: "0E__Compunction  NM", bpm: "133 - 177" },
	{                  chart: "0E__Feel_the_Soul  HD", ratio: "2" },
	{                  chart: "0E__Feel_the_Soul  CZ", bpm: "94 - 141" },
	{                  chart: "0E__Feel_the_Soul  NM", bpm: "94 - 141" },
	{   chart: "0D__Handsome_Character_That_Pass  CZ", bpm: "125 - 250" },
	{                      chart: "0E__Maelstrom  CZ", bpm: "102 - 204" },
	{                      chart: "0E__Maelstrom  NM", bpm: "102 - 204" },

	{                chart: "0F__Big_Metra_Remix  CZ", ratio: "2", mixes: "..Prime2" },
	{                chart: "0F__Big_Metra_Remix  NM", ratio: "2", mixes: "FiestaEX..Prime2" },
	{                        chart: "0F__Forward  NM", ratio: "2", mixes: "..FiestaEX" },
	{                 chart: "0F__Panuelito_Rojo  NM", ratio: "2", mixes: "..Prime2" },
	{                  chart: "0F__Pump_Breakers  NM", bpm: "120 - 240", mixes: "NXA" },
	{     chart: "0F__Trato_De_No_Trabarme__FULL  CZ", ratio: "2", mixes: "..Prime2" },
	{     chart: "0F__Trato_De_No_Trabarme__FULL  NM", ratio: "2", mixes: "..Prime2" },

	{                      chart: "10__Good_Life  S15", bpm: "98 - 49" },
	{                      chart: "10__Good_Life  D16", bpm: "98 - 147" },

	{      chart: "10__Mission_Possible_Blowback  S18", bpm: "122, ends 160" },

	// notes: {                       chart: "Gargoyle  S18", bpm: "150, ends 195" },
	{             chart: "07__We_Will_Meet_Again  S14", bpm: "118..177" },
	{                      chart: "13__Yeo_Rae_A  S13", ratio: "0.5" },

	{                   chart: "12__Star_Command  S12", ratio: "1.25" },

	// notes: { chart: "Twist of Fate (feat. Ruriling)  S18", bpm: "141..28" },
	// notes: { chart: "Twist of Fate (feat. Ruriling)  D20", bpm: "141..28" },
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
		throw new Error( "Can't find " + descr.chart + " in range [" + mixesOrder[ mixesRange[ 0 ] ] + ".." + mixesOrder[ mixesRange[ 1 ] ] + "]" );

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


initFuncs.push( ApplyBPMs );

/*


twist king d15 медленнее
некоторые dp3
*/
