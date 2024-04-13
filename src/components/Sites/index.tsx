import {View} from 'react-native';
import React from 'react';
import SiteList from './components/SiteList';
import {FAB} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';

const Sites = () => {
  const navigation = useNavigation();

  const handleCreateSite = () => {
    navigation.navigate(Routes.SITE_CREATE as never);
  };

  return (
    <View style={{height: '100%'}}>
      <SiteList />

      <FAB
        color="#ff9900"
        style={{position: 'absolute', bottom: 20, right: 20}}
        icon={{name: 'add', color: 'white'}}
        onPress={handleCreateSite}
      />
    </View>
  );
};

export default Sites;
