import { FunctionComponent, useState } from 'react';
import Youtube from 'react-youtube';
import { css } from '@emotion/core';

import {
  imgBorder,
  titleLineHeight,
  font40,
  helveticaMedium,
  textColor900,
  font32,
  helveticaRegular,
  regularText,
  font20,
  font48,
  textColor800,
  textColor500,
} from '../../../common/globalStyle';
import { Cell } from '../../../common/components/cell';
import { titleMargin, cellVideo, youtubeContainer, playerButton, cellButton, desc } from './style';
import { Anime } from '../../../common/graphqlType';
import { DetailCharacterList } from './component/characterList';
import { ReviewList } from './component/reviewList';

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
    const regex = /\\n/g;
    let formatedText = '';

    if (anime.desciption) {
      formatedText = anime.desciption.replace(regex, '');
    }

    const testLayout = (
      <>
        <DetailCharacterList characterList={anime.characters} />
        <ReviewList reviewList={anime.reviews} />
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
            <div css={[titleMargin, titleLineHeight, font32, helveticaRegular, textColor800]}>
              {anime.englishTitle}
            </div>
            <div css={[titleMargin, titleLineHeight, font32, helveticaRegular, textColor500]}>
              {anime.nativeTitle}
            </div>
          </div>
        </Cell>
        <Cell
          deskPos={{ rowStart: 7, rowEnd: 12, columnStart: 7, columnEnd: 16 }}
          tabPos={{ rowStart: 8, rowEnd: 12, columnStart: 11, columnEnd: 25 }}
          extraCss={[...regularText, ...desc]}
        >
          <div dangerouslySetInnerHTML={{ __html: formatedText as string }} />
          {/* {anime.desciption as string} */}
        </Cell>

        <Cell
          deskPos={{ rowStart: 12, rowEnd: 21, columnStart: 1, columnEnd: 16 }}
          tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 1, columnEnd: 25 }}
          ratio={1.77}
          extraCss={[imgBorder, cellVideo, css({ display: videoState ? 'none' : 'block' })]}
          backgroundImg={anime.bannerImage}
        />

        <Cell
          deskPos={{ rowStart: 12, rowEnd: 21, columnStart: 1, columnEnd: 16 }}
          tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 1, columnEnd: 25 }}
          ratio={1.77}
          extraCss={[imgBorder, cellButton, css({ display: videoState ? 'none' : 'flex' })]}
          onClick={click}
        >
          <span css={[font48, titleLineHeight, textColor900, playerButton, helveticaRegular]}>
            Trailer
          </span>
        </Cell>

        <Cell
          deskPos={{ rowStart: 12, rowEnd: 21, columnStart: 1, columnEnd: 16 }}
          tabPos={{ rowStart: 12, rowEnd: 13, columnStart: 1, columnEnd: 25 }}
          ratio={1.77}
          extraCss={[imgBorder, youtubeContainer]}
        >
          <Youtube
            videoId={anime.trailer}
            opts={{ width: '100%', height: '100%' }}
            onReady={playerReady}
          />
        </Cell>

        <Cell
          deskPos={{ rowStart: 21, rowEnd: 22, columnStart: 1, columnEnd: 25 }}
          tabPos={{ rowStart: 16, rowEnd: 17, columnStart: 1, columnEnd: 25 }}
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
