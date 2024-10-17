import { StyleSheet, Text, View,Image, } from 'react-native'
import React from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
const ItemnotiNP = (props) => {
    const {data} = props;
  return (
    <View style={styles.notificationItem}>
    <Image source={data.image} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.message}>{data.message}</Text>
      <Text style={styles.price}>
        {data.originalPrice} <Text style={styles.discountedPrice}>{data.discountedPrice}</Text>
      </Text>
    </View>
    <Text style={styles.time}>{data.time}</Text>
  </View>
  )
}

export default ItemnotiNP

const styles = StyleSheet.create({
    notificationItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 10,
        alignItems: 'center',
        elevation: 2,
        justifyContent: 'space-between'
      },
      image: {
        width: 50,
        height: 50,
        marginRight: 16,
      },
      details: {
        flex: 1,
      },
      message: {
        fontFamily:t.Roboto_Bold,
        fontSize: 16,
        fontWeight: 'bold',
        color:'black'
      },
      time: {
        fontSize: 12,
        color: 'gray',
        alignSelf: 'flex-start'
      },
      price: {
        fontSize: 14,
        color: 'black',
      },
      discountedPrice: {
        color: 'red',
        fontWeight: 'bold',
      },
})