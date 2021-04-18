import { observer } from "mobx-react-lite"

export const Content = observer(({store}) => {
  return (
    <div className="Movies">
      <h2>{store.currentGender && store.currentGender.name}</h2>
      <div className="Movies-List">
        {store.movies
          .filter(movie => store.moviesFilter ? movie.title.toLowerCase().includes(store.moviesFilter.toLowerCase()) : true)
          .map(movie => (
          <div className="Movies-Movie" key={movie.id} onClick={() => movie.showDetails()}>
            <img src={movie.image} />
            <strong>{movie.title}</strong>
          </div>
        ))}
      </div>
    </div>
  )
})