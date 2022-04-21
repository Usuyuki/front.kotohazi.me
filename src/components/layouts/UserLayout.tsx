/** @format */

import Link from 'next/link';
import Head from 'next/head';
import HeadOGP from '@/components/head/HeadOGP';
import { UserLayoutType } from '@/types/Layout';
import VisitorHeader from '../header/VisitorHeader';

const description = 'コトハジメの裏側にいます。';
const bgColorClass = 'bg-kotohazime';

const Layout = ({ children, titlePrefix }: UserLayoutType) => {
  return (
    <div>
      <HeadOGP description={description} titlePrefix={titlePrefix} />
      <div className={'' + bgColorClass}>
        <main>
          <VisitorHeader />
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
