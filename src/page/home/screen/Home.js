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
import { brands } from '../component/Item_brand';
import { newArrivals, popularShoes } from '../component/Item_products';
import { getBrand } from '../../../redux/brand/BrandAPI';
import AxiosInstance from '../../../helper/AxiosInstance';
import { mainstack } from '../../../navigation/mainstack';

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector

const Home = (props) => {
  const { navigation } = props;
  const [DataBrand, setDataBrand] = useState([])
  const [DataProduct, setDataProduct] = useState([])
  const [selectedBrandId, setSelectedBrandId] = useState('');


  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const fetchGetBrand = async () => {
    try {
      const response = await AxiosInstance().get('/brands/getBrand');
      if (response.status) {
        fetchGetProduct(response?.data[0]._id)
        setDataBrand(response.data)

      }
    } catch (error) {
      console.log(error)
    }
  }


  const fetchGetProduct = async (brandId) => {
    try {
      const response = await AxiosInstance().get(`/products/getProductByBrand/${brandId}`);

      if (response.status) {
        setDataProduct(response.data)
        setSelectedBrandId(brandId)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    fetchGetBrand()

  }, [])

  const handleBrand = (brandId) => {
    setSelectedBrandId(brandId)
    fetchGetProduct(brandId)
    console.log(selectedBrandId)
  }





  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          
          <TouchableOpacity onPress={() => navigation.navigate(mainstack.accountAndSetting)}>
            <Image
              source={require('../../../images/icon_menu.png')}
              style={styles.icon_menu}
            />
          </TouchableOpacity>
         
          <View style={{ alignItems: 'center', marginLeft: 80 }}>
            <Text style={styles.storeLabel}>Store location</Text>
            <Text style={styles.storeLocation}>Mondolibug, Sylhet</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(mainstack.cart)}>
        <Image
          source={require('../../../images/icon_cart.png')}
          style={styles.icon}
        />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer} onPress={() => navigation.navigate(mainstack.search)}>
        <Image
          source={require('../../../images/icon_search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Looking for shoes"
          placeholderTextColor="#707B81"
          onFocus={() => navigation.navigate(mainstack.search)}
        />
      </View>
      <View style={{ width: "100%", height: 'auto' }}>
        <FlatList
          data={DataBrand}
          renderItem={({ item }) => <BrandItem item={item} handleBrand={handleBrand} />}
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.brandList}
        />
      </View>

      <View style={styles.flatlistProduct}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Popular Shoes</Text>
          <Text style={styles.seeAllText} onPress={() => navigation.navigate(mainstack.bestSeller, { brandId: selectedBrandId })}>
            See all
          </Text>
        </View>
        <FlatList
          data={DataProduct.slice(0, 2)}
          renderItem={({ item }) => <ShoeItem item={item} />}
          keyExtractor={(item) => item._id}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
        // contentContainerStyle={styles.shoeList}
        />
      </View>


      <View style={[styles.sectionContainer, { width: '100%' }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          {/* <Text style={styles.seeAllText}>See all</Text> */}
        </View>
        <FlatList
          style={{ width: '100%', backgroundColor: '#FFFFFF' }}
          data={DataProduct.filter(item => item.status === 4).slice(0, 1)}
          renderItem={ShoeItem2}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  // Styles remain the same as before
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
    padding: 30,
    marginTop:10,

  },
  header: {

    marginTop: 10,
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
  icon: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  icon_menu: {
    width: 28.5,
    height: 24,
    marginRight: 10,
  },
  storeLabel: {
    fontSize: 12,
    fontWeight: '100',
    color: '#707B81',
    fontFamily: t.Roboto_Bold,
  },
  storeLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2530',
    fontFamily: t.Roboto_Bold,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,

    backgroundColor: '#FFFFFF',
    marginTop: 10,
  },
  searchIcon: {

    backgroundColor: '#FFFFFF'
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
    fontWeight: 'bold',


  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


  },
  flatlistProduct: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A2530',
    fontFamily: t.Roboto_Bold,
    marginTop: 10,
  },
  seeAllText: {
    fontSize: 16,
    color: colors.orange1,
  },
  shoeList: {
    paddingVertical: 10,
  },



  sectionContainer: {
    marginBottom: 20,

  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A2530',
    fontFamily: t.Roboto_Bold,
  },
  seeAllText: {
    fontSize: 16,
    color: colors.orange1,
  },
  shoeList: {
    paddingVertical: 10,
  },
  brandList: {
    paddingVertical: 10,
    paddingRight: 30,
  },

});