var config = {
    lang: 'de',
    time: {
        timeFormat: 24
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Düsseldorf,DE',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'de',
            // enter your APIKEY here, otherwise the weather-widget does not work
            APPID: '',
            datelabel: ['Tag','Min','Max']
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: ['Guten Morgen, Schönling','Genieße den Tag','Gut geschlafen?'],
        afternoon: ['Wow, sexy!','Du siehst gut aus!','Heute ist dein Tag!'],
        evening: ['Wie war dein Tag?','Schöner Anblick!','Du bist sexy!']
    },
    news: {
        feed: 'http://www.spiegel.de/schlagzeilen/tops/index.rss'
    },
    calendar: {
        maxItemsDisplayed: 20,
        calendars: [
            {
                url : "http://127.0.0.1/cal1.ics",
                color: "#ffffff",
				slice: "99", //To-Do:Slice specific calendars
            },

            {
                url : "http://127.0.0.1/cal2.ics",
                color: "#3399ff",
				slice: "99", //To-Do:Slice specific calendars
            },
			
        ],
    },
}
