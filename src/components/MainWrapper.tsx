import React from 'react';
import Main from '../navigation';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, useColorScheme} from 'react-native';

const MainWrapper = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const background = isDarkMode ? '#f7f7f7' : '#034375';

  return (
    <>
      <StatusBar backgroundColor={background} />
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
};

export default MainWrapper;
