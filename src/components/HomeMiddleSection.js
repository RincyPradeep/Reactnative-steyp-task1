import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import React from 'react'

import { flash_sale_data } from '../assets/js/FlashSaleData'
import FlashCard from './HomeFlashCard'
import Time from './Time'


const HomeMiddleSection = ({navigation}) => {
  return (
    <View style={styles.flashSaleContainer}>
      <View style={styles.head}>
        <View style={styles.left}>
            <Text style={styles.text}>Flash Sale</Text>
            <Time />
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={()=>navigation.navigate('FlashSaleScreen')}>
            <Text style={styles.linkText}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.flashCardContainer}
        data={flash_sale_data.slice(0,2)}
        keyExtractor={item => item.id.toString()}
        keyboardDismissMode="on-drag"
        horizontal
        showsHorizontalScrollIndicator={false}
        
        renderItem={({item}) => {
          return (
            <FlashCard flashCardItem={item} />
          );
        }}
      />
    </View>
  )
}

export default HomeMiddleSection


const styles = StyleSheet.create({
  flashSaleContainer:{
    marginVertical: 20,
  },

  flashCardContainer:{
    marginLeft: 20
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 30
  },

  left:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  text:{
    fontSize: 22,
    color: "#000",
    fontFamily: 'Gordita Bold'
  },

  linkText:{
    fontSize: 18,
    color: "#A6A6A6"
  }

})