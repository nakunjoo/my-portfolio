import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

interface LayoutDefaultProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactElement;
}

export default function DefaultLayout({ children }: LayoutDefaultProps) {
  return (
    <>
      <Header />
      {children || <Outlet />}
      <Footer />
    </>
  );
}
