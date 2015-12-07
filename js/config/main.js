	_config = config;

var createInput = function (text, index, area, placeholder) {
	if (placeholder === undefined) {
		placeholder = '';
	}
	return '<input class="pure-input-1" placeholder="' + placeholder + '" data-index="' + index + '" type="text" name="' + area + '" value="' + text + '">';
}

var createInputCalendar = function (text, index, area) {
	if (placeholder === undefined) {
		var placeholder = ['Ical URL','color','maximum calender items'];
		
		
		var textbox =['<input class="pure-u-1" placeholder="' + placeholder[0] + '" data-index="' + index + '" type="text" name="' + area + '" value="' + text.url   + '">', 
		 '<input class="pure-u-1" placeholder="' + placeholder[1] + '" data-index="' + index + '" type="text" name="' + area + '" value="' + text.color + '">',
		 '<input class="pure-input-1" placeholder="' + placeholder[2] + '" data-index="' + index + '" type="text" name="' + area + '" value="' + text.slice + '">',
		 '<div class="pure-u-17-24">','<div class="pure-u-3-24">','<div class="pure-u-2-24">','</div>','<div class="pure-u-1-24"></div>'];
	}
		return textbox[3]+textbox[0]+textbox[6]+textbox[7]+   textbox[4]+textbox[1]+textbox[6]+textbox[7]+   textbox[5]+textbox[2]+textbox[6]  ;
}





var createRemoveButton = function (relatedIndex) {
	return '<button type="button" data-index="' + relatedIndex + '" class="remove pure-button pure-u-1"><i class="fa fa-minus"></i></a>';
}

var createAddButton = function (nextIndex, nameAttachment, itemName) {
	return '<button type="button" data-index="' + nextIndex + '" class="add pure-button pure-u-1" data-name-attachment="' + nameAttachment + '" data-item-name="' + itemName + '"><i class="fa fa-plus"></i></a>';
}

$(document).ready(function () {
	// Choices based on http://openweathermap.org/current#multi
	var _weatherLangVals = ['bg', 'ca', 'zh_tw', 'hr', 'nl', 'en', 'fi', 'fr', 'de', 'it', 'pl', 'pt', 'ro', 'ru', 'es', 'sv', 'tr', 'uk'],
		_weatherLangs = ['Bulgarian', 'Catalan', 'Chinese Traditional', 'Croatian', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Italian', 'Polish', 'Portuguese', 'Romanian', 'Russian',  'Spanish', 'Swedish', 'Turkish', 'Ukranian'];
	_weatherLangVals.forEach(function (_curr, _index) {
		var _options = '<option value="' + _curr + '">' + _weatherLangs[_index] + ' (' + _curr + ')</option>';
		$('#language-group select').append(_options);
	});
	
	var _TempUnit = ['metric', 'imperial'];
	 _TempUnitSymbol = ['Metric (°C)', 'Imperial (°F)'],
	_TempUnit.forEach(function (_curr, _index) {
		var _options = '<option value="' + _curr + '">' + _TempUnitSymbol[_index] + '</option>';
		$('#weather-group select').append(_options);
	});

	// Set the language value
	$('#language-group select').val(_config.lang);
	// Set the time values
	$('#time-group select').val(_config.time.timeFormat);
	
	$('#weather-group #interval').val(_config.weather.interval);
	$('#weather-group #fadeinterval').val(_config.weather.fadeInterval);
	$('#weather-group #q').val(_config.weather.params.q);
	$('#weather-group select').val(_config.weather.params.units);
	$('#weather-group #APPID').val(_config.weather.params.APPID);
	$('#compliments-group #interval').val(_config.compliments.interval);
	$('#compliments-group #fadeinterval').val(_config.compliments.fadeInterval);

	// Loop through the selected morning compliments
	_config.compliments.morning.forEach(function (_curr, _index) {
		var _input = createInput(_curr, _index, 'morning[]'),
			_button = createRemoveButton(_index);
		$('#morning-compliments').append(_input);
		$('#morning-compliments-remove').append(_button);
	});

	// Loop through the selected afternoon compliments
	_config.compliments.afternoon.forEach(function (_curr, _index) {
		var _input = createInput(_curr, _index, 'afternoon[]'),
			_button = createRemoveButton(_index);
		$('#afternoon-compliments').append(_input);
		$('#afternoon-compliments-remove').append(_button)
	});

	// Loop through the selected evening compliments
	_config.compliments.evening.forEach(function (_curr, _index) {
		var _input = createInput(_curr, _index, 'evening[]'),
			_button = createRemoveButton(_index);
		$('#evening-compliments').append(_input);
		$('#evening-compliments-remove').append(_button)
	});

	// Append the final "Add" button for adding another compliment
	$('#morning-compliments-remove').append(createAddButton(_config.compliments.morning.length, 'morning[]', 'compliment'));
	$('#afternoon-compliments-remove').append(createAddButton(_config.compliments.afternoon.length, 'afternoon[]', 'compliment'));
	$('#evening-compliments-remove').append(createAddButton(_config.compliments.evening.length, 'evening[]', 'compliment'));
	
	$('#news-group #interval').val(_config.news.interval);
	$('#news-group #fetchinterval').val(_config.news.fetchInterval);
	$('#news-group #fadeinterval').val(_config.news.fadeInterval);
	// Loop through the selected news feeds
	_config.news.feed.forEach(function (_curr, _index) {
		var _input = createInput(_curr, _index, 'newsfeed[]'),
			_button = createRemoveButton(_index);
		$('#news-feeds').append(_input);
		$('#news-feeds-remove').append(_button);
	});

	// Append the final "Add" button for adding another news feed
	$('#news-feeds-remove').append(createAddButton(_config.news.feed.length, 'newsfeed[]', 'news feed'));
	
	
	
	
	
	$('#calendar-group #maxitems').val(_config.calendar.maxItemsDisplayed);
	$('#calendar-group #interval').val(_config.calendar.interval);
	$('#calendar-group #fetchinterval').val(_config.calendar.fetchInterval);
	$('#calendar-group #fadeinterval').val(_config.calendar.fadeInterval);
	
	// Loop through the selected news feeds
	_config.calendar.calendars.forEach(function (_curr, _index) {
		var _input = createInputCalendar(_curr, _index, 'calfeed[]'),
			_button = createRemoveButton(_index);
		$('#calendar-feeds').append(_input);
		$('#calendar-feeds-remove').append(_button);
	});

	// Append the final "Add" button for adding another news feed
	$('#calendar-feeds-remove').append(createAddButton(_config.calendar.calendars.length, 'calfeed[]', 'cal feed'));
});