import {
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../navigation/types';
import Entypo from 'react-native-vector-icons/Entypo';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import {SmallText} from '../../components/MyText';

const data = [
  {
    img: require('../../../assets/images/MovieImages/img12.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img11.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img9.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img10.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img8.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img7.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img5.png'),
  },

  {
    img: require('../../../assets/images/MovieImages/img3.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img2.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img1.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img3.png'),
  },

  {
    img: require('../../../assets/images/MovieImages/img5.png'),
  },

  {
    img: require('../../../assets/images/MovieImages/img7.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img8.png'),
  },
];

const Watchlist = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <View>
      <FlatList
        style={{marginTop: 20}}
        numColumns={2}
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('MoreInfo')}
              style={{
                flex: 1 / 2,
                margin: 10,
                borderRadius: 10,
                height: 220,
              }}>
              <Image
                style={{
                  height: 180,
                  width: '100%',
                  borderRadius: 10,
                }}
                source={item.img}
              />
              <TouchableOpacity
                style={{
                  marginTop: 6,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <SmallText>Fast & Furious</SmallText>
                <Entypo
                  onPress={() => {
                    SheetManager.show(SHEETS.WatchlistOptionsSheet);
                  }}
                  name="dots-three-vertical"
                  size={22}
                  color="white"
                />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Watchlist;
