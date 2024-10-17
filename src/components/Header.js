import {Image, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import React from 'react';

const Header = ({
  ic_left = require('../images/icon_back.png'),
  render_ic_left,
  action_ic_left,
  ic_right,
  render_ic_right,
  action_ic_right,
  title,
  subtitle,
  customStyle,
  ...props
}) => {
  return (
    <View centerV spread width={'100%'} row style={customStyle} {...props}>
      <View style={{width: 44, height: 44}}>
        {render_ic_left ? (
          render_ic_left
        ) : (
          <TouchableOpacity onPress={action_ic_left}>
            <Image source={ic_left} style={styles.ic_action} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{width: 'auto'}}>
        {subtitle ? (
          <View style={styles.containerTitle}>
            <Text>{subtitle}</Text>
            <Text>{title}</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.textBig}>{title}</Text>
          </View>
        )}
      </View>
      <View style={{width: 44, height: 44}}>
        {render_ic_right || ic_right ? (
          render_ic_right
        ) : ic_right ? (
          <TouchableOpacity onPress={action_ic_right}>
            <Image source={ic_right} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textBig: {
    color: '#1A2530',
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: '500',
    lineHeight: 20,
    wordWrap: 'break-word',
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  ic_action: {
    width: 44,
    height: 44,
  },
});
