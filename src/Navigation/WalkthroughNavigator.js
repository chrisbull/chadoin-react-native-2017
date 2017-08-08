import { StackNavigator } from 'react-navigation'

/* ----- SCREENS ----- */
import Walkthrough from '../Containers/Walkthrough'

export default StackNavigator(
  {
    Walkthrough: { screen: Walkthrough },
  },
  {
    headerMode: 'none',
  },
)
