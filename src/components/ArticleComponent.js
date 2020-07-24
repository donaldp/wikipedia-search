import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import backIcon from '../resources/icons/back.svg';
import { getContent } from '../app/services/wikipedia';

const ArticleComponent = (props) => {
  const [ content, setContent ] = useState('');
  const title = props.match.params.page.replace(/_/g, ' ');

  /**
   * Fetch wiki content.
   */
  const fetchWikiContent = async () => {
    let pageContent = await getContent(props.match.params.page);

    setContent(Object.values(pageContent)[0].extract);
  }

  fetchWikiContent();

  return (
    <div className='article'>
      <header className='navigation'>
        <nav>

          <Link to='/'>
            <button>
              <img
                src={backIcon}
                alt='Navigate Back'
              />
            </button>
          </Link>

          <p className='title'>
            {title}
          </p>

        </nav>
      </header>

      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className='content'
      />
    </div>
  )
}

export default withRouter(ArticleComponent);
