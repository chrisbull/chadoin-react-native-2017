import { PixelRatio } from 'react-native'
import Colors from './Colors'
// const width =

const colors = {
  light: Colors.base1,
  medium: Colors.base2,
  regular: Colors.base3,
  dark: Colors.base6,
}

const borderRadius = 4
const borderColor = colors.regular
const borderWidth = 0.5 * PixelRatio.get()

const defaultStyle = {
  borderColor,
  borderWidth,
}

const defaultStyleRadius = {
  borderColor,
  borderWidth,
  borderRadius,
}

const separatorStyle = {
  backgroundColor: borderColor,
  height: borderWidth,
}

export default {
  colors,
  borderWidth,
  borderRadius,
  borderColor,
  defaultStyle,
  defaultStyleRadius,
  separatorStyle,
}
