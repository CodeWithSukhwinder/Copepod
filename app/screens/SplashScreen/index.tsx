import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import {BigText, RegularText, SmallText} from '../../components/MyText';
import {COLORS} from '../../styles';
// import {useSelector} from 'react-redux';
// import {tokenSelector} from '../../redux/feature/auth/authSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import PrimaryBtn from '../../components/PrimaryBtn';

const SplashScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 5000);
  }, []);
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/splashImg.png')}>
      <View style={{flex: 1}}></View>
    </ImageBackground>
  );
};

export default SplashScreen;
