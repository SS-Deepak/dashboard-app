import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import LoginComponent from '../components/Login';
import ForgotPasswordComponent from '../components/ForgotPassword';
import styles from './index.module.scss';

const Stack = createNativeStackNavigator();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{contentStyle: styles.contentStyle}}>
      <Stack.Screen
        name={Routes.LOGIN}
        component={LoginComponent}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.FORGOT_PASSWORD}
        component={ForgotPasswordComponent}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
