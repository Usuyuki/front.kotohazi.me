/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/layout';
const Index: NextPage = () => {
  return (
    <div>
      <Layout titlePrefix='トップ' pageTitle='トップ'>
        <h1 className='mt-20 ml-20 text-3xl text-center kiwi-maru'>コトハジメ、しませんか？</h1>
      </Layout>
    </div>
  );
};

export default Index;
