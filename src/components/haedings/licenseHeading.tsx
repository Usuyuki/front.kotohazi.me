import { FC } from 'react';
import { HeadingType } from '@/types/components/headings';
const licenseHeading: FC<HeadingType> = ({ title }) => {
  return (
    <div className='text-center'>
      <div className='flex items-center my-12 mx-2 lg:mx-20 '>
        <h3 className='text-3xl -rotate-45 kiwi-maru'>{title}</h3>
        <div className='heading-bar'></div>
      </div>
    </div>
  );
};
export default licenseHeading;
