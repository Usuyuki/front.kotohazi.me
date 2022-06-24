import React, { FC } from 'react';
import GeneralAlert from '../common/info/GeneralAlert';
import { UNKNOWN_STATUS, INTERNAL_SERVER_ERROR } from '@/constants/statusCode';

type Props = {
  statusCode: number;
};

const SocialLoginAlert: FC<Props> = ({ statusCode }) => (
  <>
    {(statusCode === UNKNOWN_STATUS || statusCode === INTERNAL_SERVER_ERROR) && (
      <GeneralAlert
        type='error'
        title='サーバエラー'
        content={`予期しないエラーが発生し、ソーシャルログインに失敗しました。\nお手数掛けいたしますが、改めてお試しください。`}
      />
    )}
  </>
);

export default SocialLoginAlert;
