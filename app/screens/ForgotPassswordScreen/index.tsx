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

const ForgotPassswordScreen = () => {
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
        <View style={{alignItems: 'center', marginTop: 180}}>
          <BigText style={{marginBottom: 10}}>CoPePod</BigText>
          <MediumText style={{marginBottom: 20}}>
            Enter Your Email or Phone Number
          </MediumText>

          <Input placeholder="Enter you number or email" />
        </View>

        <PrimaryBtn
          onPress={() => navigation.navigate('VerifyOtp')}
          containerStyle={{marginTop: 50}}
          text="SEND OTP"
        />
      </View>
    </ImageBackground>
  );
};

export default ForgotPassswordScreen;
