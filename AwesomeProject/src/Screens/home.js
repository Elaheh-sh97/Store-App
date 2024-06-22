import React, {useEffect, useState,useCallback} from 'react';
import {SafeAreaView, StyleSheet,Alert,BackHandler} from 'react-native';
import { getProductsApi } from '../Utils/CallApi';
import SearchBox from '../Components/elements/SearchBox';
import Account from '../Components/elements/Account';
import CardsList from '../Components/modules/CardsList';
import {useTheme} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
const Home = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const {colors} = useTheme();

  const fetchProduct = () => {
    setRefresh(true);
    getProductsApi()
      .then(res => {
        setProductList(res);
        setRefresh(false);
      })
      .catch(err =>  Alert.alert('Alert', `${err}`, [
        {
          text: 'OK',
          onPress: () => null,
          style: 'cancel',
        },
      ]));
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert('Alert', 'Do you want to quite the app?', [
          {
            text: 'No',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'Yes', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }, []),
  );
  const onChangeText = text => {
    if (text != undefined && text.length) {
      setIsFilter(true);
      setFilteredList(
        productList.filter(item =>
          item.title.toLowerCase().includes(text.toLowerCase()),
        ),
      );
    } else {
      setIsFilter(false);
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <Account />
      <SearchBox
        productList={productList}
        setProductList={setProductList}
        onChangeText={onChangeText}
      />

      <CardsList
        setRefresh={setRefresh}
        refresh={refresh}
        fetchProduct={fetchProduct}
        navigation={navigation}
        list={isFilter ? filteredList : productList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#daf7f8',
    flexDirection: 'column',
    paddingHorizontal: '5%',
  },
});

export default Home;
