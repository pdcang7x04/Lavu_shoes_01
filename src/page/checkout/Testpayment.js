import React, { useEffect, useState } from 'react';
import { View, ScrollView, Button, Alert, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import { hmacSHA256 } from 'react-native-hmac';
import { mainstack } from '../../navigation/mainstack';

const clientID = '77ac1b37-49f3-4179-91b3-fe8340fb462e';
const apiKey = 'f9348068-0359-4548-b6ab-d590ec9083e3';
const checkSum = '3245da7579424aa57a21a9dce55ebde055e8caddaf42feb3f90f4e79526486a5';
const Testpayment = (props) => {
    const {route, navigation} = props
    const {totalCost} = route.params
    const [paymentLink, setPaymentLink] = useState('');
    const [loading, setLoading] = useState(false);
  
    const initiatePayment = async () => {
      setLoading(true);
      const amount = 100000;
      const cancelUrl = 'https://localhost:3000/cancel';
      const description = 'Donate Cho Tao';
      const orderCode = Date.now();
      const returnUrl = 'https://localhost:3000/success';
  
      const signature = await hmacSHA256(
        `amount=${totalCost}&cancelUrl=${cancelUrl}&description=${description}&orderCode=${orderCode}&returnUrl=${returnUrl}`,
        checkSum
      );
  
      const body = {
        orderCode,
        amount: totalCost,
        description,
        cancelUrl,
        returnUrl,
        signature,
      };
  
      try {
        const response = await axios.post('https://api-merchant.payos.vn/v2/payment-requests', body, {
          headers: {
            'x-client-id': clientID,
            'x-api-key': apiKey,
          },
        });
  
        console.log(response.data);
        if (response.data.code == 0) {
          setPaymentLink(response.data.data.checkoutUrl);
        } else {
          console.error("Lỗi: " + response.data.message);
          Alert.alert("Lỗi", response.data.message);
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Lỗi", "Vui lòng kiểm tra kết nối và thử lại.");
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      initiatePayment()
    }, [])
    
  
    const handleNavigationChange = (navState) => {
      const { url } = navState;
      console.log('Current URL:', url);
      if (url.includes('/success')) {
        Alert.alert('Thành công', 'Thanh toán thành công');
        setPaymentLink('');
        navigation.navigate(mainstack.home)
      } else if (url.includes('/cancel')) {
        Alert.alert('Thất bại', 'Đã hủy thanh toán.');
        setPaymentLink('');
        navigation.goBack()
      }
    };
  
    return (
      <View style={styles.container}>
        {/* <Button title="Lay QR Thanh Toan Nha" onPress={initiatePayment} disabled={loading} /> */}
        {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />}
        {paymentLink ? (
          <ScrollView contentContainerStyle={styles.scrollView}>
            <WebView
              source={{ uri: paymentLink }}
              style={styles.webView}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              onNavigationStateChange={handleNavigationChange}
            />
          </ScrollView>
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Vui lòng khởi tạo thanh toán</Text>
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
      marginTop:20
    },
    scrollView: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    webView: {
      width: '100%',
      height: '100%',
    },
    placeholder: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    placeholderText: {
      fontSize: 16,
      color: '#888',
    },
    loadingIndicator: {marginVertical: 20,
    },
  });
  export default Testpayment;