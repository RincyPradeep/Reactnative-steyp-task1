import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import React from 'react'

import Heart from '../assets/icons/like_black.svg'
import YellowHeart from '../assets/icons/like_yellow.svg'


const HomeFlashCard = ({flashCardItem}) => {
  return (
    <TouchableOpacity style={styles.card}>  
      <View style={[styles.top, {"backgroundColor": flashCardItem.bg_color}]} >
        <View style={styles.imageTop}>
          <Text style={styles.discount}>{flashCardItem.discount}% off</Text>
          {
            flashCardItem.favourite ?
              <YellowHeart width={20} height={20} /> :
              <Heart width={20} height={20} /> 
          }
        </View>
        <View style={styles.imageContainer}>
          <Image source={flashCardItem.image} style={styles.image} />
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.name}>{flashCardItem.name}</Text>
        <View style={styles.details}>
          <View style={styles.priceDetails}>
            <Text style={styles.price}>$ {flashCardItem.price}</Text>
            <Text style={styles.oldPrice}>${flashCardItem.old_price}</Text>
          </View>
          <Text>{flashCardItem.sold} sold</Text>
        </View>       
      </View>
    </TouchableOpacity>
  )
}

export default HomeFlashCard


const styles = StyleSheet.create({
  card:{
    width: 240,
    height: 330,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginRight: 30
  },

  top:{
    width: '100%',
    height: '80%',
    borderRadius: 20,
    padding: 15
  },

  imageTop:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },

  imageContainer:{
    width: '100%',
    height: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image:{
    width: '70%',
    height: '70%'
  },

  discount:{
    color: '#fff',
    backgroundColor: '#EBA352',
    padding:5,
    borderRadius: 10,
    fontSize: 12
  },

  bottom:{
    marginTop: 10
  },

  name:{
    fontSize: 16,
    fontFamily: 'Gordita Bold',
    color: '#000',
    marginBottom: 10
  },

  details:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  priceDetails:{
    flexDirection: 'row',
    alignItems: 'center'
  },

  price:{
    fontSize: 16,
    fontFamily: 'Gordita Bold',
    color: '#000',
    marginRight: 20
  },

  oldPrice:{
    textDecorationLine:'line-through',
    color: '#A6A6A6'
  }
})