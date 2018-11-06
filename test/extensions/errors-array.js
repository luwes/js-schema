import test from 'ava';
import assert from 'assert';
import schema from '../../index.js';

test('Number -> invalid input : [null, undefined, Object, Function]', function() {
  var input = [null, undefined, Object, Function];
  var aSchema = schema(Array.of(Number));
  input.forEach(function(input) {
    var result = aSchema.errors(input);
    assert(
      /(.*) is not an instance of Array/.test(result),
      'Errors should return  "' + input + '" is not an instance of Array'
    );
  });
});

test('Number -> valid input : only numbers', function() {
  var input = [9, 0, 1, 2, 3, 4, 5, 6];
  var aSchema = schema(Array.of(Number));
  var result = aSchema.errors(input);
  assert(result === false, 'errors method should return false');
});
