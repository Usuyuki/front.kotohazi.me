import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Provider } from '@/types/models/OAuth';

type Props = {
  handleSocialLoginRequest: (provider: Provider) => void;
};

const LoginButton: FC<Props> = ({ handleSocialLoginRequest }) => (
  <Button
    variant='contained'
    startIcon={<GitHubIcon />}
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
