import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParams} from './types';
import ProfileScreen from '../screens/ProfileScreen';
import AppSettingScreen from '../screens/AppSettingScreen';
import CellularDataScreen from '../screens/CellularDataUsage';
import HelpScreen from '../screens/HelpScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ChangeNumberScreen from '../screens/ChangePhoneNumber';
import ChangePlanScreen from '../screens/ChangePlanScreen';
import MoreInfoScreen from '../screens/MoreInfoScreen';
import ChangePasswordScreen from '../screens/ChangePassword';
import PaymentMethodScreen from '../screens/PaymentMethod';
import EditCreditCardScreen from '../screens/EditCreditCard';
import FaqScreen from '../screens/FaqScreen';
import DownloadScreen from '../screens/DownloadScreen';
import VideoQualityScreen from '../screens/VideoQualityScreen';
import WatchlistScreen from '../screens/WatchlistAndFavourite';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import SettingScreen from '../screens/SettingScreen';
import CategoryListScreen from '../screens/CategoryListScreen';
import AccountSettingScreen from '../screens/AccountSettingScreen';
import LanguageScreen from '../screens/LanguageScreen';
import UpdatePhoneNumberScreen from '../screens/UpdatePhoneNumber';
import TermsAndConditionScreen from '../screens/TermsAndConditions';
import WatchHistoryScreen from '../screens/WatchHistoryScreen';
import WatchlistAndFavouriteScreen from '../screens/WatchlistAndFavourite';
import EditProfilesScreen from '../screens/EditProfilesScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import CreateProfileScreen from '../screens/CreateProfile';

const Stack = createNativeStackNavigator<ProfileStackParams>();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="AppSetting" component={AppSettingScreen} />
      <Stack.Screen name="CellularData" component={CellularDataScreen} />
      <Stack.Screen name="VideoQuality" component={VideoQualityScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="ChangeNumber" component={ChangeNumberScreen} />
      <Stack.Screen name="ChangePlan" component={ChangePlanScreen} />
      <Stack.Screen name="MoreInfo" component={MoreInfoScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} />
      <Stack.Screen name="EditCreditCard" component={EditCreditCardScreen} />
      <Stack.Screen name="Faq" component={FaqScreen} />
      <Stack.Screen name="Watchlist" component={WatchlistScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="Download" component={DownloadScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="CategoryList" component={CategoryListScreen} />
      <Stack.Screen name="AccountSetting" component={AccountSettingScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="WatchHistory" component={WatchHistoryScreen} />
      <Stack.Screen name="EditProfiles" component={EditProfilesScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
      <Stack.Screen
        name="WatchlistAndFavourite"
        component={WatchlistAndFavouriteScreen}
      />
      <Stack.Screen
        name="TermsAndCondition"
        component={TermsAndConditionScreen}
      />
      <Stack.Screen
        name="UpdatePhoneNumber"
        component={UpdatePhoneNumberScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
