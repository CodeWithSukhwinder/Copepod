import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProfileStackParams} from '../../navigation/types';
import MainLayout3 from '../../components/MainLayout3';
import {TitleText} from '../../components/MyText';
import Watchlist from './Watchlist';
import Favourite from './Favourite';
import {COLORS} from '../../styles';

const WatchlistAndFavouriteScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProfileStackParams>>();
  const [view, setView] = useState(1);
  return (
    <MainLayout3 onBack={navigation.goBack}>
      <View style={{flex: 1}}>
        <View
          style={{
            borderBlockColor: 'gray',
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => setView(1)}
            style={{
              borderBlockColor: view === 1 ? COLORS.primary : 'gray',
              borderBottomWidth: view === 1 ? 2 : 0,
            }}>
            <TitleText style={{color: view === 1 ? COLORS.primary : 'white'}}>
              Watchlist
            </TitleText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setView(2)}
            style={{
              borderBlockColor: view === 2 ? COLORS.primary : 'gray',
              borderBottomWidth: view === 2 ? 2 : 0,
            }}>
            <TitleText style={{color: view === 2 ? COLORS.primary : 'white'}}>
              Favourite
            </TitleText>
          </TouchableOpacity>
        </View>

        {view === 1 ? <Watchlist /> : null}
        {view === 2 ? <Favourite /> : null}
      </View>
    </MainLayout3>
  );
};

export default WatchlistAndFavouriteScreen;
