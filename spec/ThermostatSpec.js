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
});
