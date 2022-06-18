import { useEffect } from 'react';
import type { NextRouter } from 'next/router';

export function TopPageAnimation(router: NextRouter) {
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
}
