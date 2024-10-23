import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ShoeItem2 = (props) => {
  const { item } = props;

  const statusProduct = () => {
    if (item.status === 4) {
      return 'LIMITED';
    }
    return '';
  };

  return (
    <View style={styles.container}>

      <View style={styles.infoContainer}>
        <Text style={styles.textBestSeller}>{statusProduct()}</Text>
        <Text style={styles.shoeName}>{item.name}</Text>
        <Text style={styles.shoePrice}>
          {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
            item.price
          )}
        </Text>
      </View>
      <Image source={{ uri: item.image[0] }} style={styles.shoeImage} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 120,
      padding: 15,
      borderRadius: 15,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
      marginBottom: 10,
      justifyContent: 'space-between', // Thêm thuộc tính này
     
    },
    infoContainer: {
      flex: 1,
      paddingLeft: 10,
    },
    textBestSeller: {
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
      color: '#000000',
    },
    shoeImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      resizeMode: 'cover',
    },
  
});

export default ShoeItem2;