"use strict";


// 'shortenData == true' means it's dump for Step It Up with reduced number of fields
// 'shortenData == false' means it's dump for simple python script, so structure is more verbose and straightforward


function JStr( obj )
{
	return JSON.stringify( obj, null, 1 ).replace( "<", "&lt;" ).replace( ">", "&gt;" )
}


function JStrNoQuotes( obj )
{
	var jstr = JStr( obj )
	return jstr.substring( 3, jstr.length - 2 )
}


// converts dictionary to array through lambda, which produce array item from both key and value
function DictToArr( dict, func )
{
	return Object.keys( dict ).map( function ( key ) {  return func( key, dict[ key ] );  } );
}


function CopyChartWithRemovedObviousFieldsForApp( track, mixID, chart )
{
	if( String( chart.levelNum ) === chart.levelText )
		delete chart.levelNum;

	var newTagIndex = NewTags.indexOf( chart.tag );
	if( newTagIndex >= 0 )
	{
		if( NewTagTypes[ newTagIndex ] === chart.type )
			delete chart.type;
	}

	var oldArcadeTagIndex = OldArcadeTags.indexOf( chart.tag );
	if( oldArcadeTagIndex >= 0 )
	{
		if( track.duration === STANDARD  &&  chart.zone === ARCADE )
			delete chart.zone;
		if( ( track.duration === REMIX  ||  track.duration === FULL )  &&  chart.zone === SPECIAL )
			delete chart.zone;
		if( OldTagTypes[ oldArcadeTagIndex ] === chart.type )
			delete chart.type;
	}

	var oldSpecialTagIndex = OldSpecialTags.indexOf( chart.tag );
	if( oldSpecialTagIndex >= 0 )
	{
		if( chart.zone === SPECIAL )
			delete chart.zone;
		if( OldTagTypes[ oldSpecialTagIndex ] === chart.type )
			delete chart.type;
	}

	if( chart.levelText  &&  chart.levelText !== "" )
		chart.text = chart.tag + "-" + chart.levelText;
	delete chart.tag;
	delete chart.levelText;
	if( isNaN( chart.levelNum )  ||  chart.levelNum === null )
		delete chart.levelNum;

	var chartIndex = chart.shared.index;
	delete chart.shared;
	delete chart.fromMixID;
	if( Object.keys( chart ).length === 1 )  // if we can parse all chart details from text description,
		chart = chart.text;                  //   save text instead of dict

	if( chart.fromPatchIndex )
	{
		chart.fromVer = mixes[ mixID ].patches[ chart.fromPatchIndex ];
		delete chart.fromPatchIndex;
	}

	if( chart.unlockPatchIndex )
	{
		chart.unlockVer = mixes[ mixID ].patches[ chart.unlockPatchIndex ];
		delete chart.unlockPatchIndex;
	}

	delete chart.isLocked;

	track[ mixID ][ chartIndex ] = chart;
}


function CopyChartWithRemovedObviousFieldsForDB( track, mixID, chart )
{
	var chartIndex = chart.shared.index;
	delete chart.shared;
	delete chart.fromMixID;
	delete chart.isLocked;

	if( isNaN( chart.levelNum )  ||  chart.levelNum === null )
		delete chart.levelNum;

	track[ mixID ][ chartIndex ] = chart;
}


function ConvertInnerDataToOutput( track )
{
	if( shortenData )
	{
		for( var mixID of mixesOrder )
		{
			delete track.chartsCount;

			var mixCharts = track[ mixID ];
			if( ! mixCharts )
				continue;

			track[ mixID ] = {};
			for( var chart of mixCharts )
				CopyChartWithRemovedObviousFieldsForApp( track, mixID, chart );
		}

		if( track.duration == "Standard" )
			delete track.duration;

		delete track.arcadeName;
		delete track.arcadeNameMaxEditDistance;
	}
	else
	{
		for( var mixID of mixesOrder )
		{
			delete track.chartsCount;

			var mixCharts = track[ mixID ];
			if( ! mixCharts )
				continue;

			track[ mixID ] = {};
			for( var chart of mixCharts )
				CopyChartWithRemovedObviousFieldsForDB( track, mixID, chart );
		}

		if( ! track.arcadeName )
			track.arcadeName = track.title.replace("  [SHORT]", " - SHORT CUT -").replace("  [FULL]", " - FULL SONG");
		if( ! track.arcadeNameMaxEditDistance )
			track.arcadeNameMaxEditDistance = 0;
		if( ! track.shortTitle )
			track.shortTitle = track.title;
	}

	track.title = track.title.replace( "  ", "&nbsp;&nbsp;" ).replace( "<", "&lt;" ).replace( ">", "&gt" );
}


var errors = [];

try
{
	initTracklist();

	for( var trackID in tracklist )
		ConvertInnerDataToOutput( tracklist[ trackID ] );
}
catch( exc )
{
	errors.push( exc + ":<br>" + exc.stack.replace( "at", "<br>&nbsp;at" ) );
	console.error( exc );
}


function SPACE( n )
{
	return "&nbsp;&nbsp;".repeat( n );
}

var _S = SPACE( 1 )
var __S = SPACE( 2 )
var ___S = SPACE( 3 )


function DumpMixes()
{
	var result = "";

	var nextMix = false;
	for( var k in mixes )
	{
		var v = mixes[ k ];
		if( ! v.patches )
			v.patches = ["1.0"];
		//	continue;

		if( nextMix )
			result += ",<br>";
		else
			nextMix = true;

		result += _S + JStr( k ) + ": {<br>";
		if( v.regions )
			result += __S + "\"regions\": " + JSON.stringify( v.regions, null, 1 ) + ",<br>";
		result += __S + "\"versions\": " + JSON.stringify( v.patches, null, 1 ) + "<br>";
		result += _S + "}";
		//DictToArr( mixes, function ( key, val ) {  return _S + JStr( key ) + ": " + JStr( val );  } );
	}

	return result;
}


function DumpTracklist()
{
	var result = "";
	var nextTrack = false;
	for( var trackID in tracklist )
	{
		try
		{
			if( nextTrack )
				result += ",<br><br>";
			else
				nextTrack = true;

			var track = tracklist[ trackID ];

			var trackMixes = {};
			for( var mixID of mixesOrder )
			{
				trackMixes[ mixID ] = track[ mixID ];
				delete track[ mixID ];
			}

			if( ! track.charts )
				continue;

			var trackCharts = track.charts;
			delete track.charts;
			for( var chartIndex in trackCharts )
			{
				var shared = trackCharts[ chartIndex ];
				delete shared.index;
				delete shared.type;
				if( shortenData  &&  Object.keys(shared).length === 0 )
					delete trackCharts[ chartIndex ];
			}

			var changes = track.changes;
			delete track.changes;

			result += _S + JStr( trackID ) + ": {<br>";
			result += __S + JStrNoQuotes( track ) + ",<br>";

			if( changes  &&  Object.keys( changes ).length > 0 )
			{
				result += __S + "\"changes\": " + JSON.stringify( changes, null, 1 ) + ",<br>";
			}

			if( Object.keys( trackCharts ).length > 0 )
			{
				var chartsArr = DictToArr( trackCharts, function ( key, val ) {  return ___S + JStr( key ) + ": " + JStr( val );  } );
				result += __S + "\"charts\": {<br>"
				result += chartsArr.join( ",<br>" ) + "<br>";
				result += __S + "},<br>";
			}

			var nextMix = false;
			for( var mixID of mixesOrder )
			{
				var mixCharts = trackMixes[ mixID ];
				if( mixCharts )
				{
					if( nextMix )
						result += ",<br>";
					else
						nextMix = true;
					result += __S + JStr( mixID ) + ": {<br>";

					var mixChartsArr = DictToArr( mixCharts, function ( key, val ) {  return ___S + JStr( key ) + ": " + JStr( val );  } );
					result += mixChartsArr.join( ",<br>" );
					result += "<br>" + __S + "}";
				}
			}
			result += "<br>" + _S + "}";
		}
		catch( exc )
		{
			errors.push( exc + ":<br>" + exc.stack.replace( "at", "<br>&nbsp;at" ) );
			console.log( "Catched ", exc );
		}
	}
	return result;
}


var result = "{<br><br>";
result += "\"mixes\": {<br><br>";
result += DumpMixes();
result += "<br><br>},";
result += "<br><br><br>";
result += "\"tracklist\": {<br><br>";
result += DumpTracklist();
result += "<br><br>}";
result += "<br><br>}";

if( errors.length > 0 )
{
	for( var e of errors )
		document.write( e + "<br>" );
}
else
{
	document.write( result );
}
