// src/components/ShoeItem.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { mainstack } from '../../../navigation/mainstack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AxiosInstance from '../../../helper/AxiosInstance';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
const ShoeItem = (props) => {
  const { item } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.lavu);

  const statusProduct = () => {
    if (item.status === 1) return "NEW";
    if (item.status === 2) return "BEST SELLER";
    if (item.status === 3) return "POPULAR";
    if (item.status === 4) return "LIMITED";
    return "";
  };

  const fetchInsertFavorite = async () => {
    // Logic backend giữ nguyên
  };

  return (
    <View style={styles.shoeCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate(mainstack.productDetai, { product: item })}
      >
        <Image source={{ uri: item.image[0] }} style={styles.shoeImage} />
        <View style={styles.textContainer}>
          <Text style={styles.textStatus}>{statusProduct()}</Text>
          <Text style={styles.shoeName}>{item.name}</Text>
          <Text style={styles.shoePrice}>
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={fetchInsertFavorite}>
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
    margin:10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
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
    padding: 10,
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

export default ShoeItem;