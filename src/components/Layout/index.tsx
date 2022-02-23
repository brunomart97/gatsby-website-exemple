import React, { ReactChild } from "react";
import './styles.scss';

import Menu from '../Menu';

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Menu />
      {children}
    </main>
  )
}

export default Layout
