import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
import AppNavigation from './src/navigation/AppNavigation';

import Profile from './src/page/profile/Profile';
import AccountSetting from './src/page/Account&Setting/AccountSetting';

import Cart from './src/page/Cart/Cart';
import ItemCart from './src/page/Cart/ItemCart';
import Notifications from './src/page/notification/Notifications';
import Orderhistory from './src/page/orderhistory/Orderhistory';
import NotiNP from './src/page/notificationNP/NotiNP';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        {/* <AppNavigation /> */}
        {/* <Cart /> */}
        {/* <ItemCart /> */}
        {/* <Notifications /> */}
        {/* <Orderhistory /> */}
        <NotiNP />
      </SafeAreaView>
    {/* <AccountSetting/> */}

    </Provider>
  );
};

export default App;
