import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../Screens/home";
import Details from "../../Screens/productDetails";
const MainPage=()=>{
    const Stack=createStackNavigator()
    return(
<Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details}/>
</Stack.Navigator>
    )
}


export default MainPage