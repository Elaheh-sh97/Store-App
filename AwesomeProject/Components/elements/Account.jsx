import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton,Text } from "react-native-paper";

const Account=()=>{
    return(
        <View style={styles.container}>
            <View>
            <Text>EliKala</Text>
            </View>
            <View>
        <IconButton
        style={{margin:0}}
        icon="account-circle"
        iconColor="#0FD7DF"
        size={50}
        onPress={() => console.log('Pressed')}
      /></View>
      </View>
    )
}


const styles=StyleSheet.create({
    container:{
 flexDirection:'row',
 justifyContent:'space-between',
//  backgroundColor:'yellow',

 alignItems:'center'
    }
})

export default Account