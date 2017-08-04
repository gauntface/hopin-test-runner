const expect = require('chai').expect;

const HopinTestRunner = require('../../../src/controller/HopinTestRunner');

describe('HopinTestRunner', function() {
  describe('constructor', function() {
    it('should construct without arguments', function() {
      expect(() => {
        new HopinTestRunner()
      }).to.not.throw();
    });
  });
});
