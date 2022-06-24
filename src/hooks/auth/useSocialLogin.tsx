import { useQueryClient, UseMutationResult, useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';
import { Provider, OAuthParams } from '@/types/models/OAuth';
import { User } from '@/types/models/User';

const socialLogin = async (provider: Provider, authParams: OAuthParams): Promise<User> => {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login/${provider}`, authParams);
  return data;
};

const useSocialLogin = (): UseMutationResult<
  User,
  AxiosError,
  { provider: Provider; authParams: OAuthParams },
  undefined
> => {
  const queryClient = useQueryClient();

  return useMutation(({ provider, authParams }) => socialLogin(provider, authParams), {
    onSuccess: (data) => {
      queryClient.setQueryData('user', data);
    },
  });
};

export default useSocialLogin;
