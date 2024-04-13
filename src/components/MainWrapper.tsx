import React from 'react';
import Main from '../navigation';
import {StatusBar, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const MainWrapper = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const background = isDarkMode ? '#f7f7f7' : '#034375';

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar backgroundColor={background} />
      <Main />
    </GestureHandlerRootView>
  );
};

export default MainWrapper;
