import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import LeftArrow from '../assets/icons/left_black.svg'


const Notification = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <LeftArrow width={30} height={30} />
        </TouchableOpacity>
        <Text>Notification</Text>
    </View>
  )
}

export default Notification