import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import BrandItem from '../Render/BrandItem';
import ShoeItem from '../Render/ShoeItem';
import ShoeItem2 from '../Render/ShoeItem2';
import AxiosInstance from '../../../helper/AxiosInstance';
import { mainstack } from '../../../navigation/mainstack';

const Home = (props) => {
  const { navigation } = props;
  const [DataBrand, setDataBrand] = useState([]);
  const [DataProduct, setDataProduct] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState('');

  const dispatch = useDispatch();
  const appState = useSelector((state) => state.lavu);

  const fetchGetBrand = async () => {
    try {
      const response = await AxiosInstance().get('/brands/getBrand');
      if (response.status) {
        fetchGetProduct(response?.data[0]._id);
        setDataBrand(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGetProduct = async (brandId) => {
    try {
      const response = await AxiosInstance().get(`/products/getProductByBrand/${brandId}`);
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

  const handleBrand = (brandId) => {
    setSelectedBrandId(brandId);
    fetchGetProduct(brandId);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate(mainstack.accountAndSetting)}>
          <Image source={require('../../../images/image_copy.png')} style={styles.icon_menu} />
        </TouchableOpacity>
        <View style={styles.viewheadertext}>
          <Text style={styles.storeLabel}>Store location</Text>
          <Text style={styles.storeLocation}>Mondolibug, Sylhet</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(mainstack.cart)}>
          <Image source={require('../../../images/icon_cart.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('../../../images/icon_search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Looking for shoes"
          placeholderTextColor="#707B81"
          onFocus={() => navigation.navigate(mainstack.search)}
        />
      </View>

      <FlatList
        data={DataBrand}
        renderItem={({ item }) => <BrandItem item={item} handleBrand={handleBrand} />}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.brandList}
      />

      <View style={styles.flatlistProduct}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Popular Shoes</Text>
          <Text
            style={styles.seeAllText}
            onPress={() => navigation.navigate(mainstack.bestSeller, { brandId: selectedBrandId })}>
            See all
          </Text>
        </View>
        <FlatList
          data={DataProduct.slice(0, 2)}
          renderItem={({ item }) => <ShoeItem item={item} />}
          keyExtractor={(item) => item._id}
          numColumns={2}
          style={styles.shosesitem}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <Text style={styles.sectionTitle1}>New Arrivals</Text>
      <View style={styles.newArrivalsContainer}>
        <FlatList
          data={DataProduct.filter(item => item.status === 4).slice(0, 4)}
          renderItem={ShoeItem2}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}
          style={styles.newArrivalsList}

        />
      </View>
    </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F7F7',
  },
  shosesitem:{
    marginLeft:9,
    alignContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 44,
    height: 44,
  },
  icon_menu: {
    width: 70,
    height: 70,
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
    marginBottom: 20,
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
    marginTop:10,
    flexGrow: 1, 
  },
});