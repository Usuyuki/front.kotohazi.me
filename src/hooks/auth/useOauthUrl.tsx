import { UseMutationResult, useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { Provider, OAuthRedirect } from '@/types/models/OAuth';

const getOAuthUrl = async (provider: Provider): Promise<OAuthRedirect> => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login/${provider}`);
  console.log(data);
  return data;
};

const useOAuthUrl = (): UseMutationResult<OAuthRedirect, AxiosError, Provider, undefined> =>
  useMutation(getOAuthUrl, {
    onSuccess: (data) => {
      window.location.href = data.redirect_url;
    },
  });

export default useOAuthUrl;
