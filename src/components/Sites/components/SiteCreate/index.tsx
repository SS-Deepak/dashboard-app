import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/routes';

const SiteCreate = () => {
  const navigation = useNavigation();

  const goToSiteList = () => {
    navigation.navigate(Routes.SITES as never);
  };

  return (
    <View>
      <Text onPress={goToSiteList}>SiteCreate</Text>
    </View>
  );
};

export default SiteCreate;
