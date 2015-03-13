'use strict';
var Runtastic = require('./index');
var test = require('tape');

test('Runtastic', function (t) {
    t.ok(Runtastic, 'exists');
    t.ok(new Runtastic(), 'can create new instance');
    t.ok(new Runtastic({test: true}), 'can create new instance with params');
    t.end();
});
