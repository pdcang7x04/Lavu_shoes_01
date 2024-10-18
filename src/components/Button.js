import {Card, Text} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({
  title = 'Button',
  onPress = () => {},
  customStyle = {},
  customTextStyle = {},
  backgroundColor,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        backgroundColor={backgroundColor || '#F15E2B'}
        center
        paddingV-16
        paddingH-32
        borderRadius={999}
        style={customStyle}
        {...props}>
        <Text style={[styles.text_button, styles.text_button]}>{title}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text_button: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 22,
    wordWrap: 'break-word',
  },
});
