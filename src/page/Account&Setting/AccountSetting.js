import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { View, Text, Switch, Modal } from 'react-native-ui-lib';
import Header from '../../components/Header';
import { mainstack } from '../../navigation/mainstack';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/Reducer';
import { colors } from '../../styles/colors';

const notificationIcon = require('../../images/notifications.png');
const shippingIcon = require('../../images/shopping.png');
const paymentIcon = require('../../images/payment.png');
const passwordIcon = require('../../images/icon.png');
const logoutIcon = require('../../images/icon_logout2.png');
const ArrowIcon = require('../../images/Arrow.png');

const AccountSetting = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const appState = useSelector(state => state.lavu);

  const [faceIdEnabled, setFaceIdEnabled] = useState(false);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(false);
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate(mainstack.login);
  };

  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View height={'100%'} marginT-40 spread>
          <KeyboardAvoidingView>
            <Header
              action_ic_left={() => navigation.goBack()}
              customStyle={{ marginTop: 8 }}
              paddingH-20
              title={'Tài Khoản & Cài Đặt'}
            />

            <View paddingH-15 marginT-20>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Tài Khoản</Text>

                <SettingItem
                  icon={notificationIcon}
                  title="Cài Đặt Thông Báo"
                  onPress={() => {}}
                />
                <SettingItem
                  icon={shippingIcon}
                  title="Địa Chỉ Giao Hàng"
                  onPress={() => navigation.navigate(mainstack.shippingaddress)}
                />
                <SettingItem
                  icon={paymentIcon}
                  title="Thông Tin Thanh Toán"
                  onPress={() => {}}
                />
                <SettingItem
                  icon={passwordIcon}
                  title="Thay Đổi Mật Khẩu"
                  onPress={() => navigation.navigate(mainstack.changpassword)}
                />
                <SettingItem
                  icon={logoutIcon}
                  title="Đăng Xuất"
                  onPress={() => setConfirmLogout(true)}
                />
              </View>

              <View style={styles.section} marginT-32>
                <Text style={styles.sectionTitle}>Cài Đặt Ứng Dụng</Text>
                <SwitchSetting
                  title="Kích Hoạt Face ID Để Đăng Nhập"
                  value={faceIdEnabled}
                  onValueChange={setFaceIdEnabled}
                />
                <SwitchSetting
                  title="Kích Hoạt Thông Báo"
                  value={pushNotificationsEnabled}
                  onValueChange={setPushNotificationsEnabled}
                />
                <SwitchSetting
                  title="Cho Phép Ứng Dụng Định Vị"
                  value={locationServicesEnabled}
                  onValueChange={setLocationServicesEnabled}
                />
                <SwitchSetting
                  title="Chế Độ Tối"
                  value={darkModeEnabled}
                  onValueChange={setDarkModeEnabled}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>

      <LogoutModal
        visible={confirmLogout}
        onConfirm={handleLogout}
        onCancel={() => setConfirmLogout(false)}
      />
    </View>
  );
};

const SettingItem = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={styles.itemRow}>
      <View style={styles.leftSection}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.itemText}>{title}</Text>
      </View>
      <Image source={ArrowIcon} style={styles.arrowIcon} />
    </View>
  </TouchableOpacity>
);

const SwitchSetting = ({ title, value, onValueChange }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{title}</Text>
    <Switch value={value} onValueChange={onValueChange} />
  </View>
);

const LogoutModal = ({ visible, onConfirm, onCancel }) => (
  <Modal
    transparent={true}
    animationType="slide"
    visible={visible}
    onRequestClose={onCancel}
  >
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Xác nhận đăng xuất</Text>
        <Text style={styles.modalMessage}>Bạn có chắc chắn muốn đăng xuất không?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onConfirm}>
            <Text style={styles.buttonText}>Có</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onCancel}>
            <Text style={styles.buttonText}>Không</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.orange1,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  section: {
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
});

export default AccountSetting;