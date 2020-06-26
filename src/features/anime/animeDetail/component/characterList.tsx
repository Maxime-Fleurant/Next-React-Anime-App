import { FunctionComponent, useState, MouseEventHandler, SyntheticEvent } from 'react';
import Maybe from 'graphql/tsutils/Maybe';
import { Cell } from '../../../../common/components/cell';
import {
  imgBorder,
  font40,
  helveticaRegular,
  textColor900,
  helveticaMedium,
  font32,
  textColor500,
  regularText,
  fontRegular,
} from '../../../../common/globalStyle';

import { Character } from '../../../../common/graphqlType';
import { charDesc, descBack, picCharact } from './characterListStyle';

// TYPE
type TDetailCharacterList = FunctionComponent<{ characterList: Maybe<Character>[] }>;

// REACT
export const DetailCharacterList: TDetailCharacterList = ({ characterList }) => {
  let deskColstart = 16;
  let deskRowStart = 7;
  let tabColstart = 1;
  let tabRowStart = 13;

  const [focused, updateFocused] = useState<Character | null>(null);

  const characterClickFactory = (character: Character) => {
    return (e: SyntheticEvent) => {
      updateFocused(character);
    };
  };

  const returnList = () => {
    updateFocused(null);
  };

  if (focused) {
    const regex = /\\n/g;
    const formatedText = focused.description.replace(regex, '');

    return (
      <>
        <Cell
          deskPos={{
            rowStart: 7,
            rowEnd: 11,
            columnStart: 16,
            columnEnd: 19,
          }}
          tabPos={{
            rowStart: 13,
            rowEnd: 16,
            columnStart: 1,
            columnEnd: 9,
          }}
          extraCss={[imgBorder]}
          backgroundImg={focused.largeImg}
          ratio={0.7}
        />

        <Cell
          deskPos={{
            rowStart: 7,
            rowEnd: 8,
            columnStart: 19,
            columnEnd: 25,
          }}
          tabPos={{
            rowStart: 13,
            rowEnd: 14,
            columnStart: 9,
            columnEnd: 20,
          }}
          extraCss={[font40, helveticaMedium, textColor900]}
        >
          {focused.name}
        </Cell>

        <Cell
          deskPos={{
            rowStart: 10,
            rowEnd: 11,
            columnStart: 19,
            columnEnd: 25,
          }}
          tabPos={{
            rowStart: 13,
            rowEnd: 14,
            columnStart: 20,
            columnEnd: 25,
          }}
          extraCss={[fontRegular, helveticaMedium, textColor900, descBack]}
          onClick={returnList}
        >
          &lt; Back
        </Cell>

        <Cell
          deskPos={{
            rowStart: 8,
            rowEnd: 9,
            columnStart: 19,
            columnEnd: 25,
          }}
          tabPos={{
            rowStart: 14,
            rowEnd: 15,
            columnStart: 9,
            columnEnd: 25,
          }}
          extraCss={[font32, helveticaRegular, textColor500]}
        >
          {focused.nativeName}
        </Cell>

        <Cell
          deskPos={{
            rowStart: 11,
            rowEnd: 21,
            columnStart: 16,
            columnEnd: 25,
          }}
          tabPos={{
            rowStart: 15,
            rowEnd: 16,
            columnStart: 9,
            columnEnd: 25,
          }}
          extraCss={[...regularText, charDesc]}
        >
          <div dangerouslySetInnerHTML={{ __html: formatedText }} />
        </Cell>
      </>
    );
  }

  const characterJsxList = characterList.slice(0, 9).map((character) => {
    if (!character) {
      return null;
    }

    if (deskColstart === 25) {
      deskColstart = 16;
      deskRowStart += 4;
    }

    if (tabColstart === 25) {
      tabColstart = 1;
      tabRowStart += 1;
    }

    const currentCell = (
      <Cell
        key={character.id}
        deskPos={{
          rowStart: deskRowStart,
          rowEnd: deskRowStart + 4,
          columnStart: deskColstart,
          columnEnd: deskColstart + 3,
        }}
        tabPos={{
          rowStart: tabRowStart,
          rowEnd: tabRowStart + 1,
          columnStart: tabColstart,
          columnEnd: tabColstart + 8,
        }}
        onClick={characterClickFactory(character)}
        extraCss={[imgBorder, picCharact]}
        backgroundImg={character.largeImg}
        ratio={0.7}
      />
    );

    deskColstart += 3;
    tabColstart += 8;

    return currentCell;
  });

  const charactersJsx = characterJsxList.filter((el): el is JSX.Element => el !== null);

  return <>{charactersJsx}</>;
};
