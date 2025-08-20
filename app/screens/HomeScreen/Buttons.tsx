import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Text20, TitleText} from '../../components/MyText';
import {COLORS} from '../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';

const Buttons = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{
          height: 60,
          width: '48%',
          borderRadius: 10,
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 5,
        }}>
        <AntDesign name="plus" size={24} color="black" />
        <TitleText style={{color: 'black'}}>WATCH LIST</TitleText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LiveScreen')}
        style={{
          height: 60,
          width: '48%',
          borderRadius: 10,
          backgroundColor: COLORS.primary,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 5,
        }}>
        <Feather name="play" size={24} color="white" />
        <TitleText>WATCH LIVE</TitleText>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;
