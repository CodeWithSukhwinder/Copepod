import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {RegularText, SmallText} from '../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';

const data = [
  {
    img: require('../../../assets/images/MovieImages/img12.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img10.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img11.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img9.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img8.png'),
  },
];

const MoreLikeThis = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{marginTop: 10}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={{paddingBottom: 10}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MoreInfo')}
                style={{
                  borderRadius: 10,
                  marginRight: 10,
                  marginTop: 10,
                }}>
                <Image
                  style={{
                    height: 125,
                    width: 90,
                    borderRadius: 5,
                  }}
                  source={item.img}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MoreLikeThis;
