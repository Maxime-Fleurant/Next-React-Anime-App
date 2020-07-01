import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { TStore } from '../../../../app/redux';
import { SEARCH_ANIME } from '../graphql/searchAnimeQuery';
import GenericList from '../../../../common/components/GenericList';

export const ContainerAnimeList = () => {
  const stateFormSelection = useSelector((state: TStore) => {
    return state.animeListPageReducers.formSelection;
  });

  const { loading, error, data: animes, fetchMore } = useQuery(SEARCH_ANIME, {
    variables: { ...stateFormSelection, skip: 0 },
    fetchPolicy: 'network-only',
  });
  console.log(animes);
  const fetchMoreHandler = (): void => {
    fetchMore({
      variables: { skip: animes.searchAnime.length as number },
      updateQuery: (prev, { fetchMoreResult }) => {
        return { searchAnime: [...prev.searchAnime, ...fetchMoreResult.searchAnime] };
      },
    });
  };

  if (animes) {
    const formatedAnime = animes.searchAnime.map((anime: any) => {
      return { label: anime.romajiTitle, img: anime.xLargeCoverImage, id: anime.id };
    });

    return <GenericList fetchMore={fetchMoreHandler} entityList={formatedAnime} />;
  }

  return <div>loading</div>;
};
