import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import MainPage from './Stack.navigator';
import {useTheme} from 'react-native-paper';
const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {colors} = useTheme();
  return (
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
              <Icon
                size={size}
                source={'home-outline'}
                color={colors.primary}
              />
            );
          },
        }}
        name="MainPage"
        component={MainPage}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
