// src/components/BestSellerItem.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';

const BestSellerItem = (props) => {
  const {item} = props

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

  const catetory = () => {
    if(item.category.name === 'Nam'){
      return "Giày Nam"
    }
    if(item.category.name === 'Nữ'){
      return "Giày Nữ"
    }
  
  }
  return(
  <View style={[styles.shoeCard, { position: 'relative' }]}>
    <Image source={{uri: item.image[0]}} style={styles.shoeImage} />
    <View style={{ textAlign: 'left', width: '100%' }}>
      <Text style={styles.TextBestSeller}>{statusProduct()}</Text>
      <Text style={styles.shoeName}>{item.name}</Text>
      <Text style={styles.textCategory}>{catetory()}</Text>
      <Text style={styles.shoePrice}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</Text>
    </View>
    <TouchableOpacity
      style={[
        styles.addButton,
        { position: 'absolute', bottom:1, left:120 },
      ]}
    >
      <Image source={require('../../../images/add.png')} 
      style = {styles.addButton}
      />
    </TouchableOpacity>
  </View>
)};

const styles = StyleSheet.create({
  shoeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
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
    width: 200,
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