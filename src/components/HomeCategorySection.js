import { StyleSheet, FlatList } from 'react-native'

import React from 'react'

import { category_data } from '../assets/js/CategoryData' 
import CategoryCard from '../components/CategoryCard'


const HomeCategorySection = () => {
  return (
    <FlatList
        style={styles.categoryContainer}
        data={category_data}
        keyExtractor={item => item.id.toString()}
        keyboardDismissMode="on-drag"
        horizontal
        showsHorizontalScrollIndicator={false}
        
        renderItem={({item}) => {
          return (
            <CategoryCard
              categoryItem={item}
              containerStyle={{marginVertical: 20}}
            />
          );
        }}
      />

  )
}

export default HomeCategorySection

const styles = StyleSheet.create({
    categoryContainer:{
        marginVertical: 20,
        marginLeft: 20,
      }
})