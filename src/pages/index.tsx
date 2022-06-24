/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import NormalButton from '@/components/common/buttons/NormalButton';
import styles from '@/styles/FrontPage.module.css';
import { useRouter } from 'next/router';
import { TopPageAnimation } from '@/hooks/TopPageAnimation';
import GeneralAlert from '@/components/common/info/GeneralAlert';
const Index: NextPage = () => {
  const router = useRouter();
  TopPageAnimation(router);
  return (
    <div>
      <Layout
        titlePrefix='トップ'
        bgColorClass='bg-all'
        description='勉強会やちょっとしたイベントのフィードバックに。コトハジメ、しませんか？'
      >
        <div className={styles.mainCharactersWrapper}>
          <div className={styles.mainCharacters}>
            <div className='flex justify-center items-center my-2 -mx-2  rounded-full'>
              <p id='c1'>コ</p>
            </div>
            <div className='flex justify-center items-center my-2 -mx-2  rounded-full'>
              <p id='c2'>ト</p>
            </div>
            <div className='flex justify-center items-center my-2 -mx-2  rounded-full'>
              <p id='c3'>ハ</p>
            </div>
            <div className='flex justify-center items-center my-2 -mx-2  rounded-full'>
              <p id='c4'>ジ</p>
            </div>
            <div className='flex justify-center items-center my-2 -mx-2  rounded-full'>
              <p id='c5'>メ</p>
            </div>
            <div className='flex justify-center items-center my-2 -mx-2  rounded-full'>
              <p id='c6'>🧃</p>
            </div>
          </div>
        </div>
        <div className={styles.mainWrapper} id='kotohazime'>
          <h2 className='text-5xl text-center kiwi-maru'>
            コトハジメは、
            <br className='md:hidden' />
            ちょっとしたアンケートを
            <br />
            ハヤメに作れる
            <br className='md:hidden' />
            サービスです。
          </h2>
          <h3 className='text-2xl text-center kiwi-maru'>
            GoogleForm じゃ重たい。
            <br className='md:hidden' />
            もっと簡単に
            <br className='md:hidden' />
            アンケートが取りたい。
            <br />
            勉強会や <br className='md:hidden' />
            ちょっとしたイベントの
            <br className='md:hidden' />
            フィードバックに。
          </h3>
        </div>
        <div className={styles.mainWrapper} id='kotohazimeToKotobanome'>
          <p className='mt-12 text-center kiwi-maru'>コトハジメしませんか？</p>
          {/* <NormalButton title='ログイン&登録' url='login' isInside={true} /> */}
          <GeneralAlert
            type='error'
            title='さぼりエラー'
            content={`大変恐縮ですが、技育博までに完成間に合いませんでした……\n名刺の1つ下にある、かどで日記というサービスは1年掛けて鋭意開発中ですので\nよろしければそちらをくださいませ。`}
          />
          <div className='flex flex-col justify-center items-center mt-12'>
            <p>
              <a className='text-2xl kiwi-maru' href='https://kadode.usuyuki.net'>
                かどで日記
              </a>
            </p>
            <p className='mt-8'>
              <a className='text-2xl  kiwi-maru' href='https://github.com/Usuyuki'>
                作者GitHub
              </a>
            </p>
          </div>
        </div>
        <div className={styles.mainWrapper} id='kotobanome'>
          <h2 className='text-5xl text-center kiwi-maru'>
            コトバノメは
            <br className='md:hidden' />
            自然言語処理
            <br className='md:hidden' />
            を用いた
            <br />
            アンケートの
            <br className='md:hidden' />
            分析サービス
            <br className='md:hidden' />
            です。
          </h2>
          <h3 className='text-2xl text-center text-k_1 kiwi-maru'>
            アンケート結果の
            <br className='md:hidden' />
            手助けをします🌟
          </h3>
          <p className='mx-2 mt-14 text-center text-k_1 kiwi-maru'>※コトハジメ内で利用できる予定のサービスです。</p>
        </div>
      </Layout>
    </div>
  );
};

export default Index;
