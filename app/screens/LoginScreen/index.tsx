import {
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  BigText,
  MediumText,
  RegularText,
  RegularTextGray,
} from '../../components/MyText';
import {COLORS} from '../../styles';
import Input from '../../components/Input';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/MainLayout';
import SecondaryBtn from '../../components/SecondaryBtn';

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/bgImg.jpg')}>
      <MainLayout>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}>
          <ScrollView style={{flex: 1}}>
            <View style={{marginHorizontal: 15}}>
              <View style={{alignItems: 'center'}}>
                <BigText style={{marginTop: 35, marginBottom: 100}}>
                  CoPePod
                </BigText>
                <MediumText>
                  <MediumText style={{color: COLORS.primary}}>
                    Sign in{' '}
                  </MediumText>
                  to your account
                </MediumText>
                <RegularTextGray style={{marginVertical: 10, marginBottom: 20}}>
                  Unlock a world of entertainment
                </RegularTextGray>
              </View>

              <Input placeholder="E-mail or Phone Number" />
              <View style={styles.input}>
                <TextInput
                  style={styles.text}
                  placeholder="Password"
                  placeholderTextColor={'gray'}
                  secureTextEntry={showPassword ? false : true}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}>
                  <RegularText style={{color: 'red'}}>
                    {showPassword ? 'HIDE' : 'SHOW'}
                  </RegularText>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  marginBottom: 20,
                }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <RegularText>Sign Up Now</RegularText>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPasssword')}>
                  <RegularText>Forgot password?</RegularText>
                </TouchableOpacity>
              </View>

              <PrimaryBtn
                onPress={() => navigation.navigate('SelectProfile')}
                text="LOGIN"
              />
              {/* <SecondaryBtn text="GUEST LOGIN" /> */}
            </View>
          </ScrollView>
        </View>
      </MainLayout>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    borderColor: COLORS.borderColour,
    borderWidth: 1,
    height: 60,
    borderRadius: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
  },
  text: {
    fontSize: 16,
    flex: 1,
    marginLeft: 5,
    color: 'white',
  },
});
