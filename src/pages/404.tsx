/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
const custom404: NextPage = () => {
  return (
    <div>
      <Layout titlePrefix='404' pageTitle='404 Not found' bgColorClass='bg-low' description='404 Not found'>
        <div></div>
      </Layout>
    </div>
  );
};

export default custom404;
