/** @format */

import HeadOGP from '@/components/head/HeadOGP';
import { VisitorLayoutType } from '@/types/Layout';
import VisitorHeader from '../headers/VisitorHeader';
import NormalFooter from '../footers/NormalFooter';
import dynamic from 'next/dynamic'; //nextjsでp5を使うためのやつ
import p5Types from 'p5';

const Sketch = dynamic(import('react-p5'), {
  loading: () => <></>,
  ssr: false,
});
//p5ここから
const words = ['かっこいい', 'アンケート', '勉強会', 'あたたかい'];
let font;

const preload = (p5: p5Types) => {
  // 画像などのロードを行う
  font = p5.loadFont('/fonts/KiwiMaru-Regular.ttf');
};

const setup = (p5: p5Types, canvasParentRef: Element) => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight, 'webgl').parent(canvasParentRef);
  p5.noLoop(); // p5でいうsetupの処理を書く
};

const draw = (p5: p5Types) => {
  // p5でいうdrawの処理を書く
  // p5.background(2);
  // p5.setAttributes('alpha', true);
  p5.textFont(font, 120);
  p5.textAlign('center', 'center');
  for (var i = 0; i < words.length; i++) {
    p5.fill(Math.random() * 255);
    p5.text(words[i], Math.random() * p5.windowWidth, (Math.random() * p5.windowHeight) / 2);
  }
};

const windowResized = (p5: p5Types) => {
  // コンポーネントのレスポンシブ化
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
};
//p5ここまで

const Layout = ({ children, titlePrefix, bgColorClass, description, pageTitle }: VisitorLayoutType) => {
  return (
    <div>
      <HeadOGP description={description} titlePrefix={titlePrefix} />
      <div className={bgColorClass}>
        <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} />;
        <div className='main-wrapper'>
          <main>
            {pageTitle ? <h1 className='my-4 text-5xl text-center kiwi-maru'>-{pageTitle}-</h1> : ''}
            {children}
          </main>
          <NormalFooter />
        </div>
      </div>
    </div>
  );
};

export default Layout;
