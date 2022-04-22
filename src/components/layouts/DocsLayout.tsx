/** @format */

import HeadOGP from '@/components/head/HeadOGP';
import { VisitorLayoutType } from '@/types/Layout';
import VisitorHeader from '../headers/VisitorHeader';
import NormalFooter from '../footers/NormalFooter';
import DocsHeader from '../headers/DocsHeader';

const Layout = ({ children, titlePrefix, bgColorClass, description, pageTitle }: VisitorLayoutType) => {
  return (
    <div>
      <HeadOGP description={description} titlePrefix={titlePrefix} />
      <div className={bgColorClass}>
        <div className='main-wrapper'>
          <VisitorHeader />
          <main>
            <DocsHeader />
            {pageTitle ? <h1 className='my-4 text-5xl text-center kiwi-maru'>-{pageTitle}-</h1> : ''}
            {children}
          </main>
          <NormalFooter />
        </div>
      </div>
    </div>
  );
};

export default Layout;
