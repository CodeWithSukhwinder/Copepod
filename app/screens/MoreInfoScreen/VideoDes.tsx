import {View, Text} from 'react-native';
import React from 'react';
import {
  MediumText,
  RegularText,
  SmallText,
  Text20,
} from '../../components/MyText';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const VideoDes = () => {
  return (
    <View style={{marginTop: 20}}>
      <Text20>Lasts Days of Berlin</Text20>
      <View style={{flexDirection: 'row', gap: 5, marginTop: 5}}>
        <FontAwesome name="star" size={12} color="yellow" />
        <FontAwesome name="star" size={12} color="yellow" />
        <FontAwesome name="star" size={12} color="yellow" />
        <FontAwesome name="star" size={12} color="yellow" />
        <FontAwesome name="star" size={12} color="white" />
      </View>

      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <RegularText>Produced: </RegularText>
        <RegularText> 2021 / 13+ /3 Season/</RegularText>
        <View
          style={{
            backgroundColor: '#FFA000',
            borderRadius: 5,
            paddingHorizontal: 5,
            paddingVertical: 2,
            marginLeft: 5,
          }}>
          <SmallText style={{color: 'black'}}>Ultra HD</SmallText>
        </View>
      </View>
    </View>
  );
};

export default VideoDes;
