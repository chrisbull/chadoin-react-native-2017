// import { NavigationActions } from 'react-navigation'
// import AppNavigation from '../Navigation/AppNavigation'

// const { getStateForAction } = AppNavigation.router
// const { navigate, reset } = NavigationActions

// const INITIAL_STATE = getStateForAction(
//   navigate({ routeName: 'LoadingScreen' }),
// )
//
// const NOT_LOGGED_IN_STATE = getStateForAction(
//   reset({
//     index: 0,
//     actions: [navigate({ routeName: 'LoginScreen' })],
//   }),
// )
//
// const LOGGED_IN_STATE = getStateForAction(
//   reset({
//     index: 0,
//     actions: [navigate({ routeName: 'MainScreen' })],
//   }),
// )
//
// const WALKTHROUGH_STATE = getStateForAction(
//   reset({
//     index: 0,
//     actions: [navigate({ routeName: 'WalkthroughScreen' })],
//   }),
// )

export const reducer = (state = {}, action) => {
  let nextState

  /*
   * Note: Dont add anything more to the switch
   * it's here just solely for database
   * and defining if user is logged in or not
   */
  switch (action.type) {
  // case 'SET_REHYDRATION_COMPLETE':
  //   return NOT_LOGGED_IN_STATE
  // case 'LOGOUT':
  //   return NOT_LOGGED_IN_STATE
  // case 'LOGIN':
  //   return NOT_LOGGED_IN_STATE
  // case 'LOGIN_SUCCESS':
  //   return LOGGED_IN_STATE
  // case 'AUTO_LOGIN':
  //   return LOGGED_IN_STATE
  // case 'WALKTHROUGH':
  //   return WALKTHROUGH_STATE
  }

  // nextState = getStateForAction(action, state)
  return nextState || state
}
