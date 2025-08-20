import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NewHotStackParams} from './types';
import NewAndHotScreen from '../screens/NewAndHotScreen';
import CategoryListScreen from '../screens/CategoryListScreen';

const Stack = createNativeStackNavigator<NewHotStackParams>();
const NewHotStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NewHot" component={NewAndHotScreen} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} />
    </Stack.Navigator>
  );
};

export default NewHotStack;
