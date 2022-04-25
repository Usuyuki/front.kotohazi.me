/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/DocsLayout';
const announcement: NextPage = () => {
  return (
    <div>
      <Layout
        titlePrefix='お知らせ'
        pageTitle='お知らせ'
        bgColorClass='bg-low'
        description='コトハジメについてのお知らせ'
      >
        <div></div>
      </Layout>
    </div>
  );
};

export default announcement;
