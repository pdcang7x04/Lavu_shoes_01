import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../styles/colors';
import { t } from '../../styles/font';
import AxiosInstance from '../../helper/AxiosInstance';
import BestSellerItem from '../home/Render/BestSellerItem';

const Search = (props) => {
  const {navigation} = props
  const textInputRef = useRef(null); // Tạo tham chiếu cho TextInput
  const [DataProduct, setDataProduct] = useState([])
  const [Search, setSearch] = useState('')

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
      fetchGetProduct(Search) // Gọi focus khi component được mount
    }
  }, [Search]);

  const fetchGetProduct = async (search) => {
    try {
      const response = await AxiosInstance().get(`/products/getProduct?page&limit=&keywords=${search}`);

      if (response.status) {
        setDataProduct(response.data.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          <View style={{ alignItems: 'center', marginLeft: 80 }}>

            <Text style={styles.storeLocation}>Search</Text>
          </View>
        </View>
        <Text style={styles.text_cancel} onPress={() => navigation.goBack()}>Cancel</Text>
      </View>
      <View style={styles.searchContainer}>
        <Image
          source={require('../../images/icon_search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          value={Search}
          onChangeText={value => setSearch(value)}
          ref={textInputRef}
          style={styles.searchInput}
          placeholder="Looking for shoes"
          placeholderTextColor="#707B81"

        />
      </View>
      {/* <Text style={styles.storeLocation}>Shoes</Text> */}
      {Search !== '' && (
        <View style={styles.sectionContainer}>
          {DataProduct.length > 0 ? (
            <FlatList
              data={DataProduct}
              renderItem={({ item }) => <BestSellerItem item={item} />}
              keyExtractor={item => item._id}
              numColumns={2}
            />
          ) : (
            <Text style={styles.noResultsText}>No results found.</Text>
          )}
        </View>
      )}
    </View>

    
  )
}

export default Search

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
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
  storeLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2530',
    fontFamily: t.Roboto_Bold,
    marginLeft: 30,
  },
  text_cancel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F15E2B',
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
    marginTop: 36,
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
    color: colors.black1

  },
})