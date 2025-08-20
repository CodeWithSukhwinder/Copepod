import {View, ImageBackground} from 'react-native';
import React from 'react';
import {
  BigText,
  RegularText,
  RegularTextGray,
  Text20,
  TitleText,
} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import OtpInputs from 'react-native-otp-inputs';

const VerifyOtpScreen = () => {
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
        }}>
        <View style={{alignItems: 'center', marginTop: 100}}>
          <BigText style={{marginBottom: 15}}>CoPePod</BigText>
          <TitleText>SECURELY VERIFY YOUR ACCOUNT</TitleText>
          <TitleText>WITH A ONE-TIME PASSWORD (OTP)</TitleText>

          <RegularTextGray style={{marginTop: 20}}>
            Enter 6 digit verification code we sent to your phone
          </RegularTextGray>

          <RegularTextGray style={{marginBottom: 10}}>
            number +1 (617) 397-8483
          </RegularTextGray>

          <OtpInputs
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}
            autofillFromClipboard={false}
            inputContainerStyles={{
              borderRadius: 5,
              marginTop: 30,
              margin: 5,
              borderWidth: 1,
              borderColor: 'gray',
            }}
            inputStyles={{
              backgroundColor: 'transparent',
              width: 45,
              height: 45,
              fontSize: 18,
              textAlign: 'center',
              color: 'white',
              fontWeight: '700',
            }}
            handleChange={code => setOtp(code)}
            numberOfInputs={6}
          />

          <RegularTextGray
            style={{textAlign: 'center', marginTop: 25, fontSize: 14}}>
            Please add your confirmnation code above, if you didn’t receive,
            please click on the link and we will
            <RegularText style={{textDecorationLine: 'underline'}}>
              {' '}
              Send again
            </RegularText>
          </RegularTextGray>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginHorizontal: 15,
            marginBottom: 30,
          }}>
          <PrimaryBtn
            onPress={() => navigation.navigate('SetNewPasssword')}
            text="Verify"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default VerifyOtpScreen;
