import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import configureStore from './src/store/store.js';
import MainNavigation from './src/navigation/MainNavigation.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {activity, addContact} from './src/store/action/actions.js';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
