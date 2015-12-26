
var calendar = {
	eventList: [],
	calendarLocation: '.calendar',
	calendarMaxItems: config.calendar.maxItemsDisplayed || 20,
	calendars : config.calendar.calendars,
	updateInterval: config.calendar.interval || 1000,
	fetchInterval: config.calendar.fetchInterval|| 60000,
	fadeInterval: config.calendar.fadeInterval || 1000,
	intervalId: null,
	dataIntervalId: null,
	isDataUpdating: false,
}

calendar.createUpdateCall = function (cal, idx, callback) {
	if (cal == null) {
		callback(this.eventList);
		this.isDataUpdating = false;
	} else {
		this.getCalendarData(cal.url, cal.color, function() {
			var calLen = this.calendars.length;
			var calIdx = idx+1;
			
			if (calIdx < calLen) {
				this.createUpdateCall(this.calendars[calIdx], calIdx, callback);
			} else {
				this.createUpdateCall(null, calIdx, callback);				
			}
		}.bind(this));
	}	
}

calendar.updateData = function (callback) {	
	if (this.isDataUpdating === true) return;
	this.isDataUpdating = true;	
	this.eventList = [];
	
	if (this.calendars.length > 0) {
		this.createUpdateCall(this.calendars[0], 0, callback);
	}
}

calendar.getCalendarData = function(url, color, callback) {

	new ical_parser("./php/calendar.php?url=" + encodeURIComponent(url), function(cal) {
		var events = cal.getEvents();

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

			//only add fututre events, days doesn't work, we need to check seconds
			if (seconds >= 0) {
				if (seconds <= 60*60*5 || seconds >= 60*60*24*2) {
					var time_string = moment(startDate).fromNow();
				}else {
					var time_string = moment(startDate).calendar()
				}
				if (!e.RRULE) {
					this.eventList.push({'description':e.SUMMARY,'seconds':seconds,'days':time_string,'color':color});
				}
				e.seconds = seconds;
			}
			
			// Special handling for rrule events
			if (e.RRULE) {
				var options = new RRule.parseString(e.RRULE);
				options.dtstart = e.startDate;
				var rule = new RRule(options);
				
				// TODO: don't use fixed end date here, use something like now() + 1 year
				var dates = rule.between(new Date(), new Date(2016,11,31), true, function (date, i){return i < 10});
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
						this.eventList.push({'description':e.SUMMARY,'seconds':seconds,'days':time_string,'color':color});
					}           
				}
			}
		};

		this.eventList = this.eventList.sort(function(a,b){return a.seconds-b.seconds});
		//this.eventList = this.eventList.slice(0,8);
		//slicen calendar.calendars[calIdx].slice

		if (callback !== undefined && Object.prototype.toString.call(callback) === '[object Function]') {
			callback();
		}

	}.bind(this));

}

calendar.updateCalendar = function (eventList) {

	var table = $('<table/>').addClass('xsmall').addClass('calendar-table');
	var opacity = 1;
	var len = eventList.length > calendar.calendarMaxItems ? calendar.calendarMaxItems : eventList.length;
	for (var i = 0; i < len; i++) {
		var e = eventList[i];

		var row = $('<tr/>').css('opacity', opacity);
		row.css('color', e.color);
		row.append($('<td/>').html(e.description).addClass('description'));
		row.append($('<td/>').html(e.days).addClass('days dimmed'));
		table.append(row);

		opacity -= 1 / calendar.calendarMaxItems;
	}

	$(this.calendarLocation).updateWithText(table, this.fadeInterval);
}

calendar.init = function () {

	this.updateData(this.updateCalendar.bind(this));

	this.intervalId = setInterval(function () {
		this.updateCalendar(this.eventList)
	}.bind(this), this.updateInterval);

	this.dataIntervalId = setInterval(function () {
		this.updateData(this.updateCalendar.bind(this));
	}.bind(this), this.fetchInterval);

}