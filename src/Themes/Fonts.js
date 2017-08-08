import Colors from './Colors'

const type = {
  base: 'Geomanist',
  bold: 'Geomanist',
  emphasis: 'Geomanist',
}

const weight = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  book: '500',
  medium: '600',
  bold: '700',
  ultra: '800',
  black: '900',
}

const size = {
  h1: 32,
  h2: 28,
  h3: 25,
  h4: 22,
  h5: 19,
  h6: 17,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
}

const colors = {
  default: Colors.smoke80,
  inverse: Colors.white,
}

const base = {
  fontFamily: type.base,
  fontWeight: weight.regular,
  color: colors.default,
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
  normal: {
    ...base,
    fontSize: size.regular,
  },
  description: {
    ...base,
    fontSize: size.medium,
  },
}

export default {
  base,
  size,
  style,
  type,
  weight,
}
