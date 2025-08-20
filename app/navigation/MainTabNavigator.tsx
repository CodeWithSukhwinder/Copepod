import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import {TabNavigatorParams} from './types';
import HomeStack from './HomeStack';
import {COLORS} from '../styles';
import HomeSvg from '../../assets/icon/svg/Home.svg';
import HomeOffSvg from '../../assets/icon/svg/HomeOff.svg';
import CatSvg from '../../assets/icon/svg/News.svg';
import CatOffSvg from '../../assets/icon/svg/Newsoff.svg';
import NewHotSvg from '../../assets/icon/svg/NewHot.svg';
import NewHotOffSvg from '../../assets/icon/svg/NewHotOff.svg';
import AccountSvg from '../../assets/icon/svg/Account.svg';
import AccountOffSvg from '../../assets/icon/svg/AccountOff.svg';
import ProfileStack from './AccountStack';
import NewHotStack from './NewAndHotStack';
import CategoriesStack from './CategoriesStack';

const Tab = createBottomTabNavigator<TabNavigatorParams>();
const {width} = Dimensions.get('screen');

const Dot = () => (
  <View
    style={{
      width: 5,
      height: 5,
      borderRadius: 5,
      backgroundColor: 'black',
      marginVertical: 5,
    }}
  />
);
// @ts-ignore
export const HideTabContext = React.createContext();
const MainTabNavigator = () => {
  const [hideTab, setHideTab] = React.useState(false);
  return (
    <HideTabContext.Provider value={{hideTab, setHideTab}}>
      <Tab.Navigator
        initialRouteName="HomeTab"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: {
            ...styles.tabBarStyle,
            opacity: hideTab ? 0 : 1,
          },
          tabBarShowLabel: false,
          tabBarBackground: () => {
            return (
              <View
                style={{
                  position: 'absolute',
                  zIndex: 1,
                  bottom: 0,
                  backgroundColor: 'transparent',
                }}></View>
            );
          },
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: 'wrwerw',
            tabBarActiveTintColor: 'red',
            tabBarIcon: ({focused}) => {
              return (
                <React.Fragment>
                  {focused ? <HomeSvg /> : <HomeOffSvg />}
                </React.Fragment>
              );
            },
          }}
          name="HomeTab"
          component={HomeStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'wrwerw',
            tabBarActiveTintColor: 'red',
            tabBarIcon: ({focused}) => {
              return (
                <React.Fragment>
                  {focused ? <CatOffSvg /> : <CatSvg />}
                </React.Fragment>
              );
            },
          }}
          name="CategoriesTab"
          component={CategoriesStack}
        />

        <Tab.Screen
          options={{
            tabBarLabel: 'erewr',
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return (
                <React.Fragment>
                  {focused ? <NewHotSvg /> : <NewHotOffSvg />}
                </React.Fragment>
              );
            },
          }}
          name="NewHotTab"
          component={NewHotStack}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'fref',
            tabBarActiveTintColor: COLORS.primary,
            tabBarIcon: ({focused}) => {
              return (
                <React.Fragment>
                  {focused ? <AccountSvg /> : <AccountOffSvg />}
                </React.Fragment>
              );
            },
          }}
          name="ProfileTab"
          component={ProfileStack}
        />
      </Tab.Navigator>
    </HideTabContext.Provider>
  );
};

export default MainTabNavigator;

export const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    backgroundColor: '#151515',
    borderColor: 'gray',
    borderWidth: 0,
    elevation: 0,
    alignItems: 'center',
    paddingTop: 10,
  },
});
