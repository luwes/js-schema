import ReferenceSchema from '../patterns/reference';
import EqualitySchema from '../patterns/equality';
import ObjectSchema from '../patterns/object';

Object.like = function(other) {
  return new EqualitySchema(other).wrap();
};

Object.reference = function(o) {
  return new ReferenceSchema(o).wrap();
};

Object.schema = new ObjectSchema().wrap();
