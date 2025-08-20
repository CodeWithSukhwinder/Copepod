import {View, Text} from 'react-native';
import React from 'react';
import MainLayout2 from '../../components/MainLayout2';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import LockSvg from '../../../assets/icon/svg/LockSvg.svg';
import Input from '../../components/Input';
import PrimaryBtn from '../../components/PrimaryBtn';

const ChangePasswordScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout2 onBack={navigation.goBack} title="Change Password">
      <View style={{flex: 1, marginHorizontal: 20}}>
        <LockSvg style={{alignSelf: 'center', marginVertical: 20}} />

        <Input placeholder="Old Password" />
        <Input placeholder="New Password" />
        <Input placeholder="Confirm Password" />
      </View>

      <View style={{marginBottom: 40, marginHorizontal: 20}}>
        <PrimaryBtn
          onPress={() => navigation.goBack()}
          text="CHANGE PASSWORD"
        />
      </View>
    </MainLayout2>
  );
};

export default ChangePasswordScreen;
