import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';

const Line = ({style}: {style?: StyleProp<ViewStyle>}) => {
  return (
    <View
      style={[
        {
          width: '100%',
          backgroundColor: COLORS.borderColour,
          height: 1,
        },
        style,
      ]}
    />
  );
};

export default Line;
