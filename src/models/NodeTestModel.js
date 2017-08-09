'use strict';

const glob = require('glob');
const path = require('path');

class NodeTestModel {

  constructor() {
    this._testFiles = [];
  }

  addTests(globPattern,  globOptions) {
    const normalizedFiles = glob.sync(globPattern, globOptions)
      .map((testFile) => {
        return path.resolve(testFile);
      });
    this._testFiles.push(normalizedFiles);
    return normalizedFiles;
  }

}

module.exports = NodeTestModel;
