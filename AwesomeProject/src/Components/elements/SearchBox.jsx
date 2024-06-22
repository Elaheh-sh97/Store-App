import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import {Button} from 'react-native-paper';

const SearchBox = ({onChangeText}) => {
  return (
    <View style={styles.container}>
      <Searchbar
        iconColor="#04c2c2"
        placeholderTextColor={'#bdbbbb'}
        placeholder="Search ..."
        onChangeText={onChangeText}
        mode="bar"
        style={{
          width: '90%',
          backgroundColor: 'white',
          borderColor: '#04c2c2',
          borderWidth: 0.5,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
});
export default SearchBox;
