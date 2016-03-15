var util = require('util'),
  bleno = require('bleno'),
  BlenoPrimaryService = bleno.PrimaryService,
  BeeperCharacteristic = require('./beeper-characteristic');

function BeeperService() {
/*                              */

BeeperService.super_.call(this, {
      uuid: '1828',
      value: new Buffer('Test Service'),
      characteristics: [
      	/*Creates a service that uses the class found in beeper-characteristic.js
      	*/
        new BeeperCharacteristic()
      ]
  });

/*                              */

}

util.inherits(BeeperService, BlenoPrimaryService);

module.exports = BeeperService;
