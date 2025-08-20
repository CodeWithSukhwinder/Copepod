import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams, RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  MediumText,
  RegularText,
  RegularTextGray,
  Text25,
  TitleText,
} from '../../components/MyText';
import {COLORS} from '../../styles';
import Line from '../../components/Line';
import MainLayout2 from '../../components/MainLayout2';
import ContinueWatching from './ContinueWatching';

const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout2
      onBack={navigation.goBack}
      title="Profile"
      rightSideIcon={() => {
        return (
          <AntDesign
            onPress={() => navigation.navigate('Setting')}
            name="setting"
            size={24}
            color="white"
          />
        );
      }}>
      <View style={{flex: 1, marginHorizontal: 15, paddingTop: 15}}>
        <View style={styles.row2}>
          <MediumText>Profiles</MediumText>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfiles')}
            style={styles.row}>
            <SimpleLineIcons name="pencil" size={15} color="white" />
            <RegularTextGray>Edit</RegularTextGray>
          </TouchableOpacity>
        </View>

        <View style={styles.row3}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.container}>
              <Image
                style={styles.img}
                source={require('../../../assets/images/men.png')}
              />
            </View>
            <RegularTextGray>John</RegularTextGray>
          </View>

          <View style={{alignItems: 'center'}}>
            <View style={styles.container}>
              <Image
                style={styles.img}
                source={require('../../../assets/images/kids.png')}
              />
            </View>
            <RegularTextGray>Kids</RegularTextGray>
          </View>

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateProfile')}
              style={[styles.container, {borderColor: 'red', borderWidth: 1}]}>
              <MediumText style={{color: 'red'}}>+</MediumText>
            </TouchableOpacity>
            <RegularTextGray>Add</RegularTextGray>
          </View>
        </View>

        <ContinueWatching />
      </View>
    </MainLayout2>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  row2: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row3: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
    marginTop: 13,
  },
  container: {
    height: 45,
    width: 45,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
});
