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
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../styles/colors';
import {t} from '../../../styles/font';
import {brands} from '../component/Item_brand';
import {newArrivals, popularShoes} from '../component/Item_products';

const Home = props => {
  const {navigation} = props;

  const renderBrandItem = ({item}) => (
    <TouchableOpacity style={styles.brandButton}>
      <Image source={item.image} style={styles.brandImage} />
  
    </TouchableOpacity>
  );

  const renderShoeItem = ({item}) => (
    <View style={[styles.shoeCard, {position: 'relative'}]}>
      <Image source={item.image} style={styles.shoeImage} />
      <View style={{ textAlign: 'left', width:'100%' }}>
        <Text style={styles.TextBestSeller}>BEST SELLER</Text>
        <Text style={styles.shoeName}>{item.name}</Text>
        <Text style={styles.shoePrice}>{item.price}</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.addButton,
          {position: 'absolute', bottom: 35, right: 30},
        ]}>
        <Image source={require('../../../images/add.png')} />
      </TouchableOpacity>
    </View>
  );

  const renderShoeItem2 = ({item}) => (
    <View
      style={{
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
       
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 350,
        padding: 10,
        borderRadius:10
      }}>
      <View style={{flex: 1}}>
        <Text style={styles.TextBestSeller}>Best Choice</Text>
        <Text style={styles.shoeName}>{item.name}</Text>
        <Text style={styles.shoePrice}>{item.price}</Text>
      </View>
      <Image source={item.image} style={[styles.shoeImage]} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../../images/icon_menu.png')}
            style={styles.icon_menu}
          />
          <View style={{alignItems: 'center', marginLeft: 80}}>
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
          placeholderTextColor="#999"
        />
      </View>

   
      <FlatList
        data={brands}
        renderItem={renderBrandItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.brandList}
      />

      <View style={styles.sectionContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Popular Shoes</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <FlatList
          data={popularShoes}
          renderItem={renderShoeItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.shoeList}
        />
      </View>

      <View style={[styles.sectionContainer, {width: '100%'}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>New Arrivals</Text>
          <Text style={styles.seeAllText}>See all</Text>
        </View>
        <FlatList
          style={{width: '100%'}}
          data={newArrivals}
          renderItem={renderShoeItem2}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.shoeList}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#555',
    fontFamily: t.Roboto_Bold,
  },
  storeLocation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: t.Roboto_Bold,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
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
    color: '#000',
    fontFamily: t.Roboto_Bold,
  },
  seeAllText: {
    fontSize: 16,
    color: colors.orange1,
  },
  shoeList: {
    paddingVertical: 10,
  },
  shoeCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    width: 157,
    height:201,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Thêm cho Android
  },
  shoeImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  TextBestSeller: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.orange1,
    marginBottom: 5,
  },
  shoeName: {
    fontSize: 14,
    fontWeight: 'bold',
    // textAlign: 'center',
    marginBottom: 5,
    color:colors.black1,
    fontFamily: t.Roboto_Bold,
  },
  shoePrice: {
    fontSize: 12,
    color: colors.black1,
    marginBottom: 5,
    color:colors.black1,
    fontFamily: t.Roboto_Bold,
  },
  addButton: {
    width: 34,
    height: 35,
    marginLeft: 50,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  brandButton: {
    alignItems: 'center',
    marginRight: 15,
  },
  brandImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.grey1,
    marginBottom: 5,
  },
  brandName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
});
