import React, {useMemo} from 'react';
import {Button} from '@rneui/themed';
import styles from '../index.module.scss';
import {
  GestureResponderEvent,
  StyleProp,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';

interface Props {
  type: string;
  label: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (e: GestureResponderEvent) => void;
}

const ChipButton = ({type, label, onPress, style}: Props) => {
  const chipTypeCSS = useMemo(() => {
    switch (type) {
      case 'warn':
        return styles.warnChip;
      case 'success':
        return styles.successChip;
      case 'danger':
        return styles.dangerChip;
      case 'primary':
      default:
        return styles.primaryChip;
    }
  }, [type]);

  return (
    <TouchableHighlight>
      <Button
        title={label}
        buttonStyle={[chipTypeCSS, style]}
        containerStyle={styles.chipButtonContainer}
        titleStyle={styles.chipButtonLabel}
        onPress={onPress}
      />
    </TouchableHighlight>
  );
};

export default ChipButton;
