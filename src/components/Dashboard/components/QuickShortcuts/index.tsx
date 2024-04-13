import {View} from 'react-native';
import React from 'react';
import Card from './Card';
import styles from '../../index.module.scss';

const Index = () => {
  return (
    <View style={styles.quickshortContainer}>
      <Card label="Add Product" icon="bookmark" />
      <Card label="Add Coupon" icon="list-alt" />
      <Card label="Add Site" icon="globe" />
      <Card label="Affliates" icon="group" />
      <Card label="My Account" icon="user" />
      <Card label="Settings" icon="gear" />
      <Card label="Reports" icon="signal" />
      <Card label="Upgrade" icon="tag" />
    </View>
  );
};

export default Index;
