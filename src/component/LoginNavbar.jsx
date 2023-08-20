import React from 'react';
import Logo from '../assets/LOGO.svg';
import { Link } from 'react-router-dom';

function LoginNavbar() {
  return (
    <header>
      <div className='flex items-center justify-between px-[5rem] py-[2rem] '>
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className='flex text-[14px] items-center gap-8'>
          <div>
            <p>New to Xpress Rewards?</p>
          </div>
          <div className='text-[#039BF0] border-2 '>
            <Link to='/register'>
            <button className='px-[16px] py-[8px] '>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default LoginNavbar;