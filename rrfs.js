/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function () {
  var evilMode = 'Sync', rfs = require('fs')['readFile' + evilMode], rr;

  rr = function resolveAndRead(remoteRequire, spec, encoding) {
    if (arguments.length === 1) {
      spec = rr.bind(null, remoteRequire);
      spec.frag = rr.frag.bind(null, remoteRequire);
      return spec;
    }
    if (encoding === undefined) { encoding = 'UTF-8'; }
    if (remoteRequire === true) { remoteRequire = require; }
    return rfs(remoteRequire.resolve(spec), encoding);
  };

  rr.frag = function () {
    function frag(s) { return (frag.all[frag.all.indexOf(s) + 1] || false); }
    frag.all = rr.apply(null, arguments).split(rr.fragRx);
    return frag;
  };
  rr.fragRx = /\n[!-~][ -~]*§ *([\w\-\.:\/@~]*)[ -\uFFFF]+\n/;

  return rr;
}());
