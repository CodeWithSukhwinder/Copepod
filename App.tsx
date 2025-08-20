import React from 'react';
import RootNavigator from './app/navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './app/redux';
import {Provider, useDispatch} from 'react-redux';
import {SheetProvider} from 'react-native-actions-sheet';
import './app/sheets/sheets';

import SplashScreen from './app/screens/SplashScreen';
import {View} from 'react-native';

const AppInit = () => {
  const [ready, setReady] = React.useState(false);
  const [isFirstTimeOpen, setIsFirstTimeOpen] = React.useState(false);
  const dispatch = useDispatch();
  const init = async () => {
    try {
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => {
        setReady(true);
      }, 500);
    }
  };

  React.useEffect(() => {
    init();
  }, []);
  return (
    <>{ready ? <RootNavigator isFirstTimeOpen={true} /> : <SplashScreen />}</>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <NavigationContainer>
          <SheetProvider>
            <AppInit />
          </SheetProvider>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;
