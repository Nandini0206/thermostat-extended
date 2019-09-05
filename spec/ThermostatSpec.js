describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initialisation", function() {
    it("has a starting temp of 20", function() {
      expect(thermostat.DEFAULT_TEMP).toEqual(20);
    });

    it("power save mode is on by default", function() {
      expect(thermostat.powerSave).toEqual(true);
    });
  });

  describe("up", function () {
    it("increases temperature", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });
  });

  describe("down", function() {
    it("decreases temperature", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("doesn't allow temp to be lower than 10", function() {
      thermostat.temperature = 10
      expect(function() {thermostat.down()}).toThrow("Too cold!")
    });
  });

  describe("power saving mode", function() {
    it("on - doesn't allow temp to be above 25", function() {
      thermostat.temperature = 25;
      expect(function() {thermostat.up()}).toThrow("Power saving mode on!")
    });

    it("off - doesn't allow temp to be above 32", function() {
      thermostat.temperature = 32;
      thermostat.powerSave = false;
      expect(function() {thermostat.up()}).toThrow("Too hot!")
    });
  });

  describe("reset", function() {
    it("resets temperature back to 20 degrees", function () {
      thermostat.temperature = 30;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("thermostat's energy usage", function() {
    it("shows low-usage when temp < 18", function() {
      thermostat.temperature = 17;
      expect(thermostat.usage()).toEqual("low-usage");
    });

    it("shows medium-usage when temp < 25", function() {
      thermostat.temperature = 24;
      expect(thermostat.usage()).toEqual("medium-usage");
    });

    it("shows high-usage when temp >= 25", function() {
      thermostat.temperature = 25;
      expect(thermostat.usage()).toEqual("high-usage");
    });
  });

  describe("current temperature", function() {
    it("shows current temperature", function() {
      expect(thermostat.currentTemperature()).toEqual(thermostat.temperature);
    });
  });

  describe("power saving on", function () {
    it("turns power saving on", function (){
      thermostat.powerSaveOff();
      thermostat.powerSaveOn();
      expect(thermostat.powerSave).toEqual(true);
    });
  });
});
