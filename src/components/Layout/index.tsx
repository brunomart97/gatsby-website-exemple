import React, { ReactChild } from "react";
import './styles.scss';

interface LayoutProps {
  children: ReactChild | ReactChild[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      Header
      <main>{children}</main>
      Footer
    </>
  )
}

export default Layout
