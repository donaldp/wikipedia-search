import React, { useContext } from 'react';
import ResultsContext from '../../app/context/ResultsContext';
import { search } from '../../app/services/wikipedia';

const SearchButton = (props) => {
  const { setResults } = useContext(ResultsContext);

  /**
   * Fetch wikipedia results.
   */
  const getWikipediaResults = async () => {
    let searchResults = await search(props.query);

    setResults(searchResults);
  }

  return (
    <button onClick={e => getWikipediaResults()}>
      <svg viewBox='0 0 1024 1024'>
        <path
          className='path1'
          d='M848.471 928l-263.059-263.059c-48.941 36.706-110.118
            55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312
            312-312c171.294 0 312 140.706 312 312 0 67.294-24.471
            128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623
            408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091
            218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364
            0-218.455 97.091-218.455 218.455z'
        />
      </svg>
    </button>
  )
}

export default SearchButton;