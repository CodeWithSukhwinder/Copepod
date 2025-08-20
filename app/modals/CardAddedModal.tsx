import {
  Dimensions,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {COLORS} from '../styles';
import {Text20} from '../components/MyText';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/types';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const CardAddedModal = ({onHide}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <Modal visible={true} transparent>
      <TouchableWithoutFeedback onPress={onHide}>
        <View
          style={{
            width,
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
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
                Credit Card Has Been
              </Text20>
              <Text20 style={{color: 'black', marginTop: 5}}>
                Added Successfully!
              </Text20>
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PaymentMethod'), onHide;
              }}
              style={styles.buttons}>
              <Text20 style={{color: 'black'}}>DONE!</Text20>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CardAddedModal;

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
