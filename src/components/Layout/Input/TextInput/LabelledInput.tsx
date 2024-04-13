import React from 'react';
import TextInputComponent from '.';
import styles from './index.module.scss';
import {InputProps} from '@rneui/themed';

const LabelledInput = (props: InputProps) => {
  return (
    <TextInputComponent
      {...props}
      containerStyle={styles.inputContainer}
      clearButtonMode="unless-editing"
    />
  );
};

export default LabelledInput;
