import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {
  RegularText,
  SmallText,
  Text25,
  TitleText,
} from '../../components/MyText';
import MainLayout2 from '../../components/MainLayout2';
import PrimaryBtn from '../../components/PrimaryBtn';
import LikeModal from '../../modals/LikeModal';
import DislikeModal from '../../modals/DislikeModal';
import CardAddedModal from '../../modals/CardAddedModal';
import MainLayout3 from '../../components/MainLayout3';

const EditCreditCardScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <MainLayout3 onBack={navigation.goBack} title="Add Card">
      <View style={{flex: 1, marginHorizontal: 15}}>
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 15,
              marginBottom: 5,
            }}>
            <AntDesign name="creditcard" size={24} color="white" />
            <Text25>Credit Card</Text25>
          </View>
          <RegularText>
            Safely add your credit card for uninterrupted streaming enjoyment
          </RegularText>

          <View
            style={{
              borderRadius: 10,
              marginTop: 30,
              height: 220,
              marginBottom: 15,
            }}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../../../assets/images/MasterCard.png')}
            />
          </View>

          <SmallText>Card Number</SmallText>
          <View style={styles.input2}>
            <TextInput
              style={{fontSize: 17, color: 'white'}}
              placeholder="**** **** **** 1024"
              placeholderTextColor={'white'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <SmallText>Expiration Date</SmallText>
            <SmallText>CVV/CVC</SmallText>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <View style={styles.input}>
                <TextInput
                  style={{fontSize: 17, color: 'white'}}
                  placeholder="07"
                  placeholderTextColor={'white'}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{fontSize: 17, color: 'white'}}
                  placeholder="07"
                  placeholderTextColor={'white'}
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <View style={styles.input}>
              <TextInput
                keyboardType="number-pad"
                style={{fontSize: 17, color: 'white'}}
                placeholder="734"
                placeholderTextColor={'white'}
              />
            </View>
          </View>

          <SmallText style={{marginTop: 10}}>Card Holder Name</SmallText>
          <View style={styles.input2}>
            <TextInput
              style={{fontSize: 17}}
              placeholder="**** **** **** 1024"
              placeholderTextColor={'white'}
            />
          </View>

          {isModalOpen && (
            <CardAddedModal onHide={() => setIsModalOpen(false)} />
          )}

          <PrimaryBtn
            onPress={() => {
              setIsModalOpen(true);
            }}
            containerStyle={{marginVertical: 50}}
            text="CONFIRM"
          />
        </ScrollView>
      </View>
    </MainLayout3>
  );
};

export default EditCreditCardScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingVertical: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    height: 60,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input2: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 5,
  },
});
