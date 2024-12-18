import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { mainstack } from '../../navigation/mainstack'
import { colors } from '../../styles/colors'
import { t } from '../../styles/font'
import AxiosInstance from '../../helper/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const Password_authentication = (props) => {
  const { navigation, route } = props;
  const { params } = route

  const dispatch = useDispatch();
  const appState = useAppSelector((state) => state.lavu);

  const [Password, setPassword] = useState('')
  const [SecureTextEntry, setSecureTextEntry] = useState(true)

  console.log(params.email)


  const data = {
    _id: appState.otp._id,
    otp: Password
  }

  const verifyOTP = async () => {
    if (!Password.trim()) {
      return Toast.show({
        text1: "OTP là bắt buộc",
        position: "top",
        type: "error"
      })
    } else {
      const response = await AxiosInstance().post(`/users/verifyOTP`, data);
      console.log('res: ', response.data);
      if (response.status) {
        navigation.navigate(mainstack.setupnewpassword, { email: params.email })
      }else{
        return Toast.show({
          text1: "OTP không đúng",
          position: "top",
          type: "error"
        })
      }
    }

  }

  const hidePassword = () => {
    if (SecureTextEntry == true) {
      setSecureTextEntry(false)
    } else {
      setSecureTextEntry(true)
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


      <Text style={styles.textHello}>Mã Xác Nhận</Text>
      <Text style={styles.contentHello}>Nhập Mã Gồm 4 Chữ Số Mà Chúng Tôi Đã Gửi Qua Email Của Bạn</Text>


      <View style={styles.viewInput}>

        <View style={styles.viewTextInput}>
          <TextInput
            value={Password}
            onChangeText={val => setPassword(val)}
            placeholder='8888'
            style={styles.textInput}
            keyboardType='number-pad'

            secureTextEntry={SecureTextEntry}
          />
          <TouchableOpacity onPress={hidePassword}>
            <Image
              source={require('../../images/icon_close_eye.png')}
              style={styles.iconTextInput}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.viewButtonSignIn, { backgroundColor: colors.orange1 }]}
        onPress={() => verifyOTP()}
      >
        <Text style={[styles.textButton, { color: colors.white }]}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Password_authentication

const styles = StyleSheet.create({
  iconTextInput: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain'
  },
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