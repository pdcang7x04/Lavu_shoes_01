import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ToastAndroid} from 'react-native'
import React, { useState } from 'react'
import { mainstack } from '../../navigation/mainstack'
import { colors } from '../../styles/colors'
import { t } from '../../styles/font' 
import { useDispatch, useSelector } from 'react-redux'
import AxiosInstance from '../../helper/AxiosInstance'
import { validatePassword } from '../../middlewares/Validate'

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const Chang_Password = (props) => {
    const { navigation } = props;

    const dispatch = useDispatch();
    const appState = useAppSelector((state) => state.lavu);  

    const [OldPassword, setOldPassword] = useState('Cang@123')
    const [NewPassword, setNewPassword] = useState('Cang@123456789')
    const [Repeat_NewPassword, setRepeat_NewPassword] = useState('Cang@123456789')


    const changePassword = async () => {
      validatePassword(OldPassword)
      validatePassword(NewPassword)
      if(NewPassword !== Repeat_NewPassword){
        ToastAndroid.show("Passwords do not match", ToastAndroid.SHORT)
        return
      } 

      try {
        const data ={
          oldPassword: OldPassword,
          newPassword: NewPassword,
        }
        const response = await AxiosInstance().put(`/users/changePassword/${appState.user.email}`, data);
      console.log('res: ', response.data);
      if (response.status) {
        navigation.goBack()
      }
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <View style ={styles.container}>
      <TouchableOpacity style={{alignSelf: 'flex-start'}} onPress={() => navigation.goBack()}>
      <Image
        source={require('../../images/icon_back.png')}
        style={styles.iconBack}
      />
      </TouchableOpacity>


       <Text style={styles.textHello}>Đổi Mật Khẩu</Text>
       <Text style={styles.contentHello}>Hãy Bắt Đầu Đặt Lại Mật Khẩu Mới Cho Tài Khoản Của Bạn</Text>

       <View style={styles.viewInput}>
        <Text style={styles.title}>Mật Khẩu Cũ</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={OldPassword}
            onChangeText={val => setOldPassword(val)}
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={true}
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
        <Text style={styles.title}> Mật Khẩu Mới</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={NewPassword}
            onChangeText={val => setNewPassword(val)}
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={true}
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
        <Text style={styles.title}> Nhập Lại Mật Khẩu Mới</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={Repeat_NewPassword}
            onChangeText={val => setRepeat_NewPassword(val)}
            style={styles.textInput}
            autoCapitalize='none'
            secureTextEntry={true}
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
        onPress={() => changePassword()}
      >
        <Text style={[styles.textButton, { color: colors.white }]}>Lưu</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Chang_Password

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