import {
  Button,
  Card,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native-ui-lib';
import {
  StyleSheet,
  Linking,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomDialog from '../../components/CustomDialog';
import {useDispatch, useSelector} from 'react-redux';
import AxiosInstance from '../../helper/AxiosInstance';
import {mainstack} from '../../navigation/mainstack';
import {clearCart} from '../../redux/Reducer';
import Toast from 'react-native-toast-message';
import {t} from '../../styles/font';
import InputView from '../../components/InputView';
import ItemCheckout from './ItemCheckout';
import ItemCart from '../Cart/ItemCart';
import { colors } from '../../styles/colors';
const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const Checkout = props => {
  const {navigation, route} = props;
  const {total} = route?.params;
  const [localTotal, setLocalTotal] = useState(total);

  const dispatch = useDispatch();
  const appState = useAppSelector(state => state.lavu);

  const [visibleDialog, setVisibleDialog] = useState(false);
  const [PaymentMethod, setPaymentMethod] = useState('MoMo');
  const [Phone, setPhone] = useState(appState.user?.phone);
  const [Address, setAddress] = useState(appState.user.address);
  const [Subtotal, setSubtotal] = useState(localTotal.subtotal);
  const [Shipping, setShipping] = useState(localTotal.shipping);
  const [TotalCost, setTotalCost] = useState(localTotal.totalCost);


  const handleAddressClick = props => {
    const {navigation} = props;
    const address = appState.user?.address;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url);
  };
  // console.log('user: ', appState.user);

  useEffect(() => {
    setPhone(appState.user?.phone);
    setAddress(appState.user.address);
  }, [appState.user]);

  const handleOrder = async () => {
    try {
      if (appState.user?.phone === ' ') {
        return Toast.show({
          text1: 'Hãy cập nhật phương thức liên lạc của bạn',
          position: 'top',
          type: 'error',
        });
      }
      if (appState.user.address === ' ') {
        return Toast.show({
          text1: 'Hãy cập nhật vị trí của bạn của bạn',
          position: 'top',
          type: 'error',
        });
      }
      if (appState.cart.length === 0) {
        return Toast.show({
          text1: 'Hãy chọn sản phẩm mà bạn mong muốn',
          position: 'top',
          type: 'error',
        });
      }
      const orders = {
        user: appState.user.email,
        paymentmethod: PaymentMethod,
        totalAmount: TotalCost,
        paymentStatus: paymentStatus(),
        product: appState.cart.map(item => {
          return {
            product_id: item._id,
            quantity: item.quantity,
            color: item.color.name,
            size: item.size,
          };
        }),
      };
      const response = await AxiosInstance().post('/orders/createOder', orders);
      if (response.status) {
        dispatch(clearCart());
        setVisibleDialog(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(appState.cart.map(item => item._id));

  const paymentStatus = () => {
    if (PaymentMethod === 'Thanh toán khi nhận hàng') {
      return 1;
    }
    if (PaymentMethod === 'MoMo') {
      return 2;
    }
  };

  useEffect(() => {
    let tamtinh = 0;
    for (let i = 0; i < appState.cart.length; i++) {
      tamtinh += appState.cart[i].price * appState.cart[i].quantity;
    }
    setSubtotal(tamtinh);
    if (appState.cart.length === 0) {
      setShipping(0);
      setTotalCost(0);
    } else {
      setTotalCost(tamtinh + 30000);
    }
  }, [appState.cart]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView>
          <View style={styles.header}>
            <TouchableOpacity 
            
            onPress={() => navigation.goBack()}>
              <Image
                source={require('../../images/icon_back.png')}
                style={styles.iconBack}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Thanh Toán</Text>
            <TouchableOpacity 
              
              onPress={() => navigation.goBack()}>
              <Image source={{}} style={styles.iconBack} />
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Thông Tin Liên Hệ</Text>
            <View style={styles.infoRow}>
              <Image source={require('../../images/icon_mail.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.textField}>{appState.user.email}</Text>
                <Text style={styles.label}>Email</Text>
              </View>
              <TouchableOpacity>
                <Image
                  source={require('../../images/icon_edit.png')}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.infoRow}>
              <Image source={require('../../images/icon_phone.png')} />
              <View style={styles.textContainer}>
                <Text style={styles.textField}>
                  {Phone !== ' '
                    ? Phone
                    : 'Hãy cập nhật phương thức liên lạc của bạn'}
                </Text>
                <Text style={styles.label}>Số điện thoại</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate(mainstack.shippingaddress)}>
                <Image
                  source={require('../../images/icon_edit.png')}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Địa Chỉ</Text>
            <TouchableOpacity onPress={handleAddressClick}>
              <View style={styles.infoRow}>
                <Text style={styles.addressText}>
                  {Address !== ' ' ? Address : 'Hãy cập nhật vị trí của bạn'}
                </Text>
                <Image source={require('../../images/icon_down.png')} />
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
              <Image source={require('../../images/icon_momo.png')} />
              <View style={styles.paymentDetailsContainer}>
                <Text style={styles.textField}>Ví điện tử Momo</Text>
                <Text style={styles.textCardNumber}>**** **** 0696 4629</Text>
              </View>
              <Image source={require('../../images/icon_down.png')} />
            </View>
            <Text>Ghi Chú </Text>
            <View marginV-12>
              <InputView
                backgroundColor='#F8F9FA'
                paddingV-0
                placeholder={'nhập gì đó ở đây'}
              />
            </View>
          </View>
          <View>
            {appState.cart.map((item, index) => {
              return <ItemCart data={item} key={index} />;
            })}
          </View>

          <View>
            <View style={styles.section}>
              <View style={styles.rowBetween}>
                <Text style={styles.textCost}>Tổng Chi Phí</Text>
                <Text style={styles.textCost}>
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(Subtotal)}
                </Text>
              </View>
              <View style={styles.rowBetween}>
                <Text style={styles.textCost}>Phí Giao Hàng</Text>
                <Text style={styles.textCost}>
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(Shipping)}
                </Text>
              </View>
              <View style={styles.rowBetween}>
                <Text style={styles.textTotal}>Tổng Cộng</Text>
                <Text style={styles.textTotal}>
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(TotalCost)}
                </Text>
              </View>
            </View>

            

          <TouchableOpacity  
            style={{
              width: "100%",
              height: 54,
              backgroundColor: colors.orange1,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 24
            }}
            onPress={() => {
            setVisibleDialog(false)
            navigation.navigate(mainstack.bottomnavigation)
          }}>
            <Text style={{
              fontFamily: t.Roboto_Bold,
              fontWeight: '700',
              fontSize: 18,
              color: colors.white
            }}>Xác nhận</Text>
            </TouchableOpacity>
          </View>

          <CustomDialog
            visible={visibleDialog}
            onDismiss={() => setVisibleDialog(false)}>
            <Card center paddingV-40 paddingH-40 style={styles.dialogCard}>
              <View paddingH-25>
                <Image
                  source={require('../../images/icon_payment_done.png')}
                  style={styles.paymentIcon}
                />
                <Text marginT-24 style={styles.successText}>
                  Thanh Toán Thành Công
                </Text>
              </View>
              <TouchableOpacity
                marginT-30
                onPress={() => {
                  setVisibleDialog(false);
                  navigation.navigate(mainstack.bottomnavigation);
                }}>
                <Card
                  backgroundColor="#F15E2B"
                  borderRadius={999}
                  paddingV-15
                  paddingH-50>
                  <Text text60 center white style={styles.buttonText}>
                    Tiếp Tục Mua Sắm
                  </Text>
                </Card>
              </TouchableOpacity>
            </Card>
          </CustomDialog>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 44,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  headerTextContainer: {
    width: 24,
    height: 24,
  },
  iconBack: {
    width: 44,
    height: 44,
  },
  headerText: {
    fontSize: 22,
    fontFamily: t.Roboto_Bold,
  },
  section: {
    // flex: 1,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: t.Roboto_Bold,
    marginTop: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  paymentDetailsContainer: {
    flex: 1,
    marginLeft: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  cardInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textCardNumber: {
    fontSize: 16,
    color: '#1A2530',
    fontWeight: 'bold',
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  textField: {
    fontSize: 16,
    color: '#1A2530',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
    color: '#707B81',
    fontWeight: 'bold',
  },
  addressText: {
    marginLeft: 10,
    color: '#707B81',
    flex: 1,
  },
  mapContainer: {
    position: 'relative',
  },
  map: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  middleIcon: {
    position: 'absolute',
    top: '30%',
    left: '40%',
    width: 90,
    height: 90,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textCost: {
    fontSize: 16,
    color: '#333333',
  },
  textTotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentButton: {
    marginTop: 20,
    height: 50,
    borderRadius: 25,
  },
  paymentIcon: {
    left: 20,
  },
});

// const demoListProduct = [
//   {
//     name: 'Sp1',
//     id: 'id1',
//     size: 'size1',
//     price: '64.00',
//     quantity: 1,
//     image: require('../../images/giay1.png'),
//   },
//   {
//     name: 'Sp2',
//     id: 'id2',
//     size: 'size2',
//     price: '64.00',
//     quantity: 2,
//     image: require('../../images/giay2.png'),
//   },
// ];
