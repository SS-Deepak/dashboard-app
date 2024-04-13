import {View, Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import PrimaryButton from '../../../../../Layout/Button/Primary';

const SiteSettingIntegration = () => {
  const [image, setImage] = useState();

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

export default SiteSettingIntegration;
