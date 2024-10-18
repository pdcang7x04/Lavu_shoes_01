import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { t } from '../../styles/font'
import { colors } from '../../styles/colors'
import { mainstack } from '../../navigation/mainstack'
import AxiosInstance from '../../helper/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { validateEmail } from '../../middlewares/Validate'
import { sendOTPVerificationEmail } from '../../redux/User/CallAPIUser'

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const RecoveryPassword = (props) => {
  const { navigation } = props

  const dispatch = useDispatch();
  const appState = useAppSelector((state) => state.lavu);

  const [Email, setEmail] = useState('')

  const sendOTP = async () => {
    try {
      validateEmail(Email)
      await dispatch(sendOTPVerificationEmail({email: Email}))
      navigation.navigate(mainstack.passwordauthentication, {email: Email})
    } catch (error) {
      console.log('error:', error.message);
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
      <Image
        source={require('../../images/icon_back.png')}
        style={styles.iconBack}
      />
      </TouchableOpacity>

      <Text style={styles.textHello}>Recovery Password</Text>
      <Text style={styles.contentHello}>Please Enter Your Email Address To Recieve a Verification Code</Text>

      <View style={styles.viewInput}>
        <Text style={styles.title}>Email Address</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={Email}
            onChangeText={val => setEmail(val)}
            placeholder='aaaaa@gmail.com'
            style={styles.textInput}
            keyboardType='email-address'
            autoCapitalize='none'
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.viewButtonSignIn, { backgroundColor: colors.orange1 }]}
        onPress={() => sendOTP()}
      >
        <Text style={[styles.textButton, { color: colors.white }]}>Continue</Text>
      </TouchableOpacity>

    </View>
  )
}

export default RecoveryPassword

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
  title: {
    fontFamily: t.Roboto_Bold,
    fontWeight: '500',
    fontSize: 16,
    color: colors.black1,
    alignSelf: 'flex-start',
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