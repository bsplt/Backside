import * as React from "react";
import Layout from "../components/Layout.js";
import Graphic from "../components/GenerativeGraphic.js";
import GetPageSize from "../functions/GetPageSize.js";

const IndexPage = () => {
  return (
    <Layout style="index">
      <Graphic width={GetPageSize()[0]} height={GetPageSize()[1]} />
    </Layout>
  );
};

export default IndexPage;
