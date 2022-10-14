import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import configureStore from './src/store/store.js';
import MainNavigation from './src/navigation/MainNavigation.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addContact} from './src/store/action/actions.js';

const store = configureStore();

const App = () => {
  useEffect(() => {
    const getData = async () => {
      let jsonValue = await AsyncStorage.getItem('friendData');
      jsonValue = JSON.parse(jsonValue);
      if (jsonValue != null) {
        store.dispatch(addContact(jsonValue));
      }
    };
    getData();
  }, []);
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
