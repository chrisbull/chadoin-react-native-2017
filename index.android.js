import React from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import configureStore from './configureStore';

import App from './app';

const store = configureStore();

const ChaDoin = () =>
  <Provider store={store}>
    <App />
  </Provider>;

AppRegistry.registerComponent('ChaDoin', () => ChaDoin);
