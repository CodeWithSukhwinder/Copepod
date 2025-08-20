import {View, Text} from 'react-native';
import React from 'react';
import {RegularText} from '../../components/MyText';

const Description = () => {
  return (
    <View>
      <RegularText style={{opacity: 0.7, fontSize: 14, marginVertical: 15}}>
        Integer erat nisl, cursus eget faucibus in, dignissim vel est. Morbi
        interdum nulla non est rhoncus placerat. Cras id arcu turpis. Sed
        facilisis tempor tortor sit amet aliquet. Nunc ligula elit, dignissim ut
        hendrerit …
      </RegularText>

      <RegularText
        style={{
          opacity: 0.7,
          fontSize: 14,
          marginTop: 5,
          width: '100%',
        }}>
        Cast: Laura Bernshtein, Lourence Smith, Timothy Berg
      </RegularText>
      <RegularText
        style={{
          opacity: 0.7,
          fontSize: 14,
          width: '100%',
        }}>
        Creator: Jaff Bergain
      </RegularText>
    </View>
  );
};

export default Description;
