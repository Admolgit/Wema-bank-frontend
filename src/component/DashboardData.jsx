import React, { useState, useEffect } from 'react';
import Rectangle from '../assets/Icon-rectangle.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useGetDataMutation } from '../redux/actions/dashboardSlice';
import { setDashboardCredentials } from '../redux/slices/dashboardSlice';
import Dots from '../assets/more.svg';
import Pagination from './Pagination/Pagination';
import { Paginate } from './Pagination/Paginate';
import DashboardDropDown from './DashboardDropDown';

function DashboardData() {
  const [dropDown, setDropDown] = useState(false);
  const [count] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState([]);
  const [getData, { isLoading }] = useGetDataMutation();

  const dispatch = useDispatch()

  let dataCount = data.length;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getData().unwrap();
        setData(res);
        dispatch(setDashboardCredentials(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, [dispatch, getData]);

  const handleChange = (page) => {
    setCurrentPage(page);
  };

  if (dataCount === 0)
    return (
      <div className="ml-[4rem] text-treColor2 mt-[3rem]">No data found</div>
    );

  const handleClick = (id) => {
    const singleData = data.find((a) => a.id === Number(id));

    if (singleData.id === id) {
      setDropDown(!dropDown);
    }
  };

  const Datas = Paginate(data, currentPage, count);

  return (
    <div>
      <table className="">
        <thead className="">
          <tr className="grid grid-cols-8 gap-[5rem] items-center border-bottom-2 bg-white px-[20px] py-[10px] text-[14px] leading-[16.94px] font-[700] mx-[3rem] ">
            <td>
              <img src={Rectangle} alt="" />
            </td>
            <td className="w-[150px] ">First Name</td>
            <td className="w-[150px] ">Last Name</td>
            <td className="w-[150px] ">Phone Number</td>
            <td className="w-[150px] ">Partner</td>
            <td className="w-[150px] ">Location</td>
            <td className="w-[150px] ">Status</td>
            <td className="w-[150px] ">Actions</td>
          </tr>
          <hr className=" mx-[3rem]" />
        </thead>
        <tbody>
          {Datas.map((user) => (
            <>
              <tr
                key={user.id}
                className="relative grid grid-cols-8 gap-[5rem] items-center bg-white border-bottom-2 px-[20px] py-[10px] text-[12px] border leading-[16.94px] font-[700] mx-[3rem] text-black "
              >
                <td>
                  <img src={Rectangle} alt="" />
                </td>
                <td className="w-[150px] ">{user.firstName}</td>
                <td className="w-[150px] ">{user.lastName}</td>
                <td className="w-[150px] ">{user.location}</td>
                <td className="w-[150px] ">{user.patner}</td>
                <td className="w-[150px] ">{user.phoneNumber}</td>
                <td
                  className={
                    user.status === 'Active'
                      ? 'w-[50px] p-1 text-[#27A713] bg-[#27A7131A] rounded-[5px] '
                      : user.status === 'Deactivated' ? 'bg-[#EB4335] w-[100px] p-1 rounded-[5px] text-center flex justify-center items-center text-white' : 'bg-[#F2C94C] p-1 w-[140px] text-center flex justify-center items-center text-white rounded-[5px]'
                  }
                >
                  {user.status}
                </td>
                <td
                  className=" cursor-pointer w-[150px]"
                  onClick={() => handleClick(Number(user.id))}
                >
                  <img src={Dots} alt="" />
                </td>
              </tr>
              {Number(user.id) === Number(user.id)
                ? dropDown && <DashboardDropDown data={user} />
                : null}
            </>
          ))}
          <Pagination
            itemsCount={dataCount}
            pageSize={count}
            currentPage={currentPage}
            onPageChange={handleChange}
          />
        </tbody>
      </table>
    </div>
  );
}

export default DashboardData;
