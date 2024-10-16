// src/components/FavouriteItem.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';

const FavouriteItem = ({ item }) => (
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
        { position: 'absolute', bottom: 1,left:120},
      ]}
    >
      <Image source={require('../../../images/add.png')}
      style={styles.addButton}
      />
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
    color: colors.orange1,
    marginBottom: 5,
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
    width: 40,
    height: 40,
  },
});

export default FavouriteItem;