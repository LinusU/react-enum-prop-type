# React Enum Prop Type

A enum prop type for React.js.

## Installation

```sh
npm install --save react-enum-prop-type
```

## Usage

```js
import enumPropType from 'react-enum-prop-type'

const Button = ({ variant, children }) => (
  <button className={`button-${variant}`}>{children}</button>
)

Button.propTypes = {
  variant: enumPropType('primary', 'success', 'warning', 'danger').isRequired
}

export default Button
```

## API

### `enumPropType(...members)`

Takes a variable number of arguments and returns a React.js PropType-validator
that only allows values that are present in the members. Doesn't error if
property isn't set.

### `enumPropType(...members).isRequired`

Takes a variable number of arguments and returns a React.js PropType-validator
that only allows values that are present in the members. Errors if property
isn't set.
