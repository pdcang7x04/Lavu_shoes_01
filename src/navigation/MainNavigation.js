import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainstack } from './mainstack';
import Home from '../page/home/screen/Home';
import Chang_Password from '../page/accountUser/Chang_Password';
import Shipping_Address from '../page/accountUser/Shipping_Address';
import AccountSetting from '../page/Account&Setting/AccountSetting';
import Profile from '../page/profile/Profile';
import BottomNavigation from './BottomNavigation';
import Cart from '../page/Cart/Cart';
import Orderhistory from '../page/orderhistory/Orderhistory';
import Search from '../page/Search/Search';
import Notifications from '../page/notification/Notifications';
import NotiNP from '../page/notificationNP/NotiNP';
import Best_Seller from '../page/home/screen/Best_Seller';
import Detail from '../page/detail/Detail';
import Checkout from '../page/checkout/Checkout';
import Comment from '../page/Comment/Comment';
import DetailOrder from '../page/checkout/DetailOrder';
import Limited from '../page/home/screen/LImited';
import UserNavigation from './UserNavigation';
import Login from '../page/Login/Login';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
    //   initialRouteName={mainstack.welcome}
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name={mainstack.bottomnavigation} component={BottomNavigation}/>
      <Stack.Screen name={mainstack.home} component={Home}/>
      <Stack.Screen name={mainstack.bestSeller} component={Best_Seller}/>
      <Stack.Screen name={mainstack.changpassword} component={Chang_Password}/>
      <Stack.Screen name ={mainstack.shippingaddress} component={Shipping_Address}/>
      <Stack.Screen name ={mainstack.accountAndSetting} component={AccountSetting}/>
      <Stack.Screen name ={mainstack.profile} component={Profile}/>
      <Stack.Screen name ={mainstack.cart} component={Cart}/>
      <Stack.Screen name ={mainstack.orderHistory} component={Notifications}/>
      <Stack.Screen name ={mainstack.search} component={Search}/>
      <Stack.Screen name ={mainstack.notification} component={NotiNP}/>
      <Stack.Screen name ={mainstack.productDetai} component={Detail}/>
      <Stack.Screen name ={mainstack.checkout} component={Checkout}/>
      <Stack.Screen name ={mainstack.Comment} component={Comment}/>
      <Stack.Screen name={mainstack.DetailOrder} component={DetailOrder}/>
      <Stack.Screen name={mainstack.limited} component={Limited}/>

    </Stack.Navigator>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})