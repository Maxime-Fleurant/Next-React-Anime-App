import { FunctionComponent, useState, SyntheticEvent } from 'react';
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
  font48,
  textColor800,
  textColor500,
  fontRegular,
  font20,
  textLineHeight,
  textColor600,
  textColor400,
} from '../../../common/globalStyle';
import { Cell } from '../../../common/components/cell';
import {
  titleMargin,
  cellVideo,
  youtubeContainer,
  playerButton,
  cellButton,
  desc,
  descBlock,
  studioCell,
  studioQu,
  sideCat,
  sideInfo,
  allVid,
  tabLinkContainer,
} from './style';
import { Anime } from '../../../common/graphqlType';
import { DetailCharacterList } from './component/characterList';
import { ExternalLinkList } from './component/externalLinkList';

// TYPE
type TAnimeDetail = FunctionComponent<{ anime: Anime }>;

// REACT
export const AnimeDetail: TAnimeDetail = ({ anime }) => {
  const indexComponent = <div>loading</div>;
  let youtubePlayer: any;
  const [videoState, updateVideoState] = useState(false);

  const playerReady = (event: SyntheticEvent): void => {
    youtubePlayer = event.target;
  };

  const click = (): void => {
    if (youtubePlayer) {
      updateVideoState(true);
      youtubePlayer.playVideo();
    }
  };

  if (anime) {
    const regex = /\\n|<br>|<br \/>/g;
    let formatedText = '';
    let genresList = '';
    let tagList = '';

    if (anime.desciption) {
      formatedText = anime.desciption.replace(regex, '');
    }

    if (anime.genres) {
      genresList = anime.genres
        .map((genre) => {
          if (genre && genre !== null) {
            return genre.name;
          }
          return '';
        })
        .join(' ');
    }

    if (anime.tags) {
      tagList = anime.tags
        .map((tag) => {
          if (tag && tag !== null) {
            return tag.name;
          }
          return '';
        })
        .join(' ');
    }

    const detailLayout = (
      <>
        <DetailCharacterList characterList={anime.characters} />

        <Cell
          deskPos={{ rowStart: 12, rowEnd: 25, columnStart: 1, columnEnd: 7 }}
          tabPos={{ rowStart: 8, rowEnd: 40, columnStart: 1, columnEnd: 10 }}
          extraCss={[]}
        >
          <ExternalLinkList externalLinks={anime.externalLinks} />
          <div css={sideCat}>Genres</div>
          <div css={sideInfo}>{genresList}</div>

          <div css={sideCat}>Tags</div>
          <div css={sideInfo}>{tagList}</div>

          <div css={sideCat}>Status</div>
          <div css={sideInfo}>{anime.status}</div>

          <div css={sideCat}>Format</div>
          <div css={sideInfo}>{anime.format}</div>
        </Cell>

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 7 }}
          tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 1, columnEnd: 9 }}
          extraCss={[imgBorder]}
          backgroundImg={anime.xLargeCoverImage}
          ratio={0.7}
        />

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 15, columnEnd: 25 }}
          tabPos={{ rowStart: 5, rowEnd: 6, columnStart: 9, columnEnd: 25 }}
          extraCss={[studioCell]}
        >
          {anime.studio.name}
          &nbsp;
          <span css={studioQu}>Studio</span>
        </Cell>

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 8, columnStart: 7, columnEnd: 15 }}
          tabPos={{ rowStart: 4, rowEnd: 5, columnStart: 9, columnEnd: 25 }}
        >
          <div>
            <div css={[textLineHeight, font40, helveticaMedium, textColor900]}>
              {anime.romajiTitle}
            </div>
            <div css={[titleMargin, textLineHeight, fontRegular, helveticaRegular, textColor600]}>
              {anime.englishTitle}
            </div>
            <div css={[titleMargin, textLineHeight, fontRegular, helveticaRegular, textColor400]}>
              {anime.nativeTitle}
            </div>
          </div>
        </Cell>

        <Cell
          deskPos={{ rowStart: 8, rowEnd: 20, columnStart: 7, columnEnd: 15 }}
          tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
          extraCss={[...regularText, ...desc]}
        >
          <div css={descBlock} dangerouslySetInnerHTML={{ __html: formatedText as string }} />
        </Cell>

        <Cell
          deskPos={{ rowStart: 8, rowEnd: 14, columnStart: 15, columnEnd: 25 }}
          tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
          ratio={1.77}
          extraCss={[imgBorder, cellVideo, css({ display: videoState ? 'none' : 'block' })]}
          backgroundImg={anime.bannerImage}
        />

        <Cell
          deskPos={{ rowStart: 8, rowEnd: 14, columnStart: 15, columnEnd: 25 }}
          tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
          ratio={1.77}
          extraCss={[imgBorder, cellButton, css({ display: videoState ? 'none' : 'flex' })]}
          onClick={click}
        >
          <span css={[font48, titleLineHeight, textColor900, playerButton, helveticaRegular]}>
            Trailer
          </span>
        </Cell>

        <Cell
          deskPos={{ rowStart: 8, rowEnd: 14, columnStart: 15, columnEnd: 25 }}
          tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
          ratio={1.77}
          extraCss={[imgBorder, youtubeContainer]}
        >
          <Youtube
            videoId={anime.trailer}
            opts={{ width: '100%', height: '100%' }}
            onReady={playerReady}
          />
        </Cell>
      </>
    );

    return detailLayout;
  }

  return indexComponent;
};
