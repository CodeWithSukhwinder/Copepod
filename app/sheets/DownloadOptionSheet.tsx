import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {
  ScrollView,
  SheetManager,
} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';
import {COLORS} from '../styles';
import {MediumText, RegularText, RegularTextGray} from '../components/MyText';
import {RootStackParams} from '../navigation/types';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LikeModal from '../modals/LikeModal';

const DownloadOptionsSheet = (props: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isLikeModalOpen, setIsLikeModalOpen] = React.useState(false);

  const close = () => {
    SheetManager.hide(SHEETS.DownloadOptionsSheet);
  };

  return (
    <ActionSheet
      containerStyle={{
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 0,
        paddingBottom: 15,
        backgroundColor: '#151515',
        borderWidth: 1,
        borderColor: 'gray',
        borderBottomWidth: 0,
      }}
      id={props.sheetId}
      gestureEnabled>
      <View>
        <View style={{marginHorizontal: 10}}>
          <View
            style={{
              marginVertical: 15,
              marginBottom: 50,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Entypo name="cross" size={24} color="#151515" />
            <MediumText>Richard The Lionheart</MediumText>
            <Entypo
              onPress={() => {
                SheetManager.hide(SHEETS.DownloadOptionsSheet);
              }}
              name="cross"
              size={35}
              color="gray"
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              SheetManager.hide(SHEETS.DownloadOptionsSheet),
                navigation.navigate('MoreInfo');
            }}
            style={styles.row}>
            <Feather name="info" size={22} color="white" />
            <RegularText>More info</RegularText>
          </TouchableOpacity>

          <View style={styles.row}>
            <AntDesign name="download" size={22} color="gray" />
            <RegularTextGray>Downloaded</RegularTextGray>
          </View>

          {isLikeModalOpen && (
            <LikeModal onHide={() => setIsLikeModalOpen(false)} />
          )}
          <TouchableOpacity
            onPress={() => {
              setIsLikeModalOpen(true);
            }}
            style={styles.row}>
            <AntDesign name="like2" size={22} color="white" />
            <RegularText>Like</RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsLikeModalOpen(true);
            }}
            style={styles.row}>
            <AntDesign name="dislike2" size={22} color="white" />
            <RegularText>Not for Me</RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              SheetManager.hide(SHEETS.DownloadOptionsSheet);
            }}
            style={styles.row}>
            <AntDesign name="delete" size={22} color={COLORS.primary} />
            <RegularText style={{color: COLORS.primary}}>
              Delete from Row
            </RegularText>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

export default DownloadOptionsSheet;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 15,
    marginHorizontal: 15,
    alignItems: 'center',
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 13,
  },
});
