$(document).ready(function() {
	  var thermostat = new Thermostat();
	  $('#temperature').text(thermostat.temperature);

    $('#on').on('mouseup', function() {
      thermostat.powerSaveOn();
      $('#power-saving-status').text(thermostat.powerSave);
    });

    $('#off').on('mouseup', function() {
      thermostat.powerSaveOff();
      $('#power-saving-status').text(thermostat.powerSave);
    });

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
