export type Provider = 'google';

export type GoogleOAuthParams = {
  code: string;
  state: string;
};

export type OAuthParams = GoogleOAuthParams;

export type OAuthRedirect = {
  redirect_url: string;
};
