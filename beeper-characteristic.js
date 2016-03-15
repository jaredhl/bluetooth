var util = require('util'),
  os = require('os'),
  exec = require('child_process').exec,
  bleno = require('bleno'),
  Descriptor = bleno.Descriptor,
  Characteristic = bleno.Characteristic;

var BeeperCharacteristic = function() {
/*                                 */
BeeperCharacteristic.super_.call(this, {
      uuid: '0x2AC9',
      properties: ['read'],
      descriptors: [
        new Descriptor({
            uuid: '2901',
            value: 'HH-MM-SS-DD'
        }),
     ]
  });

/*                                 */
};

util.inherits(BeeperCharacteristic, Characteristic);

/*var result;
function getUptime() {
	var child = require('child_process');
	child.exec('uptime', function (error, stdout, stderr) {
		result = stdout;
    	console.log(result);
	});
};*/
var uptimeVar;
BeeperCharacteristic.prototype.onReadRequest = function(offset, callback) {
		console.log("Read request received");
		var child = require('child_process');
		child.exec('uptime', function (error, stdout, stderr) {
    		console.log(stdout);
    		uptimeVar = stdout;
    		callback(this.RESULT_SUCCESS);
		});

	/*child.exec('uptime', function (error, stdout, stderr) {
    console.log(stdout);
	});*/

	//callback(this.RESULT_SUCCESS, new Buffer(uptime));
	/*callback(this.RESULT_SUCCESS, new Buffer("Echo: " + 
                                    (this.value ? this.value.toString("utf-8") : "")));*/
	/*var alertLevel = data.readUIntLE(0,1) if (alertLevel == 2) {
    	console.log("High Alert!");
    	callback(this.RESULT_SUCCESS);
  	}*/
  	callback(this.RESULT_SUCCESS, new Buffer("Done " + uptimeVar));
};

module.exports = BeeperCharacteristic;
