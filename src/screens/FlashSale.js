import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import LeftArrow from '../assets/icons/left_black.svg'


const FlashSale = ({navigation}) => {
  return (
    <View>
      <Text>FlashSale</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <LeftArrow width={20} height={20} />
      </TouchableOpacity>
    </View>
  )
}

export default FlashSale

const styles = StyleSheet.create({})