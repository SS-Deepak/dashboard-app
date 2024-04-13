import {View} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';
import styles from '../../index.module.scss';

const SiteListHeader = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View style={styles.headerContainer}>
      <SearchBar
        containerStyle={styles.headerSearchContainer}
        inputContainerStyle={styles.headerSearchInputContainer}
        inputStyle={styles.headerSearchInput}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
    </View>
  );
};

export default SiteListHeader;
