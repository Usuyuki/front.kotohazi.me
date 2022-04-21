import { FC } from 'react';
import { RuleSentenceType } from '@/types/components/Sentences';
const RuleSentenceType: FC<RuleSentenceType> = ({ title, children }) => {
  return (
    <div className='flex flex-col justify-center mx-4 mt-2 mb-16'>
      <h2 className='text-2xl font-bold text-center'>{title}</h2>
      {children}
    </div>
  );
};
export default RuleSentenceType;
