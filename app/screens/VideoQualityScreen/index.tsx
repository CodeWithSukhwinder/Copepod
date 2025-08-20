import {View, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigation/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {RegularText, SmallText, Text25} from '../../components/MyText';
import {COLORS} from '../../styles';
import MainLayout2 from '../../components/MainLayout2';

const data = [
  {
    id: 1,
    text: 'Standard',
    des: 'Downloads faster and uses less storage.',
  },
  {
    id: 2,
    text: 'Higher',
    des: 'Uses more storage',
  },
];

const Item = ({
  text,
  onSelect,
  isSelected,
  des,
}: {
  text: string;
  des: string;
  onSelect: () => void;
  isSelected: boolean;
}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.container}>
      <View>
        <RegularText>{text}</RegularText>
        <SmallText>{des}</SmallText>
      </View>
      <AntDesign
        name="check"
        size={24}
        color={isSelected ? COLORS.white : COLORS.black}
      />
    </TouchableOpacity>
  );
};

const VideoQualityScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [automatic, setAutomatic] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState<null | number>(null);

  return (
    <MainLayout2 onBack={navigation.goBack} title="Video Quality">
      <View style={{flex: 1, marginHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginTop: 15,
            marginBottom: 5,
          }}>
          <Octicons name="device-mobile" size={24} color="white" />
          <Text25>Video Quality</Text25>
        </View>
        <RegularText style={{marginBottom: 50}}>
          Experience cinematic immersion with stunning video quality on the
          Netflix app.
        </RegularText>

        {data.map(i => {
          return (
            <Item
              onSelect={() => setSelectedId(i.id)}
              text={i.text}
              des={i.des}
              isSelected={i.id === selectedId}
            />
          );
        })}
      </View>
    </MainLayout2>
  );
};

export default VideoQualityScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'gray',
    paddingVertical: 15,
  },
});
