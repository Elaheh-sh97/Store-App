import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';
import Cards from '../elements/Cards';
import {SafeAreaView} from 'react-native-safe-area-context';

export default CardsList = ({list,handleLoadMore}) => {
  const [refresh, setRefresh] = useState(false);





  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
      <FlatList
        refreshing={refresh}
        onRefresh={() => setRefresh(true)}
        data={list}
        numColumns={2}
        renderItem={item => {
          console.log('*****************', item.item.image);
          return (
            <Cards
              title={item.item.title}
              cover={item.item.image}
              price={item.item.price}
            />
          );
        }}
        onEndReached={handleLoadMore}
        contentContainerStyle={{paddingBottom: 20}}
        contentInset={{bottom: 20}}
        contentInsetAdjustmentBehavior="automatic"
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     // flex:1,
//     // justifyContent:'center',
//     // alignContent:'center'
//     // backgroundColor:'purple'
//   },
// });