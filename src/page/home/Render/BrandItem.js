// src/components/BrandItem.js

import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';

const BrandItem = (props) => {
  const { item, handleBrand } = props;

  return (
    <TouchableOpacity style={styles.brandContainer} onPress={() => handleBrand(item._id)}>
      <Image source={{ uri: item.image }} style={styles.brandImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  brandContainer: {
    alignItems: 'center',
    marginRight: 44,
  },
  brandImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
});

export default BrandItem;