import {Card, Image, Text, View} from 'react-native-ui-lib';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import InputView from '../../components/InputView';

const Profile = () => {
  const userName = 'User Name';
  return (
    <View>
      <ScrollView style={{height: '100%'}}>
        <View height={'100%'} marginT-40 spread>
          <KeyboardAvoidingView>
            <Header
              customStyle={{marginTop: 8}}
              paddingH-20
              title={'Profile'}
            />
            <View centerH>
              <View center>
                <Image
                  source={require('../../images/avt.png')}
                  width={90}
                  height={90}
                />
                <View style={{marginTop: -20}}>
                  <Image source={require('../../images/camera.png')} />
                </View>
              </View>
              <Text style={styles.textUserName}>{userName}</Text>
            </View>
            <View paddingH-20 marginT-32>
              <View marginT-16 gap-12>
                <Text style={styles.textDecription}>Full Name</Text>
                <InputView />
              </View>
              <View marginT-16 gap-12>
                <Text style={styles.textDecription}>Email Address</Text>
                <InputView />
              </View>
              <View marginT-16 gap-12>
                <Text style={styles.textDecription}>Password</Text>
                <InputView security={true} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <View absB width={'100%'} padding-20>
        <TouchableOpacity>
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
              Save
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
