// src/screens/Favourite.js

import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import { popularShoes } from '../component/Item_products';
import FavouriteItem from '../Render/FavouriteItem'; // Đảm bảo đường dẫn chính xác

const Favourite = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          <View style={{ alignItems: 'center', marginLeft: 80 }}>
            <Text style={styles.Favourite}>Favourite</Text>
          </View>
        </View>
        <Image
          source={require('../../../images/icon_tim.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.sectionContainer}>
        <FlatList
          data={popularShoes}
          renderItem={({ item }) => <FavouriteItem item={item} />}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.shoeList}
        />
      </View>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  icon_menu: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  Favourite: {
    fontFamily: t.Roboto_Bold,
    fontSize: 20,
    color: colors.black1,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  shoeList: {
    paddingVertical: 10,
  },
});