import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';
import MainLayout from '../../components/MainLayout';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import MainLayout4 from '../../components/MainLayout4';
import Octicons from 'react-native-vector-icons/Octicons';
import {RegularText} from '../../components/MyText';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../redux/feature/auth/authSlice';
const data = [
  {
    img: require('../../../assets/images/men.png'),
    isBtn: true,
    name: 'Jhon',
  },
  {
    img: require('../../../assets/images/kids.png'),
    isBtn: true,
    name: 'Kids',
  },
  {
    img: require('../../../assets/images/girl.png'),
    isBtn: true,
    name: 'Marry',
  },
  {
    img: require('../../../assets/images/marry.png'),
    isBtn: true,
    name: 'Jessica',
  },
  {
    img: require('../../../assets/images/add.png'),
    isBtn: false,
    name: 'Add',
  },
];

const SelectProfileScreen = () => {
  const dispatch = useDispatch();
  const d = useWindowDimensions();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleLogin = async () => {
    // if (!true) {
    dispatch(
      setAuth({
        name: 'GHOST',
        token: 'GHOST_TOKEN',
      }),
    );
    // } else {
    //   //@ts-ignore
    //   navigation.navigate('MainTab', {user: null, accessToken: null});
    // }
  };
  return (
    <MainLayout4
      title="Who is Watching"
      onBack={navigation.goBack}
      rightSideIcon={() => {
        return (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
              marginLeft: -40,
            }}>
            <Octicons name="pencil" size={17} color="white" />
            <RegularText>Edit</RegularText>
          </TouchableOpacity>
        );
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}>
        <View style={{alignItems: 'center'}}>
          <FlatList
            data={data}
            contentContainerStyle={{
              marginTop: 20,
              columnGap: 10,
              justifyContent: 'center',
            }}
            numColumns={2}
            renderItem={({item}) => {
              if (item.isBtn) {
                return (
                  <View>
                    <TouchableOpacity
                      style={{
                        width: d.width / 3.5,
                        margin: 10,
                        backgroundColor: 'grey',
                        height: d.width / 3.5,
                        borderRadius: d.width / 3,
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={handleLogin}>
                      <Image
                        source={item.img}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      {item.name}
                    </Text>
                  </View>
                );
              }
              return (
                <View>
                  <View
                    style={{
                      width: d.width / 3.5,
                      margin: 10,
                      backgroundColor: 'gray',
                      height: d.width / 3.5,
                      borderRadius: d.width / 3.5,
                      overflow: 'hidden',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={item.img}
                      style={{
                        width: !item.isBtn ? 30 : '100%',
                        height: !item.isBtn ? 30 : '100%',
                      }}
                    />
                  </View>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {item.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </MainLayout4>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    height: 120,
    width: 120,
    marginTop: 40,
    marginLeft: 60,
    borderRadius: 70,
  },
});

export default SelectProfileScreen;
