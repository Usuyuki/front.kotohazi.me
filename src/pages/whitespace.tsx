/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import NormalButton from '@/components/buttons/NormalButton';
const WhiteSpace: NextPage = () => {
  return (
    <div>
      <Layout titlePrefix='虚無' pageTitle='虚無' bgColorClass='bg-kotohazime' description='ここは虚無のページです'>
        <div>
          <h1>ここは何もない虚無の ページです。</h1>
        </div>
        <NormalButton title='トップへ戻る' url='/' isInside={true} />
      </Layout>
    </div>
  );
};

export default WhiteSpace;
