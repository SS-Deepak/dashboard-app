import {View} from 'react-native';
import React from 'react';
import StatsCard from './StatsCard';
import styles from '../../index.module.scss';

const Index = () => {
  return (
    <View style={styles.statsContainer}>
      <StatsCard count={10} label="Sites" />
      <StatsCard count={25} label="Sites View" />
      <StatsCard count={1} label="Contacts" />
      <StatsCard count={100} label="Sales" />
    </View>
  );
};

export default Index;
