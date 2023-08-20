import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Alert from '../assets/Alert.svg';
import ProfilePic from '../assets/Profile-Picture.svg';
import DownImg from '../assets/chevron-down.svg';

function DashboardNav() {

  const { dashboard } = useSelector((state) => state.dashboard);
  const dashbordCount = dashboard.length;

  return (
    <div className="flex justify-between px-[3rem] py-[1rem] bg-white ">
      <div>
        <h1 className='text-[24px] leading-[29.05px] font-[700] flex items-center gap-4 '>Verifiers <span className='text-[12px] font-[400] leading-[16.56px] text-[#039BF0] bg-[FEFAFE] '>{dashbordCount}</span> </h1>
      </div>
      <div className="flex items-center gap-4 ">
        <div><img src={Alert} alt="" /></div>
        <div className="flex items-center gap-4 ">
          <div><img src={ProfilePic} alt="" /></div>
          <div><img src={DownImg} className='' alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNav;