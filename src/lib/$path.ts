export const pagesPath = {
  "whitespace": {
    $url: (url?: { hash?: string }) => ({ pathname: '/whitespace' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
