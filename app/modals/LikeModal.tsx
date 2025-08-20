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

import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const LikeModal = ({onHide}: Props) => {
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '90%',
              height: 170,
              borderRadius: 15,
              backgroundColor: COLORS.white,
              alignSelf: 'center',
              marginBottom: 50,
              paddingTop: 20,
            }}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text20 style={{color: 'black', marginTop: 10}}>
                Thanks For Rating,
              </Text20>
              <Text20 style={{color: 'black', marginTop: 5}}>Daniel!</Text20>
            </View>

            <TouchableOpacity onPress={onHide} style={styles.buttons}>
              <Text20 style={{color: 'black'}}>DONE!</Text20>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LikeModal;

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: COLORS.grey,
    marginTop: 15,
  },
});
