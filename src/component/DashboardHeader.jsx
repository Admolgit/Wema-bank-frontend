import React from 'react';
import DownImg from '../assets/chevron-down.svg';
import Search from "../assets/search.svg";
import Add from "../assets/Icon-add.svg";

function DashboardHeader() {

  return (
    <div className="flex justify-between mx-[3rem] my-[2rem] ">
      <div className="bg-white ">
        <div className="px-[10px] py-[12px] ">
          <p className="flex items-center gap-[8rem] ">All <span><img src={DownImg} alt="" /></span> </p>
        </div>
      </div>
      <div className=' flex gap-8 '>
        <div className='flex bg-white gap-4 px-[15px] py-[12px] '>
          <img src={Search} alt="" />
          <input type="text" className="text-[12px] leading-[#C4C4C4] " placeholder="Name/Phone no / Location" />
        </div>
        <div className='flex bg-[#039BF0] gap-4 px-[10px] py-[12px] '>
          <button  className='flex' >
            <img src={Add} alt="" /> <span className='text-[14px] text-white '>Add New Verifier</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader;