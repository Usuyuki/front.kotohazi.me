import { FC } from 'react';
import { TermLinkType } from '@/types/components/Sentences';
import Link from 'next/link';
const TermLink: FC<TermLinkType> = ({}) => {
  return (
    <Link href='/terms'>
      <a>利用既約</a>
    </Link>
  );
};
export default TermLink;
