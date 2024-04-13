import React from 'react';
import {Button, ButtonProps} from '@rneui/themed';
import VARIABLES from '../../../assets/variables';

const PrimaryButton = (props: ButtonProps) => {
  return <Button {...props} color={VARIABLES.primary} />;
};

export default PrimaryButton;
