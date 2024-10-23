import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
const Itemnoti = (props) => {
    const {data} = props;

    console.log("hiôtrry: ", data)
    
    const orderStatus = () => {
      if(data.paymentStatus == 1){
        return "Chưa thanh toán"
      }
      if(data.paymentStatus == 2){
        return "Đã thanh toán"
      }
      if(data.paymentStatus == 3){
        return "Đang giao"
      }
      if(data.paymentStatus == 2){
        return "Đã hủy"
      }
    }
  return (
    <View style={styles.orderItem}>
    <Image source={require('../../images/logo.png')} style={styles.image} />
    <View style={styles.orderDetails}>
      <Text style={styles.orderText}>Order #</Text>
      <Text style={styles.orderText1}>Standard Delivery</Text>
      <Text style={styles.statusText}>{orderStatus()}</Text>
    </View>
    <Text style={styles.itemsText}>{data.orderDetail.length} items</Text>
  </View>

  )
}

export default Itemnoti

const styles = StyleSheet.create({
    orderItem: {
        flexDirection: 'row',
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'space-between', // Căn chỉnh các thành phần
      },
      image: {
        width: 50,
        height: 50,
        marginRight: 16,
      },
      orderDetails: {
        flex: 1,
      },
      orderText: {
        fontFamily: t.Roboto_Bold,
        fontSize: 18,
        color: 'black'
      },
      orderText1: {
        fontFamily: t.Roboto_Medium,
        fontSize: 18,
      },
      statusText: {
        fontSize: 16,
        fontFamily: t.Roboto_Medium,
        color: 'black',
      },
      itemsText: {
        fontSize: 14,
        color: 'gray',
        alignSelf: 'flex-start', // Đặt vị trí ở góc trên bên phải
      },
})