import {Card, Image, Text, View} from 'react-native-ui-lib';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header';
import InputView from '../../components/InputView';
import { useDispatch, useSelector } from 'react-redux';
import AxiosInstance from '../../helper/AxiosInstance';

const useAppDispatcher = () => useDispatch();
const useAppSelector = useSelector;

const Profile = (props) => {
  const {navigation} = props
  const userName = 'User Name';

  const dispatch = useDispatch();
  const appState = useAppSelector((state) => state.lavu);

  const [Username, setUsername] = useState(appState.user.username)
  const [Email, setEmail] = useState(appState.user.email)
  const [DisplayedUsername, setDisplayedUsername] = useState(appState.user.username);
  
  
  
  const data = {
    username: Username,
    email: Email,
    image: appState.user.image
  }


  const handleSave = async () => {
    const response = await AxiosInstance().put(`/users/updateUser/${appState.user._id}`, data);
    console.log('res: ', response.data);
    if (response.status) {
      setDisplayedUsername(response?.data?.username)
      setUsername(response?.data?.username)
      setEmail(response?.data?.email)
      dispatch(updateUser(response.data))
      ToastAndroid.show("success", ToastAndroid.SHORT)
    }
  }

  return (
    <View>
      <ScrollView style={{height: '100%'}}>
        <View height={'100%'} marginT-40 spread>
          <KeyboardAvoidingView>
            <Header
            action_ic_left={() => navigation.goBack()}
              customStyle={{marginTop: 8}}
              paddingH-20
              title={'Profile'}
            />
            <View centerH>
              <View center>
                <Image
                  source={{uri: appState.user.image}}
                  width={90}
                  height={90}
                  borderRadius={45}
                />
                <TouchableOpacity style={{marginTop: -20}}>
                  <Image source={require('../../images/camera.png')} />
                </TouchableOpacity>
              </View>
              <Text style={styles.textUserName}>{DisplayedUsername}</Text>
            </View>
            <View paddingH-20 marginT-32>
              <View marginT-16 gap-12>
                <Text style={styles.textDecription}>Họ & Tên</Text>
                <InputView 
                  value={Username}
                  onChangeText={value => setUsername(value)}
                />
              </View>
              <View marginT-16 gap-12>
                <Text style={styles.textDecription}>Email</Text>
                <InputView 
                  value={Email}
                  onChangeText={value => setEmail(value)}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <View absB width={'100%'} padding-20>
        <TouchableOpacity onPress={handleSave} style={{marginBottom: 60}}>
          <Card center paddingV-16 backgroundColor="#F15E2B" borderRadius={999}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'Roboto',
                fontWeight: '500',
                lineHeight: 22,
                wordWrap: 'break-word',
              }}>
              Lưu
            </Text>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    marginTop: 40,
  },
  textUserName: {
    textAlign: 'center',
    color: '#1A2530',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '500',
    textTransform: 'capitalize',
    lineHeight: 28,
    wordWrap: 'break-word',
  },
  textDecription: {
    color: '#1A2530',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 20,
    wordWrap: 'break-word',
  },
});
