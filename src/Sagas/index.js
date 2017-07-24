import {takeLatest} from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import {StartupTypes} from '../Redux/StartupRedux'
import {GithubTypes} from '../Redux/GithubRedux'
import {LoginTypes} from '../Redux/LoginRedux'
import {EventTypes} from '../Redux/EventRedux'

/* ------------- Sagas ------------- */

import {startup} from './StartupSagas'
import {login} from './LoginSagas'
import {getUserAvatar} from './GithubSagas'
import {syncEventsSaga, createNewEventSaga} from './EventSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),

    // Events
    // - listen to the SYNC_EVENTS call and then trigger syncEvents Saga
    takeLatest(EventTypes.SYNC_EVENTS, syncEventsSaga),
    // - listen to NEW_EVENT_REQUEST and then trigger createNewEvent Saga
    takeLatest(EventTypes.NEW_EVENT_REQUEST, createNewEventSaga)
  ]
}
