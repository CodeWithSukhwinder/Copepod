import {
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {RegularText, Text20G, Text25} from '../../components/MyText';
import {COLORS} from '../../styles';
import Input from '../../components/Input';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import MainLayout from '../../components/MainLayout';
import SecondaryBtn from '../../components/SecondaryBtn';

const SignUpScreen = () => {
  const IMAGE =
    'https://e7.pngegg.com/pngimages/753/432/png-clipart-user-profile-2018-in-sight-user-conference-expo-business-default-business-angle-service-thumbnail.png';

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/bgImg.jpg')}>
      <MainLayout>
        <View style={{flex: 1, width: '100%', height: '100%'}}>
          <ScrollView style={{flex: 1}}>
            <View style={{marginHorizontal: 15}}>
              <View style={{alignItems: 'center'}}>
                <View style={styles.profileConatiner}></View>
                <Text25>
                  <Text25 style={{color: COLORS.primary}}>Sign up</Text25> now
                  and start streaming!
                </Text25>
                <Text20G style={{marginVertical: 10, marginBottom: 20}}>
                  Unlock a world of entertainment
                </Text20G>
              </View>

              <Input placeholder="Name, Last name" />
              <Input placeholder="Phone Number" />
              <Input placeholder="E-mail address" />
              <Input placeholder="Country" />
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
                <RegularText>Have an account?</RegularText>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <RegularText>Sign In</RegularText>
                </TouchableOpacity>
              </View>

              <PrimaryBtn onPress={() => navigation.goBack()} text="SIGN UP" />
              {/* <SecondaryBtn text="GUEST LOGIN" /> */}
            </View>
          </ScrollView>
        </View>
      </MainLayout>
    </ImageBackground>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  profileConatiner: {
    height: 100,
    width: 100,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    borderColor: 'gray',
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
