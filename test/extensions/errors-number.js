import test from 'ava';
import assert from 'assert';
import printTestResult from '../printTestResult.js';
import schema from '../../index.js';

test('min() - invalid input', function() {
  var result = schema(Number.min(5)).errors(0);
  assert(
    /number = (.*) is smaller than required minimum = (.*)/.test(result),
    'Error should return : number = X is smaller than required minimum = Y'
  );
});

test('min() - valid input', function() {
  var result = schema(Number.min(5)).errors(5);
  assert(!result, printTestResult(5, result));
});

test('max() - invalid input', function() {
  var result = schema(Number.max(5)).errors(9);
  assert(
    /number = (.*) is bigger than required maximum = (.*)/.test(result),
    'Error should return : number = X is bigger than required maximum = Y'
  );
});

test('max() - valid input', function() {
  var result = schema(Number.max(5)).errors(5);
  assert(!result, printTestResult(5, result));
});

test('min().max() - valid input', function() {
  var result = schema(Number.min(0).max(5)).errors(5);
  assert(!result, printTestResult(5, result));
});
