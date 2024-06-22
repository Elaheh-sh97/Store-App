import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Card} from 'react-native-paper';

const Cards = ({title, cover, price, onPress}) => {
  return (
    <Card style={styles.cardContainer} onPress={onPress}>
      <Card.Cover
        resizeMode="contain"
        style={styles.cover}
        source={{uri: `${cover}`}}
      />
      <Card.Content>
        <Card.Title
          titleNumberOfLines={3}
          titleStyle={{overflow: 'visible', fontSize: 11}}
          title={title}
        />
        <Card.Title
          titleStyle={{overflow: 'visible', fontSize: 15}}
          title={
            <>
              <Text style={{color: '#04c2c2', fontSize: 17}}>$</Text>
              <Text>{price}</Text>
            </>
          }
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: '2%',
    width: '45%',
    backgroundColor: 'white',
    padding: '1%',
    // height:250
  },
  cover: {
    // justifyContent:'center',
    alignSelf: 'center',
    width: '80%',
    backgroundColor: 'white',
    // height:'40%'
  },
});

export default Cards;
