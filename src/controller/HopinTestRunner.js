'use strict';

const NodeTestModel = require('../models/NodeTestModel');

class HopinTestRunner {
  constructor() {
    this._nodeTestModel = new NodeTestModel();
  }

  /**
   * Adds globs to browser tests
   */
  // addBrowserTests() {

  // }

  /**
   * Adds globs to the node tests
   */
  addNodeTests(globPattern, globOptions) {
    return this._nodeTestModel.addTests(globPattern, globOptions);
  }

  /**
   * Adds globs to the SW tests
   */
  // addSWTests() {

  // }

  /**
   * Runs and reports tests to command line
   */
  // run() {

  // }
}

module.exports = HopinTestRunner;
