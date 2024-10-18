import {
  Button,
  Card,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native-ui-lib';
import {StyleSheet, Linking} from 'react-native';
import React, {useState} from 'react';
import CustomDialog from '../../components/CustomDialog';

const Checkout = () => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const handleAddressClick = () => {
    const address = 'Newhall St 36, London, 12908 - UK';
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.iconBack}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
        <View style={styles.headerTextContainer} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoRow}>
          <Image source={require('../../images/icon_mail.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.textField}>rumenhussen@gmail.com</Text>
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
            <Text style={styles.textField}>+88-692-764-269</Text>
            <Text style={styles.label}>Phone</Text>
          </View>
          <TouchableOpacity>
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
              Newhall St 36, London, 12908 - UK
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
          <Text style={styles.textCost}>$1250.00</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.textCost}>Shipping</Text>
          <Text style={styles.textCost}>$40.90</Text>
        </View>
        <View style={styles.rowBetween}>
          <Text style={styles.textTotal}>Total Cost</Text>
          <Text style={styles.textTotal}>$1690.99</Text>
        </View>
      </View>
      <Button
        backgroundColor="#F15E2B"
        borderRadius={10}
        onPress={() => setVisibleDialog(true)}
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
          <TouchableOpacity marginT-30 onPress={() => setVisibleDialog(false)}>
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
  },
  headerTextContainer: {},
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
