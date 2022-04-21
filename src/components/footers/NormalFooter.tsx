import { FooterType } from '@/types/components/Footers';
import Link from 'next/link';
import { FC } from 'react';
const NormalFooter: FC<FooterType> = ({}) => {
  return (
    <footer className='flex flex-wrap justify-center'>
      <Link href='/privacyPolicy'>
        <a className='mx-4 text-k_1 kiwi-maru'>プライバシーポリシー</a>
      </Link>
      <Link href='/terms'>
        <a className='mx-4 text-k_1 kiwi-maru'>利用規約</a>
      </Link>
      <Link href='/announcement'>
        <a className='mx-4 text-k_1 kiwi-maru'>お知らせ</a>
      </Link>
      <Link href='/releaseNote'>
        <a className='mx-4 text-k_1 kiwi-maru'>リリースノート</a>
      </Link>
      <Link href='/license'>
        <a className='mx-4 text-k_1 kiwi-maru'>ライセンス</a>
      </Link>
      <a
        target='_blank'
        rel='noopener noreferrer'
        className='mx-4 text-k_1 kiwi-maru'
        href='https://github.com/Usuyuki/front.kotohazi.me'
      >
        GitHub
      </a>
    </footer>
  );
};
export default NormalFooter;
