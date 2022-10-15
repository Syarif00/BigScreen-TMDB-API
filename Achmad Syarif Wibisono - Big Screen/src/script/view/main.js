import '../component/movie.js';
import '../component/search-bar.js';
import '../component/app-bar.js';

import DataSource from '../data/data-source.js';
 
const main = () => {
  
  const searchElement = document.querySelector('search-bar');
  const movieElement = document.querySelector('movie-list');
 
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
 
  const renderResult = results => {
    movieElement.movies = results;
  };
 
  const fallbackResult = message => {
    movieElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;