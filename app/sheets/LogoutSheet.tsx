import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {
  ScrollView,
  SheetManager,
} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';
import {COLORS} from '../styles';
import {TitleText} from '../components/MyText';
import {RootStackParams} from '../navigation/types';

const close = () => {
  SheetManager.hide(SHEETS.GenderSelectSheet);
};

const LogoutSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [selectedId, setSelectedId] = React.useState<null | number>(null);
  const [isSelect, setIsSelect] = React.useState(false);
  const close = () => {
    SheetManager.hide(SHEETS.LogoutSheet);
  };

  return (
    <ActionSheet
      containerStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 15,
        paddingBottom: 30,
      }}
      id={props.sheetId}
      gestureEnabled>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
            color: 'black',
          }}>
          Logout
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.lightGrey,
            marginVertical: 20,
          }}></View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Are you sure want to logout?
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => SheetManager.hide(SHEETS.LogoutSheet)}
            style={{
              backgroundColor: '#EEEEEE',
              width: '48%',
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TitleText>Cancel</TitleText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login'),
                SheetManager.hide(SHEETS.LogoutSheet);
            }}
            style={{
              backgroundColor: 'black',
              width: '48%',
              height: 50,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TitleText style={{color: 'white'}}>Logout</TitleText>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

export default LogoutSheet;
