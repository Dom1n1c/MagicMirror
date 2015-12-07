<!-- This is an extremely simplistic, linear script to grab the values and stick them into the template, I didn't think this needed anything sort of complex structure for growth.  The downsides is that the previous file is overwritten every time.  I'm sure a backup system could be implemented but I don't think it's necessary -->
<?php
	$templateFile = "../js/config/config.template";
	$writeFile = "../js/config/config.js";

	$date = date(DATE_W3C);
	$language = (string)"\"" . $_GET['lang'] . "\"";
	$timeFormat = (string)"\"" . $_GET['tf'] . "\"";
	
	
	$weather = [];
	$weather['interval'] = (string) $_GET['ivweat'];
	$weather['fadeinterval'] = (string) $_GET['faweat'];
	$weather['q'] = (string)"\"" . $_GET['q'] . "\"";
	$weather['units'] = (string)"\"" . $_GET['units'] . "\"";
	$weather['APPID'] = (string)"\"" . $_GET['APPID'] . "\"";
	
	
	$compliments = [];
	$compliments['interval'] = (string) $_GET['ivcomp'];
	$compliments['fadeinterval'] = (string) $_GET['facomp'];
	$compliments['morning'] = "\"" . implode('","', $_GET['morning']) . "\"";
	$compliments['afternoon'] = "\"" . implode('","', $_GET['afternoon']) . "\"";
	$compliments['evening'] = "\"" . implode('","', $_GET['evening']) . "\"";
	$news = [];
	$news['interval'] = (string) $_GET['ivnews'];
	$news['fadeinterval'] = (string) $_GET['fanews'];
	$news['fetchinterval'] = (string) $_GET['fenews'];
	$news['feed'] = "\"" . implode('","', $_GET['newsfeed']) . "\"";
	$calendar = [];
	$calendar['maxitems'] = (string) $_GET['mical'];
	$calendar['interval'] = (string) $_GET['ivcal'];
	$calendar['fadeinterval'] = (string) $_GET['facal'];
	$calendar['fetchinterval'] = (string) $_GET['fecal'];
	$calendar['feed'] = "\"" . implode('","', $_GET['calfeed']) . "\"";

	// Locations that will be replaced
	$replaceLocations = array('{%lastupdate%}', '{%lang%}', '{%time.timeFormat%}', '{%weather.interval%}', '{%weather.fadeinterval%}', '{%weather.location%}', '{%weather.units%}', '{%weather.APPID%}', '{%compliments.interval%}', '{%compliments.fadeinterval%}', '{%compliments.morning%}', '{%compliments.afternoon%}', '{%compliments.evening%}', '{%news.interval%}', '{%news.fadeinterval%}','{%news.fetchinterval%}','{%news.feed%}', '{%calendar.maxitems%}', '{%calendar.interval%}', '{%calendar.fadeinterval%}', '{%calendar.fetchinterval%}','{%calendar.feed%}');

	// Items that will replace the placeholders
	$replaceValues = array($date, $language, $timeFormat, $weather['interval'], $weather['fadeinterval'], $weather['q'], $weather['units'], $weather['APPID'], $compliments['interval'], $compliments['fadeinterval'], $compliments['morning'], $compliments['afternoon'], $compliments['evening'], $news['interval'], $news['fadeinterval'], $news['fetchinterval'], $news['feed'], $calendar['maxitems'], $calendar['interval'], $calendar['fadeinterval'], $calendar['fetchinterval'], $calendar['feed']);

	// Get the template file
	$config = file_get_contents($templateFile, true);

	// find and replace all options
	$config = str_ireplace($replaceLocations, $replaceValues, $config);

	$handle = fopen($writeFile, 'w') or die('Cannot open file: ' . $writeFile);

	fwrite($handle, $config);

	fclose($handle);
	header('refresh: 1; URL=../config');

