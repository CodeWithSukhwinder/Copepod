import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {RegularText, SmallText} from '../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams, RootStackParams} from '../../navigation/types';

const data = [
  {
    name: 'Under His Umbrella',
    img: require('../../../assets/images/MovieImages/img11.png'),
  },
  {
    name: 'Homegoing',
    img: require('../../../assets/images/MovieImages/img12.png'),
  },
  {
    name: 'Fly in Future',
    img: require('../../../assets/images/MovieImages/img6.png'),
  },
  {
    name: 'My Brother',
    img: require('../../../assets/images/MovieImages/img7.png'),
  },
  {
    name: 'Richard The Lionheart',
    img: require('../../../assets/images/MovieImages/img4.png'),
  },
];

const ContinueWatching = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={{marginTop: 30, paddingLeft: 10, marginBottom: 0}}>
      <View>
        <RegularText style={{fontSize: 16}}>Continue Watching </RegularText>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          return (
            <View style={{paddingVertical: 10}}>
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

export default ContinueWatching;
