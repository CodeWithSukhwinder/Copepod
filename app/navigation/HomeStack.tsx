import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {HomeStackParams} from './types';
import SearchScreen from '../screens/SearchScreen';
import MoreInfoScreen from '../screens/MoreInfoScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import LiveScreen from '../screens/LiveScreen';

const Stack = createNativeStackNavigator<HomeStackParams>();
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="MoreInfo" component={MoreInfoScreen} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} />
      <Stack.Screen name="LiveScreen" component={LiveScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
