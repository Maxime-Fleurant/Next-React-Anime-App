const axios = require('axios');
const bluebird = require('bluebird');
const fs = require('fs');
const start = async () => {
  const iterator = Array(50);

  const parallelCallResult = await bluebird.map(iterator, async (val, index) => {
    const graphQuery = await axios.post('https://graphql.anilist.co', {
      query: `query {
        Page(page:${index + 1}, perPage:50){
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          media(type:ANIME, sort:POPULARITY_DESC, format:TV, isAdult:false, popularity_greater:7000) {
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
            characters(sort:FAVOURITES_DESC, perPage:10) {
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
      }`,
    });

    return graphQuery.data.data;
  });

  fs.writeFile('./data.json', JSON.stringify([].concat(...parallelCallResult.map(({ Page }) => Page.media))), () => {
    return 1;
  });
  console.log();
};

start();
