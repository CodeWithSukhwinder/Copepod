import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams, RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MainLayout2 from '../../components/MainLayout2';
import {RegularText, RegularTextGray, TitleText} from '../../components/MyText';
import ToggleSwitch from 'toggle-switch-react-native';

import {COLORS} from '../../styles';
import PrimaryBtn from '../../components/PrimaryBtn';
import DeleteProfileModal from '../../modals/DeleteProfileModal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import {updateUser} from '../../redux/feature/auth/authSlice';
import {api_updateProfile} from '../../api/user';
import {useDispatch, useSelector} from 'react-redux';

const EditProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const dispatch = useDispatch();
  const [profilePhotoUri, setProfilePhotoUri] = React.useState(null);
  const {user, accessToken} = useSelector((s: any) => s.auth);
  const [forKids, setForKids] = React.useState(false);
  const [gender, setGender] = React.useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

  const openGallery = async () => {
    await launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response: any) => {

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          console.log({ response }, "sdfsdfds");
          setProfilePhotoUri(response.assets[0].uri);
        }
      }
    );
  };

  console.log({profilePhotoUri}, 'Photo');

  return (
    <MainLayout2
      title="Edit Profile"
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity onPress={() => setDeleteModalOpen(true)}>
            <AntDesign name="delete" size={20} color={'white'} />
          </TouchableOpacity>
        );
      }}>
      <ScrollView style={{flex: 1, paddingHorizontal: 15}}>
        {deleteModalOpen && (
          <DeleteProfileModal onHide={() => setDeleteModalOpen(false)} />
        )}
        <View>
          <TouchableOpacity
            style={{
              width: 90,
              margin: 10,
              backgroundColor: 'grey',
              height: 90,
              borderRadius: 90,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            {profilePhotoUri ? (
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: profilePhotoUri}}
              />
            ) : (
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../../../assets/images/men.png')}
              />
            )}
            {/* <Image
              source={require('../../../assets/images/men.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            /> */}
            <TouchableOpacity
              onPress={openGallery}
              style={{
                position: 'absolute',
                zIndex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
                borderRadius: 100,
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <SimpleLineIcons name="pencil" size={18} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
          <TitleText style={{textAlign: 'center', marginBottom: 20}}>
            John
          </TitleText>

          <View style={styles.input}>
            <Feather name="user" size={20} color="white" />
            <TextInput
              style={{flex: 1}}
              placeholder="John Doe"
              placeholderTextColor={'white'}
            />
          </View>
          <View style={styles.input}>
            <Feather name="mail" size={20} color="white" />
            <TextInput
              style={{flex: 1}}
              placeholder="johndoe@gmail.com"
              placeholderTextColor={'white'}
            />
          </View>
          <View style={styles.input}>
            <Feather name="phone-call" size={20} color="white" />
            <TextInput
              style={{flex: 1}}
              keyboardType="phone-pad"
              placeholder="(917) 445 9567"
              placeholderTextColor={'white'}
            />
          </View>

          <RegularText style={{marginTop: 25}}>Gender</RegularText>
          <View style={{flexDirection: 'row', gap: 25, marginTop: 2}}>
            <View style={styles.row}>
              <MaterialIcons
                onPress={() => setGender(1)}
                name={gender === 1 ? 'radio-button-on' : 'radio-button-off'}
                size={24}
                color={gender === 1 ? COLORS.primary : 'white'}
              />
              <RegularTextGray>Male</RegularTextGray>
            </View>
            <View style={styles.row}>
              <MaterialIcons
                onPress={() => setGender(2)}
                name={gender === 2 ? 'radio-button-on' : 'radio-button-off'}
                size={24}
                color={gender === 2 ? COLORS.primary : 'white'}
              />
              <RegularTextGray>Female</RegularTextGray>
            </View>
          </View>

          <View style={styles.toggleView}>
            <TitleText>Is this for kids ?</TitleText>
            <ToggleSwitch
              trackOffStyle={{borderColor: 'lightgray', borderWidth: 1}}
              trackOnStyle={{borderColor: COLORS.primary, borderWidth: 1}}
              isOn={forKids}
              offColor={'transparent'}
              onColor={COLORS.primary}
              size="medium"
              onToggle={isOn => setForKids(isOn)}
            />
          </View>

          <PrimaryBtn onPress={() => navigation.goBack()} text="SAVE" />
        </View>
      </ScrollView>
    </MainLayout2>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.borderColour,
    borderRadius: 10,
    marginTop: 20,
    gap: 15,
  },
  toggleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 50,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    gap: 3,
    marginTop: 5,
  },
});
