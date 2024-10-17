import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { mainstack } from '../../navigation/mainstack'
import { colors } from '../../styles/colors'
import { t } from '../../styles/font'
import { useDispatch, useSelector } from 'react-redux'
import { validate_phone, validateUsername } from '../../middlewares/Validate'
import AxiosInstance from '../../helper/AxiosInstance'

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;


const Shipping_Address = (props) => {
  const { navigation } = props;
  const [Address, setAddress] = useState("quận 2")
  const [Phone, setPhone] = useState("0123456789")

  const dispatch = useDispatch();
  const appState = useAppSelector((state) => state.lavu);
  console.log(appState.user._id)

  const updateShippingAddress = async () => {
    validateUsername(Address)
    validate_phone(Phone)


    try {
      const data = {
        address: Address,
        phone: Phone
      }
      const response = await AxiosInstance().put(`/users/updateShippingAddress/${appState.user._id}`, data);
      console.log('res: ', response.data);
      if (response.status) {
        navigation.goBack()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../images/icon_back.png')}
          style={styles.iconBack}
        />
      </TouchableOpacity>


      <Text style={styles.textHello}>Shipping Address</Text>
      <Text style={styles.contentHello}>Please set the location you want to send to</Text>

      <View style={styles.viewInput}>
        <Text style={styles.title}> Address</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={Address}
            onChangeText={val => setAddress(val)}
            style={styles.textInput}
            autoCapitalize='none'
          />
          <TouchableOpacity>
            <Image
              source={require('../../images/icon_close_eye.png')}
              style={styles.iconTextInput}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewInput}>
        <Text style={styles.title}> Phone</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={Phone}
            onChangeText={val => setPhone(val)}
            style={styles.textInput}
            autoCapitalize='none'
          />
          <TouchableOpacity>
            <Image
              source={require('../../images/icon_close_eye.png')}
              style={styles.iconTextInput}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.viewButtonSignIn, { backgroundColor: colors.orange1 }]}
        onPress={updateShippingAddress}
      >
        <Text style={[styles.textButton, { color: colors.white }]}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Shipping_Address

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 44,
    backgroundColor: colors.white1
  },
  iconBack: {
    width: 44,
    height: 44,
    alignSelf: 'flex-start',
    marginTop: 8
  },
  title: {
    fontFamily: t.Roboto_Bold,
    fontWeight: '500',
    fontSize: 16,
    color: colors.black1,
    alignSelf: 'flex-start',
  },
  textHello: {
    fontFamily: t.Roboto_Bold,
    fontSize: 28,
    fontWeight: '500',
    color: colors.black1,
    lineHeight: 36,
    marginTop: 32
  },
  contentHello: {
    width: 273,
    fontFamily: t.Roboto_Bold,
    fontSize: 16,
    color: colors.black1,
    lineHeight: 24,
    marginTop: 4,
    marginBottom: 20,
    textAlign: 'center'
  },
  viewInput: {
    width: '100%',
    marginTop: 30,
  },
  viewTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingHorizontal: 14,
    marginTop: 12
  },
  textInput: {
    flex: 1,
    fontFamily: t.Roboto_Bold,
    fontWeight: '100',
    fontSize: 14,
    lineHeight: 16,
    color: colors.black1
  },
  iconTextInput: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain'
  },
  textForgot: {
    fontFamily: t.Roboto_Bold,
    fontSize: 13,
    fontWeight: '100',
    lineHeight: 16,
    alignSelf: 'flex-end',
    marginTop: 12,
  },
  viewButtonSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 54,
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: colors.white
  },
  textButton: {
    fontFamily: t.Roboto_Bold,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: colors.black1
  },
  textBottom: {
    fontFamily: t.Roboto_Bold,
    fontSize: 12,
    fontWeight: '300',
    color: colors.grey1,
    marginBottom: 50
  },
  color: {
    color: colors.orange1,
  }

})