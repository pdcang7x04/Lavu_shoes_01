import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import UserNavigation from './UserNavigation';
import MainNavigation from './MainNavigation';
import Toast from 'react-native-toast-message';

const useAppSelector = useSelector;

const AppNavigation = () => {
  const appState = useAppSelector((state) => state.lavu)
  return (
    <NavigationContainer>
      {
        appState.user == null ? <UserNavigation/> : <MainNavigation/>
      }
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </NavigationContainer>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})