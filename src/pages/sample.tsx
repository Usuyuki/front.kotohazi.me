import React from 'react';
import { useAuthenticated } from '../hooks/useAuthenticated';
import { useSession } from 'next-auth/client';

const Sample: React.FC = () => {
  useAuthenticated();
  const [session, loading] = useSession();

  return <>{session && loading === false ? <div>You are already authenticated.</div> : <></>}</>;
};

export default Sample;
