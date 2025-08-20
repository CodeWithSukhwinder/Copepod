import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ToggleSwitch from 'toggle-switch-react-native';

import {
  BigText,
  RegularText,
  SmallText,
  Text25,
  TitleText,
} from '../../components/MyText';
import {COLORS} from '../../styles';
import Line from '../../components/Line';
import MainLayout2 from '../../components/MainLayout2';
import DeleteAllDownlaodModal from '../../modals/DeleteAllDownload';

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
          paddingHorizontal: 25,
          paddingVertical: 18,
        }}>
        <View>{icon && icon()}</View>

        <RegularText style={{flex: 1}}>{text}</RegularText>

        <AntDesign name="right" color={COLORS.white} size={15} />
      </TouchableOpacity>
    </React.Fragment>
  );
};

type Row2Props = {
  text: string;
  des: string;

  icon: () => React.ReactNode;
  onPress?: () => void;
};

const Row2 = ({text, des, icon, onPress}: Row2Props) => {
  return (
    <React.Fragment>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          paddingHorizontal: 25,
          paddingVertical: 15,
        }}>
        <View>{icon && icon()}</View>
        <View style={{flex: 1}}>
          <RegularText>{text}</RegularText>
          <SmallText>{des}</SmallText>
        </View>
        <AntDesign name="right" color={COLORS.white} size={15} />
      </TouchableOpacity>
    </React.Fragment>
  );
};

const AppSettingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [wifiOnly, setWifiOnly] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  return (
    <MainLayout2 onBack={navigation.goBack} title="App Setting">
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
            <AntDesign name="setting" size={24} color="white" />
            <Text25>App Settings</Text25>
          </View>
          <RegularText>
            Customize your streaming experience with our app settings.
          </RegularText>

          <RegularText bold style={{marginTop: 30}}>
            VIDEO PLAYBACK
          </RegularText>

          <View style={styles.container}>
            <Row2
              onPress={() => navigation.navigate('CellularData')}
              icon={() => (
                <Octicons name="device-mobile" size={24} color="white" />
              )}
              text="Cellular Data Usage"
              des="Automatic"
            />
          </View>

          <RegularText bold style={{marginTop: 30}}>
            DOWNLOADS
          </RegularText>

          <View style={styles.container}>
            <TouchableOpacity
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
                paddingHorizontal: 25,
                paddingVertical: 18,
              }}>
              <MaterialIcons name="wifi" size={24} color="white" />

              <RegularText style={{flex: 1}}>Wi-Fi Only</RegularText>

              <ToggleSwitch
                trackOffStyle={{borderColor: 'lightgray', borderWidth: 1}}
                trackOnStyle={{borderColor: COLORS.primary, borderWidth: 1}}
                isOn={wifiOnly}
                offColor={'transparent'}
                onColor={COLORS.primary}
                size="medium"
                onToggle={isOn => setWifiOnly(isOn)}
              />
            </TouchableOpacity>
            <Line />
            <Row2
              // onPress={() => navigation.navigate('MyWallet')}
              icon={() => <Feather name="download" size={24} color="white" />}
              text="Smart Downloads"
              des="Download Next Episode"
            />
            <Line />
            <Row2
              onPress={() => navigation.navigate('VideoQuality')}
              icon={() => <AntDesign name="youtube" size={24} color="white" />}
              text="Video Quality"
              des="Higher"
            />
            <Line />
            {isDeleteModalOpen && (
              <DeleteAllDownlaodModal
                onHide={() => setIsDeleteModalOpen(false)}
              />
            )}
            <Row
              onPress={() => {
                setIsDeleteModalOpen(true);
              }}
              icon={() => <AntDesign name="delete" size={24} color="white" />}
              text="Delete All Downloads"
            />
          </View>

          <RegularText bold style={{marginTop: 30}}>
            ABOUT
          </RegularText>

          <View style={styles.container}>
            <Row
              // onPress={() => navigation.navigate('MyWallet')}
              icon={() => (
                <MaterialCommunityIcons
                  name="signal-variant"
                  size={24}
                  color="white"
                />
              )}
              text="Internet Speed"
            />
            <Line />
            <Row
              onPress={() => navigation.navigate('PrivacyPolicy')}
              icon={() => (
                <AntDesign name="filetext1" size={24} color="white" />
              )}
              text="Privacy Policy"
            />
          </View>

          <View style={{alignSelf: 'center', marginTop: 40, marginBottom: 20}}>
            <SmallText>
              Copyright <SmallText bold>Meco</SmallText>
              <SmallText style={{color: COLORS.primary}}>Nata</SmallText> 2020.
              All Rights Reserved
            </SmallText>
          </View>
        </ScrollView>
      </View>
    </MainLayout2>
  );
};

export default AppSettingScreen;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginTop: 10,
  },
});
