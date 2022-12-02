import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native'

import React from 'react'

import HomeTopSection from '../components/HomeTopSection'
import HomeCategorySection from '../components/HomeCategorySection'
import HomeMiddleSection from '../components/HomeMiddleSection'
import HomeBottomSection from '../components/HomeBottomSection'


const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <HomeTopSection />
        <HomeCategorySection />    
        <HomeMiddleSection navigation={navigation} />
        <HomeBottomSection />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home


const styles = StyleSheet.create({
      container:{
        fontFamily: 'Gordita Regular',
        color: '#000',
        backgroundColor: '#fff',
        // flex:1,
      },
})