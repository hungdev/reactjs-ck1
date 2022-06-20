import React, { useState } from 'react';
import Header from "../components/Header";
import Eye from '../assets/Eye';
import EyeClose from '../assets/EyeClose';

export default function Login() {
  const [isViewPass, setIsViewPass] = useState(false);

  const onChangeViewPass = () => setIsViewPass(!isViewPass);

  const onHandleLogin = () => {

  };

  return (
    <div className='mt-16 px-16 auth-screen'>
      <Header />
      <div className='wrap-content'>
        <div className='left'>

        </div>
        <div className='flex w-1/2 justify-center items-center right '>
          <div className='w-4/5 p-10 border'>
            <div className='text-center text-3xl font-bold'>Login</div>
            <div>Email</div>
            <input placeholder='type here' className='border-black border rounded pl-2 w-full h-10' />
            <div className='mt-2'>Password</div>
            <div className='relative'>
              <input
                placeholder='Must be at least 8 characters'
                className='border-black border rounded pl-2 w-full h-10'
                type={isViewPass ? 'text' : 'password'}
              />
              <div onClick={onChangeViewPass} className='eye-input'> {isViewPass ? <EyeClose /> : <Eye />}</div>
            </div>
            <div
              onClick={onHandleLogin}
              className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Login
            </div>
            <div className='rounded w-full bg-gray-800 h-14 flex justify-center items-center uppercase font-medium text-white cursor-pointer mt-4'>
              Login as guest
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
