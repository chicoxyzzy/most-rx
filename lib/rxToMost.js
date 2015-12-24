'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rxToMost = rxToMost;

var _most = require('most');

function rxToMost(rxSubject) {
  return (0, _most.create)(function (add, end, error) {
    var subscription = rxSubject.subscribe(add, error, end);
    return function () {
      return subscription.complete();
    };
  });
}