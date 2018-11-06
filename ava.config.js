export default {
    files: [
      'test/**/*.js',
      '!test/printTestResult.js'
    ],
    sources: ['lib/**/*.js'],
    failWithoutAssertions: false,
    babel: false,
    compileEnhancements: false,
    require: ['esm']
};
