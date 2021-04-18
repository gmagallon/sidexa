import { observer } from "mobx-react-lite"

export const MovieDetailsPopin = observer(({store}) => {
  if(!store.showMovieDetails) return null;
  const movie = store.showMovieDetails;

  return (
    <div className="MovieDetailsPopin">
      <div className="MovieDetailsPopin-content">
        <header>
          <h1>{movie.title}</h1>
          <button onClick={() => movie.closeDetails()}>Fermer</button>
        </header>
        <div className="MovieDetailsPopin-details">
          <img src={movie.image} />
          <div>
            <h3>Synopsis</h3>
            {movie.overview}
            <br />
            <hr />
            <p>Budget : {movie.budget}$</p>
            <p>Produit par : {movie.production_companies.map(c => c.name).join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  )
})