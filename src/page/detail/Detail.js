import { Card, Image, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { FlatList, StyleSheet, ScrollView, Alert, ToastAndroid, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { t } from '../../styles/font';
import Button from '../../components/Button';
import { mainstack } from '../../navigation/mainstack';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/Reducer';
import { useNavigation } from '@react-navigation/native';
import CommentItem from '../Comment/CommentItem';
import Toast from 'react-native-toast-message';
import AxiosInstance from '../../helper/AxiosInstance';

// const useAppDispatcher = useDispatch();
// const useAppSelector = useSelector;

const Detail = props => {
  const navigation = useNavigation();
  const { route } = props;
  const { product } = route.params;
  // console.log(product);

  const dispatch = useDispatch();
  // const appState = useAppSelector(state => state.lavu);

  const [select_color, setselect_color] = useState(product?.color[0]);

  const [select_size, setselect_size] = useState(product?.size[0]);
  const [comment, setcomment] = useState([])

  const statusProduct = () => {
    if (product?.status === 1) {
      return 'NEW';
    } else if (product?.status === 2) {
      return 'BEST SELLER';
    } else if (product?.status === 3) {
      return 'POPULAR';
    } else if (product?.status === 4) {
      return 'GIỚI HẠN';
    }
  };

  const handleAddToCart = () => {
    const data = {
      ...product,
      ...{
        color: select_color,
        size: select_size,
        quantity: 1,
      },
    };

    dispatch(addItemToCart(data));
    ToastAndroid.show('Thêm vào giỏ hàng thành công', ToastAndroid.BOTTOM);

  };

  const fetchGetComment = async () => {
    try {
      const response = await AxiosInstance().get(
        `/comments/getAllComment/${product?._id}`
      )
      if (response) {
        setcomment(response.data)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchGetComment()
  }, [])


  return (
    <View height={'100%'} paddingT-52 paddingH-20 spread>
      <Header
        title={'Giày ' + product?.category?.name || "Men's Shoes"}
        render_ic_right={
          <TouchableOpacity onPress={() => navigation.navigate(mainstack.cart)}>
            <Image source={require('../../images/icon_shopping_cart.png')} />
          </TouchableOpacity>
        }
        ic_left={require('../../images/icon_back.png')}
        action_ic_left={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>

          <FlatList
            data={product?.image}
            keyExtractor={(item) => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            renderItem={({ item }) => (
              <View style={{ paddingVertical: 32, alignItems: 'center' }}>
                <Image
                  source={{ uri: item }}
                  style={{
                    width: Dimensions.get('window').width-32,
                    height: 234,
                    resizeMode: 'cover', // Thay đổi cách hiển thị ảnh
                    borderRadius: 20, // Thêm bo góc cho hình ảnh
                  }}
                />
              </View>
            )}
            contentContainerStyle={{ paddingHorizontal: 16 }} // Thêm khoảng cách bên trái và phải
            snapToAlignment="center" // Căn giữa ảnh khi cuộn
          />
          <View>
            <View>
              <Text style={styles.text_best_sale}>{statusProduct()}</Text>

              <Text marginT-6 style={styles.text_name_product}>
                {product?.name}
              </Text>
              <Text marginT-12 style={styles.text_price}>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(product?.price)}
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
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity
                      marginR-16
                      onPress={() => {
                        setselect_color(item);
                      }}>
                      {/* <Card borderRadius={16}> */}
                      <Image
                        source={{ uri: item?.image }}
                        style={{ width: 50, height: 50 }}
                      />
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
                renderItem={({ item, index }) => {
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

            {
              comment.length != 0 ? (
                <View marginT-16>
                  <View row spread>
                    <Text style={styles.text_option}>
                      Đánh Giá <Text>({comment?.length})</Text>
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(mainstack.Comment, { comment });
                      }}>
                      <Text color={'#F15E2B'}>Xem tất cả</Text>
                    </TouchableOpacity>
                  </View>
                  <FlatList
                    data={comment.slice(0, 2)}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={2}
                    style={{ padding: 8 }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                      return <CommentItem item={item} />;
                    }}
                  />
                </View>

              ) : null
            }
          </View>
        </View>

      </ScrollView>
      <View
        centerV
        row
        spread
        width={'100%'}
        paddingT-16
        paddingB-24
        paddingH-20>
        <View>
          <Text style={styles.text_title_price}>Giá</Text>
          <Text style={styles.text_price}>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(product?.price)}
          </Text>
        </View>
        <Button
          title="Thêm vào giỏ hàng"
          onPress={handleAddToCart}
          textColor={'white'}
        />
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
  text_reviewer_name: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '700',
    color: '#1A2530',
  },
  text_reviewer_rating: {
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '500',
    color: '#F15E2B',
  },
  text_reviewer_comment: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#707B81',
    marginTop: 4,
  },
});

const demoProductReview = [
  {
    id: 1,
    name: 'Nam Ốc',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    review:
      'Đây là lần thứ 2 mình mua giày vẫn vừa ý như lần đầu hàng chất lượng vừa chân giao nhanh shop đóng gói kỹ. Chym Ứng quá shop ơi',
  },
  {
    id: 2,
    name: 'Nam Ốc',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    review:
      'Đây là lần thứ 2 mình mua giày vẫn vừa ý như lần đầu hàng chất lượng vừa chân giao nhanh shop đóng gói kỹ. Chym Ứng quá shop ơi',
  },
];
