import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextGray,
  SmallText,
  Text20,
  Text25,
} from '../../components/MyText';
import {COLORS} from '../../styles';
import Input from '../../components/Input';
import Input2 from '../../components/Input2';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import OtpInputs from 'react-native-otp-inputs';

const SetNewPassswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [otp, setOtp] = React.useState('');
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/bgImg.jpg')}>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          paddingHorizontal: 15,
        }}>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <BigText style={{marginBottom: 10}}>CoPePod</BigText>
          <MediumText>Forgot Password?</MediumText>

          <RegularTextGray style={{marginTop: 20}}>
            Reset Your Password and Regain Access to Your
          </RegularTextGray>
          <RegularTextGray style={{marginBottom: 30}}>Account.</RegularTextGray>

          <Input2 placeholder="New Password" />
          <Input2 placeholder="Repeat Password" />
        </View>

        <PrimaryBtn
          onPress={() => navigation.navigate('Login')}
          containerStyle={{marginTop: 50}}
          text="CHANGE PASSWORD"
        />
      </View>
    </ImageBackground>
  );
};

export default SetNewPassswordScreen;
