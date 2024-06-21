import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Card} from 'react-native-paper';

const Cards = ({title, content, cover, price}) => {
  // console.log(")))))))))))))))))))))))))",title)
  return (
    <Card style={styles.cardContainer}>
      {/* <Card.Content>{content}</Card.Content>  */}
      <Card.Cover
        resizeMode="contain"
        style={styles.cover}
        source={{uri: `${cover}`}}
      />
      <Card.Title
        titleNumberOfLines={2}
        titleStyle={{overflow: 'visible', fontSize: 12, marginVertical: '5%'}}
        title={title}
      />
        <Card.Title
      
        titleStyle={{overflow: 'visible', fontSize: 15, marginVertical: '5%'}}
        title={`$`+` ${price}`}
      />
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
backgroundColor:'white'
    // height:'40%'
  },
});

export default Cards;
