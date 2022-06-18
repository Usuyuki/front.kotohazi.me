import NextAuth, { Session, TokenSet } from 'next-auth';
import { decode } from 'jsonwebtoken';

type UserInfo = {
  name: string;
  email: string;
};

type Tokens = {
  accessToken: string;
  accessTokenExpires: number | null;
  refreshToken: string;
  idToken: string | undefined;
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
};

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  providers: [
    {
      id: 'laravelpassport',
      name: 'Laravel Passport',
      type: 'oauth',
      version: '2.0',
      domain: '',
      scope: '*',
      params: { grant_type: 'authorization_code' },
      accessTokenUrl: process.env.NEXT_PUBLIC_LARAVEL_APP_URL + '/oauth/token',
      requestTokenUrl: process.env.NEXT_PUBLIC_LARAVEL_APP_URL + '/oauth/token',
      authorizationUrl: process.env.NEXT_PUBLIC_LARAVEL_APP_URL + '/oauth/authorize?response_type=code',
      profileUrl: process.env.NEXT_PUBLIC_LARAVEL_APP_URL + '/api/v1/userinfo',
      profile: (profile: UserInfo, tokens: Tokens) => {
        const jwt = tokens.accessToken;
        const sub = decode(jwt).sub;
        return {
          id: sub,
          email: profile.email,
          name: profile.name,
        };
      },
      clientId: process.env.LARAVEL_PASSPORT_CLIENT_ID ?? '',
      clientSecret: process.env.LARAVEL_PASSPORT_CLIENT_SECRET ?? '',
    },
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      // Add access_token to the token right after signin
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    session(session: any, token) {
      // Set accessToken to session.
      session.accessToken = token.accessToken;
      session.user.id = token.sub;
      return session as any;
    },

    /**
     * @param  {string} url      URL provided as callback URL by the client
     * @param  {string} baseUrl  Default base URL of site (can be used as fallback)
     * @return {string}          URL the client will be redirect to
     */
    async redirect(url: string, baseUrl: string): Promise<string> {
      return url ?? baseUrl;
    },
  },
});
