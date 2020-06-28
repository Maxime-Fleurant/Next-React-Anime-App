import { FunctionComponent, useState } from 'react';
import Maybe from 'graphql/tsutils/Maybe';
import { Cell } from '../../../../common/components/cell';
import { imgBorder } from '../../../../common/globalStyle';

import { Character } from '../../../../common/graphqlType';
import { picCharact } from './characterListStyle';
import { CharacDesc } from './characDesc';

// TYPE
type TDetailCharacterList = FunctionComponent<{ characterList: Maybe<Character>[] }>;

// REACT
export const DetailCharacterList: TDetailCharacterList = ({ characterList }) => {
  let deskColstart = 15;
  let deskRowStart = 14;
  let tabColstart = 10;
  let tabRowStart = 8;

  const [focused, updateFocused] = useState<Character | null>(null);

  const characterClickFactory = (character: Character) => {
    return (): void => {
      updateFocused(character);
    };
  };

  const returnList = (): void => {
    updateFocused(null);
  };

  if (focused) {
    return <CharacDesc onClick={returnList} character={focused} />;
  }

  const characterJsxList = characterList
    .slice(0, characterList.length - (characterList.length % 5))
    .map((character) => {
      if (!character) {
        return null;
      }

      if (deskColstart === 25) {
        deskColstart = 15;
        deskRowStart += 2;
      }

      if (tabColstart === 25) {
        tabColstart = 10;
        tabRowStart += 1;
      }

      const currentCell = (
        <Cell
          key={character.id}
          deskPos={{
            rowStart: deskRowStart,
            rowEnd: deskRowStart + 2,
            columnStart: deskColstart,
            columnEnd: deskColstart + 2,
          }}
          tabPos={{
            rowStart: tabRowStart,
            rowEnd: tabRowStart + 1,
            columnStart: tabColstart,
            columnEnd: tabColstart + 3,
          }}
          onClick={characterClickFactory(character)}
          extraCss={[imgBorder, picCharact]}
          backgroundImg={character.largeImg}
          ratio={1}
        />
      );

      deskColstart += 2;
      tabColstart += 3;

      return currentCell;
    });

  const charactersJsx = characterJsxList.filter((el): el is JSX.Element => el !== null);

  return <>{charactersJsx}</>;
};
