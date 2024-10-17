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
import {useNavigation} from '@react-navigation/native';

const notificationIcon = require('../../images/notifications.png');
const shippingIcon = require('../../images/shopping.png');
const paymentIcon = require('../../images/payment.png');
const passwordIcon = require('../../images/icon.png');
const logoutIcon = require('../../images/logout.webp');
const ArrowIcon = require('../../images/Arrow.png');

const AccountSetting = () => {
  const navigation = useNavigation();

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
              customStyle={{marginTop: 8}}
              paddingH-20
              title={'Account & Settings'}
            />

            <View paddingH-15 marginT-20>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account</Text>

                <TouchableOpacity style={styles.item}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={notificationIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Notification Setting</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={shippingIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Shipping Address</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={paymentIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Payment Info</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={passwordIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Change password</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>
                  <View style={styles.itemRow}>
                    <View style={styles.leftSection}>
                      <Image source={logoutIcon} style={styles.icon} />
                      <Text style={styles.itemText}>Log out</Text>
                    </View>
                    <Image source={ArrowIcon} style={styles.arrowIcon} />
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.section} marginT-32>
                <Text style={styles.sectionTitle}>App Settings</Text>

                <View style={styles.item}>
                  <Text style={styles.itemText}>Enable Face ID For Log In</Text>
                  <Switch
                    value={faceIdEnabled}
                    onValueChange={setFaceIdEnabled}
                  />
                </View>

                <View style={styles.item}>
                  <Text style={styles.itemText}>Enable Push Notifications</Text>
                  <Switch
                    value={pushNotificationsEnabled}
                    onValueChange={setPushNotificationsEnabled}
                  />
                </View>

                <View style={styles.item}>
                  <Text style={styles.itemText}>Enable Location Services</Text>
                  <Switch
                    value={locationServicesEnabled}
                    onValueChange={setLocationServicesEnabled}
                  />
                </View>

                <View style={styles.item}>
                  <Text style={styles.itemText}>Dark Mode</Text>
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
    backgroundColor: 'white', // Overall background color
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
