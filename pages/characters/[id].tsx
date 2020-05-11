import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';
import { characterQuery, Character } from '../../api/character';

// ******************************* TYPE DEFINITION *******************************
type IndexComponent = FunctionComponent<{ character: Character }>;

// ******************************* REACT COMPONENT *******************************
const Index: IndexComponent = ({ character }) => {
  return <div>{character.id}</div>;
};

export default Index;

// ******************************* SSR *******************************
export const getServerSideProps: GetServerSideProps<
  { character: Character } | {},
  { id: string }
> = async ({ params }) => {
  if (params) {
    const characterProps = await characterQuery(params.id);

    return { props: { character: characterProps } };
  }
  return { props: {} };
};
