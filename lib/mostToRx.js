'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mostToRx = mostToRx;

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mostToRx(mostObservable) {
  return _Rx2.default.Observable.create(function (observer) {
    return mostObservable.observe(function (value) {
      return observer.next(value);
    });
  });
}