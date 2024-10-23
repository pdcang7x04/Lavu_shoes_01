import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomDialog from '../../components/CustomDialog';
import Button from '../../components/Button';
import {Dialog} from 'react-native-ui-lib';

const BestSellerScreen = () => {
  const GenderDefault = [
    {name: 'Men', value: 0},
    {name: 'Women', value: 1},
    {name: 'Unisex', value: 2},
  ];
  const SizeDefault = [
    {name: 'UK 4.4', value: 0},
    {name: 'US 5.5', value: 1},
    {name: 'UK 6.5', value: 2},
    {name: 'EU 11.5', value: 3},
  ];
  const [isVisibleDialog, setIsVisibleDialog] = useState(false);
  const [selectGender, setSelectGender] = useState(0);
  const [selectSize, setSelectSize] = useState(0);
  const [price] = useState({min: 16, max: 232});

  const handleDismiss = () => {
    setIsVisibleDialog(false);
  };
  const handleGender = Gender => {
    setSelectGender(Gender);
  };
  const handleSize = Size => {
    setSelectSize(Size);
  };
  const handleReset = () => {
    setSelectGender(0);
    setSelectSize(0);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisibleDialog(true)}>
        <Text>BestSellerScreen</Text>
      </TouchableOpacity>
      <Dialog width="100%" bottom visible={isVisibleDialog} onDismiss={handleDismiss}>
        <View style={styles.dialog}>
          <View style={styles.dialog1}>
            <View style={styles.dialog2} />
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>Filters</Text>
            <TouchableOpacity onPress={handleReset}>
              <Text style={styles.textReset}>RESET</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionFilter}>
            <Text style={styles.labelFilter}>Gender</Text>
            <View style={styles.buttonGroup}>
              <FlatList
                data={GenderDefault}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <Button
                    style={styles.button}
                    title={item.name}
                    backgroundColor={
                      selectGender === item.value ? '#F15E2B' : '#D9D9D9'
                    }
                    textColor={
                        selectGender === item.value ? 'white' : 'black' // Màu chữ khi được chọn và không được chọn
                      }
                    onPress={() => {
                      handleGender(item.value);
                    }}
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.sectionFilter}>
            <Text style={styles.labelFilter}>Size</Text>
            <View style={styles.buttonGroup}>
              <FlatList
                data={SizeDefault}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <Button
                    style={styles.button}
                    title={item.name}
                    backgroundColor={
                      selectSize === item.value ? '#F15E2B' : '#D9D9D9'
                    }
                    textColor={
                        selectSize === item.value ? 'white' : 'black' }
                    onPress={() => handleSize(item.value)}
                  />
                )}
              />
            </View>
          </View>

          <View style={styles.sectionFilter}>
            <Text style={styles.labelFilter}>Price</Text>
            <View style={styles.priceContainer}>
              <View style={styles.priceBox}>
                <Text style={styles.priceText}>${price.min}</Text>
              </View>
              <Text style={styles.dash}> - </Text>
              <View style={styles.priceBox}>
                <Text style={styles.priceText}>${price.max}</Text>
              </View>
            </View>
            <Button
              style={styles.apply}
              textColor={'white'}
              title="Apply"
              onPress={handleDismiss}
            />
          </View>
        </View>
      </Dialog>
    </View>
  );
};

export default BestSellerScreen;

const styles = StyleSheet.create({
    dialogcontainer: {
        width: '100%',
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    position: 'relative',
  },
  dialog: {
    width: '100%',
    marginHorizontal: 0,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  dialog1: {
    paddingVertical: 6,
    backgroundColor: 'transparent',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  dialog2: {
    backgroundColor: '#d9d9d9',
    width: 42,
    height: 4,
    borderRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    left: '42%',
    marginTop: 15,
    color: '#1A2530',
  },
  textReset: {
    position: 'absolute',
    right: 0,
    color: '#707B81',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionFilter: {
    marginBottom: 20,
  },
  labelFilter: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    textColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 19,
    fontSize: 14,
    height: 40,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  priceBox: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dash: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  apply: {
    backgroundColor: '#F15E2B',
    borderRadius: 24,
    justifyContent: 'center',
    marginTop: 20,
  },
});
