import { FooterType } from '@/types/components/Footers';
import Link from 'next/link';
import { FC } from 'react';
const NormalFooter: FC<FooterType> = ({}) => {
  return (
    <footer className='flex justify-center m-12'>
      <Link href='/privacyPolicy'>
        <a className='mx-4'>プライバシーポリシー</a>
      </Link>
      <Link href='/terms'>
        <a className='mx-4'>利用規約</a>
      </Link>
      <a target='_blank' rel='noopener noreferrer' className='mx-4' href='https://github.com/Usuyuki/front.kotohazi.me'>
        GitHub
      </a>
    </footer>
  );
};
export default NormalFooter;
