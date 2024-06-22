import {StyleSheet, View, Image} from 'react-native';


import React from 'react';
const SplashScreen = ({navigation}) => {

  setTimeout(() => {
    navigation.navigate('TabNavigator');
  }, 1500);

  return (
    <View style={Styles.parent}>
      <Image
        resizeMode="contain"
        style={{width: '90%'}}
        source={require('../../assets/elikalaLogo.png')}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  parent: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E0F7F4'
  },
});

export default SplashScreen;
