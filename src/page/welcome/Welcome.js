import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '../../styles/colors'
import { mainstack } from '../../navigation/mainstack'
import { t } from '../../styles/font'

const Welcome = (props) => {
  const {navigation} = props

  setTimeout(() => {
    navigation.navigate(mainstack.onboard1)
  }, 3000);
  
  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/logo.png')}
      />
      <Text style={styles.text}>Lavu’s shoesshop</Text>
    </View>

  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    fontFamily: t.Roboto_Bold,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 36,
    color: colors.orange1
  }
});
