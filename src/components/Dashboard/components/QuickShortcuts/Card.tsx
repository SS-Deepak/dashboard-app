import {View, Text} from 'react-native';
import React from 'react';
import FAIcon from '../../../Common/FAIcon';
import styles from '../../index.module.scss';

interface Props {
  label: string;
  icon: string;
  redirectLink?: string;
}

const Card = ({label, icon}: Props) => {
  return (
    <View style={styles.quickshortCard}>
      <FAIcon name={icon} size={40} />
      <Text style={styles.quickshortCardLabel}>{label}</Text>
    </View>
  );
};

export default Card;
