// src/components/ShoeItem.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ShoeItem = ({ item }) => (
  <View style={[styles.shoeCard, { position: 'relative' }]}>
    <Image source={item.image} style={styles.shoeImage} />
    <View style={{ textAlign: 'left', width: '100%' }}>
      <Text style={styles.TextBestSeller}>BEST SELLER</Text>
      <Text style={styles.shoeName}>{item.name}</Text>
      <Text style={styles.shoePrice}>{item.price}</Text>
    </View>
    <TouchableOpacity
      style={[
        styles.addButton,
        { position: 'absolute', bottom: 35, right: 30 },
      ]}
    >
      <Image source={require('../../../images/add.png')} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  shoeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
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
    width: 200,
    height: 100,
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
    color: '#000000', // Thay màu theo nhu cầu
  },
  shoePrice: {
    fontSize: 12,
    color: '#000000', // Thay màu theo nhu cầu
  },
  addButton: {
    width: 34,
    height: 35,
    marginLeft: 50,
  },
});

export default ShoeItem;