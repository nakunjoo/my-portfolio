import React from 'react';
import { Outlet } from 'react-router';

interface LayoutDefaultProps {
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactElement;
}

export default function DefaultLayout({ children }: LayoutDefaultProps) {
  return <div>{children || <Outlet />}</div>;
}
