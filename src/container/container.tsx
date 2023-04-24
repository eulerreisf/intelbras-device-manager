import React from "react";
import Layout from "../components/Layout";

const Container = () => {
  const children = () => <h1>Ola</h1>;
  return (
    <>
      <Layout children={children} />
    </>
  );
};

export default Container;
