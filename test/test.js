/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

//#u
var resolveAndRead = require('read-resolved-file-sync')(require),
  origIndent = resolveAndRead('../package.json'),
  //#r
  parsedMeta = require('../package.json'),
  assert = require('assert');
assert.deepStrictEqual(JSON.parse(origIndent), parsedMeta);
console.log('+OK test passed');
