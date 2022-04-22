import { DocsLinkButtonType } from '@/types/components/Buttons';
import Link from 'next/link';
import { FC } from 'react';
const DocsLinkButton: FC<DocsLinkButtonType> = ({ icon, title, url }) => {
  return (
    <Link href={url}>
      <a className='flex flex-col justify-center items-center w-40'>
        <div className='flex justify-center items-center w-20 h-20 border-2 border-k_4 border-dashed hover:border-solid duration-300 rounded-button'>
          <span className='text-k_4 material-icons '>{icon}</span>
        </div>
        <p className='kiwi-maru'>{title}</p>
      </a>
    </Link>
  );
};
export default DocsLinkButton;
