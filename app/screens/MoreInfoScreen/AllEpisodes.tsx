import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {RegularText} from '../../components/MyText';
import {COLORS} from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {
    name: '1. Episode(Lorem ispum)',
    img: require('../../../assets/images/MovieImages/img12.png'),
  },
  {
    name: '2. Episode(Concateur)',
    img: require('../../../assets/images/MovieImages/img10.png'),
  },
  {
    name: '3. Episode(La Prada)',
    img: require('../../../assets/images/MovieImages/img11.png'),
  },
  {
    name: '4. Episode(Non Troppo )',
    img: require('../../../assets/images/MovieImages/img9.png'),
  },
  {
    name: '5. Episode(Disaronno )',
    img: require('../../../assets/images/MovieImages/img8.png'),
  },
];

const AllEpisodes = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.photo}>
                <Image style={styles.photo} source={item.img} />
              </TouchableOpacity>
              <View style={{flex: 1}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <RegularText style={{fontSize: 15}}>{item.name}</RegularText>
                  <AntDesign name="download" size={18} color="white" />
                </View>
                <RegularText
                  style={{
                    opacity: 0.7,
                    width: 150,
                    fontSize: 13,
                  }}>
                  Aenean lobortis at elit in porta. Macen mollis, enim sed
                  posuere sodales.
                </RegularText>
              </View>
            </View>
          );
        }}
      />

      <View style={{height: 40}}></View>
    </View>
  );
};

export default AllEpisodes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 15,
    alignItems: 'center',
  },
  photo: {
    height: 75,
    width: 105,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
});
