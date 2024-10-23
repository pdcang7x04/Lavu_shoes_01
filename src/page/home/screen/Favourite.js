// src/screens/Favourite.js

import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import FavouriteItem from '../Render/FavouriteItem'; // Đảm bảo đường dẫn chính xác
import AxiosInstance from '../../../helper/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductFavorite } from '../../../redux/Reducer';

const Favourite = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.lavu);

  useEffect(() => {
    const fetchProductFavorite = async () => {
      try {
        const response = await AxiosInstance().get(`/favorites/getpoductfavorite/${appState.user.email}`);

        if (response.status) {
          console.log(response.data);
          dispatch(updateProductFavorite(response.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    // Chỉ gọi hàm fetch khi email có sẵn
    if (appState.user.email) {
      fetchProductFavorite();
    }
  }, [appState.user.email, dispatch]); // Chỉ gọi lại khi email thay đổi

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../images/icon_back.png')}
              style={styles.icon_menu}
            />
          </TouchableOpacity>
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
          data={appState.productFavorite || []} // Đảm bảo không bị null
          renderItem={({ item }) => <FavouriteItem item={item} navigation={navigation} />}
          keyExtractor={item => item._id}
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
    padding: 20,
    marginTop:15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:20
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
    alignItems: 'center',
    color: colors.black1,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  shoeList: {
    paddingVertical: 10,
  },
});