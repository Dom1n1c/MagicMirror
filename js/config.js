var config = {
    lang: 'de',
    time: {
        timeFormat: 24
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Hilden,DE',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'de',
            APPID: 'APIKEY'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Guten morgen, eins nicer dude!',
            'Frühes vögeln entspannt den Wurm!',
            'Alles fresh Homie?'
        ],
        afternoon: [
            'Geile sau!',
            'Du siehst geil aus!',
            'Heute mal wieder prächtig!'
        ],
        evening: [
            'Hey, hooojj!',
            'Sip booooy!'
        ]
    },
    news: {
        feed: 'http://t3n.de/news/feed/'
    },
    calendar: {
        maxItemsDisplayed: 20,
			calendars: [
            {
                url : "http://127.0.0.1/ical/Calendar.ics",
                color: "#ffffff",
            },
        ],
    },
}
