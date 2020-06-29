import { FunctionComponent, useState, SyntheticEvent, useEffect } from 'react';
import Youtube from 'react-youtube';
import { css } from '@emotion/core';

import {
  imgBorder,
  titleLineHeight,
  font40,
  helveticaMedium,
  textColor900,
  helveticaRegular,
  regularText,
  font48,
  fontRegular,
  textLineHeight,
  textColor600,
  textColor400,
  footer,
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
} from './style';
import { Anime } from '../../../common/graphqlType';
import { DetailCharacterList } from './component/characterList';
import { ExternalLinkList } from './component/externalLinkList';
import { PlayButton } from '../../../common/icons/play';

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

    if (anime.desciption) {
      formatedText = anime.desciption.replace(regex, '');
    }

    const detailLayout = (
      <>
        <DetailCharacterList characterList={anime.characters} />

        <Cell
          deskPos={{ rowStart: 12, columnStart: 1, columnEnd: 7 }}
          tabPos={{ rowStart: 8, rowEnd: 40, columnStart: 1, columnEnd: 10 }}
          autoRow
          extraCss={[]}
        >
          <ExternalLinkList externalLinks={anime.externalLinks} />
        </Cell>

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 12, columnStart: 1, columnEnd: 7 }}
          tabPos={{ rowStart: 4, rowEnd: 6, columnStart: 1, columnEnd: 9 }}
          extraCss={[imgBorder]}
          backgroundImg={anime.xLargeCoverImage}
          ratio={0.7}
        />

        <Cell
          deskPos={{ rowStart: 9, rowEnd: 10, columnStart: 7, columnEnd: 15 }}
          tabPos={{ rowStart: 8, rowEnd: 9, columnStart: 9, columnEnd: 25 }}
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
          deskPos={{ rowStart: 10, columnStart: 7, columnEnd: 15 }}
          tabPos={{ rowStart: 6, rowEnd: 7, columnStart: 1, columnEnd: 25 }}
          extraCss={[...regularText, ...desc]}
          autoRow
        >
          <div
            css={descBlock}
            dangerouslySetInnerHTML={{
              __html: formatedText as string,
            }}
          />
        </Cell>

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 10, columnStart: 15, columnEnd: 25 }}
          tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
          ratio={1.77}
          extraCss={[imgBorder, cellVideo, css({ display: videoState ? 'none' : 'block' })]}
          backgroundImg={anime.bannerImage}
        />

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 10, columnStart: 15, columnEnd: 25 }}
          tabPos={{ rowStart: 7, rowEnd: 8, columnStart: 1, columnEnd: 25 }}
          ratio={1.77}
          extraCss={[imgBorder, cellButton, css({ display: videoState ? 'none' : 'flex' })]}
          onClick={click}
        >
          <span css={[font48, titleLineHeight, textColor900, playerButton, helveticaRegular]}>
            {PlayButton}
          </span>
        </Cell>

        <Cell
          deskPos={{ rowStart: 4, rowEnd: 10, columnStart: 15, columnEnd: 25 }}
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

        {/* <Cell
          deskPos={{ rowStart: endRow + 1, rowEnd: endRow + 3, columnStart: 1, columnEnd: 25 }}
          extraCss={[footer]}
        /> */}
      </>
    );

    return detailLayout;
  }

  return indexComponent;
};
