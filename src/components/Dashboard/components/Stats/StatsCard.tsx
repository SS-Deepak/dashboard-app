import {View, Text} from 'react-native';
import React from 'react';
import styles from '../../index.module.scss';

interface Props {
  count: number;
  label: string;
}

const StatsCard = ({count, label}: Props) => {
  return (
    <View style={styles.statsCard}>
      <Text style={styles.statsCount}>{count}</Text>
      <Text style={styles.statsLabel}>{label}</Text>
    </View>
  );
};

export default StatsCard;
