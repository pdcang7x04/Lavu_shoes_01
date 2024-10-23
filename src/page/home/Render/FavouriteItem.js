// src/components/FavouriteItem.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import { useNavigation } from '@react-navigation/native';
import { mainstack } from '../../../navigation/mainstack';
import AxiosInstance from '../../../helper/AxiosInstance';
import { removeProductFavorite } from '../../../redux/Reducer';
import { useDispatch, useSelector } from 'react-redux';

const FavouriteItem = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const fetchRemoveFavorite = async () => {
    if (!item?._id) return;

    try {
      const response = await AxiosInstance().delete(`/favorites/delete/${item._id}`);
      if (response.status) {
        dispatch(removeProductFavorite(item._id));
      }
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  return (
    <View style={styles.shoeCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate(mainstack.productDetail, { product: item?.product[0] })}
      >
        <Image source={{ uri: item?.product[0]?.image[0] }} style={styles.shoeImage} />
        <View style={styles.textContainer}>
          <Text style={styles.textBestSeller}>BEST SELLER</Text>
          <Text style={styles.shoeName}>{item?.product[0]?.name}</Text>
          <Text style={styles.shoePrice}>
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item?.product[0]?.price)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={fetchRemoveFavorite}>
        <Image source={require('../../../images/add.png')} style={styles.addButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shoeCard: {
    width: 157,
    height: 190,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    margin: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    padding: 10,
    position: 'relative', 
  },
  shoeImage: {

    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  textBestSeller: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.orange1,
    marginTop: 5,
  },
  shoeName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black1,
    fontFamily: t.Roboto_Bold,
    marginTop: 5,
  },
  shoePrice: {
    marginTop:10,
    fontSize: 12,
    color: colors.black1,
    fontFamily: t.Roboto_Bold,
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0, 
  },
  addButtonImage: {
    width: 40,
    height: 40,
  },
});

export default FavouriteItem;