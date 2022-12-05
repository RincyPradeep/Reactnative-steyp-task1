import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import React from 'react'

import BagWhite from '../assets/icons/bag_white.svg'


const FlashSaleBottom = ({item}) => {
  return (
    <TouchableOpacity style={styles.flashSaleCard}>
        <View style={styles.imageContainer}>
            <View style={styles.discount}>
                <Text style={styles.discountText}>{item.discount}% off</Text>
            </View>
            <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.oldPrice}>${item.old_price}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.itemStockContainer}>
                <View style={[styles.itemSoldContainer,{'width':`${(item.sold/item.stock)*100}%`}]}></View>
                <Text style={styles.itemSold}>{item.sold} Sold</Text>
            </View>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <BagWhite style={styles.bag} />
                <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default FlashSaleBottom

const styles = StyleSheet.create({
    flashSaleCard:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 20,
        height: 130,
        marginHorizontal: 20
    },

    imageContainer:{
        width:'30%',
        backgroundColor: '#E7DDFF',
        borderRadius: 10,
        position: 'relative'
    },

    discount:{
        backgroundColor: '#EBA352',
        width: 50,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center',
        padding: 3,
        position:'absolute',
        left: 6,
        top: 10,
        zIndex: 1
    },

    discountText:{
        fontSize: 10,
        color: '#fff'
    },

    image:{
        width: '100%',
        height: '100%',
        resizeMode:'contain'
    },

    details:{
        width: '30%'
    },

    name:{
        fontFamily: 'Gordita Bold',
        color: "#000",
    },

    oldPrice:{
        marginTop: 20,
        color: '#A6A6A6',
        textDecorationLine:'line-through',
    },

    price:{
        color: "#EBA352",
        fontSize: 16,
        fontFamily: 'Gordita Bold'
    },

    itemStockContainer:{
        backgroundColor: '#E7DDFF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems:'center',
        height: 20,
        width: '100%',
        position: 'relative',
        overflow:'hidden',
        marginTop: 10
    },

    itemSoldContainer:{
        backgroundColor:'#000',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        height: '100%',
        width: '30%',
        position: 'absolute',
        left:0,
        top:0,
        bottom:0   
    },

    itemSold:{
        color: "#EBA352",
        fontSize: 12
    },

    buttonContainer:{
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button:{
        backgroundColor:'#000',
        width: 90,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding:5
    },

    buttonText:{
        color: '#fff'
    },

    bag:{
        width: 18,
        height: 18,
        marginRight: 10
    }
})