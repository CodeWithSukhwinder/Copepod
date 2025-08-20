import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {RegularText, SmallText, TitleText} from '../components/MyText';
import {SHEETS} from '../sheets/sheets';
import {SheetManager} from 'react-native-actions-sheet';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const DislikeModal = ({onHide}: Props) => {
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '75%',
              height: 170,
              borderRadius: 15,
              backgroundColor: COLORS.white,
              alignSelf: 'center',
              marginBottom: 50,
              paddingTop: 20,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <TitleText bold style={{color: 'black', marginTop: 10}}>
                Remove From Row!
              </TitleText>
              <SmallText style={{color: 'black', fontSize: 13, marginTop: 10}}>
                Are you sure you want to delete this video
              </SmallText>
              <SmallText style={{color: 'black', fontSize: 13}}>
                from your list row?
              </SmallText>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={onHide} style={styles.buttons}>
                <RegularText style={{color: 'black'}}>Cancel</RegularText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  SheetManager.hide(SHEETS.WatchlistOptionsSheet), onHide;
                }}
                style={styles.buttons}>
                <RegularText style={{color: 'black'}}>OK</RegularText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default DislikeModal;

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.grey,
    height: 50,
    borderTopWidth: 1,
    borderTopColor: COLORS.grey,
    marginTop: 10,
    width: '50%',
  },
});
