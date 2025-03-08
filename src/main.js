import fs from 'fs';

import {
	mixes, mixesOrder, initTracklist,
	NewTags, OldTagTypes, NewTagTypes, OldArcadeTags, OldSpecialTags,
	STANDARD, REMIX, FULL,
	ARCADE, SPECIAL } from './tracklist.js';
import { tracklist } from './tracklist_src.js';

// include("src/tracklist_src.js")
import {} from './tracklist_unlocks.js';

import {} from './check.js';
// #include("src/check_Exceed2_Zero.js")
// #include("src/check_NX.js")
// #include("src/check_NX2_NXA.js")
import {} from './check_XX.js';
import {} from './check_Phoenix.js';

import { ApplyBPMs } from './tracklist_bpms.js';
// #include("src/tracklist_level_estimations.js")
//import {} from './tracklist_tags.js';
import { AddNotes } from './tracklist_notes.js';



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

	if( chart.isLocked )
	{
		if( ! chart.unlockDescr )
			throw new Error( `No unlock condition specified for ${track.id} ${chart.text}` );
		delete chart.isLocked;
	}

	track.charts[ mixID ][ chartIndex ] = chart;
}


function CopyChartWithRemovedObviousFieldsForDB( track, mixID, chart )
{
	var chartIndex = chart.shared.index;
	delete chart.shared;
	delete chart.fromMixID;

	if( chart.isLocked )
	{
		if( ! chart.unlockDescr )
			throw new Error( `No unlock condition specified for ${track.id} ${chart.text}` );
		delete chart.isLocked;
	}

	if( isNaN( chart.levelNum )  ||  chart.levelNum === null )
		delete chart.levelNum;

	if( chart.tag == "CoOp" )
	{
		chart.levelNum = 0;
		chart.text = chart.text.replace( "CoOp(x", "COOP" ).replace( ")", "" );
	}

	delete chart.tag;

	track.charts[ mixID ][ chartIndex ] = chart;
}


function ConvertInnerDataToOutput( track, shortenData )
{
	if( shortenData )
	{
		for( var mixID of mixesOrder )
		{
			delete track.chartsCount;

			var mixCharts = track.charts[ mixID ];
			if( ! mixCharts )
				continue;

			track.charts[ mixID ] = {};
			for( var chart of mixCharts )
				CopyChartWithRemovedObviousFieldsForApp( track, mixID, chart );
		}

		if( track.duration == "Standard" )
			delete track.duration;

		delete track.arcadeName;
	}
	else
	{
		for( var mixID of mixesOrder )
		{
			delete track.chartsCount;
			delete track.channel;

			var mixCharts = track.charts[ mixID ];
			if( ! mixCharts )
				continue;

			track.charts[ mixID ] = {};
			for( var chart of mixCharts )
				CopyChartWithRemovedObviousFieldsForDB( track, mixID, chart );
		}

		if( ! track.arcadeName )
			track.arcadeName = track.title.replace("  [SHORT]", " - SHORT CUT -").replace("  [FULL]", " - FULL SONG");
		if( ! track.shortTitle )
			track.shortTitle = track.title;
		delete track.altID;
	}

	track.title = track.title.replace( "  ", "&nbsp;&nbsp;" ).replace( "<", "&lt;" ).replace( ">", "&gt;" );
	delete track.id;
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


function DumpTracklist( shortenData )
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
				trackMixes[ mixID ] = track.charts[ mixID ];
				delete track.charts[ mixID ];
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
			//errors.push( exc + ":<br>" + exc.stack.replace( " at", "<br>&nbsp;at" ) );
			console.log( "Catched ", exc );
		}
	}
	return result;
}


// 'shortenData == true' means it's dump for Step It Up with reduced number of fields
// 'shortenData == false' means it's dump for simple python script, so structure is more verbose and straightforward
function DumpAll( args )
{
	var errors = [];

	try
	{
		initTracklist();
		if( args.addBPMNotes )
			ApplyBPMs( tracklist );
		if( args.addNotes )
			AddNotes( tracklist );

		for( var trackID in tracklist )
			ConvertInnerDataToOutput( tracklist[ trackID ], args.shortenData );
	}
	catch( exc )
	{
		if( args.rawOutput )
			errors.push( exc.stack );
		else
		{
			errors.push( exc.stack.replace( " at", "<br>&nbsp;at" ) );
			console.error( exc );
		}
	}

	var result = "{<br><br>";
	result += "\"mixes\": {<br><br>";
	result += DumpMixes();
	result += "<br><br>},";
	result += "<br><br><br>";
	result += "\"tracklist\": {<br><br>";
	result += DumpTracklist( args.shortenData );
	result += "<br><br>}";
	result += "<br><br>}";

	if( errors.length > 0 )
	{
		if( args.rawOutput )
	        	for( var e of errors )
					console.log( e + "<br>" );
		else
	        	for( var e of errors )
					document.write( e + "<br>" );

		process.exit(1);
	}
	else
	{
		if( args.rawOutput )
		{
			result = result.replace(/\n/g, " ").replace(/<br>/g, "\n").replace(/&nbsp;/g, " ").replace(/,  /g, ", ").replace(/{  /g, "{ ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
			fs.writeFileSync( args.output, result );
		}
		else
			document.write( result );
	}
}


function CheckBannerRename( bannersPath, files, altID, trackID )
{
	for (ext of ["png", "jpg"])
	{
		if (files.includes(`${altID}.${ext}`))
		{
			var oldName = `${bannersPath}\\${altID}.${ext}`;
			var newName = `${bannersPath}\\${trackID}.${ext}`;
			console.log(`Renaming ${oldName} -> ${newName}`);
			fs.renameSync(oldName, newName);

			oldName = `${bannersPath}\\${altID}.${ext}.meta`;
			newName = `${bannersPath}\\${trackID}.${ext}.meta`;
			console.log(`Renaming ${oldName} -> ${newName}`);
			fs.renameSync(oldName, newName);
			return true;
		}
	}
	return false;
}

function CheckBannerName( bannersPath, files, trackID, track )
{
	if( files.includes(trackID + ".png") || files.includes(trackID + ".jpg") )
		return;

	if( track.arcadeID  &&  CheckBannerRename( bannersPath, files, track.arcadeID, trackID ) )
		return;

	if( track.altID)
		for( altID of track.altID )
			if( CheckBannerRename( bannersPath, files, altID, trackID ))
				return;

	//console.log(`[-]  Can't find banner for ${ trackID }`);
}


function RenameBannersToActualID( bannersPath )
{
	console.log(`Renaming banners at ${bannersPath}...`);

	files = fs.readdirSync(bannersPath)
	console.log(`${files.length} files found`);

	try
	{
		initTracklist();

		for( var trackID in tracklist )
			CheckBannerName( bannersPath, files, trackID, tracklist[ trackID ] );
	}
	catch( exc )
	{
		//errors.push( exc + ":<br>" + exc.stack.replace( " at", "<br>&nbsp;at" ) );
		console.error( exc );
	}
}


import minimist from 'minimist';

const args = minimist(process.argv.slice(2));
if( args.format !== "DB"  &&  args.format !== "STEPITUP")
{
	console.log(`format is required to be either DB or STEPITUP`)
	exit(1);
}

args.rawOutput = true;
args.shortenData = (args.format === "STEPITUP");
args.addBPMNotes = (args.format === "STEPITUP");
args.addNotes = (args.format === "STEPITUP");

console.log(args);
DumpAll( args );
