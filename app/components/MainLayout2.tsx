import React from 'react';
import {COLORS} from '../styles';
import {View, ScrollView, Image, Dimensions, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RegularText} from './MyText';

type Props = {
  children: React.ReactNode;
  title?: string;
  skipBtn?: string;
  onBack?: () => void;
  onPress?: () => void;
  onBackTitle?: string;
  rightSideIcon?: () => React.ReactNode;
};

const MainLayout2 = ({children, title, onBack, rightSideIcon}: Props) => {
  const extraStyle = {
    marginVertical: 15,
    marginHorizontal: 15,
    marginTop: 0,
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black', paddingTop: 15}}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          },
          onBack ? extraStyle : {},
        ]}>
        {onBack && (
          <TouchableOpacity onPress={onBack}>
            <AntDesign name="arrowleft" size={25} color={COLORS.white} />
          </TouchableOpacity>
        )}
        <RegularText
          style={{
            flex: 1,
            textAlign: 'center',
            color: COLORS.white,
            fontSize: 17,
          }}>
          {title}
        </RegularText>

        {rightSideIcon ? rightSideIcon() : <View style={{width: 1}} />}
      </View>
      {title && (
        <View
          style={{
            borderWidth: 0.3,
            borderColor: 'gray',
          }}
        />
      )}
      {children}
    </SafeAreaView>
  );
};

export default MainLayout2;
