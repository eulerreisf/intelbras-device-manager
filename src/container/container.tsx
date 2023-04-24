import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import FormDevices from "./FormDevices";
import { WrapperContent } from "./styles";
import DisplayDevice from "./DisplayDevice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  useDeviceFetcher,
  useRfPowerFetcher,
  useCustomersFetcher,
} from "../services";

const Content = ({ children }: any) => (
  <WrapperContent isOpen>{children}</WrapperContent>
);

const Container = () => {
  const [defaultValues, setDefaultValue] = useState({});

  const {
    device,
    loading: loadingDevice,
    error: ErrorDevice,
  } = useDeviceFetcher();
  const { rfPower, loading, error } = useRfPowerFetcher();

  const { customers, loadingCustomers, errorCustomers } = useCustomersFetcher();

  useEffect(() => {
    if (!loading && !loadingDevice && !loadingCustomers) {
      const value = {
        ...device.data,
        maxassoc: rfPower.data.maxassoc,
        custumers: customers.data.clients.length,
      };

      console.log("customers", customers.data.clients.length);

      setDefaultValue(value);
    }
  }, [loading, loadingDevice, loadingCustomers]);

  const hasDefaultValue = !!Object.keys(defaultValues).length;

  return (
    !loading &&
    !loadingDevice &&
    hasDefaultValue && (
      <Router>
        <>
          <Layout />
          <Content>
            <Routes>
              <Route
                path="/"
                element={<DisplayDevice defaultValues={defaultValues} />}
              />
              <Route
                path="/config"
                element={<FormDevices defaultValues={defaultValues} />}
              />
            </Routes>
          </Content>
        </>
      </Router>
    )
  );
};

export default Container;
