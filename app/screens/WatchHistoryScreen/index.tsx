import {
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams, RootStackParams} from '../../navigation/types';
import Entypo from 'react-native-vector-icons/Entypo';
import {RegularText} from '../../components/MyText';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';

const data = [
  {
    title: 'Richard the Lionheart',
    time: '2 hours ago',
    img: require('../../../assets/images/MovieImages/img11.png'),
  },
  {
    title: 'Fly in the Future',
    time: '3 hours ago',

    img: require('../../../assets/images/MovieImages/img12.png'),
  },
  {
    title: 'Brother',
    time: '8 hours ago',
    img: require('../../../assets/images/MovieImages/img10.png'),
  },
  {
    title: 'Falcon Trail',
    time: '10 hours ago',
    img: require('../../../assets/images/MovieImages/img3.png'),
  },
  {
    title: 'Falcon Trail',
    time: '1 day ago',
    img: require('../../../assets/images/MovieImages/img5.png'),
  },
  {
    title: 'Falcon Trail',
    time: '2 days ago',
    img: require('../../../assets/images/MovieImages/img6.png'),
  },
  {
    title: 'Falcon Trail',
    time: '3 days ago',
    img: require('../../../assets/images/MovieImages/img7.png'),
  },
  {
    title: 'Falcon Trail',
    time: '4 days ago',
    img: require('../../../assets/images/MovieImages/img8.png'),
  },
];

const WatchHistoryScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Watch History">
      <View style={{flex: 1, paddingBottom: 20}}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MoreInfo')}
                  style={styles.photo}>
                  <Image
                    style={{height: '100%', width: '100%', borderRadius: 10}}
                    source={item.img}
                  />
                </TouchableOpacity>
                <View style={{flex: 1}}>
                  <RegularText style={{fontSize: 16}}>{item.title}</RegularText>
                  <RegularText
                    style={{opacity: 0.8, marginTop: 10, marginBottom: 5}}>
                    Season 3
                  </RegularText>
                  <RegularText>{item.time}</RegularText>
                </View>
                <Entypo
                  onPress={() => {
                    SheetManager.show(SHEETS.WatchlistOptionsSheet);
                  }}
                  name="dots-three-vertical"
                  size={18}
                  color="white"
                />
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default WatchHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 15,
    gap: 13,
    justifyContent: 'space-between',
  },
  photo: {
    height: 90,
    width: 130,
    borderRadius: 10,
    // backgroundColor: 'lightgray',
  },
});
