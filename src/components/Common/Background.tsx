import {ImageBackground} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import styles from './index.module.scss';

const CommonBackground: FC<PropsWithChildren> = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/global/background-tile.png')}
      resizeMode="repeat"
      style={styles.imageContainer}>
      {children}
    </ImageBackground>
  );
};

export default CommonBackground;
