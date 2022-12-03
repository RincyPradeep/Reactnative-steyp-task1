import { StyleSheet, Text, View, Image } from 'react-native'

import React from 'react'

import CalenderBlack from '../assets/icons/calender_black.svg'


const FlashSaleMiddle = () => {
  return (
    <View style={styles.middle}>
        <View style={styles.left}>
            <Text style={styles.textOne}>Flash Sale</Text>
            <Text style={styles.textTwo}>Sale up to 60% off</Text>
            <View style={styles.dateContainer}>
                <CalenderBlack width={20} height={20} />
                <Text style={styles.date}>25-30 june</Text>
            </View>
        </View>
        <View style={styles.right}>
            <Image style={styles.image} source={require('../assets/images/shoe.png')} />
        </View>
    </View>
  )
}

export default FlashSaleMiddle

const styles = StyleSheet.create({
    middle:{
        marginHorizontal:20,
        marginVertical: 30,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#E7DDFF',
        borderRadius: 20,
        height: 200
    },

    left:{
        width:'50%'
    },

    textOne:{
        fontSize: 24,
        fontFamily: 'Gordita Bold',
        color: '#000'
    },

    textTwo:{
        color: '#9747FF',
        fontFamily: 'Gordita Bold'
    },

    dateContainer:{
        width: 120,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        marginTop: 20
    },

    date:{
        fontFamily: 'Gordita Bold',
        color: '#000',
        marginLeft: 10,
        fontSize: 12
    },

    right:{
        width: '50%',
    },

    image:{
        width: '100%',
        resizeMode:'contain'
    },
})