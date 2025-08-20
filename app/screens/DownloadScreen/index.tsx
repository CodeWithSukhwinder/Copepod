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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  RegularText,
  RegularTextGray,
  Text25,
  TitleText,
} from '../../components/MyText';
import Line from '../../components/Line';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';

const data = [
  {
    title: 'Richard the Lionheart',
    img: require('../../../assets/images/MovieImages/img7.png'),
  },
  {
    title: 'Fly in the Future',
    img: require('../../../assets/images/MovieImages/img11.png'),
  },
  {
    title: 'Brother',
    img: require('../../../assets/images/MovieImages/img10.png'),
  },
  {
    title: 'Falcon Trail',
    img: require('../../../assets/images/MovieImages/img3.png'),
  },
];

const header = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          marginTop: 15,
          marginBottom: 5,
          marginHorizontal: 15,
        }}>
        <AntDesign name="filetext1" size={24} color="white" />
        <Text25>Downloaded</Text25>
      </View>
      <RegularTextGray style={{marginBottom: 15, marginHorizontal: 15}}>
        Unleash a world of entertainment with our Netflix Clone app – your
        gateway to limitless streaming bliss
      </RegularTextGray>
      <View style={{marginBottom: 30, marginHorizontal: 15}}>
        <Line />
      </View>
    </View>
  );
};

const DownloadScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="CoPePod">
      <View style={{flex: 1}}>
        <FlatList
          ListHeaderComponent={header}
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
                  <RegularText>Episode 1 | 356 MB</RegularText>
                </View>
                <Entypo
                  onPress={() => {
                    SheetManager.show(SHEETS.DownloadOptionsSheet);
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

export default DownloadScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
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
