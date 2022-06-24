import React, { FC } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import VisitorHeader from '@/components/headers/VisitorHeader';
import GeneralAlert from '@/components/common/info/GeneralAlert';

type Props = {
  oAuthError: boolean;
  statusCode?: number;
};

const Content: FC<Props> = ({ oAuthError, statusCode }) => {
  if (oAuthError) {
    return (
      <>
        <GeneralAlert
          type='error'
          title='認可エラー'
          content={`ソーシャルサービス側の認可処理でエラーが発生しました。\n恐れ入りますが時間をおいて再度お試しください。`}
        />
        <Box py={2} textAlign='center'>
          <Typography variant='caption'>
            <Link href='/login'>ログイン画面</Link>
            に戻る
          </Typography>
        </Box>
      </>
    );
  }

  if (statusCode) {
    return (
      <>
        <GeneralAlert
          type='error'
          title='サーバエラー'
          content={`予期しないエラーが発生し、ソーシャルログインに失敗しました。\n恐れ入りますが時間をおいて再度お試しください。`}
        />
        <Box py={2} textAlign='center'>
          <Typography variant='caption'>
            <Link href='/login'>ログイン画面</Link>
            に戻る
          </Typography>
        </Box>
      </>
    );
  }

  return (
    <Box textAlign='center'>
      <CircularProgress color='inherit' />
    </Box>
  );
};

const SocialLoginProgress: FC<Props> = ({ oAuthError, statusCode }) => {
  const theme = useTheme();
  return (
    <>
      <VisitorHeader />
      <main>
        <Container maxWidth='xs'>
          <Card style={{ margin: `${theme.spacing(6)}px 0` }}>
            <CardHeader
              title={oAuthError || statusCode ? 'ソーシャルログイン処理失敗' : 'ソーシャルログイン処理中...'}
              style={{ textAlign: 'center' }}
            />
            <CardContent>
              <Content oAuthError={oAuthError} statusCode={statusCode} />
            </CardContent>
          </Card>
        </Container>
      </main>
    </>
  );
};

export default SocialLoginProgress;
