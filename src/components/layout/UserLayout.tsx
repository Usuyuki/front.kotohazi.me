/** @format */

import Link from 'next/link';
import Head from 'next/head';
import HeadOGP from '@/components/head/HeadOGP';
import { UserLayoutProps } from '@/types/Layout';
const description = 'コトハジメの裏側にいます。';
const bgColorClass = 'bg-kotohazime';
const Layout = ({ children, titlePrefix }: UserLayoutProps) => {
  return (
    <div>
      <Head>
        <meta httpEquiv='content-language' content='ja' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />

        <meta name='description' content={description} />
        <title>{titlePrefix} | コトハジメ</title>
        {/* ogp */}
        <meta property='og:title' content='コトハジメ' />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://kotohazi.me/' />
        <meta property='og:image' content='https://kotohazi.me/img/ogp.png' />
        {/* <meta property="fb:app_id"      content="" /> */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@usuyuki26' />
        <meta name='twitter:creator' content='@usuyuki26' />
        {/* ふぁびこん */}
        <link rel='apple-touch-icon' type='image/png' href='/img/favicon/apple-touch-icon-180x180.png' />
        <link rel='icon' type='image/png' href='/img/favicon/icon-192x192.png' />
      </Head>
      <div className={'' + bgColorClass}>
        <main>
          <nav className='flex flex-row p-2 font-bold text-white bg-green-500'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/whitespace'>
              <a>whitespace </a>
            </Link>
          </nav>
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
