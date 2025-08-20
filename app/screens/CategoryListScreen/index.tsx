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
import {HomeStackParams, RootStackParams} from '../../navigation/types';
import Entypo from 'react-native-vector-icons/Entypo';
import MainLayout3 from '../../components/MainLayout3';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';

const data = [
  {
    img: require('../../../assets/images/MovieImages/img1.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img2.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img3.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img4.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img5.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img6.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img7.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img8.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img9.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img10.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img2.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img3.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img4.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img5.png'),
  },
  {
    img: require('../../../assets/images/MovieImages/img6.png'),
  },
];

const CategoryListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  return (
    <MainLayout3 onBack={navigation.goBack} title="Latest Movies">
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <ScrollView>
          <FlatList
            style={{marginTop: 20}}
            numColumns={3}
            data={data}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('MoreInfo')}
                  style={{
                    flex: 1 / 3,
                    margin: 10,
                    borderRadius: 10,
                  }}>
                  <Image
                    style={{
                      height: 180,
                      width: 120,
                      borderRadius: 10,
                      resizeMode: 'contain',
                    }}
                    source={item.img}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      SheetManager.show(SHEETS.WatchlistOptionsSheet);
                    }}
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      alignSelf: 'flex-end',
                      marginTop: 6,
                    }}>
                    <Entypo
                      name="dots-three-vertical"
                      size={22}
                      color="white"
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            }}
          />
        </ScrollView>
      </View>
    </MainLayout3>
  );
};

export default CategoryListScreen;
