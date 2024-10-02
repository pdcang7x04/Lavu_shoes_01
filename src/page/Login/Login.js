import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { t } from '../../styles/font';
import { colors } from '../../styles/colors';
import { mainstack } from '../../navigation/mainstack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = (props) => {
  const { navigation } = props;

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '422139788573-cj47q1k6gvqk03r6h0qgd9cvea0264gd.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // Get the user's ID token
      const userInfo = await GoogleSignin.signIn();
      console.log('user: ', userInfo.data.user);
      navigation.navigate(mainstack.home)

      console.log('User signed in with Google!');
    } catch (error) {
      console.log('error:', error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../images/icon_back.png')} style={styles.iconBack} />

      <Text style={styles.textHello}>Hello Again!</Text>
      <Text style={styles.contentHello}>Welcome Back You’ve Been Missed!</Text>

      <View style={styles.viewInput}>
        <Text style={styles.title}>Email</Text>
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

      <View style={styles.viewInput}>
        <Text style={styles.title}>Password</Text>
        <View style={styles.viewTextInput}>
          <TextInput
            value={Password}
            onChangeText={val => setPassword(val)}
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

      <Text
        style={styles.textForgot}
        onPress={() => navigation.navigate(mainstack.recoveryPassword)}
      >
        Recovery Password
      </Text>

      <TouchableOpacity
        style={[styles.viewButtonSignIn, { backgroundColor: colors.orange1 }]}
        onPress={() => {
          // Handle email/password login here
        }}
      >
        <Text style={[styles.textButton, { color: colors.white }]}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.viewButtonSignIn}
        onPress={onGoogleButtonPress}
      >
        <Image
          source={require('../../images/logo_gg.png')}
          style={styles.iconTextInput}
        />
        <Text style={styles.textButton}>Sign in with Google</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }} />

      <Text style={styles.textBottom}>
        Don’t have an account? {' '}
        <Text style={styles.color} onPress={() => navigation.navigate(mainstack.register)}>Sign Up for free</Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 44,
    backgroundColor: colors.white1,
  },
  iconBack: {
    width: 44,
    height: 44,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  textHello: {
    fontFamily: t.Roboto_Bold,
    fontSize: 28,
    fontWeight: '500',
    color: colors.black1,
    lineHeight: 36,
    marginTop: 32,
  },
  contentHello: {
    fontFamily: t.Roboto_Bold,
    fontSize: 16,
    color: colors.black1,
    lineHeight: 24,
    marginTop: 4,
    marginBottom: 20,
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
    marginTop: 12,
  },
  textInput: {
    flex: 1,
    fontFamily: t.Roboto_Bold,
    fontWeight: '100',
    fontSize: 14,
    lineHeight: 16,
    color: colors.black1,
  },
  iconTextInput: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
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
    backgroundColor: colors.white,
  },
  textButton: {
    fontFamily: t.Roboto_Bold,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 22,
    color: colors.black1,
  },
  textBottom: {
    fontFamily: t.Roboto_Bold,
    fontSize: 12,
    fontWeight: '300',
    color: colors.grey1,
    marginBottom: 50,
  },
  color: {
    color: colors.orange1,
  },
});