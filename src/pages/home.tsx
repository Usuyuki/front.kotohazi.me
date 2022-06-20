import type { NextPage } from 'next';
import Layout from '@/components/layouts/UserLayout';
import axios from '@/lib/axios';
import useSWR from 'swr';

const home: NextPage = () => {
  const { data, error } = useSWR('/api/userInfo', () => axios.get('/api/userInfo').then((res: any) => res.data));

  if (error) return <div>エラーが発生しました</div>;
  if (!data) return <div>読み込み中</div>;
  return (
    <Layout titlePrefix='トップ'>
      <div>{data.name}</div>
    </Layout>
  );
};

export default home;
