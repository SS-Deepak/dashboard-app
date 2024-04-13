import React from 'react';
import {Routes} from './routes';
import styles from './index.module.scss';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SubHeader from '../components/Layout/SubHeader';
import SiteSetting from '../components/Sites/components/SiteSetting';
import SiteCreate from '../components/Sites/components/SiteCreate';

const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MENU}
      screenOptions={{
        contentStyle: styles.contentStyle,
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name={Routes.MENU} component={SubHeader} />
        <Stack.Screen name={Routes.SITE_SETTING} component={SiteSetting} />
        <Stack.Screen name={Routes.SITE_CREATE} component={SiteCreate} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
