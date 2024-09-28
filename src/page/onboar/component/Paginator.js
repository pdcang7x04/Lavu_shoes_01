import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native';
import React from 'react';
import { colors } from '../../../styles/colors';

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.guideBar}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [8, 35, 8],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 2, 0.8],
                    extrapolate: 'clamp',
                });

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: [colors.grey2, colors.orange1, colors.grey2],
                    extrapolate: 'clamp',
                })

                return (
                    <Animated.View
                        style={[styles.instructionsUnSelected, { width: dotWidth, opacity, backgroundColor: backgroundColor }]}
                        key={i.toString()}
                    />
                );
            })}
        </View>
    );
};

export default Paginator;

const styles = StyleSheet.create({
    guideBar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    instructionsUnSelected: {
        height: 5,
        borderRadius: 16,
        // backgroundColor: colors.grey2,
        marginLeft: 8,
    },
});