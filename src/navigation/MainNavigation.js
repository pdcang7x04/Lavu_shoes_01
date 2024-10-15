import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainstack } from './mainstack';
import Home from '../page/home/screen/Home';
import Chang_Password from '../page/accountUser/Chang_Password';
import Shipping_Address from '../page/accountUser/Shipping_Address';
import AccountSetting from '../page/Account&Setting/AccountSetting';
import Profile from '../page/profile/Profile';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
    //   initialRouteName={mainstack.welcome}
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name={mainstack.home} component={Home}/>
      {/* <Stack.Screen name={mainstack.changpassword} component={Chang_Password}/>
      <Stack.Screen name ={mainstack.shippingaddress} component={Shipping_Address}/>
      <Stack.Screen name ={mainstack.accountAndSetting} component={AccountSetting}/>
      <Stack.Screen name ={mainstack.profile} component={Profile}/> */}


    </Stack.Navigator>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})