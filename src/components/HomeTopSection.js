import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

import Message from '../assets/icons/message_black.svg'
import Bell from '../assets/icons/bell_black.svg'


const HomeTopSection = ({navigation}) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.title}>Shopline</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Message')} style={styles.icon}>
          <Message width={30} height={30} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Notification')} style={styles.icon}>
          <Bell width={30} height={30} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeTopSection


const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20
  },

  title: {
    fontSize: 30,
    fontFamily: 'Gordita Bold',
    color: "#000"
  },

  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 80
  },

  icon:{
    position: 'relative'
  },

  badge:{
    backgroundColor:'#FF3B30',
    width: 15,
    height: 15,
    borderRadius: 15/2,
    zIndex: 10,
    position: 'absolute',
    right:0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  badgeText:{
    color: '#fff',
    fontSize: 10
  }
})