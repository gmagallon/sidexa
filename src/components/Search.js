import { observer } from "mobx-react-lite"

export const Search = observer(({store}) => {
    return (
      <>
        <input className="Search" placeholder="Recherche" list="search-movies" type="text" onChange={e => {
          store.searchMovie(e.target.value);
        }} />
        <datalist id="search-movies">
          {store.movies.map(movie => (
            <option key={movie.id} value={movie.title} />
          ))}
        </datalist>
      </>
    )
  })


