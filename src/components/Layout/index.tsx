import React, { ReactChild } from "react";
import './styles.scss';

import Menu from '../Menu';
import Footer from '../Footer';

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Menu />
      <main className="mainContainer">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
