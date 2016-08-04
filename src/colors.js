$(function() {
	$.getJSON("colors.json", function(json) { 
		$('#colors').html(renderColors(json));
		$('#iOS').html(iOSCode(json));
		$('#android').html(androidCode(json));
		$('#web').html(webCode(json));

		$('a#downloadSketch').click(function() {
			var data = [];
		    var sketch = '{"compatibleVersion":"1.0","pluginVersion":"1.1","colors":[';
		    $.each(json, function(i, item) {				    	
		    	color = '"#'+item.toUpperCase()+'"';
	    	    data.push(color);
		    });
		    sketch += data.join();
		    sketch += ']}';
		    console.log(sketch);
		    this.href = "data:text/plain;charset=UTF-8," + sketch;
		});
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

	new Clipboard('.btn');

	function renderColors(json){
		var render = '';
		$.each(json, function(i, item) {		
			color = '<div class="color" title="' + i + '"><div class="colorPreview" style="background-color: #' + item + '"></div><div class="colorInfo"><div class="colorName">' +  i + '</div><div class="colorHex">#' + item + '</div></div></div>';			
			render += color;
		});	
		return render;
	}
});


