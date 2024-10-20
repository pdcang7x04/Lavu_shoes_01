import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

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
    marginRight: 20,
    width: 60, 
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#EEEEEE', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandImage: {
    width: 30,
    height: 30,
    borderRadius: 25, 
  },
});

export default BrandItem;