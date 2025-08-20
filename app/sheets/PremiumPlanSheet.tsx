import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {
  ScrollView,
  SheetManager,
} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';
import {COLORS} from '../styles';
import {
  MediumText,
  RegularText,
  RegularTextGray,
  TitleText,
} from '../components/MyText';
import {RootStackParams} from '../navigation/types';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LikeModal from '../modals/LikeModal';
import Svg from '../../assets/icon/svg/PlanSvg.svg';
import PlanBuyModal from '../modals/PlanSuccessfullyBuyModal';

const PremiumPlanSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isPlanBuyModalOpen, setIsPlanBuyModalOpen] = React.useState(false);

  const close = () => {
    SheetManager.hide(SHEETS.PremiumPlanSheet);
  };

  return (
    <ActionSheet
      containerStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 15,
        paddingBottom: 15,
        backgroundColor: '#151515',
        borderWidth: 1,
        borderColor: 'gray',
        borderBottomWidth: 0,
      }}
      id={props.sheetId}
      gestureEnabled>
      <View>
        <View style={{marginHorizontal: 10}}>
          <Svg
            style={{
              marginVertical: 15,
              marginBottom: 20,
              alignSelf: 'center',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginBottom: 40,
            }}>
            <View
              style={{
                paddingVertical: 2,
                paddingHorizontal: 7,
                backgroundColor: COLORS.primary,
                borderRadius: 5,
              }}>
              <TitleText>$14.99</TitleText>
            </View>
            <TitleText>PREMIUM PLAN</TitleText>
          </View>

          <View style={styles.row}>
            <RegularTextGray>Card Number</RegularTextGray>
            <TextInput
              style={{flex: 1}}
              placeholder="**** **** **** 5324"
              placeholderTextColor={'white'}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.row, {width: '45%', marginLeft: 15}]}>
              <RegularTextGray>Exp.Date</RegularTextGray>
              <TextInput
                placeholder="14.10.2022"
                placeholderTextColor={'white'}
              />
            </View>

            <View
              style={[
                styles.row,
                {width: '40%', marginRight: 15, marginLeft: 0},
              ]}>
              <RegularTextGray>CVV</RegularTextGray>
              <TextInput placeholder="737" placeholderTextColor={'white'} />
            </View>
          </View>

          <View style={styles.row}>
            <RegularTextGray>Card Holder</RegularTextGray>
            <TextInput
              style={{flex: 1}}
              placeholder="Merabino Vachini"
              placeholderTextColor={'white'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
            }}>
            <TouchableOpacity onPress={close} style={styles.buttons}>
              <TitleText>CANCEL</TitleText>
            </TouchableOpacity>

            {isPlanBuyModalOpen && (
              <PlanBuyModal onHide={() => setIsPlanBuyModalOpen(false)} />
            )}
            <TouchableOpacity
              onPress={() => {
                setIsPlanBuyModalOpen(true);
              }}
              style={[
                styles.buttons,
                {backgroundColor: COLORS.primary, borderWidth: 0},
              ]}>
              <TitleText>PAY NOW</TitleText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ActionSheet>
  );
};

export default PremiumPlanSheet;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
  },
  buttons: {
    height: 60,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
});
