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

    $('#usage-meter').text(thermostat.usage());

    $('#reset').on('mouseup', function() {
      thermostat.reset();
      $('temperature').text(thermostat.temperature);
      if(thermostat.usage() === "high-usage") {
        $('#usage-meter').text(thermostat.usage());
      } else if (thermostat.usage() === "medium-usage") {
        $('#usage-meter').text(thermostat.usage());
      } else if (thermostat.usage() === "low-usage") {
        $('#usage-meter').text(thermostat.usage());
      }
    });

    $('#up').on('mouseup', function() {
      thermostat.up();
      $('#temperature').text(thermostat.temperature);
      if(thermostat.usage() === "high-usage") {
        $('#usage-meter').text(thermostat.usage());
      } else if (thermostat.usage() === "medium-usage") {
        $('#usage-meter').text(thermostat.usage());
      } else if (thermostat.usage() === "low-usage") {
        $('#usage-meter').text(thermostat.usage());
      }
    });

    $('down').on('mouseup', function(){
      thermostat.down();
      $('#temperature').text(thermostat.temperature);
      if(thermostat.usage() === "high-usage") {
        $('#usage-meter').text(thermostat.usage());
      } else if (thermostat.usage() === "medium-usage") {
        $('#usage-meter').text(thermostat.usage());
      } else if (thermostat.usage() === "low-usage") {
        $('#usage-meter').text(thermostat.usage());
      }
    });
  })
