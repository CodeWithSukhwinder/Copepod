import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {COLORS} from '../../styles';
import {RegularText} from '../../components/MyText';
import {RootStackParams} from '../../navigation/types';
import {Platform} from 'react-native';

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View
      style={{
        backgroundColor: '#151515',
        height: Platform.OS === 'ios' ? 80 : 60,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
      }}>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="arrowleft"
        size={25}
        color={COLORS.white}
      />
      <RegularText>New & Hot</RegularText>
      <AntDesign name="arrowleft" size={25} color={'#151515'} />
    </View>
  );
};

export default Header;
