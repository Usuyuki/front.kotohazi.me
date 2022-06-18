import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/client';

export const useAuthenticated = () => {
  const [session, loading] = useSession();

  useEffect(() => {
    if (loading) return;

    if (!session) signIn('laravelpassport', { callbackUrl: location.href });
  }, [session, loading]);
};
