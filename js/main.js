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

jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};

function roundVal(temp)
{
	return Math.round(temp * 10) / 10;
}

jQuery(document).ready(function($) {
	var iconTable = {
			'01d':'wi-day-sunny',
			'02d':'wi-day-cloudy',
			'03d':'wi-cloudy',
			'04d':'wi-cloudy-windy',
			'09d':'wi-showers',
			'10d':'wi-rain',
			'11d':'wi-thunderstorm',
			'13d':'wi-snow',
			'50d':'wi-fog',
			'01n':'wi-night-clear',
			'02n':'wi-night-cloudy',
			'03n':'wi-night-cloudy',
			'04n':'wi-night-cloudy',
			'09n':'wi-night-showers',
			'10n':'wi-night-rain',
			'11n':'wi-night-thunderstorm',
			'13n':'wi-night-snow',
			'50n':'wi-night-alt-cloudy-windy'
		}

<<<<<<< HEAD
	var news = [];
	var newshead = [];
	var newsIndex = 0;

=======
>>>>>>> refs/remotes/MichMich/master
	var eventList = [];
	var events = [];
	var lastCompliment;
	var compliment;
<<<<<<< HEAD
	var lang;
	var APPID = '0000'; 	//enter Your APIKEY
	var mirroruser = $.urlParam('user');
	
	
	
	
	 switch (mirroruser)
    {
        case 'user1':
            var feed				= 'http://www.faz.net/rss/aktuell/';
			var lang 				= 'de';
			var weatherParams 		= {'q':'Düsseldorf,DE','units':'metric','lang':lang,'APPID':APPID};
			var OHURL				= {'proto':'http://','host':'127.0.0.1','port':'8080','suburl':'/rest/items/','type':'/?type=json'};
			var EFAURL 				= 'http://efa.vrr.de/vrr/XSLT_DM_REQUEST?language='+lang+'&mode=direct&name_dm='+'Hbf'+'&outputFormat=JSON&place_dm='+'Duesseldorf'+'&type_dm=stop&useRealtime=1';
			var Calendar 			= {maxItems: 20, calendars: [{url: "http://www.schulferien.org/iCal/Feiertage/icals/Feiertage_Nordrhein_Westfalen_2015.ics",color: "#3399ff",},{url: "http://www.schulferien.org/iCal/Feiertage/icals/Feiertage_Nordrhein_Westfalen_2016.ics",color: "#FFFFFF",},],};
			break;
			
		default:
            var feed				= 'http://www.spiegel.de/schlagzeilen/tops/index.rss';
			var lang 				= 'de';
			var weatherParams 		= {'q':'Berlin,DE','units':'metric','lang':lang,'APPID':APPID};
			var OHURL				= {'proto':'http://','host':'10.0.0.1','port':'8080','suburl':'/rest/items/','type':'/?type=json'};
			var EFAURL 				= 'http://efa.vrr.de/vrr/XSLT_DM_REQUEST?language='+lang+'&mode=direct&name_dm='+'Hbf'+'&outputFormat=JSON&place_dm='+'Berlin'+'&type_dm=stop&useRealtime=1';
			var Calendar 			= {maxItems: 20, calendars: [{url: "http://www.schulferien.org/iCal/Feiertage/icals/Feiertage_Nordrhein_Westfalen_2015.ics",color: "#3399ff",},{url: "http://www.schulferien.org/iCal/Feiertage/icals/Feiertage_Nordrhein_Westfalen_2016.ics",color: "#FFFFFF",},],};
	}
	
	if (lang=="undefined")  {var lang = window.navigator.language;}
	if (lang==null) 		{var lang = window.navigator.language;}
    switch (lang)
    {
        case 'de':
            var datelabel 	= 'Tag';
            var morning 	= ['Guten Morgen, Schönling','Genieße den Tag','Gut geschlafen?'];
            var afternoon 	= ['Wow, sexy!','Du siehst gut aus!','Heute ist dein Tag!'];
            var evening 	= ['Wie war dein Tag?','Schöner Anblick!','Du bist sexy!'];
			moment.locale(lang);
            break;
        case 'nl':
            var datelabel 	= 'Dag';
            var morning 	= ['Good morning, handsome!','Enjoy your day!','How was your sleep?'];
            var afternoon 	= ['Hello beauty!','You look sexy!','Looking good today!'];
            var evening 	= ['Wow, You look hot!','You look nice!','Hi, sexy!'];
			moment.locale(lang);
            break;
       case 'fr':
            var datelabel 	= 'Jour';
            var morning 	= ['Good morning, handsome!','Enjoy your day!','How was your sleep?'];
            var afternoon 	= ['Hello beauty!','You look sexy!','Looking good today!'];
            var evening 	= ['Wow, You look hot!','You look nice!','Hi, sexy!'];
			moment.locale(lang);
            break;     
		case 'es':
            var datelabel 	= 'Jour';
            var morning 	= ['Good morning, handsome!','Enjoy your day!','How was your sleep?'];
            var afternoon 	= ['Hello beauty!','You look sexy!','Looking good today!'];
            var evening 	= ['Wow, You look hot!','You look nice!','Hi, sexy!'];
			moment.locale(lang);
            break; 
		case 'en':
            var datelabel 	= 'Day';
            var morning 	= ['Good morning, handsome!','Enjoy your day!','How was your sleep?'];
            var afternoon 	= ['Hello beauty!','You look sexy!','Looking good today!'];
            var evening 	= ['Wow, You look hot!','You look nice!','Hi, sexy!'];
			moment.locale(lang);
            break; 
        default:
            var datelabel 	= 'Day';
            var morning 	= ['Good morning, handsome!','Enjoy your day!','How was your sleep?'];
            var afternoon 	= ['Hello beauty!','You look sexy!','Looking good today!'];
            var evening 	= ['Wow, You look hot!','You look nice!','Hi, sexy!'];
			moment.locale(lang);
    }
	
	(function checkVersion()
	{
		$.getJSON('githash.php', {}, function(json, textStatus) {
			if (json) {
				if (json.gitHash != gitHash) {
					window.location.reload();
					window.location.href=window.location.href;
				}
			}
		});
		setTimeout(function() {
			checkVersion();
		}, 3000);
	})();


	(function updateTime()
	{
		var now = new Date();
		var day = now.getDay();
		var date = now.getDate();
		var month = now.getMonth();
		var year = now.getFullYear();
		var date = moment.weekdays(day) + ', ' + date+' ' + moment.months(month) + ' ' + year;
		$('.date').html(date);
		$('.time').html(now.toTimeString().substring(0,5) + '<span class="sec">'+now.toTimeString().substring(6,8)+'</span>');

		setTimeout(function() {
			updateTime();
		}, 1000);
	})();

	(function updateCalendarData()
	{
		eventList = [];
		new ical_parser("calendar.php?url=" + encodeURIComponent(Calendar.calendars[1].url), function(cal) {
        	events = cal.getEvents();
        	


        	for (var i in events) {
        		var e = events[i];
        		for (var key in e) {
        			var value = e[key];
					var seperator = key.search(';');
					if (seperator >= 0) {
						var mainKey = key.substring(0,seperator);
						var subKey = key.substring(seperator+1);

						var dt;
						if (subKey == 'VALUE=DATE') {
							//date
							dt = new Date(value.substring(0,4), value.substring(4,6) - 1, value.substring(6,8));
						} else {
							//time
							dt = new Date(value.substring(0,4), value.substring(4,6) - 1, value.substring(6,8), value.substring(9,11), value.substring(11,13), value.substring(13,15));
						}

						if (mainKey == 'DTSTART') e.startDate = dt;
						if (mainKey == 'DTEND') e.endDate = dt;
					}
        		}

                if (e.startDate == undefined){
                    //some old events in Gmail Calendar is "start_date"
                    //FIXME: problems with Gmail's TimeZone
            		var days = moment(e.DTSTART).diff(moment(), 'days');
            		var seconds = moment(e.DTSTART).diff(moment(), 'seconds');
                    var startDate = moment(e.DTSTART);
                } else {
            		var days = moment(e.startDate).diff(moment(), 'days');
            		var seconds = moment(e.startDate).diff(moment(), 'seconds');
                    var startDate = moment(e.startDate);
                }

				//only add future events, days doesn't work, we need to check seconds
        		if (seconds >= 0) {
                    if (seconds <= 60*60*5 || seconds >= 60*60*24*2) {
                        var time_string = moment(startDate).fromNow();
                    }else {
                        var time_string = moment(startDate).calendar()
                    }
                    if (!e.RRULE) {
    	        		eventList.push({'description':e.SUMMARY,'seconds':seconds,'days':time_string});
                    }
                    e.seconds = seconds;
        		}
                
                // Special handling for rrule events
                if (e.RRULE) {
                    var options = new RRule.parseString(e.RRULE);
                    options.dtstart = e.startDate;
                    var rule = new RRule(options);
                    
                    // TODO: don't use fixed end date here, use something like now() + 1 year
                    var dates = rule.between(new Date(), new Date(2016,12,31), true, function (date, i){return i < 10});
                    for (date in dates) {
                        var dt = new Date(dates[date]);
                        var days = moment(dt).diff(moment(), 'days');
                        var seconds = moment(dt).diff(moment(), 'seconds');
                        var startDate = moment(dt);
                     	if (seconds >= 0) {
                            if (seconds <= 60*60*5 || seconds >= 60*60*24*2) {
                                var time_string = moment(dt).fromNow();
                            } else {
                                var time_string = moment(dt).calendar()
                            }
                            eventList.push({'description':e.SUMMARY,'seconds':seconds,'days':time_string});
                        }           

                    }
                }
            };
        	eventList.sort(function(a,b){return a.seconds-b.seconds});
        	//eventList = eventList.slice(0,8);
			
        	setTimeout(function() {
        		updateCalendarData();
        	}, 60000);

    	});
		
	})();
	
  

	(function updateCalendar()
	{
		table = $('<table/>').addClass('xsmall').addClass('calendar-table');
		opacity = 1;
		var len = eventList.length > Calendar.maxItems ? Calendar.maxItems : eventList.length;
		for (var i = 0; i < len; i++) {
		var e = eventList[i];

			var row = $('<tr/>').css('opacity',opacity);
			row.css('color', e.color);
			row.append($('<td/>').html(e.description).addClass('description'));
			row.append($('<td/>').html(e.days).addClass('days dimmed'));
			table.append(row);

			opacity -= 1 / len;
		}

		$('.calendar').updateWithText(table,1000);

		setTimeout(function() {
        	updateCalendar();
        }, 1000);
	})();


	(function updateCompliment()
	{

	  while (compliment == lastCompliment) {

      //Check for current time  
      var compliments;
      var date = new Date();
      var hour = date.getHours();
      //set compliments to use
      if (hour >= 3 && hour < 12) compliments = morning;
      if (hour >= 12 && hour < 17) compliments = afternoon;
      if (hour >= 17 || hour < 3) compliments = evening;
=======

    moment.locale(config.lang);

	//connect do Xbee monitor
	// var socket = io.connect('http://rpi-alarm.local:8082');
	// socket.on('dishwasher', function (dishwasherReady) {
	// 	if (dishwasherReady) {
	// 		$('.dishwasher').fadeIn(2000);
	// 		$('.lower-third').fadeOut(2000);
	// 	} else {
	// 		$('.dishwasher').fadeOut(2000);
	// 		$('.lower-third').fadeIn(2000);
	// 	}
	// });
>>>>>>> refs/remotes/MichMich/master

	version.init();

	time.init();

	calendar.init();

<<<<<<< HEAD
		setTimeout(function() {
			updateCompliment(true);
		}, 30000);

	})();

	(function updateCurrentWeather()
	{
		$.getJSON('http://api.openweathermap.org/data/2.5/weather', weatherParams, function(json, textStatus) {

			var temp = roundVal(json.main.temp);
			var temp_min = roundVal(json.main.temp_min);
			var temp_max = roundVal(json.main.temp_max);
			var wind = roundVal(json.wind.speed);
			var iconClass = iconTable[json.weather[0].icon];
			var icon = $('<span/>').addClass('icon').addClass('dimmed').addClass('wi').addClass(iconClass);
			$('.temp').updateWithText(icon.outerHTML()+temp+'&deg;', 1000);

			var now = new Date();
			var sunrise = new Date(json.sys.sunrise*1000).toTimeString().substring(0,5);
			var sunset = new Date(json.sys.sunset*1000).toTimeString().substring(0,5);

			var windString = '<span class="wi wi-strong-wind xdimmed"></span> ' + kmh2beaufort(wind) ;
			var sunString = '<span class="wi wi-sunrise xdimmed"></span> ' + sunrise;
			if (json.sys.sunrise*1000 < now && json.sys.sunset*1000 > now) {
				sunString = '<span class="wi wi-sunset xdimmed"></span> ' + sunset;
			}

			$('.windsun').updateWithText(windString+' '+sunString+'  '+weatherParams.q, 1000);
		});

		setTimeout(function() {
			updateCurrentWeather();
		}, 60000);
	})();

	(function updateWeatherForecast()
	{
			$.getJSON('http://api.openweathermap.org/data/2.5/forecast', weatherParams, function(json, textStatus) {

			var forecastData = {};

			for (var i in json.list) {
				var forecast = json.list[i];
				var dateKey  = forecast.dt_txt.substring(0, 10);

				if (forecastData[dateKey] == undefined) {
					forecastData[dateKey] = {
						'timestamp':forecast.dt * 1000,
						'icon':forecast.weather[0].icon,
						'temp_min':forecast.main.temp,
						'temp_max':forecast.main.temp
					};
				} else {
					forecastData[dateKey]['icon'] = forecast.weather[0].icon;
					forecastData[dateKey]['temp_min'] = (forecast.main.temp < forecastData[dateKey]['temp_min']) ? forecast.main.temp : forecastData[dateKey]['temp_min'];
					forecastData[dateKey]['temp_max'] = (forecast.main.temp > forecastData[dateKey]['temp_max']) ? forecast.main.temp : forecastData[dateKey]['temp_max'];
				}

			}

			var forecastTable = $('<table />').addClass('forecast-table');
			var opacity = 1;
			var rowhead = $('<tr />').css('opacity', opacity);
			
			rowhead.append($('<td/>').addClass('day').html(datelabel));
			rowhead.append($('<td/>').addClass('temp-min').html('Min'));
			rowhead.append($('<td/>').addClass('temp-max').html('Max'));
			rowhead.append($('<td/>').addClass('icon-small').html(''));
			forecastTable.append(rowhead);
			for (var i in forecastData) {
				var forecast = forecastData[i];
				var iconClass = iconTable[forecast.icon];

				var dt = new Date(forecast.timestamp);
				var row = $('<tr />').css('opacity', opacity);

				row.append($('<td/>').addClass('day').html(moment.weekdaysMin(dt.getDay())));
				
				row.append($('<td/>').addClass('temp-min').html(roundVal(forecast.temp_min).toFixed(1)));
				row.append($('<td/>').addClass('temp-max').html(roundVal(forecast.temp_max).toFixed(1)));
				row.append($('<td/>').addClass('icon-small').addClass('wi').addClass(iconClass));
			
				forecastTable.append(row);
				opacity -= 0.155;
			}


			$('.forecast').updateWithText(forecastTable, 1000);
		});

		setTimeout(function() {
			updateWeatherForecast();
		}, 60000);
	})();
	
	(function fetchNews() {
		$.feedToJson({
			feed: feed,
			success: function(data){
				newshead = [];
				news 	 = [];
				for (var i in data.item) {
					var item = data.item[i];
					
					var pos = item.description.search("<p>")
					var desc = item.description.substring(pos, item.description.length);
					var endpos = desc.search("</p>")
					var desc = desc.substring(0, endpos);
					news.push(desc);
					newshead.push(item.title);
					
				}
			}
		});
		setTimeout(function() {
			fetchNews();
		}, 60000);
	})();

	(function showNews() {
		var newsHead = newshead[newsIndex];
		var newsItem = news[newsIndex];
		
		$('.newshead').updateWithText(newsHead,2000);
		$('.news').updateWithText(newsItem,2000);

		newsIndex--;
		if (newsIndex < 0) newsIndex = news.length - 1;
			setTimeout(function() {
				showNews();
			}, 15000);	
		
		


	})();
=======
	compliments.init();

	weather.init();

	news.init();
>>>>>>> refs/remotes/MichMich/master

	(function updateOpenHAB()
        {
                var tempstat = "";
                $.getJSON(OHURL.proto+OHURL.host+':'+OHURL.port+OHURL.suburl+'SmartMirrorTXT'+OHURL.type, {}, function(json, textStatus) {
					
                        if (json) {
                                tempstat = json.state;
                        }
                        $('.openhab').updateWithText(tempstat,2000);
                        if (tempstat != "") {
                                $('.openhab').fadeIn(2000);
                                $('.lower-third').fadeOut(2000);
                        } else {
                                $('.openhab').fadeOut(2000);
                                $('.lower-third').fadeIn(2000);
                        }
                });
                setTimeout(function() {
                        updateOpenHAB();
                }, 5000);
        })();

	
});
