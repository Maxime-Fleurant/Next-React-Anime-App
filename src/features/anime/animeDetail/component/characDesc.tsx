import { FunctionComponent } from 'react';
import { useTheme } from 'emotion-theming';
import { Character } from '../../../../common/graphqlType';
import { Cell } from '../../../../common/components/cell';
import {
  helveticaMedium,
  fontRegular,
  font32,
  helveticaRegular,
  regularText,
  textLineHeight,
} from '../../../../common/globalStyle';
import { descBack, charDesc, characterSecondName, returnButton } from './characterListStyle';

import { ITheme } from '../../../layout/theme';

// TYPE
type TCharacDesc = FunctionComponent<{
  character: Character;
  onClick: () => void;
  endRowCallback?: (endRow: number) => void;
}>;

// REACT
export const CharacDesc: TCharacDesc = ({ character, onClick }) => {
  const regex = /\\n|<br>|<br \/>/g;
  const formatedText = character.description.replace(regex, '');

  const theme = useTheme<ITheme>();

  return (
    <>
      <Cell
        deskPos={{
          rowStart: 10,
          rowEnd: 14,
          columnStart: 15,
          columnEnd: 18,
        }}
        tabPos={{
          rowStart: 8,
          rowEnd: 9,
          columnStart: 10,
          columnEnd: 15,
        }}
        extraCss={[theme.imgBorder]}
        backgroundImg={character.largeImg}
        ratio={1.3}
      />

      <Cell
        deskPos={{
          rowStart: 10,
          columnStart: 18,
          columnEnd: 25,
        }}
        autoRow
        tabPos={{
          rowStart: 8,
          rowEnd: 12,
          columnStart: 15,
          columnEnd: 25,
        }}
        extraCss={[font32, helveticaMedium, theme.text.textColor900, textLineHeight]}
      >
        {character.name}
        <div css={[characterSecondName, fontRegular, theme.text.textColor600]}>
          {character.nativeName}
        </div>
        <div
          css={[...regularText, charDesc(theme), helveticaRegular, theme.text.textColor900]}
          dangerouslySetInnerHTML={{ __html: formatedText }}
        />
      </Cell>

      <Cell
        deskPos={{
          rowStart: 14,
          rowEnd: 16,
          columnStart: 15,
          columnEnd: 18,
        }}
        tabPos={{
          rowStart: 9,
          rowEnd: 10,
          columnStart: 10,
          columnEnd: 15,
        }}
        extraCss={[fontRegular, helveticaMedium, theme.text.textColor900, descBack]}
        onClick={onClick}
      >
        <div css={returnButton(theme)}>Return</div>
      </Cell>
    </>
  );
};
