// IMPORT
import { FunctionComponent, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updateFormSelection } from './animeListSlice';

import GlobalForm from './GlobalForm';

// TYPE DEFINITION
type TListContainer = FunctionComponent;

// REACT COMPONENT
const FormContainer: TListContainer = () => {
  useEffect(() => {
    console.log('FormContainer Update');
  });

  const dispacth = useDispatch();
  const changeHandler = (values: any) => {
    dispacth(updateFormSelection(values));
  };

  return (
    <div>
      <GlobalForm changeHandler={changeHandler} />
    </div>
  );
};

export default FormContainer;
