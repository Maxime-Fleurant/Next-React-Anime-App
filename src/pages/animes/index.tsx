// IMPORT
import { FunctionComponent } from 'react';
import Head from 'next/head';
import AnimeSearch from '../../features/anime/animeSearch';

// TYPE DEFINITION
type IndexComponent = FunctionComponent;

// REACT COMPONENT
const GlobalAnimePage: IndexComponent = () => {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta property="og:search" content="Search" key="search" />
      </Head>
      <AnimeSearch />
    </>
  );
};

export default GlobalAnimePage;
