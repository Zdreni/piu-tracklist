"use strict";

/*
function STR(text)
{
	for
}
*/

function AddRadioButtons( config )
{
	if( ! config.type )
		config.type = "radio";

	console.assert( ["checkbox", "radio"].indexOf( config.type ) >= 0 );

	var inlineTag = config.inline ? " style='display: inline'" : "";
	var content = "<form id='" + config.id + "'" + inlineTag + ">\n\
		<fieldset data-role='controlgroup' data-type='horizontal'>\n\
		<legend>" + config.legend + "</legend>\n";

	var buttonsID = "RB-" + config.id;

	var index = 0;
	for( var item of config.items )
	{
		var itemID = "RB-" + config.id + "-" + index;
		var checked = ( config.autoSelect === item.title  ?  " checked=\"checked\""  :  "" );
		content += "<input type='"+config.type+"' name='"+buttonsID+"' id='"+itemID+"' index='"+index+"'"+checked+"> <label for='"+itemID+"'>"+item.title+"</label>";
		//content += "<input type='{config.type}' name='{buttonsID}' id='{itemID}' index='{index}'{checked}> <label for='{itemID}'>{item.title}</label>";
		++index;
	}
	content += "</fieldset>\n\
		</form>\n";

	var existingControl = $( "input[name='" + buttonsID + "']" );
	if( existingControl.length )
		existingControl.replaceWith( content );
	else
	{
		document.write( content );
		existingControl = $( "input[name='" + buttonsID + "']" );
	}

	if( config.type === "radio" )
	{
		existingControl.off().on('click', function()
		{
			var selectedItem = config.items[ parseInt( $(this).attr( "index" ) ) ];
			if( selectedItem.onSelect )
				selectedItem.onSelect( selectedItem );
			else
				config.onSelect( selectedItem );
		} );
	}
	else
	{
		existingControl.off().on('click', function()
		{
			var selectedItem = config.items[ parseInt( $(this).attr( "index" ) ) ];
			if( selectedItem.onToggle )
				selectedItem.onToggle( selectedItem, this.checked );
			else
				config.onToggle( selectedItem, this.checked );
		} );
	}
		

	$( "#" + config.id ).toggle( ! config.hidden );
}


function AddDropDownList( config )
{
/*
<form>
<div class="ui-field-contain">
    <label for="select-native-1">Basic:</label>
    <select name="select-native-1" id="select-native-1">
        <option value="1">The 1st Option</option>
        <option value="2">The 2nd Option</option>
        <option value="3">The 3rd Option</option>
        <option value="4">The 4th Option</option>
    </select>
</div>
</form>
*/
}
