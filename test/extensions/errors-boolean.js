import test from 'ava';
import assert from 'assert';
import schema from '../../index.js';

// Create a Test Suite
var topic = {
  invalid_inputs: [
    0,
    -1,
    1,
    'false',
    'true',
    'whatever',
    NaN,
    [],
    {},
    /dwa/
  ]
};

test('invalid input -> [0,-1,1,"false","true","whatever",NaN, [],{},/dwa/]', function() {
  topic.invalid_inputs.forEach(function(input) {
    var result = schema(Boolean).errors(input);
    assert(
      /(.*) is not Boolean/.test(result),
      'Errors should throw : ' + input + ' is not Boolean'
    );
    assert(
      /(.*) is not Boolean/.test(result),
      'Errors should throw : ' + input + ' is not Boolean'
    );
  });
});
