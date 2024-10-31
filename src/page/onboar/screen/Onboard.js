import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors } from '../../../styles/colors';
import { t } from '../../../styles/font';
import { mainstack } from '../../../navigation/mainstack';
import slide from '../component/slide';
import Paginator from '../component/Paginator';
import ListOnboard from '../component/ListOnboard';

const Onboard = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>

            <FlatList
                data={slide}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                renderItem={({ item }) =>
                    <View >
                        <Image
                            source={item.image}
                            style={styles.ImageBackground}
                        />

                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.content}>{item.content}</Text>
                    </View>
                }
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}

                // contentContainerStyle={{ paddingHorizontal: 16 }} // Thêm khoảng cách bên trái và phải
                snapToAlignment="center" // Căn giữa ảnh khi cuộn
            />

            <View style={styles.viewBottom}>
                <Paginator data={slide} scrollX={scrollX} />
                <TouchableOpacity
                    onPress={() => navigation.navigate(mainstack.login)}
                    style={styles.viewButton}
                >
                    <Text style={styles.textButton}>Bắt Đầu</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white1,
        flex: 1,
    },
    viewBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 40,
    },
    viewButton: {
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: colors.orange1,
    },
    textButton: {
        fontFamily: t.Roboto_Medium,
        fontSize: 18,
        lineHeight: 22,
        color: colors.white,
        paddingHorizontal: 32,
    },

    ImageBackground: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.6,
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

});