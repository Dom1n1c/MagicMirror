
jQuery.fn.updateWithText = function(text, speed)
{
	var dummy = $('<div/>').html(text);

	if ($(this).html() != dummy.html())
	{
		$(this).fadeOut(speed/2, function() {
			$(this).html(text);
			$(this).fadeIn(speed/2, function() {
				//done
			});
		});
	}
}

jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};

function roundVal(temp)
{
	return Math.round(temp * 10) / 10;
}

$.urlParam = function(name, url) {
    if (!url) {
     url = window.location.href;
    }
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
    if (!results) { 
        return undefined;
    }
    return results[1] || undefined;
}

jQuery(document).ready(function($) {
	var mirroruser = $.urlParam('user');
	
	 moment.locale(config.lang);
	var eventList = [];
	var lastCompliment;
	var compliment;
	
	version.init();
	
	if (config.feature.calendar=='on'){
	calendar.init();
	}
	
	if (config.feature.time=='on'){
	time.init();
	}
	
	if (config.feature.compliments=='on'){
	compliments.init();
	}	
	
	if (config.feature.news=='on'){
	news.init();
	}	
	
	if (config.feature.openhab=='on'){
	openhab.init();
	}	
	
	if (config.feature.weather=='on'){
	weather.init();
	}
   


});
