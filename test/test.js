/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

(function readmeDemo() {
  //#u
  var resolveAndRead = require('read-resolved-file-sync')(require),
    origIndent = resolveAndRead('../package.json'),
    parsedMeta = require('../package.json'),
    fragments  = resolveAndRead.frag('./frags.json'),
    eq = require('assert').deepStrictEqual;

  eq(JSON.parse(origIndent), parsedMeta);
  eq(fragments('foo'), '21,   43, 65,\n    87, 9.000\n\n');
  eq(fragments('bar'), '  [true, false],\n\nnull');
  //#r
}());


console.log('+OK test passed');
