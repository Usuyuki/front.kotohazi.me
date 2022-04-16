/** @format */

import type { NextPage } from "next";
import Layout from "../components/layout";
const Index: NextPage = () => {
  return (
    <div>
      <Layout title_prefix="トップ" pageTitle="トップ">
        <h1 className="text-3xl kiwi-maru">コトハジメ、しませんか？</h1>
      </Layout>
    </div>
  );
};

export default Index;
