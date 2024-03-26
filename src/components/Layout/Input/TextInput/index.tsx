import {TextInput, TextInputProps} from 'react-native';
import React from 'react';
import styles from './index.module.scss';

const TextInputComponent = (props: TextInputProps) => {
  return <TextInput style={styles.inputText} {...props} />;
};

export default TextInputComponent;
