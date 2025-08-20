import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../navigation/types';
import {RegularText} from '../../components/MyText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../styles';
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
const SettingScreen = () => {
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);

  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  return (
    <MainLayout3 onBack={navigation.goBack} title="Setting">
      <View style={{flex: 1, paddingHorizontal: 15}}>
        <LogoutPopup
          visible={logoutPopupVisible}
          onCancel={() => setLogoutPopupVisible(false)}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.borderColour,
            borderRadius: 10,
            marginTop: 25,
          }}>
          <Row
            onPress={() => navigation.navigate('AccountSetting')}
            icon={() => <Feather name="user" size={24} color="white" />}
            text="Account Setting"
          />
          <Line />

          <Row
            onPress={() => navigation.navigate('WatchlistAndFavourite')}
            icon={() => <AntDesign name="filetext1" size={24} color="white" />}
            text="Watchlist & Favorite"
          />
          <Line />

          <Row
            onPress={() => navigation.navigate('WatchHistory')}
            icon={() => <Feather name="bell" size={24} color="white" />}
            text="Watch History"
          />
          <Line />

          <Row
            onPress={() => navigation.navigate('PaymentMethod')}
            icon={() => <Feather name="dollar-sign" size={24} color="white" />}
            text="Manage Payment"
          />
          <Line />

          <Row
            onPress={() => navigation.navigate('Download')}
            icon={() => <AntDesign name="download" size={24} color="white" />}
            text="Download"
          />
          <Line />

          <Row
            onPress={() => navigation.navigate('AppSetting')}
            icon={() => <AntDesign name="setting" size={24} color="white" />}
            text="App Settings"
          />
          <Line />

          <Row
            onPress={() => navigation.navigate('Subscription')}
            icon={() => <Feather name="dollar-sign" size={24} color="white" />}
            text="Subscription"
          />
          <Line />

          <Row
            onPress={() => navigation.navigate('Help')}
            icon={() => (
              <MaterialIcons name="help-outline" size={24} color="white" />
            )}
            text="Help"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            setLogoutPopupVisible(true);
          }}
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <MaterialCommunityIcons
            name="logout"
            size={24}
            color={COLORS.primary}
          />
          <RegularText>Sign Out</RegularText>
        </TouchableOpacity>
      </View>
    </MainLayout3>
  );
};

export default SettingScreen;
