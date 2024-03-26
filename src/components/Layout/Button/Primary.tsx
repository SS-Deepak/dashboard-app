import React from 'react';
import {Button, ButtonProps} from '@rneui/themed';
import styles from './index.module.scss';

const PrimaryButton = (props: ButtonProps) => {
  return <Button style={styles.primaryButton} {...props} />;
};

export default PrimaryButton;
