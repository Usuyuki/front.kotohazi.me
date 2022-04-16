/** @format */

import Link from "next/link";
import Head from "next/head";

const Layout = ({ Props: props }) => {
  return (
    <div>
      <Head>
        <meta httpEquiv="content-language" content="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <meta
          name="description"
          content="勉強会やちょっとしたイベントのフィードバックに。コトハジメ、しませんか？"
        />
        <title>{props.title_prefix} | コトハジメ</title>
        {/* ogp */}
        <meta property="og:title" content="コトハジメ" />
        <meta
          property="og:description"
          content="勉強会やちょっとしたイベントのフィードバックに。コトハジメ、しませんか？"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kotohazi.me/" />
        <meta property="og:image" content="https://kotohazi.me/img/ogp.png" />
        {/* <meta property="fb:app_id"      content="" /> */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@usuyuki26" />
        <meta name="twitter:creator" content="@usuyuki26" />
        {/* ふぁびこん */}
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/img/favicon/apple-touch-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon/icon-192x192.png"
        />
      </Head>
      <nav className="flex flex-rows p-2 bg-red-500 text-white font-bold">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About </a>
        </Link>
      </nav>
      {props.title}
    </div>
  );
};

type Props = {
  title_prefix: string;
  pageTitle: string;
};

export default Layout;
