/**
 * @file
 * @copyright
 * @license
 *
 */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

var NRP     = require('node-redis-pubsub');
var bunyan  = require('bunyan')

var config = {
   port  : 6379  , // Port of your locally running Redis server
   host  : '35.197.141.242',
};
var log = bunyan.createLogger({name:'BlPubSub'})
/**
 * BlPubSub encapsulates the functionality to create various API wrapper objects.
 */
class BlPubSub {
   /**
    * Create a new BlPubSub.
    */

   constructor() {
      this.nrp = new NRP(config);
      this._this = this
   }

   emit (topic, message) {
      log.info('emit')
      this.nrp.emit(topic , message);
   }

   on (topic, message) {
      log.info('on')
      this.nrp.on(topic , message);
   }
}

module.exports = BlPubSub;
