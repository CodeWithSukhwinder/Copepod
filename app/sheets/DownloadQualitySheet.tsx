import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from './sheets';
import {COLORS} from '../styles';
import {MediumText, RegularText} from '../components/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DownloadQualitySheet = (props: any) => {
  const [isActive, setIsActive] = React.useState(1);

  const close = () => {
    SheetManager.hide(SHEETS.DownloadQualitySheet);
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
              marginBottom: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MediumText style={{color: COLORS.primary}}>
              Select Quality
            </MediumText>
          </View>

          <TouchableOpacity
            onPress={() => {
              setIsActive(1);
              close();
            }}
            style={styles.row}>
            <MaterialIcons
              name={isActive === 1 ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={isActive === 1 ? 'red' : 'gray'}
            />
            <RegularText>High</RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsActive(2);
              close();
            }}
            style={styles.row}>
            <MaterialIcons
              name={isActive === 2 ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={isActive === 2 ? 'red' : 'gray'}
            />
            <RegularText>Medium</RegularText>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsActive(3);
              close();
            }}
            style={styles.row}>
            <MaterialIcons
              name={isActive === 3 ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={isActive === 3 ? 'red' : 'gray'}
            />
            <RegularText>Low</RegularText>
          </TouchableOpacity>
        </View>
      </View>
    </ActionSheet>
  );
};

export default DownloadQualitySheet;

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
