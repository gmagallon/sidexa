import { makeObservable, observable, action } from "mobx"

export class Store {
  genders = [];
  currentGender = null;
  movies = [];
  showMovieDetails = null;
  moviesFilter = '';

  constructor(db) {
    makeObservable(this, {
      genders: observable,
      currentGender: observable,
      movies: observable,
      showMovieDetails: observable,
      moviesFilter: observable,
      init: action,
    })

    this.db = db;
  }

  async searchMovie(filter) {
    this.moviesFilter = filter;
  }

  async init() {
    this.genders = await this.db.getGenders();
  }

  async changeGender(gender) {
    this.currentGender = gender;
    this.movies = (await this.db.getMovies(gender.id)).map(movie => {
      movie.showDetails = async () => {
        this.showMovieDetails = await this.db.getMovieDetails(movie.id);
        this.showMovieDetails.closeDetails = () => this.showMovieDetails = null;
      };
      return movie;
    });
  }
}
