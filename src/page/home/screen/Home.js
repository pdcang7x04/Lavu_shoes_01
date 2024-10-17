import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { mainstack } from '../../../navigation/mainstack'

const Home = (props) => {
  const {navigation} = props
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', height:"100%"}}>
        <Text onPress={() => navigation.navigate(mainstack.shippingaddress)}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})