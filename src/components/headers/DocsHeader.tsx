import { HeaderType } from '@/types/components/Headers';
import { FC } from 'react';
import DocsLinkButton from '../buttons/DocsLinkButton';
const DocsHeader: FC<HeaderType> = ({}) => {
  return (
    <nav className='flex justify-center items-center'>
      <DocsLinkButton icon='lock' title='プライバシーポリシー' url='/privacyPolicy' />
      <DocsLinkButton icon='description' title='利用規約' url='/terms' />
      <DocsLinkButton icon='code' title='リリースノート' url='/releaseNote' />
      <DocsLinkButton icon='chat_bubble' title='お知らせ' url='/announcement' />
      <DocsLinkButton icon='contact_support' title='お問い合わせ' url='/contact' />
      <DocsLinkButton icon='verified' title='ライセンス' url='/license' />
    </nav>
  );
};
export default DocsHeader;
