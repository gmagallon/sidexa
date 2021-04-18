export function createMoviesDB() {
  const language = 'fr-FR';
  const apiKey = '5bb07fc8a3b82f77d7be14cd5f9ad11b';
  const host = 'https://api.themoviedb.org/3';

  return {
    async getGenders() {
      const response = await fetch(`${host}/genre/movie/list?api_key=${apiKey}&language=${language}`).then(r => r.json());
      return response.genres;
    },
    async getMovies(genderId) {
      const response = await fetch(`${host}/discover/movie?with_genres=${genderId}&api_key=${apiKey}&language=${language}`).then(r => r.json());
      return response.results.map(result => ({
        ...result,
        image: `https://image.tmdb.org/t/p/w200${result.poster_path}`,
      }));
    },
    async getMovieDetails(movieId) {
      const response = await fetch(`${host}/movie/${movieId}?api_key=${apiKey}&language=${language}`).then(r => r.json());
      return {
        ...response,
        image: `https://image.tmdb.org/t/p/w300${response.poster_path}`,
      };
    }
  }
}