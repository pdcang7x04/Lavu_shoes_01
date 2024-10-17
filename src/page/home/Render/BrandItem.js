// src/components/BrandItem.js

import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const BrandItem = (props) => {
  const {item} = props
  console.log(item)
  return (
    <TouchableOpacity style={styles.brandButton}>
      <Image source={{uri: item.image}} style={styles.brandImage} />
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  brandButton: {
    alignItems: 'center',
    marginRight: 15,
  },
  brandImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0', // Thay màu theo nhu cầu
    marginBottom: 5,
  },
});

export default BrandItem;