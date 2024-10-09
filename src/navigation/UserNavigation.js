import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mainstack } from './mainstack';
import Welcome from '../page/welcome/Welcome';
import Onboard from '../page/onboar/screen/Onboard';
import Login from '../page/Login/Login';
import Register from '../page/Login/Register';
import RecoveryPassword from '../page/Login/RecoveryPassword';
import Home from '../page/home/screen/Home';
import Profile from '../page/profile/Profile';
import AccountSetting from '../page/Account&Setting/AccountSetting';
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'AccountSetting'}
      screenOptions={{headerShown: false}}
    >
      {/* <Stack.Screen name={mainstack.welcome} component={Welcome}/> */}
      {/* <Stack.Screen name={mainstack.onboard1} component={Onboard}/> */}
      {/* <Stack.Screen name={mainstack.login} component={Login}/> */}
      {/* <Stack.Screen name={mainstack.register} component={Register}/> */}
      {/* <Stack.Screen name={mainstack.recoveryPassword} component={RecoveryPassword}/> */}
      {/* <Stack.Screen name={mainstack.passwordauthentication} component={Password_authentication}/> */}
      {/* <Stack.Screen name={mainstack.setupnewpassword} component={Setup_New_Password}/> */}
      {/* <Stack.Screen name={mainstack.changpassword} component={Chang_Password}/> */}
      {/* <Stack.Screen name ={mainstack.shippingaddress} component={Shipping_Address}/> */}
      {/* <Stack.Screen name={mainstack.home} component={Home}/> */}
      <Stack.Screen name={'accountsetting'} component={AccountSetting}/>
      <Stack.Screen name={'profile'} component={Profile}/>
    </Stack.Navigator>
  )
}

export default UserNavigation

const styles = StyleSheet.create({})