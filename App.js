import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Route from './src/navigation/Route';
import { store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <Route />
    </Provider>
  );
};

export default App;
