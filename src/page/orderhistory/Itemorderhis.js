import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
const Itemorderhis = (props) => {
    const {data} = props;
  return (
    <View style={styles.orderItem}>
      <Image source={data.image} style={styles.image} />
      <View style={styles.orderDetails}>
        <Text style={styles.productText}>{data.name}</Text>
        <Text style={styles.orderIdText}>Đặt hàng #{data.id}</Text>
        <View style={styles.bottomContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{data.date}</Text>
          </View>
          <TouchableOpacity style={styles.reviewButton}>
            <Text style={styles.buttonText}>Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Itemorderhis

const styles = StyleSheet.create({
    orderItem: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 8,
        alignItems: 'center',
        elevation: 2,
      },
      image: {
        width: 50,
        height: 50,
        marginRight: 16,
      },
      orderDetails: {
        flex: 1,
      },
      productText: {
        fontFamily:t.Roboto_Medium,
        fontSize: 18,
        fontWeight: 'bold',
      },
      orderIdText: {
        fontFamily:t.Roboto_Bold,
        fontSize: 14,
        color: 'black',
      },
      bottomContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8, 
      },
      dateContainer: {
        backgroundColor: '#FF5722',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginRight: 8, 
      },
      dateText: {
        fontFamily:t.Roboto_Medium,
        color: 'white',
      },
      reviewButton: {
        backgroundColor: '#FF5722',
        paddingVertical: 5,
        paddingHorizontal: 30,
        borderRadius: 30,
      },
      buttonText: {
        fontFamily:t.Roboto_Medium,
        color: 'white',
        fontWeight: 'bold',
      },
    
})