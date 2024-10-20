// src/components/ShoeItem2.js

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ShoeItem2 = (props) => {
  const {item} = props
  console.log("item: ", item)

  const statusProduct = () => {
    if(item.status == 4){
      return "LIMITED"
    }
  }

  
  return(
  <View style={styles.container}>
    <View>
      <Text style={styles.TextBestSeller}>{statusProduct()}</Text>
      <Text style={styles.shoeName}>{item.name}</Text>
      <Text style={styles.shoePrice}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</Text>
    </View>
    <Image source={{uri: item.image[0]}} style={styles.shoeImage} />
  </View>
)};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 10,
    borderRadius: 60,
  },
  TextBestSeller: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500', 
    marginBottom: 5,
  },
  shoeName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000', 
    marginBottom: 5,
  },
  shoePrice: {
    fontSize: 12,
    marginTop:10,
    color: '#000000',
  },
  shoeImage: {
    width: 100,
    height: 100, 
    borderRadius: 20,
  },
});

export default ShoeItem2;