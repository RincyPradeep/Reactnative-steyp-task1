import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { flash_sale_data } from '../assets/js/FlashSaleData'
import FlashCard from './FlashCard'
import Clock from '../assets/icons/clock_yellow.svg'


const HomeMiddleSection = ({navigation}) => {
  return (
    <View style={styles.flashSaleContainer}>
      <View style={styles.head}>
        <View style={styles.left}>
            <Text style={styles.text}>Flash Sale</Text>
            <View style={styles.timeContainer}>
                <Clock style={styles.clock} width={20} height={20} />
                <Text style={styles.time}>02:04:56</Text>
            </View>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={()=>navigation.navigate('FlashSaleScreen')}>
            <Text style={styles.linkText}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={styles.flashCardContainer}
        data={flash_sale_data}
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

  timeContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    borderRadius: 20,
    marginLeft: 10
  },

  clock:{
    marginRight: 10
  },

  time:{
    color: "#EBA352",
  },

  linkText:{
    fontSize: 18,
    color: "#A6A6A6"
  }

})