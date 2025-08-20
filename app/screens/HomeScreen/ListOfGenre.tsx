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
    img: require('../../../assets/images/Genre/img1.png'),
  },
  {
    name: 'My Brother',
    img: require('../../../assets/images/Genre/img2.png'),
  },
  {
    name: 'Richard The Lionheart',
    img: require('../../../assets/images/Genre/img3.png'),
  },
  {
    name: 'Death Blish',
    img: require('../../../assets/images/Genre/img4.png'),
  },
  {
    name: 'Kill Marry Tonight',
    img: require('../../../assets/images/Genre/img5.png'),
  },
  {
    name: 'Mafia',
    img: require('../../../assets/images/Genre/img6.png'),
  },
];

const ListOfGenre = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{marginTop: 20, paddingLeft: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryList')}>
          <RegularText bold>List Of Genre </RegularText>
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
                  borderRadius: 10,
                  marginRight: 10,
                  marginTop: 10,
                }}>
                <Image
                  style={{
                    height: 105,
                    width: 170,
                    borderRadius: 10,
                    resizeMode: 'contain',
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

export default ListOfGenre;
