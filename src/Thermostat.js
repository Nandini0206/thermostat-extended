function Thermostat() {
  this.temperature = 20;
  this.powerSave = true;
};

Thermostat.prototype.up = function() {
  if (this.temperature === 25 && this.powerSave === true) {
    throw "Power saving mode on!";
  } else if (this.temperature === 32 && this.powerSave === false) {
    throw "Too hot!"
  }
  else {
  return this.temperature = this.temperature + 1;
  }
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) {
    throw "Too cold!";
  } else {
    return this.temperature = this.temperature -1;
  }
};

Thermostat.prototype.reset = function() {
  return this.temperature = 20;
};
