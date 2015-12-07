Smartmirror
===========

##Introduction

This is the interface for my Smartmirror.
I also added a config page to config the mirror easily.
Runs as a php script on a web server with basically no external dependencies.

##Configuration

Modify js/config.js to change some general variables (language, wather location, compliments, news feed RSS).
This can also be done with the web interface. Simply browse your browser to http://127.0.0.1/smartmirror/config (or whereever you located it on your server)
In order to change your config.js trough the browser, you need to adjust the permissions (0777) (fix_permissions.sh for linux can be found in root)
Please mind that you have to create an account at OpenWeatherMap.org and enter the APIKEY to use weather data

##To-Do

-Translation of the datelabels in [weather.js](js/weather/weather.js) file. (If someone can help me with the translation of the Words Day, Min and Max(for minimum and maximum), you're welcome)
availible at the moment, but maybe missspelled: 
'Bulgarian', 'Catalan', 'Chinese Traditional', 'Croatian', 'Dutch', 'English', 'Finnish', 'French', 'German', 'Italian', 'Polish', 'Portuguese', 'Romanian', 'Russian',  'Spanish', 'Swedish', 'Turkish', 'Ukranian'

-config of the calendar trough webinterface. (it's difficult to read and write the array with 3 items)

-slicing calendar trough config

-dis- and enable features trough config

-enable small weather icons in the weather widget (forecast-icons are not shown atm)


##Code

###[main.js](js/main.js)

This file initiates the separate pieces of functionality that will appear in the view.  It also includes various utility functions that are used to update what is visible.

###[Calendar](js/calendar)

Parsing functionality for the Calendar that retrieves and updates the calendar based on the interval set in config.js file. 


###[Compliments](js/compliments)

Functionality related to inserting compliments into the view and rotating them based on a specific interval set in the config.js file.

###[News](js/news)

Takes an array of news feeds (or a single string) from the config file and retrieves each one so that it can be displayed in a loop based on the interval set.

###[Time](js/time)

Updates the time on the screen on one second interval.

###[Version](js/version)

Checks the git version and refreshes if a new version has been pulled.

###[Weather](js/weather)

Takes the user's inserted location, language, unit type, and OpenWeatherMap API key and grabs the five day weather forecast from OpenWeatherMap. You need to set the API key in the config for this to work. (See *configuration*.)


##Screenshots
Configpage:
![smartmirror config](https://cloud.githubusercontent.com/assets/8407566/11643292/247d9d6c-9d43-11e5-9a97-aa2b00c6d168.png)
Smartmirror:
![smartmirror](https://cloud.githubusercontent.com/assets/8407566/11643293/2482e47a-9d43-11e5-9edd-0081c2232a6e.png)
