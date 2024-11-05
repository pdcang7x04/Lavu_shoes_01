import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Linking,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';

import { Card, Dialog } from 'react-native-ui-lib';

import InputView from '../../components/InputView';
import AxiosInstance from '../../helper/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { t } from '../../styles/font';

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const DetailOrder = props => {
  const { navigation, route } = props;
  const { DetailOrder } = route.params;

  const dispatch = useDispatch();
  const appState = useAppSelector(state => state.lavu);

  const [isRatingVisible, setRatingVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedProduct, setselectedProduct] = useState([])
  const [comment, setComment] = useState('');
  const [product, setproduct] = useState([])

  const openRatingModal = (productId) => {
    setselectedProduct(productId)
    setRatingVisible(true);
  }
  const closeRatingModal = () => {
    setComment('')
    setSelectedRating(0)
    setRatingVisible(false)
  };

  const handleAddressClick = () => {
    const address = DetailOrder?.user?.address;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url);
  };

  const fetchGetProductById = async (id) => {
    try {
      const response = await AxiosInstance().get(
        `/products/getProduct/${id}`
      )
      if (response.status) {
        return response.data
      }
    } catch (error) {
      console.log('err: ', error)
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      if (DetailOrder?.orderDetail) {
        const productPromises = DetailOrder?.orderDetail?.map((item) => fetchGetProductById(item.product_id));
        const productsData = await Promise.all(productPromises);

        console.log(productsData)
        setproduct(productsData);
      }
    };

    fetchProducts();
  }, [DetailOrder]);

  const fetchWriteComment = async (productId) => {
    try {
      const body = {
        userId: appState.user._id,
        productId: productId,
        orderId: DetailOrder?._id,
        content: comment,
        evaluate: selectedRating,
      }
      const response = await AxiosInstance().post(
        `/comments/writeAReview`, body
      )
      if (response.status) {
        closeRatingModal()
        return response.data
      }
    } catch (error) {
      console.log('err: ', error)
    }
  }

  const fetchUpdatePaymentSattus = async () => {
    try {
      const response = await AxiosInstance().put(
        `/orders/updateStatusOrder/${DetailOrder?._id}`, {paymentStatus: 6}
      )
      if(response.status){
        console.log(response.data)
        navigation.goBack()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../images/icon_back.png')}
                style={styles.iconBack}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Chi Tiết Thanh Toán</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={{}} style={styles.iconBack} />
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Thông Tin Liên Lạc</Text>
            <View style={styles.infoRow}>
              <Image
                source={require('../../images/icon_mail.png')}
                style={styles.iconMail}
              />
              <View style={styles.textContainer}>
                <Text style={styles.textField}>{DetailOrder?.user?.email}</Text>
                <Text style={styles.label}>Email</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <Image
                source={require('../../images/icon_phone.png')}
                style={styles.iconPhone}
              />
              <View style={styles.textContainer}>
                <Text style={styles.textField}>{DetailOrder?.user?.phone}</Text>
                <Text style={styles.label}>Số Điện Thoại</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Địa Chỉ</Text>
            <TouchableOpacity onPress={handleAddressClick}>
              <View style={styles.infoRow}>
                <Text style={styles.addressText}>
                  {DetailOrder?.user?.address}
                </Text>
                <Image
                  source={require('../../images/icon_down.png')}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.mapContainer}>
              <Image
                source={require('../../images/icon_bglocation.png')}
                style={styles.map}
              />
              <Image
                source={require('../../images/icon_location.png')}
                style={styles.middleIcon}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Phương Thức Thanh Toán</Text>
            <View style={styles.infoRow}>
              <Image
                source={require('../../images/icon_momo.png')}
                style={styles.iconMomo}
              />
              <View style={styles.paymentDetailsContainer}>
                <Text style={styles.textField}>{DetailOrder?.paymentmethod}</Text>
              </View>
              <Image
                source={require('../../images/icon_down.png')}
                style={styles.icon}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ghi Chú</Text>
            <Text>{DetailOrder?.note || "Không có"}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order</Text>

            <FlatList
              data={product}
              keyExtractor={item => item._id}
              renderItem={({ item, index }) =>
                <View style={styles.orderItem}>
                  <Image
                    source={{ uri: item.image[0] }}
                    style={styles.orderImage}
                  />
                  <View style={styles.orderDetails}>
                    <Text style={styles.productName}>{item.name}</Text>

                    <Text style={styles.productPrice}>
                      {DetailOrder?.orderDetail[index]?.size} | {DetailOrder?.orderDetail[index]?.color} |
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item?.price)} |
                      Số lượng {DetailOrder?.orderDetail[index]?.quantity}</Text>
                    {DetailOrder?.paymentStatus == 5 ?
                      <TouchableOpacity
                        style={styles.rateButton}
                        onPress={() => openRatingModal(item)}>
                        <Text style={styles.rateButtonText}>Đánh Giá</Text>
                      </TouchableOpacity>
                      : null
                    }
                  </View>
                </View>

              }
            />
          </View>

          <View style={styles.section}>
            <View style={styles.summaryRow}>
              <Text style={styles.summary}>Tổng chi phí</Text>
              <Text style={styles.summaryValue}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(DetailOrder?.totalAmount - 30000)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summary}>Phí giao hàng</Text>
              <Text style={styles.summaryValue}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(30000)}</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tổng Cộng</Text>
              <Text style={styles.totalValue}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(DetailOrder?.totalAmount)}</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      {DetailOrder?.paymentStatus <= 2 ?
        <TouchableOpacity
          marginT-30
          onPress={() => fetchUpdatePaymentSattus()}
        >
          <Card
            backgroundColor="#F15E2B"
            borderRadius={999}
            paddingV-15
            paddingH-50>
            <Text text60 center white style={styles.buttonText}>
              Hủy đơn / Hoàn tiền
            </Text>
          </Card>
        </TouchableOpacity>
        : null
      }

      <Modal
        transparent={true}
        visible={isRatingVisible}
        animationType="slide"
        onRequestClose={closeRatingModal}>
        <TouchableNativeFeedback onPress={closeRatingModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.ratingContainer}>
              <Text style={styles.modalTitle}>Đánh Giá</Text>
              <Image
                source={require('../../images/giay1.png')}
                style={styles.modalImage}
              />
              <Text style={styles.productName}>{selectedProduct?.name}</Text>

              <View style={styles.rating}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setSelectedRating(index + 1)}>
                    <Text style={styles.star}>
                      {index < selectedRating ? '★' : '☆'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TextInput
                style={styles.commentBox}
                placeholder="Shop bán giày vừa rẻ vừa đẹp....!!"
                value={comment}
                onChangeText={setComment}
                multiline
              />

              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => fetchWriteComment(selectedProduct._id)}>
                <Text style={styles.submitButtonText}>Gửi</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableNativeFeedback>
      </Modal>
    </View>
  );
};

export default DetailOrder;

const styles = StyleSheet.create({
  buttonText: {
    fontFamily: t.Roboto_Bold,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  iconBack: { width: 40, height: 40 },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 15,
    height: 10,
    marginRight: 10,
  },
  iconMomo: {
    width: 45,
    height: 40,
  },
  textContainer: {
    flex: 1,
  },
  textField: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  label: {
    fontSize: 12,
    color: 'gray',
  },
  addressText: {
    flex: 1,
    fontSize: 14,
  },
  mapContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  map: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  middleIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
  },
  paymentDetailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  orderDetails: {
    marginLeft: 10,
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  productPrice: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
  rateButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 100,
    height: 30,
  },
  rateButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  summary: {
    fontSize: 14,
    color: 'black',
  },
  summaryLabel: {
    fontWeight: 'bold',
    color: 'black',
  },
  summaryValue: {
    fontSize: 14,
    color: 'black',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ratingContainer: {
    width: '96%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 10,
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  star: {
    fontSize: 30,
    color: '#FFD700',
  },
  commentBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    padding: 10,
    height: 80,
  },
  submitButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    top: 10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
