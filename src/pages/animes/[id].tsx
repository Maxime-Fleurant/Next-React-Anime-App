// ******************************* IMPORT *******************************
import { FunctionComponent } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import gql from 'graphql-tag';

import { useQuery } from '@apollo/react-hooks';

import { animeQuery, Anime } from '../../common/api/anime';
import withApollo from '../../app/apolloClient';

// ******************************* TYPE DEFINITION *******************************
type IndexComponent = FunctionComponent<{ anime: Anime }>;

// ******************************* REACT COMPONENT *******************************
const Index: IndexComponent = ({ anime }) => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery<{ Page: { reviews: any[] } }>(gql`query {
    Page(page:1, perPage:8){
      reviews(mediaId:${id}, sort:	SCORE_DESC) {
        id
        summary
        body(asHtml:false)
        score
      }
    }
  }`);

  const loadingComponent = <div>loading</div>;
  let indexComponent = loadingComponent;
  let Reviews = loadingComponent;

  if (data) {
    Reviews = (
      <div>
        {data.Page.reviews.map((review: any) => {
          return <div key={review.id}>{review.summary}</div>;
        })}
      </div>
    );
  }

  if (!router.isFallback) {
    const characters = anime.characters.nodes.map((character) => {
      return (
        <Link key={character.id} href="/characters/[id]" as={`/characters/${character.id}`}>
          <a>{character.name.native}</a>
        </Link>
      );
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
        <div>{Reviews}</div>
        <div>{characters}</div>
      </div>
    );
  }

  return indexComponent;
};

export default withApollo(Index);

// ******************************* SSR *******************************
export const getStaticProps: GetStaticProps<
  { anime: Anime } | {},
  { id: string; apolloClient: any }
> = async ({ params, apolloClient }) => {
  const anime = await apolloClient.query({
    query: gql`
      query test($id: string) {
        Media(id: $id, type: ANIME) {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          description
          episodes
          trailer {
            id
            site
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
          genres
          tags {
            id
            name
            description
            rank
          }
          characters(sort: FAVOURITES_DESC, perPage: 10) {
            nodes {
              id
              name {
                first
                last
                full
                native
              }
              image {
                large
                medium
              }
            }
          }
        }
      }
    `,
    variables: { id: params?.id },
  });

  console.log(anime);
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      anime,
    },
  };

  // if (params) {
  //   const animeProps = await animeQuery(params?.id);

  //   return { props: { anime: animeProps } };
  // }

  // return { props: {} };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return { paths: [], fallback: true };
};
