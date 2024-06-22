import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {getProductsApi} from '../Utils/CallApi';
import SearchBox from '../Components/elements/SearchBox';
import Account from '../Components/elements/Account';
import CardsList from '../Components/modules/CardsList';

const Home = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const[refresh,setRefresh]=useState(false)
  const fetchProduct = () => {
    setRefresh(true)
    getProductsApi()
      .then(res => {
        
        setProductList(res);
        setRefresh(false)
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    console.log("Here")
    fetchProduct();
  }, []);

  const onChangeText = text => {
    if (text != undefined && text.length) {
      setIsFilter(true);
      setFilteredList(productList.filter(item => item.title.toLowerCase().includes(text.toLowerCase())));
    } else {
      setIsFilter(false);
    }
  };

// const pullToRefresh=()=>{
//   setRefresh(true)
//   fetchProduct()
// }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#defcff"
        barStyle={'dark-content'}
        hidden={false}
      />
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
    backgroundColor: '#daf7f8',
    flexDirection: 'column',
    paddingHorizontal: '5%',
  },
});

export default Home;
