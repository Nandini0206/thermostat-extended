$(document).ready(function() {
	  var thermostat = new Thermostat();
	  $('#temperature').text(thermostat.temperature);

    $('#on').text(thermostat.powerSaveOn());

    $('#off').text(thermostat.powerSaveOff());

    $('usage').text(thermostat.usage());

    $('reset').on('mouseup', function() {
      thermostat.reset();
      $('temperature').text(thermostat.temperature);
    });

    $('#up').on('mouseup', function() {
      thermostat.up();
      $('#temperature').text(thermostat.temperature);
    });

    $('down').on('mouseup', function(){
      thermostat.down();
      $('#temperature').text(thermostat.temperature);
    });
})
