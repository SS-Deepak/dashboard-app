import React from 'react';
import {Dialog} from '@rneui/themed';
import {Text} from 'react-native';
import TextInputComponent from '../../../Layout/Input/TextInput';

const SiteCloneDialog = ({open, onClose}: {open: boolean; onClose: any}) => {
  return (
    <Dialog isVisible={open} onBackdropPress={onClose}>
      <Dialog.Title title="Clone-Site" />

      <Text>Title</Text>
      <TextInputComponent />

      <Dialog.Actions>
        <Dialog.Button title="Clone" />
        <Dialog.Button onPress={onClose} title="Cancel" />
      </Dialog.Actions>
    </Dialog>
  );
};

export default SiteCloneDialog;
