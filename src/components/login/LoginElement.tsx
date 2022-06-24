import React, { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import VisitorHeader from '@/components/headers/VisitorHeader';
import LoginAlert from './LoginAlert';
import NormalFooter from '@/components/footers/NormalFooter';
import { Provider } from '@/types/models/OAuth';
import LoginButton from './LoginButton';

type Props = {
  socialLoginStatusCode?: number;
  isLoading: boolean;
  handleSocialLoginRequest: (provider: Provider) => void;
};

const Login: FC<Props> = ({ socialLoginStatusCode, isLoading, handleSocialLoginRequest }) => {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <VisitorHeader />
      <main style={{ flex: 1 }}>
        <Container maxWidth='xs'>
          <Card>
            <CardHeader title='login' style={{ textAlign: 'center' }} />
            <CardContent>
              <Box p={2} borderBottom={1}>
                {socialLoginStatusCode && <LoginAlert statusCode={socialLoginStatusCode} />}
                <Box mt={2}>
                  <LoginButton handleSocialLoginRequest={handleSocialLoginRequest} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </main>
      <NormalFooter />
      <Backdrop style={{}} open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Box>
  );
};

export default Login;
