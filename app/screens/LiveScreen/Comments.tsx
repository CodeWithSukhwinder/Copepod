import {View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {SmallText} from '../../components/MyText';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams} from '../../navigation/types';

const data = [
  {
    img: require('../../../assets/images/userImg1.png'),
  },
  {
    img: require('../../../assets/images/userImg2.png'),
  },
  {
    img: require('../../../assets/images/userImg3.png'),
  },
];

const Item = ({img}: {img: {uri: string}}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();
  const [like, setLike] = useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <View style={{flexDirection: 'row', gap: 10}}>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 40,
          }}>
          <Image
            style={{height: 40, width: 40, borderRadius: 40}}
            source={img}
          />
        </View>
        {/* middleView */}
        <View style={{flex: 1, gap: 5}}>
          <SmallText bold>John Smith</SmallText>
          <SmallText style={{opacity: 0.8}}>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary.
          </SmallText>
          <SmallText> {like ? '271 Likes' : '270 Likes'}</SmallText>
        </View>
        <Octicons
          onPress={() => setLike(!like)}
          name={like ? 'heart-fill' : 'heart'}
          size={22}
          color={like ? 'red' : 'white'}
        />
      </View>
    </View>
  );
};
const Comments = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <Item img={item.img} />;
        }}
      />
    </View>
  );
};

export default Comments;
