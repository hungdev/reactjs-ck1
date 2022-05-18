import React, { useState } from 'react';

export default function Child(props) {
  const [gender, setGender] = useState('male');
  const [animal, setAnimal] = useState('dog');
  const [so1, setSo1] = useState(1);
  const [so2, setSo2] = useState(2);
  // props = {logo: 'tiki'}
  console.log(props);
  const sendToP = () => {
    props.onGetGender(gender);
  };

  const onIncreaseAge = () => {
    props.increaseAge();
  };

  const sendSum = () => {
    props.getSum(so1 + so2);
  };

  return (
    <div>
      <div onClick={sendSum}>click de ra tong</div>
      <div onClick={sendToP}>Send to parent</div>
      <div>Child: {props.logo}</div>
      <div>this is: {props.name1}</div>
      <div>This is father age: {props.ageOfFather}</div>
      <div style={{ color: 'red' }} onClick={onIncreaseAge}>Tang age</div>
    </div>
  );
}
