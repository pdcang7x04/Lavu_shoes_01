import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
import AppNavigation from './src/navigation/AppNavigation';

import Profile from './src/page/profile/Profile';
import AccountSetting from './src/page/Account&Setting/AccountSetting';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          translucent={true}
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <AppNavigation />
      </SafeAreaView>
    {/* <AccountSetting/> */}

    </Provider>
  );
};

export default App;
