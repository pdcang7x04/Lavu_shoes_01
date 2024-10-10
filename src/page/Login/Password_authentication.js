import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React, { useState } from 'react'
import { mainstack } from '../../navigation/mainstack'
import { colors } from '../../styles/colors'
import { t } from '../../styles/font'
import AxiosInstance from '../../helper/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const Password_authentication = (props) => {
    const { navigation, route } = props;
    const {params} = route

    const dispatch = useDispatch();
    const appState = useAppSelector((state) => state.lavu);  

    const [Password, setPassword] = useState('')
    console.log(params.email)

    // console.log(appState.otp._id)

    const data = {
      _id: appState.otp._id,
      otp: Password
    }

    const verifyOTP = async () => {
      const response = await AxiosInstance().post(`/users/verifyOTP`, data);
      console.log('res: ', response.data);
      if (response.status) {
        navigation.navigate(mainstack.setupnewpassword, {email: params.email})
      }
    }
   
  return (
    <View style ={styles.container}>
      <Image
        source={require('../../images/icon_back.png')}
        style={styles.iconBack}
      />


       <Text style={styles.textHello}>Password authentication</Text>
       <Text style={styles.contentHello}>Enter 4-digits code we sent you on your phone number</Text>


       <View style={styles.viewInput}>
        
        <View style={styles.viewTextInput}>
          <TextInput
            value={Password}
            onChangeText={val => setPassword(val)}
            placeholder='4444'
            style={styles.textInput}
            keyboardType='phone-pad'
            autoCapitalize='none'
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.viewButtonSignIn, { backgroundColor: colors.orange1 }]}
        onPress={() => verifyOTP()}
      >
        <Text style={[styles.textButton, { color: colors.white }]}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Password_authentication

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