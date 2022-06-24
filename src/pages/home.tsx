import type { NextPage } from 'next';
import Layout from '@/components/layouts/UserLayout';
import axios from '@/lib/axios';
import UseSWR from 'swr';
import styles from '@/styles/FrontPage.module.css';

const home: NextPage = () => {
  const { data, error } = UseSWR('/api/userInfo', () => axios.get('/api/userInfo').then((res: any) => res.data));

  if (error) return <div>エラーが発生しました</div>;
  if (!data) return <div>読み込み中</div>;
  return (
    <Layout titlePrefix='トップ'>
      <div>{data.name}</div>

      <div className={styles.questionnaireBox}>
        <p>あんけーと</p>
      </div>
    </Layout>
  );
};

export default home;
