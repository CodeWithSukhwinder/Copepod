import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MainLayout2 from '../../components/MainLayout2';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import Svg from '../../../assets/icon/svg/Payment.svg';
import {MediumText, RegularText, TitleText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Line from '../../components/Line';
import PrimaryBtn from '../../components/PrimaryBtn';
import MainLayout3 from '../../components/MainLayout3';

const PaymentMethodScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isActive, setIsActive] = React.useState(1);
  return (
    <MainLayout3 title="Payment Method" onBack={navigation.goBack}>
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={{alignItems: 'center', gap: 10, marginTop: 30}}>
            <Svg />
            <MediumText>Payment Methods</MediumText>
            <TitleText style={{textAlign: 'center'}}>
              Securely add your payment method for uninterrupted entertainment
            </TitleText>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('EditCreditCard')}
            style={styles.addButton}>
            <AntDesign name="plus" size={24} color="white" />
            <TitleText>ADD NEW CARD</TitleText>
          </TouchableOpacity>

          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => {
                setIsActive(1);
              }}
              style={styles.row}>
              <MaterialIcons
                name={isActive === 1 ? 'radio-button-on' : 'radio-button-off'}
                size={24}
                color={isActive === 1 ? 'red' : 'gray'}
              />
              <RegularText>**** **** **** 5324</RegularText>
            </TouchableOpacity>
            <Line />

            <TouchableOpacity
              onPress={() => {
                setIsActive(2);
              }}
              style={styles.row}>
              <MaterialIcons
                name={isActive === 2 ? 'radio-button-on' : 'radio-button-off'}
                size={24}
                color={isActive === 2 ? 'red' : 'gray'}
              />
              <RegularText>**** **** **** 5324</RegularText>
            </TouchableOpacity>
            <Line />

            <TouchableOpacity
              onPress={() => {
                setIsActive(3);
              }}
              style={styles.row}>
              <MaterialIcons
                name={isActive === 3 ? 'radio-button-on' : 'radio-button-off'}
                size={24}
                color={isActive === 3 ? 'red' : 'gray'}
              />
              <RegularText>paypal@yourdomain.com</RegularText>
            </TouchableOpacity>
          </View>
          <View style={{marginHorizontal: 20, marginTop: 50}}>
            <PrimaryBtn onPress={() => navigation.goBack()} text="CONTINUE" />
          </View>
        </ScrollView>
      </View>
    </MainLayout3>
  );
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
    marginVertical: 20,
  },
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 15,
    paddingLeft: 15,
    alignItems: 'center',
    height: 60,
  },
});
