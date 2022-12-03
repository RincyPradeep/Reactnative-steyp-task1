import { StyleSheet, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react'

import Home from './src/screens/Home'
import Search from './src/screens/Search'
import Wishlist from './src/screens/Wishlist'
import Bag from './src/screens/Bag'
import Profile from './src/screens/Profile'
import FlashSale from './src/screens/FlashSale'

import HomeBlack from './src/assets/icons/home_fill_black.svg'
import HomeGrey from './src/assets/icons/home_grey.svg'
import SearchBlack from './src/assets/icons/search_black.svg'
import SearchGrey from './src/assets/icons/search_grey.svg'
import WishlistBlack from './src/assets/icons/like_black.svg'
import WishlistGrey from './src/assets/icons/like_grey.svg'
import BagBlack from './src/assets/icons/bag_black.svg'
import BagGrey from './src/assets/icons/bag_grey.svg'
import ProfileBlack from './src/assets/icons/profile_black.svg'
import ProfileGrey from './src/assets/icons/profile_grey.svg'


const App = () => {

  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();

  // const HomeStackScreen =()=>(  
    
  // )

  const HomeTabs =() =>(
    <Tab.Navigator 
        screenOptions={({route})=>({
          headerShown:false,
          tabBarActiveTintColor:'black',
          tabBarInactiveTintColor:'#A6A6A6',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: 'transparent',
            height: 70,
          },
          tabBarIcon:({focused,color,size})=>{
            let iconPath;
            if(route.name === 'Home'){
              iconPath = focused ? <HomeBlack width={28} height={28} /> : <HomeGrey width={28} height={28} />
            }
            else if(route.name === 'Search'){
              iconPath = focused ? <SearchBlack width={28} height={28} /> : <SearchGrey width={28} height={28} />
            }
            else if(route.name === 'Wishlist'){
              iconPath = focused ? <WishlistBlack width={28} height={28} /> : <WishlistGrey width={28} height={28} />
            }
            else if(route.name === 'Bag'){
              iconPath = focused ? <BagBlack width={28} height={28} /> : <BagGrey width={28} height={28} />
            }
            else{
              iconPath = focused ? <ProfileBlack width={28} height={28} /> : <ProfileGrey width={28} height={28} />
            }
            return iconPath
          }
          })}
      >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Wishlist" component={Wishlist} />
          <Tab.Screen name="Bag" component={Bag} options={{tabBarBadge:3}}/>
          <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  )

  return (
    <NavigationContainer>                 
      <HomeStack.Navigator >
        <HomeStack.Screen name="HomeScreen" component={HomeTabs} options={{headerShown:false}} />
        <HomeStack.Screen name="FlashSaleScreen" component={FlashSale} options={{headerShown:false}} />
      </HomeStack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  
})