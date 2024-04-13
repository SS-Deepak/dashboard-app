import {View} from 'react-native';
import React, {useMemo} from 'react';
import {Tab, TabView} from '@rneui/themed';
import {SiteSettingTabs} from './Tabs';
import styles from './index.module.scss';
import SiteSettingProvider from './context/SiteSetting.provider';

const SiteSetting = () => {
  const [index, setIndex] = React.useState(0);

  const header = useMemo(() => {
    return SiteSettingTabs.map(i => {
      return (
        <Tab.Item
          key={i.label}
          title={i.label}
          icon={{name: i.icon, type: 'ionicon', color: 'white'}}
        />
      );
    });
  }, []);

  const body = useMemo(() => {
    return SiteSettingTabs.map(i => {
      return <TabView.Item key={i.label}>{i.component()}</TabView.Item>;
    });
  }, []);

  return (
    <SiteSettingProvider>
      <View style={styles.container}>
        <Tab
          scrollable
          value={index}
          onChange={e => setIndex(e)}
          indicatorStyle={styles.headerIndicator}
          titleStyle={styles.headerTitle}
          variant="primary">
          {header}
        </Tab>

        <TabView
          disableSwipe
          value={index}
          onChange={setIndex}
          tabItemContainerStyle={styles.tabItemContainer}>
          {body}
        </TabView>
      </View>
    </SiteSettingProvider>
  );
};

export default SiteSetting;
