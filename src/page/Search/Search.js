import { StyleSheet, Text, View,Image,TextInput } from 'react-native'
import React, { useEffect, useRef } from 'react'
import {colors} from '../../styles/colors';
import {t} from '../../styles/font';

const Search = () => {
  const textInputRef = useRef(null); // Tạo tham chiếu cho TextInput

  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus(); // Gọi focus khi component được mount
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../images/icon_back.png')}
            style={styles.icon_menu}
          />
          <View style={{alignItems: 'center', marginLeft: 80}}>
          
            <Text style={styles.storeLocation}>Search</Text>
          </View>
        </View>
        <Text style={styles.text_cancel}>Cancel</Text>
      </View>
      <View style={styles.searchContainer}>
        <Image
          source={require('../../images/icon_search.png')}
          style={styles.searchIcon}
        />
        <TextInput
        ref={textInputRef}
          style={styles.searchInput}
          placeholder="Looking for shoes"
          placeholderTextColor="#707B81"
        />
      </View>
        {/* <Text style={styles.storeLocation}>Shoes</Text> */}
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
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
        marginTop:20,
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
      text_cancel:{
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
        marginTop:36,
        backgroundColor:'#FFFFFF'
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
})