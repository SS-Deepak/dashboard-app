import {View} from 'react-native';
import React from 'react';
import SiteListHeader from './Header';
import SiteListTable from './Table';

const SiteListComponent = () => {
  return (
    <View>
      <SiteListHeader />
      <SiteListTable />
    </View>
  );
};

export default SiteListComponent;
