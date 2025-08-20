import {View, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import MainLayout2 from '../../components/MainLayout2';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {
  RegularText,
  RegularTextGray,
  SmallText,
  Text25,
} from '../../components/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../styles';
import Line from '../../components/Line';
import MainLayout from '../../components/MainLayout';

const data = [
  {
    ques: 'How many devices are allowed in CoPePod?',
    ans: 'Arcu tortor pellentesque pharetra gravida viverra fermentum. Sitelementum gravida ut dis felis. Duis faucibus cursus tinciduntconsectetur nec. Magna platea aliquam morbi bibendum sed nec.',
  },
  {
    ques: 'What does CoPePod allow you to do?',
    ans: 'Arcu tortor pellentesque pharetra gravida viverra fermentum. Sitelementum gravida ut dis felis. Duis faucibus cursus tinciduntconsectetur nec. Magna platea aliquam morbi bibendum sed nec.',
  },
  {
    ques: 'What is CoPePod Premium?',
    ans: 'Arcu tortor pellentesque pharetra gravida viverra fermentum. Sitelementum gravida ut dis felis. Duis faucibus cursus tinciduntconsectetur nec. Magna platea aliquam morbi bibendum sed nec.',
  },
  {
    ques: 'Can we recharge CoPePod for 1 year?',
    ans: 'Arcu tortor pellentesque pharetra gravida viverra fermentum. Sitelementum gravida ut dis felis. Duis faucibus cursus tinciduntconsectetur nec. Magna platea aliquam morbi bibendum sed nec.',
  },
  {
    ques: 'What are the CoPePod rules?',
    ans: 'Arcu tortor pellentesque pharetra gravida viverra fermentum. Sitelementum gravida ut dis felis. Duis faucibus cursus tinciduntconsectetur nec. Magna platea aliquam morbi bibendum sed nec.',
  },
];

const QnaList = ({item, index}: any) => {
  const [qna, setQna] = React.useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setQna(!qna);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 15,
          width: '100%',
        }}>
        <RegularText style={{marginLeft: 15, flex: 1}}>
          {item?.ques}
        </RegularText>
        <AntDesign
          style={{marginRight: 15}}
          name={qna ? 'up' : 'down'}
          size={20}
          color={'gray'}
        />
      </TouchableOpacity>
      {qna ? (
        <SmallText
          style={{
            marginTop: -10,
            marginHorizontal: 15,
            marginRight: 20,
            fontSize: 13,
            opacity: 0.9,
          }}>
          Arcu tortor pellentesque pharetra gravida viverra fermentum. Sit
          elementum gravida ut dis felis. Duis faucibus cursus tincidunt
          consectetur nec. Magna platea aliquam morbi bibendum sed nec.
        </SmallText>
      ) : null}
    </View>
  );
};

const FaqScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="FAQs">
      <View style={{flex: 1, marginHorizontal: 15}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 15,
              marginBottom: 5,
            }}>
            <MaterialIcons name="help-outline" size={30} color="white" />
            <Text25>Hi Daniel</Text25>
          </View>
          <RegularTextGray>
            Get instant assistance for all your Netflix inquiries and
            troubleshooting needs.
          </RegularTextGray>

          <FlatList
            style={{
              borderWidth: 1,
              borderRadius: 10,
              borderColor: COLORS.borderColour,
              marginTop: 25,
              paddingBottom: 20,
            }}
            data={data}
            renderItem={({item}) => {
              return <QnaList item={item} />;
            }}
          />
          <View style={{height: 40}}></View>
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default FaqScreen;
