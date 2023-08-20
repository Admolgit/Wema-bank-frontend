import React from "react";
import Down from '../assets/chevron-down.svg';

function DashboardDropDown(props) {
  const {data} = props;

  const handleEdit = (id) => {
    console.log("Edit", id)
  }
  const handleView = (id) => {
    console.log("Edit", id)
  }
  const handleDelete = (id) => {
    console.log("Edit", id)
  }

  return (
    <div className='absolute text-[#1A1A1A] top-[18rem] z-20 bg-white  right-12 p-4 text-[14px] font-500'>
      <div className="flex gap-6 items-center">
        <p className="text-[12px] flex gap-[5rem] items-center ">All <span><img src={Down} alt="" /></span> </p>
      </div>
      <ul className='pt-1 leading-9'>
        <li onClick={() => handleEdit(data.id)} >Active Verifiers</li>
        <li onClick={() => handleView(data.id)}>Pending Verifiers</li>
        <li onClick={() => handleDelete(data.id)}>Deactivated Verifiers</li>
      </ul>
    </div>
  );
}

export default DashboardDropDown;
