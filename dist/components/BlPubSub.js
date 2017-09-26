'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file
 * @copyright
 * @license
 *
 */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

var NRP = require('node-redis-pubsub');
var bunyan = require('bunyan');

var config = {
   port: 6379, // Port of your locally running Redis server
   host: '35.197.141.242'
};
var log = bunyan.createLogger({ name: 'BlPubSub' });
/**
 * BlPubSub encapsulates the functionality to create various API wrapper objects.
 */

var BlPubSub = function () {
   /**
    * Create a new BlPubSub.
    */

   function BlPubSub() {
      _classCallCheck(this, BlPubSub);

      this.nrp = new NRP(config);
      this._this = this;
   }

   _createClass(BlPubSub, [{
      key: 'emit',
      value: function emit(topic, message) {
         log.info('emit');
         this.nrp.emit(topic, message);
      }
   }, {
      key: 'on',
      value: function on(topic, message) {
         log.info('on');
         this.nrp.on(topic, message);
      }
   }]);

   return BlPubSub;
}();

module.exports = BlPubSub;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJsUHViU3ViLmpzIl0sIm5hbWVzIjpbIk5SUCIsInJlcXVpcmUiLCJidW55YW4iLCJjb25maWciLCJwb3J0IiwiaG9zdCIsImxvZyIsImNyZWF0ZUxvZ2dlciIsIm5hbWUiLCJCbFB1YlN1YiIsIm5ycCIsIl90aGlzIiwidG9waWMiLCJtZXNzYWdlIiwiaW5mbyIsImVtaXQiLCJvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFNQTs7QUFFQSxJQUFJQSxNQUFVQyxRQUFRLG1CQUFSLENBQWQ7QUFDQSxJQUFJQyxTQUFVRCxRQUFRLFFBQVIsQ0FBZDs7QUFFQSxJQUFJRSxTQUFTO0FBQ1ZDLFNBQVEsSUFERSxFQUNNO0FBQ2hCQyxTQUFRO0FBRkUsQ0FBYjtBQUlBLElBQUlDLE1BQU1KLE9BQU9LLFlBQVAsQ0FBb0IsRUFBQ0MsTUFBSyxVQUFOLEVBQXBCLENBQVY7QUFDQTs7OztJQUdNQyxRO0FBQ0g7Ozs7QUFJQSx1QkFBYztBQUFBOztBQUNYLFdBQUtDLEdBQUwsR0FBVyxJQUFJVixHQUFKLENBQVFHLE1BQVIsQ0FBWDtBQUNBLFdBQUtRLEtBQUwsR0FBYSxJQUFiO0FBQ0Y7Ozs7MkJBRUtDLEssRUFBT0MsTyxFQUFTO0FBQ25CUCxhQUFJUSxJQUFKLENBQVMsTUFBVDtBQUNBLGNBQUtKLEdBQUwsQ0FBU0ssSUFBVCxDQUFjSCxLQUFkLEVBQXNCQyxPQUF0QjtBQUNGOzs7eUJBRUdELEssRUFBT0MsTyxFQUFTO0FBQ2pCUCxhQUFJUSxJQUFKLENBQVMsSUFBVDtBQUNBLGNBQUtKLEdBQUwsQ0FBU00sRUFBVCxDQUFZSixLQUFaLEVBQW9CQyxPQUFwQjtBQUNGOzs7Ozs7QUFHSkksT0FBT0MsT0FBUCxHQUFpQlQsUUFBakIiLCJmaWxlIjoiQmxQdWJTdWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0XG4gKiBAbGljZW5zZVxuICpcbiAqL1xuLyogZXNsaW50IHZhbGlkLWpzZG9jOiBbXCJlcnJvclwiLCB7XCJyZXF1aXJlUmV0dXJuRGVzY3JpcHRpb25cIjogZmFsc2V9XSAqL1xuXG52YXIgTlJQICAgICA9IHJlcXVpcmUoJ25vZGUtcmVkaXMtcHVic3ViJyk7XG52YXIgYnVueWFuICA9IHJlcXVpcmUoJ2J1bnlhbicpXG5cbnZhciBjb25maWcgPSB7XG4gICBwb3J0ICA6IDYzNzkgICwgLy8gUG9ydCBvZiB5b3VyIGxvY2FsbHkgcnVubmluZyBSZWRpcyBzZXJ2ZXJcbiAgIGhvc3QgIDogJzM1LjE5Ny4xNDEuMjQyJyxcbn07XG52YXIgbG9nID0gYnVueWFuLmNyZWF0ZUxvZ2dlcih7bmFtZTonQmxQdWJTdWInfSlcbi8qKlxuICogQmxQdWJTdWIgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGNyZWF0ZSB2YXJpb3VzIEFQSSB3cmFwcGVyIG9iamVjdHMuXG4gKi9cbmNsYXNzIEJsUHViU3ViIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IEJsUHViU3ViLlxuICAgICovXG5cbiAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5ucnAgPSBuZXcgTlJQKGNvbmZpZyk7XG4gICAgICB0aGlzLl90aGlzID0gdGhpc1xuICAgfVxuXG4gICBlbWl0ICh0b3BpYywgbWVzc2FnZSkge1xuICAgICAgbG9nLmluZm8oJ2VtaXQnKVxuICAgICAgdGhpcy5ucnAuZW1pdCh0b3BpYyAsIG1lc3NhZ2UpO1xuICAgfVxuXG4gICBvbiAodG9waWMsIG1lc3NhZ2UpIHtcbiAgICAgIGxvZy5pbmZvKCdvbicpXG4gICAgICB0aGlzLm5ycC5vbih0b3BpYyAsIG1lc3NhZ2UpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJsUHViU3ViO1xuIl19
//# sourceMappingURL=BlPubSub.js.map
