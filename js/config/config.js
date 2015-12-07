var config = {
    lastUpdate: '2015-12-07T23:17:44+00:00',
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
//		calendars: ["http://www.schulferien.org/iCal/Ferien/icals/Ferien_Nordrhein_Westfalen_2015.ics","#ffffff","99","http://www.schulferien.org/iCal/Ferien/icals/Ferien_Nordrhein_Westfalen_2016.ics","#3399ff","99"],
        calendars: [
            {
                url : "http://www.schulferien.org/iCal/Ferien/icals/Ferien_Nordrhein_Westfalen_2015.ics",
                color: "#ffffff",
				slice: "99"
            },
			{
                url : "http://www.schulferien.org/iCal/Ferien/icals/Ferien_Nordrhein_Westfalen_2016.ics",
                color: "#3399ff",
				slice: "99"
            },
        ],
    },
}
