var bleno = require('bleno'),
  BeeperService = require('./beeper-service');
  

// sets primaryService as the class found in beeper-service.js  
var primaryService = new BeeperService();

bleno.on('stateChange', function(state) {
    console.log('on -> stateChange: ' + state);

    if (state === 'poweredOn') {
        bleno.startAdvertising('Beeper', [primaryService.uuid]);
    } else {
        bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', function(error) {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

    if (!error) {
        /*setServices to the primaryServices class*/
        bleno.setServices([primaryService]);
    }
});
