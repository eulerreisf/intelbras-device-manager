import React from "react";
import Layout from "../components/Layout";
import DeviceForm from "./DeviceForm";
import { WrapperContent } from "./styles";
import DisplayDevice from "./DisplayDevice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Content = ({ children }) => (
  <WrapperContent isOpen>{children}</WrapperContent>
);

const Container = () => {
  return (
    <Router>
      <>
        <Layout />
        <Content>
          <Routes>
            <Route path="/" element={<DisplayDevice />} />
            <Route path="/config" element={<DeviceForm />} />
          </Routes>
        </Content>
      </>
    </Router>
  );
};

export default Container;
