import React from 'react';
import {Input, InputProps} from '@rneui/themed';
import styles from './index.module.scss';

const TextInputComponent = (props: InputProps) => {
  return <Input style={styles.inputText} {...props} />;
};

export default TextInputComponent;
