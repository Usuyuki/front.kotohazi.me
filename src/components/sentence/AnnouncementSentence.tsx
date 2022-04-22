import { FC } from 'react';
import { AnnouncementSentenceType } from '@/types/components/Sentences';
const AnnouncementSentence: FC<AnnouncementSentenceType> = ({ title, date, children }) => {
  return (
    <div className='flex flex-col justify-center mx-4 mt-2 mb-16'>
      <p className='text-xl font-bold text-center'>{date}</p>
      <h2 className='text-2xl font-bold text-center'>{title}</h2>
      {children}
    </div>
  );
};
export default AnnouncementSentence;
