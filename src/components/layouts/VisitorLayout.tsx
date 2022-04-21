/** @format */

import Link from 'next/link';
import Head from 'next/head';
import HeadOGP from '@/components/head/HeadOGP';
import { VisitorLayoutType } from '@/types/Layout';
import VisitorHeader from '../header/VisitorHeader';

const Layout = ({ children, titlePrefix, bgColorClass, description }: VisitorLayoutType) => {
  return (
    <div>
      <HeadOGP description={description} titlePrefix={titlePrefix} />
      <div className={'' + bgColorClass}>
        <main className={'' + bgColorClass}>
          <VisitorHeader />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
