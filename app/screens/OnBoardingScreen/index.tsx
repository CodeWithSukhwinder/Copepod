import {
  View,
  FlatList,
  Dimensions,
  NativeSyntheticEvent,
  ImageBackground,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BoardOne from './BoardOne';
import BoardTwo from './BoardTwo';
import {NativeScrollEvent} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MainLayout from '../../components/MainLayout';
import PrimaryBtn from '../../components/PrimaryBtn';
import {SmallText} from '../../components/MyText';
import {COLORS} from '../../styles';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const OnBoardingScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  let listRef = useRef<any>(null);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveIndex(roundIndex);
  };

  const handleNext = () => {
    if (activeIndex >= 1) return;
    listRef?.current?.scrollToIndex({index: activeIndex + 1}, 3000);
  };

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/bgImg.jpg')}>
      <View style={{flex: 1}}>
        <FlatList
          ref={listRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialScrollIndex={0}
          pagingEnabled
          onScroll={handleScroll}
          data={['one', 'two']}
          renderItem={({item}) => {
            return (
              <View style={{}}>
                {item === 'one' && (
                  <BoardOne handleSkip={handleSkip} handleNext={handleNext} />
                )}
                {item === 'two' && (
                  <BoardTwo handleSkip={handleSkip} handleNext={handleNext} />
                )}
              </View>
            );
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10,
            gap: 7,
          }}>
          <View
            style={{
              width: activeIndex === 0 ? 8 : 8,
              height: 8,
              borderRadius: 20,
              backgroundColor: activeIndex === 0 ? 'white' : 'gray',
            }}></View>
          <View
            style={{
              width: activeIndex === 1 ? 8 : 8,
              height: 8,
              borderRadius: 20,
              backgroundColor: activeIndex === 1 ? 'white' : 'gray',
            }}></View>
        </View>

        <View style={{marginBottom: 35, marginHorizontal: 15}}>
          <PrimaryBtn
            text="NEXT"
            onPress={() =>
              activeIndex === 0 ? handleNext() : navigation.navigate('Login')
            }
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnBoardingScreen;
