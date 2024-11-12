import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserNavigation from './UserNavigation';
import MainNavigation from './MainNavigation';
import Toast from 'react-native-toast-message';
import { mainstack } from './mainstack';

// Import all screen components
import Welcome from '../page/welcome/Welcome';
import Onboard from '../page/onboar/screen/Onboard';
import Login from '../page/Login/Login';
import Register from '../page/Login/Register';
import RecoveryPassword from '../page/Login/RecoveryPassword';
import PasswordAuthentication from '../page/Login/Password_authentication';
import SetupNewPassword from '../page/Login/Setup_New_Password';
import BestSellerScreen from '../page/payment/BestSellerScreen';
import Comment from '../page/Comment/Comment';
import DetailOrder from '../page/checkout/DetailOrder';
import Home from '../page/home/screen/Home';
import Profile from '../page/profile/Profile';
import AccountSetting from '../page/Account&Setting/AccountSetting';
import Checkout from '../page/checkout/Checkout';
import ChangPassword from '../page/accountUser/Chang_Password';
import ShippingAddress from '../page/accountUser/Shipping_Address';
import BottomNavigation from './BottomNavigation';
import Cart from '../page/Cart/Cart';
import OrderHistory from '../page/orderhistory/Orderhistory';
import Search from '../page/Search/Search';
import Notifications from '../page/notification/Notifications';
import NotiNP from '../page/notificationNP/NotiNP';
import BestSeller from '../page/home/screen/Best_Seller';
import Limited from '../page/home/screen/LImited';
import Detail from '../page/detail/Detail';

const useAppSelector = useSelector;
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const appState = useAppSelector((state) => state.lavu);

  return (
    <NavigationContainer>
      {/* Uncomment to use UserNavigation based on user state */}
      {/* {appState.user == null ? <UserNavigation/> : <MainNavigation/>} */}

      <Stack.Navigator
        initialRouteName={mainstack.welcome}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={mainstack.welcome} component={Welcome} />
        <Stack.Screen name={mainstack.onboard1} component={Onboard} />
        <Stack.Screen name={mainstack.login} component={Login} />
        <Stack.Screen name={mainstack.register} component={Register} />
        <Stack.Screen name={mainstack.Comment} component={Comment} />
        <Stack.Screen name={mainstack.bestSellerSreen} component={BestSellerScreen} />
        <Stack.Screen name={mainstack.DetailOrder} component={DetailOrder} />
        <Stack.Screen name={mainstack.checkout} component={Checkout} />
        <Stack.Screen name={mainstack.recoveryPassword} component={RecoveryPassword} />
        <Stack.Screen name={mainstack.passwordauthentication} component={PasswordAuthentication} />
        <Stack.Screen name={mainstack.setupnewpassword} component={SetupNewPassword} />
        <Stack.Screen name={mainstack.bottomnavigation} component={BottomNavigation} />
        <Stack.Screen name={mainstack.home} component={Home} />
        <Stack.Screen name={mainstack.bestSeller} component={BestSeller} />
        <Stack.Screen name={mainstack.changpassword} component={ChangPassword} />
        <Stack.Screen name={mainstack.shippingaddress} component={ShippingAddress} />
        <Stack.Screen name={mainstack.accountAndSetting} component={AccountSetting} />
        <Stack.Screen name={mainstack.profile} component={Profile} />
        <Stack.Screen name={mainstack.cart} component={Cart} />
        <Stack.Screen name={mainstack.orderHistory} component={Notifications} />
        <Stack.Screen name={mainstack.search} component={Search} />
        <Stack.Screen name={mainstack.notification} component={NotiNP} />
        <Stack.Screen name={mainstack.productDetai} component={Detail} />
        <Stack.Screen name={mainstack.limited} component={Limited} />
      </Stack.Navigator>
      {/* dòng này không được tắt  */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});