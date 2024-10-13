import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import { mainstack } from '../../navigation/mainstack'
import { colors } from '../../styles/colors'
import { t } from '../../styles/font'
import React, { useState } from 'react'
import AxiosInstance from '../../helper/AxiosInstance'
import { validateEmail, validatePassword } from '../../middlewares/Validate'

const Setup_New_Password = (props) => {
  const { navigation, route } = props;
  const { params } = route
  const [NewPassword, setNewPassword] = useState('Cang@123')
  const [RepeatPassword, setRepeatPassword] = useState('Cang@123')
  const [SecureTextEntryNew, setSecureTextEntryNew] = useState(true);
  const [SecureTextEntryRepeat, setSecureTextEntryRepeat] = useState(true);

  const hideNewPassword = () => {
    if(SecureTextEntryNew == true){
      setSecureTextEntryNew(false)
    }else{
      setSecureTextEntryNew(true)
    }
  }

  const hideRepeatPassword = () => {
    if(SecureTextEntryRepeat == true){
      setSecureTextEntryRepeat(false)
    }else{
      setSecureTextEntryRepeat(true)
    }
  }

  const setUpNewPassword = async () => {
    validatePassword(NewPassword)
    if (NewPassword !== RepeatPassword) {
      ToastAndroid.show("Passwords do not match", ToastAndroid.SHORT)
      return
    }

    const response = await AxiosInstance().put(`/users/forgotPassword/${params.email}`, { password: NewPassword });
    console.log('res: ', response.data);
    if (response.status) {
      // navigation.navigate(mainstack.setupnewpassword)
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

      <Text style={styles.textHello}>Setup New Password</Text>
      <Text style={styles.contentHello}>Please, setup a new password for your account</Text>



      <View style={styles.viewInput}>
        <Text style={styles.title}> New Password</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={NewPassword}
            onChangeText={val => setNewPassword(val)}
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={SecureTextEntryNew}
          />
          <TouchableOpacity onPress={hideNewPassword}>
            <Image
              source={require('../../images/icon_close_eye.png')}
              style={styles.iconTextInput}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewInput}>
        <Text style={styles.title}> Repeat Password</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={RepeatPassword}
            onChangeText={val => setRepeatPassword(val)}
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={SecureTextEntryRepeat}
          />
          <TouchableOpacity onPress={hideRepeatPassword}>
            <Image
              source={require('../../images/icon_close_eye.png')}
              style={styles.iconTextInput}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.viewButtonSignIn, { backgroundColor: colors.orange1 }]}
        onPress={() => setUpNewPassword()}
      >
        <Text style={[styles.textButton, { color: colors.white }]}>Save</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Setup_New_Password

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