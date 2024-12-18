// src/components/BestSellerItem.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductFavorite } from '../../../redux/Reducer';
import AxiosInstance from '../../../helper/AxiosInstance';
import { useNavigation } from '@react-navigation/native';
import { mainstack } from '../../../navigation/mainstack';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector

const BestSellerItem = (props) => {
  const { item } = props
  const navigation = useNavigation()

  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const statusProduct = () => {
    if (item.status == 1) {
      return "MỚI"
    } else
      if (item.status == 2) {
        return "BÁN CHẠY"
      } else
        if (item.status == 3) {
          return "PHỔ BIẾN"
        } else
          if (item.status == 4) {
            return "GIỚI HẠN"
          }
  }

  const catetory = () => {
    if (item.category.name === 'Nam') {
      return "Giày Nam"
    }
    if (item.category.name === 'Nữ') {
      return "Giày Nữ"
    }

  }

  const fetchInsertfavorite = async () => {
    try {
      const response = await AxiosInstance().post(`/favorites/insert/${appState.user.email}`, { product_id: item._id });
      if (response.status) {
        dispatch(updateProductFavorite(response.data))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TouchableOpacity style={[styles.shoeCard, { position: 'relative' }]} onPress={() => navigation.navigate(mainstack.productDetai, { product: item })}>
      <Image source={{ uri: item.image[0] }} style={styles.shoeImage} />
      <View style={{ textAlign: 'left', width: '100%' }}>
        <Text style={styles.TextBestSeller}>{statusProduct()}</Text>
        <Text style={styles.shoeName}>{item.name}</Text>
        <Text style={styles.textCategory}>{catetory()}</Text>
        <Text style={styles.shoePrice}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.addButton,
          { position: 'absolute', bottom: 0, left: 110 },
        ]}
        onPress={() => fetchInsertfavorite()}
      >
        <Image source={require('../../../images/add.png')}
          style={styles.addButton}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  shoeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    width: 159,
    height: 220,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
  },
  shoeImage: {
    width: 157,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  TextBestSeller: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.blue1,
    marginBottom: 5,
    fontFamily: t.Roboto_Bold,
  },
  shoeName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.black1,
    fontFamily: t.Roboto_Bold,
  },
  shoePrice: {
    fontSize: 12,
    color: colors.black1,
    marginBottom: 5,
    fontFamily: t.Roboto_Bold,
  },
  addButton: {
    width: 50,
    height: 50,

  },
});

export default BestSellerItem;