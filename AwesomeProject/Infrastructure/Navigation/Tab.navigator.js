import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screens";

const TabNavigator=()=>{
    const Tab=createBottomTabNavigator()
    return(
        <Tab.Navigator screenOptions={{headerShown:false,tabBarStyle:{marginVertical:10,borderRadius:50,},}}>
            <Tab.Screen   name="Home" component={Home}/>
            {/* <Tab.Screen name="Account"/>
            <Tab.Screen name="Info"/> */}
        </Tab.Navigator>
    )
}

export default TabNavigator;