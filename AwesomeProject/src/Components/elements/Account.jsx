import React,{useState} from "react";
import { Image, StyleSheet, View,Dimensions, } from "react-native";
import { IconButton,useTheme} from "react-native-paper";

const Account=()=>{
    const {colors}=useTheme()
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const { width, height } = Dimensions.get('window');
    const iconSize = width * 0.1; 
    const onLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setImageSize({ width, height: width });
      };
    return(
        <View style={styles.container}>
             <View style={styles.imageContainer} onLayout={onLayout}>
        <Image 
          source={require('../../../assets/elikala.png')} 
          style={[styles.image, imageSize]}
        />
      </View>
            <View>
        <IconButton
        style={{margin:0}}
        icon="account-circle"
        iconColor={colors.primary}
        size={iconSize}
        onPress={() => console.log('Pressed')}
      /></View>
      </View>
    )
}


const styles=StyleSheet.create({
    container:{
 flexDirection:'row',
 justifyContent:'space-between',
// "#0FD7DF"
 alignItems:'center',

    },
    imageContainer: {
        width: '25%', 
        aspectRatio: 1.5, 
        marginBottom: 20,

      },
      image: {
        resizeMode: 'contain', 
      },
})

export default Account