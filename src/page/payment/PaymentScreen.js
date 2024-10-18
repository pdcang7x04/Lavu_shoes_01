import {Button, Card, Icon, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomDialog from '../../components/CustomDialog';

const PaymentScreen = () => {
  const [visbleDialog, setvisbleDialog] = useState(false);
  return (
    <View>
      <Text>PaymentScreen</Text>
      <Button onPress={() => setvisbleDialog(true)} marginT-40>
        <Text>show dialog</Text>
      </Button>
      <CustomDialog
        visible={visbleDialog}
        // bottom dialog
        onDismiss={() => setvisbleDialog(false)}>
        <Card center paddingV-40 paddingH-63>
          <View paddingH-25>
            <Icon source={require('../../images/icon_payment_done.png')} size={134}/>
            <Text marginT-24>Your Payment Is Successful</Text>
          </View>
          <TouchableOpacity marginT-30 >
            <Card backgroundColor="#F15E2B" borderRadius={999} p>
              <Text>Back To Shopping</Text>
            </Card>
          </TouchableOpacity>
        </Card>
      </CustomDialog>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
