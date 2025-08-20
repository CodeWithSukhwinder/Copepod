import {
  View,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from './Header';
import {MediumText, RegularText, SmallText} from '../../components/MyText';
import {onSharePost} from '../../utils/helper';

const data = [
  {
    title: 'Door To Another Universe',
    img: require('../../../assets/images/NewPopular/img2.png'),
    des: 'Lorem ipsum dolor sito  integer erat nisl, cursus eget faucibus in, dignissim vel est. Morbi interdum nulla non est rhoncus placerat. Cras id arcu turpis. Sed facilisis tempor tortor sit amet aliquet.',
  },
  {
    title: 'Lorem ispum Dolor',
    img: require('../../../assets/images/NewPopular/img3.png'),
    des: 'Lorem ipsum dolor sito  integer erat nisl, cursus eget faucibus in, dignissim vel est. Morbi interdum nulla non est rhoncus placerat. Cras id arcu turpis. Sed facilisis tempor tortor sit amet aliquet.',
  },
  {
    title: 'Concateur Non Troppo',
    img: require('../../../assets/images/NewPopular/img1.png'),
    des: 'Lorem ipsum dolor sito  integer erat nisl, cursus eget faucibus in, dignissim vel est. Morbi interdum nulla non est rhoncus placerat. Cras id arcu turpis. Sed facilisis tempor tortor sit amet aliquet.',
  },
  {
    title: 'Cursus Eget Faucibus',
    img: require('../../../assets/images/NewPopular/img4.png'),
    des: 'Lorem ipsum dolor sito  integer erat nisl, cursus eget faucibus in, dignissim vel est. Morbi interdum nulla non est rhoncus placerat. Cras id arcu turpis. Sed facilisis tempor tortor sit amet aliquet.',
  },
];

const NewAndHotScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [like, setLike] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {/* <SafeAreaView /> */}
      <Header />
      <FlatList
        style={{marginTop: 20}}
        data={data}
        renderItem={({item}) => {
          return (
            <View
              style={{
                alignSelf: 'center',
                marginTop: 10,
                width: '90%',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MoreInfo')}
                style={{
                  height: 210,
                  width: '100%',
                  marginBottom: 10,
                  borderRadius: 15,
                }}>
                <Image
                  style={{height: '100%', width: '100%', borderRadius: 15}}
                  source={item.img}
                />
              </TouchableOpacity>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <MediumText>Last Days of Berlin</MediumText>
                  <RegularText>Coming Sunday</RegularText>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    gap: 15,
                  }}>
                  <View style={styles.buttons}>
                    <AntDesign
                      onPress={onSharePost}
                      name="sharealt"
                      size={25}
                      color="gray"
                    />
                  </View>
                  <View style={styles.buttons}>
                    <AntDesign
                      onPress={() => setLike(!like)}
                      name={like ? 'heart' : 'hearto'}
                      size={23}
                      color="gray"
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 5,
                  marginVertical: 10,
                  alignItems: 'center',
                }}>
                <RegularText>2021 / 13+ / 3 Season / </RegularText>

                <SmallText
                  style={[styles.options, {backgroundColor: 'yellow'}]}>
                  Ultra HD
                </SmallText>
              </View>

              <SmallText>{item.des}</SmallText>
              <View style={{marginTop: 10}}></View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default NewAndHotScreen;

const styles = StyleSheet.create({
  options: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    color: 'black',
    fontSize: 10,
  },
  buttons: {
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 45,
    borderRadius: 5,
  },
});
