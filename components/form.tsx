// ******************************* IMPORT *******************************
import { FunctionComponent, useState } from 'react';

// ******************************* TYPE DEFINITION *******************************
export type FormComponent = FunctionComponent<{}>;

// ******************************* REACT COMPONENT *******************************
const Form: FormComponent = () => {
  const [test1, setText1] = useState('fl');
  console.log(test1);
  return <div>ds</div>;
};

export default Form;
