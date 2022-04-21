/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
const releaseNote: NextPage = () => {
  return (
    <div>
      <Layout
        titlePrefix='リリースノート'
        pageTitle='リリースノート'
        bgColorClass='bg-low'
        description='コトハジメのリリースノート'
      >
        <div></div>
      </Layout>
    </div>
  );
};

export default releaseNote;
