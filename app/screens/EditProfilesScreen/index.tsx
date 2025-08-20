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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams, RootStackParams} from '../../navigation/types';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useDispatch} from 'react-redux';
import {setAuth} from '../../redux/feature/auth/authSlice';
import MainLayout3 from '../../components/MainLayout3';
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

const EditProfilesScreen = () => {
  const d = useWindowDimensions();

  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();

  return (
    <MainLayout3 title="Edit Profile" onBack={navigation.goBack}>
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
                      onPress={() => navigation.navigate('EditProfile')}>
                      <Image
                        source={item.img}
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => navigation.navigate('EditProfile')}
                        style={{
                          position: 'absolute',
                          zIndex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                          width: '100%',
                          borderRadius: 100,
                          backgroundColor: 'rgba(0,0,0,0.5)',
                        }}>
                        <SimpleLineIcons
                          name="pencil"
                          size={20}
                          color="white"
                        />
                      </TouchableOpacity>
                    </TouchableOpacity>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      {item.name}
                    </Text>
                  </View>
                );
              }
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('CreateProfile')}
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
                    <Image source={item.img} />
                  </TouchableOpacity>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {item.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </MainLayout3>
  );
};

export default EditProfilesScreen;
const styles = StyleSheet.create({});
