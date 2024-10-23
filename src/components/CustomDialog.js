import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Dialog, Colors, Text, Card} from 'react-native-ui-lib';
const CustomDialog = ({
  visible,
  onDismiss,
  height,
  panDirection = Dialog.directions.DOWN,
  containerStyle,
  renderPannableHeader,
  pannableHeaderProps,
  supportedOrientations,
  ignoreBackgroundPress,
  customHeader,
  children,
  isDisable = false,
  title,
  titleStyle = {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
  },
  ...props
}) => {
  return (
    <Dialog
      visible={visible}
      onDismiss={onDismiss}
      height={height}
      panDirection={isDisable ? null : panDirection}
      containerStyle={[styles.dialog, containerStyle]}
      renderPannableHeader={renderPannableHeader}
      pannableHeaderProps={pannableHeaderProps}
      supportedOrientations={supportedOrientations}
      ignoreBackgroundPress={ignoreBackgroundPress}
      {...props}>
      {customHeader ? (
        customHeader
      ) : (
        <Card
          center
          borderRadius={16}
          backgroundColor={Colors.white}>
          <View
            backgroundColor="#d9d9d9"
            width={42}
            height={4}
            borderRadius={4}
            marginV-8
          />
          {!!title && (
            <Text marginV-12 highlight_accent style={titleStyle}>
              {title}
            </Text>
          )}
        </Card>
      )}
      {children}
    </Dialog>
  );
};

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: Colors.white,
  },
});

export default CustomDialog;