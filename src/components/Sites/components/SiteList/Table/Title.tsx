import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../index.module.scss';

interface Props {
  title: string;
  pageCount: number;
}

const TitleComponent = ({title, pageCount}: Props) => {
  return (
    <View>
      <Text numberOfLines={1} style={styles.siteTitle}>
        {title}
      </Text>
      <Text style={styles.sitePageCount}>{pageCount} page</Text>
    </View>
  );
};

export default TitleComponent;
