// src/components/ShoeItem.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { mainstack } from '../../../navigation/mainstack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { insertfavorite, updateProductFavorite } from '../../../redux/Reducer';
import AxiosInstance from '../../../helper/AxiosInstance';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector


const ShoeItem = (props) => {
  const {item} = props
  const navigation = useNavigation()
  
  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const statusProduct = () => {
    if(item.status == 1){
      return "NEW"
    }else
    if(item.status == 2){
      return "BEST SELLER"
    }else
    if(item.status == 3){
      return "POPULAR"
    }else
    if(item.status == 4){
      return "LIMITED"
    }
  }

  const fetchInsertfavorite = async () => {
    try {
      const response = await AxiosInstance().post(`/favorites/insert/${appState.user.email}`, {product_id: item._id});
      if(response.status){
        dispatch(updateProductFavorite(response.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <TouchableOpacity 
      style={[styles.shoeCard, { position: 'relative' }]}
      onPress={() => navigation.navigate(mainstack.productDetai, {product: item})}  
    >
      <Image source={{uri: item.image[0]}} style={styles.shoeImage} />
      <View style={{ textAlign: 'left', width: '100%' }}>
        <Text style={styles.TextBestSeller}>{statusProduct()}</Text>
        <Text style={styles.shoeName}>{item.name}</Text>
        <Text style={styles.shoePrice}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</Text>
      </View>
      <TouchableOpacity
      style={[
        styles.addButton,
        { position: 'absolute', bottom: 0, left:116 },
      ]}
      onPress={() => fetchInsertfavorite()}
    >
      <Image source={require('../../../images/add.png')}
      style={styles.addButton}
      />
    </TouchableOpacity>
    </TouchableOpacity>

);

};


const styles = StyleSheet.create({
  shoeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    width: 157,
    height: 201,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  shoeImage: {
    width: 157,
    height: 101,
    borderRadius: 10,
    marginBottom: 5,
  },
  TextBestSeller: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFA500', // Thay màu theo nhu cầu
    marginBottom: 5,
  },
  shoeName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000', 
  },
  shoePrice: {
    marginTop:12,
    fontSize: 12,
    color: '#1A2530', 
  },
  addButton: {
    width: 41,
    height: 40,
  
  },
});

export default ShoeItem;