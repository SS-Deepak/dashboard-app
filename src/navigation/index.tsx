import React from 'react';
import CommonBackground from '../components/Common/Background';
import PublicRoutes from './public.route';
import PrivateRoutes from './private.route';
import WithLogoHeader from '../components/Common/Header';
import {NavigationContainer} from '@react-navigation/native';

const Main = () => {
  const isAuthenticated = true;
  return (
    <CommonBackground>
      <WithLogoHeader />
      <NavigationContainer>
        {!isAuthenticated ? <PublicRoutes /> : <PrivateRoutes />}
      </NavigationContainer>
    </CommonBackground>
  );
};

export default Main;
