import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { mainstack } from '../../../navigation/mainstack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AxiosInstance from '../../../helper/AxiosInstance';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import { updateProductFavorite } from '../../../redux/Reducer';

const ShoeItem = (props) => {
  const { item } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const appState = useSelector((state) => state.lavu);
  const [isLoading, setIsLoading] = useState(false); // Theo dõi trạng thái đang tải

  const statusProduct = () => {
    switch (item.status) {
      case 1: return "MỚI";
      case 2: return "BÁN CHẠY NHẤT";
      case 3: return "PHỔ BIẾN";
      case 4: return "HẠN CHẾ";
      default: return "";
    }
  };

  const fetchInsertfavorite = async () => {
    if (isLoading) return; // Ngăn chặn các cuộc gọi nhiều lần

    setIsLoading(true); // Đặt trạng thái đang tải
    try {
      const response = await AxiosInstance().post(`/favorites/insert/${appState.user.email}`, { product_id: item._id });

      if (response.status) {
        dispatch(updateProductFavorite(response.data));
        console.log("Sản phẩm đã được thêm vào danh sách yêu thích thành công!");
      } else {
        console.log("Thêm sản phẩm vào danh sách yêu thích không thành công. Trạng thái:", response.status);
      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào danh sách yêu thích:", error);
    } finally {
      setIsLoading(false); // Đặt lại trạng thái đang tải
    }
  };

  return (
    <View style={styles.shoeCard}>
      <TouchableOpacity
        onPress={() => navigation.navigate(mainstack.productDetai, { product: item })}
      >
        <Image source={{ uri: item.image[0] }} style={styles.shoeImage} />
        <View style={styles.textContainer}>
          <Text style={styles.textStatus}>{statusProduct()}</Text>
          <Text style={styles.shoeName}>{item.name}</Text>
          <Text style={styles.shoePrice}>
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={fetchInsertfavorite} 
        disabled={isLoading} // Vô hiệu hóa nút khi đang tải
      >
        <Image source={require('../../../images/add.png')} style={styles.addButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  shoeCard: {
    width: '45%',
    height: 190,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    margin: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative',
  },
  shoeImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
  },
  textStatus: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.orange1,
    marginTop: 5,
  },
  shoeName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.black1,
    fontFamily: t.Roboto_Bold,
    marginTop: 5,
  },
  shoePrice: {
    marginTop: 10,
    fontSize: 12,
    color: colors.black1,
    fontFamily: t.Roboto_Bold,
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  addButtonImage: {
    width: 40,
    height: 40,
  },
});

export default ShoeItem;