import React, {useState} from 'react';
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
} from 'react-native';

import {Dialog} from 'react-native-ui-lib';

import InputView from '../../components/InputView';

const DetailOrder = props => {
  const {navigation} = props;

  const [isRatingVisible, setRatingVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState('');

  const openRatingModal = () => setRatingVisible(true);
  const closeRatingModal = () => setRatingVisible(false);

  const submitRating = () => {
    console.log('Rating:', selectedRating);
    console.log('Comment:', comment);
    closeRatingModal();
  };

  const handleAddressClick = () => {
    const address = '37 Cao Văn Lầu, phường 1, quận 6';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url);
  };

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
                <Text style={styles.textField}>rumenhussen@gmail.com</Text>
                <Text style={styles.label}>Email</Text>
              </View>
            </View>
            <View style={styles.infoRow}>
              <Image
                source={require('../../images/icon_phone.png')}
                style={styles.iconPhone}
              />
              <View style={styles.textContainer}>
                <Text style={styles.textField}>+88-692-764-269</Text>
                <Text style={styles.label}>Số Điện Thoại</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Địa Chỉ</Text>
            <TouchableOpacity onPress={handleAddressClick}>
              <View style={styles.infoRow}>
                <Text style={styles.addressText}>
                  37 Cao Văn Lầu, phường 1, quận 6
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
                <Text style={styles.textField}>Ví điện tử Momo</Text>
              </View>
              <Image
                source={require('../../images/icon_down.png')}
                style={styles.icon}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ghi Chú</Text>
            <InputView placeholder="Giày Đẹp Quá Shop ơi" editable={false}  />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Order</Text>
            <View style={styles.orderItem}>
              <Image
                source={require('../../images/giay1.png')}
                style={styles.orderImage}
              />
              <View style={styles.orderDetails}>
                <Text style={styles.productName}>Nike Club Max</Text>
                <Text style={styles.productPrice}>L | 40.000 đ | Số lượng 1</Text>
                <TouchableOpacity
                  style={styles.rateButton}
                  onPress={openRatingModal}>
                  <Text style={styles.rateButtonText}>Đánh Giá</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.orderItem}>
              <Image
                source={require('../../images/giay1.png')}
                style={styles.orderImage}
              />
              <View style={styles.orderDetails}>
                <Text style={styles.productName}>Nike Club Max</Text>
                <Text style={styles.productPrice}>L | 40.000 đ | Số lượng 1</Text>
                <TouchableOpacity
                  style={styles.rateButton}
                  onPress={openRatingModal}>
                  <Text style={styles.rateButtonText}>Đánh Giá</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.summaryRow}>
              <Text style={styles.summary}>Tổng chi phí</Text>
              <Text style={styles.summaryValue}>250.000 đ</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summary}>Phí giao hàng</Text>
              <Text style={styles.summaryValue}>40.000 đ</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Tổng Cộng</Text>
              <Text style={styles.totalValue}>290.000 đ</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      <Modal
        transparent={true}
        visible={isRatingVisible}
        animationType="slide"
        onRequestClose={closeRatingModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.ratingContainer}>
            <Text style={styles.modalTitle}>Đánh Giá</Text>
            <Image
              source={require('../../images/giay1.png')}
              style={styles.modalImage}
            />
            <Text style={styles.productName}>Nike Club Max</Text>

            <View style={styles.rating}>
              {Array.from({length: 5}).map((_, index) => (
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
              onPress={submitRating}>
              <Text style={styles.submitButtonText}>Gửi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailOrder;

const styles = StyleSheet.create({
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
  iconBack: {width: 40, height: 40},
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black',
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
    fontWeight:'bold',
},
  rateButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width:100,
    height:30,
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
  summaryLabel:{
    fontWeight:'bold',
    color:'black',
},
  summaryValue: {
    fontSize: 14,
    color: 'black',
},
  totalValue: {fontSize: 16,
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
    top:10,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
},
});
