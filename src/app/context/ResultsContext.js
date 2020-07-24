import React, { createContext, useState } from 'react';

const ResultsContext = createContext();

const ResultsProvider = ({children}) => {
  const [ results, setResults ] = useState(null);

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  )
}

export { ResultsProvider };
export default ResultsContext;
