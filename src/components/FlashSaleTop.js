import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import React from 'react'

import LeftArrow from '../assets/icons/left_black.svg'
import AdjustBlack from '../assets/icons/adjust_black.svg'


const FlashSaleTop = ({navigation}) => {
  return (
    <View style={styles.top}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <LeftArrow width={30} height={30} />
      </TouchableOpacity>
      <Text style={styles.topTitle}>FlashSale</Text>
      <TouchableOpacity>
        <AdjustBlack width={30} height={30} />
      </TouchableOpacity>
    </View>
  )
}

export default FlashSaleTop


const styles = StyleSheet.create({
  top:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20
  },
  
  topTitle:{
    fontSize: 20,
    fontFamily: 'Gordita Bold',
    color: '#000'
  }

})