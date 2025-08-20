import {View, Text, Dimensions, Image} from 'react-native';
import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {COLORS} from '../../styles';
import {
  MediumText,
  RegularText,
  SmallText,
  Text25,
  TitleText,
} from '../../components/MyText';
import {StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');

const data = [
  {
    id: 1,
    img: require('../../../assets/images/HeaderImg.png'),
  },
  {
    id: 2,
    img: require('../../../assets/images/HeaderImg.png'),
  },
  {
    id: 3,
    img: require('../../../assets/images/HeaderImg.png'),
  },
  {
    id: 4,
    img: require('../../../assets/images/HeaderImg.png'),
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  return (
    <React.Fragment>
      <View>
        <Carousel
          data={data}
          renderItem={({item, index}: any) => {
            return (
              <View
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: 300,
                  borderRadius: 20,
                  // marginTop: 15,
                }}>
                <Image
                  source={item.img}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
                <View
                  style={{
                    alignItems: 'center',
                    // gap: 8,
                    justifyContent: 'center',
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%',
                    bottom: 10,
                  }}>
                  <Text25 bold>OLD KILLER</Text25>
                  <SmallText style={{color: COLORS.primary}}>
                    Lorem ipsum dolor sit amet concateur non troppo
                  </SmallText>
                  <SmallText style={{textAlign: 'center', width: '80%'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    fringilla lorem ac sodales gravida. Suspendisse vel suscipit
                    risus. Sed iaculis scelerisque arcu, sed hendrerit libero
                    dictum id. Nunc condimentum ultrices iaculis.
                  </SmallText>
                </View>
              </View>
            );
          }}
          contentContainerStyle={{}}
          sliderWidth={width}
          itemWidth={width}
          style={{backgroundColor: 'pink', alignSelf: 'center'}}
          itemHeight={200}
          //@ts-ignore
          onSnapToItem={index => setActiveSlide(index)}
        />

        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            backgroundColor: 'white',
          }}
          inactiveDotStyle={{
            width: 15,
            height: 15,
            borderRadius: 15,
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: 'black',
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </React.Fragment>
  );
};

export default Slider;

const styles = StyleSheet.create({
  dot: {
    height: 5,
    width: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 5,
  },
});
