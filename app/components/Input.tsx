import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {RegularText, SmallText, TitleText} from './MyText';
import {COLORS} from '../styles';

type InputProps = {
  placeholder: string;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: any;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  onBlur?: any;
};
const Input = ({
  placeholder,
  inputStyle,
  inputWrapperStyle,
  value,
  placeholderTextColor,
  onChangeText,
  secureTextEntry,
  onBlur,
}: InputProps) => {
  return (
    <View style={[{width: '100%'}, inputWrapperStyle, {marginTop: 10}]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        style={[
          {
            borderColor: COLORS.borderColour,
            borderWidth: 1,
            height: 65,
            borderRadius: 7,
            color: 'white',
            paddingLeft: 20,
            fontSize: 16,
          },
          inputStyle,
        ]}
      />
    </View>
  );
};

export default Input;
