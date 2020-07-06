import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { TStore } from '../../../../app/redux';
import { SEARCH_ANIME } from '../graphql/searchAnimeQuery';
import GenericList from '../../../../common/components/GenericList';
import { Anime } from '../../../../common/graphqlType';

// REACT
export const ContainerAnimeList = (): JSX.Element => {
  const stateFormSelection = useSelector((state: TStore) => {
    return state.animeListPageReducers.formSelection;
  });

  const { loading, error, data: animes, fetchMore } = useQuery<{ searchAnime: Anime[] }>(
    SEARCH_ANIME,
    {
      variables: { ...stateFormSelection, skip: 0 },
      fetchPolicy: 'network-only',
    }
  );

  const fetchMoreHandler = (): void => {
    if (animes) {
      fetchMore({
        variables: { skip: animes.searchAnime.length as number },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult) {
            return { searchAnime: [...prev.searchAnime, ...fetchMoreResult.searchAnime] };
          }

          return { searchAnime: [...prev.searchAnime] };
        },
      });
    }
  };

  if (animes) {
    const formatedAnime = animes.searchAnime.map((anime: Anime) => {
      return { label: anime.romajiTitle, img: anime.largeCoverImage, id: anime.id };
    });

    return <GenericList fetchMore={fetchMoreHandler} entityList={formatedAnime} />;
  }

  return <div />;
};
