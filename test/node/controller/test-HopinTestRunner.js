const expect = require('chai').expect;
const path = require('path');

const HopinTestRunner = require('../../../src/controller/HopinTestRunner');

describe('HopinTestRunner', function() {
  describe('constructor', function() {
    it('should construct without arguments', function() {
      expect(() => {
        new HopinTestRunner()
      }).to.not.throw();
    });
  });

  describe('addNodeTests()', function() {
    it('should work with node tests', function() {
      const testRunner = new HopinTestRunner();
      const testFiles = testRunner.addNodeTests('test/static/example-test-files/**/*.js');

      const files = [
        'test/static/example-test-files/test-1.js',
        'test/static/example-test-files/test-2.js',
        'test/static/example-test-files/directory/test-1.js',
        'test/static/example-test-files/directory/test-2.js',
      ];
      const absFiles = files.map((file) => {
        return path.resolve(file);
      });
      expect(testFiles).to.have.members(absFiles);
    });
  });
});
