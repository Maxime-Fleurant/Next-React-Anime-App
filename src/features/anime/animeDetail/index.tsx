import { FunctionComponent } from 'react';

import { ReviewList } from './component/reviewList';
import GenericList from '../../../common/components/GenericList';
import {
  imgBorder,
  titleLineHeight,
  font40,
  helveticaMedium,
  textColor900,
  font32,
  textColor600,
  helveticaRegular,
  textColor400,
  regularText,
  font20,
  fontRegular,
  textLineHeight,
} from '../../../common/globalStyle';
import { Cell } from '../../../common/components/cell';
import { titleMargin } from './style';

// TYPE
type TAnimeDetail = FunctionComponent<{ anime: any }>;

// REACT
export const AnimeDetail: TAnimeDetail = ({ anime }) => {
  let indexComponent = <div>loading</div>;

  if (anime) {
    const characters = anime.characters.nodes.map((character: any) => {
      return {
        label: character.name.full,
        img: character.image.large,
        id: character.id,
      };
    });

    indexComponent = (
      <div>
        <div>{anime.title.romaji}</div>
        <div>{anime.title.english}</div>
        <div>{anime.title.native}</div>
        <div>{anime.title.userPreferred}</div>
        <div>{anime.description}</div>
        <div>{anime.episodes}</div>
        <div>{anime.id}</div>
        <GenericList entityList={characters} loading={false} url="/characters/" infinite />
        <ReviewList reviewList={anime.reviews.nodes} />
      </div>
    );
  }

  const testLayout = (
    <>
      <Cell
        deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 7 }}
        tabPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 11 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/akira.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 4, rowEnd: 7, columnStart: 7, columnEnd: 13 }}
        tabPos={{ rowStart: 4, rowEnd: 8, columnStart: 11, columnEnd: 25 }}
      >
        <div>
          <div css={[titleLineHeight, font40, helveticaMedium, textColor900]}>
            Shingeki no Kyojin
          </div>
          <div css={[titleMargin, titleLineHeight, font32, helveticaRegular, textColor600]}>
            Attack on Titan
          </div>
          <div css={[titleMargin, titleLineHeight, font32, helveticaRegular, textColor400]}>
            進撃の巨人
          </div>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 12, columnStart: 7, columnEnd: 16 }}
        tabPos={{ rowStart: 8, rowEnd: 12, columnStart: 11, columnEnd: 25 }}
      >
        <div css={regularText}>
          Several hundred years ago, humans were nearly exterminated by titans. Titans are typically
          several stories tall, seem to have no intelligence, devour human beings and, worst of all,
          seem to do it for the pleasure rather than as a food source. A small percentage of
          humanity survived by walling themselves in a city protected by extremely high walls, even
          taller than the biggest of titans.\r\nFlash forward to the present and the city has not
          seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness
          something horrific as the city walls are destroyed by a colossal titan.
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 11, columnStart: 16, columnEnd: 19 }}
        tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 13, columnEnd: 17 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 11, columnStart: 19, columnEnd: 22 }}
        tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 17, columnEnd: 21 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 7, rowEnd: 11, columnStart: 22, columnEnd: 25 }}
        tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 21, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 11, rowEnd: 15, columnStart: 16, columnEnd: 19 }}
        tabPos={{ rowStart: 13, rowEnd: 14, columnStart: 13, columnEnd: 17 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 11, rowEnd: 15, columnStart: 19, columnEnd: 22 }}
        tabPos={{ rowStart: 13, rowEnd: 14, columnStart: 17, columnEnd: 21 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 11, rowEnd: 15, columnStart: 22, columnEnd: 25 }}
        tabPos={{ rowStart: 13, rowEnd: 14, columnStart: 21, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 15, rowEnd: 19, columnStart: 16, columnEnd: 19 }}
        tabPos={{ rowStart: 14, rowEnd: 15, columnStart: 13, columnEnd: 17 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 15, rowEnd: 19, columnStart: 19, columnEnd: 22 }}
        tabPos={{ rowStart: 14, rowEnd: 15, columnStart: 17, columnEnd: 21 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 15, rowEnd: 19, columnStart: 22, columnEnd: 25 }}
        tabPos={{ rowStart: 14, rowEnd: 15, columnStart: 21, columnEnd: 25 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={0.7}
      />

      <Cell
        deskPos={{ rowStart: 12, rowEnd: 21, columnStart: 1, columnEnd: 16 }}
        tabPos={{ rowStart: 12, rowEnd: 14, columnStart: 1, columnEnd: 13 }}
        extraCss={[imgBorder]}
        backgroundImg="/img/girl2.jpg"
        ratio={1.7}
      />

      <Cell
        deskPos={{ rowStart: 21, rowEnd: 22, columnStart: 1, columnEnd: 25 }}
        tabPos={{ rowStart: 15, rowEnd: 16, columnStart: 1, columnEnd: 25 }}
      >
        <div css={[helveticaMedium, font40, titleLineHeight]}>
          Reviews
          <span css={[helveticaRegular, font20, titleLineHeight]}>レビュー</span>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 22, rowEnd: 26, columnStart: 1, columnEnd: 9 }}
        tabPos={{ rowStart: 16, rowEnd: 17, columnStart: 1, columnEnd: 13 }}
      >
        <div css={[helveticaMedium, regularText]}>
          An amazing start to an amazing series filled with grief, hype, and sheer will power.
          <br />
          <br />
          <span css={[helveticaRegular, regularText]}>
            Shingeki no Kyoujin, AKA Attack on Titan, is an absolutely fantastic anime. It’s the
            tale of a small faction of humanity fighting a hopeless battle against an overwhelming
            force that can and And yet, despite being on the bottom of the faced...
            <span css={helveticaMedium}> Read More</span>
          </span>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 22, rowEnd: 26, columnStart: 9, columnEnd: 17 }}
        tabPos={{ rowStart: 16, rowEnd: 17, columnStart: 13, columnEnd: 25 }}
      >
        <div css={[helveticaMedium, regularText]}>
          An amazing start to an amazing series filled with grief, hype, and sheer will power.
          <br />
          <br />
          <span css={[helveticaRegular, regularText]}>
            Shingeki no Kyoujin, AKA Attack on Titan, is an absolutely fantastic anime. It’s the
            tale of a small faction of humanity fighting a hopeless battle against an overwhelming
            force that can and And yet, despite being on the bottom of the faced...
            <span css={helveticaMedium}> Read More</span>
          </span>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 22, rowEnd: 26, columnStart: 17, columnEnd: 25 }}
        tabPos={{ rowStart: 17, rowEnd: 18, columnStart: 1, columnEnd: 13 }}
      >
        <div css={[helveticaMedium, regularText]}>
          An amazing start to an amazing series filled with grief, hype, and sheer will power.
          <br />
          <br />
          <span css={[helveticaRegular, regularText]}>
            Shingeki no Kyoujin, AKA Attack on Titan, is an absolutely fantastic anime. It’s the
            tale of a small faction of humanity fighting a hopeless battle against an overwhelming
            force that can and And yet, despite being on the bottom of the faced...
            <span css={helveticaMedium}> Read More</span>
          </span>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 26, rowEnd: 27, columnStart: 1, columnEnd: 9 }}
        tabPos={{ rowStart: 17, rowEnd: 18, columnStart: 13, columnEnd: 25 }}
      >
        <div css={[helveticaMedium, regularText]}>
          An amazing start to an amazing series filled with grief, hype, and sheer will power.
          <br />
          <br />
          <span css={[helveticaRegular, regularText]}>
            Shingeki no Kyoujin, AKA Attack on Titan, is an absolutely fantastic anime. It’s the
            tale of a small faction of humanity fighting a hopeless battle against an overwhelming
            force that can and And yet, despite being on the bottom of the faced...
            <span css={helveticaMedium}> Read More</span>
          </span>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 26, rowEnd: 27, columnStart: 9, columnEnd: 17 }}
        tabPos={{ rowStart: 18, rowEnd: 19, columnStart: 13, columnEnd: 25 }}
      >
        <div css={[helveticaMedium, regularText]}>
          An amazing start to an amazing series filled with grief, hype, and sheer will power.
          <br />
          <br />
          <span css={[helveticaRegular, regularText]}>
            Shingeki no Kyoujin, AKA Attack on Titan, is an absolutely fantastic anime. It’s the
            tale of a small faction of humanity fighting a hopeless battle against an overwhelming
            force that can and And yet, despite being on the bottom of the faced...
            <span css={helveticaMedium}> Read More</span>
          </span>
        </div>
      </Cell>

      <Cell
        deskPos={{ rowStart: 26, rowEnd: 27, columnStart: 17, columnEnd: 25 }}
        tabPos={{ rowStart: 18, rowEnd: 19, columnStart: 1, columnEnd: 13 }}
      >
        <div css={[helveticaMedium, regularText]}>
          An amazing start to an amazing series filled with grief, hype, and sheer will power.
          <br />
          <br />
          <span css={[helveticaRegular, regularText]}>
            Shingeki no Kyoujin, AKA Attack on Titan, is an absolutely fantastic anime. It’s the
            tale of a small faction of humanity fighting a hopeless battle against an overwhelming
            force that can and And yet, despite being on the bottom of the faced...
            <span css={helveticaMedium}> Read More</span>
          </span>
        </div>
      </Cell>
    </>
  );

  return testLayout;
};
