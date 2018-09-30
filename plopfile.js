/**
 * Description.
 *  A simple plop template for node package.
 *
 * @file   This a plopfile.
 * @author teeeemoji.
 * @since 2018/9/30
 */
const setHelpers = require('./lib/set-partials')
const setPartials = require('./lib/set-partials')
const setPrompters = require('./lib/set-prompters')
const setActionTypes = require('./lib/set-action-types')
const setGenerators = require('./lib/set-generators')

module.exports = function (plop) {
  setHelpers(plop)
  setPartials(plop)
  setPrompters(plop)
  setActionTypes(plop)
  setGenerators(plop)
}
