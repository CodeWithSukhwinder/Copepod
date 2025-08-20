import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import Feather from 'react-native-vector-icons/Feather';
import {
  RegularText,
  RegularTextGray,
  SmallText,
  Text25,
} from '../../components/MyText';
import {COLORS} from '../../styles';
import MainLayout from '../../components/MainLayout';

const data = [
  {
    title: 'Richard the Lionheart',
    img: require('../../../assets/images/MovieImages/img1.png'),
  },
  {
    title: 'Fly in the Future',
    img: require('../../../assets/images/MovieImages/img2.png'),
  },
  {
    title: 'Brother',
    img: require('../../../assets/images/MovieImages/img3.png'),
  },
  {
    title: 'Falcon Trail',
    img: require('../../../assets/images/MovieImages/img4.png'),
  },
  {
    title: '12 Knights',
    img: require('../../../assets/images/MovieImages/img5.png'),
  },
  {
    title: 'Kill Marry Tonight',
    img: require('../../../assets/images/MovieImages/img6.png'),
  },
  {
    title: 'Homegoing',
    img: require('../../../assets/images/MovieImages/img7.png'),
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
        }}>
        <Feather name="bell" size={24} color="white" />
        <Text25>Notifications</Text25>
      </View>
      <RegularTextGray>
        Looks like you are having trouble watching StreamFlix. Below you fins
        answers on all your questions.
      </RegularTextGray>
    </View>
  );
};
const NotificationScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Notification">
      <View style={{flex: 1, marginHorizontal: 15}}>
        <FlatList
          ListHeaderComponent={header}
          data={data}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  gap: 15,
                  marginTop: 20,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 80,
                    width: 120,
                    borderRadius: 5,
                  }}>
                  <Image style={styles.img} source={item.img} />
                </View>
                <TouchableOpacity>
                  <RegularText bold>{item.title}</RegularText>
                  <SmallText style={{fontSize: 13, width: 200, opacity: 0.9}}>
                    Aenean lobortis at elit in porta. Macen mollis, enim sed
                    posuere sodales.
                  </SmallText>
                  <RegularText style={{color: COLORS.primary}}>
                    Today, January 5, 2022'
                  </RegularText>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </MainLayout>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
  },
});
