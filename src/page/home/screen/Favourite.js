import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'
import {colors} from '../../../styles/colors';
import {t} from '../../../styles/font';
import {brands} from '../component/Item_brand';
import {newArrivals, popularShoes} from '../component/Item_products';

const Favourite = () => {

    const renderShoeItem = ({item}) => (
        <View style={[styles.shoeCard, {position: 'relative'}]}>
          <Image source={item.image} style={styles.shoeImage} />
          <View style={{ textAlign: 'left', width:'100%' }}>
            <Text style={styles.TextBestSeller}>BEST SELLER</Text>
            <Text style={styles.shoeName}>{item.name}</Text>
            <Text style={styles.shoePrice}>{item.price}</Text>
          </View>
          <TouchableOpacity
            style={[
              styles.addButton,
              {position: 'absolute', bottom: 35, right: 30},
            ]}>
            <Image source={require('../../../images/add.png')} />
          </TouchableOpacity>
        </View>
      );
  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          <View style={{alignItems: 'center', marginLeft: 80}}>
            <Text style={styles.Favourite}>Favourite</Text>
          </View>
        </View>
        <Image
          source={require('../../../images/icon_tim.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.titleContainer}>
        </View>
        <FlatList
          data={popularShoes}
          renderItem={renderShoeItem}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.shoeList}
        />
      </View>
    </View>
  )
}

export default Favourite

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
        marginBottom: 20,
      },
      iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        width: 24,
        height: 24,
        marginRight: 10,
      },
      icon_menu: {
        width: 44,
        height: 44,
        marginRight: 10,
      },
      Favourite: {
        fontFamily: t.Roboto_Bold,
        fontSize: 20,
        color: colors.black1,
      },
      sectionContainer: {
        marginBottom: 20,
      },
      titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      },

      shoeList: {
        paddingVertical: 10,
      },
      shoeCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginRight: 15,
        alignItems: 'center',
        width: 157,
        height:201,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        elevation: 2,
        margin:10
         // Thêm cho Android
      },
      shoeImage: {
        width: 200,
        height: 100,
        borderRadius: 10,
        marginBottom: 5,
      },
      TextBestSeller: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.orange1,
        marginBottom: 5,
      },
      shoeName: {
        fontSize: 14,
        fontWeight: 'bold',
        // textAlign: 'center',
        marginBottom: 5,
        color:colors.black1,
        fontFamily: t.Roboto_Bold,
      },
      shoePrice: {
        fontSize: 12,
        color: colors.black1,
        marginBottom: 5,
        color:colors.black1,
        fontFamily: t.Roboto_Bold,
      },
      addButton: {
        width: 34,
        height: 35,
        marginLeft: 50,
      },
     

})