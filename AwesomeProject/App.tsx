/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {useTheme} from 'react-native-paper';
import Navigation from './src/Infrastructure/Navigation';
function App() {
  const {colors} = useTheme();
  const colorScheme = useColorScheme();
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={colors.background}
        barStyle={colorScheme == 'dark' ? 'light-content' : 'dark-content'}
        hidden={false}
      />
      <Navigation />
    </>
  );
}

export default App;
