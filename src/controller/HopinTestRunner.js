class HopinTestRunner {
  /**
   * Adds globs to browser tests
   */
  addBrowserTests() {

  }

  /**
   * Adds globs to the node tests
   */
  addNodeTests() {

  }

  /**
   * Adds globs to the SW tests
   */
  addSWTests() {

  }

  /**
   * Runs and reports tests to command line
   */
  run({mode} = {}) {
    const options = Object.assign(options, {
      mode: 'cli'
    });
  }
}

module.exports = HopinTestRunner;
