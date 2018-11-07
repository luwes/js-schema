import Schema from '../BaseSchema';

var AnythingSchema = Schema.extend({
  errors: function(instance) {
    if (instance == null) return 'anything cannot be null';

    return false;
  },
  validate: function(instance) {
    return instance != null;
  },

  toJSON: function() {
    return { type: 'any' };
  }
});

export default AnythingSchema;

var anything = new AnythingSchema();
var instance = anything;
export { instance };

Schema.fromJS.def(function(sch) {
  if (sch === undefined) return anything;
});

Schema.fromJSON.def(function(sch) {
  if (sch.type === 'any') return anything;
});
