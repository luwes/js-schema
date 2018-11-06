import test from 'ava';
import assert from 'assert';
// import printTestResult from '../printTestResult.js';
import schema from '../../index.js';
import ReferenceSchema from '../../lib/patterns/reference';

// var generateTest = function(ref) {
//   var sch = schema(new ReferenceSchema(ref));
//   var result = sch.errors(topic.input);
//   assert(
//     /Object is not reference to Function = function A(){}/.test(result),
//     printTestResult(ref, result)
//   );
// };

var topic = function() {
  var A = function A() {
    this.name = 'dwa';
  };

  var instanceA = new A();
  return {
    kinds: [
      'string',
      'number',
      'date',
      'function A()',
      'new A()',
      'function ()',
      'Object'
    ],
    inputs: {
      null: null,
      undefined: undefined,
      string: 'other',
      number: 10,
      date: new Date(),
      A: A,
      'new A()': instanceA
    },
    schemas: {
      string: schema(new ReferenceSchema('test')),
      number: schema(new ReferenceSchema(10)),
      date: schema(new ReferenceSchema(new Date())),
      A: schema(new ReferenceSchema(A)),
      'new A()': schema(new ReferenceSchema(instanceA))
    }
  };
}();

test('all by all', function(t) {
  for (var inputKey in topic.inputs) {
    for (var schemaKey in topic.schemas) {
      var sch = topic.schemas[schemaKey];
      var inp = topic.inputs[inputKey];
      if (schemaKey != inputKey) {
        var result = sch.errors(inp);
        assert(result);
        if (result) {
          t.log('      all by all', result);
        }
      }
    }
  }
});
