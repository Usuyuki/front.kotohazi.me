/** @format */

import type { NextPage } from 'next';
import Layout from '@/components/layouts/VisitorLayout';
import LicenseSentence from '@/components/sentence/LicenseSentence';
import LicenseHeading from '@/components/haedings/licenseHeading';
const License: NextPage = () => {
  return (
    <div>
      <Layout
        titlePrefix='ライセンス'
        pageTitle='ライセンス'
        bgColorClass='bg-low'
        description='コトハジメのライセンスについて'
      >
        <div className=''>
          <LicenseHeading title='フロントエンド' />
          <LicenseSentence
            productName='Typescript'
            productUrl='https://www.typescriptlang.org/'
            description='このサービスを構築する上で無くてはならないものです。'
            copyright='Copyright (c) Microsoft Corporation. All rights reserved.'
            licenseType='Apache License 2.0'
            licenseUrl='https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt'
          />
          <LicenseSentence
            productName='NEXT.js'
            productUrl='https://nextjs.org/'
            description='フロントエンドで使用しているメインのフレームワークです。'
            copyright='Copyright (c) 2022 Vercel, Inc.'
            licenseType='MIT'
            licenseUrl='https://github.com/vercel/next.js/blob/canary/license.md'
          />
          <LicenseSentence
            productName='tailwindcss'
            productUrl='https://tailwindcss.com/'
            copyright='Copyright (c) Adam Wathan <adam.wathan@gmail.com>,Copyright (c) Jonathan Reinink <jonathan@reinink.ca>'
            description='CSSライブラリとして使用しています。'
            licenseType='MIT'
            licenseUrl='https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE'
          />
          <LicenseHeading title='バックエンド' />
          <LicenseSentence
            productName='Laravel'
            productUrl='https://laravel.com/'
            description='バックエンドで使用しているメインのフレームワークです。'
            copyright='The MIT License (MIT) Copyright © Taylor Otwell'
            licenseType='MIT'
            licenseUrl='https://laravel-guide.readthedocs.io/en/latest/license/'
          />
          <LicenseSentence
            productName='laravel-backup'
            productUrl='https://github.com/spatie/laravel-backup'
            description='データベースのバックアップに使用しています。'
            copyright='Copyright (c) Spatie bvba info@spatie.be'
            licenseType='MIT'
            licenseUrl='https://github.com/spatie/laravel-backup/blob/main/LICENSE.md'
          />
          <LicenseSentence
            productName='larastan'
            productUrl='https://github.com/spatie/laravel-backup'
            description='PHPの静的解析に使用しています。'
            copyright='Copyright (c) Nuno Maduro enunomaduro@gmail.com'
            licenseType='MIT'
            licenseUrl='https://github.com/nunomaduro/larastan/blob/master/LICENSE.md'
          />
          <LicenseSentence
            productName='SecurityAdvisories'
            productUrl='https://github.com/Roave/SecurityAdvisories'
            description='セキュリティ的に問題のあるものを表示するために使用しています。'
            copyright='Copyright (c) 2014 Roave, LLC'
            licenseType='MIT'
            licenseUrl='https://github.com/Roave/SecurityAdvisories/blob/latest/LICENSE'
          />
          <LicenseSentence
            productName='laravel-ide-helper'
            productUrl='https://github.com/barryvdh/laravel-ide-helper'
            description='エディターの補助のために使用しています。'
            copyright='Copyright (c) Barry vd. Heuvel barryvdh@gmail.com'
            licenseType='MIT'
            licenseUrl='https://github.com/barryvdh/laravel-ide-helper/blob/master/LICENSE.md'
          />
          <LicenseSentence
            productName='ucan-lab/docker-laravel'
            productUrl='https://github.com/ucan-lab/docker-laravel'
            description='Dockerのテンプレートとして使用しています。'
            copyright='Copyright (c) 2020 ucan-lab/docker-laravel'
            licenseType='MIT'
            licenseUrl='https://github.com/ucan-lab/docker-laravel/blob/main/LICENSE'
          />
        </div>
      </Layout>
    </div>
  );
};

export default License;
