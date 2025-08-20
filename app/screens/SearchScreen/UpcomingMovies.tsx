import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {RegularText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigation/types';
import {StyleSheet} from 'react-native';

const data = [
  {
    name: 'Fast & Furious',
    img: require('../../../assets/images/MovieImages/img10.png'),
  },
  {
    name: 'Richard the Lionheart',
    img: require('../../../assets/images/MovieImages/img12.png'),
  },
  {
    name: 'Fly in Future',
    img: require('../../../assets/images/MovieImages/img1.png'),
  },
  {
    name: 'Batter Call',
    img: require('../../../assets/images/MovieImages/img4.png'),
  },
  {
    name: 'Spiderman',
    img: require('../../../assets/images/MovieImages/img5.png'),
  },
];
const UpcomingMovies = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <View style={{marginTop: 30, paddingLeft: 20, marginBottom: 5}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('MoreInfo')}
              style={styles.container}>
              <View style={styles.photo}>
                <Image
                  style={{height: '100%', width: '100%', borderRadius: 10}}
                  source={item.img}
                />
              </View>
              <View style={{flex: 1}}>
                <RegularText>{item.name}</RegularText>
              </View>
              <AntDesign name="right" size={18} color="white" />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default UpcomingMovies;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    marginRight: 10,
    gap: 13,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  photo: {
    height: 70,
    width: 100,
    borderRadius: 10,
    // backgroundColor: 'lightgray',
  },
});
