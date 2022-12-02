import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'


const CategoryCard = ({categoryItem}) => {

  return (
    <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.imageContainer}>
            <Image source={categoryItem.image} style={styles.image} />
        </View>
        <Text style={styles.text}>{categoryItem.title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    cardContainer:{
        marginRight: 15,
        alignItems: 'center',
        // height: 150
    },

    imageContainer:{
        width: 90,
        height: 90,
        borderRadius: 90/2,
        overflow: 'hidden'
    },

    image:{
        width: '100%',
        height: '100%',
    },

    text:{
        fontFamily: 'Gordita Medium',
        color: '#000',
        fontSize: 18,
        marginTop: 20
    }
})