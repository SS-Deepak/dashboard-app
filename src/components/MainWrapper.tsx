import React from 'react';
import Main from '../navigation';
import {StatusBar, useColorScheme} from 'react-native';
import 'react-native-gesture-handler';

const MainWrapper = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const background = isDarkMode ? '#f7f7f7' : '#034375';

  return (
    <>
      <StatusBar backgroundColor={background} />
      <Main />
    </>
  );
};

export default MainWrapper;
