import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {MediumText, RegularText, SmallText, TitleText} from './MyText';
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
  onPress?: () => void;
};
const Input2 = ({
  placeholder,
  inputStyle,
  inputWrapperStyle,
  value,
  placeholderTextColor,
  onChangeText,
  secureTextEntry,
  onBlur,
  onPress,
}: InputProps) => {
  return (
    <View
      style={[
        inputWrapperStyle,
        {width: '100%'},
        {marginTop: 10},
        {flexDirection: 'row'},
        {borderColor: 'gray'},
        {borderWidth: 1},
        {height: 60},
        {borderRadius: 7},
        {justifyContent: 'space-between'},
        {paddingHorizontal: 20},
        {alignItems: 'center'},
      ]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        style={[
          {
            color: 'white',
            paddingLeft: 4,
          },
          inputStyle,
        ]}
      />
      <TouchableOpacity onPress={onPress}>
        <RegularText style={{color: 'red'}}>SHOW</RegularText>
      </TouchableOpacity>
    </View>
  );
};

export default Input2;
