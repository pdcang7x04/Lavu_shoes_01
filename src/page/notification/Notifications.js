import { StyleSheet, Text, View , Image,FlatList } from 'react-native'
import React from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
import Itemnoti from './Itemnoti';
const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          <View style={{alignItems: 'center', marginLeft: 80}}>
            <Text style={styles.Favourite}>History</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={orderData}
        renderItem={({item})=> <Itemnoti data={item}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Notifications

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
    { id: '1', status: 'Packed', items: 3, image: require ('../../images/icon_notification.png') },
    { id: '2', status: 'Shipped', items: 3, image: require ('../../images/icon_notification.png') },
    { id: '3', status: 'Delivered', items: 3, image: require ('../../images/icon_notification.png') },
    { id: '4', status: 'Delivered', items: 3, image: require ('../../images/icon_notification.png') },
  ];