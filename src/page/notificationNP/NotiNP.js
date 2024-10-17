import { StyleSheet, Text, View,Image,FlatList} from 'react-native'
import React from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
import ItemnotiNP from './ItemnotiNP';
const NotiNP = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          <View style={{alignItems: 'center', marginLeft: 80}}>
            <Text style={styles.Favourite}>Notifications</Text>
          </View>
        </View>
        <Text style={styles.clearText}>Clear All</Text>
      </View>
      <Text style={styles.dayTest}> Today </Text>
      <FlatList
        data={notifications}
        renderItem={({item})=> <ItemnotiNP data={item}/>}
        keyExtractor={item => item.id}
      />
       {/* Tiêu đề cho Yesterday */}
       <Text style={styles.dayTest}>Yesterday</Text>
      <FlatList
        data={yesterdayNotifications}
        renderItem={({ item }) => <ItemnotiNP data={item} />}
        keyExtractor={item => item.id}
      />
      </View>
  )
}

export default NotiNP

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
      clearText: {
        fontFamily: t.Roboto_Bold,
        fontSize: 18,
        color: '#FF5722',
      },
      dayTest: {
        fontSize: 18,
        color: 'black',
        marginTop: 24,
        fontFamily: t.Roboto_Bold,
      },
})
const notifications = [
    {
      id: '1',
      message: 'We Have New Products With Offers',
      time: '6 min ago',
      image: require('../../images/image.png'), 
      originalPrice: '$364.95',
      discountedPrice: '$260.00',
    },
    {
      id: '2',
      message: 'We Have New Products With Offers',
      time: '26 min ago',
      image: require('../../images/image.png'), 
      originalPrice: '$364.95',
      discountedPrice: '$260.00',
    },
    {
        id: '3',
        message: 'We Have New Products With Offers',
        time: '26 min ago',
        image: require('../../images/image.png'), 
        originalPrice: '$364.95',
        discountedPrice: '$260.00',
      },
      {
        id: '4',
        message: 'We Have New Products With Offers',
        time: '26 min ago',
        image: require('../../images/image.png'), 
        originalPrice: '$364.95',
        discountedPrice: '$260.00',
      },
      {
        id: '5',
        message: 'We Have New Products With Offers',
        time: '26 min ago',
        image: require('../../images/image.png'), 
        originalPrice: '$364.95',
        discountedPrice: '$260.00',
      },
  ];

  const yesterdayNotifications = [
    {
      id: '5',
      message: 'We Have New Products With Offers',
      time: '4 days ago',
      image: require('../../images/image.png'), 
      originalPrice: '$364.95',
      discountedPrice: '$260.00',
    },
    {
      id: '6',
      message: 'We Have New Products With Offers',
      time: '4 days ago',
      image: require('../../images/image.png'), 
      originalPrice: '$364.95',
      discountedPrice: '$260.00',
    },
  ];