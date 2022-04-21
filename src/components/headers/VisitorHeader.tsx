import { HeaderType } from '@/types/components/Headers';
import Link from 'next/link';
import { FC } from 'react';
const VisitorHeader: FC<HeaderType> = ({}) => {
  return (
    <header className='flex justify-center items-center'>
      <Link href='/'>
        <a className='kiwi-maru'>コトハジメ</a>
      </Link>
    </header>
  );
};
export default VisitorHeader;
