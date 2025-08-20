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
    name: 'Fly in Future',
    img: require('../../../assets/images/MovieImages/img3.png'),
  },
  {
    name: 'My Brother',
    img: require('../../../assets/images/MovieImages/img4.png'),
  },
  {
    name: 'Richard The Lionheart',
    img: require('../../../assets/images/MovieImages/img5.png'),
  },
  {
    name: 'Death Blish',
    img: require('../../../assets/images/MovieImages/img6.png'),
  },
  {
    name: 'Kill Marry Tonight',
    img: require('../../../assets/images/MovieImages/img7.png'),
  },
  {
    name: 'Mafia',
    img: require('../../../assets/images/MovieImages/img8.png'),
  },
];

const LatestWatch = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{marginTop: 15, paddingLeft: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryList')}>
          <RegularText bold>Latest Watch</RegularText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('CategoryList')}
          style={{flexDirection: 'row', gap: 5}}>
          <SmallText>View All</SmallText>
          <AntDesign name="right" color={'white'} size={13} />
        </TouchableOpacity>
      </View>
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
                  margin: 5,
                  borderRadius: 10,
                  marginLeft: 0,
                  marginRight: 10,
                }}>
                <Image
                  style={{
                    height: 250,
                    width: 170,
                    borderRadius: 10,
                    resizeMode: 'contain',
                  }}
                  source={item.img}
                />
              </TouchableOpacity>
              <View>
                <RegularText>{item.name}</RegularText>
                <View style={{flexDirection: 'row', gap: 5, marginTop: 5}}>
                  <FontAwesome name="star" size={12} color="yellow" />
                  <FontAwesome name="star" size={12} color="yellow" />
                  <FontAwesome name="star" size={12} color="yellow" />
                  <FontAwesome name="star" size={12} color="yellow" />
                  <FontAwesome name="star" size={12} color="white" />
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default LatestWatch;
