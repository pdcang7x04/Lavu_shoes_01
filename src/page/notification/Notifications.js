import { StyleSheet, Text, View , Image,FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
import Itemnoti from './Itemnoti';
import AxiosInstance from '../../helper/AxiosInstance';
import { useDispatch, useSelector } from 'react-redux';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector

const Notifications = (props) => {
  const {navigation} = props

  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const [DataHistory, setDataHistory] = useState([])

  const fetchGetHistory = async () => {
    try {
      const response = await AxiosInstance().get(`/orders/getHistoryShopping/${appState.user.email}`);
      if (response.status) {
        setDataHistory(response.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGetHistory()
  }, [])
  
  console.log("HISTORY: ", DataHistory)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginLeft: 80}}>
            <Text style={styles.Favourite}>Lịch sử</Text>
          </View>
        </View>
      </View>
      <FlatList
      style={{marginTop:15}}
        data={DataHistory}
        renderItem={({item})=> <Itemnoti data={item}/>}
        keyExtractor={item => item._id}
      />
    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fb',
        padding: 30,
      },
      header: { 

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:15
      },
      iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      
      icon_menu: {
        width: 44,
        height: 44,
        marginRight: 10,
      },
      Favourite: {
        fontFamily: t.Roboto_Bold,
        fontSize: 20,
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 10,
        color: colors.black1,
      },
})
const orderData = [
    { id: '1', status: 'Packed', items: 3, image: require ('../../images/icon_notification.png') },
    { id: '2', status: 'Shipped', items: 3, image: require ('../../images/icon_notification.png') },
    { id: '3', status: 'Delivered', items: 3, image: require ('../../images/icon_notification.png') },
    { id: '4', status: 'Delivered', items: 3, image: require ('../../images/icon_notification.png') },
  ];