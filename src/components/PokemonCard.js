import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { PokemonTypeColors } from '../globals';

function PokemonCard({ name, url }) {
  const [img, setImg] = useState('');
  const [backimg, setBackimg] = useState('');
  const [id, setId] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);
  const [errorcheck, setErrorCheck] = useState(false);
  let typesList = [];

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setImg(res.data.sprites.front_default);
        setBackimg(res.data.sprites.back_default);
        setId(res.data.id);
        setWeight(res.data.weight);
        setHeight(res.data.height);
        setStats(res.data.stats);
        const TypesArray = res.data.types;
        TypesArray.map((type) => {
          typesList.push(type.type.name);
          return type;
        });
        setTypes(typesList);
      })
      .catch((error) => {
        console.log(error);
        setErrorCheck(true);
      });
    // eslint-disable-next-line
  }, [url]);

  const newHeight = height / 10;
  const newWeight = weight / 10;

  // const backgroundColors = types.map(({ typeName, index }) => {
  //   const [[backgroundColor]] = Object.entries(PokemonTypeColors).filter(
  //     ([key, _]) => key === typeName
  //   );

  //   return backgroundColor;
  // });

  return (
    <>
      <div>
        {errorcheck ? (
          <div className='text-center flex flex-col justify-center justify-items-center items-center'>
            <h3 className='text-gray-50 my-4 text-xl font-semibold'>
              Can't Load Pokemon 😥
            </h3>
            <img
              src='../images/sad-pikachu.jpg'
              alt='Sad Pikachu'
              width='250'
            />
          </div>
        ) : (
          <div className='text-center' style={{ width: '18rem' }}>
            <h3 className='text-xl font-semibold p-3 rounded-t-lg bg-blue-500 text-gray-50'>
              #<span>{id}</span>: {name.toUpperCase()}
            </h3>
            <div className='bg-gray-50 rounded-b-lg'>
              <div className='flex bg-blue-200'>
                <img src={img} alt={name} className='w-48 m-4' />
                <img src={backimg} alt={name} className='w-48 m-4' />
              </div>
              {types.map((typeName, index) => (
                <div className='bg-gray-200'>
                  <p className='capitalize p-2' key={index}>
                    {typeName}
                  </p>
                </div>
              ))}
              <div className='py-4 capitalize font-semibold'>
                <p className='my-1'>
                  Height:{' '}
                  <span className='font-normal lowercase'>{newHeight} m</span>{' '}
                </p>
                <p className='my-1'>
                  Weight:{' '}
                  <span className='font-normal lowercase'>{newWeight} kg</span>{' '}
                </p>
                {stats.map((stat, index) => (
                  <p className='my-1' key={index}>
                    {stat.stat.name}:{' '}
                    <span className='font-normal'>{stat.base_stat}</span>{' '}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// React.memo() is a higher order function, here it is wrapping around the function PokemonCard
// It will export and create a version that only renders upon any changes to the prop {name, url} and useStates
export default React.memo(PokemonCard);
