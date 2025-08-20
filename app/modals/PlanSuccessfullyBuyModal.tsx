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
import {MediumText, Text20, TitleText} from '../components/MyText';
import DoneSvg from '../../assets/icon/svg/Done.svg';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../sheets/sheets';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const PlanBuyModal = ({onHide}: Props) => {
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
              width: '80%',
              height: 270,
              borderRadius: 15,
              backgroundColor: COLORS.white,
              alignSelf: 'center',
              marginBottom: 50,
              paddingVertical: 20,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <DoneSvg />
              <Text20 style={{color: 'black', marginTop: 10}}>
                You have Activated Free
              </Text20>
              <Text20 style={{color: 'black', marginTop: 5}}>
                Watching Plan Successfully!
              </Text20>
            </View>

            <TouchableOpacity onPress={onHide} style={styles.buttons}>
              <MediumText style={{color: 'black'}}>Go!</MediumText>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PlanBuyModal;

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.black,
    height: 60,
    borderTopWidth: 1,
    borderTopColor: COLORS.grey,
    marginTop: 15,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 50,
  },
});
