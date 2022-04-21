/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
const privacyPolicy: NextPage = () => {
  return (
    <div>
      <Layout
        titlePrefix='プライバシーポリシー'
        pageTitle='プライバシーポリシー'
        bgColorClass='bg-low'
        description='コトハジメのプライバシーポリシー'
      >
        <div></div>
      </Layout>
    </div>
  );
};

export default privacyPolicy;
