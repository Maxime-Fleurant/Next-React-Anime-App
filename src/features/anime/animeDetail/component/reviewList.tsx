import { FunctionComponent } from 'react';
import { Review, Maybe } from '../../../../common/graphqlType';

type TReviewList = FunctionComponent<{ reviewList: Maybe<Review>[] }>;

export const ReviewList: TReviewList = ({ reviewList }) => {
  console.log(reviewList);
  return <div>ldfk</div>;
};
