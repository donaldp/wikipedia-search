/**
 * Returns a className value based on the state.
 *
 * @param {Array|Object} results Wikipedia results
 * @param {string} first Default class
 * @param {string} last Conditional class
 * @returns {string}
 */
export const getClassName = (results, first, last) => {
  if (results && Object.entries(results).length !== 0) {
    return first + ' ' + last;
  }

  return first;
}
