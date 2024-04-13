import {View, Text} from 'react-native';
import React, {useCallback} from 'react';
import PrimaryButton from '../../../../../Layout/Button/Primary';
import {launchImageLibrary} from 'react-native-image-picker';

const SiteSettingPublishing = () => {
  const OpenDrawer = useCallback(async () => {
    const response = await launchImageLibrary({mediaType: 'mixed'});
    console.log(response);
  }, []);

  return (
    <View>
      <Text>SiteSettingIntegration</Text>
      <PrimaryButton title={'Upload'} onPress={OpenDrawer} />
    </View>
  );
};

export default SiteSettingPublishing;
