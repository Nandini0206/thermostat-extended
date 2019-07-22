function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
  this.powerSave = true;
  this.MIN_TEMP = 10;
  this.POWER_SAVE_MAX_TEMP = 25;
  this.MAX_TEMP = 32;
  this.MID_ENERGY_USAGE = 18;
};

Thermostat.prototype.up = function() {
  if (this.temperature === this.POWER_SAVE_MAX_TEMP && this.powerSave === true) {
    throw "Power saving mode on!";
  } else if (this.temperature === this.MAX_TEMP && this.powerSave === false) {
    throw "Too hot!"
  }
  else {
  return this.temperature = this.temperature + 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature === this.MIN_TEMP) {
    throw "Too cold!";
  } else {
    return this.temperature = this.temperature -1;
  }
};

Thermostat.prototype.reset = function() {
  return this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.usage = function() {
  if (this.temperature < this.MID_ENERGY_USAGE) {
    return "low-usage";
  } else if (this.temperature < this.POWER_SAVE_MAX_TEMP) {
    return "medium-usage";
  } else
    return "high-usage";
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature
};
