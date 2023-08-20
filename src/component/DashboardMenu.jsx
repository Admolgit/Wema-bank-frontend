import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { customToast } from "../utils/customToast";
import LOGO from '../assets/LOGO.svg';
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { SideBarData } from "./SideBarData";
import { clearUserCredentials } from "../redux/slices/authSlice";

const DashboardMenu = () => {
  const [sidebar, setSidebar] = useState(true);
  const [clicked, setClicked] = useState('');

  const dispatch = useDispatch();

  const showSidebar = () => setSidebar(!sidebar);
 
  const handleLogout = async () => {
    try {
      dispatch(clearUserCredentials());
      customToast.info(`You are successfully logged out.`);
      Cookies.remove('user');
    } catch (error) {
      customToast.error(error?.data?.message || error?.error);
    }
  };

  return (
    <div className=''>
      <div>
        <IconContext.Provider value={{
          style: {
            color: '#89969F'
          }
        }}>
          <nav className={sidebar ? "fixed bg-[] flex items-center h-[100vh] ml-[2rem] top-0 z-50 duration-700 " : "fixed bg-[] flex justify-center items-center h-[100vh] top-0 z-50 duration-700"}>
            <ul className='w-[100%]' onClick={showSidebar}>
              <div className="text-center pb-[3rem] mt-[-23rem] ">
                <img className=" " src={LOGO} alt="" />
              </div>
              {SideBarData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={item.title === clicked ? ' pt-[1rem] pb-[1rem] bg-[#489494] text-[#A8B0E7] duration-300 bg-[#F2FAFF] ' : ' pt-[1rem] pb-[1rem] '}
                  >
                    <Link className={item.title === clicked ? ' text-[#AFB6BC] flex items-center gap-2 ' : ' text-[#AFB6BC] flex items-center gap-2 '} to={item.path} onClick={() => setClicked(item.title)}>
                      <NavLink className='flex items-center gap-4 text-[14px] text-[#1A1619]' to={item.path}>
                      <img src={item.icon} alt="" />
                      <span className=''>{item.title}</span>
                      </NavLink>
                    </Link>
                  </li>
                );
              })}
              <button onClick={handleLogout} className="mt-[5rem] bg-[#039BF0] px-4 py-2 text-white text-[12px] ">Logout</button>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default DashboardMenu;
