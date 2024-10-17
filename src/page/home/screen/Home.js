import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
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

const useAppDispatcher = () => useDispatch()
const useAppSelector = useSelector

const Home = (props) => {
  const { navigation } = props;
  const [DataBrand, setDataBrand] = useState([])
  const [DataProduct, setDataProduct] = useState([])

  const dispatch = useDispatch()
  const appState = useAppSelector((state) => state.lavu)

  const fetchGetBrand = async () => {
    try {
      const response = await AxiosInstance().get('/brands/getBrand');
      if (response.status) {
        fetchGetProduct(response?.data[0]._id)
        return await setDataBrand(response.data)
        
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
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect( () => {
    fetchGetBrand()
    
    }, [])
  




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../../images/icon_menu.png')}
            style={styles.icon_menu}
          />
          <View style={{ alignItems: 'center', marginLeft: 80 }}>
            <Text style={styles.storeLabel}>Store location</Text>
            <Text style={styles.storeLocation}>Mondolibug, Sylhet</Text>
          </View>
        </View>
        <Image
          source={require('../../../images/icon_cart.png')}
          style={styles.icon}
        />
      </View>

      <View style={styles.searchContainer}>
        <Image
          source={require('../../../images/icon_search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Looking for shoes"
          placeholderTextColor="#707B81"
        />
      </View>

      <FlatList
        data={DataBrand}
        renderItem={({ item }) => <BrandItem item={item} />}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
      // contentContainerStyle={styles.brandList}
      />

      <View style={styles.sectionContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Popular Shoes</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <FlatList
          data={DataProduct.slice(0, 2)}
          renderItem={({item}) => <ShoeItem item={item}/>}
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={styles.shoeList}
        />
      </View>

      <View style={[styles.sectionContainer, { width: '100%' }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <FlatList
          style={{ width: '100%', backgroundColor: '#FFFFFF' }}
          data={DataProduct.slice(0, 1)}
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
});