import MovieList from './components/movie-list';
import moviesService from './movie-service';

const list = new MovieList();
const input = document.querySelector('.search-input');
const movieList = document.querySelector('.movies');

input.addEventListener('input', e => {
  const searchText = e.target.value;
  if(!searchText){
    list.clearData(movieList);
    return;
  }
  moviesService.getVideoByText(searchText)
  .then(result => {
    list.renderMovies(result.results);
    list.drawToDom(movieList);
  });
});