var assert = require('assert')
var enumPropType = require('./')

var optional = enumPropType('a', 'b', 'c')
var required = enumPropType('a', 'b', 'c').isRequired

function assertOk (fn, value) {
  assert.equal(fn({ variant: value }, 'variant', 'Button', 'prop'), null)
}

function assertError (fn, value) {
  assert.ok(fn({ variant: value }, 'variant', 'Button', 'prop') instanceof Error)
}

assert.equal(optional({}, 'variant', 'Button', 'prop'), null)
assert.ok(required({}, 'variant', 'Button', 'prop') instanceof Error)

assertOk(optional, null)
assertOk(optional, undefined)

assertError(required, null)
assertError(required, undefined)

assertError(optional, 1)
assertError(optional, 'd')
assertError(optional, [])
assertError(optional, {})
assertError(optional, new Error())

assertError(required, 1)
assertError(required, 'd')
assertError(required, [])
assertError(required, {})
assertError(required, new Error())

assertOk(optional, 'a')
assertOk(optional, 'b')
assertOk(optional, 'c')

assertOk(required, 'a')
assertOk(required, 'b')
assertOk(required, 'c')
