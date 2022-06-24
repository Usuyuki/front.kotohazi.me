/**
 * @description ライセンスの文章用
 */
import { ReactNode } from 'react';
import { ReleaseNoteGenre } from '../enums/ReleaseNoteGenre';
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
  children?: ReactNode;
};
export type ReleaseNoteSentenceType = {
  title: string;
  date: string;
  genre: ReleaseNoteGenre;
  children?: ReactNode;
};
export type AnnouncementSentenceType = {
  title: string;
  date: string;
  children?: ReactNode;
};
export type TermLinkType = {};
