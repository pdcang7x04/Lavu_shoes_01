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
    {name: 'US 4.4', value: 0},
    {name: 'US 5.5', value: 1},
    {name: 'US 6.5', value: 2},
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
      <Dialog bottom visible={isVisibleDialog} onDismiss={handleDismiss}>
        <View style={styles.dialog}>
          <View style={styles.dialog1}>
            <View style={styles.dialog2} />
          </View>
          <View style={styles.header}>
            <Text>Filter</Text>
            <Text>Reset</Text>
          </View>
          <View>
            <Text>Gender</Text>
            <View style={styles.buttonGroup}>
              <FlatList
                data={GenderDefault}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <Button
                    title={item.name}
                    backgroundColor={
                      selectGender === item.value ? '#F15E2B' : '#D9D9D9'
                    }
                    onPress={() => {
                      handleGender(item.value);
                    }}
                  />
                )}
              />
            </View>
          </View>
          <View>
            <Text>Size</Text>
            <View>
              <FlatList
                data={SizeDefault}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                  <Button
                    title={item.name}
                    backgroundColor={
                      selectSize === item.value ? '#F15E2B' : '#D9D9D9'
                    }
                    onPress={() => handleSize(item.value)}
                  />
                )}
              />
            </View>
          </View>
          <View>
            <Text>Price</Text>

          </View>
          <Button onPress={handleDismiss} />
        </View>
      </Dialog>
    </View>
  );
};

export default BestSellerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dialog: {
    padding: 16,
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
  buttonGroup: {},
});
