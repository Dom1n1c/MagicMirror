var weather = {
	// Default language is Dutch because that is what the original author used
	lang: config.lang || 'en',
	params: config.weather.params || null,
	iconTable: {
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
	},
	datelabel: {
		'bg':	['ден','Min','Max'],
		'ca':	['dia','Min','Max'],
		'zh_tw':['白天','Min','Max'],
		'hr':	['dan','Min','Max'],
		'nl':	['Dag','Min','Max'],
		'en':	['Day','Min','Max'],
		'fi':	['päivä','Min','Max'],
		'fr':	['jour','Min','Max'],
		'de':	['Tag','Min','Max'],
		'it':	['giorno','Min','Max'],
		'pl':	['dzień','Min','Max'],
		'pt':	['dia','Min','Max'],
		'ro':	['zi','Min','Max'],
		'ru':	['день','Min','Max'],
		'es':	['Día','Min','Max'],
		'sv':	['Dag','Min','Max'],
		'tr':	['Gün','Min','Max'],
		'uk':	['день','Min','Max']
	},
	temperatureLocation: '.temp',
	windSunLocation: '.windsun',
	forecastLocation: '.forecast',
	apiVersion: '2.5',
	apiBase: 'http://api.openweathermap.org/data/',
	weatherEndpoint: 'weather',
	forecastEndpoint: 'forecast/daily',
	updateInterval: config.weather.interval || 6000,
	fadeInterval: config.weather.fadeInterval || 1000,
	intervalId: null
}

/**
 * Rounds a float to one decimal place
 * @param  {float} temperature The temperature to be rounded
 * @return {float}             The new floating point value
 */
weather.roundValue = function (temperature) {
	return parseFloat(temperature).toFixed(1);
}

/**
 * Converts the wind speed (km/h) into the values given by the Beaufort Wind Scale
 * @see http://www.spc.noaa.gov/faq/tornado/beaufort.html
 * @param  {int} kmh The wind speed in Kilometers Per Hour
 * @return {int}     The wind speed converted into its corresponding Beaufort number
 */
weather.kmh2Beaufort = function(kmh) {
	var speeds = [1, 5, 11, 19, 28, 38, 49, 61, 74, 88, 102, 117, 1000];
	for (var beaufort in speeds) {
		var speed = speeds[beaufort];
		if (speed > kmh) {
			return beaufort;
		}
	}
	return 12;
}

/**
 * Retrieves the current temperature and weather patter from the OpenWeatherMap API
 */
weather.updateCurrentWeather = function () {

	$.ajax({
		type: 'GET',
		url: weather.apiBase + '/' + weather.apiVersion + '/' + weather.weatherEndpoint,
		dataType: 'json',
		data: weather.params,
		success: function (data) {

			var _temperature = this.roundValue(data.main.temp),
				_temperatureMin = this.roundValue(data.main.temp_min),
				_temperatureMax = this.roundValue(data.main.temp_max),
				_wind = this.roundValue(data.wind.speed),
				_iconClass = this.iconTable[data.weather[0].icon];

			var _icon = '<span class="icon ' + _iconClass + ' dimmed wi"></span>';

			var _newTempHtml = _icon + '' + _temperature + '&deg;';

			$(this.temperatureLocation).updateWithText(_newTempHtml, this.fadeInterval);

			var _now = moment().format('HH:mm'),
				_sunrise = moment(data.sys.sunrise*1000).format('HH:mm'),
				_sunset = moment(data.sys.sunset*1000).format('HH:mm');

			var _newWindHtml = '<span class="wi wi-strong-wind xdimmed"></span> ' + this.kmh2Beaufort(_wind),
				_newSunHtml = '<span class="wi wi-sunrise xdimmed"></span> ' + _sunrise;

			if (_sunrise < _now && _sunset > _now) {
				_newSunHtml = '<span class="wi wi-sunset xdimmed"></span> ' + _sunset;
			}

			$(this.windSunLocation).updateWithText(_newWindHtml + ' ' + _newSunHtml+ '  ' +weather.params.q, this.fadeInterval);

		}.bind(this),
		error: function () {

		}
	});

}

/**
 * Updates the 5 Day Forecast from the OpenWeatherMap API
 */
weather.updateWeatherForecast = function () {

	$.ajax({
		type: 'GET',
		url: weather.apiBase + '/' + weather.apiVersion + '/' + weather.forecastEndpoint,
		data: weather.params,
		success: function (data) {

			var _opacity = 1,
			_forecastHtml = '';
			_forecastHtml += '<table class="forecast-table">';
			_forecastHtml += '<tr style="opacity:' + _opacity + '">';
			_forecastHtml += '<td class="day">' + weather.datelabel[weather.lang] +  '</td>';
			_forecastHtml += '<td class="icon-small ' + ' ' + '"></td>';
			_forecastHtml += '<td class="temp-min">' + 'Min' + '</td>';
			_forecastHtml += '<td class="temp-max">' + 'Max' + '</td>';
			
			for (var i = 0, count = data.list.length; i < count; i++) {
				var _forecast = data.list[i];
				_forecastHtml += '<tr style="opacity:' + _opacity + '">';
				_forecastHtml += '<td class="day">' + moment(_forecast.dt, 'X').format('ddd') + '</td>';
				_forecastHtml += '<td class="icon-small ' + this.iconTable[_forecast.weather[0].icon] + '"></td>';
				_forecastHtml += '<td class="temp-min">' + this.roundValue(_forecast.temp.min) + '</td>';
				_forecastHtml += '<td class="temp-max">' + this.roundValue(_forecast.temp.max) + '</td>';
				_forecastHtml += '</tr>';
				_opacity -= 0.155;
			}

			_forecastHtml += '</table>';

			$(this.forecastLocation).updateWithText(_forecastHtml, this.fadeInterval);

		}.bind(this),
		error: function () {

		}
	});

}

weather.init = function () {

	if (this.params.lang === undefined) {
		this.params.lang = this.lang;
	}

	if (this.params.cnt === undefined) {
		this.params.cnt = 5;
	}

	this.intervalId = setInterval(function () {
		this.updateCurrentWeather();
		this.updateWeatherForecast();
	}.bind(this), this.updateInterval);

}
