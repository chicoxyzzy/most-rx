'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rxToMost = rxToMost;

var _mostSubject = require('most-subject');

var _mostSubject2 = _interopRequireDefault(_mostSubject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rxToMost(rxSubject) {
  var _subject = (0, _mostSubject2.default)();

  var sink = _subject.sink;
  var stream = _subject.stream;

  rxSubject.subscribe(function (x) {
    return sink.add(x);
  }, function (e) {
    throw new Error(e);
  }, function () {
    return sink.end();
  });
  var dispose = function dispose() {
    rxSubject.complete();
  };
  dispose.observe = stream.observe.bind(stream);
  return dispose;
}