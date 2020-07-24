import React, { useContext } from 'react';
import ResultsContext from '../app/context/ResultsContext';
import ResultsComponent from './ResultsComponent';
import SearchHandler from './handlers/SearchHandler';
import { getClassName } from '../app/services/helpers';

const SearchComponent = () => {
  const { results } = useContext(ResultsContext);

  return (
    <div className='container' >
      <div className={getClassName(results, 'searchContainer', 'with-results')}>
        <div className='search'>
          <img
            className='logoText'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Wikipedia-logo-white.svg/1200px-Wikipedia-logo-white.svg.png'
            alt='Wikipedia'
          />

          <SearchHandler />
        </div>

        <img
          className='logoIcon'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png'
          alt='Wikipedia Logo'
        />
      </div>

      <ResultsComponent results={results} />
    </div>
  )
}

export default SearchComponent;
