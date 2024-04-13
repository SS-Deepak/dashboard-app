import {View} from 'react-native';
import React from 'react';
import LabelledInput from '../../../../../Layout/Input/TextInput/LabelledInput';
import PrimaryButton from '../../../../../Layout/Button/Primary';
import styles from '../../index.module.scss';

const SiteSettingGeneral = () => {
  return (
    <View style={styles.generalContainer}>
      <LabelledInput label="Title" />
      <LabelledInput label="Description" />
      <PrimaryButton title="Save" />
    </View>
  );
};

export default SiteSettingGeneral;
