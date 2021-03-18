import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';

function Header() {
  const [query, setQuery] = useState('');
  const { setActive, setQueryTerm } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      setActive(false);
    } else {
      setActive(true);
    }
    setQueryTerm(query);
  };

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <nav className='p-5 flex flex-col justify-center justify-items-center items-center bg-red-600 text-gray-50'>
      <a className='text-center mt-3' href='/'>
        <img src='../images/logo.svg' alt='Pokeball logo' width='80' />
      </a>
      <h1 className='text-5xl font-bold text-gray-50 m-5'>Your Pokédex App!</h1>
      <p className='text-xl text-gray-50'>
        You can use the buttons to go through the list, or search in the field
        below to look for your favorite pokémon.
      </p>
      <p className='text-lg my-2'>
        App made using the{' '}
        <a
          className='text-indigo-300 '
          href='https://pokeapi.co/'
          target='_blank'
          rel='noopener noreferrer'>
          Pokémon API
        </a>
        .
      </p>
      <p className='text-lg mt-2'>
        For more info, you can go to{' '}
        <a
          href='https://bulbapedia.bulbagarden.net/wiki/Main_Page'
          className='text-indigo-300'
          target='_blank'
          rel='noopener noreferrer'>
          Bulbapedia
        </a>
        .
      </p>
      <form className='flex flex-col p-6' onSubmit={handleSubmit}>
        <label className='text-gray-50 mb-2'>
          Search for your favorite pokémon:{' '}
        </label>
        <input
          type='text'
          placeholder='i.e.: Pikachu'
          className='p-2 rounded-md text-black'
          onChange={handleChange}
          value={query}
        />
        <button
          className='m-3 px-1 py-2 bg-blue-500 rounded rounded-lg text-gray-50 text-lg font-semibold'
          onSubmit={handleChange}>
          Search
        </button>
      </form>
    </nav>
  );
}

export default Header;
