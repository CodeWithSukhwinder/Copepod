import React, {useState} from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import {RootStackParams} from './types';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOCAL_KEYS} from '../utils/helper';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import VerifyOtpScreen from '../screens/VerifyOtpScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassswordScreen from '../screens/ForgotPassswordScreen';
import TermsAndConditionScreen from '../screens/TermsAndConditions';
import SetNewPassswordScreen from '../screens/SetNewPassword';
import SelectProfileScreen from '../screens/ProfileSelectScreen';
import {tokenSelector} from '../redux/feature/auth/authSlice';
import {RootState} from '../redux';
import OnBoardingScreen from '../screens/OnBoardingScreen';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootNavigator = ({localAuth, isFirstTimeOpen}: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const token = useSelector(tokenSelector);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!token ? (
        <>
          {isFirstTimeOpen ? (
            <>
              <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
            </>
          ) : null}

          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
          <Stack.Screen
            name="ForgotPasssword"
            component={ForgotPassswordScreen}
          />
          <Stack.Screen
            name="SetNewPasssword"
            component={SetNewPassswordScreen}
          />
          <Stack.Screen name="SelectProfile" component={SelectProfileScreen} />
          <Stack.Screen
            name="TermsAndCondition"
            component={TermsAndConditionScreen}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTab" component={MainTabNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
