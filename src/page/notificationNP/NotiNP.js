import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, FlatList } from 'react-native';
import { colors } from '../../styles/colors';
import { t } from '../../styles/font';
import ItemnotiNP from './ItemnotiNP';

const NotiNP = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const scale = scrollY.interpolate({
      inputRange: [-100, 0, 100 * index, 100 * (index + 2)],
      outputRange: [2, 1, 1, 2],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={{ transform: [{ scale }] }}>
        <ItemnotiNP data={item} />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={{}} // Bạn có thể thay thế bằng hình ảnh của bạn
            style={styles.icon_menu}
          />
          <View style={{ alignItems: 'center', marginLeft: 65 }}>
            <Text style={styles.Favourite}>Notifications</Text>
          </View>
        </View>
        <Text style={styles.clearText}>Clear All</Text>
      </View>
      <Text style={styles.dayTest}>Today</Text>
      <Animated.FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
      <Text style={styles.dayTest}>Yesterday</Text>
      <Animated.FlatList
        data={yesterdayNotifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

export default NotiNP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  icon_menu: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  Favourite: {
    alignItems: 'center',
    fontFamily: t.Roboto_Bold,
    fontSize: 20,
    color: colors.black1,
  },
  clearText: {
    fontFamily: t.Roboto_Bold,
    fontSize: 18,
    color: colors.orange1,
  },
  dayTest: {
    fontSize: 18,
    color: 'black',
    marginTop: 26,
    fontFamily: t.Roboto_Bold,
  },
});

const notifications = [
  {
    id: '1',
    message: 'We Have New Products With Offers',
    time: '6 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '2',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '3',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '4',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '5',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '4',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '5',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '4',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '5',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '4',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '5',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '4',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '5',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '4',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '5',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '4',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '5',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '4',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '5',
    message: 'We Have New Products With Offers',
    time: '26 min ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
];

const yesterdayNotifications = [
  {
    id: '6',
    message: 'We Have New Products With Offers',
    time: '4 days ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
  {
    id: '7',
    message: 'We Have New Products With Offers',
    time: '4 days ago',
    image: require('../../images/image.png'),
    originalPrice: '$364.95',
    discountedPrice: '$260.00',
  },
];