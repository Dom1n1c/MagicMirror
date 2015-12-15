	_config = config;

var createInput = function (text, index, area, placeholder) {
	if (placeholder === undefined) {
		placeholder = '';
	}
	return '<input class="pure-input-1" placeholder="' + placeholder + '" data-index="' + index + '" type="text" name="' + area + '" value="' + text + '" required>';
}

var createInputCalendar = function (text, index, area) {
	if (placeholder === undefined) {
		var placeholder = ['Ical URL','color','maximum calender items'];
		
		
		var textbox =['<input class="pure-u-1" placeholder="' + placeholder[0] + '" data-index="' + index + '" type="text" name="' + area + '" value="' + text.url   + '">', 
		 '<input class="pure-u-1" placeholder="' + placeholder[1] + '" data-index="' + index + '" type="text" name="' + area + '" value="' + text.color.toUpperCase() + '">',
		 '<input class="pure-input-1" placeholder="' + placeholder[2] + '" data-index="' + index + '" type="text" name="' + area + '" value="' + text.slice + '">',
		 '<div class="pure-u-16-24">','<div class="pure-u-4-24">','<div class="pure-u-2-24">','</div>','<div class="pure-u-1-24"></div>'];
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
	// Choices based on http://stackoverflow.com/questions/7973023/what-is-the-list-of-supported-languages-locales-on-android
	var _weatherLangVals = ['Auto', 'ar_EG', 'ar_IL', 'bg_BG', 'ca_ES', 'cs_CZ', 'da_DK', 'de_AT', 'de_CH', 'de_DE', 'de_LI', 'el_GR', 'en_AU', 'en_CA', 'en_GB', 'en_IE', 'en_IN', 'en_NZ', 'en_SG', 'en_US', 'en_ZA', 'es_ES', 'es_US', 'fi_FI', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_FR', 'he_IL', 'hi_IN', 'hr_HR', 'hu_HU', 'id_ID', 'it_CH', 'it_IT', 'ja_JP', 'ko_KR', 'lt_LT', 'lv_LV', 'nb_NO', 'nl_BE', 'nl_NL', 'pl_PL', 'pt_BR', 'pt_PT', 'ro_RO', 'ru_RU', 'sk_SK', 'sl_SI', 'sr_RS', 'sv_SE', 'th_TH', 'tl_PH', 'tr_TR', 'uk_UA', 'vi_VN', 'zh_CN', 'zh_TW'],
		_weatherLangs = ['System Locale', 'Arabic, Egypt', 'Arabic, Israel', 'Bulgarian, Bulgaria', 'Catalan, Spain', 'Czech, Czech Republic', 'Danish, Denmar', 'German, Austria', 'German, Switzerland', 'German, Germany', 'German, Liechtenstein', 'Greek, Greece', 'English, Australia', 'English, Canada', 'English, Britain', 'English, Ireland', 'English, India', 'English, New Zealand', 'English, Singapor', 'English, US', 'English, South Africa', 'Spanish', 'Spanish, US', 'Finnish, Finland', 'French, Belgium', 'French, Canada', 'French, Switzerland', 'French, France', 'Hebrew, Israel', 'Hindi, India', 'Croatian, Croatia', 'Hungarian, Hungary', 'Indonesian, Indonesia', 'Italian, Switzerland', 'Italian, Italy', 'Japanese', 'Korean', 'Lithuanian, Lithuania', 'Latvian, Latvia', 'Norwegian bokmål, Norway', 'Dutch, Belgium', 'Dutch, Netherlands', 'Polish', 'Portuguese, Brazil', 'Portuguese, Portugal', 'Romanian, Romania', 'Russian', 'Slovak, Slovakia', 'Slovenian, Slovenia', 'Serbian', 'Swedish, Sweden', 'Thai, Thailand', 'Tagalog, Philippines', 'Turkish, Turkey', 'Ukrainian, Ukraine', 'Vietnamese, Vietnam', 'Chinese, PRC', 'Chinese, Taiwan'];

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
	
	var _enableFeature = ['on', 'off'];
	 _enableText = ['enabled', 'disabled'],
	_enableFeature.forEach(function (_curr, _index) {
		var _options = '<option value="' + _curr + '">' + _enableText[_index] + '</option>';
		$('#feature-group select').append(_options);
	});
	
	// Set the en/disabled features
	$('#feature-group select#f1').val(_config.feature.calendar);
	$('#feature-group select#f2').val(_config.feature.compliments);
	$('#feature-group select#f3').val(_config.feature.news);
	$('#feature-group select#f4').val(_config.feature.openhab);
	$('#feature-group select#f5').val(_config.feature.time);
	$('#feature-group select#f6').val(_config.feature.weather);
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
	
	$('#openhab-group #url').val(_config.openhab.feed);
	$('#openhab-group #interval').val(_config.openhab.interval);
	$('#openhab-group #fetchinterval').val(_config.openhab.fetchInterval);
	$('#openhab-group #fadeinterval').val(_config.openhab.fadeInterval);
		// Loop through the selected news feeds
	_config.openhab.feed.forEach(function (_curr, _index) {
		var _input = createInput(_curr, _index, 'ohafeed[]'),
			_button = createRemoveButton(_index);
		$('#openhab-feeds').append(_input);
		$('#openhab-feeds-remove').append(_button);
	});
	// Append the final "Add" button for adding another news feed
	$('#openhab-feeds-remove').append(createAddButton(_config.openhab.feed.length, 'ohafeed[]', 'openhab feed'));
});
