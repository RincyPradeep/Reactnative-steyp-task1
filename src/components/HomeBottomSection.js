import { StyleSheet, Text, View, Image } from 'react-native'

import React from 'react'


const HomeBottomSection = () => {
  return (
    <View style={styles.bottomContainer}>
        <View>
            <Text style={styles.textOne}>Full Color Hoodie</Text>
            <Text style={styles.textTwo}>Sale up to 40% off</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/person.png')} />
        </View>
    </View>
  )
}

export default HomeBottomSection


const styles = StyleSheet.create({
    bottomContainer:{
        height: 300,
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#FBE8E7',
        padding: 30,
        borderRadius: 20,
        position:'relative',
        overflow: 'hidden'
    },

    textOne:{
        fontSize: 18,
        fontFamily: 'Gordita Bold',
        color: '#000',
        marginBottom: 10
    },

    textTwo:{
        color: "#EBA352"
    },

    imageContainer:{
        position:'absolute',
        right: -30,
        bottom: 0       
    },

    image:{
        width: 250,
        resizeMode: 'contain'
    }
})