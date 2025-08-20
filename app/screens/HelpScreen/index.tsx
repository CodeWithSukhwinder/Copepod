import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RegularText, SmallText, Text25} from '../../components/MyText';
import {COLORS} from '../../styles';
import Line from '../../components/Line';
import MainLayout2 from '../../components/MainLayout2';
import MainLayout from '../../components/MainLayout';

type RowProps = {
  text: string;

  icon: () => React.ReactNode;
  onPress?: () => void;
};

const Row = ({text, icon, onPress}: RowProps) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          paddingHorizontal: 20,
          paddingVertical: 18,
        }}>
        <View>{icon && icon()}</View>
        <RegularText style={{flex: 1}}>{text}</RegularText>
        <AntDesign name="right" color={COLORS.white} size={15} />
      </TouchableOpacity>
    </React.Fragment>
  );
};

const HelpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout onBack={navigation.goBack} title="Help">
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
            <Text25>Find Help Online</Text25>
          </View>
          <RegularText>
            Get instant assistance for all your Netflix inquiries and
            troubleshooting needs.
          </RegularText>

          <View
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 10,
              marginTop: 25,
            }}>
            <Row
              onPress={() => navigation.navigate('Faq')}
              icon={() => (
                <MaterialIcons name="help-outline" size={24} color="white" />
              )}
              text="FAQs"
            />
            <Line />
            <Row
              onPress={() => navigation.navigate('PrivacyPolicy')}
              icon={() => <AntDesign name="copy1" size={24} color="white" />}
              text="Privacy"
            />
            <Line />
            <Row
              onPress={() => navigation.navigate('TermsAndCondition')}
              icon={() => <Feather name="shield" size={24} color="white" />}
              text="Terms of Use"
            />
            {/* <Line /> */}
            {/* <Row
              // onPress={() => navigation.navigate('MyWallet')}
              icon={() => <Feather name="lock" size={24} color="white" />}
              text="Password Recovery"
            />
            <Line /> */}
          </View>
        </ScrollView>
      </View>
    </MainLayout>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  signOutBtn: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    marginTop: 50,
    paddingVertical: 13,
  },
});
