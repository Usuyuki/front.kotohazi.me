/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';

export const getStaticProps = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/release-notes/all`).then((r) => r.json());
  return { props: { data }, revalidate: 120 };
};

const releaseNote: NextPage = (data) => {
  console.log(data);
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
