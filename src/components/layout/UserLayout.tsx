/** @format */

import Link from 'next/link';
import Head from 'next/head';
import HeadOGP from '@/components/head/HeadOGP';
import { UserLayoutType } from '@/types/Layout';
const description = 'コトハジメの裏側にいます。';
const bgColorClass = 'bg-kotohazime';
const Layout = ({ children, titlePrefix }: UserLayoutType) => {
  return (
    <div>
      <HeadOGP description={description} titlePrefix={titlePrefix} />
      <div className={'' + bgColorClass}>
        <main>
          <nav className='flex flex-row p-2 font-bold text-white bg-green-500'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/whitespace'>
              <a>whitespace </a>
            </Link>
          </nav>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
