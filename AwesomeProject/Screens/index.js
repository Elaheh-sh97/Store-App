import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {getProductsApi} from '../Utils/CallApi';
import SearchBox from '../Components/elements/SearchBox';
import Account from '../Components/elements/Account';
import CardsList from '../Components/modules/CardsList';


const Home = () => {
  const [productList, setProductList] = useState([]);
  const[page,setPage]=useState(0)
  useEffect(() => {
    getProductsApi(page)
      .then(res => {
        if (page == 0)
        setProductList(res)
      else{      
        setProductList([...productList, ...res]);}
        })
      .catch(err => console.log(err));
  }, [page]);

  const handleLoadMore=()=>{
    setPage(page+1)
  }
  


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#defcff"
        barStyle={'dark-content'}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      <Account />
      <SearchBox />

      <CardsList handleLoadMore={handleLoadMore} list={productList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#defcff',
    flexDirection: 'column',
    padding: '5%',
  },
});

export default Home;
