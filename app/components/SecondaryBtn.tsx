import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {RegularText} from './MyText';

type Props = {
  text: string;
  loading?: boolean;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const SecondaryBtn = ({
  text,
  loading,
  onPress,
  containerStyle,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: 65,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: 'white',
          marginTop: 10,
        },
        containerStyle,
      ]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={'#FFF'} />
      ) : (
        <RegularText style={[{color: 'white', fontSize: 18}, textStyle]}>
          {text}
        </RegularText>
      )}
    </TouchableOpacity>
  );
};

export default SecondaryBtn;
