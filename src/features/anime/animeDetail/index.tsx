import { FunctionComponent, useState } from 'react';
import Youtube from 'react-youtube';
import { css } from '@emotion/core';

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
  font48,
} from '../../../common/globalStyle';
import { Cell } from '../../../common/components/cell';
import { titleMargin, cellVideo, youtubeContainer, playerButton, cellButton } from './style';
import { Anime } from '../../../common/graphqlType';

// TYPE
type TAnimeDetail = FunctionComponent<{ anime: Anime }>;

// REACT
export const AnimeDetail: TAnimeDetail = ({ anime }) => {
  const indexComponent = <div>loading</div>;
  let youtubePlayer: any;
  const [videoState, updateVideoState] = useState(false);

  const playerReady = (event: any) => {
    youtubePlayer = event.target;
  };

  const click = (): void => {
    if (youtubePlayer) {
      updateVideoState(true);
      youtubePlayer.playVideo();
    }
  };

  if (anime) {
    console.log(anime);
    const testLayout = (
      <>
        <Cell
          deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 7 }}
          tabPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 11 }}
          extraCss={[imgBorder]}
          backgroundImg={anime.largeCoverImage}
          ratio={0.7}
        />
        <Cell
          deskPos={{ rowStart: 4, rowEnd: 7, columnStart: 7, columnEnd: 13 }}
          tabPos={{ rowStart: 4, rowEnd: 8, columnStart: 11, columnEnd: 25 }}
        >
          <div>
            <div css={[titleLineHeight, font40, helveticaMedium, textColor900]}>
              {anime.romajiTitle}
            </div>
            <div css={[titleMargin, titleLineHeight, font32, helveticaRegular, textColor600]}>
              {anime.englishTitle}
            </div>
            <div css={[titleMargin, titleLineHeight, font32, helveticaRegular, textColor400]}>
              {anime.nativeTitle}
            </div>
          </div>
        </Cell>
        <Cell
          deskPos={{ rowStart: 7, rowEnd: 12, columnStart: 7, columnEnd: 16 }}
          tabPos={{ rowStart: 8, rowEnd: 12, columnStart: 11, columnEnd: 25 }}
          extraCss={regularText}
        >
          {anime.desciption as string}
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
          ratio={1.77}
          extraCss={[imgBorder, cellVideo, css({ display: videoState ? 'none' : 'block' })]}
          backgroundImg="/img/banner6.jpg"
        />

        <Cell
          deskPos={{ rowStart: 12, rowEnd: 21, columnStart: 1, columnEnd: 16 }}
          tabPos={{ rowStart: 12, rowEnd: 14, columnStart: 1, columnEnd: 13 }}
          ratio={1.77}
          extraCss={[imgBorder, cellButton, css({ display: videoState ? 'none' : 'flex' })]}
          onClick={click}
        >
          <span css={[font48, titleLineHeight, textColor900, playerButton]}>Trailer</span>
        </Cell>

        <Cell
          deskPos={{ rowStart: 12, rowEnd: 21, columnStart: 1, columnEnd: 16 }}
          tabPos={{ rowStart: 12, rowEnd: 14, columnStart: 1, columnEnd: 13 }}
          ratio={1.77}
          extraCss={[imgBorder, youtubeContainer]}
        >
          <Youtube
            videoId="KKzmOh4SuBc"
            opts={{ width: '100%', height: '100%' }}
            onReady={playerReady}
          />
        </Cell>

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
  }

  return indexComponent;
};

// if (anime) {
//   const characters = anime.characters.nodes.map((character: any) => {
//     return {
//       label: character.name.full,
//       img: character.image.large,
//       id: character.id,
//     };
//   });

//   indexComponent = (
//     <div>
//       <div>{anime.title.romaji}</div>
//       <div>{anime.title.english}</div>
//       <div>{anime.title.native}</div>
//       <div>{anime.title.userPreferred}</div>
//       <div>{anime.description}</div>
//       <div>{anime.episodes}</div>
//       <div>{anime.id}</div>
//       <GenericList entityList={characters} loading={false} url="/characters/" infinite />
//       <ReviewList reviewList={anime.reviews.nodes} />
//     </div>
//   );
// }
