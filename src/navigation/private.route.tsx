import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from './routes';
import Sites from '../components/Sites';
import Dashboard from '../components/Dashboard';

const Drawer = createDrawerNavigator();

const PrivateRoutes = () => {
  return (
    <Drawer.Navigator initialRouteName={Routes.DASHBOARD}>
      <Drawer.Screen name={Routes.DASHBOARD} component={Dashboard} />
      <Drawer.Screen name={Routes.SITES} component={Sites} />
    </Drawer.Navigator>
  );
};

export default PrivateRoutes;
