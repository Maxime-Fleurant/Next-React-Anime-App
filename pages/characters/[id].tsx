import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';

// ******************************* TYPE DEFINITION *******************************
type IndexComponent = FunctionComponent<{ params: { id: string } }>;

// ******************************* REACT COMPONENT *******************************
const Index: IndexComponent = ({ params }) => {
  return <div>{params.id}</div>;
};

export default Index;

// ******************************* SSR *******************************

export const getServerSideProps: GetServerSideProps<any, { id: string }> = async ({ params }) => {
  return { props: { params: { id: params?.id } } };
};
