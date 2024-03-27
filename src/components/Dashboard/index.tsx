import {View} from 'react-native';
import React from 'react';
import StatsCard from './components/StatsCard';

const Dashboard = () => {
  return (
    <View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
        <StatsCard count={10} label="Sites" />
        <StatsCard count={25} label="Sites View" />
        <StatsCard count={1} label="Contacts" />
        <StatsCard count={100} label="Sales" />
      </View>
    </View>
  );
};

export default Dashboard;
