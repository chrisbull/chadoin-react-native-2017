import { StackNavigator } from 'react-navigation'

/* ----- SCREENS ----- */
import Walkthrough from '../containers/Walkthrough'

export default StackNavigator(
  {
    Walkthrough: { screen: Walkthrough },
  },
  {
    headerMode: 'none',
  },
)
