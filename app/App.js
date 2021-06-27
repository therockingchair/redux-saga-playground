import React from 'react';
import {Provider} from 'react-redux';
import ReduxStore from './redux/ReduxStore';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Provider store={ReduxStore}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
