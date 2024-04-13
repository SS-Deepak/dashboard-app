import {View} from 'react-native';
import React, {useState} from 'react';
import ChipButton from '../../../../Common/ChipButton';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../../navigation/routes';
import SiteInvalidRouteDialog from '../../Dialogs/InvalidRoute';
import styles from '../../index.module.scss';
import SiteCloneDialog from '../../Dialogs/CloneDialog';
import SiteDeleteDialog from '../../Dialogs/DeleteDialog';

const ActionButtons = () => {
  const [openInvalidModel, setOpenInvalidModel] = useState(false);
  const [openCloneModel, setOpenCloneModel] = useState(false);
  const [openDeleteModel, setOpenDeleteModel] = useState(false);

  const navigation = useNavigation();

  const onSettingPress = () => {
    navigation.navigate(Routes.SITE_SETTING as never);
  };

  const toggleInvalidModel = () => {
    setOpenInvalidModel(!openInvalidModel);
  };

  const toggleCloneModel = () => {
    setOpenCloneModel(!openCloneModel);
  };

  const toggleDeleteModel = () => {
    setOpenDeleteModel(!openDeleteModel);
  };

  return (
    <>
      <View style={styles.actionButtonContainer}>
        <ChipButton
          label="Preview"
          type="primary"
          onPress={toggleInvalidModel}
        />
        <ChipButton label="Setting" type="success" onPress={onSettingPress} />
        <ChipButton label="Edit" type="primary" onPress={toggleInvalidModel} />
        <ChipButton label="Clone" type="warn" onPress={toggleCloneModel} />
        <ChipButton label="Delete" type="danger" onPress={toggleDeleteModel} />
      </View>

      <SiteInvalidRouteDialog
        open={openInvalidModel}
        onClose={toggleInvalidModel}
      />

      <SiteDeleteDialog open={openDeleteModel} onClose={toggleDeleteModel} />
      <SiteCloneDialog open={openCloneModel} onClose={toggleCloneModel} />
    </>
  );
};

export default ActionButtons;
