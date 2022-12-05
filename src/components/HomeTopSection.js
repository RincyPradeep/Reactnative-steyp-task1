import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

import Message from '../assets/icons/message_not_black.svg'
import Bell from '../assets/icons/bell_not_black.svg'


const HomeTopSection = ({navigation}) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.title}>Shopline</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Message')}>
          <Message width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
          <Bell width={30} height={30} />
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
  }
})