import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Card, Image, TouchableOpacity} from 'react-native-ui-lib';

const ItemCheckout = ({item, onChangeQuantity}) => {
  const [quantity, setquantity] = useState(item.quantity);
  const handleChangeQuantity = val => {
    setquantity(quantity + val);
    onChangeQuantity(quantity);
  };
  return (
    <View row flex gap-12 margin-8>
      <View>
        <Image source={item.image} width={100} height={100} />
      </View>
      <View>
        <Text>{item?.name}</Text>
        <Text>
          {item.size} | ${item?.price}
        </Text>
        <View row gap-16 marginT-8>
          <TouchableOpacity
            onPress={() => {
              handleChangeQuantity(-1);
            }}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{quantity}</Text>
          <TouchableOpacity
            onPress={() => {
              handleChangeQuantity(1);
            }}>
            <Card
              backgroundColor="orange"
              borderRadius={99}
            //   padding-4
              width={8}
              height={8}>
              <Text>+</Text>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemCheckout;

const styles = StyleSheet.create({});
