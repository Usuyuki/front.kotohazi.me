import React, { FC } from 'react';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { Provider } from '@/types/models/OAuth';

type Props = {
  handleSocialLoginRequest: (provider: Provider) => void;
};

const LoginButton: FC<Props> = ({ handleSocialLoginRequest }) => (
  <Button
    variant='contained'
    startIcon={<GoogleIcon />}
    fullWidth
    style={{ color: '#fff', backgroundColor: '#24292e', textTransform: 'none' }}
    onClick={() => {
      handleSocialLoginRequest('google');
    }}
  >
    Login with Google
  </Button>
);

export default LoginButton;
