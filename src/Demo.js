import React, { useState, useRef } from 'react';
import Child from './Child';

export default function Demo() {
  const childRef = useRef();

  const [name, setName] = useState('facebook');
  const [age, setAge] = useState(0);
  const [sum, setSum] = useState(0);

  const [genderDisplay, setGenderDisplay] = useState();

  const getGender = (data) => {
    setGenderDisplay(data);
  };

  const handleIncreaseAge = () => {
    setAge(age + 1);
  };

  const onGetSum = (tong) => {
    setSum(tong);
  };

  return (
    <div>
      <div>Age: {age}</div>
      <Child
        logo='tiki'
        name1={name}
        onGetGender={getGender}
        increaseAge={handleIncreaseAge}
        getSum={onGetSum}
      />
      <div>this is gender: {genderDisplay}</div>
      <div>tong 2 so la:{sum} </div>
    </div>
  );
}

/**
 * js: 
 * let abc = 10
 * abc = 20
 * 
 * state:
 * const [abc, setAbc] = useState(10)
 * setAbc(20)
 * 
 * props
 * 
 */