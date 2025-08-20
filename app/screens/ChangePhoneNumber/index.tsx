import {View, Text} from 'react-native';
import React from 'react';
import MainLayout2 from '../../components/MainLayout2';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import PhoneSvg from '../../../assets/icon/svg/Phone.svg';
import {SmallText, Text25, TitleText} from '../../components/MyText';
import Input from '../../components/Input';
import PrimaryBtn from '../../components/PrimaryBtn';
import {COLORS} from '../../styles';

const ChangeNumberScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout2 title="Phone Number" onBack={navigation.goBack}>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View style={{marginTop: 50, alignItems: 'center', gap: 10}}>
          <PhoneSvg />
          <Text25>Change Phone Number</Text25>
          <TitleText style={{opacity: 0.9, textAlign: 'center'}}>
            Update Your Contact Information for Seamless Streaming
          </TitleText>
        </View>
        <Input placeholder="+1(917)345-6789" />
        <PrimaryBtn
          onPress={() => navigation.goBack()}
          containerStyle={{marginTop: 40}}
          text="SAVE"
        />
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          marginBottom: 20,
        }}>
        <SmallText style={{textAlign: 'center'}}>
          Copyright Meco
          <SmallText style={{color: COLORS.primary}}>Nata </SmallText>2022. All
          Rights Reserved.
        </SmallText>
      </View>
    </MainLayout2>
  );
};

export default ChangeNumberScreen;
