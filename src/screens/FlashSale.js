import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'

import React from 'react'

import Time from '../components/Time'
import FlashSaleTop from '../components/FlashSaleTop'
import FlashSaleMiddle from '../components/FlashSaleMiddle'
import FlashSaleCategory from '../components/FlashSaleCategory'
import FlashSaleBottom from '../components/FlashSaleBottom'
import {flash_sale_data} from '../assets/js/FlashSaleData'


const FlashSale = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flash_sale_data}
        keyExtractor={item => item.id.toString()}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <FlashSaleTop navigation={navigation} />
            <FlashSaleMiddle />

            <View style={styles.endTime}>
              <Text style={styles.timeText}>Ends In</Text>
              <Time />
            </View>

            <FlashSaleCategory />
          </>
        }
        
        renderItem={({item}) => {
          return (
            <FlashSaleBottom item={item}/>
          );
        }}
    />
    </SafeAreaView>    
  )
}

export default FlashSale


const styles = StyleSheet.create({
  container:{
    fontFamily: 'Gordita Regular',
    color: '#000',
    backgroundColor: '#fff'
  },

  endTime:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 20
  },

  timeText:{
    fontFamily: 'Gordita Bold',
    fontSize: 20,
    color: '#000'
  }
})