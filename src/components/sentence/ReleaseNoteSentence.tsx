import { FC } from 'react';
import { ReleaseNoteSentenceType } from '@/types/components/Sentences';
const ReleaseNoteSentence: FC<ReleaseNoteSentenceType> = ({ title, date, genre, children }) => {
  return (
    <div className='p-4 m-4 w-80 h-auto bg-k_2 rounded-xl  shadow-md'>
      <div className='flex flex-row-reverse '>
        <div className='w-4 h-4 bg-k_1 rounded-full shadow-inner'></div>
      </div>
      <h3 className='mb-1 text-3xl font-semibold text-center'>{title}</h3>
      <div className='mx-auto w-24 h-auto'>{children}</div>
      <p className='mx-4 mt-4 mb-2'>{genre}</p>
      <p className='mx-4 mt-4 mb-2'>{date}</p>
    </div>
  );
};
export default ReleaseNoteSentence;
