import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

const BrandItem = (props) => {
  const { item, handleBrand } = props;

  return (
    <View style={styles.circle}>
    <TouchableOpacity style={styles.brandContainer} onPress={() => handleBrand(item._id)}>
        <Image source={{ uri: item.image }} style={styles.brandImage} />
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
  circle: {
    margin: 10,
    width: 60, 
    height: 60,
    borderRadius: 30, 
    backgroundColor: '#EEEEEE', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandImage: {
    width: 10, 
    height: 10,
   
  },
});

export default BrandItem;