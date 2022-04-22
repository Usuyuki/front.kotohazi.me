/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import axios from 'axios';

const handleSocialLoginRequest = async (provider: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login/${provider}`);
  console.log('data:', data.redirect_url);
  window.location.href = data.redirect_url;
};
const callback: NextPage = () => {
  return (
    <div>
      <Layout titlePrefix='ログイン' pageTitle='ログイン' bgColorClass='bg-low' description='コトハジメのログイン'>
        <div className='border-2 border-k_4 border-dashed'>
          <button
            type='submit'
            onClick={() => {
              handleSocialLoginRequest('google');
            }}
          >
            Login with Google
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default callback;
