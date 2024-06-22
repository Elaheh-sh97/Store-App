import React from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "../Theme";
import { darkTheme } from "../Theme";

const PaperProviders=({children})=>{
    const currentTheme=useColorScheme()
    
    const chosenTheme=currentTheme=='light'?lightTheme:darkTheme
    // console.log("My",chosenTheme)
    return <PaperProvider theme={chosenTheme}>{children}</PaperProvider>
}

export default PaperProviders