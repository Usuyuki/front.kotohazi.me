/** @format */

import HeadOGP from '@/components/head/HeadOGP';
import { UserLayoutType } from '@/types/Layout';
import VisitorHeader from '../headers/VisitorHeader';
import NormalFooter from '../footers/NormalFooter';

const description = 'コトハジメの裏側にいます。';
const bgColorClass = 'bg-high';

const Layout = ({ children, titlePrefix }: UserLayoutType) => {
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
