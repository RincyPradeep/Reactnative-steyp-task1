import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'

import React from 'react'

import {flash_sale_category_data} from '../assets/js/FlashSaleCategoryData'


const FlashSaleCategory = () => {
  return (
    <FlatList
        style={styles.categoryContainer}
        data={flash_sale_category_data}
        keyExtractor={item => item.id.toString()}
        keyboardDismissMode="on-drag"
        horizontal
        showsHorizontalScrollIndicator={false}
        
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.categoryCard}>
              <Text style={styles.categoryText}>{item.title}</Text>
            </TouchableOpacity>
          );
        }}
    />
  )
}

export default FlashSaleCategory

const styles = StyleSheet.create({
    categoryContainer:{
        marginVertical: 20,
        marginLeft: 20
    },
    
    categoryCard:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: '#A6A6A6',
        borderWidth: 1,
        borderRadius: 20,
        marginRight: 10
    },
    
    categoryText:{
        fontSize: 18,
        color:'#555',
    }
})