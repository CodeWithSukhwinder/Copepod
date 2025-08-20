import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Pressable,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from 'react-native';
import React, {useRef, useState} from 'react';
import VideoDes from './VideoDes';
import {COLORS} from '../../styles';
import {RegularText, TitleText} from '../../components/MyText';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import Orientation from 'react-native-orientation-locker';

//@ts-ignore
import Video, {VideoRef} from 'react-native-video';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParams, RootStackParams} from '../../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {SheetManager} from 'react-native-actions-sheet';
import {SHEETS} from '../../sheets/sheets';
import {useHideBottomBar} from '../../hook/useHideBottomBar';
import Buttons from './Buttons';
import Description from './Description';
import Comments from './Comments';

const LiveScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParams>>();

  const [clicked, setClicked] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const [view, setView] = useState(1);
  const [progress, setProgress] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);
  const videoRef = useRef();
  useHideBottomBar()
  //@ts-ignore
  const format = seconds => {
    //@ts-ignore
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 1}}>
        <StatusBar hidden={fullScreen} />

        <Pressable
          onPress={() => {
            setClicked(!clicked);
          }}
          style={[
            styles.videoContainer,
            {height: fullScreen ? '100%' : 200},
            {marginTop: fullScreen ? 0 : 30},
            {marginHorizontal: fullScreen ? 0 : 20},
            {borderRadius: fullScreen ? 0 : 7},
          ]}>
          <>
            <Video
              paused={paused}
              // Can be a URL or a local file.
              source={{
                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              // Store reference
              ref={videoRef}
              onProgress={(x: any) => {
                setProgress(x);
              }}
              // Callback when remote video is buffering
              // onBuffer={onBuffer}
              // Callback when video cannot be loaded
              // onError={onError}
              // muted={true}
              style={{
                width: '100%',
                height: fullScreen ? '100%' : 200,
                borderRadius: fullScreen ? 0 : 7,
              }}
              resizeMode="cover"
            />

            {clicked && (
              <TouchableOpacity
                onPress={() => setClicked(false)}
                style={styles.videoButtonsView}>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    top: 10,
                    position: 'absolute',
                    alignSelf: 'flex-end',
                    paddingRight: 5,
                    alignItems: 'center',
                  }}>
                  <AntDesign name="setting" size={24} color="white" />
                  {fullScreen ? (
                    <Entypo
                      onPress={() => {
                        if (fullScreen) {
                          Orientation.lockToPortrait();
                        } else {
                          Orientation.lockToLandscape();
                        }
                        setFullScreen(!fullScreen);
                        navigation.goBack();
                      }}
                      name="cross"
                      size={35}
                      color="white"
                    />
                  ) : (
                    <Entypo
                      onPress={() => {
                        navigation.goBack();
                      }}
                      name="cross"
                      size={35}
                      color="white"
                    />
                  )}
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    gap: 40,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  {fullScreen && (
                    <TouchableOpacity
                      onPress={() => {
                        //@ts-ignore
                        videoRef.current.seek(progress.currentTime - 10);
                      }}>
                      <MaterialIcons name="replay-10" size={30} color="white" />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    onPress={() => {
                      setPaused(!paused);
                    }}>
                    <AntDesign
                      name={paused ? 'playcircleo' : 'pausecircleo'}
                      size={60}
                      color="white"
                    />
                  </TouchableOpacity>

                  {fullScreen && (
                    <TouchableOpacity
                      onPress={() => {
                        //@ts-ignore
                        videoRef.current.seek(progress.currentTime + 10);
                      }}>
                      <MaterialIcons
                        name="forward-10"
                        size={30}
                        color="white"
                      />
                    </TouchableOpacity>
                  )}
                </View>

                {fullScreen ? (
                  <View style={styles.timingView}>
                    <RegularText>{format(progress.currentTime)}</RegularText>
                    <Slider
                      style={{width: '75%', height: 40}}
                      minimumValue={0}
                      maximumValue={progress.seekableDuration}
                      minimumTrackTintColor="red"
                      maximumTrackTintColor="white"
                      thumbTintColor="red"
                      value={progress.currentTime}
                      onValueChange={x => {
                        videoRef.current.seek(x);
                      }}
                    />
                    <RegularText>
                      {format(progress.seekableDuration)}
                    </RegularText>

                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 15,
                        alignItems: 'center',
                      }}>
                      <AntDesign name="sound" size={24} color="white" />
                      <MaterialIcons
                        onPress={() => {
                          if (fullScreen) {
                            Orientation.lockToPortrait();
                          } else {
                            Orientation.lockToLandscape();
                          }
                          setFullScreen(!fullScreen);
                        }}
                        name="fullscreen"
                        size={30}
                        color="white"
                      />
                    </View>
                  </View>
                ) : (
                  <View style={styles.timingView}>
                    <RegularText>{format(progress.currentTime)}</RegularText>

                    <View
                      style={{
                        flexDirection: 'row',
                        gap: 15,
                        alignItems: 'center',
                      }}>
                      <MaterialIcons
                        name="connected-tv"
                        size={24}
                        color="white"
                      />
                      <AntDesign name="sound" size={24} color="white" />
                      <MaterialIcons
                        onPress={() => {
                          if (fullScreen) {
                            Orientation.lockToPortrait();
                          } else {
                            Orientation.lockToLandscape();
                          }
                          setFullScreen(!fullScreen);
                        }}
                        
                        name="fullscreen"
                        size={30}
                        color="white"
                      />
                    </View>
                  </View>
                )}

                {!fullScreen && (
                  <View
                    style={{
                      width: '107%',
                      height: 20,
                      position: 'absolute',
                      bottom: -10,
                      marginHorizontal: -11,
                    }}>
                    <Slider
                      minimumValue={0}
                      maximumValue={progress.seekableDuration}
                      minimumTrackTintColor="red"
                      maximumTrackTintColor="white"
                      thumbTintColor="red"
                      onValueChange={x => {
                        videoRef.current.seek(x);
                      }}
                      value={progress.currentTime}
                    />
                  </View>
                )}
              </TouchableOpacity>
            )}
          </>
        </Pressable>

        <ScrollView style={{flex: 1, marginHorizontal: 20}}>
          <VideoDes />
          <Buttons />

          <Description />

          {/* {COMMENTS} */}

          <RegularText
            style={{
              borderBottomWidth: 2,
              borderBottomColor: COLORS.primary,
              width: 110,
              marginVertical: 25,
            }}>
            COMMENTS
          </RegularText>

          <Comments />
        </ScrollView>
      </View>

      {/* {MESSAGE INPUT} */}
     {!fullScreen &&
     (
      <View
      style={{
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 40,
        }}>
        <Image
          style={{height: 50, width: 50, borderRadius: 40}}
          source={require('../../../assets/images/men.png')}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          style={{flex: 1, color: 'white'}}
          placeholder="Type here..."
          placeholderTextColor={'gray'}
        />
        <Feather name="send" size={24} color={COLORS.primary} />
      </View>
    </View>
     ) }
    </View>
  );
};

export default LiveScreen;

const styles = StyleSheet.create({
  videoContainer: {
    height: 200,
    borderRadius: 7,
    marginTop: 30,
    marginHorizontal: 20,
  },
  button: {
    height: 55,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    flexDirection: 'row',
    gap: 5,
  },
  videoButtonsView: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
  },
  timingView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  line: {
    width: 110,
    backgroundColor: COLORS.primary,
    height: 2,
    marginTop: 5,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    flex: 1,
  },
});
