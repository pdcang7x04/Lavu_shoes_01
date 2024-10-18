import {Card, Image, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Detail = ({route}) => {
  const {item} = route?.params || {
    item: {
      isBestSale: true,
      name: 'Nike Air Jordan',
      price: 967.8,
      decription:
        'Air Jordan is an American brand of basketball shoes athletic, casual, and style clothing produced by Nike....',
    },
  };

  const option_color = [
    {image: require('../../images/icon_shoes1.png'), value: 0},
    {image: require('../../images/icon_shoes2.png'), value: 1},
    {image: require('../../images/icon_shoes.png'), value: 2},
  ];

  const option_size = [
    {size: '38', value: 38},
    {size: '39', value: 39},
    {size: '40', value: 40},
    {size: '41', value: 41},
    {size: '42', value: 42},
    {size: '43', value: 43},
  ];

  const [select_color, setselect_color] = useState(0);

  const [select_size, setselect_size] = useState(option_size[0].value);
  return (
    <View height={'100%'} paddingT-30 paddingH-20 spread>
      <View>
        <Header
          title={item?.title || "Men's Shoes"}
          render_ic_right={
            <TouchableOpacity>
              <Image source={require('../../images/icon_shopping_cart.png')} />
            </TouchableOpacity>
          }
        />
        <View paddingV-32 paddingH-32>
          <Image
            source={
              item?.image
                ? {uri: item?.image}
                : require('../../images/img_shoes_big.png')
            }
            width={'100%'}
            height={234}
          />
        </View>

        <View>
          <View>
            {item?.isBestSale && (
              <Text style={styles.text_best_sale}>BEST SELLER</Text>
            )}
            <Text marginT-6 style={styles.text_name_product}>
              {item?.name}
            </Text>
            <Text marginT-12 style={styles.text_price}>
              ${item?.price}
            </Text>
            <Text marginT-8 style={styles.text_decription}>
              {item?.decription}
            </Text>
          </View>
          <View marginT-16>
            <Text style={styles.text_option}>Gallery</Text>
            <FlatList
              data={option_color}
              horizontal
              style={styles.flatlist}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    marginR-16
                    onPress={() => {
                      setselect_color(index);
                    }}>
                    <Card borderRadius={16}>
                      <Image source={item?.image} />
                    </Card>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View>
            <Text style={styles.text_option}>Size</Text>
            <FlatList
              data={option_size}
              horizontal
              style={styles.flatlist}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    marginR-13
                    onPress={() => {
                      setselect_size(item?.value);
                    }}>
                    <Card
                      borderRadius={999}
                      padding-13
                      backgroundColor={
                        select_size === item?.value ? '#F15E2B' : '#F8F9FA'
                      }>
                      <Text
                        color={select_size === item?.value ? '#fff' : '#707B81'}
                        style={styles.text_size}>
                        {item?.size}
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
          <Text style={styles.text_price}>${item?.price || '849.69'}</Text>
        </View>
        <Button title="Add to cart" onPress={null} />
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
