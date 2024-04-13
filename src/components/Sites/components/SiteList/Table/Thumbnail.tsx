import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../index.module.scss';

const Thumbnail = ({label}: {label: string}) => {
  return (
    <View style={styles.thumbnailContainer}>
      <Text style={styles.thumbnail}>{label}</Text>
    </View>
  );
};

export default Thumbnail;
