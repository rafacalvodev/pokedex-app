import React from 'react';

function Footer() {
  return (
    <footer className='p-6 bg-red-600 text-white'>
      <p className='mb-4'>
        Made by{' '}
        <a
          className='text-indigo-300'
          href='https://github.com/rafacalvodev'
          target='_blank'
          rel='noopener noreferrer'>
          Rafael Calvo
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
