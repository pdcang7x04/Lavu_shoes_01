import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
import { useDispatch, useSelector } from 'react-redux';
import { ascendingQuantity, decreaseQuantity, removeItemFromCart } from '../../redux/Reducer';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector

const ItemCart = (props) => {
    const {data} = props;

    const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)
  return (
    <View style={styles.itemContainer}>
      <Image source={{uri: data?.color.image}} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{data.name}</Text>
        <Text style={styles.itemInfo}>{`size: ${data.size} | Giá: ${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.price)}`}</Text>
        <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={() => dispatch(decreaseQuantity(data))}>
            <Image source={require('../../images/icon_mini.png')} style={styles.iconButton} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{data.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => dispatch(ascendingQuantity(data))}>
            <Image source={require('../../images/icon_plus.png')} style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={() => dispatch(removeItemFromCart(data))}>
            <Image source={require('../../images/icon_tr.png')} style={styles.iconButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ItemCart

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        elevation: 2,
        alignItems: 'center',
      },
      itemImage: {
        width: 70,
        height: 70,
        marginRight: 15,
      },
      itemDetails: {
        flex: 1,
      },
      itemName: {
        fontFamily:t.Roboto_Medium,
        fontSize: 16,
      },
      itemInfo: {
        fontFamily:t.Roboto_Medium,
        fontSize: 14,
        color: '#555',
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      },
      quantityText: {

        fontSize: 16,
        padding:10
      },
      quantityButton: {
        padding: 5,
      },
      iconButton: {
        width: 24,
        height: 24,
      },
      deleteButton: {
        marginLeft: 'auto',
      },
})