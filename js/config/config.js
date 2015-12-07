var config = {
    lastUpdate: '2015-12-07T18:25:53+00:00',
    lang: "de",
    time: {
        timeFormat: "24"
    },
    weather: {
	interval: 6000,
	fadeInterval: 1000,
        params: {
            q: "Düsseldorf,DE",
            units: "metric",
            lang: "de",
            APPID: "APIKEY"
        }
    },
    compliments: {
		interval: 30000,
		fadeInterval: 3000,
        morning: ["Guten Morgen, Schönling","Genieße den Tag","Gut geschlafen?"],
        afternoon: ["Wow, sexy!","Du siehst gut aus!","Heute ist dein Tag!"],
        evening: ["Wie war dein Tag?","Schöner Anblick!","Du bist sexy!","Mach dir einen schönen Abend!"]
    },
    news: {
		interval: 10000,
		fadeInterval: 3000,
	    fetchInterval: 60000,
        feed: ["http://www.faz.net/rss/aktuell/"]
    },
calendar: {
		maxItemsDisplayed: 20,
	    interval: 1000,
		fadeInterval: 1000,
		fetchInterval: 60000,
//		calendars: ["0=http://127.0.0.1/ical/FTNRW2015.ics","1=#ffffff","2=99","3=http://127.0.0.1/ical/FTNRW2016.ics","4=#ffffff","5=99"],
        calendars: [
            {
                url : "http://127.0.0.1/ical/FTNRW2015.ics",
                color: "#ffffff",
				slice: "99"
            },
			{
                url : "http://127.0.0.1/ical/FTNRW2016.ics",
                color: "#ffffff",
				slice: "99"
            }			
        ],
    },
}
