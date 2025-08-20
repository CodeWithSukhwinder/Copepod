import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {onSharePost} from '../../utils/helper';

const Buttons = () => {
  const [added, setAdded] = useState(false);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [fav, setFav] = useState(false);
  const [view, setView] = useState(1);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
      }}>
      <TouchableOpacity
        onPress={() => setAdded(!added)}
        style={[
          styles.button,
          {backgroundColor: added ? 'red' : 'transparent'},
        ]}>
        <AntDesign name="plus" size={24} color={added ? 'white' : 'gray'} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setLike(!like)} style={styles.button}>
        <AntDesign
          name={like ? 'like1' : 'like2'}
          size={24}
          color={like ? 'red' : 'gray'}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setDisLike(!disLike)}
        style={styles.button}>
        <AntDesign
          name={disLike ? 'dislike1' : 'dislike2'}
          size={24}
          color={disLike ? 'red' : 'gray'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onSharePost} style={styles.button}>
        <AntDesign name="sharealt" size={24} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setFav(!fav)} style={styles.button}>
        <AntDesign
          name={fav ? 'heart' : 'hearto'}
          size={24}
          color={fav ? 'red' : 'gray'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 45,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
  },
});
