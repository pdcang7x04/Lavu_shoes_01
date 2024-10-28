/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const CommentItem = ({item}) => {
  const [selectedRating, setSelectedRating] = useState(item.rating);

  const RenderStars = () => (
    <View style={styles.rating}>
      {Array.from({length: 5}).map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedRating(index + 1)}>
          <Text style={styles.star}>{index < selectedRating ? '★' : '☆'}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.reviewContainer}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.reviewContent}>
        <Text style={styles.name}>{item.name}</Text>
        <RenderStars />
        <Text style={styles.reviewText}>{item.review}</Text>
      </View>
    </View>
  );
};

export default CommentItem;

const styles = StyleSheet.create({
  reviewContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2530',
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  star: {
    fontSize: 24,
    marginRight: 4,
    color: '#FBBF24',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  reviewText: {
    fontSize: 14,
    color: '#707B81',
  },
});
