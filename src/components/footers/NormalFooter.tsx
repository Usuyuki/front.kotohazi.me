import { FooterType } from '@/types/components/Footers';
import Link from 'next/link';
import { FC } from 'react';
const NormalFooter: FC<FooterType> = ({}) => {
  return (
    <footer className=''>
      <div className='flex flex-col flex-wrap justify-center items-center  md:flex-row'>
        <Link href='/privacyPolicy'>
          <a className='mx-4 mt-8 text-k_1 md:mt-0 kiwi-maru'>プライバシーポリシー</a>
        </Link>
        <Link href='/terms'>
          <a className='mx-4 mt-8 text-k_1 md:mt-0 kiwi-maru'>利用規約</a>
        </Link>
        <Link href='/releaseNote'>
          <a className='mx-4 mt-8 text-k_1 md:mt-0 kiwi-maru'>リリースノート</a>
        </Link>
        <Link href='/announcement'>
          <a className='mx-4 mt-8 text-k_1 md:mt-0 kiwi-maru'>お知らせ</a>
        </Link>
        <Link href='/contact'>
          <a className='mx-4 mt-8 text-k_1 md:mt-0 kiwi-maru'>お問い合わせ</a>
        </Link>
        <Link href='/license'>
          <a className='mx-4 mt-8 text-k_1 md:mt-0 kiwi-maru'>ライセンス</a>
        </Link>
      </div>
      <div className='flex flex-wrap justify-center mt-2'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='mx-4 mt-8 text-k_1 md:mt-0  kiwi-maru '
          href='https://github.com/Usuyuki/front.kotohazi.me'
        >
          GitHub
        </a>
      </div>
      <div className='flex flex-wrap justify-center pb-2 my-2'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='mx-4 text-xs text-k_1 kiwi-maru'
          href='https://github.com/Usuyuki/front.kotohazi.me'
        >
          copyright 2022 usuyuki
        </a>
      </div>
    </footer>
  );
};
export default NormalFooter;
