$.getJSON("colors.json", function(json) {    
    $('#iOS').html(iOSCode(json));
    $('#android').html(androidCode(json));
    $('#web').html(webCode(json));
});


function iOSCode(json){
	var code = "";
	$.each(json, function(i, item) {		
    color = 'static let ' + i + ': UIColor = UIColor(hex: 0x' + item + ') <br>';
    code += color;
  });
	return code;
}

function androidCode(json){
	var androidBlock = '&lt;?xml version="1.0" encoding="utf-8"?&gt;<br>&lt;resources&gt;<br>';
	$.each(json, function(i, item) {		
    color = '&#9;&lt;color name="'+ i + '"&gt;#'+ item + '&lt;/color&gt;<br>';
    androidBlock += color;
  });
	androidBlock += "&lt;/resources&gt;";
	return androidBlock;
}

function webCode(json){
	var web = '';
	$.each(json, function(i, item) {		
    webColor = '&#64'+ i + ': #'+ item + ';<br>';
    web += webColor;
  });	
	return web;
}