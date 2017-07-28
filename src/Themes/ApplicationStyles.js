import Colors from './Colors'

export const TouchableHighlightUnderlayColor = 'rgba(0,0,0,0.3)'

export const NavigationHeader = {
  style: {
    backgroundColor: 'white',
  },
  tintColor: 'black',
}

export const MainContainer = {
  style: {
    flex: 1,
    backgroundColor: Colors.white,
  },
}

export const ListView = {
  style: {
    flex: 1,
  },
}

export const ListViewRow = {
  underlayColor: TouchableHighlightUnderlayColor,
  containerStyle: {
    padding: 12,
  },
  titleStyle: {
    color: Colors.blueGreyMedium,
    fontWeight: '500',
  },
}

export default {
  NavigationHeader,
  MainContainer,
  ListView,
  ListViewRow,
}
