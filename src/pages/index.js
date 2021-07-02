import * as React from "react";
import Layout from "../components/layout.js";

const IndexPage = () => {
  return (
    <Layout style="index">
      <Graphic width={GetPageWidth()} />
    </Layout>
  );
};

export default IndexPage;
