import React from 'react';
import CommonBackground from '../components/Common/Background';
import PublicRoutes from './public.route';
import PrivateRoutes from './private.route';

const Main = () => {
  const isAuthenticated = true;
  return (
    <CommonBackground>
      {!isAuthenticated ? <PublicRoutes /> : <PrivateRoutes />}
    </CommonBackground>
  );
};

export default Main;
