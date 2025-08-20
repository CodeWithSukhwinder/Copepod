import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {CategoriesStackParams} from './types';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import MoreInfoScreen from '../screens/MoreInfoScreen';

const Stack = createNativeStackNavigator<CategoriesStackParams>();
const CategoriesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} />
      <Stack.Screen name="MoreInfo" component={MoreInfoScreen} />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
