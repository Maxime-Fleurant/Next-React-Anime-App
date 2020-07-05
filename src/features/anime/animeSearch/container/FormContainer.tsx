// IMPORT
import { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { updateFormSelection } from '../redux/animeListSlice';

import GlobalForm, { IFormState } from '../component/GlobalForm';

// TYPE DEFINITION
type TListContainer = FunctionComponent;

// REACT COMPONENT
const FormContainer: TListContainer = () => {
  const dispacth = useDispatch();
  const changeHandler = (values: IFormState): void => {
    dispacth(updateFormSelection(values));
  };

  return <GlobalForm changeHandler={changeHandler} />;
};

export default FormContainer;
