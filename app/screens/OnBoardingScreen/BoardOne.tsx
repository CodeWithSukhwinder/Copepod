import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  BigText,
  MediumText,
  RegularText,
  TitleText,
} from '../../components/MyText';
import {useNavigation} from '@react-navigation/native';
import PrimaryBtn from '../../components/PrimaryBtn';
import {COLORS} from '../../styles';

const {width} = Dimensions.get('window');

type Props = {
  handleSkip: () => void;
  handleNext: () => void;
};

const BoardOne = ({handleSkip, handleNext}: Props) => {
  return (
    <View
      style={{
        width: width,
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
            marginTop: 20,
            color: COLORS.primary,
            fontSize: 50,
          }}>
          CoPePod
        </BigText>

        <TitleText style={{marginVertical: 10}}>
          Trying to join Copepod?
        </TitleText>

        <RegularText
          style={{
            textAlign: 'center',
            marginHorizontal: 20,
          }}>
          You can sign up for Meander live in the app. It is possible only with
          us. After you’re a member, you can start watching movies you like
          right away.
        </RegularText>
      </View>
    </View>
  );
};

export default BoardOne;
