import Colors from './Colors'
import Metrics from './Metrics'

const type = {
  base: 'Geomanist',
  thin: 'Geomanist-Thin',
  extraLight: 'Geomanist-ExtraLight',
  light: 'Geomanist-Light',
  regular: 'Geomanist-Regular',
  book: 'Geomanist-Book',
  medium: 'Geomanist-Medium',
  bold: 'Geomanist-Bold',
  ultra: 'Geomanist-Ultra',
  black: 'Geomanist-Black',
}

const weight = {
  ultra: { fontFamily: type.ultra },
  black: { fontFamily: type.black },
  bold: { fontFamily: type.bold },
  medium: { fontFamily: type.medium },
  book: { fontFamily: type.book },
  regular: { fontFamily: type.regular },
  light: { fontFamily: type.light },
  extraLight: { fontFamily: type.extraLight },
  thin: { fontFamily: type.thin },
}

const size = {
  h1: 32,
  h2: 28,
  h3: 25,
  h4: 22,
  h5: 19,
  h6: 17,
  large: 19,
  regular: 17,
  default: 15,
  medium: 14,
  small: 12,
  tiny: 8.5,
}

const color = {
  light: Colors.base4,
  medium: Colors.base6,
  regular: Colors.base8,
  dark: Colors.base9,

  primary: Colors.primary,
  secondary: Colors.secondary,

  baseColor: Colors.baseColor,
  baseColorLightOpacity: Colors.baseColorLightOpacity,
  baseColorDarkOpacity: Colors.baseColorDarkOpacity,

  darkColor: Colors.darkColor,
  darkColorLightOpacity: Colors.darkColorLightOpacity,
  darkColorDarkOpacity: Colors.darkColorDarkOpacity,

  lightColor: Colors.lightColor,
  lightColorLightOpacity: Colors.lightColorLightOpacity,
  lightColorDarkOpacity: Colors.lightColorDarkOpacity,
}

const base = {
  fontFamily: type.base,
  color: color.regular,
  fontSize: size.default,
}

const style = {
  h1: {
    ...base,
    fontSize: size.h1,
  },
  h2: {
    ...base,
    fontSize: size.h2,
  },
  h3: {
    ...base,
    fontSize: size.h3,
  },
  h4: {
    ...base,
    fontSize: size.h4,
  },
  h5: {
    ...base,
    fontSize: size.h5,
  },
  h6: {
    ...base,
    fontSize: size.h6,
  },

  formInput: {
    ...base,
    ...weight.base,
    fontWeight: '400',
  },

  paragraph: {
    ...base,
    fontSize: size.regular,
    color: Colors.textMedium,
    lineHeight: 20,
  },

  paragraphSecondary: {
    ...base,
    fontSize: size.regular,
    color: color.medium,
    lineHeight: 20,
  },

  body: {
    ...base,
    fontSize: size.regular,
  },

  bodyLight: {
    ...base,
    fontSize: size.regular,
    color: color.baseColorDarkOpacity,
  },

  bodyBold: {
    ...base,
    ...weight.book,
    fontSize: size.regular,
  },

  smallLight: {
    ...base,
    fontSize: size.small,
    color: color.baseColorDarkOpacity,
  },

  textLink: {
    ...base,
    fontSize: size.regular,
    color: color.secondary,
  },

  description: {
    ...base,
  },

  tableLabel: {
    ...base,
    ...weight.medium,
    fontSize: size.regular,
  },

  tableTitle: {
    ...base,
    ...weight.book,
  },

  tableSubtitle: {
    ...base,
    color: color.medium,
    fontSize: size.small,
  },

  tableDescription: {
    ...base,
    fontSize: size.small,
  },

  tableTimestamp: {
    ...base,
    fontSize: size.tiny,
    color: color.medium,
  },
}

export default {
  base,
  size,
  style,
  type,
  weight,
  color,
}
