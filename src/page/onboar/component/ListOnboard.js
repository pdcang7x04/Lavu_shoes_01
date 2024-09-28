import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../styles/colors'
import { t } from '../../../styles/font'
import { mainstack } from '../../../navigation/mainstack'

const ListOnboard = (props) => {
    const { navigation, item } = props
    return (
        <View >
            <Image
                source={item.image}
                style={styles.ImageBackground}
            />

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
        </View>
    )
}

export default ListOnboard

const styles = StyleSheet.create({
    ImageBackground: {
        width: 450,
        height: 600,
    },
    title: {
        fontFamily: t.Roboto_Bold,
        fontWeight: 'bold',
        fontSize: 40,
        lineHeight: 56,
        color: colors.black1,
        width: 292,
        marginStart: 20,
    },
    content: {
        fontFamily: t.Roboto_Regular,
        fontSize: 20,
        lineHeight: 32,
        color: colors.grey1,
        width: 292,
        marginStart: 20,
        marginTop: 8,
    },


})