// src/screens/Best_Seller.js

import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import { favouriteShoes } from '../component/Item_BestSeller';
import BestSellerItem from '../Render/BestSellerItem';
import AxiosInstance from '../../../helper/AxiosInstance';
import ShoeItem from '../Render/ShoeItem';

const Best_Seller = (props) => {
  const { navigation, route } = props;
  const { brandId, name } = route.params;

  console.log('brand ', brandId)

  const [DataProduct, setDataProduct] = useState([])

  const fetchGetProduct = async (brandId) => {
    try {
      const response = await AxiosInstance().get(`/products/getProductByBrand/${brandId}`);

      if (response.status) {
        setDataProduct(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGetProduct(brandId)
  }, [brandId])
  console.log("product: ", DataProduct)

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          </TouchableOpacity>
            <Text style={styles.Favourite}>{name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../../../images/setting.png')} style={styles.icon} />
        <Image source={require('../../../images/icon_tim.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <FlatList
          data={DataProduct}
          renderItem={({ item }) => <ShoeItem item={item} />}
          keyExtractor={item => item._id}
          numColumns={2}
          contentContainerStyle={styles.shoeList}
        />
      </View>
    </View>
  );
};

export default Best_Seller;

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