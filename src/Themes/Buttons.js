import Colors from './Colors'

const ButtonBase = {
  flex: 1,
  padding: 6,
}

const ButtonColors = {
  default: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  },
  primary: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  },
  success: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  },
  warning: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  },
  error: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  },
  info: {
    backgroundColor: Colors.blue,
    color: Colors.white,
  },
}

const ButtonStyles = {
  regular: {
    ...ButtonBase,
    ...ButtonColors.default,
  },
}

export default {
  color: ButtonColors,
  style: ButtonStyles,
}
