import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Buttons from './Buttons';
import LatestMovies from './LatestMovies';
import Line from '../../components/Line';
import LatestWebSeriess from './LatestWebSeries';
import LatestTvShows from './LatestTvShows';
import NewAndHot from './LatestWatch';
import LatestWatch from './LatestWatch';
import ComingSoon from './ComingSoon';
import ListOfGenre from './ListOfGenre';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView style={{flex: 1}}>
        <Header />
        <Slider />
        <Buttons />
        <LatestMovies />

        <LatestWatch />

        <LatestTvShows />
        <ListOfGenre />
        <ComingSoon />
        <LatestWebSeriess />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
