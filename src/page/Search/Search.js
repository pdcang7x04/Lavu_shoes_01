import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../styles/colors';
import { t } from '../../styles/font';
import AxiosInstance from '../../helper/AxiosInstance';
import BestSellerItem from '../home/Render/BestSellerItem';
import ShoeItem from '../home/Render/ShoeItem';

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
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          </TouchableOpacity>
          

            <Text style={styles.storeLocation}>Tìm Kiếm</Text>
        <Text style={styles.text_cancel} onPress={() => setSearch("")}>Huỷ</Text>
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
          placeholder="Tìm Kiếm Giày Của Bạn"
          placeholderTextColor="#707B81"

        />
      </View>
      {/* <Text style={styles.storeLocation}>Shoes</Text> */}
      {Search !== '' && (
        <View style={styles.sectionContainer}>
          {DataProduct.length > 0 ? (
            
            <FlatList
            data={DataProduct}
            renderItem={({item}) => <ShoeItem item={item} />}
            keyExtractor={item => item._id}
            numColumns={2}
            // style={styles.shosesitem}
            showsHorizontalScrollIndicator={false}
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
    paddingHorizontal: 20,
    marginTop: 44,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
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
    width: 44,
    height: 44,
  },
  storeLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A2530',
    fontFamily: t.Roboto_Bold,
    flex: 1,
    textAlign: 'center'
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
    marginTop: 24,
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