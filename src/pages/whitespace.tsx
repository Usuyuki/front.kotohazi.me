/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/layout';

const WhiteSpace: NextPage = () => {
  return (
    <div>
      <Layout titlePrefix='虚無' pageTitle='虚無'>
        <main>
          <h1>ここは何もない虚無の ページです。</h1>
        </main>
      </Layout>
    </div>
  );
};

export default WhiteSpace;
