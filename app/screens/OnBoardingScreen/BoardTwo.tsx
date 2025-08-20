import {View, Text, Dimensions, Image, ScrollView} from 'react-native';
import React from 'react';
import {BigText, RegularText, TitleText} from '../../components/MyText';
import PrimaryBtn from '../../components/PrimaryBtn';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../styles';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';

const {width} = Dimensions.get('window');

type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};
const BoardTwo = ({handleNext, handleSkip}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View
      style={{
        width: width,
        // backgroundColor: 'red',
      }}>
      <View
        style={{
          width: '100%',
          height: '45%',
        }}></View>

      <View style={{alignItems: 'center'}}>
        <BigText
          style={{
            marginBottom: 10,
            color: COLORS.primary,
            fontSize: 50,
          }}>
          CoPePod
        </BigText>

        <TitleText style={{marginVertical: 10}}>
          Explore Limitless Entertainment
        </TitleText>

        <RegularText
          style={{
            textAlign: 'center',
            marginHorizontal: 20,
          }}>
          Welcome to your ultimate entertainment destination! Immerse yourself
          in a world of captivating movies, thrilling TV shows, and engaging
          documentaries. Whether you're a fan of heartwarming romances,
          spine-tingling mysteries, or laugh-out-loud comedies, our vast library
          has something for everyone.
        </RegularText>
      </View>
    </View>
  );
};

export default BoardTwo;
