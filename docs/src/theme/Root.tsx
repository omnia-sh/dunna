import React from 'react';
import { Toaster } from 'react-hot-toast';

interface RootProps {
  children: React.ReactNode;
}

const Root = ({ children }: RootProps) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Root;
