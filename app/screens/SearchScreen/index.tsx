import {View, TextInput, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Header';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import UpcomingMovies from './UpcomingMovies';

const SearchScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Header />
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            marginHorizontal: 15,
            marginTop: 25,
          }}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholderTextColor={'gray'}
              style={{fontSize: 16, flex: 1, color: 'white'}}
              placeholder="Search here..."
            />
            <Feather name="mic" size={22} color="gray" />
          </View>
          <MaterialIcons name="filter-list" size={44} color="gray" />
        </View>

        <UpcomingMovies />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 15,
  },
});
