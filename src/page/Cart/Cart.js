import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../styles/colors';
import { t } from '../../styles/font';
import ItemCart from './ItemCart';
import { useDispatch, useSelector } from 'react-redux';
import { mainstack } from '../../navigation/mainstack';
import Toast from 'react-native-toast-message';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector

const Cart = (props) => {
  const { navigation } = props

  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const [Subtotal, setSubtotal] = useState(0);
  const [Shipping, setShipping] = useState(0)
  const [TotalCost, setTotalCost] = useState(0)


  useEffect(() => {

    let tamtinh = 0;
    for (let i = 0; i < appState.cart.length; i++) {
      tamtinh += (appState.cart[i].price * appState.cart[i].quantity);
    }
    setSubtotal(tamtinh);
    if (appState.cart.length === 0) {
      setShipping(0);
      setTotalCost(0);
    } else {
      setShipping(30000)
      setTotalCost(tamtinh + 30000);
    }
  }, [appState.cart])


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
            <Text style={styles.Favourite}>My Cart</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(mainstack.orderHistory)}>
          <Image
            source={require('../../images/icon_time.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={appState.cart}
        renderItem={({ item }) => <ItemCart data={item} />}
        keyExtractor={item => item._id}
      />
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Subtotal: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Subtotal)}</Text>
        <Text style={styles.summaryText}>Shipping: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(Shipping)}</Text>
        <Text style={styles.totalText}>Total Cost: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(TotalCost)}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} activeOpacity={0.8}
        onPress={() => {
          if(appState.cart.length == 0){
            return Toast.show({
              text1: "Giỏ hàng của bạn đang trống",
              position: "top",
              type: "error"
            })
          }
          navigation.navigate(mainstack.checkout, {
            total: {
              subtotal: Subtotal,
              shipping: Shipping,
              totalCost: TotalCost,
            }
          })
        }}
      >
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
    fontFamily: t.Roboto_Medium,
    fontSize: 16,
    marginVertical: 5,
  },
  totalText: {
    fontFamily: t.Roboto_Bold,
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
    fontFamily: t.Roboto_Medium,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

})

