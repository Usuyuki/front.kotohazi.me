import type { NextPage } from 'next';
import axios from 'axios';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import Layout from '@/components/layouts/UserLayout';
const handleSocialLoginRequest = async () => {
  const cookies = parseCookies();

  const { data } = await axios.get('https://localhost/api/me', {
    headers: {
      Authorization: 'Bearer ' + cookies['api_token'],
    },
  });
  console.log('data:', data);
  return data;
};

const home: NextPage = () => {
  const data = handleSocialLoginRequest();
  return (
    <Layout
      titlePrefix='トップ'
    >
      <h1 className='mt-20 text-8xl text-center kiwi-maru'>コトハジメ</h1>
      <p className='mt-12 text-center kiwi-maru'>コトハジメはちょっとしたアンケートをハヤメに作れるサービスです。</p>
    
    </Layout>
  );
  );
};

export default home;
