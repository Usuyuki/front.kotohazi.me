/** @format */
import { ReactNode } from 'react';

/**
 * @description 未ログインユーザー向けページ用。OGP関連も用意。
 */
export type VisitorLayoutType = {
  titlePrefix: string;
  description: string;
  children: ReactNode;
  pageTitle?: string;
  bgColorClass: string;
};

/**
 * @description ログインユーザー向けページ用。OGP関連は必要ない
 */
export type UserLayoutType = {
  titlePrefix: string;
  children: ReactNode;
  pageTitle?: string;
};

/**
 * @description headタグ内のための型
 */
export type HeadOGPType = {
  description: string;
  titlePrefix: string;
};
