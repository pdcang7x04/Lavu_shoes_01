// src/components/ShoeItem2.js

import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ShoeItem2 = ({ item }) => (
  <View style={styles.container}>
    <View style={{ flex: 1 }}>
      <Text style={styles.TextBestSeller}>Best Choice</Text>
      <Text style={styles.shoeName}>{item.name}</Text>
      <Text style={styles.shoePrice}>{item.price}</Text>
    </View>
    <Image source={item.image} style={styles.shoeImage} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    padding: 10,
    borderRadius: 10,
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
    color: '#000000', // Thay màu theo nhu cầu
    marginBottom: 5,
  },
  shoePrice: {
    fontSize: 12,
    color: '#000000', // Thay màu theo nhu cầu
  },
  shoeImage: {
    width: 100, // Thay đổi kích thước theo nhu cầu
    height: 100, // Thay đổi kích thước theo nhu cầu
    borderRadius: 10,
  },
});

export default ShoeItem2;