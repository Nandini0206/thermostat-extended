describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initial temperature", function() {
    it("has a starting temp of 20", function() {
      expect(thermostat.temperature).toEqual(20);
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
      thermostat.powerSave = true;
      expect(function () {thermostat.up()}).toThrow("Power saving mode on!")
    });
  });
});
