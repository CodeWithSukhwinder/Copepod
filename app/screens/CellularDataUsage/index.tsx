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

const data = [
  {
    id: 1,
    text: 'Wi-Fi Only',
  },
  {
    id: 2,
    text: 'Save Data',
  },
  {
    id: 3,
    text: 'Maximum Data',
  },
];

const Item = ({
  text,
  onSelect,
  isSelected,
}: {
  text: string;
  onSelect: () => void;
  isSelected: boolean;
}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <RegularText style={{color: isSelected ? COLORS.white : COLORS.grey}}>
        {text}
      </RegularText>
      <AntDesign
        name="check"
        size={24}
        color={isSelected ? COLORS.white : COLORS.black}
      />
    </TouchableOpacity>
  );
};

const CellularDataScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [automatic, setAutomatic] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState<null | number>(null);

  return (
    <MainLayout2 onBack={navigation.goBack} title="Data Usage">
      <View style={{flex: 1, marginHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 15,
            marginBottom: 5,
          }}>
          <Octicons name="device-mobile" size={24} color="white" />
          <Text25>Cellular Data Usage</Text25>
        </View>
        <RegularText>
          Manage your cellular data usage to enjoy uninterrupted streaming on
          the go.
        </RegularText>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 15,
            marginTop: 40,
          }}>
          <RegularText>Automatic</RegularText>
          <ToggleSwitch
            trackOffStyle={{borderColor: 'lightgray', borderWidth: 1}}
            trackOnStyle={{borderColor: COLORS.primary, borderWidth: 1}}
            isOn={automatic}
            offColor={'transparent'}
            onColor={COLORS.primary}
            size="medium"
            onToggle={isOn => setAutomatic(isOn)}
          />
        </View>
        {data.map(i => {
          return (
            <Item
              onSelect={() => setSelectedId(i.id)}
              text={i.text}
              isSelected={i.id === selectedId}
            />
          );
        })}
      </View>
    </MainLayout2>
  );
};

export default CellularDataScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingVertical: 15,
  },
});
