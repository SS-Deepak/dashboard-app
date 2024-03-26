import React from 'react';
import CheckBox, {CheckBoxProps} from 'react-native-check-box';
import styles from './index.module.scss';

const CheckboxComponent = (props: CheckBoxProps) => {
  return <CheckBox style={styles.checkbox} {...props} />;
};

export default CheckboxComponent;
