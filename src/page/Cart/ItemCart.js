import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';
const ItemCart = (props) => {
    const {data} = props;
  return (
    <View style={styles.itemContainer}>
      <Image source={data.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{data.name}</Text>
        <Text style={styles.itemInfo}>{`Size: ${data.size} | Price: $${data.price.toFixed(2)}`}</Text>
        <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton}>
            <Image source={require('../../images/icon_mini.png')} style={styles.iconButton} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{data.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Image source={require('../../images/icon_plus.png')} style={styles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton}>
            <Image source={require('../../images/icon_tr.png')} style={styles.iconButton} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ItemCart

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        elevation: 2,
        alignItems: 'center',
      },
      itemImage: {
        width: 70,
        height: 70,
        marginRight: 15,
      },
      itemDetails: {
        flex: 1,
      },
      itemName: {
        fontFamily:t.Roboto_Medium,
        fontSize: 16,
      },
      itemInfo: {
        fontFamily:t.Roboto_Medium,
        fontSize: 14,
        color: '#555',
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
      },
      quantityText: {

        fontSize: 16,
        padding:10
      },
      quantityButton: {
        padding: 5,
      },
      iconButton: {
        width: 24,
        height: 24,
      },
      deleteButton: {
        marginLeft: 'auto',
      },
})