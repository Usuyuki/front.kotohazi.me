import React, { FC } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import VisitorHeader from '../headers/VisitorHeader';
import LoginAlert from './LoginAlert';
import NormalFooter from '../footers/NormalFooter';
import { Provider } from '@/types/models/OAuth';
import LoginButton from './LoginButton';

const useStyles = makeStyles(() => ({
  decorationLine: {
    borderImage: 'linear-gradient(0.25turn, transparent, #888, transparent)',
    borderImageSlice: 1,
  },
}));

type Props = {
  socialLoginStatusCode?: number;
  isLoading: boolean;
  handleSocialLoginRequest: (provider: Provider) => void;
};

const Login: FC<Props> = ({ socialLoginStatusCode, isLoading, handleSocialLoginRequest }) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <VisitorHeader />
      <main style={{ flex: 1 }}>
        <Container maxWidth='xs'>
          <Card style={{ margin: `${theme.spacing(6)}px 0` }}>
            <CardHeader title='login' style={{ textAlign: 'center' }} />
            <CardContent>
              <Box p={2} borderBottom={1} className={classes.decorationLine}>
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
      <Backdrop style={{ zIndex: theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </Box>
  );
};

export default Login;
