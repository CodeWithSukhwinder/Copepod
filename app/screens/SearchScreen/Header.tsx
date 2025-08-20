import {View, SafeAreaView, Platform} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {RegularText} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigation/types';

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        height: Platform.OS === 'ios' ? 80 : 60,
      }}>
      <AntDesign
        onPress={() => navigation.goBack()}
        name="arrowleft"
        size={24}
        color="gray"
        style={{marginLeft: 10}}
      />
      <RegularText
        style={{
          flex: 1,
          textAlign: 'center',
          marginLeft: 20,
          fontSize: 17,
        }}>
        Search
      </RegularText>
      <View style={{flexDirection: 'row', gap: 12}}>
        <MaterialIcons name="connected-tv" size={24} color="gray" />
        <FontAwesome
          style={{marginRight: 10}}
          name="bell-o"
          size={24}
          color="gray"
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
