/*!
 * Attach chai to global should
 */

global.chai = require('chai');
global.should = global.chai.should();

/*!
 * Chai Plugins
 */

//global.chai.use(require('chai-spies'));
//global.chai.use(require('chai-http'));

/*!
 * Import project
 */

global.ms = require('../..');

/*!
 * Helper to load internals for cov unit tests
 */

function req (name) {
  return process.env.ms_COV
    ? require('../../lib-cov/ms/' + name)
    : require('../../lib/ms/' + name);
}

/*!
 * Load unexposed modules for unit tests
 */

global.__ms = {};
