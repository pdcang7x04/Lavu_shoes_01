import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../styles/colors';
import { t } from '../../styles/font';
import Itemorderhis from './Itemorderhis';
import AxiosInstance from '../../helper/AxiosInstance';

const Orderhistory = (props) => {
  const { navigation } = props


  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../images/icon_back.png')}
              style={styles.icon_menu}
            />
          </TouchableOpacity>
          <View style={{ alignItems: 'center', marginLeft: 80 }}>
            <Text style={styles.Favourite}>Lịch Sử</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={orderData}
        renderItem={({ item }) => <Itemorderhis data={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default Orderhistory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon_menu: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  Favourite: {
    fontFamily: t.Roboto_Bold,
    fontSize: 20,
    color: colors.black1,
  },
})
const orderData = [
  { id: '1', name: 'Nike Jordan', date: 'April, 06', image: require('../../images/image.png') }, // Thay đổi đường dẫn hình ảnh
  { id: '2', name: 'Nike Jordan', date: 'April, 06', image: require('../../images/image.png') },
  { id: '3', name: 'Nike Jordan', date: 'April, 06', image: require('../../images/image.png') },
  { id: '4', name: 'Nike Jordan', date: 'April, 06', image: require('../../images/image.png') },
];