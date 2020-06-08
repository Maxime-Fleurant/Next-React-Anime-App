import { FunctionComponent } from 'react';
import SplashBanner from '../features/splash/splashBanner';
import AnimeSearch from '../features/anime/animeSearch';

const Index: FunctionComponent = () => {
  return (
    <div>
      <SplashBanner />
      <AnimeSearch />
    </div>
  );
};

export default Index;
