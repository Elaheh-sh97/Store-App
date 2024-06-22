import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions,} from 'react-native';
import {Button, IconButton, Text, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
const Details = ({navigation, route}) => {
  const [details, setDetails] = useState();
  const {colors} = useTheme();
  const { width, height } = Dimensions.get('window');
  const iconSize = width * 0.1; 
  useEffect(() => {
    if (route.params) {
      setDetails(route.params);
    }
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View style={styles.topBar}>
        <IconButton
          style={{margin: 0}}
          icon="arrow-left-circle"
          iconColor={colors.primary}
          size={iconSize}
          onPress={() => navigation.goBack()}
        />
        <IconButton
          style={{margin: 0}}
          icon="account-circle"
          iconColor={colors.primary}
          size={iconSize}
          onPress={() => console.log('Pressed', typeof details.description)}
        />
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          resizeMode="contain"
          style={{
            width: '60%',
            height: '40%',
            backgroundColor: 'white',
            borderRadius: Dimensions.get('window').width * 0.1,
          }}
          source={
            details && details.image
              ? {uri: details.image}
              : require('../../assets/noImage.png')
          }
        />
      </View>
      <Animatable.View
        animation="fadeInUp"
        duration={1500}
        style={styles.bottomView}>
        <View style={{flexDirection: 'column'}}>
          <Text
            variant="titleLarge"
            style={[styles.title, {color: colors.onPrimary}]}>
            {details ? details.title : ''}
          </Text>
          <Text variant="titleMedium" style={{color: colors.onPrimary}}>
            Description
          </Text>
          <Text
            variant="bodyMedium"
            numberOfLines={6}
            style={{color: colors.onPrimary}}>
            {details ? details.description : ''}
          </Text>
          <View style={styles.priceBox}>
            <Text variant="titleMedium" style={{color: colors.onPrimary}}>
              Price :{' '}
            </Text>
            <View style={styles.priceTag}>
              <Text variant="titleMedium" style={{color: colors.onPrimary}}>
                {details ? details.price : ''}{' '}
              </Text>
              <Text variant="labelLarge" style={{color: '#04c2c2'}}>
                $
              </Text>
            </View>
          </View>
        </View>
        <Button
          labelStyle={{color: 'white'}}
          style={styles.button}
          mode="contained">
          Add to cart
        </Button>
        <View></View>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#daf7f8',
    padding: '5%',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: '3%',
  },
  bottomView: {
    flex: 1,
    zIndex: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 30, height: 30},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 20,
    height: '53%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: Dimensions.get('window').width * 0.1,
    borderTopRightRadius: Dimensions.get('window').width * 0.1,
    paddingTop: '5%',
    paddingHorizontal: '5%',
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: '5%',
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    alignSelf: 'center',
    // backgroundColor: '#0FD7DF',
    position: 'absolute',
    bottom: '5%',
  },
});
export default Details;
