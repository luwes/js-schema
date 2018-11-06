import ReferenceSchema from '../patterns/reference';

Function.reference = function(f) {
  return new ReferenceSchema(f).wrap();
};
