import React, { useState, useMemo } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';
import {AppContext} from './AppContext';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [active, setActive] = useState(true);
  const [queryTerm, setQueryTerm] = useState('');
  const ProviderValue = useMemo(() => ({
    // useMemo calls the passed function only when necessary and returns cached values
    // of active,setActive,queryTerm and setQueryTerm
    active, setActive, queryTerm, setQueryTerm
  }),
    // only when the array of dependencies in here changes.
  [active, setActive, queryTerm, setQueryTerm]);



  return(
    <div className='App bg-gray-700'>
      {/*Provider can be connected to many consumers. Consumers that are descendants of
         a Provider will re-render whenever the Provider's `value` prop changes */}
      <AppContext.Provider value={ProviderValue}>
        <title>Pokedex App</title>
        <Header />

        {active ? <PokemonList /> : <Search />}
      </AppContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
