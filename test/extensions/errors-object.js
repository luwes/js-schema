import test from 'ava';
import _ from 'underscore';
import assert from 'assert';
import schema from '../../index.js';

// Create a Test Suite
var common = {
  input_invalid_boolean: { test: false },
  input_invalid_function: { test: function() {} },
  input_invalid_object: { test: {} },
  input_invalid_number: { test: 190 },
  input_invalid_string: { test: 'hello world' }
};

test('Testing Duck', function(t) {
  var Duck = schema({
    // A duck
    swim: Function, //  - can swim
    quack: Function, //  - can quack
    age: Number.min(0).max(5), //  - is 0 to 5 years old
    color: ['yellow', 'brown'] //  - has either yellow or brown color
  });
  var instance = {
    swim: function() {},
    quack: function() {},
    age: 6,
    color: 'green'
  };

  assert(
    instance.age === 6,
    'Input is broken. Test assumes that instance.age = 6. Instance.age equal to ' +
      instance.age
  );
  assert(
    instance.color === 'green',
    "Input is broken. Test assumes that instance.color = 'green'. Instance.test equal to " +
      instance.color
  );

  var validation = false === Duck(instance);
  assert(
    validation,
    'Validation is broken. Incorrect object ' +
      t.log(instance) +
      ' should NOT be validated.'
  );

  var errors = Duck.errors(instance);
  validation = /number = 6 is bigger than required maximum = 5/.test(
    errors.age
  );
  errors.color.forEach(function(msg, index) {
    assert(
      /string = green is not reference to (.*)/.test(
        errors.color[index]
      ),
      'Incorrect message was returned = ' + errors.color[index]
    );
  });

  validation = /number = 6 is bigger than required maximum = 5/.test(
    errors.color
  );
});


var topic = _.defaults(
  {
    schema: schema({ test: Number.min(0).max(10) }),
    input_invalid_string: { test: 'hello world' },
    input_invalid_number: { test: 190 },
    input_valid: { test: 5 }
  },
  common
);

test('Object { test : Number }  : String was passed instead Number', function(t) {
  var instance = topic.input_invalid_string;
  assert(
    _.isString(instance.test),
    'Input is broken (' +
      t.log(instance) +
      ").  Test assumes that 'instance.test' is String"
  );

  var validation = false === topic.schema(instance);
  assert(
    validation,
    'Validation is broken. Incorrect object ' +
      t.log(instance) +
      ' should NOT be validated.'
  );

  var errors = topic.schema.errors(instance);
  validation = /hello world is not Number/.test(errors.test);

  assert(
    validation,
    'Function schema.errors returns incorrect message : \n \t\t' +
      t.log(errors)
  );
});

test('Object { test : Number }  : Too big Number was passed ', function(t) {
  var instance = topic.input_invalid_number;
  assert(
    _.isNumber(instance.test),
    'Input is broken (' +
      t.log(instance) +
      ").  Test assumes that 'instance.test' is Number"
  );

  var validation = false === topic.schema(instance);
  assert(
    validation,
    'Validation is broken. Incorrect object should NOT be validated.'
  );

  var errors = topic.schema.errors(instance);
  validation = /number = 190 is bigger than required maximum = 10/.test(
    errors.test
  );

  assert(
    validation,
    'Function schema.errors returns incorrect message : \n \t\t' +
      t.log(errors)
  );
});

var topic2 = _.defaults(
  {
    schema: schema({ test: String }),
    input_valid: { test: 'some string' }
  },
  common
);

test('Object { test : String }  : Boolean | Function | Object | Number was passed instead String', function(t) {
  [
    topic2.input_invalid_boolean,
    topic2.input_invalid_function,
    topic2.input_invalid_number,
    topic2.input_invalid_object
  ].forEach(function(instance, index) {
    var validation = false === topic2.schema(instance);
    assert(
      !_.isString(instance.test),
      'Input nr ' +
        index +
        ' is broken (' +
        t.log(instance) +
        ").  Test assumes that 'instance.test' is not String"
    );
    assert(
      validation,
      'Validation is broken. Received input ' +
        t.log(topic2.input_invalid_string) +
        ' should NOT be validated.'
    );

    var errors = topic2.schema.errors(instance);
    validation = /(.*) is not a String/.test(errors.test);

    assert(
      validation,
      'Function schema.errors returns incorrect message : \n \t\t' +
        t.log(errors)
    );
  });
});
