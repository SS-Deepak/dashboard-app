import {Image, View} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './index.module.scss';

const WithLogoHeader = ({children}: {children?: ReactNode}) => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://s3.amazonaws.com/lmeditor/c4ca4238a0b923820dcc509a6f75849b/s3pages.png',
        }}
        style={styles.logo}
      />
      {children}
    </View>
  );
};

export default WithLogoHeader;
