import React from 'react';
import AuthWrapper from './src/components/auth-wrapper';

export const wrapRootElement = ({ element }) => (
  <AuthWrapper>{element}</AuthWrapper>
);
