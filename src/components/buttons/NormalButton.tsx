import { ButtonType } from '@/types/Buttons';
import Link from 'next/link';
import { FC } from 'react';
const NormalButton: FC<ButtonType> = ({ title, url, addClass, isInside }) => {
  addClass = addClass ?? ''; //undefinedの文字列が出てくるので、それ防止用
  /**
   * NextのLinkを使うため、isInsideで内部リンクか外部リンクかを使い分け
   */
  const button = isInside ? (
    <Link href={url}>
      <a>
        <div
          className={'px-3 py-4 border-2 border-sky-500 border-dashed rounded-2xl flex justify-center' + ' ' + addClass}
        >
          <p className='text-2xl'>{title}</p>
        </div>
      </a>
    </Link>
  ) : (
    <div className={'' + addClass}>
      <a href={url}>{title}</a>
    </div>
  );
  return button;
};
export default NormalButton;
