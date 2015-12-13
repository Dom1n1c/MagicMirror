var openhab = {
	url: config.openhab.url || null,
	fetchInterval: config.openhab.fetchInterval || 5000,
	fadeInterval: config.openhab.fadeInterval || 2000,
	openhabLocation: '.openhab',
	complimentLocation: '.compliment',
	fetchOpenhabIntervalId: null
}
				
openhab.fetchOpenhab = function () {
		var _item = "test";
		$.getJSON(openhab.url, {}, function(json, textStatus) {
					
                        if (json) {
                                _item = json.state;
                        }
		$(openhab.openhabLocation).updateWithText(_item, openhab.fadeInterval);
		
		if (_item != "") {
                                $(openhab.openhabLocation).fadeIn(openhab.fadeInterval);
                                $(openhab.complimentLocation).fadeOut(openhab.fadeInterval);
                        } else {
                                $(openhab.openhabLocation).fadeOut(openhab.fadeInterval);
                                $(openhab.complimentLocation).fadeIn(openhab.fadeInterval);
                        }
		}

	return true;
}




openhab.init = function () {
	this.fetchOpenhab();

	this.fetchOpenhabIntervalId = setInterval(function () {
		this.fetchOpenhab()
	}.bind(this), openhab.fetchInterval)

}