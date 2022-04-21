/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import NormalButton from '@/components/buttons/NormalButton';
const custom404: NextPage = () => {
  return (
    <div>
      <Layout titlePrefix='404' pageTitle='404' bgColorClass='bg-low' description='404 Not found'>
        <div>
          <h1 className='text-4xl text-center'>404 Not found</h1>
        </div>
      </Layout>
    </div>
  );
};

export default custom404;
