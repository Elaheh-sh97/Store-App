import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text,Card,useTheme} from 'react-native-paper';

const Cards = ({title, cover, price, onPress}) => {
  const{colors}=useTheme()
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
          titleStyle={{overflow: 'visible', fontSize: 11, color: colors.onPrimary}}
          title={title}
        />
        <Card.Title
          titleStyle={{overflow: 'visible', fontSize: 15,color: colors.onPrimary}}
          title={
            <>
              <Text style={{color: '#04c2c2', fontSize: 17}}>$</Text>
              <Text style={{color:colors.onPrimary}}>{price}</Text>
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
