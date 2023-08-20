import React from 'react';
import DashboardMenu from './DashboardMenu';
import DashboardNav from './DashboardNav';
import DashboardHeader from './DashboardHeader';
import DashboardData from './DashboardData';

function MainPage() {
  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='col-span-2 bg-white h-screen pl-2'>
          <DashboardMenu />
        </div>
        <div className='col-span-10'>
          <DashboardNav />
          <DashboardHeader />
          <DashboardData />
        </div>
      </div>
    </div>
  )
}

export default MainPage