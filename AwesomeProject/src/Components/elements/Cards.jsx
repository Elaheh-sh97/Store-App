import React from 'react';
import {StyleSheet, PixelRatio} from 'react-native';
import {Text, Card, useTheme} from 'react-native-paper';

const Cards = ({title, cover, price, onPress}) => {
  const {colors} = useTheme();
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScale;
  return (
    <Card style={styles.cardContainer} onPress={onPress}>
      <Card.Cover
        resizeMode="contain"
        style={styles.cover}
        source={{uri: `${cover}`}}
      />
      <Card.Title
        titleNumberOfLines={3}
        titleStyle={{
          overflow: 'visible',
          fontSize: getFontSize(13),
          color: colors.onPrimary,
        }}
        title={title}
      />
      <Card.Title
        titleStyle={{
          overflow: 'visible',
          fontSize: getFontSize(15),
          color: colors.onPrimary,
        }}
        title={
          <>
            <Text style={{color: '#04c2c2', fontSize: getFontSize(17)}}>$</Text>
            <Text style={{color: colors.onPrimary}}>{price}</Text>
          </>
        }
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
