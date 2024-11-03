/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../styles/colors';
import {t} from '../../../styles/font';
import BrandItem from '../Render/BrandItem';
import ShoeItem from '../Render/ShoeItem';
import ShoeItem2 from '../Render/ShoeItem2';
import AxiosInstance from '../../../helper/AxiosInstance';
import {mainstack} from '../../../navigation/mainstack';

const Home = props => {
  const {navigation} = props;
  const [DataBrand, setDataBrand] = useState([]);
  const [DataProduct, setDataProduct] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState('');
  const [selectedNameBrand, setselectedNameBrand] = useState('');

  const dispatch = useDispatch();
  const appState = useSelector(state => state.lavu);

  const fetchGetBrand = async () => {
    try {
      const response = await AxiosInstance().get('/brands/getBrand');
      if (response.status) {
        fetchGetProduct(response?.data[0]?._id, response?.data[0].name);
        // selectedNameBrand(response?.data[0]?.name)
        setDataBrand(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGetProduct = async (brandId, name) => {
    try {
      const response = await AxiosInstance().get(
        `/products/getProductByBrand/${brandId}`,
      );
      if (response.status) {
        setDataProduct(response.data);
        setSelectedBrandId(brandId);
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetBrand();
  }, []);

  const handleBrand = (brandId, name) => {
    setSelectedBrandId(brandId);
    setselectedNameBrand(name)
    fetchGetProduct(brandId);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}> 
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              borderRadius: 40,
              backgroundColor: colors.white
            }}
            onPress={() => navigation.navigate(mainstack.accountAndSetting)}>
            <Image
              source={require('../../../images/image_copy.png')}
              style={styles.icon_menu}
            />
          </TouchableOpacity>
          <View style={styles.viewheadertext}>
            <Text style={styles.storeLabel}>Vị Trí Cửa Hàng</Text>
            <Text style={styles.storeLocation}>Trần Hưng Đạo, Q1</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate(mainstack.cart)}>
            <Image
              source={require('../../../images/icon_cart.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Image
            source={require('../../../images/icon_search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Đang tìm giày...."
            placeholderTextColor="#707B81"
            onFocus={() => navigation.navigate(mainstack.search)}
          />
        </View>

        <FlatList
          data={DataBrand}
          renderItem={({item}) => (
            <BrandItem 
              item={item} 
              handleBrand={handleBrand} 
              isSelected={(value) => selectedBrandId == value}  
            />
          )}
          keyExtractor={item => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={styles.brandList}
        />

        <View style={{marginTop: 24, alignItems: 'center', width: '100%'}}>
          <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>Giày Phổ Biến</Text>
            <Text
              style={styles.seeAllText}
              onPress={() =>
                navigation.navigate(mainstack.bestSeller, {
                  brandId: selectedBrandId,
                  name: selectedNameBrand
                })
              }>
              Tất Cả
            </Text>
          </View>

          <FlatList
            data={DataProduct.slice(0, 2)}
            renderItem={({item}) => <ShoeItem item={item} />}
            keyExtractor={item => item._id}
            numColumns={2}
            // style={styles.shosesitem}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Phiên Bản giới hạn</Text>
          {/* <Text
            style={styles.seeAllText}
            onPress={() =>
              navigation.navigate(mainstack.bestSeller, {
                brandId: selectedBrandId,
              })
            }>
            Tất Cả
          </Text> */}
        </View>
        <View style={{}}>
          <FlatList
            data={DataProduct.filter(item => item.status === 4).slice(0, 4)}
            renderItem={ShoeItem2}
            keyExtractor={item => item._id}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
            style={styles.newArrivalsList}
          />
        </View>

        <View style={{height: 100}}/>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewheadertext: {
    alignItems:"center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F7F7F7',
  },
  shosesitem: {
    marginLeft: 9,
    alignContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 44,
  },
  icon: {
    width: 44,
    height: 44,
  },
  icon_menu: {
    width: 44,
    height: 44,
  },
  storeLabel: {
    fontSize: 12,
    color: '#707B81',
  },
  storeLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2530',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 32,
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
  },
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A2530',
    marginTop: 10,
  },
  sectionTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A2530',
    marginTop: 0,
  },
  seeAllText: {
    fontSize: 16,
    color: colors.orange1,
  },
  brandList: {
    paddingVertical: 10,
    paddingRight: 30,
  },
  newArrivalsContainer: {
    maxHeight: 300,
  },
  newArrivalsList: {
    marginTop: 10,
    flexGrow: 1,
  },
});
