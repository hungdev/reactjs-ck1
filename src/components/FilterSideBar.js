import React, { useEffect, useState } from 'react';
import { getGender, getBrand } from '../services/api';

export default function Rating() {
  const [genders, setGenders] = useState();
  const [genderSelected, setGenderSelected] = useState();
  const [brands, setBrands] = useState();
  const [brandSelected, setBrandSelected] = useState([]);

  useEffect(() => {
    const getFilterData = async () => {
      const genderData = await getGender();
      const brandData = await getBrand();
      setGenders(genderData.data.data);
      setBrands(brandData.data.data);
    };
    getFilterData();
  }, []);

  const onChangeBrand = (brand) => () => {
    if (brandSelected?.includes(brand._id)) {
      const newBrandSelected = brandSelected.filter((item) => item !== brand._id);
      setBrandSelected(newBrandSelected);
    } else {
      setBrandSelected([...brandSelected, brand?._id]);
    }
  };

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
              id={gender._id}
              name="genders"
              value={gender.name}
              checked={gender._id === genderSelected}
              onChange={() => setGenderSelected(gender._id)}
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
      {brands?.map(brand => (
        <div>
          <input
            className='mr-1 ml-4 mt-4'
            type="checkbox"
            id="option1"
            name="nike"
            checked={brandSelected?.includes(brand._id)}
            onChange={onChangeBrand(brand)}
          />
          <label htmlFor="option1">{brand.name}</label>
        </div>
      ))}
    </div>
  );
}
