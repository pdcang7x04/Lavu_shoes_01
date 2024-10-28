import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
                renderItem={({ item }) => <ListOnboard item={item} />}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
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
});