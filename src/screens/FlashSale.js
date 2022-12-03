import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView, Image, FlatList } from 'react-native'

import React from 'react'

import Time from '../components/Time'
import FlashSaleTop from '../components/FlashSaleTop'
import FlashSaleMiddle from '../components/FlashSaleMiddle'
import FlashSaleCategory from '../components/FlashSaleCategory'
import FlashSaleBottom from '../components/FlashSaleBottom'


const FlashSale = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlashSaleTop />
        <FlashSaleMiddle />

        <View style={styles.endTime}>
          <Text style={styles.timeText}>Ends In</Text>
          <Time />
        </View>

        <FlashSaleCategory />
        <FlashSaleBottom />
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default FlashSale

const styles = StyleSheet.create({
  container:{
    fontFamily: 'Gordita Regular',
    color: '#000',
    backgroundColor: '#fff',
  },

  endTime:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  timeText:{
    fontFamily: 'Gordita Bold',
    fontSize: 20,
    color: '#000'
  },

  
})