import axios from 'axios';

// ******************************* TYPE DEFINITION *******************************
export type ReviewAxiosQuery = {
  data: {
    Page: {
      reviews: Array<Review>;
    };
  };
};

export type Review = {
  id: number;
  summary: string;
  body: string;
  score: number;
};

type ReviewQuery = (path: string, id: string) => Promise<Review[]>;

// ******************************* IMPLEMENTATION *******************************
export const reviewQuery: ReviewQuery = async (path, id) => {
  const query = `query {
    Page(page:1, perPage:8){
      reviews(mediaId:${id}, sort:	SCORE_DESC) {
        id
        summary
        body(asHtml:false)
        score
      }
    }
  }`;

  const graphqlQuery = await axios.post<ReviewAxiosQuery>('https://graphql.anilist.co', {
    query,
  });

  return graphqlQuery.data.data.Page.reviews;
};
