import {View} from 'react-native';
import React from 'react';
import Stats from './components/Stats';
import Quickshorts from './components/QuickShortcuts';

const Dashboard = () => {
  return (
    <View>
      <Stats />
      <Quickshorts />
    </View>
  );
};

export default Dashboard;
