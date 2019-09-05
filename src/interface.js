$(document).ready(function() {
	  var thermostat = new Thermostat();
	  $('#temperature').text(thermostat.temperature);

    $('#on').text(thermostat.powerSaveOn());

    $('#off').text(thermostat.powerSaveOff());

    $('#up').on('mouseup', function() {
      thermostat.up();
      $('#temperature').text(thermostat.temperature);
    });

    $('down').on('mouseup', function(){
      thermostat.down();
      $('#temperature').text(thermostat.temperature);
    });
})
