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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../navigation/types';

const {width, height} = Dimensions.get('screen');
type Props = {
  onHide?: () => void;
};

const DeleteProfileModal = ({onHide}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
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
              <TitleText style={{color: 'black', marginTop: 10, fontSize: 20}}>
                Delete ?
              </TitleText>
              <RegularText style={{color: 'black', marginTop: 10}}>
                Are you sure you want to Delete Profile
              </RegularText>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={onHide} style={styles.buttons}>
                <RegularText style={{color: 'black'}}>Cancel</RegularText>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Profile'), onHide;
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

export default DeleteProfileModal;

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
