export default {
    files: [
      'test/**/*.js',
      '!test/printTestResult.js'
    ],
    sources: ['src/**/*.js'],
    failWithoutAssertions: false,
    babel: false,
    compileEnhancements: false,
    require: ['esm']
};
