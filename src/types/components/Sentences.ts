/**
 * @description ライセンスの文章用
 */
import { ReactNode } from 'react';
export type LicenseSentenceType = {
  productName: string;
  productUrl: string;
  description: string;
  copyright: string;
  licenseType: string;
  licenseUrl: string;
};
export type RuleSentenceType = {
  title: string;
  children: ReactNode;
};
