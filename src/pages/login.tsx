import React, { FC, useCallback } from 'react';
import LoginElement from '@/components/login/LoginElement';
import useOAuthUrl from '@/hooks/auth/useOauthUrl';
import { Provider } from '@/types/models/OAuth';

const EnhancedLogin: FC = () => {
  const { error: socialLoginError, isLoading: socialLoginIsLoading, mutate: redirectOAuth } = useOAuthUrl();
  const socialLoginStatusCode = socialLoginError?.response?.status;
  const isLoading = socialLoginIsLoading;

  const handleSocialLoginRequest = useCallback(
    (provider: Provider) => {
      redirectOAuth(provider);
    },
    [redirectOAuth],
  );

  return (
    <LoginElement
      socialLoginStatusCode={socialLoginStatusCode}
      isLoading={isLoading}
      handleSocialLoginRequest={handleSocialLoginRequest}
    />
  );
};

export default EnhancedLogin;
