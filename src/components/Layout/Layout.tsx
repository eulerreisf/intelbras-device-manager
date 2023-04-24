import React from "react";
import { Header, Sidebar } from "../../components";
import { LayoutType } from "../../types";

const Layout = (props: LayoutType) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
