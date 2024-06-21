import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import {Button} from 'react-native-paper';

export default SearchBox = () => {
  return (
    <View style={styles.container}>
      <Searchbar
      placeholderTextColor={'#bdbbbb'}
        placeholder="Find Items"
        clearButtonMode="always"
        mode="bar"
        style={{width: '90%', backgroundColor: 'white'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
    marginVertical: '5%',
  },
});
