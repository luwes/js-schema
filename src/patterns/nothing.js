import Schema from '../BaseSchema';

var NothingSchema = Schema.extend({
  errors: function() {
    return false;
  },
  validate: function(instance) {
    return instance == null;
  },

  toJSON: function() {
    return { type: 'null' };
  }
});

export default NothingSchema;

var nothing = new NothingSchema();
var instance = nothing;
export { instance };

Schema.fromJS.def(function(sch) {
  if (sch === null) return nothing;
});

Schema.fromJSON.def(function(sch) {
  if (sch.type === 'null') return nothing;
});
