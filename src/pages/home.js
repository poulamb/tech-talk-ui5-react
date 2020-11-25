import React from "react";
import Layout from "../components/layout";
import Table from "../components/table";

const Home = (props) => {
  return (
    <>
      <Layout>
        <h1>Products</h1>
        <Table />
      </Layout>
    </>
  );
};

export default Home;
