import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MainLayout2 from '../../components/MainLayout2';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import {
  BigText,
  RegularText,
  SmallText,
  Text25,
  TitleText,
} from '../../components/MyText';
import Input from '../../components/Input';
import PrimaryBtn from '../../components/PrimaryBtn';
import {COLORS} from '../../styles';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import FreePlanModal from '../../modals/FreePlanModal';

const SubscriptionScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [isFreePlanModalOpen, setIsFreePlanModalOpen] = React.useState(false);
  return (
    <MainLayout2 title="Subscription" onBack={navigation.goBack}>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View style={{marginTop: 50, alignItems: 'center', gap: 10}}>
          <BigText>CoPePod</BigText>
          <RegularText style={{opacity: 0.8, textAlign: 'center'}}>
            Choose your perfect plan and unlock unlimited entertainment
          </RegularText>
        </View>

        {isFreePlanModalOpen && (
          <FreePlanModal onHide={() => setIsFreePlanModalOpen(false)} />
        )}

        <TouchableOpacity
          onPress={() => {
            setIsFreePlanModalOpen(true);
          }}
          style={styles.container}>
          <RegularText style={{color: COLORS.primary}} bold>
            Free <RegularText bold>Watching Plan</RegularText>
          </RegularText>
          <SmallText>Account for one person +3 movies</SmallText>
          <SmallText>watching limit in a month</SmallText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            SheetManager.show(SHEETS.StandardPlanSheet);
          }}
          style={styles.container}>
          <View style={styles.row}>
            <RegularText style={{color: COLORS.primary}} bold>
              Standard <RegularText bold>Watching Plan</RegularText>
            </RegularText>
            <RegularText style={{color: COLORS.primary}} bold>
              2.85 <RegularText bold>USD</RegularText>
            </RegularText>
          </View>
          <View style={styles.row}>
            <SmallText style={{width: '70%'}}>
              Account for 1 person + Unlimited movies watching limit in a month
            </SmallText>
            <SmallText>Click & Pay</SmallText>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            SheetManager.show(SHEETS.PremiumPlanSheet);
          }}
          style={styles.container}>
          <View style={styles.row}>
            <RegularText style={{color: COLORS.primary}} bold>
              Premium <RegularText bold>Watching Plan</RegularText>
            </RegularText>
            <RegularText style={{color: COLORS.primary}} bold>
              14.99 <RegularText bold>USD</RegularText>
            </RegularText>
          </View>
          <View style={styles.row}>
            <SmallText style={{width: '70%'}}>
              Account for 10 person + Unlimited movies watching limit in a month
            </SmallText>
            <SmallText>Click & Pay</SmallText>
          </View>
        </TouchableOpacity>
      </View>
    </MainLayout2>
  );
};

export default SubscriptionScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
