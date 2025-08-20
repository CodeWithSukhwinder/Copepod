import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MainLayout4 from '../../components/MainLayout4';
import {CategoriesStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
const data = [
  {img: require('../../../assets/images/Genre/img1.png')},
  {img: require('../../../assets/images/Genre/img2.png')},
  {img: require('../../../assets/images/Genre/img3.png')},
  {img: require('../../../assets/images/Genre/img4.png')},
  {img: require('../../../assets/images/Genre/img5.png')},
  {img: require('../../../assets/images/Genre/img6.png')},
  {img: require('../../../assets/images/Genre/img7.png')},
  {img: require('../../../assets/images/Genre/img8.png')},
  {img: require('../../../assets/images/Genre/img9.png')},
  {img: require('../../../assets/images/Genre/img10.png')},
  {img: require('../../../assets/images/Genre/img11.png')},
  {img: require('../../../assets/images/Genre/img12.png')},
  {img: require('../../../assets/images/Genre/img13.png')},
  {img: require('../../../assets/images/Genre/img14.png')},
];

const CategoriesScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<CategoriesStackParams>>();
  return (
    <MainLayout4 onBack={navigation.goBack} title="Popular Genres">
      <View style={{flex: 1}}>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({item}: any) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('CategoryList')}
                style={{
                  flex: 1 / 2,
                  height: 125,
                  margin: 7,
                  borderRadius: 20,
                  marginVertical: 7,
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  source={item.img}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </MainLayout4>
  );
};

export default CategoriesScreen;
