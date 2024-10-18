import {Card, Image, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { mainstack } from '../../navigation/mainstack';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/Reducer';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector

const Detail = (props) => {
  const {navigation, route} = props
  const {product} = route.params

  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const [select_color, setselect_color] = useState(product?.color[0]);

  const [select_size, setselect_size] = useState(product?.size[0]);

  const statusProduct = () => {
    if(product?.status == 1){
      return "NEW"
    }else
    if(product?.status == 2){
      return "BEST SELLER"
    }else
    if(product?.status == 3){
      return "POPULAR"
    }else
    if(product?.status == 4){
      return "LIMITED"
    }
  }
  
  const handleAddToCart = () => {
    const data = {
      ...product, ...{
        color: select_color,
        size: select_size,
        quantity: 1
      }
    }
    dispatch(addItemToCart(data))

  }

  return (
    <View height={'100%'} paddingT-30 paddingH-20 spread>
      <View>
        <Header
          title={product?.category?.name || "Men's Shoes"}
          render_ic_right={
            <TouchableOpacity onPress={() => navigation.navigate(mainstack.cart)}>
              <Image source={require('../../images/icon_shopping_cart.png')} />
            </TouchableOpacity>
          }
        />
        <View paddingV-32 paddingH-32>
          <Image
            source={{uri: select_color !== null ? select_color.image : product?.image[0]}}
            width={'100%'}
            height={234}
          />
        </View>

        <View>
          <View>
            
              <Text style={styles.text_best_sale}>{statusProduct()}</Text>
            
            <Text marginT-6 style={styles.text_name_product}>
              {product?.name}
            </Text>
            <Text marginT-12 style={styles.text_price}>
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product?.price)}
            </Text>
            <Text marginT-8 style={styles.text_decription}>
              {product?.description}
            </Text>
          </View>
          <View marginT-16>
            <Text style={styles.text_option}>Gallery</Text>
            <FlatList
              data={product.color}
              horizontal
              style={styles.flatlist}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    marginR-16
                    onPress={() => {
                      setselect_color(item);
                    }}>
                    {/* <Card borderRadius={16}> */}
                      <Image source={{uri: item?.image}} 
                      style={{width: 50, height: 50}}/>
                    {/* </Card> */}
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View>
            <Text style={styles.text_option}>Size</Text>
            <FlatList
              data={product?.size}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.flatlist}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    marginR-13
                    onPress={() => {
                      setselect_size(item);
                    }}>
                    <Card
                      borderRadius={999}
                      padding-13
                      backgroundColor={
                        select_size === item ? '#F15E2B' : '#F8F9FA'
                      }>
                      <Text
                        color={select_size === item ? '#fff' : '#707B81'}
                        style={styles.text_size}>
                        {item}
                      </Text>
                    </Card>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </View>
      <View
        centerV
        row
        spread
        width={'100%'}
        paddingT-16
        paddingB-24
        paddingH-20>
        <View>
          <Text style={styles.text_title_price}>Price</Text>
          <Text style={styles.text_price}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product?.price)}</Text>
        </View>
        <Button title="Add to cart" onPress={handleAddToCart} />
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  text_size: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '900',
    lineHeight: 20,
    wordWrap: 'break-word',
  },
  flatlist: {
    marginTop: 16,
    padding: 8,
  },
  text_option: {
    color: '#1A2530',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 22,
    wordWrap: 'break-word',
  },
  text_decription: {
    width: '100%',
    color: '#707B81',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '900',
    lineHeight: 22,
    wordWrap: 'break-word',
  },
  text_name_product: {
    color: '#1A2530',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 28,
    wordWrap: 'break-word',
  },
  text_best_sale: {
    color: '#F15E2B',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '900',
    textTransform: 'uppercase',
    lineHeight: 18,
    wordWrap: 'break-word',
  },
  text_price: {
    color: '#1A2530',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 24,
    wordWrap: 'break-word',
  },
  text_title_price: {
    color: '#707B81',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '900',
    lineHeight: 20,
    wordWrap: 'break-word',
  },
});
