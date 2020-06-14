import { Col, Row } from 'antd';
import { FunctionComponent } from 'react';

export interface IReview {
  id: number;
  summary: string;
  body: string;
  score: number;
}

type TReviewList = FunctionComponent<{ reviewList: IReview[] }>;

export const ReviewList: TReviewList = ({ reviewList }) => {
  const jsxReviewList = reviewList.map((review) => {
    return (
      <Col span={24} key={review.id} style={{ border: '1px solid black' }}>
        {review.summary}
      </Col>
    );
  });

  return <Row>{jsxReviewList}</Row>;
};
