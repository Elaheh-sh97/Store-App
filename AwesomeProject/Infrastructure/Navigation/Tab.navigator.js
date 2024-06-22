import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Basket from '../../Screens/basket';
import {Icon} from 'react-native-paper';
import MainPage from './Stack.navigator';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#DAF0F8'}}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {borderRadius: 50, margin: '2%'},
          }}>
          <Tab.Screen
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({size, focused, color}) => {
                return focused ? (
                  <Icon size={size} source={'home'} color="#04c2c2" />
                ) : (
                  <Icon size={size} source={'home-outline'} color="#04c2c2" />
                );
              },
            }}
            name="MainPage"
            component={MainPage}
          />
          <Tab.Screen
            name="Basket"
            component={Basket}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({size, focused, color}) => {
                return focused ? (
                  <Icon size={size} source={'basket'} color="#04c2c2" />
                ) : (
                  <Icon size={size} source={'basket-outline'} color="#04c2c2" />
                );
              },
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default TabNavigator;
