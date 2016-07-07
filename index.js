module.exports = function enumPropType () {
  var members = Array.prototype.slice.call(arguments, 0)

  function requiredValidator (props, propName, componentName, locationName) {
    if (props[propName] == null) {
      return new Error('Required ' + locationName + ' `' + propName + '` was not specified in `' + componentName + '`.')
    }

    if (members.indexOf(props[propName]) === -1) {
      return new Error('Required ' + locationName + ' `' + propName + '` was not one of allowed values in `' + componentName + '`.')
    }
  }

  function optionalValidator (props, propName, componentName, locationName) {
    if (props[propName] != null && members.indexOf(props[propName]) === -1) {
      return new Error('Optional ' + locationName + ' `' + propName + '` was not one of allowed values in `' + componentName + '`.')
    }
  }

  optionalValidator.isRequired = requiredValidator

  return optionalValidator
}
