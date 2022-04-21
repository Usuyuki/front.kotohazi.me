import { FC } from 'react';
import { LicenseSentenceType } from '@/types/components/Sentences';
const LicenseSentence: FC<LicenseSentenceType> = ({
  productName,
  productUrl,
  description,
  copyright,
  licenseType,
  licenseUrl,
}) => {
  return (
    <div className='flex flex-col justify-center mx-4 mt-2 mb-16'>
      <h4 className='text-2xl font-bold text-center'>{productName}</h4>
      <a target='_blank' rel='noopener noreferrer' href={productUrl} className='text-center'>
        <p>{productUrl}</p>
      </a>
      <p className='mt-2 mb-6 text-lg text-center'>{description}</p>

      {copyright == '' ? '' : <p className='text-xs text-center'>{copyright}</p>}

      <p className='px-4 mt-2 text-center'>
        License
        <span className='border-2 border-k_4 '>
          <a target='_blank' rel='noopener noreferrer' href={licenseUrl} className='text-center'>
            {licenseType}
          </a>
        </span>
        {licenseType == 'GNU General Public License v2.0' ? (
          <p className='mt-2 text-xs text-center '>
            ※GNUライセンスですが、今回の使用用途としてはライセンス違反に抵触しません。
          </p>
        ) : (
          ''
        )}
      </p>
    </div>
  );
};
export default LicenseSentence;
