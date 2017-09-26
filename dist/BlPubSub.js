(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.BlPubSub = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"bunyan":undefined,"node-redis-pubsub":undefined}]},{},[1])(1)
});

//# sourceMappingURL=BlPubSub.js.map
