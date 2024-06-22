import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Basket from '../../Screens/basket';
import {Icon} from 'react-native-paper';
import MainPage from './Stack.navigator';
import { useTheme } from 'react-native-paper';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const{colors}=useTheme()
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={{flex: 1, backgroundColor: '#DAF0F8'}}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({size, focused, color}) => {
                return focused ? (
                  <Icon size={size} source={'home'} color={colors.primary} />
                ) : (
                  <Icon size={size} source={'home-outline'} color={colors.primary} />
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
                  <Icon size={size} source={'basket'} color={colors.primary} />
                ) : (
                  <Icon size={size} source={'basket-outline'} color={colors.primary} />
                );
              },
            }}
          />
        </Tab.Navigator>
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
};

export default TabNavigator;
