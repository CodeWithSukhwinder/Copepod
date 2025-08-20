import {View, Text} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {Text25} from '../../components/MyText';
import {COLORS} from '../../styles';

const Header = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        paddingBottom: 10,
        position: 'absolute',
        zIndex: 1,
        width: '100%',
        marginTop: 20,
      }}>
      <Text25 style={{color: COLORS.primary}}>CoPePod</Text25>
      <View style={{flexDirection: 'row', gap: 12}}>
        <AntDesign
          onPress={() => navigation.navigate('Search')}
          name="search1"
          size={24}
          color="white"
        />
        <MaterialIcons name="connected-tv" size={24} color="white" />
        <FontAwesome name="bell-o" size={24} color="white" />
      </View>
    </View>
  );
};

export default Header;
