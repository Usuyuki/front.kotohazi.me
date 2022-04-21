/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@/components/layout/VisitorLayout';
const Index: NextPage = () => {
  return (
    <div>
      <Layout
        titlePrefix='トップ'
        pageTitle='トップ'
        bgColorClass='bg-top'
        description='勉強会やちょっとしたイベントのフィードバックに。コトハジメ、しませんか？'
      >
        <h1 className='text-center text-8xl kiwi-maru mt-20'>コトハジメ</h1>
        <p className='text-center mt-12 kiwi-maru'>コトハジメはちょっとしたアンケートをハヤメに作れるサービスです。</p>
      </Layout>
    </div>
  );
};

export default Index;
