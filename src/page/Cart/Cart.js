import { StyleSheet, Text, View ,Image,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
import ItemCart from './ItemCart';
const Cart = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          <View style={{alignItems: 'center', marginLeft: 80}}>
            <Text style={styles.Favourite}>My Cart</Text>
          </View>
        </View>
        <Image
          source={require('../../images/icon_time.png')}
          style={styles.icon}
        />
      </View>
      <FlatList
        data={cartItems}
        renderItem={({item})=> <ItemCart data={item}/>}
        keyExtractor={item => item.id}
      />
       <View style={styles.summary}>
        <Text style={styles.summaryText}>{`Subtotal: `}</Text>
        <Text style={styles.summaryText}>{`Shipping: `}</Text>
        <Text style={styles.totalText}>{`Total Cost: `}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} activeOpacity={0.8}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>

      </View>
  )
}

export default Cart

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
      icon: {
        width: 24,
        height: 24,
        marginRight: 10,
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
      summary: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
      },
      summaryText: {
        fontFamily:t.Roboto_Medium,
        fontSize: 16,
        marginVertical: 5,
      },
      totalText: {
        fontFamily:t.Roboto_Bold,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
      },
      checkoutButton: {
        backgroundColor: colors.orange1,
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
        elevation: 3,
      },
      checkoutText: {
        fontFamily:t.Roboto_Medium,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
    
})

const cartItems = [
    { id: '1', name: 'Nike Club Max', price: 64.95, size: 'L', quantity: 1, image: require('../../images/image.png') },
    { id: '2', name: 'Nike Air Max 200', price: 64.95, size: 'XL', quantity: 1, image: require('../../images/image.png') },
    { id: '3', name: 'Nike Air Max', price: 64.95, size: 'XXL', quantity: 1, image: require('../../images/image.png') },
  ];