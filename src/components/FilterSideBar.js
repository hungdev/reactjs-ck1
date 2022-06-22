import React, { useEffect, useState } from 'react';
import { getGender } from '../services/api';

export default function Rating() {
  const [genders, setGenders] = useState();
  const [genderSelected, setGenderSelected] = useState();

  useEffect(() => {
    const getFilterData = async () => {
      const result = await getGender();
      console.log('result', result);
      setGenders(result.data.data);
    };
    getFilterData();
  }, []);

  return (
    <div className='w-72 mr-10'>
      <div className='mt-6 flex flex-row items-center justify-between'>
        <div className='text-2xl font-bold'>Filter</div>
        <div className='cursor-pointer mr-8'>Clear all</div>
      </div>

      <div className='font-bold mt-2'>Gender</div>

      <div className=''>
        {genders?.map(gender => (
          <div>
            <input
              className='mr-1 ml-4 mt-4'
              type="radio"
              id={gender.name}
              name="genders"
              value={gender.name}
              checked={gender.name === genderSelected}
              onChange={() => setGenderSelected(gender.name)}
            />
            <label htmlFor={gender.name}>{gender.name}</label>
          </div>
        ))}
      </div>

      <div className='font-bold mt-2'>Rating</div>
      <div className="flex flex-row justify-between w-11/12 mt-4">
        {[1, 2, 3, 4, 5].map((item) => (
          <p key={item}>
            {item}
            <sup>⭐</sup>
          </p>
        ))}
      </div>
      <div className="">
        <input
          type="range"
          className="w-11/12"
          min={1}
          max={5}
        // value={2}
        // onChange={(e) => { }}
        />
      </div>

      <div className='font-bold mt-2'>Brand</div>
      <div>
        <input
          className='mr-1 ml-4 mt-4'
          type="checkbox"
          id="option1"
          name="nike"
        // checked={'nike'}
        // onChange={() => {}}
        />
        <label htmlFor="option1">Nike</label>
      </div>
      <div>
        <input
          className='mr-1 ml-4 mt-4'
          type="checkbox"
          id="option2"
          name="adidas"
        // checked={'adidas'}
        // onChange={() => {}}
        />
        <label htmlFor="option2">Adidas</label>
      </div>
      <div>
        <input
          className='mr-1 ml-4 mt-4'
          type="checkbox"
          id="option3"
          name="puma"
        // checked={'puma'}
        // onChange={() => {}}
        />
        <label htmlFor="option3">Puma</label>
      </div>
      <div>
        <input
          className='mr-1 ml-4 mt-4'
          type="checkbox"
          id="option4"
          name="vans"
        // checked={'vans'}
        // onChange={() => {}}
        />
        <label htmlFor="option4">Vans</label>
      </div>
    </div>
  );
}
