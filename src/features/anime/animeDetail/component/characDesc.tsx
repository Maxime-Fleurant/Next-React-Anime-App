import { FunctionComponent } from 'react';
import { Character } from '../../../../common/graphqlType';
import { Cell } from '../../../../common/components/cell';
import {
  imgBorder,
  font40,
  helveticaMedium,
  textColor900,
  fontRegular,
  font32,
  helveticaRegular,
  textColor500,
  regularText,
  textLineHeight,
  textColor600,
} from '../../../../common/globalStyle';
import { descBack, charDesc, characterSecondName, returnButton } from './characterListStyle';

// TYPE
type TCharacDesc = FunctionComponent<{
  character: Character;
  onClick: () => void;
  endRowCallback?: (endRow: number) => void;
}>;

// REACT
export const CharacDesc: TCharacDesc = ({ character, onClick, endRowCallback }) => {
  const regex = /\\n|<br>|<br \/>/g;
  const formatedText = character.description.replace(regex, '');

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
        extraCss={[imgBorder]}
        backgroundImg={character.largeImg}
        ratio={0.7}
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
        endRowCallback={endRowCallback}
        extraCss={[font32, helveticaMedium, textColor900, textLineHeight]}
      >
        {character.name}
        <div css={[characterSecondName, fontRegular, textColor600]}>{character.nativeName}</div>
        <div
          css={[...regularText, charDesc, helveticaRegular]}
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
        extraCss={[fontRegular, helveticaMedium, textColor900, descBack]}
        onClick={onClick}
      >
        <div css={returnButton}>Return</div>
      </Cell>
    </>
  );
};
