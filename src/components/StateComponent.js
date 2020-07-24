import React from 'react';
import { ResultsProvider } from '../app/context/ResultsContext';

const StateComponent = (props) => {
  return (
    <ResultsProvider>
      {props.children}
    </ResultsProvider>
  )
}

export default StateComponent;
