/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import ReleaseNoteSentence from '@/components/common/sentence/ReleaseNoteSentence';
import axios from '@/lib/axios';
import UseSWR from 'swr';

const releaseNote: NextPage = () => {
  const { data, error } = UseSWR('/api/release-notes/all', () =>
    axios.get('/api/release-notes/all').then((res: any) => res.data),
  );

  if (error) return <div>エラーが発生しました</div>;
  if (!data) return <div>読み込み中</div>;
  return (
    <div>
      <Layout
        titlePrefix='リリースノート'
        pageTitle='リリースノート'
        bgColorClass='bg-low'
        description='コトハジメのリリースノート'
      >
        <div className='flex flex-col justify-center items-center'>
          {data.map((content, key) => {
            return (
              <ReleaseNoteSentence key={key} title={content.title} date={content.date} genre={content.genre}>
                {content.description}
              </ReleaseNoteSentence>
            );
          })}
        </div>
      </Layout>
    </div>
  );
};

export default releaseNote;
