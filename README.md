
<!--#echo json="package.json" key="name" underline="=" -->
read-resolved-file-sync
=======================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Deceive your linter by hiding both sync function calls.
<!--/#echo -->


API
---

### resolveAndRead(remoteRequire, spec[, encoding])

The module exports this function.

`remoteRequire` should be your module's `require`, or `true` if for some
reason you want to resolve relative to this module instead of yours.

`spec` is whatever name you want resolved.

`encoding` will be passed to `fs.readFileSync()`, unless it is omitted
or `undefined`, in which case `'UTF-8'` will be passed.


### resolveAndRead(remoteRequire)

Return a function with arguments `(spec[, encoding])` that acts as above
but remembers `remoteRequire`.





Usage
-----
from [test/test.js](test/test.js):

<!--#include file="test/test.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="11" -->
```javascript
var resolveAndRead = require('read-resolved-file-sync')(require),
  origIndent = resolveAndRead('../package.json'),
  parsedMeta = require('../package.json'),
  fragments  = resolveAndRead.frag('./frags.json')
  eq = require('assert').deepStrictEqual;

eq(JSON.parse(origIndent), parsedMeta);
eq(fragments('foo'), '21,   43, 65,\n    87, 9.000\n\n');
eq(fragments('bar'), '  [true, false],\n\nnull');
```
<!--/include-->



<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
