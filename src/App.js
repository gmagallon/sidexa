import './App.css';
import {useEffect} from 'react';

import {Menu} from './components/Menu';
import {createMoviesDB} from './app/create-movies-db';
import {Store} from './app/Store';
import {Content} from './components/Content';
import {MovieDetailsPopin} from './components/MovieDetailsPopin';
import {Search} from './components/Search';

const moviesApi = createMoviesDB();
const store = new Store(moviesApi);

function App() {

  useEffect(async () => {
    await store.init();

    if(store.genders.length > 0) {
      await store.changeGender(store.genders[0]);
    }
  }, [])

  return (
    <>
      <div className="App">
          <div className="Navigation">
            <Menu store={store} />
          </div>
          <div className="Content">
            <Search store={store} />
            <Content store={store} />
          </div>
      </div>
      <MovieDetailsPopin store={store} />
    </>
  );
}

export default App;
