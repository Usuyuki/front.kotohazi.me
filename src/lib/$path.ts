export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "announcement": {
    $url: (url?: { hash?: string }) => ({ pathname: '/announcement' as const, hash: url?.hash })
  },
  "contact": {
    $url: (url?: { hash?: string }) => ({ pathname: '/contact' as const, hash: url?.hash })
  },
  "home": {
    $url: (url?: { hash?: string }) => ({ pathname: '/home' as const, hash: url?.hash })
  },
  "license": {
    $url: (url?: { hash?: string }) => ({ pathname: '/license' as const, hash: url?.hash })
  },
  "login": {
    $url: (url?: { hash?: string }) => ({ pathname: '/login' as const, hash: url?.hash }),
    "callback": {
      $url: (url?: { hash?: string }) => ({ pathname: '/login/callback' as const, hash: url?.hash })
    }
  },
  "privacyPolicy": {
    $url: (url?: { hash?: string }) => ({ pathname: '/privacyPolicy' as const, hash: url?.hash })
  },
  "releaseNote": {
    $url: (url?: { hash?: string }) => ({ pathname: '/releaseNote' as const, hash: url?.hash })
  },
  "sample": {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample' as const, hash: url?.hash })
  },
  "terms": {
    $url: (url?: { hash?: string }) => ({ pathname: '/terms' as const, hash: url?.hash })
  },
  "whitespace": {
    $url: (url?: { hash?: string }) => ({ pathname: '/whitespace' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
