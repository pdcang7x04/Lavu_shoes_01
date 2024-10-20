import {
  Button,
  Card,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native-ui-lib';
import {StyleSheet, Linking} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomDialog from '../../components/CustomDialog';
import { useDispatch, useSelector } from 'react-redux';
import AxiosInstance from '../../helper/AxiosInstance';
import { mainstack } from '../../navigation/mainstack';
import { clearCart } from '../../redux/Reducer';
import Toast from 'react-native-toast-message';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector

const Checkout = (props) => {
  const {navigation, route} = props
  const {total} = route?.params

  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const [visibleDialog, setVisibleDialog] = useState(false);
  const [PaymentMethod, setPaymentMethod] = useState('MoMo')
  const [Phone, setPhone] = useState(appState.user.phone)
  const [Address, setAddress] = useState(appState.user.address)

  
  const handleAddressClick = (props) => {
    const {navigation} = props
    const address = appState.user?.address;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url);
  };
  console.log("user: " , appState.user)

  useEffect(() => {
    setPhone(appState.user.phone)
    setAddress(appState.user.address)
  }, [appState.user])
  

  const handleOrder = async () => {
    try {
      if(appState.user.phone == " "){
        return Toast.show({
          text1: "Hãy cập nhật phương thức liên lạc của bạn",
          position: "top",
          type: "error"
        })
      }
      if(appState.user.address == " "){
        return Toast.show({
          text1: "Hãy cập nhật vị trí của bạn của bạn",
          position: "top",
          type: "error"
        })
      }
      if(appState.cart.length == 0){
        return Toast.show({
          text1: "Hãy chọn sản phẩm mà bạn mong muốn",
          position: "top",
          type: "error"
        })
      }
      const orders = {
        user: appState.user.email,
        paymentmethod: PaymentMethod,
        totalAmount: total.totalCost,
        paymentStatus: paymentStatus(),
        product: appState.cart.map((item) => {
          return{
            product_id: item._id,
            quantity: item.quantity,
            color: item.color.name,
            size: item.size
          }
        })
      }
      const response = await AxiosInstance().post('/orders/createOder', orders);
      if (response.status) {
        dispatch(clearCart())
        setVisibleDialog(true)

      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(appState.cart.map(item => item._id))

  const paymentStatus = () => {
    if(PaymentMethod == "Thanh toán khi nhận hàng"){
      return 1
    }
    if(PaymentMethod == "MoMo"){
      return 2
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{}}
            style={styles.iconBack}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
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
            <Text style={styles.textField}>{Phone != " " ? Phone : "Hãy cập nhật phương thức liên lạc của bạn"}</Text>
            <Text style={styles.label}>Phone</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(mainstack.shippingaddress)}>
            <Image
              source={require('../../images/icon_edit.png')}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <TouchableOpacity onPress={handleAddressClick}>
          <View style={styles.infoRow}>
            <Text style={styles.addressText}>
            {Address != " " ? Address : "Hãy cập nhật vị trí của bạn"}
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
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <View style={styles.infoRow}>
          <Image source={require('../../images/icon_momo.png')} />
          <View style={styles.paymentDetailsContainer}>
            <Text style={styles.textField}>Momo payment</Text>
            <Text style={styles.textCardNumber}>**** **** 0696 4629</Text>
          </View>
          <Image source={require('../../images/icon_down.png')} />
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.textCost}>Subtotal</Text>
          <Text style={styles.textCost}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total.subtotal)}</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.textCost}>Shipping</Text>
          <Text style={styles.textCost}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total.shipping)}</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.textTotal}>Total Cost</Text>
          <Text style={styles.textTotal}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total.totalCost)}</Text>
        </View>
      </View>
      <Button
        backgroundColor="#F15E2B"
        borderRadius={10}
        onPress={() => handleOrder()}
        marginT-20
        label="Payment"
        style={styles.paymentButton}
      />
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
              Your Payment Is Successful
            </Text>
          </View>
          <TouchableOpacity marginT-30 onPress={() => {
            setVisibleDialog(false)
            navigation.navigate(mainstack.home)
          }}>
            <Card
              backgroundColor="#F15E2B"
              borderRadius={999}
              paddingV-15
              paddingH-50>
              <Text text60 center white style={styles.buttonText}>
                Back To Shopping
              </Text>
            </Card>
          </TouchableOpacity>
        </Card>
      </CustomDialog>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10
  },
  headerTextContainer: {
    width: 24,
    height: 24,
  },
  iconBack: {
    width: 50,
    height: 24,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  paymentDetailsContainer: {
    flex: 1,
    marginLeft: 10,
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
    height: 50,
    borderRadius: 25,
  },
  paymentIcon: {
    left: 20,
  },
});
