/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './Infrastructure/Navigation';
function App() {
  return (
    <>
          <StatusBar
        animated={true}
        backgroundColor="#defcff"
        barStyle={'dark-content'}
        hidden={false}
      />
 <Navigation />
    </>
  );
}



export default App;
