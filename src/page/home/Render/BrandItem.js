import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';
import { colors } from '../../../styles/colors';

const BrandItem = (props) => {
  const { item, handleBrand, isSelected  } = props;



  return (
    <View style={[
      isSelected(item._id) ? styles.viewSelected : null
    ]}>
    <TouchableOpacity style={[styles.circle,
      {
        width: isSelected(item._id) ? 32 : 44,
        height: isSelected(item._id) ? 32 : 44,
        marginRight: isSelected(item._id) ? 5 : 16,
      }
    ]} 
    onPress={() => handleBrand(item._id, item.name)}>
        <Image source={{ uri: item.image }} style={styles.brandImage} />
    </TouchableOpacity>
    {
      isSelected(item._id) ? 
      <Text style={{
        color: colors.white, fontWeight: '700'
      }}>{item.name}</Text> : null
    }
    </View>
  );
};

const styles = StyleSheet.create({
  viewSelected: {
    // minWidth: 44,
    height: 44,
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F15E2B',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginRight: 16,
  },
  circle: {
    marginRight: 16,
    width: 44, 
    height: 44,
    borderRadius: 30, 
    backgroundColor: '#EEEEEE', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandImage: {
    width: 25,
    height: 13.18,
   
  },
  selected: {
    backgroundColor: 'orange', // Change to orange if selected
  },
});

export default BrandItem;