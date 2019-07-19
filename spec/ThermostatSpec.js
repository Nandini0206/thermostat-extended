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
});
