import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { getClassName } from '../app/services/helpers';

const ResultsComponent = (props) => {
  /**
   * Build wiki results into a custom list.
   */
  const getList = () => {
    if (!props.results) return <Fragment></Fragment>;

    let wikiResultsList = props.results[1].map((title, key) => {
      let url  = props.results[3][key];
      let page = url.split('/');
      let to  = '/article/' + (page[page.length -1]);

      return (
        <li key={key}>
          <Link to={to}>
            <p className='title'>{title}</p>
            <p className='url'>{url}</p>
          </Link>
        </li>
      )
    });

    return wikiResultsList;
  }

  return (
    <div className={getClassName(props.results, 'results', 'with-results')}>
      <ul>
        {getList()}
      </ul>
    </div>
  )
}

export default ResultsComponent;