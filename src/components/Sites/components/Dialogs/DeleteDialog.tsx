import React from 'react';
import {Dialog} from '@rneui/themed';
import {Text} from 'react-native';

const SiteDeleteDialog = ({open, onClose}: {open: boolean; onClose: any}) => {
  return (
    <Dialog isVisible={open} onBackdropPress={onClose}>
      <Dialog.Title title="Delete Site" />
      <Text>
        This action is one time only. Once you delete, it no longer be
        transfered.
      </Text>
      <Dialog.Actions>
        <Dialog.Button titleStyle={{color: 'red'}} title="Delete" />
        <Dialog.Button onPress={onClose} title="Cancel" />
      </Dialog.Actions>
    </Dialog>
  );
};

export default SiteDeleteDialog;
