import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

import Clock from '../assets/icons/clock_yellow.svg'


const Time = () => {
  return (
    <View style={styles.timeContainer}>
        <Clock style={styles.clock} width={20} height={20} />
        <Text style={styles.time}>02:04:56</Text>
    </View>
  )
}

export default Time

const styles = StyleSheet.create({
    timeContainer:{
        width: 110,
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        paddingVertical: 6,
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
})