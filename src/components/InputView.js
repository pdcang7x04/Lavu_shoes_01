import {Card, Text, View} from 'react-native-ui-lib';
import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const InputView = ({value, onChangeText, security}) => {
  return (
    <Card
      bg-white
      enableShadow={false}
      borderRadius={9999}
      paddingH-14
      paddingV-8>
      <TextInput
        style={styles.text}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={security}
      />
    </Card>
  );
};

export default InputView;

const styles = StyleSheet.create({
  text: {
    color: '#1A2530',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '900',
    textTransform: 'lowercase',
    lineHeight: 16,
    wordWrap: 'break-word',
  },
});