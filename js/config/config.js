var config = {
    lastUpdate: '2015-12-15T23:44:05+00:00',
	feature: {
		calendar: "on",
		compliments: "on",
		news: "on",
		openhab: "off",
		time: "on",
		weather: "on"
	},
    lang: "de_DE",
    time: {
        timeFormat: "24"
    },
    weather: {
	interval: 6000,
	fadeInterval: 1000,
        params: {
            q: "Düsseldorf,DE",
            units: "metric",
            lang: "en",
            APPID: ""
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
		interval: 15000,
		fadeInterval: 1500,
	    fetchInterval: 60000,
        feed: ["http://www.faz.net/rss/aktuell/","http://derwesten.dynamic.feedsportal.com/pf/637010/www.derwesten.de/nrz/staedte/duesseldorf/?service=rss"]
    },
	calendar: {
		maxItemsDisplayed: 20,
	    interval: 1000,
		fadeInterval: 1000,
		fetchInterval: 60000,
		calendars: [
			{url: "http://10.0.0.1:8888/ical/FTNRW2015.ics",color: "#FFFFFF",slice: "99"},
			{url: "http://10.0.0.1:8888/ical/FTNRW2016.ics",color: "#FFFFFF",slice: "99"},
			{url: "http://10.0.0.1:8888/ical/Abfallkalender2015.ics",color: "#FFFFFF",slice: "99"}
		],
    },
	openhab: {
		interval: 15000,
		fadeInterval: 5000,
		fetchInterval: 2000,
		feed: ["http://10.0.0.1:8081/rest/items/SmartMirrorTXT/?type=json"]
	},
}
