import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/store/store.js';
import MainNavigation from './src/navigation/MainNavigation.js';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
