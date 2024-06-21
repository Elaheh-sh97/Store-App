import React from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { lightTheme } from "../Theme";
import { darkTheme } from "../Theme";

const provider=({children})=>{
    const currentTheme=useColorScheme()
    const chosenTheme=currentTheme=='light'?lightTheme:darkTheme
    return <PaperProvider theme={chosenTheme} />
}

export default provider