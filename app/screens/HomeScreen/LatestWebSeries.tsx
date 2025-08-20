import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {RegularText, SmallText} from '../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const data = [
  {
    name: 'Mr.Bean Crazy',
    img: require('../../../assets/images/MovieImages/img9.png'),
  },
  {
    name: 'Falcon Trail',
    img: require('../../../assets/images/MovieImages/img10.png'),
  },
  {
    name: 'Under His Umbrella',
    img: require('../../../assets/images/MovieImages/img1.png'),
  },
  {
    name: 'Homegoing',
    img: require('../../../assets/images/MovieImages/img2.png'),
  },
  {
    name: 'Fly in Future',
    img: require('../../../assets/images/MovieImages/img3.png'),
  },
  {
    name: 'My Brother',
    img: require('../../../assets/images/MovieImages/img4.png'),
  },
];

const LatestWebSeriess = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{marginTop: 15, paddingLeft: 10, marginBottom: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginRight: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryList')}>
          <RegularText bold>Latest Web Series</RegularText>
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
            </View>
          );
        }}
      />
    </View>
  );
};

export default LatestWebSeriess;
