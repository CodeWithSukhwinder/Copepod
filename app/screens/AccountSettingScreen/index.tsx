import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../navigation/types';
import {RegularText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {COLORS} from '../../styles';
import MainLayout2 from '../../components/MainLayout2';
import Line from '../../components/Line';
import LogoutPopup from '../../components/popups/LogoutPopup';
import MainLayout3 from '../../components/MainLayout3';

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
const AccountSettingScreen = () => {
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout3 onBack={navigation.goBack} title="Account Setting">
      <View style={{flex: 1, paddingHorizontal: 20}}>
        <LogoutPopup
          visible={logoutPopupVisible}
          onCancel={() => setLogoutPopupVisible(false)}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: '#3A3B3C',
            borderRadius: 10,
            marginTop: 25,
          }}>
          <Row
            onPress={() => navigation.navigate('UpdatePhoneNumber')}
            icon={() => <Feather name="edit" size={22} color="white" />}
            text="Update Phone Number "
          />

          <Line />
          <Row
            onPress={() => navigation.navigate('Notification')}
            icon={() => <Feather name="bell" size={22} color="white" />}
            text="Notification"
          />
          <Line />
          <Row
            onPress={() => navigation.navigate('Language')}
            icon={() => (
              <SimpleLineIcons name="globe" size={22} color="white" />
            )}
            text="App Language"
          />
        </View>
      </View>
    </MainLayout3>
  );
};

export default AccountSettingScreen;
