/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/DocsLayout';
const contact: NextPage = () => {
  return (
    <div>
      <Layout
        titlePrefix='お問い合わせ'
        pageTitle='お問い合わせ'
        bgColorClass='bg-low'
        description='コトハジメのお問い合わせ'
      >
        <h2 className='my-4 mx-2 text-2xl text-center'>お問い合わせフォーム</h2>
        <div className='flex justify-center'>
          <iframe
            src='https://docs.google.com/forms/d/e/1FAIpQLSdCd09HBxWOvT45QQ2JDqCFVOxFVxXFHW7NDnkm_OUr5YFzlw/viewform?embedded=true'
            width='640'
            height='720'
            frameBorder='0'
            scrolling='no'
          >
            読み込んでいます…
          </iframe>
        </div>
        <h2 className='mx-2 mt-4 text-2xl text-center'>製作者Twitter</h2>
        <a href='https://twitter.com/usuyuki26' className='mx-2  '>
          <p className='text-center'>@usuyuki26</p>
        </a>
      </Layout>
    </div>
  );
};

export default contact;
