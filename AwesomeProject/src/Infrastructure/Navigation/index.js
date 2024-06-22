import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './Tab.navigator';
import SplashScreen from '../../Screens/splashscreen';
const Navigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}}  initialRouteName='Tab'>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen  name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
