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

const Comment = (props) => {
  const {route} = props
  const { params } = route
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đánh Giá</Text>
      <FlatList
        data={params?.comment}
        keyExtractor={(item) => item._id}
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
    paddingTop: 52
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#1A2530',
  },
});
