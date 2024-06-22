import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar} from 'react-native';
import {getProductsApi} from '../Utils/CallApi';
import SearchBox from '../Components/elements/SearchBox';
import Account from '../Components/elements/Account';
import CardsList from '../Components/modules/CardsList';


const Home = ({navigation}) => {
  const [productList, setProductList] = useState([]);
  const[filteredList,setFilteredList]=useState([])
let filter=false
const fetchProduct=()=>{
  getProductsApi()
          .then(res => { setProductList(res)})
          .catch(err=>console.error(err))
}



  useEffect(() => {
    fetchProduct()
        // if (page == 0){
        
        // }
      // else{   
      //   getProductsApi(page)  
      //   .then(res => { setProductList([...productList, ...res])}) 
        
      //   }
      // .catch(err => console.log(err));
  }, []);

const onChangeText=(text)=>{
  if(text != undefined && text.length){
    filter=true
    setFilteredList(productList.filter(item=>item.title.includes(text)))

  }
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
      <SearchBox productList={productList} setProductList={setProductList} onChangeText={onChangeText}/>

      <CardsList  fetchProduct={fetchProduct} navigation={navigation}  list={filteredList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E3FFFF',
    backgroundColor:'#daf7f8',
    flexDirection: 'column',
    paddingHorizontal: '5%',
  },
});

export default Home;
