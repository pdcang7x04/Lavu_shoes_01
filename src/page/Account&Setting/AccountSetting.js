import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Card, View, Text, Switch} from 'react-native-ui-lib';
import Header from '../../components/Header';
import {mainstack} from '../../navigation/mainstack';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../../redux/Reducer';

const notificationIcon = require('../../images/notifications.png');
const shippingIcon = require('../../images/shopping.png');
const paymentIcon = require('../../images/payment.png');
const passwordIcon = require('../../images/icon.png');
const logoutIcon = require('../../images/icon_logout2.png');
const ArrowIcon = require('../../images/Arrow.png');

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const AccountSetting = props => {
  const {navigation} = props;

  const dispatch = useDispatch();
  const appState = useAppSelector(state => state.lavu);

  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] =
    useState(true);
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View height={'100%'} marginT-40 spread>
          <KeyboardAvoidingView>
            <Header
              action_ic_left={() => navigation.goBack()}
              customStyle={{marginTop: 8}}
              paddingH-20
              title={'Tài Khoản & Cài Đặt'}
            />

            <View paddingH-15 marginT-20>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tài Khoản</Text>

                <TouchableOpacity style={styles.item}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={notificationIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Cài Đặt Thông Báo</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.item}
                  onPress={() =>
                    navigation.navigate(mainstack.shippingaddress)
                  }>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={shippingIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Địa Chỉ Giao Hàng</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={paymentIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Thông Tin Thanh Toán</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.item}
                  onPress={() => navigation.navigate(mainstack.changpassword)}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={passwordIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Thay Đổi Mật Khẩu</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item} onPress={() => dispatch(logout())}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={logoutIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Đăng Xuất</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.section} marginT-32>
                <Text style={styles.sectionTitle}>Cài Đặt Ứng Dụng</Text>

                <View style={styles.item}>
                  <Text style={styles.itemText}>Kích Hoạt Face ID Để Đăng Nhập</Text>
                  <Switch
                    value={faceIdEnabled}
                    onValueChange={setFaceIdEnabled}
                  />
                </View>

                <View style={styles.item}>
                  <Text style={styles.itemText}>Kích Hoạt Thông Báo</Text>
                  <Switch
                    value={pushNotificationsEnabled}
                    onValueChange={setPushNotificationsEnabled}
                  />
                </View>

                <View style={styles.item}>
                  <Text style={styles.itemText}>Cho Phép Ứng Dụng Định Vị</Text>
                  <Switch
                    value={locationServicesEnabled}
                    onValueChange={setLocationServicesEnabled}
                  />
                </View>

                <View style={styles.item}>
                  <Text style={styles.itemText}>Chế Độ Tối</Text>
                  <Switch
                    value={darkModeEnabled}
                    onValueChange={setDarkModeEnabled}
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
<TouchableOpacity style={styles.item} onPress={() => {
                  navigation.navigate('BestSellerScreen');
                }}>
                  <Text style={styles.itemText}>PaymentScreen</Text>
                </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <TouchableOpacity>
          <Card center paddingV-16 backgroundColor="#F15E2B" borderRadius={999}>
            <Text style={styles.saveText}>Save</Text>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  section: {
    backgroundColor: 'white', // Consistent background for sections
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 15,
    color: '#1A2530',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: 'white', // Consistent background for list items
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A2530',
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  saveText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 22,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#F5F5F5', // Background matches the overall background
  },
});

export default AccountSetting;
