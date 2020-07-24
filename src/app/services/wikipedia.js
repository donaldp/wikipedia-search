
/**
 * Search wikipedia.
 *
 * @param query  Search keyword.
 */
export const search = (query) => {
  return fetch('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=' + query)
                  .then(response => response.json())
                  .then(response => response )
                  .catch(error => { console.log(error) });
}

/**
* Get page summary.
*
* @param {string} page Page url
*/
export const getSummary = async (page) => {
  let explodedPage = page.split('/');

  return await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + explodedPage[explodedPage.length - 1])
                  .then(response => response.json())
                  .then(response => response.extract_html)
                  .catch(error => { console.log(error) });
}

/**
 * Get page html content.
 *
 * @param {string} title 
 */
export const getContent = (title) => {
  return fetch('https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&html&format=json&titles=' + title)
                  .then(response => response.json())
                  .then(response => response.query.pages)
                  .catch(error => { console.log(error) });
}
