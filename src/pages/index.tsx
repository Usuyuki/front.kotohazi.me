/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import NormalButton from '@/components/buttons/NormalButton';
const Index: NextPage = () => {
  return (
    <Layout
      titlePrefix='トップ'
      bgColorClass='bg-all'
      description='勉強会やちょっとしたイベントのフィードバックに。コトハジメ、しませんか？'
    >
      <h1 className='mt-20 text-8xl text-center kiwi-maru'>コトハジメ</h1>
      <p className='mt-12 text-center kiwi-maru'>コトハジメはちょっとしたアンケートをハヤメに作れるサービスです。</p>
      <NormalButton title='虚無へ行く' url='/whitespace' isInside={true} />
      <NormalButton title='ログイン' url='/login' isInside={true} />
    </Layout>
  );
};

export default Index;
