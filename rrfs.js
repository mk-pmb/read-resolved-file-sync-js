/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function setup() {
  var rfs = require('fs').readFileSync, rr;
    //jslint!:Unexpected sync method: 'readFileSync'.
  rr = function resolveAndRead(remoteRequire, spec, encoding) {
    if (arguments.length === 1) { return rr.bind(null, remoteRequire); }
    if (encoding === undefined) { encoding = 'UTF-8'; }
    if (remoteRequire === true) { remoteRequire = require; }
    return rfs(remoteRequire.resolve(spec), encoding);
  };
  return rr;
}());
