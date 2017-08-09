import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  isiOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'andriod',

  marginHorizontal: 15,
  marginVertical: 15,

  doubleBaseMargin: 20,

  searchBarHeight: 30,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  navBarHeight: Platform.OS === 'ios' ? 64 : 54,

  buttonRadius: 4,

  rowMinHeight: 50,
  buttonHeight: 50,

  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },

  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },

  spacing: {
    tiny: 4,
    small: 8,
    medium: 10,
    regular: 15,
    large: 20,
    xlarge: 30,
    xxlarge: 50,
  },
}

export default metrics
