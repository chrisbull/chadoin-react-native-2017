const white = '#FFFFFF'
const black = '#000000'

const base = {
  base0: '#FBFBFC',
  base1: '#F7F8F9',
  base2: '#E7EAEF',
  base3: '#D8DEE5',
  base4: '#B7BEC7',
  base5: '#929BA6',
  base6: '#757F8C',
  base7: '#4D5663',
  base8: '#2C323B',
  base9: '#0F1216',
}

const colors = {
  pink: '#FA55D8',
  lightPurple: '#A24AEC',
  purple: '#7B2EFF',
  bluePurple: '#6565FF',
  royalBlue: '#2729B2',
  blue: '#338BF8',
  seaBlue: '#3FC8DE',
  skyBlue: '#14C8FB',
  seafoam: '#02B3B9',
  turquoise: '#00DCAE',
  neonGreen: '#11E686',
  darkGreen: '#40CC4E',
  green: '#7DD420',
  lime: '#B6E611',
  yellow: '#FFDE00',
  sunflower: '#FBCE14',
  orange: '#FF9600',
  amber: '#E65A11',
  neonPink: '#FF2067',
  red: '#FF2133',
}

// Brand Colors
const brand = {
  primary: colors.purple,
  secondary: colors.blue,
}

const opacity = {
  baseColor: base.base9,
  baseColorLightOpacity: 'rgba(117,127,140, 0.4)',
  baseColorDarkOpacity: 'rgba(117,127,140, 0.8)',

  darkColor: black,
  darkColorLightOpacity: 'rgba(0,0,0,0.3)',
  darkColorDarkOpacity: 'rgba(0,0,0,0.6)',

  lightColor: white,
  lightColorLightOpacity: 'rgba(255,255,255,0.4)',
  lightColorDarkOpacity: 'rgba(255,255,255,0.7)',

  transparent: 'rgba(0,0,0,0)',
}

export default {
  white,
  black,
  ...base,
  ...colors,
  ...brand,
  ...opacity,
}
