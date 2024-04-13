import React from 'react';
import {Dialog} from '@rneui/themed';
import {Text} from 'react-native';

const SiteInvalidRouteDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) => {
  return (
    <Dialog isVisible={open} onBackdropPress={onClose}>
      <Dialog.Title title="No access" />
      <Text>This link will activate only in desktop.</Text>
      <Dialog.Actions>
        <Dialog.Button title="Cancel" onPress={onClose} />
      </Dialog.Actions>
    </Dialog>
  );
};

export default SiteInvalidRouteDialog;
