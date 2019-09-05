$(document).ready(function() {
	  var thermostat = new Thermostat();
	  $('#temperature').text(thermostat.temperature);
})

$(document).ready(function() {
	  var thermostat = new Thermostat();
    $('#on').text(thermostat.powerSaveOn());
})

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#off').text(thermostat.powerSaveOff());
})
