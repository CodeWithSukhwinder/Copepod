import {StyleProp, TextStyle, Text, Platform} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {FONTS} from '../../assets/fonts';

type Props = {
  children: string | React.ReactNode | any;
  style?: StyleProp<TextStyle>;
  bold?: boolean;
};

const FONT = FONTS.Roboto;
const fontFamily = (bold?: boolean) => {
  if (Platform.OS === 'ios') {
    return FONT.name;
  } else {
    if (bold) {
      return FONT.bold;
    }
    return FONT.regular;
  }
};

export const RegularText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 15,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: fontFamily(bold),
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const RegularTextGray = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 15,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: fontFamily(bold),
          opacity: 0.8,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const TitleText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 18,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: fontFamily(bold),
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export const TitleTextGray = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 18,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: fontFamily(bold),
          opacity: 0.8,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const SmallText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 11,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: fontFamily(bold),
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const MediumText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 22,
          fontWeight: bold ? '700' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export const MediumTextGray = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 22,
          fontWeight: bold ? '700' : 'normal',
          opacity: 0.8,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const BigText = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.primary,
          fontSize: 40,
          fontWeight: bold ? '700' : 'normal',
          fontFamily: fontFamily(bold),
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const Text25 = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 25,
          fontWeight: bold ? '700' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export const Text25G = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 25,
          fontWeight: bold ? '700' : 'normal',
          opacity: 0.8,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export const Text20 = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.white,
          fontSize: 20,
          fontWeight: bold ? '700' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export const Text20G = ({children, style, bold}: Props) => {
  return (
    <Text
      style={[
        {
          color: COLORS.grey,
          fontSize: 20,
          fontWeight: bold ? '700' : 'normal',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
