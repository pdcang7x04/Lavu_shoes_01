import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {mainstack} from './mainstack';
import Welcome from '../page/welcome/Welcome';
import Onboard from '../page/onboar/screen/Onboard';
import Login from '../page/Login/Login';
import Register from '../page/Login/Register';
import RecoveryPassword from '../page/Login/RecoveryPassword';

import Home from '../page/home/screen/Home';
import Profile from '../page/profile/Profile';
import AccountSetting from '../page/Account&Setting/AccountSetting';
import Checkout from '../page/checkout/Checkout';
import Detail from '../page/detail/Detail';
import Password_authentication from '../page/Login/Password_authentication';
import Setup_New_Password from '../page/Login/Setup_New_Password';
import BestSellerScreen from '../page/payment/BestSellerScreen';
import Comment from '../page/Comment/Comment';
import DetailOrder from '../page/checkout/DetailOrder';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={mainstack.welcome}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={mainstack.detail} component={Detail} />
      <Stack.Screen
        name={mainstack.accountAndSetting}
        component={AccountSetting}
      />
      <Stack.Screen name={mainstack.profile} component={Profile} />

      <Stack.Screen name={mainstack.welcome} component={Welcome} />
      <Stack.Screen name={mainstack.onboard1} component={Onboard} />
      <Stack.Screen name={mainstack.login} component={Login} />
      <Stack.Screen name={mainstack.register} component={Register} />
      <Stack.Screen name={mainstack.Comment} component={Comment}/>
      <Stack.Screen
        name={mainstack.bestSellerSreen}
        component={BestSellerScreen}
      />
<Stack.Screen name={mainstack.DetailOrder} component={DetailOrder}/>
      <Stack.Screen name={mainstack.checkout} component={Checkout} />

      <Stack.Screen
        name={mainstack.recoveryPassword}
        component={RecoveryPassword}
      />
      <Stack.Screen
        name={mainstack.passwordauthentication}
        component={Password_authentication}
      />
      <Stack.Screen
        name={mainstack.setupnewpassword}
        component={Setup_New_Password}
      />
    </Stack.Navigator>
  );
};

export default UserNavigation;

const styles = StyleSheet.create({});
