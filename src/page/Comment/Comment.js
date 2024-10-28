import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CommentItem from './CommentItem';

const Comment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đánh Giá</Text>
      <FlatList
        data={reviews}
        keyExtractor={({id}) => id.toString()}
        renderItem={({item, index}) => {
          return (
            <CommentItem item={item}/>
          )
        }}
      />
    </View>
  );
};

export default Comment;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#1A2530',
  },
});
const reviews = [
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
  {
    id: 3,
    name: 'Nam Ốc',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    review:
      'Đây là lần thứ 2 mình mua giày vẫn vừa ý như lần đầu hàng chất lượng vừa chân giao nhanh shop đóng gói kỹ. Chym Ứng quá shop ơi',
  },
  {
    id: 4,
    name: 'Nam Ốc',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 5,
    review:
      'Đây là lần thứ 2 mình mua giày vẫn vừa ý như lần đầu hàng chất lượng vừa chân giao nhanh shop đóng gói kỹ. Chym Ứng quá shop ơi',
  },
];
