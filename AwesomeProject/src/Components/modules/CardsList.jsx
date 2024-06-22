import React, {useState} from 'react';
import { FlatList} from 'react-native';
import Cards from '../elements/Cards';
import {SafeAreaView} from 'react-native-safe-area-context';

const CardsList = ({list, handleLoadMore, navigation,fetchProduct,refresh}) => {

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
      <FlatList
        refreshing={refresh}
        onRefresh={fetchProduct}
        data={list}
        numColumns={2}
        renderItem={item => {
          return (
            <Cards
              onPress={() => navigation.navigate('Details', item.item)}
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


export default CardsList;
