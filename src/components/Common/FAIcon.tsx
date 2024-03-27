import React from 'react';
import FA from 'react-native-vector-icons/FontAwesome';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

const FAIcon = ({name, size, color}: Props) => {
  return <FA name={name} size={size ?? 25} color={color ?? '#aaa'} />;
};

export default FAIcon;
