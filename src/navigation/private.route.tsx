import React from 'react';
import {Routes} from './routes';
import styles from './index.module.scss';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SubHeader from '../components/Layout/SubHeader';

const Stack = createNativeStackNavigator();

const PrivateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MENU}
      screenOptions={{contentStyle: styles.contentStyle}}>
      <Stack.Screen
        name={Routes.MENU}
        component={SubHeader}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
