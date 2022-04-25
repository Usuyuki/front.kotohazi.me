/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import NormalButton from '@/components/buttons/NormalButton';
import styles from '@/styles/FrontPage.module.css';
import { useEffect } from 'react';
const Index: NextPage = () => {
  useEffect(() => {
    //クライアントのみで実行
    window.addEventListener('scroll', () => {
      let timing = 40; //　変化するタイミングを微調整する
      let scrollY = window.pageYOffset;
      let body = document.body;
      let triggerChangeSequence = document.getElementById('kotohazimeToKotobanome');
      let triggerKotobanome = document.getElementById('kotobanome');
      let triggerChangeSequenceY = triggerChangeSequence.getBoundingClientRect().top; // ウィンドウ上からの要素の位置
      let triggerKotobanomeY = triggerKotobanome.getBoundingClientRect().top;
      if (scrollY < triggerChangeSequenceY) {
        //コトハジメフェーズ
        document.getElementById('c1').innerHTML = 'コ';
        document.getElementById('c2').innerHTML = 'ト';
        document.getElementById('c3').innerHTML = 'ハ';
        document.getElementById('c4').innerHTML = 'ジ';
        document.getElementById('c5').innerHTML = 'メ';
        document.getElementById('c6').innerHTML = '🧃';
      } else if (scrollY >= triggerChangeSequenceY && scrollY <= triggerKotobanomeY) {
        document.getElementById('c1').innerHTML = '✨';
        document.getElementById('c2').innerHTML = '✨';
        document.getElementById('c3').innerHTML = '✨';
        document.getElementById('c4').innerHTML = '✨';
        document.getElementById('c5').innerHTML = '✨';
        document.getElementById('c6').innerHTML = '✨';
        //変換フェーズ
      } else if (scrollY > triggerKotobanomeY) {
        //コトバノメフェーズ
        document.getElementById('c1').innerHTML = 'コ';
        document.getElementById('c2').innerHTML = 'ト';
        document.getElementById('c3').innerHTML = 'バ';
        document.getElementById('c4').innerHTML = 'ノ';
        document.getElementById('c5').innerHTML = 'メ';
        document.getElementById('c6').innerHTML = '🌱';
      }
    });
  }, []);
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
          <NormalButton title='ログイン&登録' url='login' isInside={true} />
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
