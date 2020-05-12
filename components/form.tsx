// ******************************* IMPORT *******************************
import { FunctionComponent, useState } from 'react';

// ******************************* TYPE DEFINITION *******************************
export type FormComponent = FunctionComponent<{}>;

// ******************************* REACT COMPONENT *******************************
const Form: FormComponent = () => {
  const [test1, setText1] = useState('fl');
  console.log(test1);
  return (
    <form onSubmit>
      <input onChange={(e) => setText1(e.target.value)} value={test1} type="text" />
    </form>
  );
};

export default Form;
