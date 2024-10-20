// src/components/FavouriteItem.js

import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import { useNavigation } from '@react-navigation/native';
import { mainstack } from '../../../navigation/mainstack';
import AxiosInstance from '../../../helper/AxiosInstance';
import { removeProductFavorite, updateProductFavorite } from '../../../redux/Reducer';
import { useDispatch, useSelector } from 'react-redux';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector


const FavouriteItem = (props) => {
  const {item} = props
  const navigation = useNavigation()
  console.log("favorite",item?._id)

  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const fetchRemovefavorite = async () => {
    try {
      const response = await AxiosInstance().delete(`/favorites/delete/${item?._id}`);
      if(response.status){
        dispatch(removeProductFavorite(item?._id))
      }
    } catch (error) {
      console.log(error)
    }
  }


  
  return(
    <View>
  <TouchableOpacity
    style={[styles.shoeCard, { position: 'relative' }]}
    onPress={() => navigation.navigate(mainstack.productDetai, { product: item?.product[0] })}
  >
    <Image source={{uri: item?.product[0].image[0]}} style={styles.shoeImage} />
    {/* <Image source={require('../../../images/logo.png')} style={styles.shoeImage} /> */}

    <View style={{ textAlign: 'left', width: '100%' }}>
      <Text style={styles.TextBestSeller}>BEST SELLER</Text>
      <Text style={styles.shoeName}>{item?.product.map(p => p.name)}</Text>
      <Text style={styles.shoePrice}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item?.product.map(p => p.price))}</Text>
    </View>
    <TouchableOpacity
      style={[
        styles.addButton,
        { position: 'absolute', bottom: 0,left:117},
      ]}
      onPress={() => fetchRemovefavorite()}
    >
      <Image source={require('../../../images/add.png')}
      style={styles.addButton}
      />
    </TouchableOpacity>
  </TouchableOpacity>
  </View>
)};

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    flex: 1,
    padding:10
  },
  shoeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
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
    width: 157,
    height: 100,
    borderRadius: 10,
    marginBottom: 0
  },
  TextBestSeller: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.orange1,
    marginTop:10
  },
  shoeName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.black1,
    fontFamily: t.Roboto_Bold,
  },
  shoePrice: {
    marginTop:12,
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