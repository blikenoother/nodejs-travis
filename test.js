var assert = require('assert'),
    vows = require('vows'),
    calc = require('./calc');

vows.describe('multiply by 2').addBatch({
  'When performing some calculations': {
    topic: calc.performSomeCalculations(2),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 4);
    }
  }
}).run();
