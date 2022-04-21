/** @format */

import Link from 'next/link';
import Head from 'next/head';
import HeadOGP from '@/components/head/HeadOGP';
import { VisitorLayoutType } from '@/types/Layout';
import VisitorHeader from '../header/VisitorHeader';
import NormalFooter from '../footer/NormalFooter';

const Layout = ({ children, titlePrefix, bgColorClass, description }: VisitorLayoutType) => {
  return (
    <div>
      <HeadOGP description={description} titlePrefix={titlePrefix} />
      <div className={bgColorClass}>
        <div className='main-wrapper'>
          <VisitorHeader />
          <main>{children}</main>
          <NormalFooter />
        </div>
      </div>
    </div>
  );
};

export default Layout;
