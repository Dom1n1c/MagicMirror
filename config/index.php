<!doctype html>
<html>
<head>
	<title>Smartmirror Config</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.6.0/pure-min.css">
	<link rel="stylesheet" href="../css/config/side-menu.css">
	<link rel="shortcut icon" href="../css/favicon.ico" type="image/x-icon"/>
	<style>
		/* custom height for the add, remove buttons*/
		fieldset div > button.remove, fieldset div >button.add { margin-top: .15em !important; height: 2em !important; }
	</style>
</head>
<body>
<div id="layout">
    <a href="#menu" id="menuLink" class="menu-link">
        <span></span>
    </a>

    <div id="menu">
        <div class="pure-menu">
            <a class="pure-menu-heading" href="#">Config</a>
            <ul class="pure-menu-list">
                <li class="pure-menu-item"><a href="#feature-group" class="pure-menu-link">		Feature Overview</a></li>
                <li class="pure-menu-item"><a href="#language-group" class="pure-menu-link">	Language</a></li>
                <li class="pure-menu-item"><a href="#time-group" class="pure-menu-link">		Time</a></li>
                <li class="pure-menu-item"><a href="#weather-group" class="pure-menu-link">		Weather</a></li>
                <li class="pure-menu-item"><a href="#compliments-group" class="pure-menu-link">	Compliments</a></li>
                <li class="pure-menu-item"><a href="#news-group" class="pure-menu-link">		News</a></li>
                <li class="pure-menu-item"><a href="#calendar-group" class="pure-menu-link">	Calendar</a></li>
                <li class="pure-menu-item"><a href="#openhab-group" class="pure-menu-link">		Openhab</a></li>
        </div>
    </div>

	<div id="main">
		<div class="header">
			<h1>Smartmirror Configuration</h1>
			<h2>Configure your Smartmirror with these options.</h2>
		</div>

		<div class="content">
			<form action="../php/send.php" class="pure-form">
				<fieldset id="feature-group">
						<h2 class="content-subhead">Feature Overview</h2>
						<h3 class="content-subhead">Enable or Disable Features</h3>
					<div class="pure-g">
						<div class="pure-u-7-24">Calendar </div>
						<div class="pure-u-4-24">
							<select class="pure-input-1" name="f1" value="" id="f1"></select>
						</div>
						<div class="pure-u-11-24"></div>
						<div class="pure-u-7-24">Compliments </div>
						<div class="pure-u-4-24">
							<select class="pure-input-1" name="f2" value="" id="f2"></select>
						</div>
						<div class="pure-u-11-24"></div>
						<div class="pure-u-7-24">News</div>
						<div class="pure-u-4-24">
							<select class="pure-input-1" name="f3" value="" id="f3"></select>
						</div>
						<div class="pure-u-11-24"></div>
						<div class="pure-u-7-24">Openhab</div>
						<div class="pure-u-4-24">
							<select class="pure-input-1" name="f4" value="" id="f4"></select>
						</div>
						<div class="pure-u-11-24"></div>
						<div class="pure-u-7-24">Time </div>
						<div class="pure-u-4-24">
							<select class="pure-input-1" name="f5" value="" id="f5"></select>
						</div>
						<div class="pure-u-11-24"></div>
						<div class="pure-u-7-24">Weather</div>
						<div class="pure-u-4-24">
							<select class="pure-input-1" name="f6" value="" id="f6"></select>
						</div>
					</div>
				</fieldset>
				
				<fieldset id="language-group">
					<h2 class="content-subhead">Language Configuration</h2>
					<div class="pure-g">
						<div class="pure-u-11-24">
							<select class="pure-input-1" name="lang" value="">
							</select>
						</div>
					</div>
				</fieldset>
				
				<fieldset id="time-group">
					<h2 class="content-subhead">Time Configuration (12 or 24 hours)</h2>
					<div class="pure-g">
						<div class="pure-u-11-24">
							<select class="pure-input-1" name="tf" value="24">
								<option value="12">12</option>
								<option value="24">24</option>
							</select>
						</div>
					</div>
				</fieldset>

				<fieldset id="weather-group" class="pure-form-stacked">
					<h2 class="content-subhead">Weather Configuration</h2>
					<h3 class="content-subhead">Update and Fade-interval (ms)</h3>
					<div class="pure-g">
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="interval" type="number" name="ivweat" placeholder="Update Interval" value="" required title="Please enter the Update-interval (ms)">
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="fadeinterval" type="number" name="faweat" placeholder="Fade Interval" value="" required title="Please enter the Fade-interval (ms)">
						</div>
					</div>
					<h3 class="content-subhead">APIKEY, Location and Unit</h3>
					<div class="pure-g">
						<div class="pure-u-12-24">
							<input class="pure-u-1" id="APPID" type="text" name="APPID" placeholder="YOUR_WEATHER_API_KEY" value="" required title="Please enter your APIKEY">
						</div>
						<div class="pure-u-12-24"></div>
						<div class="pure-u-12-24">
							<input class="pure-u-1" id="q" type="text" name="q" placeholder="Weather Location" value="" required title="Please enter your Location">
						</div>
						<div class="pure-u-12-24"></div>
						<div class="pure-u-12-24">
							<select class="pure-input-1" name="units" value="" required="">
							</select>
						</div>
					</div>	
				</fieldset>				
				
				<fieldset id="compliments-group">
					<h2 class="content-subhead">Compliments Configuration</h2>
					<h3 class="content-subhead">Update and Fade-interval (ms)</h3>
					<div class="pure-g">
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="interval" type="number" name="ivcomp" placeholder="Update Interval" value="" required title="Please enter the Update-interval (ms)">
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="fadeinterval" type="number" name="facomp" placeholder="Fade Interval" value="" required title="Please enter the Fade-interval (ms)">
						</div>
					</div>

					<h3 class="content-subhead">Morning Compliments</h3>
					<div class="pure-group pure-g">
						<div class="pure-u-1-24"></div>
						<div id="morning-compliments-remove" class="pure-u-2-24"></div>
						<div class="pure-u-1-24"></div>
						<div id="morning-compliments" class="pure-u-20-24"></div>
					</div>			

					<h3 class="content-subhead">Afternoon Compliments</h3>
					<div class="pure-group pure-g">
						<div class="pure-u-1-24"></div>
						<div id="afternoon-compliments-remove" class="pure-u-2-24"></div>
						<div class="pure-u-1-24"></div>
						<div id="afternoon-compliments" class="pure-u-20-24"></div>
					</div>

					<h3 class="content-subhead">Evening Compliments</h3>
					<div class="pure-group pure-g">
						<div class="pure-u-1-24"></div>
						<div id="evening-compliments-remove" class="pure-u-2-24"></div>
						<div class="pure-u-1-24"></div>
						<div id="evening-compliments" class="pure-u-20-24"></div>
					</div>
				</fieldset>
				
				<fieldset id="news-group">
					<h2 class="content-subhead">News Feeds</h2>
					<h3 class="content-subhead">Update,Fade and Fetch-interval (ms)</h3>
					<div class="pure-g">
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="interval" type="number" name="ivnews" placeholder="Update Interval" value="" required title="Please enter the Update-interval (ms)">
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="fadeinterval" type="number" name="fanews" placeholder="Fade Interval" value="" required title="Please enter the Fade-interval (ms)">
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="fetchinterval" type="number" name="fenews" placeholder="Fetch Interval" value="" required title="Please enter the Fetch-interval (ms)">
						</div>
					</div>
					<h3 class="content-subhead">News Feed configuration</h3>
					<div class="pure-group pure-g">
						<div class="pure-u-1-24"></div>
						<div id="news-feeds-remove" class="pure-u-2-24"></div>
						<div class="pure-u-1-24"></div>
						<div id="news-feeds" class="pure-u-20-24">
						</div>
					</div>
				</fieldset>
				
				<fieldset id="calendar-group">
					<h2 class="content-subhead">Calendar Configuration</h2>
					<h3 class="content-subhead">Maximum calendar items</h3>
					<div class="pure-g">
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="maxitems" type="number" name="mical" placeholder="Max items displayed" value="" required title="Please specify the displayed items">
						</div>
					</div>
				<h3 class="content-subhead">Update,Fade and Fetch-interval (ms)</h3>
					<div class="pure-g">
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="interval" type="number" name="ivcal" placeholder="Update Interval" value="" required title="Please enter the Update-interval (ms)">
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="fadeinterval" type="number" name="facal" placeholder="Fade Interval" value="" required title="Please enter the Fade-interval (ms)">
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="fetchinterval" type="number" name="fecal" placeholder="Fetch Interval" value="" required title="Please enter the Fetch-interval (ms)">
						</div>
					</div>
				<h3 class="content-subhead">Calendar Feed configuration</h3>
					<div class="pure-group pure-g">
						<div class="pure-u-1-24"></div>
						<div id="calendar-feeds-remove" class="pure-u-2-24"></div>
						<div class="pure-u-1-24"></div>
						<div id="calendar-feeds" class="pure-u-20-24">
						</div>
					</div>
				</fieldset>
				
				<fieldset id="openhab-group">
					<h2 class="content-subhead">Openhab Configuration</h2>
					<h3 class="content-subhead">Update,Fade and Fetch-interval (ms)</h3>
					<div class="pure-g">
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="interval" type="number" name="ivoha" placeholder="Update Interval" value="" required title="Please enter the Update-interval (ms)">
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="fadeinterval" type="number" name="faoha" placeholder="Fade Interval" value="" required title="Please enter the Fade-interval (ms)">
						</div>
						<div class="pure-u-3-24"></div>						
						<div class="pure-u-6-24">
							<input class="pure-u-1" id="fetchinterval" type="number" name="feoha" placeholder="Fetch Interval" value="" required title="Please enter the Fetch-interval (ms)">
						</div>
					</div>
					<h3 class="content-subhead">Openhab Feed configuration</h3>
					<div class="pure-group pure-g">
						<div class="pure-u-1-24"></div>
						<div id="openhab-feeds-remove" class="pure-u-2-24"></div>
						<div class="pure-u-1-24"></div>
						<div id="openhab-feeds" class="pure-u-20-24">
						</div>
					</div>					
				</fieldset>
								
				<fieldset id="button-group">				
					<h2 class="content-subhead"></h2>
					<div class="pure-g">
						<div class="pure-u-6-24">
							<input class="button-success pure-button pure-button-primary pure-input-1" type="submit" value="Submit">
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="button-success pure-button pure-button pure-input-1" value="Cancel" onclick='window.location.reload(true);'>
						</div>
						<div class="pure-u-3-24"></div>
						<div class="pure-u-6-24">
							<input class="button-success pure-button pure-button pure-input-1" value="show smartmirror" onclick="window.location.href='../'">
						</div>
					</div>
				</fieldset>				
			</form>
		</div>
	</div>
</div>
<script src="../js/addons/jquery.js"></script>
<script src="../js/config/config.js"></script>
<script src="../js/config/main.js"></script>
<script src="../js/config/button.js"></script>
<script type="text/javascript">
	(function (window, document) {

	    var layout   = document.getElementById('layout'),
	        menu     = document.getElementById('menu'),
	        menuLink = document.getElementById('menuLink');

	    function toggleClass(element, className) {
	        var classes = element.className.split(/\s+/),
	            length = classes.length,
	            i = 0;

	        for(; i < length; i++) {
	          if (classes[i] === className) {
	            classes.splice(i, 1);
	            break;
	          }
	        }
	        // The className is not found
	        if (length === classes.length) {
	            classes.push(className);
	        }

	        element.className = classes.join(' ');
	    }

	    menuLink.onclick = function (e) {
	        var active = 'active';

	        e.preventDefault();
	        toggleClass(layout, active);
	        toggleClass(menu, active);
	        toggleClass(menuLink, active);
	    };

	}(this, this.document));
</script>
</body>
</html>