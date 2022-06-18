/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const Index: NextPage = () => {
  const router = useRouter();
  const isReady = router.isReady;

  useEffect(() => {
    if (isReady) {
      router.push('/home');
    }
  }, [isReady]);

  // pushState の場合
  return (
    <div>
      <Layout
        titlePrefix='コールバック'
        pageTitle='コールバック'
        bgColorClass='bg-low'
        description='コトハジメのログイン'
      >
        <div className='border-2 border-k_4 border-dashed'>こーるばっく</div>
      </Layout>
    </div>
  );
};

export default Index;
