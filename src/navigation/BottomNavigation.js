import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Children } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mainstack } from './mainstack';
import Home from '../page/home/screen/Home';
import Favourite from '../page/home/screen/Favourite';
import Profile from '../page/profile/Profile';
import AccountSetting from '../page/Account&Setting/AccountSetting';
import Best_Seller from '../page/home/screen/Best_Seller';
import Cart from '../page/Cart/Cart';
import NotiNP from '../page/notificationNP/NotiNP';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity TouchableOpacity
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 57,
                    height: 57,
                    borderRadius: 28.5,
                    backgroundColor: '#F15E2B',
                }}
            >
                {children}
            </View>

        </TouchableOpacity >
    )
}



const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.tabContainer, ...styles.shadow },
            }}
        >
            <Tab.Screen name={mainstack.home} component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../images/icon_home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: focused ? '#F15E2B' : '#000000'
                                }}
                            />
                            
                        </View>
                    )
                }}
            />
            <Tab.Screen name={mainstack.favorite} component={Favourite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../images/icon_tim.png')}
                                resizeMode='contain'
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: focused ? '#F15E2B' : '#000000'
                                }}
                            />
                            
                        </View>
                    )
                }}

            />
            {/* <Tab.Screen name={mainstack.cart} component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../images/icon_cart_bot.png')}
                            resizeMode='contain'
                            style={{
                                width: 22,
                                height: 22,
                                tintColor: '#fff'
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            /> */}
            <Tab.Screen name={mainstack.notification} component={NotiNP}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../images/notifications.png')}
                                resizeMode='contain'
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: focused ? '#F15E2B' : '#000000'
                                }}
                            />
                            
                        </View>
                    )
                }}

            />
            <Tab.Screen name={mainstack.profile} component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../images/icon_person.png')}
                                resizeMode='contain'
                                style={{
                                    width: 22,
                                    height: 22,
                                    tintColor: focused ? '#F15E2B' : '#000000'
                                }}
                            />
                            
                        </View>
                    )
                }}

            />
        </Tab.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({
    tabContainer: {
        position: 'absolute',
        // bottom: -25,
        // left: 20,
        // right: 20,
        elevation: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 70,
    },
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})