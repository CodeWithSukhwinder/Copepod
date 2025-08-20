import {View, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import Feather from 'react-native-vector-icons/Feather';
import {RegularTextGray, Text25, TitleText} from '../../components/MyText';
import MainLayout2 from '../../components/MainLayout2';

const TermsAndConditionScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <MainLayout2 onBack={navigation.goBack} title="Terms & Condition">
      <View style={{flex: 1, marginHorizontal: 15}}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 15,
              marginBottom: 5,
              width: '90%',
            }}>
            <Feather name="shield" size={30} color="white" />
            <Text25>Terms & Conditions for CoPePod App</Text25>
          </View>
          <View>
            <RegularTextGray>
              Please read these Terms and Conditions carefully before using the
              Meander.live app. These Terms and Conditions govern your use of
              the app and constitute a legal agreement between you and
              Meander.live. By using the app, you agree to be bound by these
              Terms and Conditions.
            </RegularTextGray>
            <TitleText style={{color: '#B7B7B7', marginTop: 20}}>
              Use of the App
            </TitleText>
            <RegularTextGray>
              1.1. Eligibility: You must be at least 13 years old to use the
              Meander.live app. If you are under the age of 18, you must obtain
              parental or guardian consent before using the app.
            </RegularTextGray>
            <RegularTextGray style={{marginTop: 20}}>
              1.2. Eligibility: You must be at least 13 years old to use the
              Meander.live app. If you are under the age of 18, you must obtain
              parental or guardian consent before using the app.
            </RegularTextGray>
            <RegularTextGray>
              1.1. Eligibility: You must be at least 13 years old to use the
              Meander.live app. If you are under the age of 18, you must obtain
              parental or guardian consent before using the app.
            </RegularTextGray>
            <RegularTextGray style={{marginTop: 20}}>
              1.2. Eligibility: You must be at least 13 years old to use the
              Meander.live app. If you are under the age of 18, you must obtain
              parental or guardian consent before using the app.
            </RegularTextGray>
            <RegularTextGray>
              1.1. Eligibility: You must be at least 13 years old to use the
              Meander.live app. If you are under the age of 18, you must obtain
              parental or guardian consent before using the app.
            </RegularTextGray>
            <RegularTextGray style={{marginTop: 20}}>
              1.2. Eligibility: You must be at least 13 years old to use the
              Meander.live app. If you are under the age of 18, you must obtain
              parental or guardian consent before using the app.
            </RegularTextGray>
            <RegularTextGray>
              1.1. Eligibility: You must be at least 13 years old to use the
              Meander.live app. If you are under the age of 18, you must obtain
              parental or guardian consent before using the app.
            </RegularTextGray>
          </View>
        </ScrollView>
      </View>
    </MainLayout2>
  );
};

export default TermsAndConditionScreen;
