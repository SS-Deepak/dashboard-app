import {View, Text} from 'react-native';
import React from 'react';

import styles from './index.module.scss';

interface Props {
  label: string;
  icon: any;
}

const Card = ({label, icon}: Props) => {
  return (
    <View style={styles.navCard}>
      <Text>{label}</Text>
      <Text>{icon}</Text>
    </View>
  );
};

export default Card;
