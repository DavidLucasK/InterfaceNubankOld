import React from 'react';
import { StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar barStyle="ligh-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

export default App;
