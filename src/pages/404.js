import * as React from "react";
import Layout from "../components/Layout.js";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout style="NotFoundPage">
      <main>
        <p>404</p>
        <p>
          There is no such page.
          <br />
          Please return to <Link to={"/"}>home</Link>.
        </p>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
