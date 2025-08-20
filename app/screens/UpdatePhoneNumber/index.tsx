import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../navigation/types';
import MainLayout from '../../components/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import SecondaryBtn from '../../components/SecondaryBtn';
import Input from '../../components/Input';

const UpdatePhoneNumberScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Email">
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <View style={{flex: 1, marginTop: 20}}>
          <Input placeholder="Old Phone Number" />
          <Input placeholder="New Phone Number" />
        </View>

        <PrimaryBtn
          containerStyle={{marginBottom: 20}}
          onPress={() => navigation.goBack()}
          text="CHANGE PHONE NUMBER"
        />
      </View>
    </MainLayout>
  );
};

export default UpdatePhoneNumberScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.06)',
    marginBottom: 20,
  },
});
