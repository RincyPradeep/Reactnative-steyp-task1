import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import React from 'react'

import {flash_sale_data} from '../assets/js/FlashSaleData'


const FlashSaleBottom = () => {
  return (
    <FlatList
        style={styles.flashSaleContainer}
        data={flash_sale_data}
        keyExtractor={item => item.id.toString()}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.flashSaleCard}>
              <View style={styles.imageContainer}><Text>Section1</Text></View>
              <View style={styles.details}><Text>Section2</Text></View>
              <View style={styles.buttonContainer}><Text>Section3</Text></View>
            </TouchableOpacity>
          );
        }}
    />
  )
}

export default FlashSaleBottom

const styles = StyleSheet.create({
    flashSaleContainer:{
        marginHorizontal: 20,
    },

    flashSaleCard:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 20,
        height: 200,

        borderWidth:1
    },

    imageContainer:{
        width:'30%'
    },

    details:{
        width: '30%'
    },

    buttonContainer:{
        width: '30%'
    }
})