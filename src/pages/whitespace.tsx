/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layout/VisitorLayout';

const WhiteSpace: NextPage = () => {
  return (
    <div>
      <Layout titlePrefix='虚無' pageTitle='虚無' bgColorClass='bg-kotohazime' description='ここは虚無のページです'>
        <main>
          <h1>ここは何もない虚無の ページです。</h1>
        </main>
      </Layout>
    </div>
  );
};

export default WhiteSpace;
