import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import LeftArrow from '../assets/icons/left_black.svg'


const Message = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <LeftArrow width={30} height={30} />
        </TouchableOpacity>
        <Text>Message</Text>
    </View>
  )
}

export default Message