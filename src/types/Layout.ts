/** @format */
import { ReactNode } from 'react';

/**
 * @description 未ログインユーザー向けページ用。OGP関連も用意。
 */
export type VisitorLayoutProps = {
  titlePrefix: string;
  description: string;
  children: ReactNode;
  pageTitle?: string;
  bgColorClass: string;
};

/**
 * @description ログインユーザー向けページ用。OGP関連は必要ない
 */
export type UserLayoutProps = {
  titlePrefix: string;
  children: ReactNode;
  pageTitle?: string;
};
