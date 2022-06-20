import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Eye from '../assets/Eye';
import EyeClose from '../assets/EyeClose';
import { addUser } from '../reducers/authSlice';

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [isViewPass, setIsViewPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userInfo = useSelector(store => store.authSlice.user);

  useEffect(() => { // chuyen trang login neu da co user
    if (userInfo) {
      return navigate("/");
    }
  }, [userInfo]);


  const onChangeViewPass = () => setIsViewPass(!isViewPass);

  const onHandleLogin = () => {
    dispatch(addUser({ email, password }));
  };

  const onChangeEmail = (ev) => setEmail(ev.target.value);
  const onChangePassword = (ev) => setPassword(ev.target.value);



  return (
    <div className='mt-16 px-16 auth-screen'>
      <Header />
      <div className='wrap-content'>
        <div className='left'></div>
        <div className='flex w-1/2 justify-center items-center right '>
          <div className='w-4/5 p-10 border'>
            <div className='text-center text-3xl font-bold'>Login</div>
            <div>Email</div>
            <input
              value={email}
              onChange={onChangeEmail}
              placeholder='type here' className='border-black border rounded pl-2 w-full h-10' />
            <div className='mt-2'>Password</div>
            <div className='relative'>
              <input
                value={password}
                onChange={onChangePassword}
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
            <div className='flex justify-center items-center mt-2 flex-col'>
              <div className='flex'>Not a Member? <Link to={'/register'} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</Link></div>
              <div className='mt-2 px-8 text-center'>By continuing, you agree to accept our Privacy Policy & Terms of Service.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
